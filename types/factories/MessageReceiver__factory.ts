/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  MessageReceiver,
  MessageReceiverInterface,
} from "../MessageReceiver";

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
        name: "executor",
        type: "address",
      },
    ],
    name: "ExecutorUpdated",
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
        internalType: "uint64",
        name: "srcChainId",
        type: "uint64",
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
    name: "MessageExecuted",
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
        internalType: "uint64",
        name: "srcChainId",
        type: "uint64",
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
      {
        indexed: false,
        internalType: "bytes",
        name: "error",
        type: "bytes",
      },
    ],
    name: "MessageFailed",
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
        internalType: "contract IERC20Upgradeable",
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
        internalType: "uint64",
        name: "srcChainId",
        type: "uint64",
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
    name: "MessageWithTransferExecuted",
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
        internalType: "contract IERC20Upgradeable",
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
        internalType: "uint64",
        name: "srcChainId",
        type: "uint64",
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
      {
        indexed: false,
        internalType: "bytes",
        name: "error",
        type: "bytes",
      },
    ],
    name: "MessageWithTransferFailed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "_sender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "_token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint64",
        name: "_srcChainId",
        type: "uint64",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "_message",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "address",
        name: "executor",
        type: "address",
      },
    ],
    name: "MessageWithTransferFallback",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "NativeWithdrawal",
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
        internalType: "contract IERC20Upgradeable",
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Withdrawal",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "uint64",
        name: "srcChainId",
        type: "uint64",
      },
      {
        internalType: "bytes",
        name: "message",
        type: "bytes",
      },
      {
        internalType: "address",
        name: "_executor",
        type: "address",
      },
    ],
    name: "executeMessage",
    outputs: [
      {
        internalType: "enum MessageReceiver.ExecutionStatus",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "contract IERC20Upgradeable",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint64",
        name: "srcChainId",
        type: "uint64",
      },
      {
        internalType: "bytes",
        name: "message",
        type: "bytes",
      },
      {
        internalType: "address",
        name: "_executor",
        type: "address",
      },
    ],
    name: "executeMessageWithTransfer",
    outputs: [
      {
        internalType: "enum MessageReceiver.ExecutionStatus",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "uint64",
        name: "_srcChainId",
        type: "uint64",
      },
      {
        internalType: "bytes",
        name: "_message",
        type: "bytes",
      },
      {
        internalType: "address",
        name: "executor",
        type: "address",
      },
    ],
    name: "executeMessageWithTransferFallback",
    outputs: [
      {
        internalType: "enum MessageReceiver.ExecutionStatus",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "executor",
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
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "_messageBus",
        type: "address",
      },
      {
        internalType: "address",
        name: "_executor",
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
    name: "messageBus",
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
        internalType: "contract IERC20Upgradeable",
        name: "token",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "ownerWithdrawERC20",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address payable",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "ownerWithdrawNative",
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
        name: "_executor",
        type: "address",
      },
    ],
    name: "setExecutor",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "messageBus",
        type: "address",
      },
    ],
    name: "setMessageBus",
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
  "0x60806040523480156200001157600080fd5b5060006200002060016200008e565b9050801562000039576000805461ff0019166101001790555b801562000087576000805461ff00191690556040517f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb3847402498906200007e9060019062000168565b60405180910390a15b50620001cb565b60008054610100900460ff1615620000f7578160ff166001148015620000c75750620000c5306200013b60201b62000a891760201c565b155b620000ef5760405162461bcd60e51b8152600401620000e69062000178565b60405180910390fd5b506000919050565b60005460ff808416911610620001215760405162461bcd60e51b8152600401620000e69062000178565b506000805460ff191660ff92909216919091179055600190565b6001600160a01b03163b151590565b600060ff82165b92915050565b62000162816200014a565b82525050565b6020810162000151828462000157565b602080825281016200015181602e81527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160208201526d191e481a5b9a5d1a585b1a5e995960921b604082015260600190565b611db780620001db6000396000f3fe6080604052600436106100e85760003560e01c806393563a951161008a578063c34c08e511610059578063c34c08e514610247578063f2fde38b14610267578063f887ea4014610287578063f8c8765e146102ba57600080fd5b806393563a95146101c75780639c649fdf146101e7578063a1a227fa146101fa578063bb0248aa1461021a57600080fd5b8063699256f4116100c6578063699256f414610158578063715018a6146101785780637cd2bffc1461018d5780638da5cb5b146101a057600080fd5b80631c3c0ea8146100ed578063547cad121461010f5780635ab7afc61461012f575b600080fd5b3480156100f957600080fd5b5061010d610108366004610fb4565b6102da565b005b34801561011b57600080fd5b5061010d61012a366004610fb4565b610319565b61014261013d3660046110f7565b61034c565b60405161014f91906111e6565b60405180910390f35b34801561016457600080fd5b5061010d6101733660046111f4565b6103c7565b34801561018457600080fd5b5061010d610475565b61014261019b366004611250565b6104ab565b3480156101ac57600080fd5b506033546001600160a01b03165b60405161014f9190611292565b3480156101d357600080fd5b5061010d6101e23660046112a0565b6106df565b6101426101f53660046112f0565b610750565b34801561020657600080fd5b506065546101ba906001600160a01b031681565b34801561022657600080fd5b5061023a6102353660046113dc565b610926565b60405161014f9190611450565b34801561025357600080fd5b506066546101ba906001600160a01b031681565b34801561027357600080fd5b5061010d610282366004610fb4565b610996565b34801561029357600080fd5b506000546102ad906201000090046001600160a01b031681565b60405161014f919061148e565b3480156102c657600080fd5b5061010d6102d536600461149c565b6109ef565b6033546001600160a01b0316331461030d5760405162461bcd60e51b815260040161030490611529565b60405180910390fd5b61031681610a98565b50565b6033546001600160a01b031633146103435760405162461bcd60e51b815260040161030490611529565b61031681610aee565b6065546000906001600160a01b031633146103795760405162461bcd60e51b815260040161030490611583565b7fa0b35e480a2add0100f918632470cc8260628f0e8e277690f77da458ff8f4ab78787878787876040516103b296959493929190611605565b60405180910390a15060019695505050505050565b6033546001600160a01b031633146103f15760405162461bcd60e51b815260040161030490611529565b6040516000906001600160a01b0384169083156108fc0290849084818181858888f193505050509050806104375760405162461bcd60e51b8152600401610304906116a7565b7f2c876ecb97b3c6854f2488d373403f903eacb800e51c159a5c0c7a9c857e482783836040516104689291906116b7565b60405180910390a1505050565b6033546001600160a01b0316331461049f5760405162461bcd60e51b815260040161030490611529565b6104a96000610b3a565b565b6065546000906001600160a01b031633146104d85760405162461bcd60e51b815260040161030490611583565b6066546001600160a01b038381169116146105055760405162461bcd60e51b815260040161030490611710565b60008060029054906101000a90046001600160a01b03166001600160a01b031663ed1f63d36040518163ffffffff1660e01b815260040160206040518083038186803b15801561055457600080fd5b505afa158015610568573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061058c919061172b565b90506105a26001600160a01b0388168288610b8c565b604051631dfbd4cf60e21b81526001600160a01b038216906377ef533c906105d2908a908a90899060040161174c565b600060405180830381600087803b1580156105ec57600080fd5b505af19250505080156105fd575060015b61067a573d80801561062b576040519150601f19603f3d011682016040523d82523d6000602084013e610630565b606091505b507f3538e4460f392ef0ea71ed8ac3c3ddd96cdb41831e212d8fe3a145e1956e85d58989898989898760405161066c9796959493929190611782565b60405180910390a1506106bc565b7fa2ea2fb459fe24fd2d3083215ee27cdee6cd1773cd34d407ce9a5f910409ccfe8888888888886040516106b3969594939291906117f7565b60405180910390a15b6106d16001600160a01b038816826000610b8c565b506001979650505050505050565b6033546001600160a01b031633146107095760405162461bcd60e51b815260040161030490611529565b61071d6001600160a01b0384168383610c8b565b7f2717ead6b9200dd235aad468c9809ea400fe33ac69b5bfaa6d3e90fc922b639883838360405161046893929190611812565b6066546000906001600160a01b038381169116146107805760405162461bcd60e51b815260040161030490611710565b60008060029054906101000a90046001600160a01b03166001600160a01b031663ed1f63d36040518163ffffffff1660e01b815260040160206040518083038186803b1580156107cf57600080fd5b505afa1580156107e3573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610807919061172b565b604051633133c1a760e11b81529091506001600160a01b03821690636267834e9061083690879060040161183a565b600060405180830381600087803b15801561085057600080fd5b505af1925050508015610861575060015b6108da573d80801561088f576040519150601f19603f3d011682016040523d82523d6000602084013e610894565b606091505b507f3f88ff8298d6747e2153a95db6eeb21dc4aff796440fbf0cc1fdd9b92fb0932e87878787856040516108cc95949392919061184b565b60405180910390a150610918565b7f97d12f83b2e53c7bb615e1af268f1d2204437719613f9bb4ed4e34de92fa9e698686868660405161090f9493929190611899565b60405180910390a15b60019150505b949350505050565b600060016109376020870187610fb4565b6109476040880160208901610fb4565b6109576060890160408a016118d5565b8860600135888888604051602001610976989796959493929190611992565b604051602081830303815290604052805190602001209050949350505050565b6033546001600160a01b031633146109c05760405162461bcd60e51b815260040161030490611529565b6001600160a01b0381166109e65760405162461bcd60e51b815260040161030490611a50565b61031681610b3a565b60006109fb6001610caa565b90508015610a13576000805461ff0019166101001790555b610a1c85610b3a565b610a2584610aee565b610a2e83610a98565b610a3782610d37565b8015610a82576000805461ff00191690556040517f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb384740249890610a7990600190611a74565b60405180910390a15b5050505050565b6001600160a01b03163b151590565b606680546001600160a01b0319166001600160a01b0383161790556040517fd9436ef9ce00ffeabc5da2489701502d3bd1a5ed7b254a1981fc5ffef9828e1190610ae3908390611292565b60405180910390a150565b606580546001600160a01b0319166001600160a01b0383169081179091556040517f3f8223bcd8b3b875473e9f9e14e1ad075451a2b5ffd31591655da9a01516bf5e91610ae391611292565b603380546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b801580610c145750604051636eb1769f60e11b81526001600160a01b0384169063dd62ed3e90610bc29030908690600401611a82565b60206040518083038186803b158015610bda57600080fd5b505afa158015610bee573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c129190611aa8565b155b610c305760405162461bcd60e51b815260040161030490611b1c565b610c868363095ea7b360e01b8484604051602401610c4f929190611b2c565b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b031990931692909217909152610d67565b505050565b610c868363a9059cbb60e01b8484604051602401610c4f929190611b2c565b60008054610100900460ff1615610cf1578160ff166001148015610ccd5750303b155b610ce95760405162461bcd60e51b815260040161030490611b85565b506000919050565b60005460ff808416911610610d185760405162461bcd60e51b815260040161030490611b85565b506000805460ff191660ff92909216919091179055600190565b919050565b600054610100900460ff16610d5e5760405162461bcd60e51b815260040161030490611bdd565b61031681610df6565b6000610dbc826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b0316610e6e9092919063ffffffff16565b805190915015610c865780806020019051810190610dda9190611c00565b610c865760405162461bcd60e51b815260040161030490611c68565b6001600160a01b038116610e1c5760405162461bcd60e51b815260040161030490611cac565b6000805462010000600160b01b031916620100006001600160a01b038416021790556040517f7aed1d3e8155a07ccf395e44ea3109a0e2d6c9b29bbbe9f142d9790596f4dc8090610ae390839061148e565b6060610e7d8484600085610e87565b90505b9392505050565b606082471015610ea95760405162461bcd60e51b815260040161030490611cff565b6001600160a01b0385163b610ed05760405162461bcd60e51b815260040161030490611d43565b600080866001600160a01b03168587604051610eec9190611d75565b60006040518083038185875af1925050503d8060008114610f29576040519150601f19603f3d011682016040523d82523d6000602084013e610f2e565b606091505b5091509150610f3e828286610f49565b979650505050505050565b60608315610f58575081610e80565b825115610f685782518084602001fd5b8160405162461bcd60e51b8152600401610304919061183a565b60006001600160a01b0382165b92915050565b610f9e81610f82565b811461031657600080fd5b8035610f8f81610f95565b600060208284031215610fc957610fc9600080fd5b600061091e8484610fa9565b80610f9e565b8035610f8f81610fd5565b67ffffffffffffffff8116610f9e565b8035610f8f81610fe6565b634e487b7160e01b600052604160045260246000fd5b601f19601f830116810181811067ffffffffffffffff8211171561103d5761103d611001565b6040525050565b600061104f60405190565b9050610d328282611017565b600067ffffffffffffffff82111561107557611075611001565b601f19601f83011660200192915050565b82818337506000910152565b60006110a56110a08461105b565b611044565b9050828152602081018484840111156110c0576110c0600080fd5b6110cb848285611086565b509392505050565b600082601f8301126110e7576110e7600080fd5b813561091e848260208601611092565b60008060008060008060c0878903121561111357611113600080fd5b600061111f8989610fa9565b965050602061113089828a01610fa9565b955050604061114189828a01610fdb565b945050606061115289828a01610ff6565b935050608087013567ffffffffffffffff81111561117257611172600080fd5b61117e89828a016110d3565b92505060a061118f89828a01610fa9565b9150509295509295509295565b634e487b7160e01b600052602160045260246000fd5b600381106103165761031661119c565b80610d32816111b2565b6000610f8f826111c2565b6111e0816111cc565b82525050565b60208101610f8f82846111d7565b6000806040838503121561120a5761120a600080fd5b60006112168585610fa9565b925050602061122785828601610fdb565b9150509250929050565b6000610f8f82610f82565b610f9e81611231565b8035610f8f8161123c565b60008060008060008060c0878903121561126c5761126c600080fd5b60006112788989610fa9565b965050602061113089828a01611245565b6111e081610f82565b60208101610f8f8284611289565b6000806000606084860312156112b8576112b8600080fd5b60006112c48686611245565b93505060206112d586828701610fa9565b92505060406112e686828701610fdb565b9150509250925092565b6000806000806080858703121561130957611309600080fd5b60006113158787610fa9565b945050602061132687828801610ff6565b935050604085013567ffffffffffffffff81111561134657611346600080fd5b611352878288016110d3565b925050606061136387828801610fa9565b91505092959194509250565b60006080828403121561138457611384600080fd5b50919050565b60008083601f84011261139f5761139f600080fd5b50813567ffffffffffffffff8111156113ba576113ba600080fd5b6020830191508360018202830111156113d5576113d5600080fd5b9250929050565b60008060008060c085870312156113f5576113f5600080fd5b6000611401878761136f565b945050608061141287828801610ff6565b93505060a085013567ffffffffffffffff81111561143257611432600080fd5b61143e8782880161138a565b95989497509550505050565b806111e0565b60208101610f8f828461144a565b60006001600160a01b038216610f8f565b6000610f8f8261145e565b6000610f8f8261146f565b6111e08161147a565b60208101610f8f8284611485565b600080600080608085870312156114b5576114b5600080fd5b60006114c18787610fa9565b94505060206114d287828801610fa9565b93505060406114e387828801610fa9565b925050606061136387828801611245565b60208082527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572910190815260005b5060200190565b60208082528101610f8f816114f4565b602a81526000602082017f4d65737361676552656365697665723a2063616c6c6572206973206e6f74206d8152696573736167652062757360b01b602082015291505b5060400190565b60208082528101610f8f81611539565b67ffffffffffffffff81166111e0565b60005b838110156115be5781810151838201526020016115a6565b838111156115cd576000848401525b50505050565b60006115dd825190565b8084526020840193506115f48185602086016115a3565b601f01601f19169290920192915050565b60c081016116138289611289565b6116206020830188611289565b61162d604083018761144a565b61163a6060830186611593565b818103608083015261164c81856115d3565b9050610f3e60a0830184611289565b602f81526000602082017f4f776e6572576974686472617761626c653a207769746864726177206e61746981526e1d99481d1bdad95b8819985a5b1959608a1b6020820152915061157c565b60208082528101610f8f8161165b565b604081016116c58285611485565b610e80602083018461144a565b602181526000602082017f4d65737361676552656365697665723a20696e76616c6964206578656375746f8152603960f91b6020820152915061157c565b60208082528101610f8f816116d2565b8051610f8f8161123c565b60006020828403121561174057611740600080fd5b600061091e8484611720565b6060810161175a8286611485565b611767602083018561144a565b818103604083015261177981846115d3565b95945050505050565b60e08101611790828a611289565b61179d6020830189611485565b6117aa604083018861144a565b6117b76060830187611593565b81810360808301526117c981866115d3565b90506117d860a0830185611289565b81810360c08301526117ea81846115d3565b9998505050505050505050565b60c081016118058289611289565b6116206020830188611485565b606081016118208286611485565b61182d6020830185611289565b61091e604083018461144a565b60208082528101610e8081846115d3565b60a081016118598288611289565b6118666020830187611593565b818103604083015261187881866115d3565b90506118876060830185611289565b8181036080830152610f3e81846115d3565b608081016118a78287611289565b6118b46020830186611593565b81810360408301526118c681856115d3565b90506117796060830184611289565b6000602082840312156118ea576118ea600080fd5b600061091e8484610ff6565b600281106103165761031661119c565b80610d32816118f6565b6000610f8f82611906565b6000610f8f8260f81b90565b6111e061193382611910565b61191b565b6000610f8f8260601b90565b6000610f8f82611938565b6111e061195b82610f82565b611944565b6000610f8f8260c01b90565b6111e067ffffffffffffffff8216611960565b600061198c838584611086565b50500190565b600061199e828b611927565b6001820191506119ae828a61194f565b6014820191506119be828961194f565b6014820191506119ce828861196c565b6008820191506119de828761144a565b6020820191506119ee828661196c565b6008820191506119ff82848661197f565b9a9950505050505050505050565b602681526000602082017f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206181526564647265737360d01b6020820152915061157c565b60208082528101610f8f81611a0d565b600060ff8216610f8f565b6111e081611a60565b60208101610f8f8284611a6b565b60408101611a908285611289565b610e806020830184611289565b8051610f8f81610fd5565b600060208284031215611abd57611abd600080fd5b600061091e8484611a9d565b603681526000602082017f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f81527520746f206e6f6e2d7a65726f20616c6c6f77616e636560501b6020820152915061157c565b60208082528101610f8f81611ac9565b604081016116c58285611289565b602e81526000602082017f496e697469616c697a61626c653a20636f6e747261637420697320616c72656181526d191e481a5b9a5d1a585b1a5e995960921b6020820152915061157c565b60208082528101610f8f81611b3a565b602b81526000602082017f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206981526a6e697469616c697a696e6760a81b6020820152915061157c565b60208082528101610f8f81611b95565b801515610f9e565b8051610f8f81611bed565b600060208284031215611c1557611c15600080fd5b600061091e8484611bf5565b602a81526000602082017f5361666545524332303a204552433230206f7065726174696f6e20646964206e8152691bdd081cdd58d8d9595960b21b6020820152915061157c565b60208082528101610f8f81611c21565b601b81526000602082017f526f75746572577261707065723a207a65726f2061646472657373000000000081529150611522565b60208082528101610f8f81611c78565b602681526000602082017f416464726573733a20696e73756666696369656e742062616c616e636520666f8152651c8818d85b1b60d21b6020820152915061157c565b60208082528101610f8f81611cbc565b601d81526000602082017f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000081529150611522565b60208082528101610f8f81611d0f565b6000611d5d825190565b611d6b8185602086016115a3565b9290920192915050565b6000610e808284611d5356fea26469706673582212206432b642b1984c1156b61c2f9e9fda8a9efcaaf3c46368fe11edeb7fc9316a5d64736f6c63430008090033";

export class MessageReceiver__factory extends ContractFactory {
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
  ): Promise<MessageReceiver> {
    return super.deploy(overrides || {}) as Promise<MessageReceiver>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): MessageReceiver {
    return super.attach(address) as MessageReceiver;
  }
  connect(signer: Signer): MessageReceiver__factory {
    return super.connect(signer) as MessageReceiver__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MessageReceiverInterface {
    return new utils.Interface(_abi) as MessageReceiverInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MessageReceiver {
    return new Contract(address, _abi, signerOrProvider) as MessageReceiver;
  }
}
