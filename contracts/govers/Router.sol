// SPDX-License-Identifier: GPL-3.0-only

pragma solidity >=0.8.0;

import '@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol';

import '../interfaces/IRouter.sol';

/// @author Alexandas
/// @dev Router contract
contract Router is IRouter, OwnableUpgradeable {
	/// @dev message receiver contract address
	address public override MessageReceiver;

	/// @dev Governance contract address
	IGovernance public override Governance;

	/// @dev providers contract address
	IProviderRegistry public override ProviderRegistry;

	/// @dev provider controller contract address
	IProviderController public override ProviderController;

	/// @dev token address
	IERC20Upgradeable public override Token;

	/// @dev return building time controller
	INormalResourceController public override BuildingTimeController;

	/// @dev return bandwidth controller
	INormalResourceController public override BandwidthController;

	/// @dev return AR storage controller
	INormalResourceController public override ARStorageController;

	/// @dev return ipfs storage controller
	IIPFSStorageController public override IPFSStorageController;

	/// @dev return resource price adaptor contract address
	IResourcePriceAdaptor public override ResourcePriceAdaptor;

	/// @dev dst chain payment contract address
	IDstChainPayment public override DstChainPayment;

	/// @dev billing contract address
	IBilling public override Billing;

	/// @dev fund pool contract address
	IFundPool public override FundPool;

	constructor() initializer {}

	/// @dev proxy initialize function
	/// @param owner contract owner
	function initialize(address owner) external initializer {
		_transferOwnership(owner);
	}

	/// @dev set messageReceiver contract address
	/// @param _messageReceiver message receiver contract address
	function setMessageReceiver(address _messageReceiver) external onlyOwner {
		require(address(_messageReceiver) != address(0), 'Router: zero address');
		MessageReceiver = _messageReceiver;
		emit MessageReceiverUpdated(_messageReceiver);
	}

	/// @dev update GoverDrip contract address
	/// @param _governance governance contract address
	function setGovernance(IGovernance _governance) external onlyOwner {
		require(address(_governance) != address(0), 'Router: zero address');
		Governance = _governance;
		emit GovernanceUpdated(_governance);
	}

	/// @dev update provider registry contract
	/// @param _providerRegistry provider registry contract address
	function setProviderRegistry(IProviderRegistry _providerRegistry) external onlyOwner {
		require(address(_providerRegistry) != address(0), 'Router: zero address');
		ProviderRegistry = _providerRegistry;
		emit ProviderRegistryUpdated(_providerRegistry);
	}

	/// @dev update provider controller contract address
	/// @param _providerController provider controller contract address
	function setProviderController(IProviderController _providerController) external onlyOwner {
		require(address(_providerController) != address(0), 'Router: zero address');
		ProviderController = _providerController;
		emit ProviderControllerUpdated(_providerController);
	}

	/// @dev update token address
	/// @param _token token address
	function setToken(IERC20Upgradeable _token) external onlyOwner {
		require(address(_token) != address(0), 'Router: zero address');
		Token = _token;
		emit TokenUpdated(_token);
	}

	/// @dev update building time controller contract
	/// @param _buildingTimeController building time controller contract
	function setBuildingTimeController(INormalResourceController _buildingTimeController) external onlyOwner {
		require(address(_buildingTimeController) != address(0), 'Router: zero address');
		BuildingTimeController = _buildingTimeController;
		emit BuildingTimeControllerUpdated(_buildingTimeController);
	}

	/// @dev update bandwidth controller contract
	/// @param _bandwidthController bandwidth controller contract
	function setBandwidthController(INormalResourceController _bandwidthController) external onlyOwner {
		require(address(_bandwidthController) != address(0), 'Router: zero address');
		BandwidthController = _bandwidthController;
		emit BandwidthControllerUpdated(_bandwidthController);
	}

	/// @dev update AR storage controller contract
	/// @param _arStorageController AR storage controller contract
	function setARStorageController(INormalResourceController _arStorageController) external onlyOwner {
		require(address(_arStorageController) != address(0), 'Router: zero address');
		ARStorageController = _arStorageController;
		emit ARStorageControllerUpdated(_arStorageController);
	}

	/// @dev update ipfs storage controller contract
	/// @param _ipfsStorageController IPFS storage controller contract
	function setIPFSStorageController(IIPFSStorageController _ipfsStorageController) external onlyOwner {
		require(address(_ipfsStorageController) != address(0), 'Router: zero address');
		IPFSStorageController = _ipfsStorageController;
		emit IPFSStorageControllerUpdated(_ipfsStorageController);
	}

	/// @dev update resource adaptor contract
	/// @param _resourcePriceAdaptor resource adaptor contract
	function setResourcePriceAdaptor(IResourcePriceAdaptor _resourcePriceAdaptor) external onlyOwner {
		require(address(_resourcePriceAdaptor) != address(0), 'Router: zero address');
		ResourcePriceAdaptor = _resourcePriceAdaptor;
		emit ResourcePriceAdaptorUpdated(_resourcePriceAdaptor);
	}

	/// @dev update dst chain payment contract address
	/// @param _dstChainPayment dst chain payment contract address
	function setDstChainPayment(IDstChainPayment _dstChainPayment) external onlyOwner {
		require(address(_dstChainPayment) != address(0), 'Router: zero address');
		DstChainPayment = _dstChainPayment;
		emit DstChainPaymentUpdated(_dstChainPayment);
	}

	/// @dev update resource adaptor contract
	/// @param _billing billing contract
	function setBilling(IBilling _billing) external onlyOwner {
		require(address(_billing) != address(0), 'Router: zero address');
		Billing = _billing;
		emit BillingUpdated(_billing);
	}

	/// @dev update resource adaptor contract
	/// @param _pool fund pool contract
	function setFundPool(IFundPool _pool) external onlyOwner {
		require(address(_pool) != address(0), 'Router: zero address');
		FundPool = _pool;
		emit FundPoolUpdated(_pool);
	}
}
