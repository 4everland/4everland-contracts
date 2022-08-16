// SPDX-License-Identifier: GPL-3.0-only

pragma solidity >=0.8.0;

import '@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol';
import '@openzeppelin/contracts-upgradeable/interfaces/IERC20Upgradeable.sol';
import '@openzeppelin/contracts-upgradeable/token/ERC20/utils/SafeERC20Upgradeable.sol';
import '@openzeppelin/contracts-upgradeable/utils/math/SafeMathUpgradeable.sol';

import 'sgn-v2-contracts/contracts/message/libraries/MsgDataTypes.sol';

import '../access/OwnerWithdrawable.sol';
import '../interfaces/IDstChainPayment.sol';
import '../govers/RouterWrapper.sol';

/// @author Alexandas
/// @dev dst chain message receiver
contract MessageReceiver is RouterWrapper, OwnerWithdrawable {
	using SafeMathUpgradeable for uint256;
	using SafeERC20Upgradeable for IERC20Upgradeable;

	enum ExecutionStatus {
		Fail,
		Success,
		Retry
	}

	/// @dev message bus in dst chain
	address public messageBus;

	/// @dev message executor
	address public executor;

	/// @dev emit when message bus updated
	/// @param messageBus dst chain messageBus in sgn
	event MessageBusUpdated(address messageBus);

	/// @dev emit when executor changed
	/// @param executor executor address
	event ExecutorUpdated(address executor);

	/// @dev emit when message with transfer executed
	/// @param sender message sender address
	/// @param token token address
	/// @param amount token amount
	/// @param srcChainId src chain chainId
	/// @param message src chain message
	/// @param executor executor address
	event MessageWithTransferExecuted(address sender, IERC20Upgradeable token, uint256 amount, uint64 srcChainId, bytes message, address executor);

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

	/// @dev emit when message with transfer executed
	/// @param sender message sender address
	/// @param srcChainId src chain chainId
	/// @param message src chain message
	/// @param executor executor address
	event MessageExecuted(address sender, uint64 srcChainId, bytes message, address executor);

	/// @dev emit message with transfer failed
	/// @param sender message sender address
	/// @param srcChainId src chain chainId
	/// @param message src chain message
	/// @param executor executor address
	/// @param error error message
	event MessageFailed(address sender, uint64 srcChainId, bytes message, address executor, bytes error);

	modifier onlyMessageBus() {
		require(msg.sender == messageBus, 'MessageReceiver: caller is not message bus');
		_;
	}

	constructor() initializer {}

	/// @dev proxy intialize function
	/// @param owner contract owner
	/// @param _messageBus dst chain message bus
	/// @param _executor executor address
	function initialize(
		address owner,
		address _messageBus,
		address _executor,
		IRouter router
	) external initializer {
		_transferOwnership(owner);
		_setMessageBus(_messageBus);
		_setExecutor(_executor);
		__Init_Router(router);
	}

	/// @dev execute message with transfer
	/// @param sender message sender address
	/// @param token token address
	/// @param amount token amount
	/// @param srcChainId src chain chainId
	/// @param message src chain message
	/// @param _executor executor address
	function executeMessageWithTransfer(
		address sender,
		IERC20Upgradeable token,
		uint256 amount,
		uint64 srcChainId,
		bytes memory message,
		address _executor
	) external payable onlyMessageBus returns (ExecutionStatus) {
		require(executor == _executor, 'MessageReceiver: invalid executor');
		IDstChainPayment dstChainPayment = router.DstChainPayment();
		token.safeApprove(address(dstChainPayment), amount);
		try dstChainPayment.payFromSourceChain(token, amount, message) {
			emit MessageWithTransferExecuted(sender, token, amount, srcChainId, message, _executor);
		} catch (bytes memory err) {
			emit MessageWithTransferFailed(sender, token, amount, srcChainId, message, _executor, err);
		}
		token.safeApprove(address(dstChainPayment), 0);
		return ExecutionStatus.Success;
	}

	/// @dev execute message
	/// @param sender message sender address
	/// @param srcChainId src chain chainId
	/// @param message src chain message
	/// @param _executor executor address
	function executeMessage(
        address sender,
        uint64 srcChainId,
        bytes memory message,
        address _executor
    ) external payable onlyMessageBus returns (ExecutionStatus) {
		require(executor == _executor, 'MessageReceiver: invalid executor');
		IDstChainPayment dstChainPayment = router.DstChainPayment();
		try dstChainPayment.celerExec(message) {
			emit MessageExecuted(sender, srcChainId, message, _executor);
		} catch (bytes memory err) {
			emit MessageFailed(sender, srcChainId, message, _executor, err);
		}
		return ExecutionStatus.Success;
	}

	/// @dev execute message with transfer fallback
	/// @param _sender message sender address
	/// @param _token token address
	/// @param _amount token amount
	/// @param _srcChainId src chain chainId
	/// @param _message src chain message
	/// @param executor executor address
	function executeMessageWithTransferFallback(
		address _sender,
		address _token,
		uint256 _amount,
		uint64 _srcChainId,
		bytes memory _message,
		address executor
	) external payable onlyMessageBus returns (ExecutionStatus) {
		emit MessageWithTransferFallback(_sender, _token, _amount, _srcChainId, _message, executor);
		return ExecutionStatus.Success;
	}

	/// @dev Explain to a developer any extra details
	/// @param route route info
	/// @param dstChainId dst chain chainId
	/// @param message message bytes
	/// @return message id
	function messageId(
		MsgDataTypes.RouteInfo calldata route,
		uint64 dstChainId,
		bytes calldata message
	) public view returns (bytes32) {
		return
			keccak256(abi.encodePacked(MsgDataTypes.MsgType.MessageOnly, route.sender, route.receiver, route.srcChainId, route.srcTxHash, dstChainId, message));
	}

	/// @dev set message bus
	/// @param messageBus message bus address
	function setMessageBus(address messageBus) external onlyOwner {
		_setMessageBus(messageBus);
	}

	function _setMessageBus(address _messageBus) internal {
		messageBus = _messageBus;
		emit MessageBusUpdated(messageBus);
	}

	/// @dev set executor address
	/// @param _executor executor address
	function setExecutor(address _executor) external onlyOwner {
		_setExecutor(_executor);
	}

	function _setExecutor(address _executor) internal {
		executor = _executor;
		emit ExecutorUpdated(_executor);
	}
}
