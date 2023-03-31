// SPDX-License-Identifier: UNLICENSE

pragma solidity >=0.8.0;

import './IProviderController.sol';

/// @author Alexandas
/// @dev provider controller interface
interface IProviderControllerV2Registration is IProviderController {
	/// @dev register account
	/// @param provider provider address
	/// @param account user account
	function registerAccount(address provider, bytes32 account, bytes memory signature) external;

}
