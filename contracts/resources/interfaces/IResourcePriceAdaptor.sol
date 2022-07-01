// SPDX-License-Identifier: UNLICENSE

pragma solidity >=0.8.0;

import '../../libraries/ResourceData.sol';

/// @author Alexandas
/// @dev resource adpator interface
interface IResourcePriceAdaptor {
	struct PriceAdaptor {
		ResourceData.ResourceType resourceType;
		uint256 price;
	}

	/// @dev emit when index block updated
	/// @param provider provider address
	/// @param priceIndexBlock price index block
	event PriceIndexBlockUpdated(address provider, uint256 priceIndexBlock);

	/// @dev emit when price updated
	/// @param provider provider address
	/// @param adaptors price adaptors
	event PriceAdaptorsUpdated(address provider, PriceAdaptor[] adaptors);

	/// @dev get price for resource at a specific block
	/// @param provider provider address
	/// @param resourceType resource type
	/// @param priceIndexBlock block number
	/// @return price for resource at a specific block
	function priceAt(address provider, ResourceData.ResourceType resourceType, uint256 priceIndexBlock) external view returns (uint256);

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
	) external view returns (uint256);

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
	) external view returns (uint256);

	/// @dev return resource price
	/// @param provider provider address
	/// @param resourceType resource type
	/// @return resource price
	function priceOf(address provider, ResourceData.ResourceType resourceType) external view returns (uint256);

	/// @dev return value of amount resource
	/// @param provider provider address
	/// @param resourceType resource type
	/// @param amount resource amount
	/// @return token value in resource decimals(18)
	function getValueOf(address provider, ResourceData.ResourceType resourceType, uint256 amount) external view returns (uint256);

	/// @dev return resource amount with value
	/// @param provider provider address
	/// @param resourceType resource type
	/// @param value token value in resource decimals(18)
	/// @return resource amount
	function getAmountOf(address provider, ResourceData.ResourceType resourceType, uint256 value) external view returns (uint256);

}
