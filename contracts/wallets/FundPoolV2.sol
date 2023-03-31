// SPDX-License-Identifier: UNLICENSE

pragma solidity >=0.8.0;

import './FundPool.sol';
import '../proxy/AdminWrapper.sol';
import '../interfaces/IProviderControllerV2Registration.sol';

/// @author Alexandas
/// @dev FundPool contract
contract FundPoolV2 is FundPool {

	/// @dev recharge for account
	/// @param provider provider address
	/// @param account user account
	/// @param amount token amount
	function rechargeWithRegistration(
		address provider,
		bytes32 account,
		uint256 amount
	) external whenNotPaused nonReentrant {
		IProviderControllerV2Registration pcr = IProviderControllerV2Registration(address(router.ProviderController()));
		pcr.registerAccount(provider, account);
		require(amount > 0, 'FundPoolV2: zero amount');
		require(router.ProviderController().accountExists(provider, account), 'FundPoolV2: nonexistent account on provider');
		_recharge(msg.sender, provider, account, amount);
	}
}