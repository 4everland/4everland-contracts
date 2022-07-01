// SPDX-License-Identifier: UNLICENSE

pragma solidity >=0.8.0;

/// @author Alexandas
/// @dev normal resource controller interface
interface INormalResourceController {

	/// @dev emit when resource allocated for the provider
	/// @param provider provider address
	/// @param amount ipfs storage amount
	event ProviderAllocated(address provider, uint256 amount);

	/// @dev emit when resource allocated for the account
	/// @param provider provider address
	/// @param account user account
	/// @param amount ipfs storage amount
	event AccountAllocated(address provider, bytes32 account, uint256 amount);

	/// @dev allocate resource for the provider
	/// @param provider provider address
	/// @param amount resource amount
	function allocateProvider(address provider, uint256 amount) external;

	/// @dev allocate user's resource balance
	/// @param provider provider address
	/// @param account user account
	/// @param amount resource amount
	function paymentAllocate(address provider, bytes32 account, uint256 amount) external;

	/// @dev provider drip resource to account directly
	/// @param provider provider address
	/// @param account user account
	/// @param amount resource amount
	function drip(address provider, bytes32 account, uint256 amount) external;

	/// @dev resource balance
	/// @param provider provider address
	/// @param account user account
	/// @return balance of the account
	function balanceOf(address provider, bytes32 account) external view returns (uint256);

	/// @dev resource balance
	/// @param provider provider address
	/// @return balance of the account
	function providerBalanceOf(address provider) external view returns (uint256);

}
