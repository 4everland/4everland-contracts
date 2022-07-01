// SPDX-License-Identifier: UNLICENSE

pragma solidity >=0.8.0;

import '@gnosis.pm/safe-contracts/contracts/GnosisSafeL2.sol';

/// @author Alexandas
/// @dev SafeWallet contract
contract SafeWallet is GnosisSafeL2 {
	constructor(address[] memory _owners, uint256 _threshold) {
		threshold = 0;
		setupOwners(_owners, _threshold);
	}
}
