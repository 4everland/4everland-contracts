// SPDX-License-Identifier: UNLICENSE

pragma solidity >=0.8.0;

/// @author Alexandas
/// @dev FundPool interface
interface IFundPool {

	/// @dev emit when bill spent
	/// @param provider provider address
	/// @param account user account
	/// @param amount token amount
	event Spent(address provider, bytes32 account, uint256 amount);

	/// @dev emit when account recharged
	/// @param provider provider address
	/// @param account user account
	/// @param amount token amount
	event Recharged(address provider, bytes32 account, uint256 amount);

	/// @dev emit when user withdrawn
	/// @param provider provider address
	/// @param account user account
	/// @param to token receiver
	/// @param amount token amount
	event Withdrawn(address provider, bytes32 account, address to, uint256 amount);

	/// @dev recharge for account
	/// @param provider provider address
	/// @param account user account
	/// @param amount token amount
	function recharge(
		address provider,
		bytes32 account,
		uint256 amount
	) external;

	/// @dev initialize wallet and recharge for account
	/// @param provider provider address
	/// @param account user account
	/// @param amount token amount
	/// @param wallet account wallet
	/// @param signature provider signature
	function initWalletAndRecharge(
		address provider,
		bytes32 account,
		uint256 amount,
		address wallet,
		bytes memory signature
	) external;

	/// @dev spend bills for account
	/// @param provider provider address
	/// @param account user account
	/// @param bills billing data
	/// @param timeout tx timeout
	/// @param nonce billing nonce
	/// @param signature provider signature
	/// @return fee bills fee
	function spend(
		address provider,
		bytes32 account,
		bytes memory bills,
		uint256 timeout,
		uint64 nonce,
		bytes memory signature
	) external returns (uint256 fee);

	/// @dev withdraw token for account
	/// @param provider provider address
	/// @param account user account
	/// @param bills billing data
	/// @param timeout tx timeout
	/// @param nonce billing nonce
	/// @param signature billing signature
	/// @param to token receiver
	/// @param amount token amount
	/// @param signature provider signature
	/// @return fee bill fee
	function withdraw(
		address provider,
		bytes32 account,
		bytes memory bills,
		uint256 timeout,
		uint64 nonce,
		bytes memory signature,
		address to,
		uint256 amount
	) external returns (uint256 fee);

	/// @dev return wallet of the account
	/// @param provider provider address
	/// @param account user account
	/// @return wallet of the account
	function walletOf(address provider, bytes32 account) external view returns (address);

	/// @dev return balance of account
	/// @param provider provider address
	/// @param account user account
	/// @return balance of account account
	function balanceOf(address provider, bytes32 account) external view returns (uint256);
}
