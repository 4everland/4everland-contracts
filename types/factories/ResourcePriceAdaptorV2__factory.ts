/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  ResourcePriceAdaptorV2,
  ResourcePriceAdaptorV2Interface,
} from "../ResourcePriceAdaptorV2";

const _abi = [
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
        internalType: "uint256",
        name: "index",
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
    name: "fixPriceIndex",
    outputs: [],
    stateMutability: "nonpayable",
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
        name: "",
        type: "address",
      },
      {
        internalType: "enum ResourceData.ResourceType",
        name: "",
        type: "uint8",
      },
    ],
    name: "indexBlocks",
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
  "0x60806040523480156200001157600080fd5b5060006200002060016200008e565b9050801562000039576000805461ff0019166101001790555b801562000087576000805461ff00191690556040517f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb3847402498906200007e9060019062000168565b60405180910390a15b50620001cb565b60008054610100900460ff1615620000f7578160ff166001148015620000c75750620000c5306200013b60201b6200086a1760201c565b155b620000ef5760405162461bcd60e51b8152600401620000e69062000178565b60405180910390fd5b506000919050565b60005460ff808416911610620001215760405162461bcd60e51b8152600401620000e69062000178565b506000805460ff191660ff92909216919091179055600190565b6001600160a01b03163b151590565b600060ff82165b92915050565b62000162816200014a565b82525050565b6020810162000151828462000157565b602080825281016200015181602e81527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160208201526d191e481a5b9a5d1a585b1a5e995960921b604082015260600190565b6115d380620001db6000396000f3fe608060405234801561001057600080fd5b50600436106100f55760003560e01c80638da5cb5b11610097578063d15aa79d11610066578063d15aa79d146101f6578063e7af17fa14610209578063f2fde38b14610229578063f887ea401461023c57600080fd5b80638da5cb5b1461018c5780639d3ec886146101a5578063ace4d5d0146101d0578063b863d8b9146101e357600080fd5b80635e1a544c116100d35780635e1a544c1461014b57806365d6b40c1461015e578063715018a6146101715780638ab9fd241461017957600080fd5b806327b54756146100fa57806335da9b231461010f578063485cc95514610138575b600080fd5b61010d610108366004610d5f565b610262565b005b61012261011d366004610dbf565b61039b565b60405161012f9190610e17565b60405180910390f35b61010d610146366004610e44565b6103b9565b610122610159366004610e81565b61043f565b61012261016c366004610dbf565b6104a0565b61010d6104b6565b610122610187366004610eb4565b6104ec565b6033546001600160a01b031660405161012f9190610f21565b6101226101b3366004610e81565b606760209081526000928352604080842090915290825290205481565b6101226101de366004610eb4565b61050c565b6101226101f1366004610dbf565b610519565b61010d610204366004610f2f565b6107a0565b610122610217366004610f90565b60656020526000908152604090205481565b61010d610237366004610f90565b61080e565b600054610255906201000090046001600160a01b031681565b60405161012f9190610fc5565b60008060029054906101000a90046001600160a01b03166001600160a01b031663a5a3f6c86040518163ffffffff1660e01b815260040160206040518083038186803b1580156102b157600080fd5b505afa1580156102c5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102e99190610fde565b604051636b074a0760e01b81529091506001600160a01b03821690636b074a0790610318903390600401610f21565b60206040518083038186803b15801561033057600080fd5b505afa158015610344573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103689190611012565b61038d5760405162461bcd60e51b81526004016103849061107c565b60405180910390fd5b6103973383610879565b5050565b60006103b1826103ab868661043f565b90610a37565b949350505050565b60006103c56001610a43565b905080156103dd576000805461ff0019166101001790555b6103e683610ad0565b6103ef82610b22565b801561043a576000805461ff00191690556040517f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb384740249890610431906001906110a0565b60405180910390a15b505050565b6001600160a01b0382166000908152606760205260408120610497908490849084826004811115610472576104726110ae565b6004811115610483576104836110ae565b815260200190815260200160002054610519565b90505b92915050565b60006103b16104af858561043f565b8390610b52565b6033546001600160a01b031633146104e05760405162461bcd60e51b8152600401610384906110f9565b6104ea6000610ad0565b565b60006105036104fc868685610519565b8490610b52565b95945050505050565b6000610503836103ab8787865b6000826001816004811115610530576105306110ae565b148061054d5750600281600481111561054b5761054b6110ae565b145b8061056957506003816004811115610567576105676110ae565b145b8061058557506004816004811115610583576105836110ae565b145b6105a15760405162461bcd60e51b815260040161038490611151565b600060029054906101000a90046001600160a01b03166001600160a01b031663a5a3f6c86040518163ffffffff1660e01b815260040160206040518083038186803b1580156105ef57600080fd5b505afa158015610603573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106279190610fde565b6001600160a01b0316636b074a07866040518263ffffffff1660e01b81526004016106529190610f21565b60206040518083038186803b15801561066a57600080fd5b505afa15801561067e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106a29190611012565b6106be5760405162461bcd60e51b8152600401610384906111a8565b6001600160a01b0385166000908152606660205260408120908560048111156106e9576106e96110ae565b60048111156106fa576106fa6110ae565b81526020019081526020016000206000848152602001908152602001600020546000141561073a5760405162461bcd60e51b8152600401610384906111ea565b6001600160a01b038516600090815260666020526040812090856004811115610765576107656110ae565b6004811115610776576107766110ae565b81526020019081526020016000206000848152602001908152602001600020549150509392505050565b7fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d6103546001600160a01b031633146107e95760405162461bcd60e51b81526004016103849061123c565b6001600160a01b038316600090815260656020526040902082905561043a8382610879565b6033546001600160a01b031633146108385760405162461bcd60e51b8152600401610384906110f9565b6001600160a01b03811661085e5760405162461bcd60e51b81526004016103849061128f565b61086781610ad0565b50565b6001600160a01b03163b151590565b600081511161089a5760405162461bcd60e51b8152600401610384906112e1565b60005b81518110156109f95760008282815181106108ba576108ba6112f1565b6020026020010151602001519050600081116108e85760405162461bcd60e51b815260040161038490611347565b60008383815181106108fc576108fc6112f1565b6020908102919091010151519050600081600481111561091e5761091e6110ae565b141561093c5760405162461bcd60e51b815260040161038490611151565b6001600160a01b03851660009081526066602052604081208391836004811115610968576109686110ae565b6004811115610979576109796110ae565b81526020808201929092526040908101600090812043808352908452828220949094556001600160a01b038916815260679092528120908360048111156109c2576109c26110ae565b60048111156109d3576109d36110ae565b8152602081019190915260400160002055508190506109f18161136d565b91505061089d565b507f5f3923b716a0c549787d81642134926265ea1c382ed8cad7656fe53849c3c0fa8282604051610a2b92919061143d565b60405180910390a15050565b6000610497828461145d565b60008054610100900460ff1615610a8a578160ff166001148015610a665750303b155b610a825760405162461bcd60e51b8152600401610384906114c7565b506000919050565b60005460ff808416911610610ab15760405162461bcd60e51b8152600401610384906114c7565b506000805460ff191660ff92909216919091179055600190565b919050565b603380546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b600054610100900460ff16610b495760405162461bcd60e51b81526004016103849061151f565b61086781610b5e565b60006104978284611545565b6001600160a01b038116610b845760405162461bcd60e51b81526004016103849061158d565b6000805462010000600160b01b031916620100006001600160a01b038416021790556040517f7aed1d3e8155a07ccf395e44ea3109a0e2d6c9b29bbbe9f142d9790596f4dc8090610bd6908390610fc5565b60405180910390a150565b634e487b7160e01b600052604160045260246000fd5b601f19601f830116810181811067ffffffffffffffff82111715610c1d57610c1d610be1565b6040525050565b6000610c2f60405190565b9050610acb8282610bf7565b600067ffffffffffffffff821115610c5557610c55610be1565b5060209081020190565b6005811061086757600080fd5b803561049a81610c5f565b805b811461086757600080fd5b803561049a81610c77565b600060408284031215610ca457610ca4600080fd5b610cae6040610c24565b90506000610cbc8484610c6c565b8252506020610ccd84848301610c84565b60208301525092915050565b6000610cec610ce784610c3b565b610c24565b83815290506020810160408402830185811115610d0b57610d0b600080fd5b835b81811015610d315780610d208882610c8f565b845250602090920191604001610d0d565b5050509392505050565b600082601f830112610d4f57610d4f600080fd5b81356103b1848260208601610cd9565b600060208284031215610d7457610d74600080fd5b813567ffffffffffffffff811115610d8e57610d8e600080fd5b6103b184828501610d3b565b60006001600160a01b03821661049a565b610c7981610d9a565b803561049a81610dab565b600080600060608486031215610dd757610dd7600080fd5b6000610de38686610db4565b9350506020610df486828701610c6c565b9250506040610e0586828701610c84565b9150509250925092565b805b82525050565b6020810161049a8284610e0f565b600061049a82610d9a565b610c7981610e25565b803561049a81610e30565b60008060408385031215610e5a57610e5a600080fd5b6000610e668585610db4565b9250506020610e7785828601610e39565b9150509250929050565b60008060408385031215610e9757610e97600080fd5b6000610ea38585610db4565b9250506020610e7785828601610c6c565b60008060008060808587031215610ecd57610ecd600080fd5b6000610ed98787610db4565b9450506020610eea87828801610c6c565b9350506040610efb87828801610c84565b9250506060610f0c87828801610c84565b91505092959194509250565b610e1181610d9a565b6020810161049a8284610f18565b600080600060608486031215610f4757610f47600080fd5b6000610f538686610db4565b9350506020610f6486828701610c84565b925050604084013567ffffffffffffffff811115610f8457610f84600080fd5b610e0586828701610d3b565b600060208284031215610fa557610fa5600080fd5b60006103b18484610db4565b600061049a82610e25565b610e1181610fb1565b6020810161049a8284610fbc565b805161049a81610e30565b600060208284031215610ff357610ff3600080fd5b60006103b18484610fd3565b801515610c79565b805161049a81610fff565b60006020828403121561102757611027600080fd5b60006103b18484611007565b602981526000602082017f526f75746572577261707065723a2063616c6c6572206973206e6f742074686581526810383937bb34b232b960b91b602082015291505b5060400190565b6020808252810161049a81611033565b600060ff821661049a565b610e118161108c565b6020810161049a8284611097565b634e487b7160e01b600052602160045260246000fd5b60208082527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572910190815260005b5060200190565b6020808252810161049a816110c4565b602b81526000602082017f5265736f75726365507269636541646170746f723a20696e76616c696420726581526a736f75726365207479706560a81b60208201529150611075565b6020808252810161049a81611109565b602a81526000602082017f5265736f75726365507269636541646170746f723a206e6f6e6578697374656e8152693a10383937bb34b232b960b11b60208201529150611075565b6020808252810161049a81611161565b60208082527f5265736f75726365507269636541646170746f723a207a65726f207072696365910190815260006110f2565b6020808252810161049a816111b8565b602581526000602082017f41646d696e577261707065723a2063616c6c6572206973206e6f74207468652081526430b236b4b760d91b60208201529150611075565b6020808252810161049a816111fa565b602681526000602082017f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206181526564647265737360d01b60208201529150611075565b6020808252810161049a8161124c565b602581526000602082017f5265736f75726365507269636541646170746f723a20696e76616c6964207072815264696365727360d81b60208201529150611075565b6020808252810161049a8161129f565b634e487b7160e01b600052603260045260246000fd5b602381526000602082017f5265736f75726365507269636541646170746f723a20696e76616c696420707281526269636560e81b60208201529150611075565b6020808252810161049a81611307565b634e487b7160e01b600052601160045260246000fd5b600060001982141561138157611381611357565b5060010190565b60058110610867576108676110ae565b80610acb81611388565b600061049a82611398565b610e11816113a2565b805160408301906113c784826113ad565b5060208201516113da6020850182610e0f565b50505050565b60006113ec83836113b6565b505060400190565b60006113fe825190565b80845260209384019383018060005b8381101561143257815161142188826113e0565b97506020830192505060010161140d565b509495945050505050565b6040810161144b8285610f18565b81810360208301526103b181846113f4565b600081600019048311821515161561147757611477611357565b500290565b602e81526000602082017f496e697469616c697a61626c653a20636f6e747261637420697320616c72656181526d191e481a5b9a5d1a585b1a5e995960921b60208201529150611075565b6020808252810161049a8161147c565b602b81526000602082017f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206981526a6e697469616c697a696e6760a81b60208201529150611075565b6020808252810161049a816114d7565b634e487b7160e01b600052601260045260246000fd5b6000826115545761155461152f565b500490565b601b81526000602082017f526f75746572577261707065723a207a65726f20616464726573730000000000815291506110f2565b6020808252810161049a8161155956fea264697066735822122090d6a5cfeb4a1d0826b838f2729f6a49d5c4b513015501bb5442b51d24b2b50f64736f6c63430008090033";

export class ResourcePriceAdaptorV2__factory extends ContractFactory {
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
  ): Promise<ResourcePriceAdaptorV2> {
    return super.deploy(overrides || {}) as Promise<ResourcePriceAdaptorV2>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): ResourcePriceAdaptorV2 {
    return super.attach(address) as ResourcePriceAdaptorV2;
  }
  connect(signer: Signer): ResourcePriceAdaptorV2__factory {
    return super.connect(signer) as ResourcePriceAdaptorV2__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ResourcePriceAdaptorV2Interface {
    return new utils.Interface(_abi) as ResourcePriceAdaptorV2Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ResourcePriceAdaptorV2 {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ResourcePriceAdaptorV2;
  }
}