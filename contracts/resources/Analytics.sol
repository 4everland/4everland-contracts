// SPDX-License-Identifier: GPL-3.0-only

pragma solidity >=0.8.0;

import '../govers/RouterWrapper.sol';
import '../libraries/ResourceData.sol';

/// @author Alexandas
/// @dev send provider analytic data, will be removed in the future
contract Analytics is RouterWrapper {
	mapping(uint256 => bool) public nonces;

	event Drip(address provider, uint256 nonce, ResourceData.AmountPayload[] payload);

	function initialize(IRouter router) external initializer {
		__Init_Router(router);
	}

	function send(uint256 nonce, ResourceData.AmountPayload[] memory payload) external onlyProvider {
		require(!nonces[nonce], 'Analytics: nonce exists');
		require(payload.length > 0, 'Analytics: invalid payload length');
		for (uint256 i = 0; i < payload.length; i++) {
			ResourceData.AmountPayload memory p = payload[i];
			if (
				p.resourceType == ResourceData.ResourceType.BuildingTime ||
				p.resourceType == ResourceData.ResourceType.Bandwidth ||
				p.resourceType == ResourceData.ResourceType.ARStorage
			) {
				require(p.amounts.length == 1, 'Analytics: invalid payload');
			} else if (p.resourceType == ResourceData.ResourceType.IPFSStorage) {
				require(p.amounts.length == 2, 'Analytics: invalid payload');
			}
		}
		nonces[nonce] = true;
		emit Drip(msg.sender, nonce, payload);
	}
}
