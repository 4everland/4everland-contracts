// SPDX-License-Identifier: UNLICENSE

pragma solidity >=0.8.0;

import '../libraries/ResourceData.sol';

/// @author Alexandas
/// @dev provider controller interface
interface IProviderController {
	/// @dev emit when account registered in provider
	/// @param provider provider address
	/// @param account user account
	event AccountRegistered(address provider, bytes32 account);

	/// @dev emit when provider drip resource to account
	/// @param provider provider address
	/// @param account user account
	event ProviderDripped(address provider, bytes32 account);

	/// @dev emit when wallet types hash updated
	/// @param hash wallet types hash
	event WalletTypesHashUpdated(bytes32 hash);

	/// @dev emit when wallet transferred
	/// @param provider provider address
	/// @param account user account
	/// @param from original wallet address
	/// @param to new wallet address
	event WalletTransferred(address provider, bytes32 account, address from, address to);

	/// @dev keccak256("Wallet(address provider,bytes32 account,address wallet)")
	function walletTypesHash() external view returns (bytes32);

	/// @dev register account
	/// @param account user account
	function registerAccount(bytes32 account) external;

	/// @dev register multiple account
	/// @param accounts user accounts
	function registerMult(bytes32[] memory accounts) external;

	/// @dev Explain to a developer any extra details
	/// @param provider provider address
	/// @param account user account
	/// @return whether account exists
	function accountExists(address provider, bytes32 account) external view returns (bool);

	/// @dev provider drip resource to multiple accounts
	/// @param accounts user accounts
	/// @param payloads resource amount payloads
	function dripMult(
		bytes32[] memory accounts,
		ResourceData.AmountPayload[][] memory payloads
	) external;

	/// @dev provider drip resource to user account
	/// @param account user account
	/// @param payloads resource amount payloads
	function drip(
		bytes32 account,
		ResourceData.AmountPayload[] memory payloads
	) external;

	/// @dev provider register and drip resource for multiple accounts
	/// @param accounts user accounts
	/// @param payloads resource amount payloads
	function registerAndDripMult(
		bytes32[] memory accounts,
		ResourceData.AmountPayload[][] memory payloads
	) external;

	/// @dev initialize wallet for the given account
	/// @param provider provider address
	/// @param account user account
	/// @param wallet account wallet
	/// @param signature provider signature
	function initWallet(
		address provider,
		bytes32 account,
		address wallet,
		bytes memory signature
	) external;

	/// @dev initialize wallet for the given account called by fund pool
	/// @param provider provider address
	/// @param account user account
	/// @param wallet account wallet
	/// @param signature provider signature
	function poolInitWallet(
		address provider,
		bytes32 account,
		address wallet,
		bytes memory signature
	) external;

	/// @dev transfer wallet for the account
	/// @param provider provider address
	/// @param account user account
	/// @param newWallet account wallet
	function transferWallet(
		address provider,
		bytes32 account,
		address newWallet
	) external;

	/// @dev return wallet for the account
	/// @param provider provider address
	/// @param account user account
	/// @return wallet for the account
	function walletOf(address provider, bytes32 account) external view returns (address);

	/// @dev return whether wallet exists
	/// @param provider provider address
	/// @param account user account
	/// @return whether wallet exists
	function walletExists(address provider, bytes32 account) external view returns (bool);
}
