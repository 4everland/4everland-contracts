// SPDX-License-Identifier: UNLICENSE

pragma solidity >=0.8.0;

import '@openzeppelin/contracts-upgradeable/security/ReentrancyGuardUpgradeable.sol';
import '@openzeppelin/contracts-upgradeable/token/ERC20/utils/SafeERC20Upgradeable.sol';
import '@openzeppelin/contracts-upgradeable/utils/math/SafeMathUpgradeable.sol';
import '@openzeppelin/contracts-upgradeable/utils/cryptography/draft-EIP712Upgradeable.sol';

import '../libraries/ResourceData.sol';
import '../govers/RouterWrapper.sol';
import '../access/OwnerWithdrawable.sol';

/// @author Alexandas
/// @dev Billing contract
contract Billing is IBilling, OwnerWithdrawable, EIP712Upgradeable, ReentrancyGuardUpgradeable, RouterWrapper {
	using SafeMathUpgradeable for uint256;
	using SafeERC20Upgradeable for IERC20Upgradeable;

	/// @dev keccak256("Billing(address provider,bytes32 account,bytes bills,uint256 timeout,uint64 nonce)")
	bytes32 public override billingTypesHash;

	/// @dev provider nonces for account
	mapping(address => mapping(bytes32 => mapping(uint64 => bool))) internal nonces;

	/// @dev provider balances
	mapping(address => uint256) internal balances;

	/// @dev proxy initialize function
	/// @param owner contract owner
	/// @param name EIP712 name
	/// @param version EIP712 version
	/// @param router router contract address
	function initialize(
		address owner,
		string memory name,
		string memory version,
		string memory billingTypes,
		IRouter router
	) external initializer {
		_transferOwnership(owner);
		__EIP712_init(name, version);
		__Init_Billing_Typed_Hash(billingTypes);
		__Init_Router(router);
	}

	/// @dev initialize billing types hash
	/// @param types billing types
	function __Init_Billing_Typed_Hash(string memory types) internal onlyInitializing {
		_setBillingTypedHash(keccak256(bytes(types)));
	}

	/// @dev spend bills
	/// @param provider provider address
	/// @param account user account
	/// @param bills billing data
	/// @param timeout tx timeout
	/// @param nonce billing nonce
	/// @param signature billing signature
	/// @return fee billing fee
	function spend(
		address provider,
		bytes32 account,
		bytes memory bills,
		uint256 timeout,
		uint64 nonce,
		bytes memory signature
	) external nonReentrant onlyFundPool returns (uint256 fee) {
		require(nonce > 0, 'Billing: invalid nonce');
		require(timeout > block.timestamp, 'Billing: tx expires');
		require(!nonces[provider][account][nonce], 'Billing: nonce exists');
		bytes32 hash = hashTypedDataV4ForBills(provider, account, bills, timeout, nonce);
		require(router.ProviderRegistry().isValidSignature(provider, hash, signature), 'Billing: invalid signature');
		fee = _spend(provider, account, bills, nonce);

		emit Billing(provider, account, bills, fee, nonce);
	}

	function _spend(
		address provider,
		bytes32 account,
		bytes memory bills,
		uint64 nonce
	) internal returns (uint256 fee) {
		IERC20Upgradeable token = router.Token();
		fee = _validateBills(provider, bills);
		if(fee > 0) {
			fee = ResourceData.matchResourceToToken(token, fee);
			balances[provider] = balances[provider].add(fee);
		}
		nonces[provider][account][nonce] = true;
	}

	function _validateBills(address provider, bytes memory data) internal view returns (uint256 value) {
		Bill[] memory bills = abi.decode(data, (Bill[]));
		if (bills.length > 0) {
			for (uint256 i = 0; i < bills.length; i++) {
				Bill memory bill = bills[i];
				require(bill.entries.length > 0, 'Billing: empty bill entry');
				for (uint256 j = 0; j < bill.entries.length; j++) {
					BillEntry memory entry = bill.entries[j];
					uint256 billing = router.ResourcePriceAdaptor().getValueAt(provider, entry.resourceType, entry.amount, bill.indexBlock);
					value = value.add(billing);
				}
			}
		}
	}

	/// @dev return bill fee
	/// @param provider provider address
	/// @param data bill data
	/// @return value bill fee
	function billFee(address provider, bytes memory data) external view returns (uint256 value) { 
		return _validateBills(provider, data);
	}

	/// @dev return hash for bills
	/// @param provider provider address
	/// @param account user account
	/// @param bills user bills
	/// @param timeout tx timeout
	/// @param nonce nonce
	/// @return bills hash
	function hashBillingTypes(
		address provider,
		bytes32 account,
		bytes memory bills,
		uint256 timeout,
		uint64 nonce
	) public view returns (bytes32) {
		return keccak256(abi.encode(billingTypesHash, provider, account, keccak256(bills), timeout, nonce));
	}

	/// @dev return hash typed data v4 for sign bills
	/// @param provider provider address
	/// @param account user account
	/// @param bills user bills
	/// @param timeout tx timeout
	/// @param nonce nonce
	/// @return bills hash typed data v4
	function hashTypedDataV4ForBills(
		address provider,
		bytes32 account,
		bytes memory bills,
		uint256 timeout,
		uint64 nonce
	) public view returns (bytes32) {
		return _hashTypedDataV4(hashBillingTypes(provider, account, bills, timeout, nonce));
	}

	function _setBillingTypedHash(bytes32 hash) internal {
		billingTypesHash = hash;
		emit BillingTypesHashUpdated(hash);
	}

	/// @dev return balance of provider
	/// @param provider provider address
	/// @return balance of provider
	function balanceOf(address provider) public view override returns (uint256) {
		require(router.ProviderRegistry().isProvider(provider), 'Billing: nonexistent provider');
		return balances[provider];
	}

	/// @dev provider nonces for account
	/// @param provider provider address
	/// @param account user account
	/// @param nonce nonce
	/// @return whether nonce exists
	function nonceExists(
		address provider,
		bytes32 account,
		uint64 nonce
	) public view override returns (bool) {
		require(router.ProviderController().accountExists(provider, account), 'Billing: nonexistent provider');
		return nonces[provider][account][nonce];
	}
}
