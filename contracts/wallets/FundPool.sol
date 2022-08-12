// SPDX-License-Identifier: UNLICENSE

pragma solidity >=0.8.0;

import '@openzeppelin/contracts-upgradeable/security/ReentrancyGuardUpgradeable.sol';
import '@openzeppelin/contracts-upgradeable/utils/math/SafeMathUpgradeable.sol';
import '@openzeppelin/contracts-upgradeable/token/ERC20/utils/SafeERC20Upgradeable.sol';

import '../govers/RouterWrapper.sol';
import '../access/OwnerWithdrawable.sol';
import '../access/Pauser.sol';

/// @author Alexandas
/// @dev FundPool contract
contract FundPool is IFundPool, OwnerWithdrawable, Pauser, ReentrancyGuardUpgradeable, RouterWrapper {
	using SafeMathUpgradeable for uint256;
	using SafeERC20Upgradeable for IERC20Upgradeable;

	/// @dev account balances
	mapping(address => mapping(bytes32 => uint256)) internal balances;

	constructor() initializer {}

	/// @dev proxy initialize function
	/// @param owner contract owner
	/// @param pauser contract pauser
	/// @param router router contract address
	function initialize(
		address owner,
		address pauser,
		IRouter router
	) external initializer {
		_transferOwnership(owner);
		__Init_Pauser(pauser);
		__Init_Router(router);
	}

	/// @dev recharge for account
	/// @param provider provider address
	/// @param account user account
	/// @param amount token amount
	function recharge(
		address provider,
		bytes32 account,
		uint256 amount
	) external override whenNotPaused nonReentrant {
		require(amount > 0, 'FundPool: zero amount');
		require(router.ProviderController().accountExists(provider, account), 'FundPool: nonexistent account');
		_recharge(provider, account, amount);
	}

	/// @dev initialize wallet and recharge for account
	/// @param provider provider address
	/// @param account user account
	/// @param walletSig wallet signature
	/// @param bills billing data
	/// @param timeout tx timeout
	/// @param nonce billing nonce
	/// @param billSig bill signature
	/// @return fee bill fee
	/// @param to token receiver
	/// @param amount token amount
	function initWalletAndWithdraw(
		address provider,
		bytes32 account,
		bytes memory walletSig,
		bytes memory bills,
		uint256 timeout,
		uint64 nonce,
		bytes memory billSig,
		address to,
		uint256 amount
	) external override whenNotPaused nonReentrant returns (uint256 fee) {
		require(amount > 0, 'FundPool: zero amount');
		router.ProviderController().poolInitWallet(provider, account, msg.sender, walletSig);
		return _withdraw(provider, account, bills, timeout, nonce, billSig, to, amount);
	}

	function _recharge(
		address provider,
		bytes32 account,
		uint256 amount
	) internal {
		balances[provider][account] = balances[provider][account].add(amount);
		router.Token().safeTransferFrom(msg.sender, address(this), amount);
		emit Recharged(provider, account, amount);
	}

	/// @dev spend bills for account
	/// @param provider provider address
	/// @param account user account
	/// @param bills billing data
	/// @param timeout tx timeout
	/// @param nonce billing nonce
	/// @param signature provider signature
	/// @return fee bills fee
	function spend(
		address provider,
		bytes32 account,
		bytes memory bills,
		uint256 timeout,
		uint64 nonce,
		bytes memory signature
	) external override whenNotPaused nonReentrant returns (uint256 fee) {
		require(router.ProviderController().accountExists(provider, account), 'FundPool: nonexistent account');
		fee = _spend(provider, account, bills, timeout, nonce, signature);
	}

	function _spend(
		address provider,
		bytes32 account,
		bytes memory bills,
		uint256 timeout,
		uint64 nonce,
		bytes memory signature
	) internal returns (uint256 fee) {
		IBilling billing = router.Billing();
		fee = billing.spend(provider, account, bills, timeout, nonce, signature);
		uint256 balance = balanceOf(provider, account);
		require(balance >= fee, 'FundPool: insufficient balance for billing fee');
		balances[provider][account] = balances[provider][account].sub(fee);
		router.Token().safeTransfer(address(billing), fee);
		emit Spent(provider, account, fee);
	}

	/// @dev withdraw token for account
	/// @param provider provider address
	/// @param account user account
	/// @param bills billing data
	/// @param timeout tx timeout
	/// @param nonce billing nonce
	/// @param signature billing signature
	/// @param to token receiver
	/// @param amount token amount
	/// @param signature provider signature
	/// @return fee bill fee
	function withdraw(
		address provider,
		bytes32 account,
		bytes memory bills,
		uint256 timeout,
		uint64 nonce,
		bytes memory signature,
		address to,
		uint256 amount
	) external override whenNotPaused nonReentrant returns (uint256 fee) {
		IProviderController controller = router.ProviderController();
		require(controller.walletOf(provider, account) == msg.sender, 'FundPool: caller is not the wallet for the account');
		return _withdraw(provider, account, bills, timeout, nonce, signature, to, amount);
	}

	function _withdraw(
		address provider,
		bytes32 account,
		bytes memory bills,
		uint256 timeout,
		uint64 nonce,
		bytes memory signature,
		address to,
		uint256 amount
	) internal returns (uint256 fee) {
		fee = _spend(provider, account, bills, timeout, nonce, signature);
		require(balanceOf(provider, account) >= amount, 'FundPool: insufficient balance for withdrawal');
		balances[provider][account] = balances[provider][account].sub(amount);
		router.Token().safeTransfer(to, amount);
		emit Withdrawn(provider, account, to, amount);
	}

	/// @dev return wallet of the account
	/// @param provider provider address
	/// @param account user account
	/// @return wallet of the account
	function walletOf(address provider, bytes32 account) public view override returns (address) {
		return router.ProviderController().walletOf(provider, account);
	}

	/// @dev return balance of account
	/// @param provider provider address
	/// @param account user account
	/// @return balance of account account
	function balanceOf(address provider, bytes32 account) public view returns (uint256) {
		require(router.ProviderController().accountExists(provider, account), 'FundPool: nonexistent account');
		return balances[provider][account];
	}

}
