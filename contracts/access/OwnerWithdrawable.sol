// SPDX-License-Identifier: UNLICENSE

pragma solidity >=0.8.0;

import '@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol';
import '@openzeppelin/contracts-upgradeable/interfaces/IERC20Upgradeable.sol';
import '@openzeppelin/contracts-upgradeable/token/ERC20/utils/SafeERC20Upgradeable.sol';

/// @author Alexandas
/// @dev Make the contract owner can withdraw token and eth
abstract contract OwnerWithdrawable is OwnableUpgradeable {
	using SafeERC20Upgradeable for IERC20Upgradeable;

	/// @dev emit when token is withdrawn
	/// @param token token address
	/// @param to receiver address
	/// @param value token value
	event Withdrawal(IERC20Upgradeable token, address to, uint256 value);

	/// @dev emit when ETH is withdrawn
	/// @param to receiver address
	/// @param value token value
	event NativeWithdrawal(address to, uint256 value);

	/// @dev withdraw token
	/// @param token token address
	/// @param to receiver address
	/// @param value token value
	function ownerWithdrawERC20(
		IERC20Upgradeable token,
		address to,
		uint256 value
	) external onlyOwner {
		token.safeTransfer(to, value);
		emit Withdrawal(token, to, value);
	}

	/// @dev withdraw ETH
	/// @param to receiver address
	/// @param value token value
	function ownerWithdrawNative(address payable to, uint256 value) external onlyOwner {
		bool success = to.send(value);
		require(success, 'OwnerWithdrawable: withdraw native token failed');
		emit NativeWithdrawal(to, value);
	}
}
