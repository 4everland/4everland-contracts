/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Analytics, AnalyticsInterface } from "../Analytics";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "provider",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "nonce",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "enum ResourceData.ResourceType",
            name: "resourceType",
            type: "uint8",
          },
          {
            internalType: "uint256[]",
            name: "amounts",
            type: "uint256[]",
          },
        ],
        indexed: false,
        internalType: "struct ResourceData.AmountPayload[]",
        name: "payload",
        type: "tuple[]",
      },
    ],
    name: "Drip",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint8",
        name: "version",
        type: "uint8",
      },
    ],
    name: "Initialized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "contract IRouter",
        name: "router",
        type: "address",
      },
    ],
    name: "RouterUpdated",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "contract IRouter",
        name: "router",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "nonces",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "router",
    outputs: [
      {
        internalType: "contract IRouter",
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
        internalType: "uint256",
        name: "nonce",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "enum ResourceData.ResourceType",
            name: "resourceType",
            type: "uint8",
          },
          {
            internalType: "uint256[]",
            name: "amounts",
            type: "uint256[]",
          },
        ],
        internalType: "struct ResourceData.AmountPayload[]",
        name: "payload",
        type: "tuple[]",
      },
    ],
    name: "send",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610b70806100206000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c8063141a468c1461005157806390bea3b91461008a578063c4d66de81461009f578063f887ea40146100b2575b600080fd5b61007461005f36600461046b565b60016020526000908152604090205460ff1681565b604051610081919061049e565b60405180910390f35b61009d6100983660046106bd565b6100d8565b005b61009d6100ad366004610745565b61028e565b6000546100cb906201000090046001600160a01b031681565b604051610081919061077a565b60008060029054906101000a90046001600160a01b03166001600160a01b031663a5a3f6c86040518163ffffffff1660e01b815260040160206040518083038186803b15801561012757600080fd5b505afa15801561013b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061015f9190610793565b604051636b074a0760e01b81529091506001600160a01b03821690636b074a079061018e9033906004016107bd565b60206040518083038186803b1580156101a657600080fd5b505afa1580156101ba573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101de91906107de565b6102035760405162461bcd60e51b81526004016101fa90610848565b60405180910390fd5b60008381526001602052604090205460ff16156102325760405162461bcd60e51b81526004016101fa9061088f565b600083815260016020819052604091829020805460ff19169091179055517f020ded4629fe02568c9ea2afece21cc2c122cd1c6495b39f88bea43dd4c2ed9990610281903390869086906109f4565b60405180910390a1505050565b600061029a600161030a565b905080156102b2576000805461ff0019166101001790555b6102bb82610397565b8015610306576000805461ff00191690556040517f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb3847402498906102fd90600190610a35565b60405180910390a15b5050565b60008054610100900460ff1615610351578160ff16600114801561032d5750303b155b6103495760405162461bcd60e51b81526004016101fa90610a8e565b506000919050565b60005460ff8084169116106103785760405162461bcd60e51b81526004016101fa90610a8e565b506000805460ff191660ff92909216919091179055600190565b919050565b600054610100900460ff166103be5760405162461bcd60e51b81526004016101fa90610ae6565b6103c7816103ca565b50565b6001600160a01b0381166103f05760405162461bcd60e51b81526004016101fa90610b2a565b6000805462010000600160b01b031916620100006001600160a01b038416021790556040517f7aed1d3e8155a07ccf395e44ea3109a0e2d6c9b29bbbe9f142d9790596f4dc809061044290839061077a565b60405180910390a150565b805b81146103c757600080fd5b80356104658161044d565b92915050565b60006020828403121561048057610480600080fd5b600061048c848461045a565b949350505050565b8015155b82525050565b602081016104658284610494565b634e487b7160e01b600052604160045260246000fd5b601f19601f830116810181811067ffffffffffffffff821117156104e8576104e86104ac565b6040525050565b60006104fa60405190565b905061039282826104c2565b600067ffffffffffffffff821115610520576105206104ac565b5060209081020190565b600581106103c757600080fd5b80356104658161052a565b600061055561055084610506565b6104ef565b8381529050602080820190840283018581111561057457610574600080fd5b835b818110156105985780610589888261045a565b84525060209283019201610576565b5050509392505050565b600082601f8301126105b6576105b6600080fd5b813561048c848260208601610542565b6000604082840312156105db576105db600080fd5b6105e560406104ef565b905060006105f38484610537565b825250602082013567ffffffffffffffff81111561061357610613600080fd5b61061f848285016105a2565b60208301525092915050565b600061063961055084610506565b8381529050602080820190840283018581111561065857610658600080fd5b835b8181101561059857803567ffffffffffffffff81111561067c5761067c600080fd5b80860161068989826105c6565b855250506020928301920161065a565b600082601f8301126106ad576106ad600080fd5b813561048c84826020860161062b565b600080604083850312156106d3576106d3600080fd5b60006106df858561045a565b925050602083013567ffffffffffffffff8111156106ff576106ff600080fd5b61070b85828601610699565b9150509250929050565b60006001600160a01b038216610465565b600061046582610715565b61044f81610726565b803561046581610731565b60006020828403121561075a5761075a600080fd5b600061048c848461073a565b600061046582610726565b61049881610766565b602081016104658284610771565b805161046581610731565b6000602082840312156107a8576107a8600080fd5b600061048c8484610788565b61049881610715565b6020810161046582846107b4565b80151561044f565b8051610465816107cb565b6000602082840312156107f3576107f3600080fd5b600061048c84846107d3565b602981526000602082017f526f75746572577261707065723a2063616c6c6572206973206e6f742074686581526810383937bb34b232b960b91b602082015291505b5060400190565b60208082528101610465816107ff565b601781526000602082017f416e616c79746963733a206e6f6e636520657869737473000000000000000000815291505b5060200190565b6020808252810161046581610858565b80610498565b634e487b7160e01b600052602160045260246000fd5b600581106103c7576103c76108a5565b80610392816108bb565b6000610465826108cb565b610498816108d5565b60006108f5838361089f565b505060200190565b6000610907825190565b80845260209384019383018060005b8381101561093b57815161092a88826108e9565b975060208301925050600101610916565b509495945050505050565b8051600090604084019061095a85826108e0565b506020830151848203602086015261097282826108fd565b95945050505050565b60006109878383610946565b9392505050565b6000610998825190565b808452602084019350836020820285016109b28560200190565b8060005b858110156109e757848403895281516109cf858261097b565b94506020830160209a909a01999250506001016109b6565b5091979650505050505050565b60608101610a0282866107b4565b610a0f602083018561089f565b8181036040830152610972818461098e565b600060ff8216610465565b61049881610a21565b602081016104658284610a2c565b602e81526000602082017f496e697469616c697a61626c653a20636f6e747261637420697320616c72656181526d191e481a5b9a5d1a585b1a5e995960921b60208201529150610841565b6020808252810161046581610a43565b602b81526000602082017f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206981526a6e697469616c697a696e6760a81b60208201529150610841565b6020808252810161046581610a9e565b601b81526000602082017f526f75746572577261707065723a207a65726f2061646472657373000000000081529150610888565b6020808252810161046581610af656fea2646970667358221220026f3c679b6a3dbe165f1ce534e424253f05ae95ca8b2d6d9f64a084df92334164736f6c63430008090033";

export class Analytics__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Analytics> {
    return super.deploy(overrides || {}) as Promise<Analytics>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Analytics {
    return super.attach(address) as Analytics;
  }
  connect(signer: Signer): Analytics__factory {
    return super.connect(signer) as Analytics__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): AnalyticsInterface {
    return new utils.Interface(_abi) as AnalyticsInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Analytics {
    return new Contract(address, _abi, signerOrProvider) as Analytics;
  }
}
