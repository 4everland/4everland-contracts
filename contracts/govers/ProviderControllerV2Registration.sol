// SPDX-License-Identifier: GPL-3.0-only

pragma solidity >=0.8.0;

import './ProviderControllerV2.sol';
import '../interfaces/IProviderControllerV2Registration.sol';

/// @author Alexandas
/// @dev provider controller contract
contract ProviderControllerV2Registration is ProviderControllerV2, IProviderControllerV2Registration {

	bytes32 public registerTypedHash;

	function initializeRegisterTypedHash(string memory types) external onlyAdmin {
		registerTypedHash = keccak256(bytes(types));
	}

	/// @dev register account
	/// @param provider provider address
	/// @param account user account
	/// @param signature provider signature
	function registerAccount(address provider, bytes32 account, bytes memory signature) external override {
		bytes32 hash = hashTypedDataV4ForRegister(provider, account);
		require(router.ProviderRegistry().isValidSignature(provider, hash, signature), 'ProviderControllerV2Registration: invalid signature');
		_registerAccount(provider, account);
	}

	function hashRegisterTypes(
		address provider,
		bytes32 account
	) public view returns (bytes32) {
		return keccak256(abi.encode(registerTypedHash, provider, account));
	}

	function hashTypedDataV4ForRegister(
		address provider,
		bytes32 account
	) public view returns (bytes32) {
		return _hashTypedDataV4(hashRegisterTypes(provider, account));
	}

}