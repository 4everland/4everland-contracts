// SPDX-License-Identifier: UNLICENSE

pragma solidity >=0.8.0;
import '@openzeppelin/contracts-upgradeable/utils/math/SafeMathUpgradeable.sol';

/// @author Alexandas
/// @dev IPFS storage controller interface
interface IIPFSStorageController {
	struct Storage {
		uint256 startTime;
		uint256 expiration;
		uint256 amount;
	}

	/// @dev emit when ipfs storage allocated for the provider
	/// @param provider provider address
	/// @param amount ipfs storage amount
	/// @param expiration ipfs storage expiration
	event ProviderAllocated(address provider, uint256 amount, uint256 expiration);

	/// @dev emit when ipfs storage allocated for the account
	/// @param provider provider address
	/// @param account user account
	/// @param amount ipfs storage amount
	/// @param expiration ipfs storage expiration
	event AccountAllocated(address provider, bytes32 account, uint256 amount, uint256 expiration);

	/// @dev emit when provider recovered ipfs storage
	/// @param provider provider address
	/// @param account user account
	/// @param amount ipfs storage amount
	event ProviderRecovered(address provider, bytes32 account, uint256 amount);

	/// @dev allocate user's normal resource balance
	/// @param provider provider address
	/// @param amount resource amount
	/// @param expiration ipfs expiration
	function allocateProvider(address provider, uint256 amount, uint256 expiration) external;

	/// @dev provider drip resource to account directly
	/// @param provider provider address
	/// @param account user account
	/// @param amount ipfs storage amount
	/// @param expiration ipfs expiration
	function drip(address provider, bytes32 account, uint256 amount, uint256 expiration) external;

	/// @dev allocate user's resource balance
	/// @param provider provider address
	/// @param account user account
	/// @param amount ipfs storage amount
	/// @param expiration ipfs expiration
	function paymentAllocate(address provider, bytes32 account, uint256 amount, uint256 expiration) external;

	/// @dev recover provider storage
	/// @param provider provider address
	/// @param account user account
	function recoverStorage(address provider, bytes32 account) external;

	/// @dev return whether ipfs storage is expired for the provider
	/// @param provider provider address
	/// @return whether ipfs storage is expired for the provider
	function isProviderExpired(address provider) external view returns (bool);

	/// @dev return ipfs storage start time for the provider
	/// @param provider provider address
	/// @return start time for the provider
	function providerStartTime(address provider) external view returns (uint256);

	/// @dev return total expiration time for the provider
	/// @param provider provider address
	/// @return total expiration time for the provider
	function providerExpiration(address provider) external view returns (uint256);

	/// @dev return available expiration time for the provider
	/// @param provider provider address
	/// @return available expiration time for the provider
	function providerAvailableExpiration(address provider) external view returns (uint256);

	/// @dev return when the provider will expire
	/// @param provider provider address
	/// @return when the provider will expire
	function providerExpiredAt(address provider) external view returns (uint256);

	/// @dev return ipfs storage amount for the provider
	/// @param provider provider address
	/// @return ipfs storage amount for the provider
	function providerBalanceOf(address provider) external view returns (uint256);

	/// @dev return whether ipfs storage is expired for the account
	/// @param provider provider address
	/// @param account user account
	/// @return whether ipfs storage is expired for the account
	function isExpired(address provider, bytes32 account) external view returns (bool);

	/// @dev return available expiration time for the account
	/// @param provider provider address
	/// @param account user account
	/// @return available expiration time for the account
	function availableExpiration(address provider, bytes32 account) external view returns (uint256);

	/// @dev return when the account will expire
	/// @param provider provider address
	/// @param account user account
	/// @return when the account will expire
	function expiredAt(address provider, bytes32 account) external view returns (uint256);

	/// @dev return ipfs storage start time for the account
	/// @param provider provider address
	/// @param account user account
	/// @return start time for the account
	function startTime(address provider, bytes32 account) external view returns (uint256);

	/// @dev return total expiration time for the account
	/// @param provider provider address
	/// @param account user account
	/// @return total expiration time for the account
	function expiration(address provider, bytes32 account) external view returns (uint256);

	/// @dev return ipfs storage amount for the account
	/// @param provider provider address
	/// @param account user account
	/// @return ipfs storage amount for the account
	function balanceOf(address provider, bytes32 account) external view returns (uint256);
}
