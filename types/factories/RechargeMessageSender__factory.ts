/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  RechargeMessageSender,
  RechargeMessageSenderInterface,
} from "../RechargeMessageSender";

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
        internalType: "uint64",
        name: "dstChainId",
        type: "uint64",
      },
      {
        indexed: false,
        internalType: "uint64",
        name: "nonce",
        type: "uint64",
      },
      {
        indexed: false,
        internalType: "uint32",
        name: "maxSlippage",
        type: "uint32",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "message",
        type: "bytes",
      },
    ],
    name: "MessageWithTransferSent",
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
        name: "recharge",
        type: "address",
      },
    ],
    name: "SrcChainRechargeUpdated",
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
    name: "executeMessageWithTransferRefund",
    outputs: [
      {
        internalType: "enum RechargeMessageSender.ExecutionStatus",
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
        name: "_receiver",
        type: "address",
      },
      {
        internalType: "uint64",
        name: "_dstChainId",
        type: "uint64",
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
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
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
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint64",
        name: "nonce",
        type: "uint64",
      },
      {
        internalType: "uint32",
        name: "maxSlippage",
        type: "uint32",
      },
      {
        internalType: "bytes",
        name: "message",
        type: "bytes",
      },
    ],
    name: "sendMessageWithTransfer",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "dstChainId",
        type: "uint64",
      },
    ],
    name: "setDstChainId",
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
        name: "_receiver",
        type: "address",
      },
    ],
    name: "setReceiver",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_recharge",
        type: "address",
      },
    ],
    name: "setSrcChainRecharge",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "srcChainRecharge",
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
  "0x60806040523480156200001157600080fd5b5060006200002060016200008e565b9050801562000039576000805461ff0019166101001790555b801562000087576000805461ff00191690556040517f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb3847402498906200007e9060019062000168565b60405180910390a15b50620001cb565b60008054610100900460ff1615620000f7578160ff166001148015620000c75750620000c5306200013b60201b620008c01760201c565b155b620000ef5760405162461bcd60e51b8152600401620000e69062000178565b60405180910390fd5b506000919050565b60005460ff808416911610620001215760405162461bcd60e51b8152600401620000e69062000178565b506000805460ff191660ff92909216919091179055600190565b6001600160a01b03163b151590565b600060ff82165b92915050565b62000162816200014a565b82525050565b6020810162000151828462000157565b602080825281016200015181602e81527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160208201526d191e481a5b9a5d1a585b1a5e995960921b604082015260600190565b6125c080620001db6000396000f3fe6080604052600436106101095760003560e01c80638da5cb5b11610095578063bb0248aa11610064578063bb0248aa146102da578063c66f16ff146102fa578063d7c8cb241461030d578063f2fde38b1461032d578063f7260d3e1461034d57600080fd5b80638da5cb5b1461025c57806393563a951461027a5780639a89c71c1461029a578063a1a227fa146102ba57600080fd5b80635335dca2116100dc5780635335dca2146101ba578063547cad12146101e7578063699256f414610207578063715018a614610227578063718da7ee1461023c57600080fd5b80630bcb49821461010e57806330c593f7146101375780633fe3f1cf1461016b57806342c7ad501461018d575b600080fd5b61012161011c366004611688565b61036d565b60405161012e9190611755565b60405180910390f35b34801561014357600080fd5b5060675461015e90600160a01b90046001600160401b031681565b60405161012e9190611772565b34801561017757600080fd5b5061018b61018636600461179a565b6103ef565b005b34801561019957600080fd5b506065546101ad906001600160a01b031681565b60405161012e9190611807565b3480156101c657600080fd5b506101da6101d5366004611909565b610489565b60405161012e9190611949565b3480156101f357600080fd5b5061018b610202366004611957565b610510565b34801561021357600080fd5b5061018b610222366004611978565b610546565b34801561023357600080fd5b5061018b6105f4565b34801561024857600080fd5b5061018b610257366004611957565b61062a565b34801561026857600080fd5b506033546001600160a01b03166101ad565b34801561028657600080fd5b5061018b6102953660046119d4565b61065d565b3480156102a657600080fd5b5061018b6102b5366004611957565b6106ce565b3480156102c657600080fd5b506066546101ad906001600160a01b031681565b3480156102e657600080fd5b506101da6102f5366004611a3f565b610701565b61018b610308366004611ac3565b610772565b34801561031957600080fd5b5061018b610328366004611b48565b610834565b34801561033957600080fd5b5061018b610348366004611957565b610867565b34801561035957600080fd5b506067546101ad906001600160a01b031681565b6066546000906001600160a01b031633146103a35760405162461bcd60e51b815260040161039a90611bb9565b60405180910390fd5b7f9afeef02b2dc7c87e4d0fe67945dedf1c4ee5bcf5cdf26f94fb1837859816f3386868686866040516103da959493929190611bf2565b60405180910390a15060015b95945050505050565b60006103fb60016108cf565b90508015610413576000805461ff0019166101001790555b61041c8561095c565b610425846109ae565b61042e83610a05565b61043782610a50565b8015610482576000805461ff00191690556040517f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989061047990600190611c56565b60405180910390a15b5050505050565b60665460405163299aee5160e11b81526000916001600160a01b031690635335dca2906104ba908590600401611cbe565b60206040518083038186803b1580156104d257600080fd5b505afa1580156104e6573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061050a9190611cda565b92915050565b6033546001600160a01b0316331461053a5760405162461bcd60e51b815260040161039a90611d30565b610543816109ae565b50565b6033546001600160a01b031633146105705760405162461bcd60e51b815260040161039a90611d30565b6040516000906001600160a01b0384169083156108fc0290849084818181858888f193505050509050806105b65760405162461bcd60e51b815260040161039a90611d8c565b7f2c876ecb97b3c6854f2488d373403f903eacb800e51c159a5c0c7a9c857e482783836040516105e7929190611db0565b60405180910390a1505050565b6033546001600160a01b0316331461061e5760405162461bcd60e51b815260040161039a90611d30565b610628600061095c565b565b6033546001600160a01b031633146106545760405162461bcd60e51b815260040161039a90611d30565b61054381610a05565b6033546001600160a01b031633146106875760405162461bcd60e51b815260040161039a90611d30565b61069b6001600160a01b0384168383610aa5565b7f2717ead6b9200dd235aad468c9809ea400fe33ac69b5bfaa6d3e90fc922b63988383836040516105e793929190611dcb565b6033546001600160a01b031633146106f85760405162461bcd60e51b815260040161039a90611d30565b61054381610b00565b600060016107126020870187611957565b6107226040880160208901611957565b6107326060890160408a01611b48565b8860600135888888604051602001610751989796959493929190611e8e565b6040516020818303038152906040528051906020012090505b949350505050565b6065546001600160a01b0316331461079c5760405162461bcd60e51b815260040161039a90611f4e565b6067546066546107d8916001600160a01b038082169289928992600160a01b9091046001600160401b0316918991899189916001911634610b4b565b506067546040517f809e486d6b48a6fe847b52ec27f1b5e172027add7c9bb8f158ac00cacd3888eb916104799130916001600160a01b038116918a918a914691600160a01b90046001600160401b0316908b908b908b90611f6a565b6033546001600160a01b0316331461085e5760405162461bcd60e51b815260040161039a90611d30565b61054381610a50565b6033546001600160a01b031633146108915760405162461bcd60e51b815260040161039a90611d30565b6001600160a01b0381166108b75760405162461bcd60e51b815260040161039a90612039565b6105438161095c565b6001600160a01b03163b151590565b60008054610100900460ff1615610916578160ff1660011480156108f25750303b155b61090e5760405162461bcd60e51b815260040161039a90612094565b506000919050565b60005460ff80841691161061093d5760405162461bcd60e51b815260040161039a90612094565b506000805460ff191660ff92909216919091179055600190565b919050565b603380546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b606680546001600160a01b0319166001600160a01b0383169081179091556040517f3f8223bcd8b3b875473e9f9e14e1ad075451a2b5ffd31591655da9a01516bf5e916109fa91611807565b60405180910390a150565b606780546001600160a01b0319166001600160a01b0383161790556040517f75fd3aa5d9b6e2a8a9d8894008c9263200713f4b1fa9113665e09ceac0027746906109fa908390611807565b6067805467ffffffffffffffff60a01b1916600160a01b6001600160401b038416021790556040517fb21f4918f3e7b110065f3bf18a09b38074a4553144258ccfc30b57a76211e929906109fa908390611772565b610afb8363a9059cbb60e01b8484604051602401610ac49291906120a4565b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b031990931692909217909152610c33565b505050565b606580546001600160a01b0319166001600160a01b0383161790556040517faa474df0dfcc209d82b435095ee02f41d7d42a8b4f5231c3552969b587c8b679906109fa908390611807565b60006001846006811115610b6157610b6161170b565b1415610b7f57610b788b8b8b8b8b8b8b8a8a610cc2565b9050610c25565b6002846006811115610b9357610b9361170b565b1480610bb057506004846006811115610bae57610bae61170b565b145b15610bc657610b78848c8c8c8c8c8b8a8a610e62565b6003846006811115610bda57610bda61170b565b1480610bf757506005846006811115610bf557610bf561170b565b145b15610c0d57610b78848c8c8c8c8c8b8a8a6110fa565b60405162461bcd60e51b815260040161039a906120e6565b9a9950505050505050505050565b6000610c88826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b031661136d9092919063ffffffff16565b805190915015610afb5780806020019051810190610ca69190612109565b610afb5760405162461bcd60e51b815260040161039a90612171565b600080836001600160a01b03166382980dc46040518163ffffffff1660e01b815260040160206040518083038186803b158015610cfe57600080fd5b505afa158015610d12573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d36919061218c565b9050610d4c6001600160a01b038b16828b611386565b60405163a5977fbb60e01b81526001600160a01b0382169063a5977fbb90610d82908e908e908e908e908e908e906004016121ad565b600060405180830381600087803b158015610d9c57600080fd5b505af1158015610db0573d6000803e3d6000fd5b505050506000308c8c8c8c8c46604051602001610dd397969594939291906121fc565b604051602081830303815290604052805190602001209050846001600160a01b0316634289fbb3858e8c86868c6040518763ffffffff1660e01b8152600401610e20959493929190612295565b6000604051808303818588803b158015610e3957600080fd5b505af1158015610e4d573d6000803e3d6000fd5b50939f9e505050505050505050505050505050565b60008060028b6006811115610e7957610e7961170b565b1415610ef757836001600160a01b031663d8257d176040518163ffffffff1660e01b815260040160206040518083038186803b158015610eb857600080fd5b505afa158015610ecc573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ef0919061218c565b9050610f6b565b836001600160a01b031663c66a9c5a6040518163ffffffff1660e01b815260040160206040518083038186803b158015610f3057600080fd5b505afa158015610f44573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f68919061218c565b90505b610f7f6001600160a01b038a16828a611386565b600060028c6006811115610f9557610f9561170b565b141561103b57816001600160a01b031663234636248b8b8b8f8c6040518663ffffffff1660e01b8152600401610fcf9594939291906122dc565b600060405180830381600087803b158015610fe957600080fd5b505af1158015610ffd573d6000803e3d6000fd5b50505050308a8a8a8e8b4660405160200161101e979695949392919061231e565b6040516020818303038152906040528051906020012090506110c4565b816001600160a01b031663234636248b8b8b8f8c6040518663ffffffff1660e01b815260040161106f9594939291906122dc565b602060405180830381600087803b15801561108957600080fd5b505af115801561109d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110c19190611cda565b90505b604051634289fbb360e01b81526001600160a01b03861690634289fbb3908690610e20908f908d90889088908e90600401612295565b60008060038b60068111156111115761111161170b565b141561118f57836001600160a01b031663dfa2dbaf6040518163ffffffff1660e01b815260040160206040518083038186803b15801561115057600080fd5b505afa158015611164573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611188919061218c565b9050611203565b836001600160a01b03166395b12c276040518163ffffffff1660e01b815260040160206040518083038186803b1580156111c857600080fd5b505afa1580156111dc573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611200919061218c565b90505b6112176001600160a01b038a16828a611386565b600060038c600681111561122d5761122d61170b565b14156112cf57816001600160a01b031663de790c7e8b8b8e8b6040518563ffffffff1660e01b8152600401611265949392919061237a565b600060405180830381600087803b15801561127f57600080fd5b505af1158015611293573d6000803e3d6000fd5b50505050308a8a8d8a466040516020016112b2969594939291906123af565b604051602081830303815290604052805190602001209050611358565b816001600160a01b031663a00293018b8b8b8f8c6040518663ffffffff1660e01b81526004016113039594939291906122dc565b602060405180830381600087803b15801561131d57600080fd5b505af1158015611331573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113559190611cda565b90505b6110c46001600160a01b038b16836000611438565b606061137c84846000856114fb565b90505b9392505050565b600081846001600160a01b031663dd62ed3e30866040518363ffffffff1660e01b81526004016113b7929190612419565b60206040518083038186803b1580156113cf57600080fd5b505afa1580156113e3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114079190611cda565b611411919061244a565b90506114328463095ea7b360e01b8584604051602401610ac49291906120a4565b50505050565b8015806114c05750604051636eb1769f60e11b81526001600160a01b0384169063dd62ed3e9061146e9030908690600401612419565b60206040518083038186803b15801561148657600080fd5b505afa15801561149a573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114be9190611cda565b155b6114dc5760405162461bcd60e51b815260040161039a906124b5565b610afb8363095ea7b360e01b8484604051602401610ac49291906120a4565b60608247101561151d5760405162461bcd60e51b815260040161039a90612508565b6001600160a01b0385163b6115445760405162461bcd60e51b815260040161039a9061254c565b600080866001600160a01b03168587604051611560919061257e565b60006040518083038185875af1925050503d806000811461159d576040519150601f19603f3d011682016040523d82523d6000602084013e6115a2565b606091505b50915091506115b28282866115bd565b979650505050505050565b606083156115cc57508161137f565b8251156115dc5782518084602001fd5b8160405162461bcd60e51b815260040161039a9190611cbe565b60006001600160a01b03821661050a565b611610816115f6565b811461054357600080fd5b803561050a81611607565b80611610565b803561050a81611626565b60008083601f84011261164c5761164c600080fd5b5081356001600160401b0381111561166657611666600080fd5b60208301915083600182028301111561168157611681600080fd5b9250929050565b6000806000806000608086880312156116a3576116a3600080fd5b60006116af888861161b565b95505060206116c08882890161162c565b94505060408601356001600160401b038111156116df576116df600080fd5b6116eb88828901611637565b935093505060606116fe8882890161161b565b9150509295509295909350565b634e487b7160e01b600052602160045260246000fd5b600381106105435761054361170b565b8061095781611721565b600061050a82611731565b61174f8161173b565b82525050565b6020810161050a8284611746565b6001600160401b03811661174f565b6020810161050a8284611763565b6001600160401b038116611610565b803561050a81611780565b600080600080608085870312156117b3576117b3600080fd5b60006117bf878761161b565b94505060206117d08782880161161b565b93505060406117e18782880161161b565b92505060606117f28782880161178f565b91505092959194509250565b61174f816115f6565b6020810161050a82846117fe565b634e487b7160e01b600052604160045260246000fd5b601f19601f83011681018181106001600160401b038211171561185057611850611815565b6040525050565b600061186260405190565b9050610957828261182b565b60006001600160401b0382111561188757611887611815565b601f19601f83011660200192915050565b82818337506000910152565b60006118b76118b28461186e565b611857565b9050828152602081018484840111156118d2576118d2600080fd5b6118dd848285611898565b509392505050565b600082601f8301126118f9576118f9600080fd5b813561076a8482602086016118a4565b60006020828403121561191e5761191e600080fd5b81356001600160401b0381111561193757611937600080fd5b61076a848285016118e5565b8061174f565b6020810161050a8284611943565b60006020828403121561196c5761196c600080fd5b600061076a848461161b565b6000806040838503121561198e5761198e600080fd5b600061199a858561161b565b92505060206119ab8582860161162c565b9150509250929050565b600061050a826115f6565b611610816119b5565b803561050a816119c0565b6000806000606084860312156119ec576119ec600080fd5b60006119f886866119c9565b9350506020611a098682870161161b565b9250506040611a1a8682870161162c565b9150509250925092565b600060808284031215611a3957611a39600080fd5b50919050565b60008060008060c08587031215611a5857611a58600080fd5b6000611a648787611a24565b9450506080611a758782880161178f565b93505060a08501356001600160401b03811115611a9457611a94600080fd5b611aa087828801611637565b95989497509550505050565b63ffffffff8116611610565b803561050a81611aac565b600080600080600060a08688031215611ade57611ade600080fd5b6000611aea88886119c9565b9550506020611afb8882890161162c565b9450506040611b0c8882890161178f565b9350506060611b1d88828901611ab8565b92505060808601356001600160401b03811115611b3c57611b3c600080fd5b6116fe888289016118e5565b600060208284031215611b5d57611b5d600080fd5b600061076a848461178f565b603081526000602082017f52656368617267654d65737361676553656e6465723a2063616c6c657220697381526f206e6f74206d6573736167652062757360801b602082015291505b5060400190565b6020808252810161050a81611b69565b8183526000602084019350611bdf838584611898565b601f19601f8401165b9093019392505050565b60808101611c0082886117fe565b611c0d6020830187611943565b8181036040830152611c20818587611bc9565b9050611c2f60608301846117fe565b9695505050505050565b600061050a82611c47565b90565b60ff1690565b61174f81611c39565b6020810161050a8284611c4d565b60005b83811015611c7f578181015183820152602001611c67565b838111156114325750506000910152565b6000611c9a825190565b808452602084019350611cb1818560208601611c64565b601f19601f820116611be8565b6020808252810161137f8184611c90565b805161050a81611626565b600060208284031215611cef57611cef600080fd5b600061076a8484611ccf565b60208082527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572910190815260005b5060200190565b6020808252810161050a81611cfb565b602f81526000602082017f4f776e6572576974686472617761626c653a207769746864726177206e61746981526e1d99481d1bdad95b8819985a5b1959608a1b60208201529150611bb2565b6020808252810161050a81611d40565b600061050a826119b5565b61174f81611d9c565b60408101611dbe8285611da7565b61137f6020830184611943565b60608101611dd98286611da7565b611de660208301856117fe565b61076a6040830184611943565b600281106105435761054361170b565b8061095781611df3565b600061050a82611e03565b600061050a8260f81b90565b61174f611e3082611e0d565b611e18565b600061050a8260601b90565b600061050a82611e35565b61174f611e58826115f6565b611e41565b600061050a8260c01b90565b61174f6001600160401b038216611e5d565b6000611e88838584611898565b50500190565b6000611e9a828b611e24565b600182019150611eaa828a611e4c565b601482019150611eba8289611e4c565b601482019150611eca8288611e69565b600882019150611eda8287611943565b602082019150611eea8286611e69565b600882019150610c25828486611e7b565b603681526000602082017f52656368617267654d65737361676553656e6465723a2063616c6c6572206973815275081b9bdd081c9958da185c99d94818dbdb9d1c9858dd60521b60208201529150611bb2565b6020808252810161050a81611efb565b63ffffffff811661174f565b6101208101611f79828c6117fe565b611f86602083018b6117fe565b611f93604083018a611da7565b611fa06060830189611943565b611fad6080830188611763565b611fba60a0830187611763565b611fc760c0830186611763565b611fd460e0830185611f5e565b818103610100830152611fe78184611c90565b9b9a5050505050505050505050565b602681526000602082017f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206181526564647265737360d01b60208201529150611bb2565b6020808252810161050a81611ff6565b602e81526000602082017f496e697469616c697a61626c653a20636f6e747261637420697320616c72656181526d191e481a5b9a5d1a585b1a5e995960921b60208201529150611bb2565b6020808252810161050a81612049565b60408101611dbe82856117fe565b601981526000602082017f6272696467652074797065206e6f7420737570706f727465640000000000000081529150611d29565b6020808252810161050a816120b2565b801515611610565b805161050a816120f6565b60006020828403121561211e5761211e600080fd5b600061076a84846120fe565b602a81526000602082017f5361666545524332303a204552433230206f7065726174696f6e20646964206e8152691bdd081cdd58d8d9595960b21b60208201529150611bb2565b6020808252810161050a8161212a565b805161050a81611607565b6000602082840312156121a1576121a1600080fd5b600061076a8484612181565b60c081016121bb82896117fe565b6121c860208301886117fe565b6121d56040830187611943565b6121e26060830186611763565b6121ef6080830185611763565b6115b260a0830184611f5e565b6000612208828a611e4c565b6014820191506122188289611e4c565b6014820191506122288288611e4c565b6014820191506122388287611943565b6020820191506122488286611e69565b6008820191506122588285611e69565b6008820191506122688284611e69565b50600801979650505050505050565b600061050a611c446001600160401b03841681565b61174f81612277565b60a081016122a382886117fe565b6122b0602083018761228c565b6122bd60408301866117fe565b6122ca6060830185611943565b81810360808301526115b28184611c90565b60a081016122ea82886117fe565b6122f76020830187611943565b6123046040830186611763565b61231160608301856117fe565b611c2f6080830184611763565b600061232a828a611e4c565b60148201915061233a8289611e4c565b60148201915061234a8288611943565b60208201915061235a8287611e69565b60088201915061236a8286611e4c565b6014820191506122588285611e69565b6080810161238882876117fe565b6123956020830186611943565b6123a260408301856117fe565b6103e66060830184611763565b60006123bb8289611e4c565b6014820191506123cb8288611e4c565b6014820191506123db8287611943565b6020820191506123eb8286611e4c565b6014820191506123fb8285611e69565b60088201915061240b8284611e69565b506008019695505050505050565b6040810161242782856117fe565b61137f60208301846117fe565b634e487b7160e01b600052601160045260246000fd5b6000821982111561245d5761245d612434565b500190565b603681526000602082017f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f81527520746f206e6f6e2d7a65726f20616c6c6f77616e636560501b60208201529150611bb2565b6020808252810161050a81612462565b602681526000602082017f416464726573733a20696e73756666696369656e742062616c616e636520666f8152651c8818d85b1b60d21b60208201529150611bb2565b6020808252810161050a816124c5565b601d81526000602082017f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000081529150611d29565b6020808252810161050a81612518565b6000612566825190565b612574818560208601611c64565b9290920192915050565b600061137f828461255c56fea2646970667358221220fdeaefed69886007f10e1c3881b794740e66e33fb7a018e9112d359d05d534cb64736f6c63430008090033";

export class RechargeMessageSender__factory extends ContractFactory {
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
  ): Promise<RechargeMessageSender> {
    return super.deploy(overrides || {}) as Promise<RechargeMessageSender>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): RechargeMessageSender {
    return super.attach(address) as RechargeMessageSender;
  }
  connect(signer: Signer): RechargeMessageSender__factory {
    return super.connect(signer) as RechargeMessageSender__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): RechargeMessageSenderInterface {
    return new utils.Interface(_abi) as RechargeMessageSenderInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): RechargeMessageSender {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as RechargeMessageSender;
  }
}
