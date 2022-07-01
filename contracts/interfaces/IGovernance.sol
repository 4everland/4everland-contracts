// SPDX-License-Identifier: UNLICENSE

pragma solidity >=0.8.0;

import './IProviderRegistry.sol';
import '../libraries/ResourceData.sol';

/// @author Alexandas
/// @dev Governance interface
interface IGovernance {
	/// @dev emit when governance drip resource to provider
	/// @param provider provider address
	event GovernanceDrip(address provider);

	/// @dev add a provider
	/// @param provider address
	function addProvider(address provider) external;

	/// @dev remove a provider
	/// @param provider address
	function removeProvider(address provider) external;

	/// @dev drip resource to provider
	/// @param provider provider address
	/// @param payloads resource payloads
	function drip(address provider, ResourceData.AmountPayload[] memory payloads) external;
}
