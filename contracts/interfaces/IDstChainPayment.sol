// SPDX-License-Identifier: UNLICENSE

pragma solidity >=0.8.0;

import '@openzeppelin/contracts-upgradeable/interfaces/IERC20Upgradeable.sol';
import '../libraries/ResourceData.sol';

/// @author Alexandas
/// @dev DstChainPayment interface
interface IDstChainPayment {
	struct PaymentPayload {
		address provider;
		uint64 nonce;
		bytes32 account;
		ResourceData.ValuePayload[] payloads;
	}

	// event PaidV2(address provider, bytes32 account, ResourceData.ValuePayload[] payloads);

	event Paid(address provider, bytes32 account, ResourceData.ValuePayload[] payloads, uint256 value, uint256 nonce, uint256 amount);

	/// @dev pay from source chain only called by message receiver
	/// @param message payment payload message bytes
	function celerExec(bytes calldata message) external;

	/// @dev pay on dst chain
	/// @param provider provider address
	/// @param account user account
	/// @param payloads payment payloads
	/// @param nonce voucher nonce
	/// @param amount voucher amount
	/// @param signature vourcher signature for provider
	/// @return value total token value
	function pay(address provider, bytes32 account, ResourceData.ValuePayload[] memory payloads, uint256 nonce, uint256 amount, bytes memory signature) external returns(uint256 value);

	/// @dev calculate fee for ipfs storage and expiration
	/// @param provider provider address
	/// @param account user account
	/// @param amount ipfs storage amount
	/// @param expiration ipfs expiration(in seconds)
	/// @return storageFee ipfs storage fee
	/// @return expirationFee ipfs expiration fee
	function ipfsAlloctionsFee(
		address provider,
		bytes32 account,
		uint256 amount,
		uint256 expiration
	) external view returns (uint256 storageFee, uint256 expirationFee);

	/// @dev calculate ipfs storage and expiration with storage fee and expiration fee
	/// @param provider provider address
	/// @param account user account
	/// @param storageFee storage fee
	/// @param expirationFee expiration fee
	/// @return amount ipfs storage amount
	/// @return expiration ipfs expiration(in seconds)
	function ipfsAllocations(
		address provider,
		bytes32 account,
		uint256 storageFee,
		uint256 expirationFee
	) external view returns (uint256 amount, uint256 expiration);

	/// @dev return balance of provider
	/// @param provider provider address
	/// @return balance of provider
	function balanceOf(address provider) external view returns (uint256);

	/// @dev return resource price
	/// @param provider provider address
	/// @param resourceType resource type
	/// @return resource price
	function priceOf(address provider, ResourceData.ResourceType resourceType) external view returns (uint256);

	/// @dev return value of amount resource
	/// @param provider provider address
	/// @param resourceType resource type
	/// @param amount resource amount
	/// @return token value
	function getValueOf(
		address provider,
		ResourceData.ResourceType resourceType,
		uint256 amount
	) external view returns (uint256);

	/// @dev return resource amount with value
	/// @param provider provider address
	/// @param resourceType resource type
	/// @param value token value
	/// @return resource amount
	function getAmountOf(
		address provider,
		ResourceData.ResourceType resourceType,
		uint256 value
	) external view returns (uint256);
}
