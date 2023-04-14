// SPDX-License-Identifier: UNLICENSE

pragma solidity >=0.8.0;

import './ResourcePriceAdaptor.sol';
import '../proxy/AdminWrapper.sol';

/// @author Alexandas
/// @dev Resource price adaptor contract
contract ResourcePriceAdaptorV2 is ResourcePriceAdaptor, AdminWrapper {
	using SafeMathUpgradeable for uint256;

	/// @dev return current price index blocks
	mapping(address => mapping(ResourceData.ResourceType => uint256)) public indexBlocks;

	function fixPriceIndex(address provider, uint256 index, PriceAdaptor[] memory adaptors) external onlyAdmin {
		priceIndexBlocks[provider] = index;
		_setPriceAdaptors(provider, adaptors);
	}

	/// @dev update price adaptors
	/// @param adaptors price adaptors
	function setPriceAdaptors(PriceAdaptor[] memory adaptors) external onlyProvider {
		_setPriceAdaptors(msg.sender, adaptors);
	}

	function _setPriceAdaptors(address provider, PriceAdaptor[] memory adaptors) internal {
		require(adaptors.length > 0, 'ResourcePriceAdaptor: invalid pricers');
		for (uint256 i = 0; i < adaptors.length; i++) {
			uint256 price = adaptors[i].price;
			require(price > 0, 'ResourcePriceAdaptor: invalid price');
			ResourceData.ResourceType resourceType = adaptors[i].resourceType;
			require(resourceType != ResourceData.ResourceType.Null, 'ResourcePriceAdaptor: invalid resource type');
			prices[provider][resourceType][block.number] = price;
			indexBlocks[provider][resourceType] = block.number;
		}
		emit PriceAdaptorsUpdated(provider, adaptors);
	}

	/// @dev get price for resource at a specific block
	/// @param provider provider address
	/// @param resourceType resource type
	/// @param priceIndexBlock block number
	/// @return price for resource at a specific block
	function priceAt(address provider, ResourceData.ResourceType resourceType, uint256 priceIndexBlock) public view override ValidateType(resourceType) returns (uint256) {
		require(router.ProviderRegistry().isProvider(provider), 'ResourcePriceAdaptor: nonexistent provider');
		require(prices[provider][resourceType][priceIndexBlock] != 0, 'ResourcePriceAdaptor: zero price');
		return prices[provider][resourceType][priceIndexBlock];
	}

	/// @dev get value for `amount` resource at a specific block
	/// @param provider provider address
	/// @param resourceType resource type
	/// @param amount resource amount
	/// @param priceIndexBlock block number
	/// @return token value in resource decimals(18)
	function getValueAt(
		address provider,
		ResourceData.ResourceType resourceType,
		uint256 amount,
		uint256 priceIndexBlock
	) public view override returns (uint256) {
		return priceAt(provider, resourceType, priceIndexBlock).mul(amount);
	}

	/// @dev get amount resource with value at a specific block
	/// @param provider provider address
	/// @param resourceType resource type
	/// @param value token value
	/// @param priceIndexBlock block numer
	/// @return resource amount
	function getAmountAt(
		address provider,
		ResourceData.ResourceType resourceType,
		uint256 value,
		uint256 priceIndexBlock
	) public view override returns (uint256) {
		return value.div(priceAt(provider, resourceType, priceIndexBlock));
	}

	/// @dev return resource price
	/// @param provider provider address
	/// @param resourceType resource type
	/// @return resource price
	function priceOf(address provider, ResourceData.ResourceType resourceType) public view override returns (uint256) {
		return priceAt(provider, resourceType, indexBlocks[provider][resourceType]);
	}

	/// @dev return value of amount resource
	/// @param provider provider address
	/// @param resourceType resource type
	/// @param amount resource amount
	/// @return token value in resource decimals(18)
	function getValueOf(address provider, ResourceData.ResourceType resourceType, uint256 amount) public view override returns (uint256) {
		return priceOf(provider, resourceType).mul(amount);
	}

	/// @dev return resource amount with value
	/// @param provider provider address
	/// @param resourceType resource type
	/// @param value token value in resource decimals(18)
	/// @return resource amount
	function getAmountOf(address provider, ResourceData.ResourceType resourceType, uint256 value) public view override returns (uint256) {
		return value.div(priceOf(provider, resourceType));
	}

}
