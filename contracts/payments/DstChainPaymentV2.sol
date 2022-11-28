// SPDX-License-Identifier: GPL-3.0-only

pragma solidity >=0.8.0;

import './DstChainPayment.sol';
import '@openzeppelin/contracts-upgradeable/utils/cryptography/draft-EIP712Upgradeable.sol';
import '../proxy/AdminWrapper.sol';

contract DstChainPaymentV2 is DstChainPayment, AdminWrapper, EIP712Upgradeable {
	using ResourceData for ResourceData.ValuePayloads;
	using SafeMathUpgradeable for uint256;
	using SafeERC20Upgradeable for IERC20Upgradeable;

	bytes32 public voucherTypedHash;

	// provider -> nonce -> amount
	mapping(address => mapping(uint256 => uint256)) public vouchers;

	function initializeEIP712(string memory name, string memory version, string memory types) external onlyAdmin reinitializer(10) {
		__EIP712_init(name, version);
		voucherTypedHash = keccak256(bytes(types));
	}

	/// @dev pay from source chain only called by message receiver
	/// @param message payment payload message bytes
	function celerExec(bytes calldata message) external override onlyMessageReceiver whenNotPaused {
		(address provider, bytes32 account, ResourceData.ValuePayload[] memory payloads, uint256 nonce, uint256 amount, bytes memory signature) = decodeMessage(message);
		IERC20Upgradeable token = router.Token();
		uint256 value = _pay(token, provider, account, payloads, nonce, amount, signature);
		emit Paid(provider, account, payloads, value, nonce, amount);
	}

	function pay(address provider, bytes32 account, ResourceData.ValuePayload[] memory payloads, uint256 nonce, uint256 amount, bytes memory signature) external whenNotPaused nonReentrant returns (uint256 value) {
		IERC20Upgradeable token = router.Token();
		value = _pay(token, provider, account, payloads, nonce, amount, signature);
		token.safeTransferFrom(msg.sender, address(this), value);
		emit Paid(provider, account, payloads, value, nonce, amount);
	}

	function _pay(IERC20Upgradeable token, address provider, bytes32 account, ResourceData.ValuePayload[] memory payloads, uint256 nonce, uint256 amount, bytes memory signature) internal returns(uint256 value){
		require(router.ProviderController().accountExists(provider, account), 'DstChainPayment: nonexistent account');
		value = _processPayloads(provider, account, payloads);
		require(value >= amount, 'DstChainPayment: voucher amount is less than resource value');
		if (amount > 0) {
			require(vouchers[provider][nonce] == 0, 'DstChainPayment: nonce exists');
			bytes32 hash = hashTypedDataV4ForVoucher(provider, nonce, amount);
			require(router.ProviderRegistry().isValidSignature(provider, hash, signature), 'DstChainPayment: invalid signature');
			value -= amount;
			vouchers[provider][nonce] = amount;
		}
		value = ResourceData.matchResourceToToken(token, value);
		providerBalances[provider] = providerBalances[provider] + value;
		fees[provider][account] = fees[provider][account] + value;
	}

	function _processPayloads(
		address provider,
		bytes32 account,
		ResourceData.ValuePayload[] memory payloads
	) internal returns (uint256 value) {
		require(payloads.length > 0, 'DstChainPayment: invalid payloads');
		IResourcePriceAdaptor adaptor = router.ResourcePriceAdaptor();
		for (uint256 i = 0; i < payloads.length; i++) {
			ResourceData.ValuePayload memory payload = payloads[i];
			if (payload.resourceType == ResourceData.ResourceType.BuildingTime) {
				require(payload.values.length == 1, 'DstChainPayment: invalid value length for BuildingTime');
				uint256 amount = adaptor.getAmountOf(provider, payload.resourceType, payload.values[0]);
				router.BuildingTimeController().paymentAllocate(provider, account, amount);
			} else if (payload.resourceType == ResourceData.ResourceType.ARStorage) {
				require(payload.values.length == 1, 'DstChainPayment: invalid value length for ARStorage');
				uint256 amount = adaptor.getAmountOf(provider, payload.resourceType, payload.values[0]);
				router.ARStorageController().paymentAllocate(provider, account, amount);
			} else if (payload.resourceType == ResourceData.ResourceType.Bandwidth) {
				require(payload.values.length == 1, 'DstChainPayment: invalid value length for Bandwidth');
				uint256 amount = adaptor.getAmountOf(provider, payload.resourceType, payload.values[0]);
				router.BandwidthController().paymentAllocate(provider, account, amount);
			} else if (payload.resourceType == ResourceData.ResourceType.IPFSStorage) {
				require(payload.values.length == 2, 'DstChainPayment: invalid value length for IPFSStorage');
				(uint256 amount, uint256 expiration) = ipfsAllocations(provider, account, payload.values[0], payload.values[1]);
				router.IPFSStorageController().paymentAllocate(provider, account, amount, expiration);
			} else {
				revert('DstChainPayment: unknown resource type');
			}

			for (uint256 j = 0; j < payload.values.length; j++) {
				value = value.add(payload.values[j]);
			}
		}
	}

	function decodeMessage(bytes memory message)
		public
		pure
		returns (
			address provider,
			bytes32 account,
			ResourceData.ValuePayload[] memory payloads,
			uint256 nonce,
			uint256 amount,
			bytes memory signature
		)
	{
		(provider, account, payloads, nonce, amount, signature) = abi.decode(message, (address, bytes32, ResourceData.ValuePayload[], uint256, uint256, bytes));
	}

	/// @dev calculate fee for ipfs storage and expiration
	/// @param provider provider address
	/// @param account user account
	/// @param amount ipfs storage amount
	/// @param expiration ipfs expiration(in seconds)
	/// @return storageFee ipfs storage fee
	/// @return expirationFee ipfs expiration fee
	function ipfsAlloctionsFee(
		address provider,
		bytes32 account,
		uint256 amount,
		uint256 expiration
	) public view override returns (uint256 storageFee, uint256 expirationFee) {
		IIPFSStorageController controller = router.IPFSStorageController();
		address p = provider;
		bytes32 a = account;
		if (controller.isExpired(p, a)) {
			require(amount > 0 && expiration > 0, 'DstChainPayment: invalid params for expired account');
			storageFee = getValueOf(p, ResourceData.ResourceType.IPFSStorage, amount);
			expirationFee = storageFee.mul(expiration);
		} else {
			require(amount > 0 || expiration > 0, 'DstChainPayment: invalid params');
			storageFee = amount.mul(getValueOf(p, ResourceData.ResourceType.IPFSStorage, controller.availableExpiration(p, a)));
			expirationFee = expiration.mul(getValueOf(p, ResourceData.ResourceType.IPFSStorage, controller.balanceOf(p, a).add(amount)));
		}
	}

	/// @dev calculate ipfs storage and expiration with storage fee and expiration fee
	/// @param provider provider address
	/// @param account user account
	/// @param storageFee storage fee
	/// @param expirationFee expiration fee
	/// @return amount ipfs storage amount
	/// @return expiration ipfs expiration(in seconds)
	function ipfsAllocations(
		address provider,
		bytes32 account,
		uint256 storageFee,
		uint256 expirationFee
	) public view override returns (uint256 amount, uint256 expiration) {
		IIPFSStorageController controller = router.IPFSStorageController();
		address p = provider;
		bytes32 a = account;
		if (controller.isExpired(p, a)) {
			require(storageFee > 0 && expirationFee > 0, 'DstChainPayment: invalid params for expired account');
			amount = storageFee.div(priceOf(p, ResourceData.ResourceType.IPFSStorage));
			expiration = expirationFee.div(storageFee);
		} else {
			require(storageFee > 0 || expirationFee > 0, 'DstChainPayment: invalid params');
			amount = storageFee.div(getValueOf(p, ResourceData.ResourceType.IPFSStorage, controller.availableExpiration(p, a)));
			expiration = expirationFee.div(getValueOf(p, ResourceData.ResourceType.IPFSStorage, controller.balanceOf(p, a).add(amount)));
		}
	}

	/// @dev return balance of provider
	/// @param provider provider address
	/// @return balance of provider
	function balanceOf(address provider) public view override returns (uint256) {
		require(router.ProviderRegistry().isProvider(provider), 'DstChainPayment: nonexistent provider');
		return providerBalances[provider];
	}

	/// @dev return resource price
	/// @param provider provider address
	/// @param resourceType resource type
	/// @return resource price
	function priceOf(address provider, ResourceData.ResourceType resourceType) public view override returns (uint256) {
		IResourcePriceAdaptor adaptor = router.ResourcePriceAdaptor();
		return adaptor.priceOf(provider, resourceType);
	}

	/// @dev return value of amount resource
	/// @param provider provider address
	/// @param resourceType resource type
	/// @param amount resource amount
	/// @return token value
	function getValueOf(
		address provider,
		ResourceData.ResourceType resourceType,
		uint256 amount
	) public view override returns (uint256) {
		IResourcePriceAdaptor adaptor = router.ResourcePriceAdaptor();
		return adaptor.getValueOf(provider, resourceType, amount);
	}

	/// @dev return resource amount with value
	/// @param provider provider address
	/// @param resourceType resource type
	/// @param value token value
	/// @return resource amount
	function getAmountOf(
		address provider,
		ResourceData.ResourceType resourceType,
		uint256 value
	) public view override returns (uint256) {
		IResourcePriceAdaptor adaptor = router.ResourcePriceAdaptor();
		return adaptor.getAmountOf(provider, resourceType, value);
	}

	function hashVoucherTypes(
		address provider,
		uint256 nonce,
		uint256 amount
	) public view returns (bytes32) {
		return keccak256(abi.encode(voucherTypedHash, provider, nonce, amount));
	}

	function hashTypedDataV4ForVoucher(
		address provider,
		uint256 nonce,
		uint256 amount
	) public view returns (bytes32) {
		return _hashTypedDataV4(hashVoucherTypes(provider, nonce, amount));
	}

	function providerBalance(address provider) public view returns(uint256) {
		return providerBalances[provider];
	}

	function fee(address provider, bytes32 account) public view returns(uint256) {
		return fees[provider][account];
	}

}