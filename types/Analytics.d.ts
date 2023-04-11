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

interface AnalyticsInterface extends ethers.utils.Interface {
  functions: {
    "nonces(address)": FunctionFragment;
    "router()": FunctionFragment;
    "send(uint256,(uint8,uint256[]))": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "nonces", values: [string]): string;
  encodeFunctionData(functionFragment: "router", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "send",
    values: [
      BigNumberish,
      { resourceType: BigNumberish; amounts: BigNumberish[] }
    ]
  ): string;

  decodeFunctionResult(functionFragment: "nonces", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "router", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "send", data: BytesLike): Result;

  events: {
    "Drip(address,uint256,tuple)": EventFragment;
    "Initialized(uint8)": EventFragment;
    "RouterUpdated(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Drip"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RouterUpdated"): EventFragment;
}

export type DripEvent = TypedEvent<
  [
    string,
    BigNumber,
    [number, BigNumber[]] & { resourceType: number; amounts: BigNumber[] }
  ] & {
    provider: string;
    nonce: BigNumber;
    payload: [number, BigNumber[]] & {
      resourceType: number;
      amounts: BigNumber[];
    };
  }
>;

export type InitializedEvent = TypedEvent<[number] & { version: number }>;

export type RouterUpdatedEvent = TypedEvent<[string] & { router: string }>;

export class Analytics extends BaseContract {
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

  interface: AnalyticsInterface;

  functions: {
    nonces(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    router(overrides?: CallOverrides): Promise<[string]>;

    send(
      nonce: BigNumberish,
      payload: { resourceType: BigNumberish; amounts: BigNumberish[] },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  nonces(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

  router(overrides?: CallOverrides): Promise<string>;

  send(
    nonce: BigNumberish,
    payload: { resourceType: BigNumberish; amounts: BigNumberish[] },
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    nonces(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    router(overrides?: CallOverrides): Promise<string>;

    send(
      nonce: BigNumberish,
      payload: { resourceType: BigNumberish; amounts: BigNumberish[] },
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "Drip(address,uint256,tuple)"(
      provider?: null,
      nonce?: null,
      payload?: null
    ): TypedEventFilter<
      [
        string,
        BigNumber,
        [number, BigNumber[]] & { resourceType: number; amounts: BigNumber[] }
      ],
      {
        provider: string;
        nonce: BigNumber;
        payload: [number, BigNumber[]] & {
          resourceType: number;
          amounts: BigNumber[];
        };
      }
    >;

    Drip(
      provider?: null,
      nonce?: null,
      payload?: null
    ): TypedEventFilter<
      [
        string,
        BigNumber,
        [number, BigNumber[]] & { resourceType: number; amounts: BigNumber[] }
      ],
      {
        provider: string;
        nonce: BigNumber;
        payload: [number, BigNumber[]] & {
          resourceType: number;
          amounts: BigNumber[];
        };
      }
    >;

    "Initialized(uint8)"(
      version?: null
    ): TypedEventFilter<[number], { version: number }>;

    Initialized(
      version?: null
    ): TypedEventFilter<[number], { version: number }>;

    "RouterUpdated(address)"(
      router?: null
    ): TypedEventFilter<[string], { router: string }>;

    RouterUpdated(
      router?: null
    ): TypedEventFilter<[string], { router: string }>;
  };

  estimateGas: {
    nonces(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    router(overrides?: CallOverrides): Promise<BigNumber>;

    send(
      nonce: BigNumberish,
      payload: { resourceType: BigNumberish; amounts: BigNumberish[] },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    nonces(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    router(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    send(
      nonce: BigNumberish,
      payload: { resourceType: BigNumberish; amounts: BigNumberish[] },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
