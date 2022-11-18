// SPDX-License-Identifier: UNLICENSE

pragma solidity >=0.8.0;

import '@openzeppelin/contracts-upgradeable/interfaces/IERC20Upgradeable.sol';
import 'sgn-v2-contracts/contracts/message/libraries/MsgDataTypes.sol';

interface IRechargeMessageSender {
	/// @dev emit when src chain recharge address updated
	/// @param recharge recharge contract address
	event SrcChainRechargeUpdated(address recharge);

	/// @dev emit when dst chain receiver address updated
	/// @param receiver receiver address
	event ReceiverUpdated(address receiver);

	/// @dev emit when dst chain updated
	/// @param dstChainId dst chainId
	event DstChainIdUpdated(uint64 dstChainId);

	/// @dev emit when message bus updated
	/// @param messageBus dst chain messageBus in sgn
	event MessageBusUpdated(address messageBus);

	/// @dev emit when executor changed
	/// @param executor executor address
	event ExecutorUpdated(address executor);

	/// @dev emit when transfer refund
	/// @param token token address
	/// @param amount token amount
	/// @param message sender's message
	/// @param executor executor address
	event MessageWithTransferRefund(address token, uint256 amount, bytes message, address executor);

	/// @dev emit when message with transfer executed
	/// @param sender message sender address
	/// @param token token address
	/// @param amount token amount
	/// @param srcChainId src chain chainId
	/// @param dstChainId dst chain chainId
	/// @param message src chain message
	event MessageWithTransferSent(address sender, address receiver, IERC20Upgradeable token, uint256 amount, uint64 srcChainId, uint64 dstChainId, uint64 nonce, uint32 maxSlippage, bytes message);

	/// @dev emit message with transfer failed
	/// @param sender message sender address
	/// @param token token address
	/// @param amount token amount
	/// @param srcChainId src chain chainId
	/// @param message src chain message
	/// @param executor executor address
	/// @param error error message
	event MessageWithTransferFailed(address sender, IERC20Upgradeable token, uint256 amount, uint64 srcChainId, bytes message, address executor, bytes error);

	/// @dev emit when message with transfer fallback
	/// @param _sender message sender address
	/// @param _token token address
	/// @param _amount token amount
	/// @param _srcChainId src chain chainId
	/// @param _message src chain message
	/// @param executor executor address
	event MessageWithTransferFallback(address _sender, address _token, uint256 _amount, uint64 _srcChainId, bytes _message, address executor);

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

	/// @dev send message to dst chain
	/// @param message message for dst chain
	function sendMessageWithTransfer(IERC20Upgradeable token, uint256 amount, uint64 nonce, uint32 maxSlippage, bytes memory message) external payable;
}
