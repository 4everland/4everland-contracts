// SPDX-License-Identifier: UNLICENSE

pragma solidity >=0.8.0;

import '../NormalResourceController.sol';

/// @author Alexandas
/// @dev Bandwidth controller controller
contract BandwidthController is NormalResourceController {
	/// @dev proxy initialize function
	/// @param owner contract owner
	/// @param router router contract
	function initialize(
		address owner,
		IRouter router
	) external initializer {
		_transferOwnership(owner);
		__Init_Router(router);
	}
}
