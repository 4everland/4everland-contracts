// SPDX-License-Identifier: UNLICENSE

pragma solidity >=0.8.0;

/// @author Alexandas
/// @dev provider registry interface
interface IProviderRegistry {
	/// @dev emit when provider is added
	/// @param provider provider address
	event AddProvider(address provider);

	/// @dev emit when provider removed
	/// @param provider provider address
	event RemoveProvider(address provider);

	event AddProivderWallet(address provider, address wallet);

	event RemoveProviderWallet(address provider, address wallet);

	/// @dev add a provider
	/// @param provider address
	function addProvider(address provider) external;

	/// @dev remove a provider
	/// @param provider address
	function removeProvider(address provider) external;

	/// @dev return whether address is a provider
	/// @param provider address
	function isProvider(address provider) external view returns (bool);

	/// @dev return provider wallet
	/// @param provider address
	/// @return provider wallet
	function providerWallet(address provider) external view returns (address);

	/// @dev return provider wallet exists
	/// @param provider address
	/// @return whether provider wallet exists
	function providerWalletExists(address provider) external view returns (bool);

	/// @dev return whether a valid signature
	/// @param provider address
	/// @param hash message hash
	/// @param signature provider signature for message hash
	/// @return is valid signature
	function isValidSignature(
		address provider,
		bytes32 hash,
		bytes memory signature
	) external returns (bool);
}
