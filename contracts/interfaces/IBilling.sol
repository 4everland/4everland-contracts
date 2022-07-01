// SPDX-License-Identifier: UNLICENSE

pragma solidity >=0.8.0;

import '@openzeppelin/contracts-upgradeable/interfaces/IERC20Upgradeable.sol';
import '../libraries/ResourceData.sol';
import '../resources/interfaces/IResourcePriceAdaptor.sol';

/// @author Alexandas
/// @dev Billing interface
interface IBilling {
	struct BillEntry {
		ResourceData.ResourceType resourceType;
		uint256 amount;
	}

	struct Bill {
		uint256 indexBlock;
		BillEntry[] entries;
	}

	/// @dev emit when billing types hash updated
	/// @param hash billing types Hash
	event BillingTypesHashUpdated(bytes32 hash);

	/// @dev emit when bills finalized
	/// @param provider provider address
	/// @param account user account
	/// @param bills bills data
	/// @param amount fee
	/// @param nonce nonce
	event Billing(address provider, bytes32 account, bytes bills, uint256 amount, uint64 nonce);

	/// @dev get billing types hash
	/// @return billing types hash
	function billingTypesHash() external view returns (bytes32);

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
	) external returns (uint256 fee);

	/// @dev return balance of provider
	/// @param provider provider address
	/// @return balance of provider
	function balanceOf(address provider) external view returns (uint256);

	/// @dev provider nonces for account
	/// @param provider provider address
	/// @param account user account
	/// @param nonce nonce
	/// @return whether nonce exists
	function nonceExists(
		address provider,
		bytes32 account,
		uint64 nonce
	) external view returns (bool);
}
