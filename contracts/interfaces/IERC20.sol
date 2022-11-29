// SPDX-License-Identifier: UNLICENSE

pragma solidity >=0.8.0;

import '@openzeppelin/contracts-upgradeable/interfaces/IERC20Upgradeable.sol';

interface IERC20 is IERC20Upgradeable {
	function decimals() external view returns(uint256);
}