// SPDX-License-Identifier: GPL-3.0-only

pragma solidity >=0.8.0;

import '@openzeppelin/contracts-upgradeable/interfaces/IERC20Upgradeable.sol';
import '@openzeppelin/contracts-upgradeable/token/ERC20/utils/SafeERC20Upgradeable.sol';
import 'sgn-v2-contracts/contracts/message/interfaces/IMessageBus.sol';
import 'sgn-v2-contracts/contracts/message/libraries/MessageSenderLib.sol';

import '../interfaces/IMessageSender.sol';
import '../access/OwnerWithdrawable.sol';

/// @author Alexandas
/// @dev Celer SGN source chain sender contract
contract MessageSender is IMessageSender, OwnerWithdrawable {
	using SafeERC20Upgradeable for IERC20Upgradeable;

	enum ExecutionStatus {
		Fail,
		Success,
		Retry
	}

	/// @dev src chain payment address
	address public srcChainPayment;

	/// @dev src chain messageBus address
	address public messageBus;

	/// @dev dst chain receiver address
	address public override receiver;

	/// @dev dst chainId
	uint64 public override dstChainId;

	modifier onlyMessageBus() {
		require(msg.sender == messageBus, 'MessageReceiver: caller is not message bus');
		_;
	}

	modifier onlySrcChainPayment() {
		require(msg.sender == srcChainPayment, 'MessageSender: caller is not payment contract');
		_;
	}

	constructor() initializer {}

	/// @dev proxy initialize function
	/// @param owner contract owner
	/// @param _messageBus src chain messageBus
	/// @param _receiver dst chain receiver
	/// @param _dstChainId dst chain chainId
	function initialize(
		address owner,
		address _messageBus,
		address _receiver,
		uint64 _dstChainId
	) external initializer {
		_transferOwnership(owner);
		_setMessageBus(_messageBus);
		_setReceiver(_receiver);
		_setDstChainId(_dstChainId);
	}

	/// @dev sendMessage to dst chain
	/// @param message message to dst chain
	function sendMessage(bytes memory message) external payable onlySrcChainPayment {
		MessageSenderLib.sendMessage(receiver, dstChainId, message, messageBus, msg.value);
		emit MessageSent(address(this), receiver, uint64(block.chainid), dstChainId, message);
	}

	/// @dev call when cBridge transfer failed
	/// @param _token token address
	/// @param _amount token amount
	/// @param _message message
	/// @param executor exector address
	function executeMessageWithTransferRefund(
		address _token,
		uint256 _amount,
		bytes calldata _message,
		address executor
	) external payable onlyMessageBus returns (ExecutionStatus) {
		emit MessageWithTransferRefund(_token, _amount, _message, executor);
		return ExecutionStatus.Success;
	}

	/// @dev set src chain payment
	/// @param _payment src chain payment address
	function setSrcChainPayment(address _payment) external onlyOwner {
		_setSrcChainPayment(_payment);
	}

	function _setSrcChainPayment(address _payment) internal {
		srcChainPayment = _payment;
		emit SrcChainPaymentUpdated(_payment);
	}

	/// @dev update message bus
	/// @param messageBus message bus address
	function setMessageBus(address messageBus) external onlyOwner {
		_setMessageBus(messageBus);
	}

	function _setMessageBus(address _messageBus) internal {
		messageBus = _messageBus;
		emit MessageBusUpdated(messageBus);
	}

	/// @dev set dst chain chainId
	/// @param dstChainId dst chainId
	function setDstChainId(uint64 dstChainId) external onlyOwner {
		_setDstChainId(dstChainId);
	}

	function _setDstChainId(uint64 _dstChainId) internal {
		dstChainId = _dstChainId;
		emit DstChainIdUpdated(_dstChainId);
	}

	/// @dev set dst chain receiver
	/// @param _receiver dst chain receiver
	function setReceiver(address _receiver) external onlyOwner {
		_setReceiver(_receiver);
	}

	function _setReceiver(address _receiver) internal {
		receiver = _receiver;
		emit ReceiverUpdated(_receiver);
	}

	/// @dev calculate message fee
	/// @param message message bytes
	/// @return fee
	function calcFee(bytes memory message) public view override returns (uint256) {
		return IMessageBus(messageBus).calcFee(message);
	}

	/// @dev messageId for message bus
	/// @param route message route info
	/// @param dstChainId message route info
	/// @param message message bytes
	function messageId(
		MsgDataTypes.RouteInfo calldata route,
		uint64 dstChainId,
		bytes calldata message
	) external view override returns (bytes32) {
		return
			keccak256(abi.encodePacked(MsgDataTypes.MsgType.MessageOnly, route.sender, route.receiver, route.srcChainId, route.srcTxHash, dstChainId, message));
	}
}
