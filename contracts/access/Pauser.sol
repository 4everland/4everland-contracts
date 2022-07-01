// SPDX-License-Identifier: GPL-3.0-only

pragma solidity >=0.8.0;

import '@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol';
import '@openzeppelin/contracts-upgradeable/security/PausableUpgradeable.sol';

/// @author Alexandas
/// @dev Pauser contract
abstract contract Pauser is OwnableUpgradeable, PausableUpgradeable {
	/// @dev all pausers
	mapping(address => bool) public pausers;

	/// @dev emit when pauser is added
	/// @param account pauser address
	event PauserAdded(address account);

	/// @dev emit when pauser is removed
	/// @param account pauser address
	event PauserRemoved(address account);

	function __Init_Pauser(address account) internal onlyInitializing {
		_addPauser(account);
	}

	modifier onlyPauser() {
		require(isPauser(msg.sender), 'Pauser: caller is not the pauser');
		_;
	}

	/// @dev pause the contract
	function pause() public onlyPauser {
		_pause();
	}

	/// @dev unpause the contract
	function unpause() public onlyPauser {
		_unpause();
	}

	/// @dev whether the account is the contract pauser
	/// @param account address
	/// @return whether account is a pauser
	function isPauser(address account) public view returns (bool) {
		return pausers[account];
	}

	/// @dev add a pauser for the contract
	/// @param account address
	function addPauser(address account) public onlyOwner {
		_addPauser(account);
	}

	/// @dev remove a pauser for the contract
	/// @param account address
	function removePauser(address account) public onlyOwner {
		_removePauser(account);
	}

	/// @dev remove a pauser for the contract
	function renouncePauser() public {
		_removePauser(msg.sender);
	}

	function _addPauser(address account) private {
		require(!isPauser(account), 'Pauser: account is already pauser');
		pausers[account] = true;
		emit PauserAdded(account);
	}

	function _removePauser(address account) private {
		require(isPauser(account), 'Pauser: account is not pauser');
		delete pausers[account];
		emit PauserRemoved(account);
	}
}
