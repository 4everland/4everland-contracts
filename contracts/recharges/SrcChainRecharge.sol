// SPDX-License-Identifier: UNLICENSE

pragma solidity >=0.8.0;

import '@openzeppelin/contracts-upgradeable/interfaces/IERC20Upgradeable.sol';
import '@openzeppelin/contracts-upgradeable/token/ERC20/utils/SafeERC20Upgradeable.sol';
import '@openzeppelin/contracts-upgradeable/security/ReentrancyGuardUpgradeable.sol';
import '@openzeppelin/contracts-upgradeable/utils/math/SafeMathUpgradeable.sol';

import '../interfaces/IRechargeMessageSender.sol';
import '../access/OwnerWithdrawable.sol';
import '../access/Pauser.sol';

/// @author Alexandas
/// @dev source chain recharge contract
contract SrcChainRecharge is ReentrancyGuardUpgradeable, Pauser, OwnerWithdrawable {
	using SafeERC20Upgradeable for IERC20Upgradeable;

	/// @dev return token contract address
	IERC20Upgradeable public token;

	/// @dev message sender on src chain
	IRechargeMessageSender public messageSender;

	/// @dev emit when token updated
	/// @param token token address
	event TokenUpdated(IERC20Upgradeable token);

	/// @dev emit when message sender updated
	/// @param messageSender messageSender address
	event RechargeMessageSenderUpdated(IRechargeMessageSender messageSender);

	/// @dev emit when user paid on src chain
	/// @param provider provider address
	/// @param account sender
	/// @param amount token amount
	event Recharge(address provider, bytes32 account, uint256 amount, uint64 nonce, uint32 maxSlippage);

	constructor() initializer {}

	/// @dev proxy initialize function
	/// @param owner contract owner
	/// @param pauser contract pauser
	/// @param _messageSender messageSender address
	/// @param _token token address
	function initialize(
		address owner,
		address pauser,
		IRechargeMessageSender _messageSender,
		IERC20Upgradeable _token
	) external initializer {
		_transferOwnership(owner);
		__Init_Pauser(pauser);
		__Init_Message_Sender(_messageSender);
		__Init_Token(_token);
	}

	/// @dev initialize message sender
	/// @param _messageSender messageSender address
	function __Init_Message_Sender(IRechargeMessageSender _messageSender) internal onlyInitializing {
		_setMessageSender(_messageSender);
	}

	function __Init_Token(IERC20Upgradeable _token) internal onlyInitializing {
		_setToken(_token);
	}

	/// @dev pay from source chain
	/// @param provider provider address
	/// @param account sender
	/// @param amount token amount
	function recharge(
		address provider,
		bytes32 account,
		uint256 amount,
		uint64 nonce,
		uint32 maxSlippage
	) external payable whenNotPaused nonReentrant {
		token.safeTransferFrom(msg.sender, address(messageSender), amount);
		bytes memory message = encodeMessage(provider, account);
		messageSender.sendMessageWithTransfer{value: msg.value}(token, amount, nonce, maxSlippage, message);
		emit Recharge(provider, account, amount, nonce, maxSlippage);
	}

	/// @dev update message sender
	/// @param _messageSender message sender address
	function setMessageSender(IRechargeMessageSender _messageSender) external onlyOwner {
		_setMessageSender(_messageSender);
	}

	function _setMessageSender(IRechargeMessageSender _messageSender) internal {
		require(address(_messageSender) != address(0), 'SrcChainRecharge: zero address');
		messageSender = _messageSender;
		emit RechargeMessageSenderUpdated(_messageSender);
	}

	/// @dev update token
	/// @param _token token address
	function setToken(IERC20Upgradeable _token) external onlyOwner {
		_setToken(_token);
	}

	function _setToken(IERC20Upgradeable _token) internal {
		require(address(_token) != address(0), 'SrcChainRecharge: zero address');
		token = _token;
		emit TokenUpdated(token);
	}

	/// @dev calculate message fee
	/// @param provider provider address
	/// @param account user account
	/// @return value message fee
	function calcFee(
		address provider,
		bytes32 account
	) public view returns (uint256 value) {
		return messageSender.calcFee(encodeMessage(provider, account));
	}

	/// @dev encode payment message
	/// @param provider provider address
	/// @param account user account
	/// @return message message bytes
	function encodeMessage(
		address provider,
		bytes32 account
	) public pure returns (bytes memory) {
		return abi.encode(provider, account);
	}

}
