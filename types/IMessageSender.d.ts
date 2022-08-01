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
  PayableOverrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface IMessageSenderInterface extends ethers.utils.Interface {
  functions: {
    "calcFee(bytes)": FunctionFragment;
    "dstChainId()": FunctionFragment;
    "messageId((address,address,uint64,bytes32),uint64,bytes)": FunctionFragment;
    "receiver()": FunctionFragment;
    "sendMessage(bytes)": FunctionFragment;
    "sendMessageWithTransfer(address,uint256,uint64,uint32,bytes,uint8)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "calcFee", values: [BytesLike]): string;
  encodeFunctionData(
    functionFragment: "dstChainId",
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
  encodeFunctionData(functionFragment: "receiver", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "sendMessage",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "sendMessageWithTransfer",
    values: [
      string,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BytesLike,
      BigNumberish
    ]
  ): string;

  decodeFunctionResult(functionFragment: "calcFee", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "dstChainId", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "messageId", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "receiver", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "sendMessage",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "sendMessageWithTransfer",
    data: BytesLike
  ): Result;

  events: {
    "DstChainIdUpdated(uint64)": EventFragment;
    "MessageBusUpdated(address)": EventFragment;
    "MessageWithTransferRefund(address,uint256,bytes,address)": EventFragment;
    "ReceiverUpdated(address)": EventFragment;
    "SrcChainPaymentUpdated(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "DstChainIdUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "MessageBusUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "MessageWithTransferRefund"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ReceiverUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SrcChainPaymentUpdated"): EventFragment;
}

export type DstChainIdUpdatedEvent = TypedEvent<
  [BigNumber] & { dstChainId: BigNumber }
>;

export type MessageBusUpdatedEvent = TypedEvent<
  [string] & { messageBus: string }
>;

export type MessageWithTransferRefundEvent = TypedEvent<
  [string, BigNumber, string, string] & {
    token: string;
    amount: BigNumber;
    message: string;
    executor: string;
  }
>;

export type ReceiverUpdatedEvent = TypedEvent<[string] & { receiver: string }>;

export type SrcChainPaymentUpdatedEvent = TypedEvent<
  [string] & { payment: string }
>;

export class IMessageSender extends BaseContract {
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

  interface: IMessageSenderInterface;

  functions: {
    calcFee(
      message: BytesLike,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    dstChainId(overrides?: CallOverrides): Promise<[BigNumber]>;

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

    receiver(overrides?: CallOverrides): Promise<[string]>;

    sendMessage(
      message: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    sendMessageWithTransfer(
      token: string,
      amount: BigNumberish,
      nonce: BigNumberish,
      maxSlippage: BigNumberish,
      message: BytesLike,
      bridgeSendType: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  calcFee(message: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

  dstChainId(overrides?: CallOverrides): Promise<BigNumber>;

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

  receiver(overrides?: CallOverrides): Promise<string>;

  sendMessage(
    message: BytesLike,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  sendMessageWithTransfer(
    token: string,
    amount: BigNumberish,
    nonce: BigNumberish,
    maxSlippage: BigNumberish,
    message: BytesLike,
    bridgeSendType: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    calcFee(message: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    dstChainId(overrides?: CallOverrides): Promise<BigNumber>;

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

    receiver(overrides?: CallOverrides): Promise<string>;

    sendMessage(message: BytesLike, overrides?: CallOverrides): Promise<void>;

    sendMessageWithTransfer(
      token: string,
      amount: BigNumberish,
      nonce: BigNumberish,
      maxSlippage: BigNumberish,
      message: BytesLike,
      bridgeSendType: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;
  };

  filters: {
    "DstChainIdUpdated(uint64)"(
      dstChainId?: null
    ): TypedEventFilter<[BigNumber], { dstChainId: BigNumber }>;

    DstChainIdUpdated(
      dstChainId?: null
    ): TypedEventFilter<[BigNumber], { dstChainId: BigNumber }>;

    "MessageBusUpdated(address)"(
      messageBus?: null
    ): TypedEventFilter<[string], { messageBus: string }>;

    MessageBusUpdated(
      messageBus?: null
    ): TypedEventFilter<[string], { messageBus: string }>;

    "MessageWithTransferRefund(address,uint256,bytes,address)"(
      token?: null,
      amount?: null,
      message?: null,
      executor?: null
    ): TypedEventFilter<
      [string, BigNumber, string, string],
      { token: string; amount: BigNumber; message: string; executor: string }
    >;

    MessageWithTransferRefund(
      token?: null,
      amount?: null,
      message?: null,
      executor?: null
    ): TypedEventFilter<
      [string, BigNumber, string, string],
      { token: string; amount: BigNumber; message: string; executor: string }
    >;

    "ReceiverUpdated(address)"(
      receiver?: null
    ): TypedEventFilter<[string], { receiver: string }>;

    ReceiverUpdated(
      receiver?: null
    ): TypedEventFilter<[string], { receiver: string }>;

    "SrcChainPaymentUpdated(address)"(
      payment?: null
    ): TypedEventFilter<[string], { payment: string }>;

    SrcChainPaymentUpdated(
      payment?: null
    ): TypedEventFilter<[string], { payment: string }>;
  };

  estimateGas: {
    calcFee(message: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    dstChainId(overrides?: CallOverrides): Promise<BigNumber>;

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

    receiver(overrides?: CallOverrides): Promise<BigNumber>;

    sendMessage(
      message: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    sendMessageWithTransfer(
      token: string,
      amount: BigNumberish,
      nonce: BigNumberish,
      maxSlippage: BigNumberish,
      message: BytesLike,
      bridgeSendType: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    calcFee(
      message: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    dstChainId(overrides?: CallOverrides): Promise<PopulatedTransaction>;

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

    receiver(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    sendMessage(
      message: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    sendMessageWithTransfer(
      token: string,
      amount: BigNumberish,
      nonce: BigNumberish,
      maxSlippage: BigNumberish,
      message: BytesLike,
      bridgeSendType: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
