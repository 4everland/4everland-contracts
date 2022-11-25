"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.SrcChainPaymentV2__factory = void 0;
var ethers_1 = require("ethers");
var _abi = [
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
                internalType: "contract IMessageSender",
                name: "messageSender",
                type: "address",
            },
        ],
        name: "MessageSenderUpdated",
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
                components: [
                    {
                        internalType: "enum ResourceData.ResourceType",
                        name: "resourceType",
                        type: "uint8",
                    },
                    {
                        internalType: "uint256[]",
                        name: "values",
                        type: "uint256[]",
                    },
                ],
                indexed: false,
                internalType: "struct ResourceData.ValuePayload[]",
                name: "payloads",
                type: "tuple[]",
            },
        ],
        name: "PaidV2",
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
                components: [
                    {
                        internalType: "enum ResourceData.ResourceType",
                        name: "resourceType",
                        type: "uint8",
                    },
                    {
                        internalType: "uint256[]",
                        name: "values",
                        type: "uint256[]",
                    },
                ],
                indexed: false,
                internalType: "struct ResourceData.ValuePayload[]",
                name: "payloads",
                type: "tuple[]",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "nonce",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "PaidV3",
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
                internalType: "contract IERC20Upgradeable",
                name: "token",
                type: "address",
            },
        ],
        name: "TokenUpdated",
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
                components: [
                    {
                        internalType: "enum ResourceData.ResourceType",
                        name: "resourceType",
                        type: "uint8",
                    },
                    {
                        internalType: "uint256[]",
                        name: "values",
                        type: "uint256[]",
                    },
                ],
                internalType: "struct ResourceData.ValuePayload[]",
                name: "payloads",
                type: "tuple[]",
            },
            {
                internalType: "uint256",
                name: "nonce",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
            {
                internalType: "bytes",
                name: "signature",
                type: "bytes",
            },
        ],
        name: "calcFee",
        outputs: [
            {
                internalType: "uint256",
                name: "value",
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
                        name: "values",
                        type: "uint256[]",
                    },
                ],
                internalType: "struct ResourceData.ValuePayload[]",
                name: "payloads",
                type: "tuple[]",
            },
            {
                internalType: "uint256",
                name: "nonce",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
            {
                internalType: "bytes",
                name: "signature",
                type: "bytes",
            },
        ],
        name: "encodeMessage",
        outputs: [
            {
                internalType: "bytes",
                name: "",
                type: "bytes",
            },
        ],
        stateMutability: "pure",
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
                internalType: "bytes32",
                name: "",
                type: "bytes32",
            },
        ],
        name: "fees",
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
                internalType: "address",
                name: "pauser",
                type: "address",
            },
            {
                internalType: "contract IMessageSender",
                name: "messageSender",
                type: "address",
            },
            {
                internalType: "contract IERC20Upgradeable",
                name: "token",
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
        name: "messageSender",
        outputs: [
            {
                internalType: "contract IMessageSender",
                name: "",
                type: "address",
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
                components: [
                    {
                        internalType: "enum ResourceData.ResourceType",
                        name: "resourceType",
                        type: "uint8",
                    },
                    {
                        internalType: "uint256[]",
                        name: "values",
                        type: "uint256[]",
                    },
                ],
                internalType: "struct ResourceData.ValuePayload[]",
                name: "payloads",
                type: "tuple[]",
            },
            {
                internalType: "uint256",
                name: "nonce",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
            {
                internalType: "bytes",
                name: "signature",
                type: "bytes",
            },
        ],
        name: "payV3",
        outputs: [],
        stateMutability: "payable",
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
                        internalType: "uint256[]",
                        name: "values",
                        type: "uint256[]",
                    },
                ],
                internalType: "struct ResourceData.ValuePayload[]",
                name: "payloads",
                type: "tuple[]",
            },
        ],
        name: "payloadsValue",
        outputs: [
            {
                internalType: "uint256",
                name: "value",
                type: "uint256",
            },
        ],
        stateMutability: "nonpayable",
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
        name: "providerBalances",
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
        inputs: [
            {
                internalType: "contract IMessageSender",
                name: "_messageSender",
                type: "address",
            },
        ],
        name: "setMessageSender",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "contract IERC20Upgradeable",
                name: "_token",
                type: "address",
            },
        ],
        name: "setToken",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "token",
        outputs: [
            {
                internalType: "contract IERC20Upgradeable",
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
        inputs: [],
        name: "unpause",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
var _bytecode = "0x608060405234801561001057600080fd5b50612331806100206000396000f3fe60806040526004361061014b5760003560e01c806382dc1ec4116100b6578063d67bdd251161006f578063d67bdd25146103c9578063d798e04f146103f6578063f2fde38b14610409578063f840dbff14610429578063f8c8765e14610449578063fc0c546a1461046957600080fd5b806382dc1ec4146103015780638456cb59146103215780638da5cb5b1461033657806393563a951461035c5780639d8c6de81461037c578063bc67f832146103a957600080fd5b806363578efe1161010857806363578efe1461022f578063699256f4146102675780636b2c0f55146102875780636ef8d66d146102a7578063715018a6146102bc57806380f51c12146102d157600080fd5b8063144fa6d7146101505780631d1b6cab1461017257806328ac7f2c146101a85780633f4ba83a146101d557806346fbf68e146101ea5780635c975abb14610217575b600080fd5b34801561015c57600080fd5b5061017061016b36600461132a565b610489565b005b34801561017e57600080fd5b5061019261018d36600461156d565b6104c8565b60405161019f91906115b0565b60405180910390f35b3480156101b457600080fd5b506101926101c33660046115d2565b60cc6020526000908152604090205481565b3480156101e157600080fd5b506101706104f2565b3480156101f657600080fd5b5061020a6102053660046115d2565b610521565b60405161019f91906115fb565b34801561022357600080fd5b5060975460ff1661020a565b34801561023b57600080fd5b5061019261024a366004611609565b60cd60209081526000928352604080842090915290825290205481565b34801561027357600080fd5b50610170610282366004611609565b61053f565b34801561029357600080fd5b506101706102a23660046115d2565b6105ed565b3480156102b357600080fd5b50610170610620565b3480156102c857600080fd5b50610170610629565b3480156102dd57600080fd5b5061020a6102ec3660046115d2565b60c96020526000908152604090205460ff1681565b34801561030d57600080fd5b5061017061031c3660046115d2565b61065d565b34801561032d57600080fd5b50610170610690565b34801561034257600080fd5b506065546001600160a01b031660405161019f919061164f565b34801561036857600080fd5b5061017061037736600461165d565b6106bd565b34801561038857600080fd5b5061039c610397366004611744565b61072e565b60405161019f9190611862565b3480156103b557600080fd5b506101706103c436600461132a565b610767565b3480156103d557600080fd5b5060cb546103e9906001600160a01b031681565b60405161019f9190611887565b610170610404366004611744565b61079a565b34801561041557600080fd5b506101706104243660046115d2565b61098c565b34801561043557600080fd5b50610192610444366004611744565b6109e5565b34801561045557600080fd5b50610170610464366004611895565b610a7e565b34801561047557600080fd5b5060ca546103e9906001600160a01b031681565b6065546001600160a01b031633146104bc5760405162461bcd60e51b81526004016104b39061192e565b60405180910390fd5b6104c581610b18565b50565b60006104d382610b95565b60ca549091506104ec906001600160a01b031682610c62565b92915050565b6104fb33610521565b6105175760405162461bcd60e51b81526004016104b390611970565b61051f610cc9565b565b6001600160a01b0316600090815260c9602052604090205460ff1690565b6065546001600160a01b031633146105695760405162461bcd60e51b81526004016104b39061192e565b6040516000906001600160a01b0384169083156108fc0290849084818181858888f193505050509050806105af5760405162461bcd60e51b81526004016104b3906119cf565b7f2c876ecb97b3c6854f2488d373403f903eacb800e51c159a5c0c7a9c857e482783836040516105e09291906119df565b60405180910390a1505050565b6065546001600160a01b031633146106175760405162461bcd60e51b81526004016104b39061192e565b6104c581610d2f565b61051f33610d2f565b6065546001600160a01b031633146106535760405162461bcd60e51b81526004016104b39061192e565b61051f6000610da4565b6065546001600160a01b031633146106875760405162461bcd60e51b81526004016104b39061192e565b6104c581610df6565b61069933610521565b6106b55760405162461bcd60e51b81526004016104b390611970565b61051f610e6f565b6065546001600160a01b031633146106e75760405162461bcd60e51b81526004016104b39061192e565b6106fb6001600160a01b0384168383610ec7565b7f2717ead6b9200dd235aad468c9809ea400fe33ac69b5bfaa6d3e90fc922b63988383836040516105e0939291906119fa565b606086868686868660405160200161074b96959493929190611b61565b60405160208183030381529060405290505b9695505050505050565b6065546001600160a01b031633146107915760405162461bcd60e51b81526004016104b39061192e565b6104c581610f22565b60975460ff16156107bd5760405162461bcd60e51b81526004016104b390611bef565b600260015414156107e05760405162461bcd60e51b81526004016104b390611c33565b600260015560006107f085610b95565b9050828110156108125760405162461bcd60e51b81526004016104b390611c9d565b8215610825576108228382611cc3565b90505b60ca5461083b906001600160a01b031682610c62565b6001600160a01b038816600090815260cc6020526040902054909150610862908290611cda565b6001600160a01b038816600090815260cc602090815260408083209390935560cd81528282208983529052205461089a908290611cda565b6001600160a01b03808916600090815260cd602090815260408083208b845290915290209190915560ca546108d29116333084610f93565b60cb546001600160a01b03166382646a58346108f28a8a8a8a8a8a61072e565b6040518363ffffffff1660e01b815260040161090e9190611862565b6000604051808303818588803b15801561092757600080fd5b505af115801561093b573d6000803e3d6000fd5b50505050507fd0b115555625d4188e05dc9fab51a4dfad087518b535f4ce9c96a8ee6143507a8787878787604051610977959493929190611cf2565b60405180910390a15050600180555050505050565b6065546001600160a01b031633146109b65760405162461bcd60e51b81526004016104b39061192e565b6001600160a01b0381166109dc5760405162461bcd60e51b81526004016104b390611d7e565b6104c581610da4565b60cb546000906001600160a01b0316635335dca2610a0789898989898961072e565b6040518263ffffffff1660e01b8152600401610a239190611862565b60206040518083038186803b158015610a3b57600080fd5b505afa158015610a4f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a739190611d99565b979650505050505050565b6000610a8a6001610fba565b90508015610aa2576000805461ff0019166101001790555b610aab85610da4565b610ab484611047565b610abd8361106e565b610ac682611095565b8015610b11576000805461ff00191690556040517f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb384740249890610b0890600190611dce565b60405180910390a15b5050505050565b6001600160a01b038116610b3e5760405162461bcd60e51b81526004016104b390611e10565b60ca80546001600160a01b0319166001600160a01b0383169081179091556040517f5ba6b30cd4b2f9e9e67f4feb9b9df10d5da3b057598e6901b217b7d590345e3091610b8a91611887565b60405180910390a150565b600080825111610bb75760405162461bcd60e51b81526004016104b390611e62565b60005b8251811015610c5c5760005b838281518110610bd857610bd8611e72565b60200260200101516020015151811015610c4957610c35848381518110610c0157610c01611e72565b6020026020010151602001518281518110610c1e57610c1e611e72565b6020026020010151846110bc90919063ffffffff16565b925080610c4181611e88565b915050610bc6565b5080610c5481611e88565b915050610bba565b50919050565b600080610c6e846110cf565b90506012808211610ca157610c98610c868284611168565b610c9190600a611fb1565b8590611174565b925050506104ec565b610cc0610cae8383611168565b610cb990600a611fb1565b8590611180565b95945050505050565b60975460ff16610ceb5760405162461bcd60e51b81526004016104b390611feb565b6097805460ff191690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa335b604051610d25919061164f565b60405180910390a1565b610d3881610521565b610d545760405162461bcd60e51b81526004016104b39061202f565b6001600160a01b038116600090815260c9602052604090819020805460ff19169055517fcd265ebaf09df2871cc7bd4133404a235ba12eff2041bb89d9c714a2621c7c7e90610b8a90839061164f565b606580546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b610dff81610521565b15610e1c5760405162461bcd60e51b81526004016104b39061207d565b6001600160a01b038116600090815260c9602052604090819020805460ff19166001179055517f6719d08c1888103bea251a4ed56406bd0c3e69723c8a1686e017e7bbe159b6f890610b8a90839061164f565b60975460ff1615610e925760405162461bcd60e51b81526004016104b390611bef565b6097805460ff191660011790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a258610d183390565b610f1d8363a9059cbb60e01b8484604051602401610ee692919061208d565b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b03199093169290921790915261118c565b505050565b6001600160a01b038116610f485760405162461bcd60e51b81526004016104b390611e10565b60cb80546001600160a01b0319166001600160a01b0383161790556040517fd3a626089875a97be3c9702fd526ab6e28bd30904def789b36b301f03afadcaf90610b8a908390611887565b610fb4846323b872dd60e01b858585604051602401610ee69392919061209b565b50505050565b60008054610100900460ff1615611001578160ff166001148015610fdd5750303b155b610ff95760405162461bcd60e51b81526004016104b3906120f4565b506000919050565b60005460ff8084169116106110285760405162461bcd60e51b81526004016104b3906120f4565b506000805460ff191660ff92909216919091179055600190565b919050565b600054610100900460ff166106875760405162461bcd60e51b81526004016104b39061214c565b600054610100900460ff166107915760405162461bcd60e51b81526004016104b39061214c565b600054610100900460ff166104bc5760405162461bcd60e51b81526004016104b39061214c565b60006110c88284611cda565b9392505050565b6000806000836001600160a01b03166040516110ea9061215c565b600060405180830381855afa9150503d8060008114611125576040519150601f19603f3d011682016040523d82523d6000602084013e61112a565b606091505b50915091508161114c5760405162461bcd60e51b81526004016104b3906121a5565b808060200190518101906111609190611d99565b949350505050565b60006110c88284611cc3565b60006110c882846121cb565b60006110c882846121df565b60006111e1826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b031661121b9092919063ffffffff16565b805190915015610f1d57808060200190518101906111ff9190612211565b610f1d5760405162461bcd60e51b81526004016104b390612279565b60606111608484600085856001600160a01b0385163b61124d5760405162461bcd60e51b81526004016104b3906122bd565b600080866001600160a01b0316858760405161126991906122ef565b60006040518083038185875af1925050503d80600081146112a6576040519150601f19603f3d011682016040523d82523d6000602084013e6112ab565b606091505b5091509150610a73828286606083156112c55750816110c8565b8251156112d55782518084602001fd5b8160405162461bcd60e51b81526004016104b39190611862565b60006001600160a01b0382166104ec565b60006104ec826112ef565b61131481611300565b81146104c557600080fd5b80356104ec8161130b565b60006020828403121561133f5761133f600080fd5b6000611160848461131f565b634e487b7160e01b600052604160045260246000fd5b601f19601f830116810181811067ffffffffffffffff821117156113875761138761134b565b6040525050565b600061139960405190565b90506110428282611361565b600067ffffffffffffffff8211156113bf576113bf61134b565b5060209081020190565b600581106104c557600080fd5b80356104ec816113c9565b80611314565b80356104ec816113e1565b6000611405611400846113a5565b61138e565b8381529050602080820190840283018581111561142457611424600080fd5b835b81811015611448578061143988826113e7565b84525060209283019201611426565b5050509392505050565b600082601f83011261146657611466600080fd5b81356111608482602086016113f2565b60006040828403121561148b5761148b600080fd5b611495604061138e565b905060006114a384846113d6565b825250602082013567ffffffffffffffff8111156114c3576114c3600080fd5b6114cf84828501611452565b60208301525092915050565b60006114e9611400846113a5565b8381529050602080820190840283018581111561150857611508600080fd5b835b8181101561144857803567ffffffffffffffff81111561152c5761152c600080fd5b8086016115398982611476565b855250506020928301920161150a565b600082601f83011261155d5761155d600080fd5b81356111608482602086016114db565b60006020828403121561158257611582600080fd5b813567ffffffffffffffff81111561159c5761159c600080fd5b61116084828501611549565b805b82525050565b602081016104ec82846115a8565b611314816112ef565b80356104ec816115be565b6000602082840312156115e7576115e7600080fd5b600061116084846115c7565b8015156115aa565b602081016104ec82846115f3565b6000806040838503121561161f5761161f600080fd5b600061162b85856115c7565b925050602061163c858286016113e7565b9150509250929050565b6115aa816112ef565b602081016104ec8284611646565b60008060006060848603121561167557611675600080fd5b6000611681868661131f565b9350506020611692868287016115c7565b92505060406116a3868287016113e7565b9150509250925092565b600067ffffffffffffffff8211156116c7576116c761134b565b601f19601f83011660200192915050565b82818337506000910152565b60006116f2611400846116ad565b90508281526020810184848401111561170d5761170d600080fd5b6117188482856116d8565b509392505050565b600082601f83011261173457611734600080fd5b81356111608482602086016116e4565b60008060008060008060c0878903121561176057611760600080fd5b600061176c89896115c7565b965050602061177d89828a016113e7565b955050604087013567ffffffffffffffff81111561179d5761179d600080fd5b6117a989828a01611549565b94505060606117ba89828a016113e7565b93505060806117cb89828a016113e7565b92505060a087013567ffffffffffffffff8111156117eb576117eb600080fd5b6117f789828a01611720565b9150509295509295509295565b60005b8381101561181f578181015183820152602001611807565b83811115610fb45750506000910152565b600061183a825190565b808452602084019350611851818560208601611804565b601f01601f19169290920192915050565b602080825281016110c88184611830565b60006104ec82611300565b6115aa81611873565b602081016104ec828461187e565b600080600080608085870312156118ae576118ae600080fd5b60006118ba87876115c7565b94505060206118cb878288016115c7565b93505060406118dc8782880161131f565b92505060606118ed8782880161131f565b91505092959194509250565b60208082527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572910190815260005b5060200190565b602080825281016104ec816118f9565b60208082527f5061757365723a2063616c6c6572206973206e6f74207468652070617573657291019081526000611927565b602080825281016104ec8161193e565b602f81526000602082017f4f776e6572576974686472617761626c653a207769746864726177206e61746981526e1d99481d1bdad95b8819985a5b1959608a1b602082015291505b5060400190565b602080825281016104ec81611980565b604081016119ed828561187e565b6110c860208301846115a8565b60608101611a08828661187e565b611a156020830185611646565b61116060408301846115a8565b634e487b7160e01b600052602160045260246000fd5b600581106104c5576104c5611a22565b8061104281611a38565b60006104ec82611a48565b6115aa81611a52565b6000611a7283836115a8565b505060200190565b6000611a84825190565b80845260209384019383018060005b83811015611ab8578151611aa78882611a66565b975060208301925050600101611a93565b509495945050505050565b80516000906040840190611ad78582611a5d565b5060208301518482036020860152610cc08282611a7a565b60006110c88383611ac3565b6000611b05825190565b80845260208401935083602082028501611b1f8560200190565b8060005b85811015611b545784840389528151611b3c8582611aef565b94506020830160209a909a0199925050600101611b23565b5091979650505050505050565b60c08101611b6f8289611646565b611b7c60208301886115a8565b8181036040830152611b8e8187611afb565b9050611b9d60608301866115a8565b611baa60808301856115a8565b81810360a0830152611bbc8184611830565b98975050505050505050565b601081526000602082016f14185d5cd8589b194e881c185d5cd95960821b81529150611927565b602080825281016104ec81611bc8565b601f81526000602082017f5265656e7472616e637947756172643a207265656e7472616e742063616c6c0081529150611927565b602080825281016104ec81611bff565b603b81526000602082017f537263436861696e5061796d656e743a20766f756368657220616d6f756e742081527f6973206c657373207468616e207265736f757263652076616c75650000000000602082015291506119c8565b602080825281016104ec81611c43565b634e487b7160e01b600052601160045260246000fd5b600082821015611cd557611cd5611cad565b500390565b60008219821115611ced57611ced611cad565b500190565b60a08101611d008288611646565b611d0d60208301876115a8565b8181036040830152611d1f8186611afb565b9050611d2e60608301856115a8565b61075d60808301846115a8565b602681526000602082017f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206181526564647265737360d01b602082015291506119c8565b602080825281016104ec81611d3b565b80516104ec816113e1565b600060208284031215611dae57611dae600080fd5b60006111608484611d8e565b600060ff82166104ec565b6115aa81611dba565b602081016104ec8284611dc5565b601d81526000602082017f537263436861696e5061796d656e743a207a65726f206164647265737300000081529150611927565b602080825281016104ec81611ddc565b602581526000602082017f5265736f75726365446174613a20696e76616c6964207061796c6f616473206c8152640cadccee8d60db1b602082015291506119c8565b602080825281016104ec81611e20565b634e487b7160e01b600052603260045260246000fd5b6000600019821415611e9c57611e9c611cad565b5060010190565b80825b6001851115611ee257808604811115611ec157611ec1611cad565b6001851615611ecf57908102905b8002611edb8560011c90565b9450611ea6565b94509492505050565b600082611efa575060016110c8565b81611f07575060006110c8565b8160018114611f1d5760028114611f2757611f54565b60019150506110c8565b60ff841115611f3857611f38611cad565b8360020a915084821115611f4e57611f4e611cad565b506110c8565b5060208310610133831016604e8410600b8410161715611f87575081810a83811115611f8257611f82611cad565b6110c8565b611f948484846001611ea3565b92509050818404811115611faa57611faa611cad565b0292915050565b60006110c86000198484611eeb565b601481526000602082017314185d5cd8589b194e881b9bdd081c185d5cd95960621b81529150611927565b602080825281016104ec81611fc0565b601d81526000602082017f5061757365723a206163636f756e74206973206e6f742070617573657200000081529150611927565b602080825281016104ec81611ffb565b602181526000602082017f5061757365723a206163636f756e7420697320616c72656164792070617573658152603960f91b602082015291506119c8565b602080825281016104ec8161203f565b604081016119ed8285611646565b60608101611a088286611646565b602e81526000602082017f496e697469616c697a61626c653a20636f6e747261637420697320616c72656181526d191e481a5b9a5d1a585b1a5e995960921b602082015291506119c8565b602080825281016104ec816120a9565b602b81526000602082017f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206981526a6e697469616c697a696e6760a81b602082015291506119c8565b602080825281016104ec81612104565b63313ce56760e01b81526000600482016104ec565b601b81526000602082017f5265736f75726365446174613a20696e76616c696420746f6b656e000000000081529150611927565b602080825281016104ec81612171565b634e487b7160e01b600052601260045260246000fd5b6000826121da576121da6121b5565b500490565b60008160001904831182151516156121f9576121f9611cad565b500290565b801515611314565b80516104ec816121fe565b60006020828403121561222657612226600080fd5b60006111608484612206565b602a81526000602082017f5361666545524332303a204552433230206f7065726174696f6e20646964206e8152691bdd081cdd58d8d9595960b21b602082015291506119c8565b602080825281016104ec81612232565b601d81526000602082017f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000081529150611927565b602080825281016104ec81612289565b60006122d7825190565b6122e5818560208601611804565b9290920192915050565b60006110c882846122cd56fea2646970667358221220e1cc5ca5139146a8be7933b488077b74034400c1a8591733b4a8767450f86d1364736f6c63430008090033";
var SrcChainPaymentV2__factory = /** @class */ (function (_super) {
    __extends(SrcChainPaymentV2__factory, _super);
    function SrcChainPaymentV2__factory() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var _this = this;
        if (args.length === 1) {
            _this = _super.call(this, _abi, _bytecode, args[0]) || this;
        }
        else {
            _this = _super.apply(this, args) || this;
        }
        return _this;
    }
    SrcChainPaymentV2__factory.prototype.deploy = function (overrides) {
        return _super.prototype.deploy.call(this, overrides || {});
    };
    SrcChainPaymentV2__factory.prototype.getDeployTransaction = function (overrides) {
        return _super.prototype.getDeployTransaction.call(this, overrides || {});
    };
    SrcChainPaymentV2__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    SrcChainPaymentV2__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    SrcChainPaymentV2__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    SrcChainPaymentV2__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    SrcChainPaymentV2__factory.bytecode = _bytecode;
    SrcChainPaymentV2__factory.abi = _abi;
    return SrcChainPaymentV2__factory;
}(ethers_1.ContractFactory));
exports.SrcChainPaymentV2__factory = SrcChainPaymentV2__factory;
