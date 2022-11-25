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
abstract contract SrcChainPayment is ReentrancyGuardUpgradeable, Pauser, OwnerWithdrawable {

	/// @dev return token contract address
	IERC20Upgradeable public token;

	/// @dev message sender on src chain
	IMessageSender public messageSender;

	mapping(address => uint256) public providerBalances;

	mapping(address => mapping(bytes32 => uint256)) public fees;

	/// @dev emit when token updated
	/// @param token token address
	event TokenUpdated(IERC20Upgradeable token);

	/// @dev emit when message sender updated
	/// @param messageSender messageSender address
	event MessageSenderUpdated(IMessageSender messageSender);

	/// @dev emit when user paid on src chain
	/// @param provider provider address
	/// @param account sender
	/// @param payloads payment payloads
	event PaidV2(address provider, bytes32 account, ResourceData.ValuePayload[] payloads);

}
