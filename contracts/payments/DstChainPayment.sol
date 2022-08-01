// SPDX-License-Identifier: GPL-3.0-only

pragma solidity >=0.8.0;

import '@openzeppelin/contracts-upgradeable/security/ReentrancyGuardUpgradeable.sol';
import '../interfaces/IDstChainPayment.sol';
import '../govers/RouterWrapper.sol';
import '../access/OwnerWithdrawable.sol';
import '../access/Pauser.sol';
import '../libraries/ResourceData.sol';

/// @author Alexandas
/// @dev Dst chain payment contract
contract DstChainPayment is IDstChainPayment, ReentrancyGuardUpgradeable, OwnerWithdrawable, Pauser, RouterWrapper {
	using ResourceData for ResourceData.ValuePayloads;
	using SafeMathUpgradeable for uint256;
	using SafeERC20Upgradeable for IERC20Upgradeable;

	mapping(address => uint256) internal providerBalances;

	mapping(address => mapping(bytes32 => uint256)) internal fees;

	constructor() initializer {}

	/// @dev proxy initialize function
	/// @param owner contract owner
	/// @param pauser contract pauser
	/// @param router router contract
	function initialize(
		address owner,
		address pauser,
		IRouter router
	) external initializer {
		_transferOwnership(owner);
		__Init_Pauser(pauser);
		__Init_Router(router);
	}

	/// @dev pay from source chain only called by message receiver
	/// @param _token token address
	/// @param dstAmount token amount
	/// @param message payment payload message bytes
	function payFromSourceChain(
		IERC20Upgradeable _token,
		uint256 dstAmount,
		bytes calldata message
	) external override onlyMessageReceiver whenNotPaused nonReentrant {
		IERC20Upgradeable token = router.Token();
		require(token == _token, 'DstChainPayment: invalid token');
		(address provider, uint64 nonce, bytes32 account, ResourceData.ValuePayload[] memory payloads) = decodeSourceChainMessage(message);
		uint256 value = ResourceData.matchTokenToResource(token, dstAmount);
		PaymentPayload memory payload = PaymentPayload(provider, nonce, account, ResourceData.ValuePayloads(payloads).convertSourceChainPayloads(value));
		_processPayloads(provider, payload.account, payload.payloads);
		_pay(provider, account, token, dstAmount);

		emit Paid(token, payload);
	}

	/// @dev pay from source chain only called by message receiver
	/// @param message payment payload message bytes
	function celerExec(bytes calldata message) external override onlyMessageReceiver whenNotPaused {
		(address provider, bytes32 account, ResourceData.ValuePayload[] memory payloads) = decodeMessage(message);
		IERC20Upgradeable token = router.Token();
		_payV2(token, provider, account, payloads);

		emit PaidV2(provider, account, payloads);
	}

	/// @dev pay on dst chain
	/// @param payload payment payload
	/// @return value payment value
	function pay(PaymentPayload memory payload) external override whenNotPaused nonReentrant returns (uint256 value) {
		value = _processPayloads(payload.provider, payload.account, payload.payloads);
		IERC20Upgradeable token = router.Token();
		value = ResourceData.matchResourceToToken(token, value);
		_pay(payload.provider, payload.account, token, value);

		emit Paid(token, payload);
	}

	/// @dev pay on dst chain
	/// @param provider provider address
	/// @param account user account
	/// @param payloads payment payloads
	/// @return value total token value
	function payV2(address provider, bytes32 account, ResourceData.ValuePayload[] memory payloads) external override whenNotPaused nonReentrant returns (uint256 value) {
		IERC20Upgradeable token = router.Token();
		uint256 value = _payV2(token, provider, account, payloads);
		token.safeTransferFrom(msg.sender, address(this), value);

		emit PaidV2(provider, account, payloads);
	}

	function _pay(
		address provider,
		bytes32 account,
		IERC20Upgradeable token,
		uint256 amount
	) internal {
		require(router.ProviderController().accountExists(provider, account), 'DstChainPayment: nonexistent account');
		providerBalances[provider] = providerBalances[provider].add(amount);
		token.safeTransferFrom(msg.sender, address(this), amount);
	}

	function _payV2(IERC20Upgradeable token, address provider, bytes32 account, ResourceData.ValuePayload[] memory payloads) internal returns(uint256 value){
		require(router.ProviderController().accountExists(provider, account), 'DstChainPayment: nonexistent account');
		value = _processPayloads(provider, account, payloads);
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
		view
		returns (
			address provider,
			bytes32 account,
			ResourceData.ValuePayload[] memory payloads
		)
	{
		(provider, account, payloads) = abi.decode(message, (address, bytes32, ResourceData.ValuePayload[]));
	}

	/// @dev decode source chain message
	/// @param message message bytes
	/// @return provider provider address
	/// @return nonce nonce
	/// @return account user account
	/// @return payloads payment payloads
	function decodeSourceChainMessage(bytes memory message)
		public
		view
		returns (
			address provider,
			uint64 nonce,
			bytes32 account,
			ResourceData.ValuePayload[] memory payloads
		)
	{
		(provider, nonce, account, payloads) = abi.decode(message, (address, uint64, bytes32, ResourceData.ValuePayload[]));
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
}
