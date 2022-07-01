// SPDX-License-Identifier: UNLICENSE

pragma solidity >=0.8.0;

import '../../libraries/ResourceData.sol';

/// @author Alexandas
/// @dev resource interface
interface IResource {

	/// @dev emit when resource type updated
	/// @param resourceType resource type
	event ResourceTypeUpdated(ResourceData.ResourceType resourceType);

	/// @dev return resource type
	function resourceType() external view returns (ResourceData.ResourceType);

}
