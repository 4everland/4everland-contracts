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

interface ContentTracerInterface extends ethers.utils.Interface {
  functions: {
    "expireAt(bytes32)": FunctionFragment;
    "initialize(address,address)": FunctionFragment;
    "insert(bytes32,string,uint256,uint256)": FunctionFragment;
    "insertMult(bytes32[],string[],uint256[],uint256[])": FunctionFragment;
    "metas(address,bytes32,string)": FunctionFragment;
    "owner()": FunctionFragment;
    "remove(bytes32,string)": FunctionFragment;
    "removeMult(bytes32[],string[])": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "router()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "expireAt", values: [BytesLike]): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "insert",
    values: [BytesLike, string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "insertMult",
    values: [BytesLike[], string[], BigNumberish[], BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "metas",
    values: [string, BytesLike, string]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "remove",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "removeMult",
    values: [BytesLike[], string[]]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "router", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;

  decodeFunctionResult(functionFragment: "expireAt", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "insert", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "insertMult", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "metas", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "remove", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "removeMult", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "router", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;

  events: {
    "Initialized(uint8)": EventFragment;
    "Insert(address,bytes32,string,uint256,uint256,uint256)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "Remove(address,bytes32,string)": EventFragment;
    "RouterUpdated(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Insert"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Remove"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RouterUpdated"): EventFragment;
}

export type InitializedEvent = TypedEvent<[number] & { version: number }>;

export type InsertEvent = TypedEvent<
  [string, string, string, BigNumber, BigNumber, BigNumber] & {
    provider: string;
    account: string;
    content: string;
    size: BigNumber;
    count: BigNumber;
    expiration: BigNumber;
  }
>;

export type OwnershipTransferredEvent = TypedEvent<
  [string, string] & { previousOwner: string; newOwner: string }
>;

export type RemoveEvent = TypedEvent<
  [string, string, string] & {
    provider: string;
    account: string;
    content: string;
  }
>;

export type RouterUpdatedEvent = TypedEvent<[string] & { router: string }>;

export class ContentTracer extends BaseContract {
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

  interface: ContentTracerInterface;

  functions: {
    expireAt(
      account: BytesLike,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    initialize(
      owner: string,
      router: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    insert(
      account: BytesLike,
      content: string,
      size: BigNumberish,
      count: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    insertMult(
      accounts: BytesLike[],
      contents: string[],
      sizes: BigNumberish[],
      counts: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    metas(
      arg0: string,
      arg1: BytesLike,
      arg2: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber] & { size: BigNumber; count: BigNumber }>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    remove(
      account: BytesLike,
      content: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    removeMult(
      accounts: BytesLike[],
      contents: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    router(overrides?: CallOverrides): Promise<[string]>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  expireAt(account: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

  initialize(
    owner: string,
    router: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  insert(
    account: BytesLike,
    content: string,
    size: BigNumberish,
    count: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  insertMult(
    accounts: BytesLike[],
    contents: string[],
    sizes: BigNumberish[],
    counts: BigNumberish[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  metas(
    arg0: string,
    arg1: BytesLike,
    arg2: string,
    overrides?: CallOverrides
  ): Promise<[BigNumber, BigNumber] & { size: BigNumber; count: BigNumber }>;

  owner(overrides?: CallOverrides): Promise<string>;

  remove(
    account: BytesLike,
    content: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  removeMult(
    accounts: BytesLike[],
    contents: string[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  router(overrides?: CallOverrides): Promise<string>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    expireAt(account: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    initialize(
      owner: string,
      router: string,
      overrides?: CallOverrides
    ): Promise<void>;

    insert(
      account: BytesLike,
      content: string,
      size: BigNumberish,
      count: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    insertMult(
      accounts: BytesLike[],
      contents: string[],
      sizes: BigNumberish[],
      counts: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>;

    metas(
      arg0: string,
      arg1: BytesLike,
      arg2: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber] & { size: BigNumber; count: BigNumber }>;

    owner(overrides?: CallOverrides): Promise<string>;

    remove(
      account: BytesLike,
      content: string,
      overrides?: CallOverrides
    ): Promise<void>;

    removeMult(
      accounts: BytesLike[],
      contents: string[],
      overrides?: CallOverrides
    ): Promise<void>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    router(overrides?: CallOverrides): Promise<string>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "Initialized(uint8)"(
      version?: null
    ): TypedEventFilter<[number], { version: number }>;

    Initialized(
      version?: null
    ): TypedEventFilter<[number], { version: number }>;

    "Insert(address,bytes32,string,uint256,uint256,uint256)"(
      provider?: null,
      account?: null,
      content?: null,
      size?: null,
      count?: null,
      expiration?: null
    ): TypedEventFilter<
      [string, string, string, BigNumber, BigNumber, BigNumber],
      {
        provider: string;
        account: string;
        content: string;
        size: BigNumber;
        count: BigNumber;
        expiration: BigNumber;
      }
    >;

    Insert(
      provider?: null,
      account?: null,
      content?: null,
      size?: null,
      count?: null,
      expiration?: null
    ): TypedEventFilter<
      [string, string, string, BigNumber, BigNumber, BigNumber],
      {
        provider: string;
        account: string;
        content: string;
        size: BigNumber;
        count: BigNumber;
        expiration: BigNumber;
      }
    >;

    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;

    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;

    "Remove(address,bytes32,string)"(
      provider?: null,
      account?: null,
      content?: null
    ): TypedEventFilter<
      [string, string, string],
      { provider: string; account: string; content: string }
    >;

    Remove(
      provider?: null,
      account?: null,
      content?: null
    ): TypedEventFilter<
      [string, string, string],
      { provider: string; account: string; content: string }
    >;

    "RouterUpdated(address)"(
      router?: null
    ): TypedEventFilter<[string], { router: string }>;

    RouterUpdated(
      router?: null
    ): TypedEventFilter<[string], { router: string }>;
  };

  estimateGas: {
    expireAt(account: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    initialize(
      owner: string,
      router: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    insert(
      account: BytesLike,
      content: string,
      size: BigNumberish,
      count: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    insertMult(
      accounts: BytesLike[],
      contents: string[],
      sizes: BigNumberish[],
      counts: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    metas(
      arg0: string,
      arg1: BytesLike,
      arg2: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    remove(
      account: BytesLike,
      content: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    removeMult(
      accounts: BytesLike[],
      contents: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    router(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    expireAt(
      account: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    initialize(
      owner: string,
      router: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    insert(
      account: BytesLike,
      content: string,
      size: BigNumberish,
      count: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    insertMult(
      accounts: BytesLike[],
      contents: string[],
      sizes: BigNumberish[],
      counts: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    metas(
      arg0: string,
      arg1: BytesLike,
      arg2: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    remove(
      account: BytesLike,
      content: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    removeMult(
      accounts: BytesLike[],
      contents: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    router(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
