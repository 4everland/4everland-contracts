// SPDX-License-Identifier: GPL-3.0-only

pragma solidity >=0.8.0;

import './ProviderControllerV2.sol';
import '../interfaces/IProviderControllerV2Registration.sol';

/// @author Alexandas
/// @dev provider controller contract
contract ProviderControllerV2Registration is ProviderControllerV2, IProviderControllerV2Registration {

	/// @dev register account
	/// @param provider provider address
	/// @param account user account
	function registerAccount(address provider, bytes32 account) external override {
		address dstChainPayment = address(router.DstChainPayment());
		address fundPool = address(router.FundPool());
		require(msg.sender == dstChainPayment || msg.sender == fundPool, 'ProviderControllerV2Registration: caller is unauthorized');
		require(router.ProviderRegistry().isProvider(provider), 'ProviderControllerV2Registration: nonexistent provider');
		_registerAccount(provider, account);
	}

}