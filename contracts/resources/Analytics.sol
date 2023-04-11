// SPDX-License-Identifier: GPL-3.0-only

pragma solidity >=0.8.0;

import '../govers/RouterWrapper.sol';
import '../libraries/ResourceData.sol';

/// @author Alexandas
/// @dev send provider analytic data, will be removed in the future
contract Analytics is RouterWrapper {
	mapping(uint256 => bool) public nonces;

	event Drip(address provider, uint256 nonce, ResourceData.AmountPayload payload);

	function send(uint256 nonce, ResourceData.AmountPayload memory payload) external onlyProvider {
		require(!nonces[nonce], 'Analytics: nonce exists');
		nonces[nonce] = true;
		emit Drip(msg.sender, nonce, payload);
	}
}