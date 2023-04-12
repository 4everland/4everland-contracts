// SPDX-License-Identifier: GPL-3.0-only

pragma solidity >=0.8.0;

import './DstChainPaymentV2Registration.sol';
import '../interfaces/IProviderControllerV2Registration.sol';

contract DstChainPaymentV2Src is DstChainPaymentV2Registration {
	event PaidSrc(uint64 srcChainId, bytes32 srcTxHash, address provider, bytes32 account, ResourceData.ValuePayload[] payloads, uint256 value, uint256 nonce, uint256 amount);

	function paySrc(
		uint64 srcChainId,
		bytes32 srcTxHash,
		bytes32 account,
		ResourceData.ValuePayload[] memory payloads,
		uint256 nonce,
		uint256 amount,
		bytes memory voucherSig
	) external whenNotPaused nonReentrant onlyProvider returns (uint256 value) {
		address provider = msg.sender;
		value = _pay(router.Token(), provider, account, payloads, nonce, amount, voucherSig);
		emit PaidSrc(srcChainId, srcTxHash, provider, account, payloads, value, nonce, amount);
	}
}
