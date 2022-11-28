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
  PayableOverrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface RechargeMessageReceiverInterface extends ethers.utils.Interface {
  functions: {
    "executeMessageWithTransfer(address,address,uint256,uint64,bytes,address)": FunctionFragment;
    "executeMessageWithTransferFallback(address,address,uint256,uint64,bytes,address)": FunctionFragment;
    "executor()": FunctionFragment;
    "initialize(address,address,address,address)": FunctionFragment;
    "messageBus()": FunctionFragment;
    "messageId((address,address,uint64,bytes32),uint64,bytes)": FunctionFragment;
    "owner()": FunctionFragment;
    "ownerWithdrawERC20(address,address,uint256)": FunctionFragment;
    "ownerWithdrawNative(address,uint256)": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "router()": FunctionFragment;
    "setExecutor(address)": FunctionFragment;
    "setMessageBus(address)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "executeMessageWithTransfer",
    values: [string, string, BigNumberish, BigNumberish, BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "executeMessageWithTransferFallback",
    values: [string, string, BigNumberish, BigNumberish, BytesLike, string]
  ): string;
  encodeFunctionData(functionFragment: "executor", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [string, string, string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "messageBus",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "messageId",
    values: [
      {
        sender: string;
        receiver: string;
        srcChainId: BigNumberish;
        srcTxHash: BytesLike;
      },
      BigNumberish,
      BytesLike
    ]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "ownerWithdrawERC20",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "ownerWithdrawNative",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "router", values?: undefined): string;
  encodeFunctionData(functionFragment: "setExecutor", values: [string]): string;
  encodeFunctionData(
    functionFragment: "setMessageBus",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;

  decodeFunctionResult(
    functionFragment: "executeMessageWithTransfer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "executeMessageWithTransferFallback",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "executor", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "messageBus", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "messageId", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "ownerWithdrawERC20",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "ownerWithdrawNative",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "router", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setExecutor",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setMessageBus",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;

  events: {
    "ExecutorUpdated(address)": EventFragment;
    "Initialized(uint8)": EventFragment;
    "MessageBusUpdated(address)": EventFragment;
    "MessageExecuted(address,uint64,bytes,address)": EventFragment;
    "MessageFailed(address,uint64,bytes,address,bytes)": EventFragment;
    "MessageWithTransferExecuted(address,address,uint256,uint64,bytes,address)": EventFragment;
    "MessageWithTransferFailed(address,address,uint256,uint64,bytes,address,bytes)": EventFragment;
    "MessageWithTransferFallback(address,address,uint256,uint64,bytes,address)": EventFragment;
    "NativeWithdrawal(address,uint256)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "RouterUpdated(address)": EventFragment;
    "Withdrawal(address,address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ExecutorUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "MessageBusUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "MessageExecuted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "MessageFailed"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "MessageWithTransferExecuted"
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: "MessageWithTransferFailed"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "MessageWithTransferFallback"
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NativeWithdrawal"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RouterUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Withdrawal"): EventFragment;
}

export type ExecutorUpdatedEvent = TypedEvent<[string] & { executor: string }>;

export type InitializedEvent = TypedEvent<[number] & { version: number }>;

export type MessageBusUpdatedEvent = TypedEvent<
  [string] & { messageBus: string }
>;

export type MessageExecutedEvent = TypedEvent<
  [string, BigNumber, string, string] & {
    sender: string;
    srcChainId: BigNumber;
    message: string;
    executor: string;
  }
>;

export type MessageFailedEvent = TypedEvent<
  [string, BigNumber, string, string, string] & {
    sender: string;
    srcChainId: BigNumber;
    message: string;
    executor: string;
    error: string;
  }
>;

export type MessageWithTransferExecutedEvent = TypedEvent<
  [string, string, BigNumber, BigNumber, string, string] & {
    sender: string;
    token: string;
    amount: BigNumber;
    srcChainId: BigNumber;
    message: string;
    executor: string;
  }
>;

export type MessageWithTransferFailedEvent = TypedEvent<
  [string, string, BigNumber, BigNumber, string, string, string] & {
    sender: string;
    token: string;
    amount: BigNumber;
    srcChainId: BigNumber;
    message: string;
    executor: string;
    error: string;
  }
>;

export type MessageWithTransferFallbackEvent = TypedEvent<
  [string, string, BigNumber, BigNumber, string, string] & {
    _sender: string;
    _token: string;
    _amount: BigNumber;
    _srcChainId: BigNumber;
    _message: string;
    executor: string;
  }
>;

export type NativeWithdrawalEvent = TypedEvent<
  [string, BigNumber] & { to: string; value: BigNumber }
>;

export type OwnershipTransferredEvent = TypedEvent<
  [string, string] & { previousOwner: string; newOwner: string }
>;

export type RouterUpdatedEvent = TypedEvent<[string] & { router: string }>;

export type WithdrawalEvent = TypedEvent<
  [string, string, BigNumber] & { token: string; to: string; value: BigNumber }
>;

export class RechargeMessageReceiver extends BaseContract {
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

  interface: RechargeMessageReceiverInterface;

  functions: {
    executeMessageWithTransfer(
      sender: string,
      token: string,
      amount: BigNumberish,
      srcChainId: BigNumberish,
      message: BytesLike,
      _executor: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    executeMessageWithTransferFallback(
      _sender: string,
      _token: string,
      _amount: BigNumberish,
      _srcChainId: BigNumberish,
      _message: BytesLike,
      executor: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    executor(overrides?: CallOverrides): Promise<[string]>;

    initialize(
      owner: string,
      _messageBus: string,
      _executor: string,
      router: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    messageBus(overrides?: CallOverrides): Promise<[string]>;

    messageId(
      route: {
        sender: string;
        receiver: string;
        srcChainId: BigNumberish;
        srcTxHash: BytesLike;
      },
      dstChainId: BigNumberish,
      message: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    ownerWithdrawERC20(
      token: string,
      to: string,
      value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    ownerWithdrawNative(
      to: string,
      value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    router(overrides?: CallOverrides): Promise<[string]>;

    setExecutor(
      _executor: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setMessageBus(
      messageBus: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  executeMessageWithTransfer(
    sender: string,
    token: string,
    amount: BigNumberish,
    srcChainId: BigNumberish,
    message: BytesLike,
    _executor: string,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  executeMessageWithTransferFallback(
    _sender: string,
    _token: string,
    _amount: BigNumberish,
    _srcChainId: BigNumberish,
    _message: BytesLike,
    executor: string,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  executor(overrides?: CallOverrides): Promise<string>;

  initialize(
    owner: string,
    _messageBus: string,
    _executor: string,
    router: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  messageBus(overrides?: CallOverrides): Promise<string>;

  messageId(
    route: {
      sender: string;
      receiver: string;
      srcChainId: BigNumberish;
      srcTxHash: BytesLike;
    },
    dstChainId: BigNumberish,
    message: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  owner(overrides?: CallOverrides): Promise<string>;

  ownerWithdrawERC20(
    token: string,
    to: string,
    value: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  ownerWithdrawNative(
    to: string,
    value: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  router(overrides?: CallOverrides): Promise<string>;

  setExecutor(
    _executor: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setMessageBus(
    messageBus: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    executeMessageWithTransfer(
      sender: string,
      token: string,
      amount: BigNumberish,
      srcChainId: BigNumberish,
      message: BytesLike,
      _executor: string,
      overrides?: CallOverrides
    ): Promise<number>;

    executeMessageWithTransferFallback(
      _sender: string,
      _token: string,
      _amount: BigNumberish,
      _srcChainId: BigNumberish,
      _message: BytesLike,
      executor: string,
      overrides?: CallOverrides
    ): Promise<number>;

    executor(overrides?: CallOverrides): Promise<string>;

    initialize(
      owner: string,
      _messageBus: string,
      _executor: string,
      router: string,
      overrides?: CallOverrides
    ): Promise<void>;

    messageBus(overrides?: CallOverrides): Promise<string>;

    messageId(
      route: {
        sender: string;
        receiver: string;
        srcChainId: BigNumberish;
        srcTxHash: BytesLike;
      },
      dstChainId: BigNumberish,
      message: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    ownerWithdrawERC20(
      token: string,
      to: string,
      value: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    ownerWithdrawNative(
      to: string,
      value: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    router(overrides?: CallOverrides): Promise<string>;

    setExecutor(_executor: string, overrides?: CallOverrides): Promise<void>;

    setMessageBus(messageBus: string, overrides?: CallOverrides): Promise<void>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "ExecutorUpdated(address)"(
      executor?: null
    ): TypedEventFilter<[string], { executor: string }>;

    ExecutorUpdated(
      executor?: null
    ): TypedEventFilter<[string], { executor: string }>;

    "Initialized(uint8)"(
      version?: null
    ): TypedEventFilter<[number], { version: number }>;

    Initialized(
      version?: null
    ): TypedEventFilter<[number], { version: number }>;

    "MessageBusUpdated(address)"(
      messageBus?: null
    ): TypedEventFilter<[string], { messageBus: string }>;

    MessageBusUpdated(
      messageBus?: null
    ): TypedEventFilter<[string], { messageBus: string }>;

    "MessageExecuted(address,uint64,bytes,address)"(
      sender?: null,
      srcChainId?: null,
      message?: null,
      executor?: null
    ): TypedEventFilter<
      [string, BigNumber, string, string],
      {
        sender: string;
        srcChainId: BigNumber;
        message: string;
        executor: string;
      }
    >;

    MessageExecuted(
      sender?: null,
      srcChainId?: null,
      message?: null,
      executor?: null
    ): TypedEventFilter<
      [string, BigNumber, string, string],
      {
        sender: string;
        srcChainId: BigNumber;
        message: string;
        executor: string;
      }
    >;

    "MessageFailed(address,uint64,bytes,address,bytes)"(
      sender?: null,
      srcChainId?: null,
      message?: null,
      executor?: null,
      error?: null
    ): TypedEventFilter<
      [string, BigNumber, string, string, string],
      {
        sender: string;
        srcChainId: BigNumber;
        message: string;
        executor: string;
        error: string;
      }
    >;

    MessageFailed(
      sender?: null,
      srcChainId?: null,
      message?: null,
      executor?: null,
      error?: null
    ): TypedEventFilter<
      [string, BigNumber, string, string, string],
      {
        sender: string;
        srcChainId: BigNumber;
        message: string;
        executor: string;
        error: string;
      }
    >;

    "MessageWithTransferExecuted(address,address,uint256,uint64,bytes,address)"(
      sender?: null,
      token?: null,
      amount?: null,
      srcChainId?: null,
      message?: null,
      executor?: null
    ): TypedEventFilter<
      [string, string, BigNumber, BigNumber, string, string],
      {
        sender: string;
        token: string;
        amount: BigNumber;
        srcChainId: BigNumber;
        message: string;
        executor: string;
      }
    >;

    MessageWithTransferExecuted(
      sender?: null,
      token?: null,
      amount?: null,
      srcChainId?: null,
      message?: null,
      executor?: null
    ): TypedEventFilter<
      [string, string, BigNumber, BigNumber, string, string],
      {
        sender: string;
        token: string;
        amount: BigNumber;
        srcChainId: BigNumber;
        message: string;
        executor: string;
      }
    >;

    "MessageWithTransferFailed(address,address,uint256,uint64,bytes,address,bytes)"(
      sender?: null,
      token?: null,
      amount?: null,
      srcChainId?: null,
      message?: null,
      executor?: null,
      error?: null
    ): TypedEventFilter<
      [string, string, BigNumber, BigNumber, string, string, string],
      {
        sender: string;
        token: string;
        amount: BigNumber;
        srcChainId: BigNumber;
        message: string;
        executor: string;
        error: string;
      }
    >;

    MessageWithTransferFailed(
      sender?: null,
      token?: null,
      amount?: null,
      srcChainId?: null,
      message?: null,
      executor?: null,
      error?: null
    ): TypedEventFilter<
      [string, string, BigNumber, BigNumber, string, string, string],
      {
        sender: string;
        token: string;
        amount: BigNumber;
        srcChainId: BigNumber;
        message: string;
        executor: string;
        error: string;
      }
    >;

    "MessageWithTransferFallback(address,address,uint256,uint64,bytes,address)"(
      _sender?: null,
      _token?: null,
      _amount?: null,
      _srcChainId?: null,
      _message?: null,
      executor?: null
    ): TypedEventFilter<
      [string, string, BigNumber, BigNumber, string, string],
      {
        _sender: string;
        _token: string;
        _amount: BigNumber;
        _srcChainId: BigNumber;
        _message: string;
        executor: string;
      }
    >;

    MessageWithTransferFallback(
      _sender?: null,
      _token?: null,
      _amount?: null,
      _srcChainId?: null,
      _message?: null,
      executor?: null
    ): TypedEventFilter<
      [string, string, BigNumber, BigNumber, string, string],
      {
        _sender: string;
        _token: string;
        _amount: BigNumber;
        _srcChainId: BigNumber;
        _message: string;
        executor: string;
      }
    >;

    "NativeWithdrawal(address,uint256)"(
      to?: null,
      value?: null
    ): TypedEventFilter<[string, BigNumber], { to: string; value: BigNumber }>;

    NativeWithdrawal(
      to?: null,
      value?: null
    ): TypedEventFilter<[string, BigNumber], { to: string; value: BigNumber }>;

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

    "RouterUpdated(address)"(
      router?: null
    ): TypedEventFilter<[string], { router: string }>;

    RouterUpdated(
      router?: null
    ): TypedEventFilter<[string], { router: string }>;

    "Withdrawal(address,address,uint256)"(
      token?: null,
      to?: null,
      value?: null
    ): TypedEventFilter<
      [string, string, BigNumber],
      { token: string; to: string; value: BigNumber }
    >;

    Withdrawal(
      token?: null,
      to?: null,
      value?: null
    ): TypedEventFilter<
      [string, string, BigNumber],
      { token: string; to: string; value: BigNumber }
    >;
  };

  estimateGas: {
    executeMessageWithTransfer(
      sender: string,
      token: string,
      amount: BigNumberish,
      srcChainId: BigNumberish,
      message: BytesLike,
      _executor: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    executeMessageWithTransferFallback(
      _sender: string,
      _token: string,
      _amount: BigNumberish,
      _srcChainId: BigNumberish,
      _message: BytesLike,
      executor: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    executor(overrides?: CallOverrides): Promise<BigNumber>;

    initialize(
      owner: string,
      _messageBus: string,
      _executor: string,
      router: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    messageBus(overrides?: CallOverrides): Promise<BigNumber>;

    messageId(
      route: {
        sender: string;
        receiver: string;
        srcChainId: BigNumberish;
        srcTxHash: BytesLike;
      },
      dstChainId: BigNumberish,
      message: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    ownerWithdrawERC20(
      token: string,
      to: string,
      value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    ownerWithdrawNative(
      to: string,
      value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    router(overrides?: CallOverrides): Promise<BigNumber>;

    setExecutor(
      _executor: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setMessageBus(
      messageBus: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    executeMessageWithTransfer(
      sender: string,
      token: string,
      amount: BigNumberish,
      srcChainId: BigNumberish,
      message: BytesLike,
      _executor: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    executeMessageWithTransferFallback(
      _sender: string,
      _token: string,
      _amount: BigNumberish,
      _srcChainId: BigNumberish,
      _message: BytesLike,
      executor: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    executor(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    initialize(
      owner: string,
      _messageBus: string,
      _executor: string,
      router: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    messageBus(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    messageId(
      route: {
        sender: string;
        receiver: string;
        srcChainId: BigNumberish;
        srcTxHash: BytesLike;
      },
      dstChainId: BigNumberish,
      message: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    ownerWithdrawERC20(
      token: string,
      to: string,
      value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    ownerWithdrawNative(
      to: string,
      value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    router(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setExecutor(
      _executor: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setMessageBus(
      messageBus: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}