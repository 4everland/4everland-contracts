// SPDX-License-Identifier: GPL-3.0-only

pragma solidity >=0.8.0;

import './DstChainPaymentV2.sol';
import '../interfaces/IProviderControllerV2Registration.sol';

contract DstChainPaymentV2Registration is DstChainPaymentV2 {
	using ResourceData for ResourceData.ValuePayloads;
	using SafeMathUpgradeable for uint256;
	using SafeERC20Upgradeable for IERC20Upgradeable;

	function payWithRegistration(address provider, bytes32 account, ResourceData.ValuePayload[] memory payloads, uint256 nonce, uint256 amount, bytes memory signature) external whenNotPaused nonReentrant returns (uint256 value) {
		IProviderControllerV2Registration pcr = IProviderControllerV2Registration(address(router.ProviderController()));
		pcr.registerAccount(provider, account);
		IERC20Upgradeable token = router.Token();
		value = _pay(token, provider, account, payloads, nonce, amount, signature);
		if (value > 0) {
			token.safeTransferFrom(msg.sender, address(this), value);
		}
		emit Paid(provider, account, payloads, value, nonce, amount);
	}

}