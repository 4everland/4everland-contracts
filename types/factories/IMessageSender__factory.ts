/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  IMessageSender,
  IMessageSenderInterface,
} from "../IMessageSender";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint64",
        name: "dstChainId",
        type: "uint64",
      },
    ],
    name: "DstChainIdUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "messageBus",
        type: "address",
      },
    ],
    name: "MessageBusUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint64",
        name: "srcChainId",
        type: "uint64",
      },
      {
        indexed: false,
        internalType: "uint64",
        name: "dstChainId",
        type: "uint64",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "message",
        type: "bytes",
      },
    ],
    name: "MessageSent",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "message",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "address",
        name: "executor",
        type: "address",
      },
    ],
    name: "MessageWithTransferRefund",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "receiver",
        type: "address",
      },
    ],
    name: "ReceiverUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "payment",
        type: "address",
      },
    ],
    name: "SrcChainPaymentUpdated",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "message",
        type: "bytes",
      },
    ],
    name: "calcFee",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "dstChainId",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "sender",
            type: "address",
          },
          {
            internalType: "address",
            name: "receiver",
            type: "address",
          },
          {
            internalType: "uint64",
            name: "srcChainId",
            type: "uint64",
          },
          {
            internalType: "bytes32",
            name: "srcTxHash",
            type: "bytes32",
          },
        ],
        internalType: "struct MsgDataTypes.RouteInfo",
        name: "route",
        type: "tuple",
      },
      {
        internalType: "uint64",
        name: "dstChainId",
        type: "uint64",
      },
      {
        internalType: "bytes",
        name: "message",
        type: "bytes",
      },
    ],
    name: "messageId",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "receiver",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "message",
        type: "bytes",
      },
    ],
    name: "sendMessage",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
];

export class IMessageSender__factory {
  static readonly abi = _abi;
  static createInterface(): IMessageSenderInterface {
    return new utils.Interface(_abi) as IMessageSenderInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IMessageSender {
    return new Contract(address, _abi, signerOrProvider) as IMessageSender;
  }
}
