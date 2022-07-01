// SPDX-License-Identifier: UNLICENSE

pragma solidity >=0.8.0;

import '@openzeppelin/contracts-upgradeable/interfaces/IERC20Upgradeable.sol';
import '@openzeppelin/contracts-upgradeable/token/ERC20/utils/SafeERC20Upgradeable.sol';
import '@openzeppelin/contracts-upgradeable/security/ReentrancyGuardUpgradeable.sol';
import '@openzeppelin/contracts-upgradeable/utils/math/SafeMathUpgradeable.sol';

import '../interfaces/IMessageSender.sol';
import '../libraries/ResourceData.sol';
import '../access/OwnerWithdrawable.sol';
import '../access/Pauser.sol';

/// @author Alexandas
/// @dev source chain payment contract
contract SrcChainPayment is ReentrancyGuardUpgradeable, Pauser, OwnerWithdrawable {
	using SafeMathUpgradeable for uint256;
	using SafeERC20Upgradeable for IERC20Upgradeable;

	/// @dev return token contract address
	IERC20Upgradeable public token;

	/// @dev message sender on src chain
	IMessageSender public messageSender;

	/// @dev emit when token updated
	/// @param token token address
	event TokenUpdated(IERC20Upgradeable token);

	/// @dev emit when message sender updated
	/// @param messageSender messageSender address
	event MessageSenderUpdated(IMessageSender messageSender);

	/// @dev emit when user paid on src chain
	/// @param provider provider address
	/// @param nonce nonce
	/// @param account sender
	/// @param payloads payment payloads
	/// @param maxSlippage maxSlippage in cBridge
	event Paid(address provider, uint64 nonce, bytes32 account, ResourceData.ValuePayload[] payloads, uint32 maxSlippage);

	constructor() initializer {}

	/// @dev proxy initialize function
	/// @param owner contract owner
	/// @param pauser contract pauser
	/// @param messageSender messageSender address
	/// @param token token address
	function initialize(
		address owner,
		address pauser,
		IMessageSender messageSender,
		IERC20Upgradeable token
	) external initializer {
		_transferOwnership(owner);
		__Init_Pauser(pauser);
		__Init_Message_Sender(messageSender);
		__Init_Token(token);
	}

	/// @dev initialize message sender
	/// @param _messageSender messageSender address
	function __Init_Message_Sender(IMessageSender _messageSender) internal onlyInitializing {
		_setMessageSender(_messageSender);
	}

	function __Init_Token(IERC20Upgradeable _token) internal onlyInitializing {
		_setToken(_token);
	}

	/// @dev pay from source chain
	/// @param provider provider address
	/// @param nonce nonce
	/// @param account sender
	/// @param payloads payment payloads
	/// @param maxSlippage maxSlippage in cBridge
	/// @return transferId token transfer id in cBridge
	function pay(
		address provider,
		uint64 nonce,
		bytes32 account,
		ResourceData.ValuePayload[] memory payloads,
		uint32 maxSlippage
	) external payable whenNotPaused nonReentrant returns (bytes32 transferId) {
		uint256 value = ResourceData.totalValue(payloads);
		value = ResourceData.matchResourceToToken(token, value);
		token.safeTransferFrom(msg.sender, address(this), value);
		token.safeApprove(address(messageSender), value);
		transferId = messageSender.sendMessageWithTransfer{ value: msg.value }(
			address(token),
			value,
			nonce,
			maxSlippage,
			encodeMessage(provider, nonce, account, payloads),
			MsgDataTypes.BridgeSendType.Liquidity
		);
		token.safeApprove(address(messageSender), 0);

		emit Paid(provider, nonce, account, payloads, maxSlippage);
	}

	/// @dev update message sender
	/// @param _messageSender message sender address
	function setMessageSender(IMessageSender _messageSender) external onlyOwner {
		_setMessageSender(_messageSender);
	}

	function _setMessageSender(IMessageSender _messageSender) internal {
		require(address(_messageSender) != address(0), 'SrcChainPayment: zero address');
		messageSender = _messageSender;
		emit MessageSenderUpdated(_messageSender);
	}

	/// @dev update token
	/// @param _token token address
	function setToken(IERC20Upgradeable _token) external onlyOwner {
		_setToken(_token);
	}

	function _setToken(IERC20Upgradeable _token) internal {
		require(address(_token) != address(0), 'SrcChainPayment: zero address');
		token = _token;
		emit TokenUpdated(token);
	}

	/// @dev calculate message fee
	/// @param provider provider address
	/// @param nonce nonce
	/// @param account user account
	/// @param payloads payment payloads
	/// @return value message fee
	function calcFee(
		address provider,
		uint64 nonce,
		bytes32 account,
		ResourceData.ValuePayload[] memory payloads
	) public view returns (uint256 value) {
		return messageSender.calcFee(encodeMessage(provider, nonce, account, payloads));
	}

	/// @dev encode payment message
	/// @param provider provider address
	/// @param nonce nonce
	/// @param account user account
	/// @param payloads payment payloads
	/// @return message message bytes
	function encodeMessage(
		address provider,
		uint64 nonce,
		bytes32 account,
		ResourceData.ValuePayload[] memory payloads
	) public pure returns (bytes memory) {
		return abi.encode(provider, nonce, account, payloads);
	}
}
