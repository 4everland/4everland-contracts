// SPDX-License-Identifier: UNLICENSE

pragma solidity >=0.8.0;

import './SrcChainPayment.sol';

/// @author Alexandas
/// @dev source chain payment contract
contract SrcChainPaymentV2 is SrcChainPayment {
	using SafeMathUpgradeable for uint256;
	using SafeERC20Upgradeable for IERC20Upgradeable;
	
	event Paid(address provider, bytes32 account, ResourceData.ValuePayload[] payloads, uint256 nonce, uint256 amount);

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
	/// @param account sender
	/// @param payloads payment payloads
	function pay(
		address provider,
		bytes32 account,
		ResourceData.ValuePayload[] memory payloads,
		uint256 nonce,
		uint256 amount,
		bytes memory signature
	) external payable whenNotPaused nonReentrant {
		uint256 value = ResourceData.totalValue(payloads);
		require(value >= amount, 'SrcChainPayment: voucher amount is less than resource value');
		if (amount > 0) {
			value -= amount;
		}
		value = ResourceData.matchResourceToToken(token, value);
		providerBalances[provider] = providerBalances[provider] + value;
		fees[provider][account] = fees[provider][account] + value;
		token.safeTransferFrom(msg.sender, address(this), value);
		messageSender.sendMessage{value: msg.value}(encodeMessage(provider, account, payloads, nonce, amount, signature));
		emit Paid(provider, account, payloads, nonce, amount);
	}

	/// @dev return payment total token value
	/// @param payloads payment payloads
	/// @return value payment total token value
	function payloadsValue(ResourceData.ValuePayload[] memory payloads) public view returns (uint256 value) {
		value = ResourceData.totalValue(payloads);
		value = ResourceData.matchResourceToToken(token, value);
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
	/// @param account user account
	/// @param payloads payment payloads
	/// @return value message fee
	function calcFee(
		address provider,
		bytes32 account,
		ResourceData.ValuePayload[] memory payloads,
		uint256 nonce,
		uint256 amount,
		bytes memory signature
	) public view returns (uint256 value) {
		return messageSender.calcFee(encodeMessage(provider, account, payloads, nonce, amount, signature));
	}

	/// @dev encode payment message
	/// @param provider provider address
	/// @param account user account
	/// @param payloads payment payloads
	/// @return message message bytes
	function encodeMessage(
		address provider,
		bytes32 account,
		ResourceData.ValuePayload[] memory payloads,
		uint256 nonce,
		uint256 amount,
		bytes memory signature
	) public pure returns (bytes memory) {
		return abi.encode(provider, account, payloads, nonce, amount, signature);
	}

}
