// SPDX-License-Identifier: UNLICENSE

pragma solidity >=0.8.0;

import '@openzeppelin/contracts-upgradeable/interfaces/IERC20Upgradeable.sol';

import '../interfaces/IGovernance.sol';
import '../interfaces/IProviderRegistry.sol';
import '../interfaces/IProviderController.sol';
import '../interfaces/IDstChainPayment.sol';
import '../interfaces/IBilling.sol';
import '../interfaces/IFundPool.sol';
import '../resources/interfaces/INormalResourceController.sol';
import '../resources/interfaces/IIPFSStorageController.sol';
import '../resources/interfaces/IResourcePriceAdaptor.sol';

/// @author Alexandas
/// @dev Router interface
interface IRouter {
	/// @dev emit when governance contract address updated
	/// @param governance governance contract address
	event GovernanceUpdated(IGovernance governance);

	/// @dev emit when message receiver updated
	/// @param messageReceiver message receiver contract address
	event MessageReceiverUpdated(address messageReceiver);

	/// @dev emit when provider registry contract updated
	/// @param _providerRegistry provider registry contract
	event ProviderRegistryUpdated(IProviderRegistry _providerRegistry);

	/// @dev emit when dst ProviderController contract address updated
	/// @param providerController ProviderController contract address
	event ProviderControllerUpdated(IProviderController providerController);

	/// @dev emit when token updated
	/// @param token token address
	event TokenUpdated(IERC20Upgradeable token);

	/// @dev emit when building time controller updated
	/// @param buildingTimeController building time controller contract
	event BuildingTimeControllerUpdated(INormalResourceController buildingTimeController);

	/// @dev emit when bandwidth controller updated
	/// @param bandwidthController bandwidth controller contract
	event BandwidthControllerUpdated(INormalResourceController bandwidthController);

	/// @dev emit when AR storage controller updated
	/// @param arStorageController AR storage controller contract
	event ARStorageControllerUpdated(INormalResourceController arStorageController);

	/// @dev emit when ipfs storage controller updated
	/// @param ipfsStorageController IPFS storage controller contract
	event IPFSStorageControllerUpdated(IIPFSStorageController ipfsStorageController);

	/// @dev emit when resource price adaptor updated
	/// @param resourcePriceAdaptor resource price adaptor contract
	event ResourcePriceAdaptorUpdated(IResourcePriceAdaptor resourcePriceAdaptor);

	/// @dev emit when dst chain payment contract address updated
	/// @param dstChainPayment dst chain payment contract address
	event DstChainPaymentUpdated(IDstChainPayment dstChainPayment);

	/// @dev emit when billing contract updated
	/// @param billing billing contract
	event BillingUpdated(IBilling billing);

	/// @dev emit when fund pool contract updated
	/// @param fundPool fund pool contract
	event FundPoolUpdated(IFundPool fundPool);

	/// @dev message receiver contract address
	function MessageReceiver() external view returns (address);

	/// @dev Governance contract address
	function Governance() external view returns (IGovernance);

	/// @dev providers contract address
	function ProviderRegistry() external view returns (IProviderRegistry);

	/// @dev provider controller contract address
	function ProviderController() external view returns (IProviderController);

	/// @dev token address
	function Token() external view returns (IERC20Upgradeable);

	/// @dev return building time controller
	function BuildingTimeController() external view returns (INormalResourceController);

	/// @dev return bandwidth controller
	function BandwidthController() external view returns (INormalResourceController);

	/// @dev return AR storage controller
	function ARStorageController() external view returns (INormalResourceController);

	/// @dev return ipfs storage controller
	function IPFSStorageController() external view returns (IIPFSStorageController);

	/// @dev return resource price adaptor contract address
	function ResourcePriceAdaptor() external view returns (IResourcePriceAdaptor);

	/// @dev dst chain payment contract address
	function DstChainPayment() external view returns (IDstChainPayment);

	/// @dev billing contract address
	function Billing() external view returns (IBilling);

	/// @dev fund pool contract address
	function FundPool() external view returns (IFundPool);
}
