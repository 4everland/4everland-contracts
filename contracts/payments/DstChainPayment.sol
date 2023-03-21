// SPDX-License-Identifier: GPL-3.0-only

pragma solidity >=0.8.0;

import '@openzeppelin/contracts-upgradeable/security/ReentrancyGuardUpgradeable.sol';
import '../interfaces/IDstChainPayment.sol';
import '../govers/RouterWrapper.sol';
import '../access/OwnerWithdrawable.sol';
import '../access/Pauser.sol';
import '../libraries/ResourceData.sol';

/// @author Alexandas
/// @dev Dst chain payment contract
abstract contract DstChainPayment is IDstChainPayment, ReentrancyGuardUpgradeable, OwnerWithdrawable, Pauser, RouterWrapper {

	mapping(address => uint256) internal providerBalances;

	mapping(address => mapping(bytes32 => uint256)) internal fees;

}
