/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from "ethers";
import {
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomiclabs/hardhat-ethers/types";

import * as Contracts from ".";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "FallbackManager",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.FallbackManager__factory>;
    getContractFactory(
      name: "Guard",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Guard__factory>;
    getContractFactory(
      name: "GuardManager",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.GuardManager__factory>;
    getContractFactory(
      name: "ModuleManager",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ModuleManager__factory>;
    getContractFactory(
      name: "OwnerManager",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.OwnerManager__factory>;
    getContractFactory(
      name: "EtherPaymentFallback",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.EtherPaymentFallback__factory>;
    getContractFactory(
      name: "StorageAccessible",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.StorageAccessible__factory>;
    getContractFactory(
      name: "GnosisSafe",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.GnosisSafe__factory>;
    getContractFactory(
      name: "GnosisSafeL2",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.GnosisSafeL2__factory>;
    getContractFactory(
      name: "ISignatureValidator",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ISignatureValidator__factory>;
    getContractFactory(
      name: "OwnableUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.OwnableUpgradeable__factory>;
    getContractFactory(
      name: "IERC1271Upgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC1271Upgradeable__factory>;
    getContractFactory(
      name: "Initializable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Initializable__factory>;
    getContractFactory(
      name: "PausableUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.PausableUpgradeable__factory>;
    getContractFactory(
      name: "ReentrancyGuardUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ReentrancyGuardUpgradeable__factory>;
    getContractFactory(
      name: "IERC20Upgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20Upgradeable__factory>;
    getContractFactory(
      name: "ContextUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ContextUpgradeable__factory>;
    getContractFactory(
      name: "EIP712Upgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.EIP712Upgradeable__factory>;
    getContractFactory(
      name: "Ownable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Ownable__factory>;
    getContractFactory(
      name: "IERC1822Proxiable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC1822Proxiable__factory>;
    getContractFactory(
      name: "IBeacon",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IBeacon__factory>;
    getContractFactory(
      name: "ERC1967Proxy",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC1967Proxy__factory>;
    getContractFactory(
      name: "ERC1967Upgrade",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC1967Upgrade__factory>;
    getContractFactory(
      name: "Proxy",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Proxy__factory>;
    getContractFactory(
      name: "ProxyAdmin",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ProxyAdmin__factory>;
    getContractFactory(
      name: "TransparentUpgradeableProxy",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TransparentUpgradeableProxy__factory>;
    getContractFactory(
      name: "IERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20__factory>;
    getContractFactory(
      name: "OwnerWithdrawable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.OwnerWithdrawable__factory>;
    getContractFactory(
      name: "Pauser",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Pauser__factory>;
    getContractFactory(
      name: "Governance",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Governance__factory>;
    getContractFactory(
      name: "ProviderController",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ProviderController__factory>;
    getContractFactory(
      name: "ProviderControllerV2",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ProviderControllerV2__factory>;
    getContractFactory(
      name: "ProviderControllerV2Registration",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ProviderControllerV2Registration__factory>;
    getContractFactory(
      name: "ProviderRegistry",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ProviderRegistry__factory>;
    getContractFactory(
      name: "Router",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Router__factory>;
    getContractFactory(
      name: "RouterWrapper",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.RouterWrapper__factory>;
    getContractFactory(
      name: "IBilling",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IBilling__factory>;
    getContractFactory(
      name: "IDstChainPayment",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IDstChainPayment__factory>;
    getContractFactory(
      name: "IERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20__factory>;
    getContractFactory(
      name: "IFundPool",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IFundPool__factory>;
    getContractFactory(
      name: "IGovernance",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IGovernance__factory>;
    getContractFactory(
      name: "IMessageSender",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IMessageSender__factory>;
    getContractFactory(
      name: "IProviderController",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IProviderController__factory>;
    getContractFactory(
      name: "IProviderControllerV2Registration",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IProviderControllerV2Registration__factory>;
    getContractFactory(
      name: "IProviderRegistry",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IProviderRegistry__factory>;
    getContractFactory(
      name: "IRechargeMessageSender",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IRechargeMessageSender__factory>;
    getContractFactory(
      name: "IRouter",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IRouter__factory>;
    getContractFactory(
      name: "ContentTracer",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ContentTracer__factory>;
    getContractFactory(
      name: "MessageReceiver",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MessageReceiver__factory>;
    getContractFactory(
      name: "MessageSender",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MessageSender__factory>;
    getContractFactory(
      name: "DstChainPayment",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.DstChainPayment__factory>;
    getContractFactory(
      name: "DstChainPaymentV2",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.DstChainPaymentV2__factory>;
    getContractFactory(
      name: "DstChainPaymentV2Registration",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.DstChainPaymentV2Registration__factory>;
    getContractFactory(
      name: "SrcChainPayment",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.SrcChainPayment__factory>;
    getContractFactory(
      name: "SrcChainPaymentV2",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.SrcChainPaymentV2__factory>;
    getContractFactory(
      name: "RechargeMessageReceiver",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.RechargeMessageReceiver__factory>;
    getContractFactory(
      name: "RechargeMessageSender",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.RechargeMessageSender__factory>;
    getContractFactory(
      name: "SrcChainRecharge",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.SrcChainRecharge__factory>;
    getContractFactory(
      name: "IPFSStorageController",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IPFSStorageController__factory>;
    getContractFactory(
      name: "ARStorageController",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ARStorageController__factory>;
    getContractFactory(
      name: "BandwidthController",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.BandwidthController__factory>;
    getContractFactory(
      name: "BuildingTimeController",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.BuildingTimeController__factory>;
    getContractFactory(
      name: "NormalResourceController",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.NormalResourceController__factory>;
    getContractFactory(
      name: "IIPFSStorageController",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IIPFSStorageController__factory>;
    getContractFactory(
      name: "INormalResourceController",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.INormalResourceController__factory>;
    getContractFactory(
      name: "IResource",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IResource__factory>;
    getContractFactory(
      name: "IResourcePriceAdaptor",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IResourcePriceAdaptor__factory>;
    getContractFactory(
      name: "ResourcePriceAdaptor",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ResourcePriceAdaptor__factory>;
    getContractFactory(
      name: "Billing",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Billing__factory>;
    getContractFactory(
      name: "FundPool",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.FundPool__factory>;
    getContractFactory(
      name: "FundPoolRegistration",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.FundPoolRegistration__factory>;
    getContractFactory(
      name: "SafeWallet",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.SafeWallet__factory>;
    getContractFactory(
      name: "IBridge",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IBridge__factory>;
    getContractFactory(
      name: "IOriginalTokenVault",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IOriginalTokenVault__factory>;
    getContractFactory(
      name: "IOriginalTokenVaultV2",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IOriginalTokenVaultV2__factory>;
    getContractFactory(
      name: "IPeggedTokenBridge",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IPeggedTokenBridge__factory>;
    getContractFactory(
      name: "IPeggedTokenBridgeV2",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IPeggedTokenBridgeV2__factory>;
    getContractFactory(
      name: "IMessageBus",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IMessageBus__factory>;

    getContractAt(
      name: "FallbackManager",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.FallbackManager>;
    getContractAt(
      name: "Guard",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Guard>;
    getContractAt(
      name: "GuardManager",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.GuardManager>;
    getContractAt(
      name: "ModuleManager",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ModuleManager>;
    getContractAt(
      name: "OwnerManager",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.OwnerManager>;
    getContractAt(
      name: "EtherPaymentFallback",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.EtherPaymentFallback>;
    getContractAt(
      name: "StorageAccessible",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.StorageAccessible>;
    getContractAt(
      name: "GnosisSafe",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.GnosisSafe>;
    getContractAt(
      name: "GnosisSafeL2",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.GnosisSafeL2>;
    getContractAt(
      name: "ISignatureValidator",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ISignatureValidator>;
    getContractAt(
      name: "OwnableUpgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.OwnableUpgradeable>;
    getContractAt(
      name: "IERC1271Upgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC1271Upgradeable>;
    getContractAt(
      name: "Initializable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Initializable>;
    getContractAt(
      name: "PausableUpgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.PausableUpgradeable>;
    getContractAt(
      name: "ReentrancyGuardUpgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ReentrancyGuardUpgradeable>;
    getContractAt(
      name: "IERC20Upgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20Upgradeable>;
    getContractAt(
      name: "ContextUpgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ContextUpgradeable>;
    getContractAt(
      name: "EIP712Upgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.EIP712Upgradeable>;
    getContractAt(
      name: "Ownable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Ownable>;
    getContractAt(
      name: "IERC1822Proxiable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC1822Proxiable>;
    getContractAt(
      name: "IBeacon",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IBeacon>;
    getContractAt(
      name: "ERC1967Proxy",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC1967Proxy>;
    getContractAt(
      name: "ERC1967Upgrade",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC1967Upgrade>;
    getContractAt(
      name: "Proxy",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Proxy>;
    getContractAt(
      name: "ProxyAdmin",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ProxyAdmin>;
    getContractAt(
      name: "TransparentUpgradeableProxy",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.TransparentUpgradeableProxy>;
    getContractAt(
      name: "IERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20>;
    getContractAt(
      name: "OwnerWithdrawable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.OwnerWithdrawable>;
    getContractAt(
      name: "Pauser",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Pauser>;
    getContractAt(
      name: "Governance",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Governance>;
    getContractAt(
      name: "ProviderController",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ProviderController>;
    getContractAt(
      name: "ProviderControllerV2",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ProviderControllerV2>;
    getContractAt(
      name: "ProviderControllerV2Registration",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ProviderControllerV2Registration>;
    getContractAt(
      name: "ProviderRegistry",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ProviderRegistry>;
    getContractAt(
      name: "Router",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Router>;
    getContractAt(
      name: "RouterWrapper",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.RouterWrapper>;
    getContractAt(
      name: "IBilling",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IBilling>;
    getContractAt(
      name: "IDstChainPayment",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IDstChainPayment>;
    getContractAt(
      name: "IERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20>;
    getContractAt(
      name: "IFundPool",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IFundPool>;
    getContractAt(
      name: "IGovernance",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IGovernance>;
    getContractAt(
      name: "IMessageSender",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IMessageSender>;
    getContractAt(
      name: "IProviderController",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IProviderController>;
    getContractAt(
      name: "IProviderControllerV2Registration",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IProviderControllerV2Registration>;
    getContractAt(
      name: "IProviderRegistry",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IProviderRegistry>;
    getContractAt(
      name: "IRechargeMessageSender",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IRechargeMessageSender>;
    getContractAt(
      name: "IRouter",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IRouter>;
    getContractAt(
      name: "ContentTracer",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ContentTracer>;
    getContractAt(
      name: "MessageReceiver",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.MessageReceiver>;
    getContractAt(
      name: "MessageSender",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.MessageSender>;
    getContractAt(
      name: "DstChainPayment",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.DstChainPayment>;
    getContractAt(
      name: "DstChainPaymentV2",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.DstChainPaymentV2>;
    getContractAt(
      name: "DstChainPaymentV2Registration",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.DstChainPaymentV2Registration>;
    getContractAt(
      name: "SrcChainPayment",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.SrcChainPayment>;
    getContractAt(
      name: "SrcChainPaymentV2",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.SrcChainPaymentV2>;
    getContractAt(
      name: "RechargeMessageReceiver",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.RechargeMessageReceiver>;
    getContractAt(
      name: "RechargeMessageSender",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.RechargeMessageSender>;
    getContractAt(
      name: "SrcChainRecharge",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.SrcChainRecharge>;
    getContractAt(
      name: "IPFSStorageController",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IPFSStorageController>;
    getContractAt(
      name: "ARStorageController",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ARStorageController>;
    getContractAt(
      name: "BandwidthController",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.BandwidthController>;
    getContractAt(
      name: "BuildingTimeController",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.BuildingTimeController>;
    getContractAt(
      name: "NormalResourceController",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.NormalResourceController>;
    getContractAt(
      name: "IIPFSStorageController",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IIPFSStorageController>;
    getContractAt(
      name: "INormalResourceController",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.INormalResourceController>;
    getContractAt(
      name: "IResource",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IResource>;
    getContractAt(
      name: "IResourcePriceAdaptor",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IResourcePriceAdaptor>;
    getContractAt(
      name: "ResourcePriceAdaptor",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ResourcePriceAdaptor>;
    getContractAt(
      name: "Billing",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Billing>;
    getContractAt(
      name: "FundPool",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.FundPool>;
    getContractAt(
      name: "FundPoolRegistration",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.FundPoolRegistration>;
    getContractAt(
      name: "SafeWallet",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.SafeWallet>;
    getContractAt(
      name: "IBridge",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IBridge>;
    getContractAt(
      name: "IOriginalTokenVault",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IOriginalTokenVault>;
    getContractAt(
      name: "IOriginalTokenVaultV2",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IOriginalTokenVaultV2>;
    getContractAt(
      name: "IPeggedTokenBridge",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IPeggedTokenBridge>;
    getContractAt(
      name: "IPeggedTokenBridgeV2",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IPeggedTokenBridgeV2>;
    getContractAt(
      name: "IMessageBus",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IMessageBus>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.utils.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
    getContractAt(
      nameOrAbi: string | any[],
      address: string,
      signer?: ethers.Signer
    ): Promise<ethers.Contract>;
  }
}
