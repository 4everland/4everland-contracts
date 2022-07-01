// SPDX-License-Identifier: UNLICENSE

pragma solidity >=0.8.0;

import '@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol';
import '@openzeppelin/contracts-upgradeable/utils/math/SafeMathUpgradeable.sol';
import '../interfaces/INormalResourceController.sol';
import '../../govers/RouterWrapper.sol';

/// @author Alexandas
/// @dev Normal resource controller
abstract contract NormalResourceController is INormalResourceController, RouterWrapper, OwnableUpgradeable {
	using SafeMathUpgradeable for uint256;

	/// @dev provider balances
	mapping(address => uint256) internal providerBalances;

	/// @dev resource balances for account in provider
	mapping(address => mapping(bytes32 => uint256)) internal balances;

	constructor() initializer {}

	/// @dev proxy initialize function
	/// @param owner contract owner
	/// @param router router contract
	function __Init_Normal_Resource_Controller(address owner, IRouter router) internal onlyInitializing {
		_transferOwnership(owner);
		__Init_Router(router);
	}

	/// @dev allocate resource for the provider
	/// @param provider provider address
	/// @param amount resource amount
	function allocateProvider(address provider, uint256 amount) external override onlyGovernance {
		_allocateProivder(provider, amount);
	}

	/// @dev provider drip resource to account directly
	/// @param provider provider address
	/// @param account user account
	/// @param amount resource amount
	function drip(
		address provider,
		bytes32 account,
		uint256 amount
	) external override onlyProviderController {
		_allocateAccount(provider, account, amount);
	}

	/// @dev allocate user's resource balance
	/// @param provider provider address
	/// @param account user account
	/// @param amount resource amount
	function paymentAllocate(
		address provider,
		bytes32 account,
		uint256 amount
	) external override onlyDstChainPayment {
		_allocateAccount(provider, account, amount);
	}

	function _allocateAccount(
		address provider,
		bytes32 account,
		uint256 amount
	) internal {
		require(providerBalanceOf(provider) >= amount, 'NormalResourceController: insufficient provider balance');
		balances[provider][account] = balances[provider][account].add(amount);
		providerBalances[provider] = providerBalances[provider].sub(amount);

		emit AccountAllocated(provider, account, amount);
	}

	function _allocateProivder(address provider, uint256 amount) internal {
		providerBalances[provider] = providerBalances[provider].add(amount);

		emit ProviderAllocated(provider, amount);
	}

	/// @dev resource balance
	/// @param provider provider address
	/// @param account user account
	/// @return balance of the account
	function balanceOf(address provider, bytes32 account) public view override returns (uint256) {
		return balances[provider][account];
	}

	/// @dev resource balance
	/// @param provider provider address
	/// @return balance of the account
	function providerBalanceOf(address provider) public view override returns (uint256) {
		return providerBalances[provider];
	}
}
