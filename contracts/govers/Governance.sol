// SPDX-License-Identifier: GPL-3.0-only

pragma solidity >=0.8.0;

import '@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol';
import './RouterWrapper.sol';
import '../interfaces/IGovernance.sol';

/// @author Alexandas
/// @dev Governace contract
contract Governance is IGovernance, RouterWrapper, OwnableUpgradeable {
	using SafeMathUpgradeable for uint256;

	constructor() initializer {}

	/// @dev proxy initialize function
	/// @param owner contract owner
	/// @param router router contract
	function initialize(address owner, IRouter router) external initializer {
		_transferOwnership(owner);
		__Init_Router(router);
	}

	/// @dev governance drip resource to provider
	/// @param provider provider address
	/// @param payloads resource amount payloads
	function drip(address provider, ResourceData.AmountPayload[] memory payloads) external override onlyOwner {
		require(router.ProviderRegistry().isProvider(provider), 'Governance: nonexistent provider');
		require(payloads.length > 0, 'Governance: empty payloads');
		for (uint256 i = 0; i < payloads.length; i++) {
			ResourceData.AmountPayload memory payload = payloads[i];
			ResourceData.ResourceType resourceType = payload.resourceType;
			if (resourceType == ResourceData.ResourceType.BuildingTime) {
				require(payload.amounts.length == 1, 'Governance: invalid amounts length for building time');
				router.BuildingTimeController().allocateProvider(provider, payload.amounts[0]);
			} else if (resourceType == ResourceData.ResourceType.Bandwidth) {
				require(payload.amounts.length == 1, 'Governance: invalid amounts length for bandwidth');
				router.BandwidthController().allocateProvider(provider, payload.amounts[0]);
			} else if (resourceType == ResourceData.ResourceType.ARStorage) {
				require(payload.amounts.length == 1, 'Governance: invalid amounts length for ar storage');
				router.ARStorageController().allocateProvider(provider, payload.amounts[0]);
			} else if (resourceType == ResourceData.ResourceType.IPFSStorage) {
				require(payload.amounts.length == 2, 'Governance: invalid amounts length for ipfs storage');
				router.IPFSStorageController().allocateProvider(provider, payload.amounts[0], payload.amounts[1]);
			} else {
				revert('Governance: unknown resource type');
			}
		}
		emit GovernanceDrip(provider);
	}

	/// @dev add a provider
	/// @param provider address
	function addProvider(address provider) external override onlyOwner {
		router.ProviderRegistry().addProvider(provider);
	}

	/// @dev remove a provider
	/// @param provider address
	function removeProvider(address provider) external override onlyOwner {
		router.ProviderRegistry().removeProvider(provider);
	}
}
