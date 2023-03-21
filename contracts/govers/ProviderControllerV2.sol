// SPDX-License-Identifier: GPL-3.0-only

pragma solidity >=0.8.0;

import './ProviderController.sol';
import '../proxy/AdminWrapper.sol';

/// @author Alexandas
/// @dev provider controller contract
contract ProviderControllerV2 is ProviderController, AdminWrapper {
	bytes32 public registerAndDripTypedHash;

	mapping(address => bytes32) public userRegistration;

	function initializeEIP712(string memory name, string memory version, string memory types) external onlyAdmin reinitializer(2) {
		__EIP712_init(name, version);
		registerAndDripTypedHash = keccak256(bytes(types));
	}

	/// @dev provider register and drip resource for multiple accounts
	/// @param provider provider address
	/// @param user user account
	/// @param account user account
	/// @param payload resource payloads
	/// @param signature provider signature
	function registerAndDrip(
		address provider,
		address user,
		bytes32 account,
		bytes memory payload,
		bytes memory signature
	) external {
		require(userRegistration[msg.sender] == bytes32(0), 'ProviderControllerV2: account already registered');
		bytes32 hash = hashTypedDataV4ForRegisterAndDrip(provider, user, account, payload);
		require(router.ProviderRegistry().isValidSignature(provider, hash, signature), 'ProviderControllerV2: invalid signature');
		userRegistration[msg.sender] = account;
		ResourceData.AmountPayload[] memory payloads = abi.decode(payload, (ResourceData.AmountPayload[]));
		_registerAccount(provider, account);
		_drip(provider, account, payloads);
	}

	function hashRegisterAndDripTypes(
		address provider,
		address user,
		bytes32 account,
		bytes memory payload
	) public view returns (bytes32) {
		return keccak256(abi.encode(registerAndDripTypedHash, provider, user, account, keccak256(payload)));
	}

	function hashTypedDataV4ForRegisterAndDrip(
		address provider,
		address user,
		bytes32 account,
		bytes memory payload
	) public view returns (bytes32) {
		return _hashTypedDataV4(hashRegisterAndDripTypes(provider, user, account, payload));
	}

}