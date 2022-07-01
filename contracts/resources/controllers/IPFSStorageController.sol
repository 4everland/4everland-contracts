// SPDX-License-Identifier: UNLICENSE

pragma solidity >=0.8.0;

import '@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol';
import '@openzeppelin/contracts-upgradeable/utils/math/SafeMathUpgradeable.sol';

import '../interfaces/IIPFSStorageController.sol';
import '../../govers/RouterWrapper.sol';

/// @author Alexandas
/// @dev IPFS storage controller
contract IPFSStorageController is IIPFSStorageController, RouterWrapper, OwnableUpgradeable {
	using SafeMathUpgradeable for uint256;

	/// @dev provider storage
	mapping(address => Storage) internal providersStorage;

	/// @dev ipfs storage for account
	mapping(address => mapping(bytes32 => Storage)) internal storages;

	constructor() initializer {}

	/// @dev proxy initialize function
	/// @param owner contract owner
	/// @param router router contract address
	function initialize(address owner, IRouter router) external initializer {
		_transferOwnership(owner);
		__Init_Router(router);
	}

	/// @dev allocate user's normal resource balance
	/// @param provider provider address
	/// @param amount resource amount
	/// @param expiration ipfs expiration
	function allocateProvider(
		address provider,
		uint256 amount,
		uint256 expiration
	) external override onlyGovernance {
		_allocateProivder(provider, amount, expiration);
	}

	/// @dev provider drip resource to account directly
	/// @param provider provider address
	/// @param account user account
	/// @param amount ipfs storage amount
	/// @param expiration ipfs expiration
	function drip(
		address provider,
		bytes32 account,
		uint256 amount,
		uint256 expiration
	) external override onlyProviderController {
		_allocateAccount(provider, account, amount, expiration);
	}

	/// @dev allocate user's resource balance
	/// @param provider provider address
	/// @param account user account
	/// @param amount ipfs storage amount
	/// @param expiration ipfs expiration
	function paymentAllocate(
		address provider,
		bytes32 account,
		uint256 amount,
		uint256 expiration
	) external override onlyDstChainPayment {
		_allocateAccount(provider, account, amount, expiration);
	}

	function _allocateAccount(
		address provider,
		bytes32 account,
		uint256 amount,
		uint256 expiration
	) internal {
		require(!isProviderExpired(provider), 'IPFSStorageController: provider expired');
		require(providerBalanceOf(provider) >= amount, 'IPFSStorageController: insufficient balance for the provider');
		if (isExpired(provider, account)) {
			if (storages[provider][account].amount > 0) {
				_recoverStorage(provider, account);
			}
			storages[provider][account].startTime = block.timestamp;
			storages[provider][account].amount = amount;
			storages[provider][account].expiration = expiration;
		} else {
			storages[provider][account].amount = storages[provider][account].amount.add(amount);
			storages[provider][account].expiration = storages[provider][account].expiration.add(expiration);
		}
		require(providerExpiredAt(provider) >= expiredAt(provider, account), 'IPFSStorageController: expiration overflows');
		if (amount > 0) {
			providersStorage[provider].amount = providersStorage[provider].amount.sub(amount);
		}
		emit AccountAllocated(provider, account, amount, expiration);
	}

	function _allocateProivder(
		address provider,
		uint256 amount,
		uint256 expiration
	) internal {
		if (isProviderExpired(provider)) {
			providersStorage[provider] = Storage({ startTime: block.timestamp, amount: amount, expiration: expiration });
		} else {
			providersStorage[provider].amount = providersStorage[provider].amount.add(amount);
			providersStorage[provider].expiration = providersStorage[provider].expiration.add(expiration);
		}

		emit ProviderAllocated(provider, amount, expiration);
	}

	/// @dev recover provider storage
	/// @param provider provider address
	/// @param account user account
	function recoverStorage(address provider, bytes32 account) external override {
		_recoverStorage(provider, account);
	}

	function _recoverStorage(address provider, bytes32 account) internal {
		require(!isProviderExpired(provider), 'IPFSStorageController: provider expired');
		require(isExpired(provider, account), 'IPFSStorageController: account is not expired');
		uint256 amount = storages[provider][account].amount;
		require(amount > 0, 'IPFSStorageController: empty storage to recover');
		providersStorage[provider].amount = providersStorage[provider].amount.add(amount);
		storages[provider][account].amount = 0;

		emit ProviderRecovered(provider, account, amount);
	}

	/// @dev return whether ipfs storage is expired for the provider
	/// @param provider provider address
	/// @return whether ipfs storage is expired for the provider
	function isProviderExpired(address provider) public view override returns (bool) {
		return block.timestamp > providerExpiredAt(provider);
	}

	/// @dev return ipfs storage start time for the provider
	/// @param provider provider address
	/// @return start time for the provider
	function providerStartTime(address provider) public view override returns (uint256) {
		return providersStorage[provider].startTime;
	}

	/// @dev return total expiration time for the provider
	/// @param provider provider address
	/// @return total expiration time for the provider
	function providerExpiration(address provider) public view override returns (uint256) {
		return providersStorage[provider].expiration;
	}

	/// @dev return available expiration time for the provider
	/// @param provider provider address
	/// @return available expiration time for the provider
	function providerAvailableExpiration(address provider) public view override returns (uint256) {
		require(!isProviderExpired(provider), 'IPFSStorageController: provider is expired.');
		return providerExpiredAt(provider).sub(block.timestamp);
	}

	/// @dev return when the provider will expire
	/// @param provider provider address
	/// @return when the provider will expire
	function providerExpiredAt(address provider) public view override returns (uint256) {
		return providerStartTime(provider).add(providerExpiration(provider));
	}

	/// @dev return ipfs storage amount for the provider
	/// @param provider provider address
	/// @return ipfs storage amount for the provider
	function providerBalanceOf(address provider) public view override returns (uint256) {
		require(!isProviderExpired(provider), 'IPFSStorageController: provider is expired.');
		return providersStorage[provider].amount;
	}

	/// @dev return whether ipfs storage is expired for the account
	/// @param provider provider address
	/// @param account user account
	/// @return whether ipfs storage is expired for the account
	function isExpired(address provider, bytes32 account) public view override returns (bool) {
		return block.timestamp > expiredAt(provider, account);
	}

	/// @dev return available expiration time for the account
	/// @param provider provider address
	/// @param account user account
	/// @return available expiration time for the account
	function availableExpiration(address provider, bytes32 account) public view override returns (uint256) {
		require(!isExpired(provider, account), 'IPFSStorageController: account is expired.');
		return expiredAt(provider, account).sub(block.timestamp);
	}

	/// @dev return when the account will expire
	/// @param provider provider address
	/// @param account user account
	/// @return when the account will expire
	function expiredAt(address provider, bytes32 account) public view override returns (uint256) {
		return startTime(provider, account).add(expiration(provider, account));
	}

	/// @dev return ipfs storage start time for the account
	/// @param provider provider address
	/// @param account user account
	/// @return start time for the account
	function startTime(address provider, bytes32 account) public view override returns (uint256) {
		return storages[provider][account].startTime;
	}

	/// @dev return total expiration time for the account
	/// @param provider provider address
	/// @param account user account
	/// @return total expiration time for the account
	function expiration(address provider, bytes32 account) public view override returns (uint256) {
		return storages[provider][account].expiration;
	}

	/// @dev return ipfs storage amount for the account
	/// @param provider provider address
	/// @param account user account
	/// @return ipfs storage amount for the account
	function balanceOf(address provider, bytes32 account) public view override returns (uint256) {
		require(!isExpired(provider, account), 'IPFSStorageController: account is expired.');
		return storages[provider][account].amount;
	}
}
