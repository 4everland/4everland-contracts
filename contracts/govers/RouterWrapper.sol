// SPDX-License-Identifier: UNLICENSE

pragma solidity >=0.8.0;
import '@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol';
import '../interfaces/IRouter.sol';

/// @author Alexandas
/// @dev Router wrapper contract
abstract contract RouterWrapper is Initializable {
	/// @dev router contract address
	IRouter public router;

	/// @dev emit when provider registry contract updated
	/// @param router contract address
	event RouterUpdated(IRouter router);

	modifier onlyGovernance() {
		IGovernance governance = router.Governance();
		require(msg.sender == address(governance), 'RouterWrapper: caller is not the governance');
		_;
	}

	modifier onlyProviderController() {
		IProviderController controller = router.ProviderController();
		require(msg.sender == address(controller), 'RouterWrapper: caller is not the provider controller');
		_;
	}

	modifier onlyProvider() {
		IProviderRegistry providerRegistry = router.ProviderRegistry();
		require(providerRegistry.isProvider(msg.sender), 'RouterWrapper: caller is not the provider');
		_;
	}

	modifier onlyMessageReceiver() {
		address messageReceiver = router.MessageReceiver();
		require(msg.sender == messageReceiver, 'RouterWrapper: caller is not message receiver');
		_;
	}

	modifier onlyDstChainPayment() {
		IDstChainPayment dstChainPayment = router.DstChainPayment();
		require(msg.sender == address(dstChainPayment), 'RouterWrapper: caller is not dst chain payment');
		_;
	}

	modifier onlyFundPool() {
		IFundPool pool = router.FundPool();
		require(msg.sender == address(pool), 'RouterWrapper: caller is not fund pool');
		_;
	}

	/// @dev initialize provider registry contract
	/// @param _router contract address
	function __Init_Router(IRouter _router) internal onlyInitializing {
		_setRouter(_router);
	}

	function _setRouter(IRouter _router) internal {
		require(address(_router) != address(0), 'RouterWrapper: zero address');
		router = _router;
		emit RouterUpdated(_router);
	}
}
