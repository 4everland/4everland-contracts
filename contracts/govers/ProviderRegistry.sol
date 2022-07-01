// SPDX-License-Identifier: UNLICENSE

pragma solidity >=0.8.0;

import '@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol';
import '@openzeppelin/contracts-upgradeable/utils/cryptography/SignatureCheckerUpgradeable.sol';
import '../interfaces/IProviderRegistry.sol';
import './RouterWrapper.sol';

/// @author Alexandas
/// @dev provider registry contract
contract ProviderRegistry is IProviderRegistry, RouterWrapper, OwnableUpgradeable {
	/// @dev all providers
	mapping(address => bool) internal providers;

	/// @dev all provider wallets
	mapping(address => address) internal providerWallets;

	constructor() initializer {}

	/// @dev proxy initialize function
	/// @param owner contract owner
	/// @param router router contract address
	function initialize(address owner, IRouter router) external initializer {
		_transferOwnership(owner);
		__Init_Router(router);
	}

	/// @dev add a provider
	/// @param provider address
	function addProvider(address provider) external onlyGovernance {
		_addProvider(provider);
	}

	/// @dev remove a provider
	/// @param provider address
	function removeProvider(address provider) external onlyGovernance {
		_removeProvider(provider);
	}

	function _addProvider(address provider) internal {
		require(!isProvider(provider), 'ProviderRegistry: provider existed');
		providers[provider] = true;

		emit AddProvider(provider);
	}

	function _removeProvider(address provider) internal {
		require(isProvider(provider), 'ProviderRegistry: nonexistent provider');
		delete providers[provider];

		emit RemoveProvider(provider);
	}

	/// @dev add provider wallet
	/// @param wallet wallet address
	function addWallet(address wallet) external onlyProvider {
		_addWallet(msg.sender, wallet);
	}

	/// @dev remove provider wallet
	/// @param wallet wallet address
	function removeWallet(address wallet) external onlyProvider {
		_removeWallet(msg.sender, wallet);
	}

	function _addWallet(address provider, address wallet) internal {
		require(!providerWalletExists(provider), 'ProviderRegistry: provider wallet exists');
		providerWallets[provider] = wallet;

		emit AddProivderWallet(provider, wallet);
	}

	function _removeWallet(address provider, address wallet) internal {
		require(providerWalletExists(provider), 'ProviderRegistry: nonexistent provider wallet');
		delete providerWallets[provider];
		emit RemoveProviderWallet(provider, wallet);
	}

	/// @dev return provider wallet exists
	/// @param provider address
	/// @return whether provider wallet exists
	function providerWalletExists(address provider) public view override returns (bool) {
		return providerWallets[provider] != address(0);
	}

	/// @dev return provider wallet
	/// @param provider address
	/// @return provider wallet
	function providerWallet(address provider) public view override returns (address) {
		require(providerWalletExists(provider), 'ProviderRegistry: nonexistent provider wallet');
		return providerWallets[provider];
	}

	/// @dev return whether address is a provider
	/// @param provider address
	/// @return whether address is a provider
	function isProvider(address provider) public view override returns (bool) {
		return providers[provider];
	}

	/// @dev return whether a valid signature
	/// @param provider address
	/// @param hash message hash
	/// @param signature provider signature for message hash
	/// @return whether signature is valid
	function isValidSignature(
		address provider,
		bytes32 hash,
		bytes memory signature
	) public view returns (bool) {
		require(isProvider(provider), 'ProviderRegistry: nonexistent provider');
		return SignatureCheckerUpgradeable.isValidSignatureNow(provider, hash, signature);
	}
}
