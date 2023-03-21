// SPDX-License-Identifier: GPL-3.0-only

pragma solidity >=0.8.0;

import '@openzeppelin/contracts-upgradeable/token/ERC20/utils/SafeERC20Upgradeable.sol';
import 'sgn-v2-contracts/contracts/message/interfaces/IMessageBus.sol';
import 'sgn-v2-contracts/contracts/message/libraries/MessageSenderLib.sol';

import '../interfaces/IRechargeMessageSender.sol';
import '../access/OwnerWithdrawable.sol';

/// @author Alexandas
/// @dev Celer SGN source chain sender contract
contract RechargeMessageSender is IRechargeMessageSender, OwnerWithdrawable {
	using SafeERC20Upgradeable for IERC20Upgradeable;

	enum ExecutionStatus {
		Fail,
		Success,
		Retry
	}

	/// @dev src chain payment address
	address public srcChainRecharge;

	/// @dev src chain messageBus address
	address public messageBus;

	/// @dev dst chain receiver address
	address public override receiver;

	/// @dev dst chainId
	uint64 public override dstChainId;

	modifier onlyMessageBus() {
		require(msg.sender == messageBus, 'RechargeMessageSender: caller is not message bus');
		_;
	}

	modifier onlySrcChainRecharge() {
		require(msg.sender == srcChainRecharge, 'RechargeMessageSender: caller is not recharge contract');
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

	/// @dev sendMessageWithTransfer to dst chain
	/// @param message message to dst chain
	function sendMessageWithTransfer(IERC20Upgradeable token, uint256 amount, uint64 nonce, uint32 maxSlippage, bytes memory message) external override payable onlySrcChainRecharge {
		MessageSenderLib.sendMessageWithTransfer(receiver, address(token), amount, dstChainId, nonce, maxSlippage, message, MsgDataTypes.BridgeSendType.Liquidity, messageBus, msg.value);
		emit MessageWithTransferSent(address(this), receiver, token, amount, uint64(block.chainid), dstChainId, nonce, maxSlippage, message);
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

	/// @dev set src chain recharge
	/// @param _recharge src chain recharge address
	function setSrcChainRecharge(address _recharge) external onlyOwner {
		_setSrcChainRecharge(_recharge);
	}

	function _setSrcChainRecharge(address _recharge) internal {
		srcChainRecharge = _recharge;
		emit SrcChainRechargeUpdated(_recharge);
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
	) external pure override returns (bytes32) {
		return
			keccak256(abi.encodePacked(MsgDataTypes.MsgType.MessageWithTransfer, route.sender, route.receiver, route.srcChainId, route.srcTxHash, dstChainId, message));
	}
}
