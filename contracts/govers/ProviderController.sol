// SPDX-License-Identifier: GPL-3.0-only

pragma solidity >=0.8.0;

import '@openzeppelin/contracts-upgradeable/utils/cryptography/draft-EIP712Upgradeable.sol';

import './RouterWrapper.sol';
import '../access/Pauser.sol';

/// @author Alexandas
/// @dev provider controller contract
contract ProviderController is IProviderController, EIP712Upgradeable, Pauser, RouterWrapper {
	using SafeMathUpgradeable for uint256;
	/// @dev all accounts
	mapping(address => mapping(bytes32 => bool)) internal accounts;

	/// @dev all wallets
	mapping(address => mapping(bytes32 => address)) internal wallets;

	/// @dev keccak256("Wallet(address provider,bytes32 account,address wallet)")
	bytes32 public override walletTypesHash;

	constructor() initializer {}

	/// @dev proxy initialize function
	/// @param owner contract owner
	/// @param pauser contract pauser
	/// @param router router contract address
	function initialize(
		address owner,
		address pauser,
		string memory name,
		string memory version,
		string memory walletTypes,
		IRouter router
	) external initializer {
		_transferOwnership(owner);
		__Init_Pauser(pauser);
		__EIP712_init(name, version);
		__Init_Wallet_Types_Hash(walletTypes);
		__Init_Router(router);
	}

	/// @dev initialize wallet types hash
	/// @param types wallet types
	function __Init_Wallet_Types_Hash(string memory types) internal onlyInitializing {
		_setWalletTypesHash(keccak256(bytes(types)));
	}

	/// @dev register account
	/// @param account user account
	function registerAccount(bytes32 account) external override onlyProvider {
		_registerAccount(msg.sender, account);
	}

	/// @dev register multiple account
	/// @param accounts user accounts
	function registerMult(bytes32[] memory accounts) external override onlyProvider {
		for (uint256 i = 0; i < accounts.length; i++) {
			_registerAccount(msg.sender, accounts[i]);
		}
	}

	function _registerAccount(address provider, bytes32 account) internal {
		require(!accountExists(provider, account), 'ProviderController: account exists');
		require(router.ProviderRegistry().isProvider(msg.sender), 'ProviderController: nonexistent provider');
		accounts[provider][account] = true;

		emit AccountRegistered(provider, account);
	}

	/// @dev return whether the account exists
	/// @param provider provider address
	/// @param account user account
	/// @return whether account exists
	function accountExists(address provider, bytes32 account) public view override returns (bool) {
		require(router.ProviderRegistry().isProvider(provider), 'ProviderController: nonexistent provider');
		return accounts[provider][account];
	}

	/// @dev provider drip resource to multiple accounts
	/// @param accounts user accounts
	/// @param payloads resource amount payloads
	function dripMult(
		bytes32[] memory accounts,
		ResourceData.AmountPayload[][] memory payloads
	) external override onlyProvider {
		require(accounts.length > 0, 'ProviderController: invalid accounts length');
		require(payloads.length > 0, 'ProviderController: invalid payloads length');
		require(accounts.length == payloads.length, 'ProviderController: inconsitent parameter length');
		for (uint256 i = 0; i < accounts.length; i++) {
			_drip(msg.sender, accounts[i], payloads[i]);
		}
	}

	/// @dev provider drip resource to user account
	/// @param account user account
	/// @param payloads resource amount payloads
	function drip(
		bytes32 account,
		ResourceData.AmountPayload[] memory payloads
	) external override onlyProvider {
		_drip(msg.sender, account, payloads);
	}

	function _drip(
		address provider,
		bytes32 account,
		ResourceData.AmountPayload[] memory payloads
	) internal {
		require(accountExists(provider, account), 'AccountRegistry: account exists');
		require(router.ProviderRegistry().isProvider(provider), 'ProviderController: nonexistent provider');
		require(payloads.length > 0, 'ProviderController: empty payloads');
		for (uint256 i = 0; i < payloads.length; i++) {
			ResourceData.AmountPayload memory payload = payloads[i];
			ResourceData.ResourceType resourceType = payload.resourceType;
			if (resourceType == ResourceData.ResourceType.BuildingTime) {
				require(payload.amounts.length == 1, 'ProviderController: invalid amounts length for building time');
				router.BuildingTimeController().drip(provider, account, payload.amounts[0]);
			} else if (resourceType == ResourceData.ResourceType.Bandwidth) {
				require(payload.amounts.length == 1, 'ProviderController: invalid amounts length for bandwidth');
				router.BandwidthController().drip(provider, account, payload.amounts[0]);
			} else if (resourceType == ResourceData.ResourceType.ARStorage) {
				require(payload.amounts.length == 1, 'ProviderController: invalid amounts length for ar storage');
				router.ARStorageController().drip(provider, account, payload.amounts[0]);
			} else if (resourceType == ResourceData.ResourceType.IPFSStorage) {
				require(payload.amounts.length == 2, 'ProviderController: invalid amounts length for ipfs storage');
				router.IPFSStorageController().drip(provider, account, payload.amounts[0], payload.amounts[1]);
			} else {
				revert('ProviderController: unknown resource type');
			}
		}
		emit ProviderDripped(provider, account);
	}

	/// @dev provider register and drip resource for multiple accounts
	/// @param accounts user accounts
	/// @param payloads resource amount payloads
	function registerAndDripMult(
		bytes32[] memory accounts,
		ResourceData.AmountPayload[][] memory payloads
	) external override onlyProvider {
		require(accounts.length > 0, 'ProviderController: invalid accounts length');
		require(payloads.length > 0, 'ProviderController: invalid payloads length');
		require(accounts.length == payloads.length, 'ProviderController: inconsitent parameter length');
		for (uint256 i = 0; i < accounts.length; i++) {
			_registerAccount(msg.sender, accounts[i]);
			_drip(msg.sender, accounts[i], payloads[i]);
		}
	}

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
	) external override {
		require(msg.sender == wallet, 'ProviderController: caller in not the wallet');
		require(accountExists(provider, account), 'ProviderController: nonexistent account');
		require(!walletExists(provider, account), 'ProviderController: wallet exists');
		bytes32 hash = hashTypedDataV4ForWallet(provider, account, wallet);
		require(router.ProviderRegistry().isValidSignature(provider, hash, signature), 'ProviderController: invalid signature');
		_transferWallet(provider, account, address(0), wallet);
	}

	/// @dev transfer wallet for the account
	/// @param provider provider address
	/// @param account user account
	/// @param newWallet account wallet
	function transferWallet(
		address provider,
		bytes32 account,
		address newWallet
	) external override {
		address wallet = walletOf(provider, account);
		require(msg.sender == wallet, 'ProviderController: caller is not the current wallet');
		_transferWallet(provider, account, wallet, newWallet);
	}

	function walletOf(address provider, bytes32 account) public view override returns (address) {
		require(walletExists(provider, account), 'ProviderController: nonexistent wallet');
		return wallets[provider][account];
	}

	function _transferWallet(
		address provider,
		bytes32 account,
		address from,
		address to
	) internal {
		wallets[provider][account] = to;
		emit WalletTransferred(provider, account, from, to);
	}

	/// @dev return recharge hash typed v4
	/// @param provider provider address
	/// @param account user account
	/// @param wallet wallet address
	/// @return wallet hash typed v4
	function hashTypedDataV4ForWallet(
		address provider,
		bytes32 account,
		address wallet
	) public view returns (bytes32) {
		return _hashTypedDataV4(hashWalletTypes(provider, account, wallet));
	}

	/// @dev return recharge typed hash
	/// @param provider provider address
	/// @param account user account
	/// @param wallet wallet address
	/// @return wallet hash typed v4
	function hashWalletTypes(
		address provider,
		bytes32 account,
		address wallet
	) public view returns (bytes32) {
		return keccak256(abi.encode(walletTypesHash, provider, account, wallet));
	}

	function _setWalletTypesHash(bytes32 hash) internal {
		walletTypesHash = hash;
		emit WalletTypesHashUpdated(hash);
	}

	/// @dev return whether wallet exists
	/// @param provider provider address
	/// @param account user account
	/// @return whether wallet exists
	function walletExists(address provider, bytes32 account) public view override returns (bool) {
		return wallets[provider][account] != address(0);
	}
}
