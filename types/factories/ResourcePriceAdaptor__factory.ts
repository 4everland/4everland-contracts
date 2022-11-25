/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  ResourcePriceAdaptor,
  ResourcePriceAdaptorInterface,
} from "../ResourcePriceAdaptor";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
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
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
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
        components: [
          {
            internalType: "enum ResourceData.ResourceType",
            name: "resourceType",
            type: "uint8",
          },
          {
            internalType: "uint256",
            name: "price",
            type: "uint256",
          },
        ],
        indexed: false,
        internalType: "struct IResourcePriceAdaptor.PriceAdaptor[]",
        name: "adaptors",
        type: "tuple[]",
      },
    ],
    name: "PriceAdaptorsUpdated",
    type: "event",
  },
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
        name: "priceIndexBlock",
        type: "uint256",
      },
    ],
    name: "PriceIndexBlockUpdated",
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
        internalType: "address",
        name: "provider",
        type: "address",
      },
      {
        internalType: "enum ResourceData.ResourceType",
        name: "resourceType",
        type: "uint8",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "priceIndexBlock",
        type: "uint256",
      },
    ],
    name: "getAmountAt",
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
    inputs: [
      {
        internalType: "address",
        name: "provider",
        type: "address",
      },
      {
        internalType: "enum ResourceData.ResourceType",
        name: "resourceType",
        type: "uint8",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "getAmountOf",
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
    inputs: [
      {
        internalType: "address",
        name: "provider",
        type: "address",
      },
      {
        internalType: "enum ResourceData.ResourceType",
        name: "resourceType",
        type: "uint8",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "priceIndexBlock",
        type: "uint256",
      },
    ],
    name: "getValueAt",
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
    inputs: [
      {
        internalType: "address",
        name: "provider",
        type: "address",
      },
      {
        internalType: "enum ResourceData.ResourceType",
        name: "resourceType",
        type: "uint8",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "getValueOf",
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
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
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
    inputs: [],
    name: "owner",
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
        internalType: "address",
        name: "provider",
        type: "address",
      },
      {
        internalType: "enum ResourceData.ResourceType",
        name: "resourceType",
        type: "uint8",
      },
      {
        internalType: "uint256",
        name: "priceIndexBlock",
        type: "uint256",
      },
    ],
    name: "priceAt",
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
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "priceIndexBlocks",
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
    inputs: [
      {
        internalType: "address",
        name: "provider",
        type: "address",
      },
      {
        internalType: "enum ResourceData.ResourceType",
        name: "resourceType",
        type: "uint8",
      },
    ],
    name: "priceOf",
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
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
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
        components: [
          {
            internalType: "enum ResourceData.ResourceType",
            name: "resourceType",
            type: "uint8",
          },
          {
            internalType: "uint256",
            name: "price",
            type: "uint256",
          },
        ],
        internalType: "struct IResourcePriceAdaptor.PriceAdaptor[]",
        name: "adaptors",
        type: "tuple[]",
      },
    ],
    name: "setPriceAdaptors",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060006200002060016200008e565b9050801562000039576000805461ff0019166101001790555b801562000087576000805461ff00191690556040517f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb3847402498906200007e9060019062000168565b60405180910390a15b50620001cb565b60008054610100900460ff1615620000f7578160ff166001148015620000c75750620000c5306200013b60201b620007721760201c565b155b620000ef5760405162461bcd60e51b8152600401620000e69062000178565b60405180910390fd5b506000919050565b60005460ff808416911610620001215760405162461bcd60e51b8152600401620000e69062000178565b506000805460ff191660ff92909216919091179055600190565b6001600160a01b03163b151590565b600060ff82165b92915050565b62000162816200014a565b82525050565b6020810162000151828462000157565b602080825281016200015181602e81527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160208201526d191e481a5b9a5d1a585b1a5e995960921b604082015260600190565b61144b80620001db6000396000f3fe608060405234801561001057600080fd5b50600436106100cf5760003560e01c80638ab9fd241161008c578063b863d8b911610066578063b863d8b914610192578063e7af17fa146101a5578063f2fde38b146101c5578063f887ea40146101d857600080fd5b80638ab9fd24146101535780638da5cb5b14610166578063ace4d5d01461017f57600080fd5b806327b54756146100d457806335da9b23146100e9578063485cc955146101125780635e1a544c1461012557806365d6b40c14610138578063715018a61461014b575b600080fd5b6100e76100e2366004610c6f565b6101fe565b005b6100fc6100f7366004610ccf565b610341565b6040516101099190610d27565b60405180910390f35b6100e7610120366004610d54565b610361565b6100fc610133366004610d91565b6103e7565b6100fc610146366004610ccf565b610416565b6100e761042c565b6100fc610161366004610dc4565b610462565b6033546001600160a01b03166040516101099190610e31565b6100fc61018d366004610dc4565b610482565b6100fc6101a0366004610ccf565b61048f565b6100fc6101b3366004610e3f565b60656020526000908152604090205481565b6100e76101d3366004610e3f565b610716565b6000546101f1906201000090046001600160a01b031681565b6040516101099190610e74565b60008060029054906101000a90046001600160a01b03166001600160a01b031663a5a3f6c86040518163ffffffff1660e01b815260040160206040518083038186803b15801561024d57600080fd5b505afa158015610261573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102859190610e8d565b604051636b074a0760e01b81529091506001600160a01b03821690636b074a07906102b4903390600401610e31565b60206040518083038186803b1580156102cc57600080fd5b505afa1580156102e0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103049190610ec1565b6103295760405162461bcd60e51b815260040161032090610f2b565b60405180910390fd5b6103333383610781565b61033d33436108f2565b5050565b60006103578261035186866103e7565b9061093f565b90505b9392505050565b600061036d600161094b565b90508015610385576000805461ff0019166101001790555b61038e836109d8565b61039782610a2a565b80156103e2576000805461ff00191690556040517f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb3847402498906103d990600190610f4f565b60405180910390a15b505050565b6001600160a01b03821660009081526065602052604081205461040d908490849061048f565b90505b92915050565b600061035761042585856103e7565b8390610a5a565b6033546001600160a01b031633146104565760405162461bcd60e51b815260040161032090610f92565b61046060006109d8565b565b600061047961047286868561048f565b8490610a5a565b95945050505050565b6000610479836103518787865b60008260018160048111156104a6576104a6610fa2565b14806104c3575060028160048111156104c1576104c1610fa2565b145b806104df575060038160048111156104dd576104dd610fa2565b145b806104fb575060048160048111156104f9576104f9610fa2565b145b6105175760405162461bcd60e51b815260040161032090611000565b600060029054906101000a90046001600160a01b03166001600160a01b031663a5a3f6c86040518163ffffffff1660e01b815260040160206040518083038186803b15801561056557600080fd5b505afa158015610579573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061059d9190610e8d565b6001600160a01b0316636b074a07866040518263ffffffff1660e01b81526004016105c89190610e31565b60206040518083038186803b1580156105e057600080fd5b505afa1580156105f4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106189190610ec1565b6106345760405162461bcd60e51b815260040161032090611057565b6001600160a01b03851660009081526066602052604081209085600481111561065f5761065f610fa2565b600481111561067057610670610fa2565b8152602001908152602001600020600084815260200190815260200160002054600014156106b05760405162461bcd60e51b815260040161032090611099565b6001600160a01b0385166000908152606660205260408120908560048111156106db576106db610fa2565b60048111156106ec576106ec610fa2565b81526020019081526020016000206000848152602001908152602001600020549150509392505050565b6033546001600160a01b031633146107405760405162461bcd60e51b815260040161032090610f92565b6001600160a01b0381166107665760405162461bcd60e51b8152600401610320906110ec565b61076f816109d8565b50565b6001600160a01b03163b151590565b60008151116107a25760405162461bcd60e51b81526004016103209061113e565b60005b81518110156108b45760008282815181106107c2576107c261114e565b6020026020010151602001519050600081116107f05760405162461bcd60e51b8152600401610320906111a4565b60008383815181106108045761080461114e565b6020908102919091010151519050600081600481111561082657610826610fa2565b14156108445760405162461bcd60e51b815260040161032090611000565b6001600160a01b0385166000908152606660205260408120839183600481111561087057610870610fa2565b600481111561088157610881610fa2565b815260208082019290925260409081016000908120438252909252902055508190506108ac816111ca565b9150506107a5565b507f5f3923b716a0c549787d81642134926265ea1c382ed8cad7656fe53849c3c0fa82826040516108e692919061129a565b60405180910390a15050565b6001600160a01b03821660009081526065602052604090819020829055517f76282b3edbd0f1e6ea84aeec151f2dd7f368e7ce77d743c811c1273ee753f636906108e690849084906112ba565b600061040d82846112d5565b60008054610100900460ff1615610992578160ff16600114801561096e5750303b155b61098a5760405162461bcd60e51b81526004016103209061133f565b506000919050565b60005460ff8084169116106109b95760405162461bcd60e51b81526004016103209061133f565b506000805460ff191660ff92909216919091179055600190565b919050565b603380546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b600054610100900460ff16610a515760405162461bcd60e51b815260040161032090611397565b61076f81610a66565b600061040d82846113bd565b6001600160a01b038116610a8c5760405162461bcd60e51b815260040161032090611405565b6000805462010000600160b01b031916620100006001600160a01b038416021790556040517f7aed1d3e8155a07ccf395e44ea3109a0e2d6c9b29bbbe9f142d9790596f4dc8090610ade908390610e74565b60405180910390a150565b634e487b7160e01b600052604160045260246000fd5b601f19601f830116810181811067ffffffffffffffff82111715610b2557610b25610ae9565b6040525050565b6000610b3760405190565b90506109d38282610aff565b600067ffffffffffffffff821115610b5d57610b5d610ae9565b5060209081020190565b6005811061076f57600080fd5b803561041081610b67565b805b811461076f57600080fd5b803561041081610b7f565b600060408284031215610bac57610bac600080fd5b610bb66040610b2c565b90506000610bc48484610b74565b8252506020610bd584848301610b8c565b60208301525092915050565b6000610bf4610bef84610b43565b610b2c565b83815290506020810160408402830185811115610c1357610c13600080fd5b835b81811015610c395780610c288882610b97565b845250602090920191604001610c15565b5050509392505050565b600082601f830112610c5757610c57600080fd5b8135610c67848260208601610be1565b949350505050565b600060208284031215610c8457610c84600080fd5b813567ffffffffffffffff811115610c9e57610c9e600080fd5b610c6784828501610c43565b60006001600160a01b038216610410565b610b8181610caa565b803561041081610cbb565b600080600060608486031215610ce757610ce7600080fd5b6000610cf38686610cc4565b9350506020610d0486828701610b74565b9250506040610d1586828701610b8c565b9150509250925092565b805b82525050565b602081016104108284610d1f565b600061041082610caa565b610b8181610d35565b803561041081610d40565b60008060408385031215610d6a57610d6a600080fd5b6000610d768585610cc4565b9250506020610d8785828601610d49565b9150509250929050565b60008060408385031215610da757610da7600080fd5b6000610db38585610cc4565b9250506020610d8785828601610b74565b60008060008060808587031215610ddd57610ddd600080fd5b6000610de98787610cc4565b9450506020610dfa87828801610b74565b9350506040610e0b87828801610b8c565b9250506060610e1c87828801610b8c565b91505092959194509250565b610d2181610caa565b602081016104108284610e28565b600060208284031215610e5457610e54600080fd5b6000610c678484610cc4565b600061041082610d35565b610d2181610e60565b602081016104108284610e6b565b805161041081610d40565b600060208284031215610ea257610ea2600080fd5b6000610c678484610e82565b801515610b81565b805161041081610eae565b600060208284031215610ed657610ed6600080fd5b6000610c678484610eb6565b602981526000602082017f526f75746572577261707065723a2063616c6c6572206973206e6f742074686581526810383937bb34b232b960b91b602082015291505b5060400190565b6020808252810161041081610ee2565b600060ff8216610410565b610d2181610f3b565b602081016104108284610f46565b60208082527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572910190815260005b5060200190565b6020808252810161041081610f5d565b634e487b7160e01b600052602160045260246000fd5b602b81526000602082017f5265736f75726365507269636541646170746f723a20696e76616c696420726581526a736f75726365207479706560a81b60208201529150610f24565b6020808252810161041081610fb8565b602a81526000602082017f5265736f75726365507269636541646170746f723a206e6f6e6578697374656e8152693a10383937bb34b232b960b11b60208201529150610f24565b6020808252810161041081611010565b60208082527f5265736f75726365507269636541646170746f723a207a65726f20707269636591019081526000610f8b565b6020808252810161041081611067565b602681526000602082017f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206181526564647265737360d01b60208201529150610f24565b60208082528101610410816110a9565b602581526000602082017f5265736f75726365507269636541646170746f723a20696e76616c6964207072815264696365727360d81b60208201529150610f24565b60208082528101610410816110fc565b634e487b7160e01b600052603260045260246000fd5b602381526000602082017f5265736f75726365507269636541646170746f723a20696e76616c696420707281526269636560e81b60208201529150610f24565b6020808252810161041081611164565b634e487b7160e01b600052601160045260246000fd5b60006000198214156111de576111de6111b4565b5060010190565b6005811061076f5761076f610fa2565b806109d3816111e5565b6000610410826111f5565b610d21816111ff565b80516040830190611224848261120a565b5060208201516112376020850182610d1f565b50505050565b60006112498383611213565b505060400190565b600061125b825190565b80845260209384019383018060005b8381101561128f57815161127e888261123d565b97506020830192505060010161126a565b509495945050505050565b604081016112a88285610e28565b81810360208301526103578184611251565b604081016112c88285610e28565b61035a6020830184610d1f565b60008160001904831182151516156112ef576112ef6111b4565b500290565b602e81526000602082017f496e697469616c697a61626c653a20636f6e747261637420697320616c72656181526d191e481a5b9a5d1a585b1a5e995960921b60208201529150610f24565b60208082528101610410816112f4565b602b81526000602082017f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206981526a6e697469616c697a696e6760a81b60208201529150610f24565b602080825281016104108161134f565b634e487b7160e01b600052601260045260246000fd5b6000826113cc576113cc6113a7565b500490565b601b81526000602082017f526f75746572577261707065723a207a65726f2061646472657373000000000081529150610f8b565b60208082528101610410816113d156fea2646970667358221220f65ae164d3c9b8b411cfb0eca5a8b5ae61e5fb634adcea188e9895317c7098bf64736f6c63430008090033";

export class ResourcePriceAdaptor__factory extends ContractFactory {
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
  ): Promise<ResourcePriceAdaptor> {
    return super.deploy(overrides || {}) as Promise<ResourcePriceAdaptor>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): ResourcePriceAdaptor {
    return super.attach(address) as ResourcePriceAdaptor;
  }
  connect(signer: Signer): ResourcePriceAdaptor__factory {
    return super.connect(signer) as ResourcePriceAdaptor__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ResourcePriceAdaptorInterface {
    return new utils.Interface(_abi) as ResourcePriceAdaptorInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ResourcePriceAdaptor {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ResourcePriceAdaptor;
  }
}
