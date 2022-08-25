/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface IProviderControllerInterface extends ethers.utils.Interface {
  functions: {
    "accountExists(address,bytes32)": FunctionFragment;
    "drip(bytes32,tuple[])": FunctionFragment;
    "dripMult(bytes32[],tuple[][])": FunctionFragment;
    "initWallet(address,bytes32,address,bytes)": FunctionFragment;
    "poolInitWallet(address,bytes32,address,bytes)": FunctionFragment;
    "registerAccount(bytes32)": FunctionFragment;
    "registerAndDripMult(bytes32[],tuple[][])": FunctionFragment;
    "registerMult(bytes32[])": FunctionFragment;
    "transferWallet(address,bytes32,address)": FunctionFragment;
    "walletExists(address,bytes32)": FunctionFragment;
    "walletOf(address,bytes32)": FunctionFragment;
    "walletTypesHash()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "accountExists",
    values: [string, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "drip",
    values: [
      BytesLike,
      { resourceType: BigNumberish; amounts: BigNumberish[] }[]
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "dripMult",
    values: [
      BytesLike[],
      { resourceType: BigNumberish; amounts: BigNumberish[] }[][]
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "initWallet",
    values: [string, BytesLike, string, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "poolInitWallet",
    values: [string, BytesLike, string, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "registerAccount",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "registerAndDripMult",
    values: [
      BytesLike[],
      { resourceType: BigNumberish; amounts: BigNumberish[] }[][]
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "registerMult",
    values: [BytesLike[]]
  ): string;
  encodeFunctionData(
    functionFragment: "transferWallet",
    values: [string, BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "walletExists",
    values: [string, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "walletOf",
    values: [string, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "walletTypesHash",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "accountExists",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "drip", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "dripMult", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "initWallet", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "poolInitWallet",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "registerAccount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "registerAndDripMult",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "registerMult",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferWallet",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "walletExists",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "walletOf", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "walletTypesHash",
    data: BytesLike
  ): Result;

  events: {
    "AccountRegistered(address,bytes32)": EventFragment;
    "ProviderDripped(address,bytes32)": EventFragment;
    "WalletTransferred(address,bytes32,address,address)": EventFragment;
    "WalletTypesHashUpdated(bytes32)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AccountRegistered"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ProviderDripped"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "WalletTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "WalletTypesHashUpdated"): EventFragment;
}

export type AccountRegisteredEvent = TypedEvent<
  [string, string] & { provider: string; account: string }
>;

export type ProviderDrippedEvent = TypedEvent<
  [string, string] & { provider: string; account: string }
>;

export type WalletTransferredEvent = TypedEvent<
  [string, string, string, string] & {
    provider: string;
    account: string;
    from: string;
    to: string;
  }
>;

export type WalletTypesHashUpdatedEvent = TypedEvent<
  [string] & { hash: string }
>;

export class IProviderController extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: IProviderControllerInterface;

  functions: {
    accountExists(
      provider: string,
      account: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    drip(
      account: BytesLike,
      payloads: { resourceType: BigNumberish; amounts: BigNumberish[] }[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    dripMult(
      accounts: BytesLike[],
      payloads: { resourceType: BigNumberish; amounts: BigNumberish[] }[][],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    initWallet(
      provider: string,
      account: BytesLike,
      wallet: string,
      signature: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    poolInitWallet(
      provider: string,
      account: BytesLike,
      wallet: string,
      signature: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    registerAccount(
      account: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    registerAndDripMult(
      accounts: BytesLike[],
      payloads: { resourceType: BigNumberish; amounts: BigNumberish[] }[][],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    registerMult(
      accounts: BytesLike[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferWallet(
      provider: string,
      account: BytesLike,
      newWallet: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    walletExists(
      provider: string,
      account: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    walletOf(
      provider: string,
      account: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string]>;

    walletTypesHash(overrides?: CallOverrides): Promise<[string]>;
  };

  accountExists(
    provider: string,
    account: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  drip(
    account: BytesLike,
    payloads: { resourceType: BigNumberish; amounts: BigNumberish[] }[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  dripMult(
    accounts: BytesLike[],
    payloads: { resourceType: BigNumberish; amounts: BigNumberish[] }[][],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  initWallet(
    provider: string,
    account: BytesLike,
    wallet: string,
    signature: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  poolInitWallet(
    provider: string,
    account: BytesLike,
    wallet: string,
    signature: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  registerAccount(
    account: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  registerAndDripMult(
    accounts: BytesLike[],
    payloads: { resourceType: BigNumberish; amounts: BigNumberish[] }[][],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  registerMult(
    accounts: BytesLike[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferWallet(
    provider: string,
    account: BytesLike,
    newWallet: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  walletExists(
    provider: string,
    account: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  walletOf(
    provider: string,
    account: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  walletTypesHash(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    accountExists(
      provider: string,
      account: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    drip(
      account: BytesLike,
      payloads: { resourceType: BigNumberish; amounts: BigNumberish[] }[],
      overrides?: CallOverrides
    ): Promise<void>;

    dripMult(
      accounts: BytesLike[],
      payloads: { resourceType: BigNumberish; amounts: BigNumberish[] }[][],
      overrides?: CallOverrides
    ): Promise<void>;

    initWallet(
      provider: string,
      account: BytesLike,
      wallet: string,
      signature: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    poolInitWallet(
      provider: string,
      account: BytesLike,
      wallet: string,
      signature: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    registerAccount(
      account: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    registerAndDripMult(
      accounts: BytesLike[],
      payloads: { resourceType: BigNumberish; amounts: BigNumberish[] }[][],
      overrides?: CallOverrides
    ): Promise<void>;

    registerMult(
      accounts: BytesLike[],
      overrides?: CallOverrides
    ): Promise<void>;

    transferWallet(
      provider: string,
      account: BytesLike,
      newWallet: string,
      overrides?: CallOverrides
    ): Promise<void>;

    walletExists(
      provider: string,
      account: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    walletOf(
      provider: string,
      account: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    walletTypesHash(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    "AccountRegistered(address,bytes32)"(
      provider?: null,
      account?: null
    ): TypedEventFilter<
      [string, string],
      { provider: string; account: string }
    >;

    AccountRegistered(
      provider?: null,
      account?: null
    ): TypedEventFilter<
      [string, string],
      { provider: string; account: string }
    >;

    "ProviderDripped(address,bytes32)"(
      provider?: null,
      account?: null
    ): TypedEventFilter<
      [string, string],
      { provider: string; account: string }
    >;

    ProviderDripped(
      provider?: null,
      account?: null
    ): TypedEventFilter<
      [string, string],
      { provider: string; account: string }
    >;

    "WalletTransferred(address,bytes32,address,address)"(
      provider?: null,
      account?: null,
      from?: null,
      to?: null
    ): TypedEventFilter<
      [string, string, string, string],
      { provider: string; account: string; from: string; to: string }
    >;

    WalletTransferred(
      provider?: null,
      account?: null,
      from?: null,
      to?: null
    ): TypedEventFilter<
      [string, string, string, string],
      { provider: string; account: string; from: string; to: string }
    >;

    "WalletTypesHashUpdated(bytes32)"(
      hash?: null
    ): TypedEventFilter<[string], { hash: string }>;

    WalletTypesHashUpdated(
      hash?: null
    ): TypedEventFilter<[string], { hash: string }>;
  };

  estimateGas: {
    accountExists(
      provider: string,
      account: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    drip(
      account: BytesLike,
      payloads: { resourceType: BigNumberish; amounts: BigNumberish[] }[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    dripMult(
      accounts: BytesLike[],
      payloads: { resourceType: BigNumberish; amounts: BigNumberish[] }[][],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    initWallet(
      provider: string,
      account: BytesLike,
      wallet: string,
      signature: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    poolInitWallet(
      provider: string,
      account: BytesLike,
      wallet: string,
      signature: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    registerAccount(
      account: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    registerAndDripMult(
      accounts: BytesLike[],
      payloads: { resourceType: BigNumberish; amounts: BigNumberish[] }[][],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    registerMult(
      accounts: BytesLike[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferWallet(
      provider: string,
      account: BytesLike,
      newWallet: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    walletExists(
      provider: string,
      account: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    walletOf(
      provider: string,
      account: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    walletTypesHash(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    accountExists(
      provider: string,
      account: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    drip(
      account: BytesLike,
      payloads: { resourceType: BigNumberish; amounts: BigNumberish[] }[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    dripMult(
      accounts: BytesLike[],
      payloads: { resourceType: BigNumberish; amounts: BigNumberish[] }[][],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    initWallet(
      provider: string,
      account: BytesLike,
      wallet: string,
      signature: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    poolInitWallet(
      provider: string,
      account: BytesLike,
      wallet: string,
      signature: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    registerAccount(
      account: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    registerAndDripMult(
      accounts: BytesLike[],
      payloads: { resourceType: BigNumberish; amounts: BigNumberish[] }[][],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    registerMult(
      accounts: BytesLike[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferWallet(
      provider: string,
      account: BytesLike,
      newWallet: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    walletExists(
      provider: string,
      account: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    walletOf(
      provider: string,
      account: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    walletTypesHash(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
