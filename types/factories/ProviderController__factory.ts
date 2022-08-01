/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  ProviderController,
  ProviderControllerInterface,
} from "../ProviderController";

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
        internalType: "address",
        name: "provider",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "account",
        type: "bytes32",
      },
    ],
    name: "AccountRegistered",
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
        name: "account",
        type: "address",
      },
    ],
    name: "Paused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "PauserAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "PauserRemoved",
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
        internalType: "bytes32",
        name: "account",
        type: "bytes32",
      },
    ],
    name: "ProviderDripped",
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
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Unpaused",
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
        internalType: "bytes32",
        name: "account",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "WalletTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "hash",
        type: "bytes32",
      },
    ],
    name: "WalletTypesHashUpdated",
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
        internalType: "bytes32",
        name: "account",
        type: "bytes32",
      },
    ],
    name: "accountExists",
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
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "addPauser",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "account",
        type: "bytes32",
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
        name: "payloads",
        type: "tuple[]",
      },
    ],
    name: "drip",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32[]",
        name: "accounts",
        type: "bytes32[]",
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
        internalType: "struct ResourceData.AmountPayload[][]",
        name: "payloads",
        type: "tuple[][]",
      },
    ],
    name: "dripMult",
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
        internalType: "bytes32",
        name: "account",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "wallet",
        type: "address",
      },
    ],
    name: "hashTypedDataV4ForWallet",
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
    inputs: [
      {
        internalType: "address",
        name: "provider",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "account",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "wallet",
        type: "address",
      },
    ],
    name: "hashWalletTypes",
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
    inputs: [
      {
        internalType: "address",
        name: "provider",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "account",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "wallet",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "signature",
        type: "bytes",
      },
    ],
    name: "initWallet",
    outputs: [],
    stateMutability: "nonpayable",
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
        internalType: "address",
        name: "pauser",
        type: "address",
      },
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "version",
        type: "string",
      },
      {
        internalType: "string",
        name: "walletTypes",
        type: "string",
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
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "isPauser",
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
    inputs: [],
    name: "pause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "paused",
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
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "pausers",
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
    inputs: [
      {
        internalType: "bytes32",
        name: "account",
        type: "bytes32",
      },
    ],
    name: "registerAccount",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32[]",
        name: "accounts",
        type: "bytes32[]",
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
        internalType: "struct ResourceData.AmountPayload[][]",
        name: "payloads",
        type: "tuple[][]",
      },
    ],
    name: "registerAndDripMult",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32[]",
        name: "accounts",
        type: "bytes32[]",
      },
    ],
    name: "registerMult",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "removePauser",
    outputs: [],
    stateMutability: "nonpayable",
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
    name: "renouncePauser",
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
  {
    inputs: [
      {
        internalType: "address",
        name: "provider",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "account",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "newWallet",
        type: "address",
      },
    ],
    name: "transferWallet",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "unpause",
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
        internalType: "bytes32",
        name: "account",
        type: "bytes32",
      },
    ],
    name: "walletExists",
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
    inputs: [
      {
        internalType: "address",
        name: "provider",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "account",
        type: "bytes32",
      },
    ],
    name: "walletOf",
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
    inputs: [],
    name: "walletTypesHash",
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
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060006200002060016200008e565b9050801562000039576000805461ff0019166101001790555b801562000087576000805461ff00191690556040517f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb3847402498906200007e9060019062000168565b60405180910390a15b50620001cb565b60008054610100900460ff1615620000f7578160ff166001148015620000c75750620000c5306200013b60201b620011131760201c565b155b620000ef5760405162461bcd60e51b8152600401620000e69062000178565b60405180910390fd5b506000919050565b60005460ff808416911610620001215760405162461bcd60e51b8152600401620000e69062000178565b506000805460ff191660ff92909216919091179055600190565b6001600160a01b03163b151590565b600060ff82165b92915050565b62000162816200014a565b82525050565b6020810162000151828462000157565b602080825281016200015181602e81527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160208201526d191e481a5b9a5d1a585b1a5e995960921b604082015260600190565b61302980620001db6000396000f3fe608060405234801561001057600080fd5b506004361061018d5760003560e01c806372d9e80e116100de578063a006410811610097578063dcccb5dc11610071578063dcccb5dc14610336578063f2db0f4214610349578063f2fde38b1461035c578063f887ea401461036f57600080fd5b8063a0064108146102fa578063b531303f14610310578063d6f0362e1461032357600080fd5b806372d9e80e1461027857806380f51c121461029857806382dc1ec4146102bb5780638456cb59146102ce5780638da5cb5b146102d65780639ba72cb8146102e757600080fd5b806345237f1c1161014b5780636b2c0f55116101255780636b2c0f55146102425780636ef8d66d14610255578063715018a61461025d578063718bb2f31461026557600080fd5b806345237f1c1461021157806346fbf68e146102245780635c975abb1461023757600080fd5b8062c1b50a1461019257806314e8099d146101a757806320898a78146101ba5780632d529764146101cd5780633078a6e8146101f65780633f4ba83a14610209575b600080fd5b6101a56101a0366004611ce2565b61038f565b005b6101a56101b5366004611f47565b6103e0565b6101a56101c8366004612013565b610508565b6101e06101db36600461204d565b610661565b6040516101ed919061208a565b60405180910390f35b6101a5610204366004612129565b6107a4565b6101a561097a565b6101a561021f366004612244565b6109a9565b6101e061023236600461231c565b610a4f565b60995460ff166101e0565b6101a561025036600461231c565b610a6d565b6101a5610aa3565b6101a5610aac565b6101a561027336600461233d565b610ae0565b61028b61028636600461204d565b610c9b565b6040516101ed91906123c4565b6101e06102a636600461231c565b60cb6020526000908152604090205460ff1681565b6101a56102c936600461231c565b610cec565b6101a5610d1f565b6067546001600160a01b031661028b565b6101e06102f536600461204d565b610d4c565b61030360cf5481565b6040516101ed91906123d8565b6101a561031e366004612129565b610d76565b610303610331366004611ce2565b610f3b565b610303610344366004611ce2565b610f5a565b6101a56103573660046123e6565b610f94565b6101a561036a36600461231c565b6110ba565b60cc54610382906001600160a01b031681565b6040516101ed919061241b565b600061039b8484610c9b565b9050336001600160a01b038216146103ce5760405162461bcd60e51b81526004016103c59061247d565b60405180910390fd5b6103da84848385611122565b50505050565b60cc54604080516314b47ed960e31b815290516000926001600160a01b03169163a5a3f6c8916004808301926020929190829003018186803b15801561042557600080fd5b505afa158015610439573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061045d9190612498565b604051636b074a0760e01b81529091506001600160a01b03821690636b074a079061048c9033906004016123c4565b60206040518083038186803b1580156104a457600080fd5b505afa1580156104b8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104dc91906124cc565b6104f85760405162461bcd60e51b81526004016103c590612533565b6105033384846111a0565b505050565b60cc54604080516314b47ed960e31b815290516000926001600160a01b03169163a5a3f6c8916004808301926020929190829003018186803b15801561054d57600080fd5b505afa158015610561573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105859190612498565b604051636b074a0760e01b81529091506001600160a01b03821690636b074a07906105b49033906004016123c4565b60206040518083038186803b1580156105cc57600080fd5b505afa1580156105e0573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061060491906124cc565b6106205760405162461bcd60e51b81526004016103c590612533565b60005b82518110156105035761064f3384838151811061064257610642612543565b6020026020010151611618565b806106598161256f565b915050610623565b60cc54604080516314b47ed960e31b815290516000926001600160a01b03169163a5a3f6c8916004808301926020929190829003018186803b1580156106a657600080fd5b505afa1580156106ba573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106de9190612498565b6001600160a01b0316636b074a07846040518263ffffffff1660e01b815260040161070991906123c4565b60206040518083038186803b15801561072157600080fd5b505afa158015610735573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061075991906124cc565b6107755760405162461bcd60e51b81526004016103c5906125cf565b506001600160a01b038216600090815260cd6020908152604080832084845290915290205460ff165b92915050565b60cc54604080516314b47ed960e31b815290516000926001600160a01b03169163a5a3f6c8916004808301926020929190829003018186803b1580156107e957600080fd5b505afa1580156107fd573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108219190612498565b604051636b074a0760e01b81529091506001600160a01b03821690636b074a07906108509033906004016123c4565b60206040518083038186803b15801561086857600080fd5b505afa15801561087c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108a091906124cc565b6108bc5760405162461bcd60e51b81526004016103c590612533565b60008351116108dd5760405162461bcd60e51b81526004016103c590612627565b60008251116108fe5760405162461bcd60e51b81526004016103c59061267f565b815183511461091f5760405162461bcd60e51b81526004016103c5906126dc565b60005b83518110156103da576109683385838151811061094157610941612543565b602002602001015185848151811061095b5761095b612543565b60200260200101516111a0565b806109728161256f565b915050610922565b61098333610a4f565b61099f5760405162461bcd60e51b81526004016103c590612721565b6109a76117c8565b565b60006109b5600161182e565b905080156109cd576000805461ff0019166101001790555b6109d6876118bb565b6109df8661190d565b6109e98585611934565b6109f283611965565b6109fb8261199c565b8015610a46576000805461ff00191690556040517f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb384740249890610a3d90600190612745565b60405180910390a15b50505050505050565b6001600160a01b0316600090815260cb602052604090205460ff1690565b6067546001600160a01b03163314610a975760405162461bcd60e51b81526004016103c590612785565b610aa0816119cc565b50565b6109a7336119cc565b6067546001600160a01b03163314610ad65760405162461bcd60e51b81526004016103c590612785565b6109a760006118bb565b336001600160a01b03831614610b085760405162461bcd60e51b81526004016103c5906127de565b610b128484610661565b610b2e5760405162461bcd60e51b81526004016103c590612832565b610b388484610d4c565b15610b555760405162461bcd60e51b81526004016103c590612880565b6000610b62858585610f3b565b905060cc60009054906101000a90046001600160a01b03166001600160a01b031663a5a3f6c86040518163ffffffff1660e01b815260040160206040518083038186803b158015610bb257600080fd5b505afa158015610bc6573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bea9190612498565b6001600160a01b031663238a4d1e8683856040518463ffffffff1660e01b8152600401610c19939291906128ee565b602060405180830381600087803b158015610c3357600080fd5b505af1158015610c47573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c6b91906124cc565b610c875760405162461bcd60e51b81526004016103c590612966565b610c948585600086611122565b5050505050565b6000610ca78383610d4c565b610cc35760405162461bcd60e51b81526004016103c5906129b9565b506001600160a01b03918216600090815260ce6020908152604080832093835292905220541690565b6067546001600160a01b03163314610d165760405162461bcd60e51b81526004016103c590612785565b610aa081611a4c565b610d2833610a4f565b610d445760405162461bcd60e51b81526004016103c590612721565b6109a7611ac5565b6001600160a01b03918216600090815260ce60209081526040808320938352929052205416151590565b60cc54604080516314b47ed960e31b815290516000926001600160a01b03169163a5a3f6c8916004808301926020929190829003018186803b158015610dbb57600080fd5b505afa158015610dcf573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610df39190612498565b604051636b074a0760e01b81529091506001600160a01b03821690636b074a0790610e229033906004016123c4565b60206040518083038186803b158015610e3a57600080fd5b505afa158015610e4e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e7291906124cc565b610e8e5760405162461bcd60e51b81526004016103c590612533565b6000835111610eaf5760405162461bcd60e51b81526004016103c590612627565b6000825111610ed05760405162461bcd60e51b81526004016103c59061267f565b8151835114610ef15760405162461bcd60e51b81526004016103c5906126dc565b60005b83518110156103da57610f133385838151811061064257610642612543565b610f293385838151811061094157610941612543565b80610f338161256f565b915050610ef4565b6000610f50610f4b858585610f5a565b611b1d565b90505b9392505050565b600060cf54848484604051602001610f7594939291906129c9565b6040516020818303038152906040528051906020012090509392505050565b60cc54604080516314b47ed960e31b815290516000926001600160a01b03169163a5a3f6c8916004808301926020929190829003018186803b158015610fd957600080fd5b505afa158015610fed573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110119190612498565b604051636b074a0760e01b81529091506001600160a01b03821690636b074a07906110409033906004016123c4565b60206040518083038186803b15801561105857600080fd5b505afa15801561106c573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061109091906124cc565b6110ac5760405162461bcd60e51b81526004016103c590612533565b6110b63383611618565b5050565b6067546001600160a01b031633146110e45760405162461bcd60e51b81526004016103c590612785565b6001600160a01b03811661110a5760405162461bcd60e51b81526004016103c590612a41565b610aa0816118bb565b6001600160a01b03163b151590565b6001600160a01b03848116600090815260ce602090815260408083208784529091529081902080546001600160a01b03191692841692909217909155517f3848c851d32f9ec4e5737cee35fe6816770cfbcfd0096097933c80ffa0bc7c2890611192908690869086908690612a51565b60405180910390a150505050565b6111aa8383610661565b6111c65760405162461bcd60e51b81526004016103c590612832565b60008151116111e75760405162461bcd60e51b81526004016103c590612ab8565b60005b81518110156115d957600082828151811061120757611207612543565b60209081029190910101518051909150600181600481111561122b5761122b612ac8565b1415611360578160200151516001146112565760405162461bcd60e51b81526004016103c590612b26565b60cc60009054906101000a90046001600160a01b03166001600160a01b03166322b31aba6040518163ffffffff1660e01b815260040160206040518083038186803b1580156112a457600080fd5b505afa1580156112b8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112dc9190612498565b6001600160a01b031663da5001a58787856020015160008151811061130357611303612543565b60200260200101516040518463ffffffff1660e01b815260040161132993929190612b36565b600060405180830381600087803b15801561134357600080fd5b505af1158015611357573d6000803e3d6000fd5b505050506115c4565b600281600481111561137457611374612ac8565b14156113ed5781602001515160011461139f5760405162461bcd60e51b81526004016103c590612ba6565b60cc60009054906101000a90046001600160a01b03166001600160a01b031663f931ca566040518163ffffffff1660e01b815260040160206040518083038186803b1580156112a457600080fd5b600381600481111561140157611401612ac8565b141561147a5781602001515160011461142c5760405162461bcd60e51b81526004016103c590612bfe565b60cc60009054906101000a90046001600160a01b03166001600160a01b031663a2d2f2db6040518163ffffffff1660e01b815260040160206040518083038186803b1580156112a457600080fd5b600481600481111561148e5761148e612ac8565b14156115ac578160200151516002146114b95760405162461bcd60e51b81526004016103c590612c56565b60cc60009054906101000a90046001600160a01b03166001600160a01b031663740e80616040518163ffffffff1660e01b815260040160206040518083038186803b15801561150757600080fd5b505afa15801561151b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061153f9190612498565b6001600160a01b031663ed3811888787856020015160008151811061156657611566612543565b6020026020010151866020015160018151811061158557611585612543565b60200260200101516040518563ffffffff1660e01b81526004016113299493929190612c66565b60405162461bcd60e51b81526004016103c590612ce1565b505080806115d19061256f565b9150506111ea565b507f0cc4f008775f50ff94480b827bff217f10b555c53b83873f4cd0918a9c241ae4838360405161160b929190612cf1565b60405180910390a1505050565b6116228282610661565b1561163f5760405162461bcd60e51b81526004016103c590612d4b565b60cc60009054906101000a90046001600160a01b03166001600160a01b031663a5a3f6c86040518163ffffffff1660e01b815260040160206040518083038186803b15801561168d57600080fd5b505afa1580156116a1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116c59190612498565b6001600160a01b0316636b074a07336040518263ffffffff1660e01b81526004016116f091906123c4565b60206040518083038186803b15801561170857600080fd5b505afa15801561171c573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061174091906124cc565b61175c5760405162461bcd60e51b81526004016103c5906125cf565b6001600160a01b038216600090815260cd6020908152604080832084845290915290819020805460ff19166001179055517f672144042732f7b1cdbf0772464ae545aedd7f41d38b8487dafd9085496a5d51906117bc9084908490612cf1565b60405180910390a15050565b60995460ff166117ea5760405162461bcd60e51b81526004016103c590612d86565b6099805460ff191690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa335b60405161182491906123c4565b60405180910390a1565b60008054610100900460ff1615611875578160ff1660011480156118515750303b155b61186d5760405162461bcd60e51b81526004016103c590612de1565b506000919050565b60005460ff80841691161061189c5760405162461bcd60e51b81526004016103c590612de1565b506000805460ff191660ff92909216919091179055600190565b919050565b606780546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b600054610100900460ff16610d165760405162461bcd60e51b81526004016103c590612e39565b600054610100900460ff1661195b5760405162461bcd60e51b81526004016103c590612e39565b6110b68282611b30565b600054610100900460ff1661198c5760405162461bcd60e51b81526004016103c590612e39565b610aa08180519060200120611b71565b600054610100900460ff166119c35760405162461bcd60e51b81526004016103c590612e39565b610aa081611ba6565b6119d581610a4f565b6119f15760405162461bcd60e51b81526004016103c590612e7d565b6001600160a01b038116600090815260cb602052604090819020805460ff19169055517fcd265ebaf09df2871cc7bd4133404a235ba12eff2041bb89d9c714a2621c7c7e90611a419083906123c4565b60405180910390a150565b611a5581610a4f565b15611a725760405162461bcd60e51b81526004016103c590612ecb565b6001600160a01b038116600090815260cb602052604090819020805460ff19166001179055517f6719d08c1888103bea251a4ed56406bd0c3e69723c8a1686e017e7bbe159b6f890611a419083906123c4565b60995460ff1615611ae85760405162461bcd60e51b81526004016103c590612f02565b6099805460ff191660011790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a2586118173390565b600061079e611b2a611c17565b83611c53565b600054610100900460ff16611b575760405162461bcd60e51b81526004016103c590612e39565b815160209283012081519190920120600191909155600255565b60cf8190556040517fd5b7aa922fbc99b384e2da1530298f9f1f39cbaafe5584138c9a7031f594a34f90611a419083906123d8565b6001600160a01b038116611bcc5760405162461bcd60e51b81526004016103c590612f46565b60cc80546001600160a01b0319166001600160a01b0383161790556040517f7aed1d3e8155a07ccf395e44ea3109a0e2d6c9b29bbbe9f142d9790596f4dc8090611a4190839061241b565b6000611c4e7f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f611c4660015490565b600254611c86565b905090565b60008282604051602001611c68929190612f56565b60405160208183030381529060405280519060200120905092915050565b60008383834630604051602001610f75959493929190612f87565b60006001600160a01b03821661079e565b611cbb81611ca1565b8114610aa057600080fd5b803561079e81611cb2565b80611cbb565b803561079e81611cd1565b600080600060608486031215611cfa57611cfa600080fd5b6000611d068686611cc6565b9350506020611d1786828701611cd7565b9250506040611d2886828701611cc6565b9150509250925092565b634e487b7160e01b600052604160045260246000fd5b601f19601f83011681018181106001600160401b0382111715611d6d57611d6d611d32565b6040525050565b6000611d7f60405190565b90506118b68282611d48565b60006001600160401b03821115611da457611da4611d32565b5060209081020190565b60058110610aa057600080fd5b803561079e81611dae565b6000611dd9611dd484611d8b565b611d74565b83815290506020808201908402830185811115611df857611df8600080fd5b835b81811015611e1c5780611e0d8882611cd7565b84525060209283019201611dfa565b5050509392505050565b600082601f830112611e3a57611e3a600080fd5b8135611e4a848260208601611dc6565b949350505050565b600060408284031215611e6757611e67600080fd5b611e716040611d74565b90506000611e7f8484611dbb565b82525060208201356001600160401b03811115611e9e57611e9e600080fd5b611eaa84828501611e26565b60208301525092915050565b6000611ec4611dd484611d8b565b83815290506020808201908402830185811115611ee357611ee3600080fd5b835b81811015611e1c5780356001600160401b03811115611f0657611f06600080fd5b808601611f138982611e52565b8552505060209283019201611ee5565b600082601f830112611f3757611f37600080fd5b8135611e4a848260208601611eb6565b60008060408385031215611f5d57611f5d600080fd5b6000611f698585611cd7565b92505060208301356001600160401b03811115611f8857611f88600080fd5b611f9485828601611f23565b9150509250929050565b6000611fac611dd484611d8b565b83815290506020808201908402830185811115611fcb57611fcb600080fd5b835b81811015611e1c5780611fe08882611cd7565b84525060209283019201611fcd565b600082601f83011261200357612003600080fd5b8135611e4a848260208601611f9e565b60006020828403121561202857612028600080fd5b81356001600160401b0381111561204157612041600080fd5b611e4a84828501611fef565b6000806040838503121561206357612063600080fd5b600061206f8585611cc6565b9250506020611f9485828601611cd7565b8015155b82525050565b6020810161079e8284612080565b60006120a6611dd484611d8b565b838152905060208082019084028301858111156120c5576120c5600080fd5b835b81811015611e1c5780356001600160401b038111156120e8576120e8600080fd5b8086016120f58982611f23565b85525050602092830192016120c7565b600082601f83011261211957612119600080fd5b8135611e4a848260208601612098565b6000806040838503121561213f5761213f600080fd5b82356001600160401b0381111561215857612158600080fd5b61216485828601611fef565b92505060208301356001600160401b0381111561218357612183600080fd5b611f9485828601612105565b60006001600160401b038211156121a8576121a8611d32565b601f19601f83011660200192915050565b82818337506000910152565b60006121d3611dd48461218f565b9050828152602081018484840111156121ee576121ee600080fd5b6121f98482856121b9565b509392505050565b600082601f83011261221557612215600080fd5b8135611e4a8482602086016121c5565b600061079e82611ca1565b611cbb81612225565b803561079e81612230565b60008060008060008060c0878903121561226057612260600080fd5b600061226c8989611cc6565b965050602061227d89828a01611cc6565b95505060408701356001600160401b0381111561229c5761229c600080fd5b6122a889828a01612201565b94505060608701356001600160401b038111156122c7576122c7600080fd5b6122d389828a01612201565b93505060808701356001600160401b038111156122f2576122f2600080fd5b6122fe89828a01612201565b92505060a061230f89828a01612239565b9150509295509295509295565b60006020828403121561233157612331600080fd5b6000611e4a8484611cc6565b6000806000806080858703121561235657612356600080fd5b60006123628787611cc6565b945050602061237387828801611cd7565b935050604061238487828801611cc6565b92505060608501356001600160401b038111156123a3576123a3600080fd5b6123af87828801612201565b91505092959194509250565b61208481611ca1565b6020810161079e82846123bb565b80612084565b6020810161079e82846123d2565b6000602082840312156123fb576123fb600080fd5b6000611e4a8484611cd7565b600061079e82612225565b61208481612407565b6020810161079e8284612412565b603481526000602082017f50726f7669646572436f6e74726f6c6c65723a2063616c6c6572206973206e6f8152731d081d1a194818dd5c9c995b9d081dd85b1b195d60621b602082015291505b5060400190565b6020808252810161079e81612429565b805161079e81612230565b6000602082840312156124ad576124ad600080fd5b6000611e4a848461248d565b801515611cbb565b805161079e816124b9565b6000602082840312156124e1576124e1600080fd5b6000611e4a84846124c1565b602981526000602082017f526f75746572577261707065723a2063616c6c6572206973206e6f742074686581526810383937bb34b232b960b91b60208201529150612476565b6020808252810161079e816124ed565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b600060001982141561258357612583612559565b5060010190565b602881526000602082017f50726f7669646572436f6e74726f6c6c65723a206e6f6e6578697374656e7420815267383937bb34b232b960c11b60208201529150612476565b6020808252810161079e8161258a565b602b81526000602082017f50726f7669646572436f6e74726f6c6c65723a20696e76616c6964206163636f81526a0eadce8e640d8cadccee8d60ab1b60208201529150612476565b6020808252810161079e816125df565b602b81526000602082017f50726f7669646572436f6e74726f6c6c65723a20696e76616c6964207061796c81526a0dec2c8e640d8cadccee8d60ab1b60208201529150612476565b6020808252810161079e81612637565b603081526000602082017f50726f7669646572436f6e74726f6c6c65723a20696e636f6e736974656e742081526f0e0c2e4c2dacae8cae440d8cadccee8d60831b60208201529150612476565b6020808252810161079e8161268f565b60208082527f5061757365723a2063616c6c6572206973206e6f742074686520706175736572910190815260005b5060200190565b6020808252810161079e816126ec565b600060ff821661079e565b61208481612731565b6020810161079e828461273c565b60208082527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65729101908152600061271a565b6020808252810161079e81612753565b602c81526000602082017f50726f7669646572436f6e74726f6c6c65723a2063616c6c657220696e206e6f81526b1d081d1a19481dd85b1b195d60a21b60208201529150612476565b6020808252810161079e81612795565b602781526000602082017f50726f7669646572436f6e74726f6c6c65723a206e6f6e6578697374656e74208152661858d8dbdd5b9d60ca1b60208201529150612476565b6020808252810161079e816127ee565b602181526000602082017f50726f7669646572436f6e74726f6c6c65723a2077616c6c65742065786973748152607360f81b60208201529150612476565b6020808252810161079e81612842565b60005b838110156128ab578181015183820152602001612893565b838111156103da5750506000910152565b60006128c6825190565b8084526020840193506128dd818560208601612890565b601f01601f19169290920192915050565b606081016128fc82866123bb565b61290960208301856123d2565b818103604083015261291b81846128bc565b95945050505050565b602581526000602082017f50726f7669646572436f6e74726f6c6c65723a20696e76616c6964207369676e815264617475726560d81b60208201529150612476565b6020808252810161079e81612924565b602681526000602082017f50726f7669646572436f6e74726f6c6c65723a206e6f6e6578697374656e74208152651dd85b1b195d60d21b60208201529150612476565b6020808252810161079e81612976565b608081016129d782876123d2565b6129e460208301866123bb565b6129f160408301856123d2565b61291b60608301846123bb565b602681526000602082017f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206181526564647265737360d01b60208201529150612476565b6020808252810161079e816129fe565b60808101612a5f82876123bb565b612a6c60208301866123d2565b6129f160408301856123bb565b602281526000602082017f50726f7669646572436f6e74726f6c6c65723a20656d707479207061796c6f61815261647360f01b60208201529150612476565b6020808252810161079e81612a79565b634e487b7160e01b600052602160045260246000fd5b603c8152600060208201600080516020612fd483398151915281527f6e7473206c656e67746820666f72206275696c64696e672074696d650000000060208201529150612476565b6020808252810161079e81612ade565b60608101612b4482866123bb565b612b5160208301856123d2565b611e4a60408301846123d2565b60388152600060208201600080516020612fd483398151915281527f6e7473206c656e67746820666f722062616e647769647468000000000000000060208201529150612476565b6020808252810161079e81612b5e565b60398152600060208201600080516020612fd483398151915281527f6e7473206c656e67746820666f722061722073746f726167650000000000000060208201529150612476565b6020808252810161079e81612bb6565b603b8152600060208201600080516020612fd483398151915281527f6e7473206c656e67746820666f7220697066732073746f72616765000000000060208201529150612476565b6020808252810161079e81612c0e565b60808101612c7482876123bb565b612c8160208301866123d2565b612c8e60408301856123d2565b61291b60608301846123d2565b602981526000602082017f50726f7669646572436f6e74726f6c6c65723a20756e6b6e6f776e207265736f81526875726365207479706560b81b60208201529150612476565b6020808252810161079e81612c9b565b60408101612cff82856123bb565b610f5360208301846123d2565b602281526000602082017f50726f7669646572436f6e74726f6c6c65723a206163636f756e742065786973815261747360f01b60208201529150612476565b6020808252810161079e81612d0c565b601481526000602082017314185d5cd8589b194e881b9bdd081c185d5cd95960621b8152915061271a565b6020808252810161079e81612d5b565b602e81526000602082017f496e697469616c697a61626c653a20636f6e747261637420697320616c72656181526d191e481a5b9a5d1a585b1a5e995960921b60208201529150612476565b6020808252810161079e81612d96565b602b81526000602082017f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206981526a6e697469616c697a696e6760a81b60208201529150612476565b6020808252810161079e81612df1565b601d81526000602082017f5061757365723a206163636f756e74206973206e6f74207061757365720000008152915061271a565b6020808252810161079e81612e49565b602181526000602082017f5061757365723a206163636f756e7420697320616c72656164792070617573658152603960f91b60208201529150612476565b6020808252810161079e81612e8d565b601081526000602082016f14185d5cd8589b194e881c185d5cd95960821b8152915061271a565b6020808252810161079e81612edb565b601b81526000602082017f526f75746572577261707065723a207a65726f206164647265737300000000008152915061271a565b6020808252810161079e81612f12565b61190160f01b81526002016000612f6d82856123d2565b602082019150612f7d82846123d2565b5060200192915050565b60a08101612f9582886123d2565b612fa260208301876123d2565b612faf60408301866123d2565b612fbc60608301856123d2565b612fc960808301846123bb565b969550505050505056fe50726f7669646572436f6e74726f6c6c65723a20696e76616c696420616d6f75a2646970667358221220ff1cca3a60a8d890df35fa9c8670f3ff6692ec57b25dbed5d3de2da5de11bfa764736f6c63430008090033";

export class ProviderController__factory extends ContractFactory {
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
  ): Promise<ProviderController> {
    return super.deploy(overrides || {}) as Promise<ProviderController>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): ProviderController {
    return super.attach(address) as ProviderController;
  }
  connect(signer: Signer): ProviderController__factory {
    return super.connect(signer) as ProviderController__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ProviderControllerInterface {
    return new utils.Interface(_abi) as ProviderControllerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ProviderController {
    return new Contract(address, _abi, signerOrProvider) as ProviderController;
  }
}
