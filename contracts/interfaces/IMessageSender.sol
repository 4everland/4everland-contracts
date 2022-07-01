// SPDX-License-Identifier: UNLICENSE

pragma solidity >=0.8.0;

import 'sgn-v2-contracts/contracts/message/libraries/MsgDataTypes.sol';

interface IMessageSender {
	/// @dev emit when src chain payment address updated
	/// @param payment payment address
	event SrcChainPaymentUpdated(address payment);

	/// @dev emit when src chain messageBus address updated
	/// @param messageBus messageBus address
	event MessageBusUpdated(address messageBus);

	/// @dev emit when dst chain receiver address updated
	/// @param receiver receiver address
	event ReceiverUpdated(address receiver);

	/// @dev emit when dst chain updated
	/// @param dstChainId dst chainId
	event DstChainIdUpdated(uint64 dstChainId);

	/// @dev emit when transfer refund
	/// @param token token address
	/// @param amount token amount
	/// @param message sender's message
	/// @param executor executor address
	event MessageWithTransferRefund(address token, uint256 amount, bytes message, address executor);

	/// @dev dst chain receiver
	function receiver() external view returns (address);

	/// @dev dst chain chainId
	function dstChainId() external view returns (uint64);

	/// @dev calculate message fee
	function calcFee(bytes memory message) external view returns (uint256);

	/// @dev message id for Message bus in sgn
	function messageId(
		MsgDataTypes.RouteInfo calldata route,
		uint64 dstChainId,
		bytes calldata message
	) external view returns (bytes32);

	/// @dev send message with transfer to dst chain
	/// @param token pay token
	/// @param amount token amount
	/// @param nonce nonce
	/// @param maxSlippage max slippage for cBridge in sgn
	/// @param message message for dst chain
	/// @param bridgeSendType bridge send type for cBridge
	/// @return messageId message id for messageBus in sgn
	function sendMessageWithTransfer(
		address token,
		uint256 amount,
		uint64 nonce,
		uint32 maxSlippage,
		bytes memory message,
		MsgDataTypes.BridgeSendType bridgeSendType
	) external payable returns (bytes32);
}
