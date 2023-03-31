// SPDX-License-Identifier: UNLICENSE

pragma solidity >=0.8.0;

import './FundPool.sol';
import '../proxy/AdminWrapper.sol';
import '../interfaces/IProviderControllerV2Registration.sol';

/// @author Alexandas
/// @dev FundPool contract
contract FundPoolRegistration is FundPool {

	/// @dev recharge for account
	/// @param provider provider address
	/// @param account user account
	/// @param amount token amount
	function rechargeWithRegistration(
		address provider,
		bytes32 account,
		uint256 amount,
		bytes memory registrationSig
	) external whenNotPaused nonReentrant {
		IProviderControllerV2Registration pcr = IProviderControllerV2Registration(address(router.ProviderController()));
		pcr.registerAccount(provider, account, registrationSig);
		require(amount > 0, 'FundPoolRegistration: zero amount');
		require(router.ProviderController().accountExists(provider, account), 'FundPoolRegistration: nonexistent account on provider');
		_recharge(msg.sender, provider, account, amount);
	}
}