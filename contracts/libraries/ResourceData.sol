// SPDX-License-Identifier: UNLICENSE

pragma solidity >=0.8.0;
import '@openzeppelin/contracts-upgradeable/utils/math/SafeMathUpgradeable.sol';
import '@openzeppelin/contracts-upgradeable/interfaces/IERC20Upgradeable.sol';

/// @author Alexandas
/// @dev resource data library
library ResourceData {
	using SafeMathUpgradeable for uint256;

	enum ResourceType {
		Null,
		BuildingTime,
		Bandwidth,
		ARStorage,
		IPFSStorage
	}

	struct ValuePayload {
		ResourceData.ResourceType resourceType;
		uint256[] values;
	}

	struct AmountPayload {
		ResourceData.ResourceType resourceType;
		uint256[] amounts;
	}

	struct ValuePayloads {
		ResourceData.ValuePayload[] payloads;
	}

	function convertSourceChainPayloads(ValuePayloads memory valuePayloads, uint256 dstAmount)
		internal
		pure
		returns (ResourceData.ValuePayload[] memory newPayloads)
	{
		ResourceData.ValuePayload[] memory payloads = valuePayloads.payloads;
		require(payloads.length > 0, 'ResourceData: invalid payload length');
		uint256 total = totalValue(payloads);
		require(total > 0, 'ResourceData: zero total value');
		for (uint256 i = 0; i < payloads.length; i++) {
			require(payloads[i].values.length > 0, 'ResourceData: invalid value length');
			for (uint256 j = 0; j < payloads[i].values.length; j++) {
				payloads[i].values[j] = payloads[i].values[j].mul(dstAmount).div(total);
			}
		}
		return payloads;
	}

	/// @dev payment payload total value
	/// @param payloads payment payloads
	/// @return value total value
	function totalValue(ResourceData.ValuePayload[] memory payloads) internal pure returns (uint256 value) {
		require(payloads.length > 0, 'ResourceData: invalid payloads length');
		for (uint256 i = 0; i < payloads.length; i++) {
			for (uint256 j = 0; j < payloads[i].values.length; j++) {
				value = value.add(payloads[i].values[j]);
			}
		}
	}

	/// @dev match token amount to resource decimals
	/// @param token token contract address
	/// @param value token amount with resource decimals
	/// @return resource value
	function matchTokenToResource(IERC20Upgradeable token, uint256 value) internal view returns (uint256) {
		uint256 _tokenDecimals = tokenDecimals(token);
		uint256 _resourceDecimals = decimals();
		if (_tokenDecimals <= _resourceDecimals) {
			return value.mul(10**(_resourceDecimals.sub(_tokenDecimals)));
		}
		return value.div(10**(_tokenDecimals.sub(_resourceDecimals)));
	}

	/// @dev match value to token decimals
	/// @param token token contract address
	/// @param value resource value
	/// @return token value
	function matchResourceToToken(IERC20Upgradeable token, uint256 value) internal view returns (uint256) {
		uint256 _tokenDecimals = tokenDecimals(token);
		uint256 _resourceDecimals = decimals();
		if (_tokenDecimals <= _resourceDecimals) {
			return value.div(10**(_resourceDecimals.sub(_tokenDecimals)));
		}
		return value.mul(10**(_tokenDecimals.sub(_resourceDecimals)));
	}

	/// @dev return resource decimals
	/// @return resource decimals
	function decimals() internal pure returns (uint256) {
		return 18;
	}

	/// @dev return token decimals
	/// @return token decimals
	function tokenDecimals(IERC20Upgradeable token) internal view returns (uint256) {
		// keccak256(bytes4('decimals()'))
		(bool success, bytes memory data) = address(token).staticcall(hex'313ce567');
		require(success, 'ResourceData: invalid token');
		return abi.decode(data, (uint256));
	}
}
