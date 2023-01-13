/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  RechargeMessageReceiver,
  RechargeMessageReceiverInterface,
} from "../RechargeMessageReceiver";

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
        internalType: "enum RechargeMessageReceiver.ExecutionStatus",
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
        internalType: "enum RechargeMessageReceiver.ExecutionStatus",
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
  "0x60806040523480156200001157600080fd5b5060006200002060016200008e565b9050801562000039576000805461ff0019166101001790555b801562000087576000805461ff00191690556040517f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb3847402498906200007e9060019062000168565b60405180910390a15b50620001cb565b60008054610100900460ff1615620000f7578160ff166001148015620000c75750620000c5306200013b60201b620008731760201c565b155b620000ef5760405162461bcd60e51b8152600401620000e69062000178565b60405180910390fd5b506000919050565b60005460ff808416911610620001215760405162461bcd60e51b8152600401620000e69062000178565b506000805460ff191660ff92909216919091179055600190565b6001600160a01b03163b151590565b600060ff82165b92915050565b62000162816200014a565b82525050565b6020810162000151828462000157565b602080825281016200015181602e81527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160208201526d191e481a5b9a5d1a585b1a5e995960921b604082015260600190565b611b6b80620001db6000396000f3fe6080604052600436106100dd5760003560e01c806393563a951161007f578063c34c08e511610059578063c34c08e514610229578063f2fde38b14610249578063f887ea4014610269578063f8c8765e1461029c57600080fd5b806393563a95146101bc578063a1a227fa146101dc578063bb0248aa146101fc57600080fd5b8063699256f4116100bb578063699256f41461014d578063715018a61461016d5780637cd2bffc146101825780638da5cb5b1461019557600080fd5b80631c3c0ea8146100e2578063547cad12146101045780635ab7afc614610124575b600080fd5b3480156100ee57600080fd5b506101026100fd366004610d8e565b6102bc565b005b34801561011057600080fd5b5061010261011f366004610d8e565b6102fb565b610137610132366004610ed1565b61032e565b6040516101449190610fc0565b60405180910390f35b34801561015957600080fd5b50610102610168366004610fce565b6103a9565b34801561017957600080fd5b50610102610457565b61013761019036600461107c565b61048d565b3480156101a157600080fd5b506033546001600160a01b03165b6040516101449190611130565b3480156101c857600080fd5b506101026101d736600461113e565b61069e565b3480156101e857600080fd5b506065546101af906001600160a01b031681565b34801561020857600080fd5b5061021c6102173660046111a9565b61070f565b604051610144919061121d565b34801561023557600080fd5b506066546101af906001600160a01b031681565b34801561025557600080fd5b50610102610264366004610d8e565b610780565b34801561027557600080fd5b5060005461028f906201000090046001600160a01b031681565b604051610144919061125b565b3480156102a857600080fd5b506101026102b7366004611269565b6107d9565b6033546001600160a01b031633146102ef5760405162461bcd60e51b81526004016102e690611302565b60405180910390fd5b6102f881610882565b50565b6033546001600160a01b031633146103255760405162461bcd60e51b81526004016102e690611302565b6102f8816108d8565b6065546000906001600160a01b0316331461035b5760405162461bcd60e51b81526004016102e690611364565b7fa0b35e480a2add0100f918632470cc8260628f0e8e277690f77da458ff8f4ab7878787878787604051610394969594939291906113e8565b60405180910390a15060019695505050505050565b6033546001600160a01b031633146103d35760405162461bcd60e51b81526004016102e690611302565b6040516000906001600160a01b0384169083156108fc0290849084818181858888f193505050509050806104195760405162461bcd60e51b81526004016102e69061148a565b7f2c876ecb97b3c6854f2488d373403f903eacb800e51c159a5c0c7a9c857e4827838360405161044a92919061149a565b60405180910390a1505050565b6033546001600160a01b031633146104815760405162461bcd60e51b81526004016102e690611302565b61048b6000610924565b565b6066546000906001600160a01b038381169116146104bd5760405162461bcd60e51b81526004016102e6906114fb565b60008060029054906101000a90046001600160a01b03166001600160a01b031663e70b7acb6040518163ffffffff1660e01b815260040160206040518083038186803b15801561050c57600080fd5b505afa158015610520573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105449190611516565b905061055a6001600160a01b0389168289610976565b604051631c80989960e21b81526001600160a01b0382169063720262649061058a908a908990899060040161155a565b600060405180830381600087803b1580156105a457600080fd5b505af19250505080156105b5575060015b610634573d8080156105e3576040519150601f19603f3d011682016040523d82523d6000602084013e6105e8565b606091505b507f3538e4460f392ef0ea71ed8ac3c3ddd96cdb41831e212d8fe3a145e1956e85d58a8a8a8a8a8a8a88604051610626989796959493929190611584565b60405180910390a150610678565b7fa2ea2fb459fe24fd2d3083215ee27cdee6cd1773cd34d407ce9a5f910409ccfe8989898989898960405161066f97969594939291906115fb565b60405180910390a15b61068d6001600160a01b038916826000610976565b60019150505b979650505050505050565b6033546001600160a01b031633146106c85760405162461bcd60e51b81526004016102e690611302565b6106dc6001600160a01b0384168383610a75565b7f2717ead6b9200dd235aad468c9809ea400fe33ac69b5bfaa6d3e90fc922b639883838360405161044a9392919061165e565b600060016107206020870187610d8e565b6107306040880160208901610d8e565b6107406060890160408a01611686565b886060013588888860405160200161075f989796959493929190611743565b6040516020818303038152906040528051906020012090505b949350505050565b6033546001600160a01b031633146107aa5760405162461bcd60e51b81526004016102e690611302565b6001600160a01b0381166107d05760405162461bcd60e51b81526004016102e6906117f3565b6102f881610924565b60006107e56001610a94565b905080156107fd576000805461ff0019166101001790555b61080685610924565b61080f846108d8565b61081883610882565b61082182610b21565b801561086c576000805461ff00191690556040517f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989061086390600190611817565b60405180910390a15b5050505050565b6001600160a01b03163b151590565b606680546001600160a01b0319166001600160a01b0383161790556040517fd9436ef9ce00ffeabc5da2489701502d3bd1a5ed7b254a1981fc5ffef9828e11906108cd908390611130565b60405180910390a150565b606580546001600160a01b0319166001600160a01b0383169081179091556040517f3f8223bcd8b3b875473e9f9e14e1ad075451a2b5ffd31591655da9a01516bf5e916108cd91611130565b603380546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b8015806109fe5750604051636eb1769f60e11b81526001600160a01b0384169063dd62ed3e906109ac9030908690600401611825565b60206040518083038186803b1580156109c457600080fd5b505afa1580156109d8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109fc919061184b565b155b610a1a5760405162461bcd60e51b81526004016102e6906118bf565b610a708363095ea7b360e01b8484604051602401610a399291906118cf565b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b031990931692909217909152610b51565b505050565b610a708363a9059cbb60e01b8484604051602401610a399291906118cf565b60008054610100900460ff1615610adb578160ff166001148015610ab75750303b155b610ad35760405162461bcd60e51b81526004016102e690611928565b506000919050565b60005460ff808416911610610b025760405162461bcd60e51b81526004016102e690611928565b506000805460ff191660ff92909216919091179055600190565b919050565b600054610100900460ff16610b485760405162461bcd60e51b81526004016102e690611980565b6102f881610be0565b6000610ba6826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b0316610c589092919063ffffffff16565b805190915015610a705780806020019051810190610bc491906119a3565b610a705760405162461bcd60e51b81526004016102e690611a0b565b6001600160a01b038116610c065760405162461bcd60e51b81526004016102e690611a4f565b6000805462010000600160b01b031916620100006001600160a01b038416021790556040517f7aed1d3e8155a07ccf395e44ea3109a0e2d6c9b29bbbe9f142d9790596f4dc80906108cd90839061125b565b6060610c678484600085610c71565b90505b9392505050565b606082471015610c935760405162461bcd60e51b81526004016102e690611aa2565b6001600160a01b0385163b610cba5760405162461bcd60e51b81526004016102e690611ae6565b600080866001600160a01b03168587604051610cd69190611b18565b60006040518083038185875af1925050503d8060008114610d13576040519150601f19603f3d011682016040523d82523d6000602084013e610d18565b606091505b509150915061069382828660608315610d32575081610c6a565b825115610d425782518084602001fd5b8160405162461bcd60e51b81526004016102e69190611b24565b60006001600160a01b0382165b92915050565b610d7881610d5c565b81146102f857600080fd5b8035610d6981610d6f565b600060208284031215610da357610da3600080fd5b60006107788484610d83565b80610d78565b8035610d6981610daf565b67ffffffffffffffff8116610d78565b8035610d6981610dc0565b634e487b7160e01b600052604160045260246000fd5b601f19601f830116810181811067ffffffffffffffff82111715610e1757610e17610ddb565b6040525050565b6000610e2960405190565b9050610b1c8282610df1565b600067ffffffffffffffff821115610e4f57610e4f610ddb565b601f19601f83011660200192915050565b82818337506000910152565b6000610e7f610e7a84610e35565b610e1e565b905082815260208101848484011115610e9a57610e9a600080fd5b610ea5848285610e60565b509392505050565b600082601f830112610ec157610ec1600080fd5b8135610778848260208601610e6c565b60008060008060008060c08789031215610eed57610eed600080fd5b6000610ef98989610d83565b9650506020610f0a89828a01610d83565b9550506040610f1b89828a01610db5565b9450506060610f2c89828a01610dd0565b935050608087013567ffffffffffffffff811115610f4c57610f4c600080fd5b610f5889828a01610ead565b92505060a0610f6989828a01610d83565b9150509295509295509295565b634e487b7160e01b600052602160045260246000fd5b600381106102f8576102f8610f76565b80610b1c81610f8c565b6000610d6982610f9c565b610fba81610fa6565b82525050565b60208101610d698284610fb1565b60008060408385031215610fe457610fe4600080fd5b6000610ff08585610d83565b925050602061100185828601610db5565b9150509250929050565b6000610d6982610d5c565b610d788161100b565b8035610d6981611016565b60008083601f84011261103f5761103f600080fd5b50813567ffffffffffffffff81111561105a5761105a600080fd5b60208301915083600182028301111561107557611075600080fd5b9250929050565b600080600080600080600060c0888a03121561109a5761109a600080fd5b60006110a68a8a610d83565b97505060206110b78a828b0161101f565b96505060406110c88a828b01610db5565b95505060606110d98a828b01610dd0565b945050608088013567ffffffffffffffff8111156110f9576110f9600080fd5b6111058a828b0161102a565b935093505060a06111188a828b01610d83565b91505092959891949750929550565b610fba81610d5c565b60208101610d698284611127565b60008060006060848603121561115657611156600080fd5b6000611162868661101f565b935050602061117386828701610d83565b925050604061118486828701610db5565b9150509250925092565b6000608082840312156111a3576111a3600080fd5b50919050565b60008060008060c085870312156111c2576111c2600080fd5b60006111ce878761118e565b94505060806111df87828801610dd0565b93505060a085013567ffffffffffffffff8111156111ff576111ff600080fd5b61120b8782880161102a565b95989497509550505050565b80610fba565b60208101610d698284611217565b60006001600160a01b038216610d69565b6000610d698261122b565b6000610d698261123c565b610fba81611247565b60208101610d698284611252565b6000806000806080858703121561128257611282600080fd5b600061128e8787610d83565b945050602061129f87828801610d83565b93505060406112b087828801610d83565b92505060606112c18782880161101f565b91505092959194509250565b60208082527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572910190815260005b5060200190565b60208082528101610d69816112cd565b603281526000602082017f52656368617267654d65737361676552656365697665723a2063616c6c6572208152716973206e6f74206d6573736167652062757360701b602082015291505b5060400190565b60208082528101610d6981611312565b67ffffffffffffffff8116610fba565b60005b8381101561139f578181015183820152602001611387565b838111156113ae576000848401525b50505050565b60006113be825190565b8084526020840193506113d5818560208601611384565b601f19601f8201165b9093019392505050565b60c081016113f68289611127565b6114036020830188611127565b6114106040830187611217565b61141d6060830186611374565b818103608083015261142f81856113b4565b905061069360a0830184611127565b602f81526000602082017f4f776e6572576974686472617761626c653a207769746864726177206e61746981526e1d99481d1bdad95b8819985a5b1959608a1b6020820152915061135d565b60208082528101610d698161143e565b604081016114a88285611252565b610c6a6020830184611217565b602981526000602082017f52656368617267654d65737361676552656365697665723a20696e76616c69648152681032bc32b1baba37b960b91b6020820152915061135d565b60208082528101610d69816114b5565b8051610d6981611016565b60006020828403121561152b5761152b600080fd5b6000610778848461150b565b818352600060208401935061154d838584610e60565b601f19601f8401166113de565b604081016115688286611217565b818103602083015261157b818486611537565b95945050505050565b60e08101611592828b611127565b61159f602083018a611252565b6115ac6040830189611217565b6115b96060830188611374565b81810360808301526115cc818688611537565b90506115db60a0830185611127565b81810360c08301526115ed81846113b4565b9a9950505050505050505050565b60c08101611609828a611127565b6116166020830189611252565b6116236040830188611217565b6116306060830187611374565b8181036080830152611643818587611537565b905061165260a0830184611127565b98975050505050505050565b6060810161166c8286611252565b6116796020830185611127565b6107786040830184611217565b60006020828403121561169b5761169b600080fd5b60006107788484610dd0565b600281106102f8576102f8610f76565b80610b1c816116a7565b6000610d69826116b7565b6000610d698260f81b90565b610fba6116e4826116c1565b6116cc565b6000610d698260601b90565b6000610d69826116e9565b610fba61170c82610d5c565b6116f5565b6000610d698260c01b90565b610fba67ffffffffffffffff8216611711565b600061173d838584610e60565b50500190565b600061174f828b6116d8565b60018201915061175f828a611700565b60148201915061176f8289611700565b60148201915061177f828861171d565b60088201915061178f8287611217565b60208201915061179f828661171d565b6008820191506115ed828486611730565b602681526000602082017f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206181526564647265737360d01b6020820152915061135d565b60208082528101610d69816117b0565b600060ff8216610d69565b610fba81611803565b60208101610d69828461180e565b604081016118338285611127565b610c6a6020830184611127565b8051610d6981610daf565b60006020828403121561186057611860600080fd5b60006107788484611840565b603681526000602082017f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f81527520746f206e6f6e2d7a65726f20616c6c6f77616e636560501b6020820152915061135d565b60208082528101610d698161186c565b604081016114a88285611127565b602e81526000602082017f496e697469616c697a61626c653a20636f6e747261637420697320616c72656181526d191e481a5b9a5d1a585b1a5e995960921b6020820152915061135d565b60208082528101610d69816118dd565b602b81526000602082017f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206981526a6e697469616c697a696e6760a81b6020820152915061135d565b60208082528101610d6981611938565b801515610d78565b8051610d6981611990565b6000602082840312156119b8576119b8600080fd5b60006107788484611998565b602a81526000602082017f5361666545524332303a204552433230206f7065726174696f6e20646964206e8152691bdd081cdd58d8d9595960b21b6020820152915061135d565b60208082528101610d69816119c4565b601b81526000602082017f526f75746572577261707065723a207a65726f20616464726573730000000000815291506112fb565b60208082528101610d6981611a1b565b602681526000602082017f416464726573733a20696e73756666696369656e742062616c616e636520666f8152651c8818d85b1b60d21b6020820152915061135d565b60208082528101610d6981611a5f565b601d81526000602082017f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000815291506112fb565b60208082528101610d6981611ab2565b6000611b00825190565b611b0e818560208601611384565b9290920192915050565b6000610c6a8284611af6565b60208082528101610c6a81846113b456fea2646970667358221220d80f3db6a18482faf43e6fcdd5a8938f165e9188bc16a4ea78aa9cc26236bb5564736f6c63430008090033";

export class RechargeMessageReceiver__factory extends ContractFactory {
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
  ): Promise<RechargeMessageReceiver> {
    return super.deploy(overrides || {}) as Promise<RechargeMessageReceiver>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): RechargeMessageReceiver {
    return super.attach(address) as RechargeMessageReceiver;
  }
  connect(signer: Signer): RechargeMessageReceiver__factory {
    return super.connect(signer) as RechargeMessageReceiver__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): RechargeMessageReceiverInterface {
    return new utils.Interface(_abi) as RechargeMessageReceiverInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): RechargeMessageReceiver {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as RechargeMessageReceiver;
  }
}
