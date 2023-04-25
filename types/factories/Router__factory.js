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
exports.Router__factory = void 0;
var ethers_1 = require("ethers");
var _abi = [
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
                internalType: "contract INormalResourceController",
                name: "arStorageController",
                type: "address",
            },
        ],
        name: "ARStorageControllerUpdated",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "contract INormalResourceController",
                name: "bandwidthController",
                type: "address",
            },
        ],
        name: "BandwidthControllerUpdated",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "contract IBilling",
                name: "billing",
                type: "address",
            },
        ],
        name: "BillingUpdated",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "contract INormalResourceController",
                name: "buildingTimeController",
                type: "address",
            },
        ],
        name: "BuildingTimeControllerUpdated",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "contract IDstChainPayment",
                name: "dstChainPayment",
                type: "address",
            },
        ],
        name: "DstChainPaymentUpdated",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "contract IFundPool",
                name: "fundPool",
                type: "address",
            },
        ],
        name: "FundPoolUpdated",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "contract IGovernance",
                name: "governance",
                type: "address",
            },
        ],
        name: "GovernanceUpdated",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "contract IIPFSStorageController",
                name: "ipfsStorageController",
                type: "address",
            },
        ],
        name: "IPFSStorageControllerUpdated",
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
                name: "messageReceiver",
                type: "address",
            },
        ],
        name: "MessageReceiverUpdated",
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
                internalType: "contract IProviderController",
                name: "providerController",
                type: "address",
            },
        ],
        name: "ProviderControllerUpdated",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "contract IProviderRegistry",
                name: "_providerRegistry",
                type: "address",
            },
        ],
        name: "ProviderRegistryUpdated",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "contract IResourcePriceAdaptor",
                name: "resourcePriceAdaptor",
                type: "address",
            },
        ],
        name: "ResourcePriceAdaptorUpdated",
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
        inputs: [],
        name: "ARStorageController",
        outputs: [
            {
                internalType: "contract INormalResourceController",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "BandwidthController",
        outputs: [
            {
                internalType: "contract INormalResourceController",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "Billing",
        outputs: [
            {
                internalType: "contract IBilling",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "BuildingTimeController",
        outputs: [
            {
                internalType: "contract INormalResourceController",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "DstChainPayment",
        outputs: [
            {
                internalType: "contract IDstChainPayment",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "FundPool",
        outputs: [
            {
                internalType: "contract IFundPool",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "Governance",
        outputs: [
            {
                internalType: "contract IGovernance",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "IPFSStorageController",
        outputs: [
            {
                internalType: "contract IIPFSStorageController",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "MessageReceiver",
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
        name: "ProviderController",
        outputs: [
            {
                internalType: "contract IProviderController",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "ProviderRegistry",
        outputs: [
            {
                internalType: "contract IProviderRegistry",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "ResourcePriceAdaptor",
        outputs: [
            {
                internalType: "contract IResourcePriceAdaptor",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "Token",
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
                name: "owner",
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
        inputs: [],
        name: "renounceOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "contract INormalResourceController",
                name: "_arStorageController",
                type: "address",
            },
        ],
        name: "setARStorageController",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "contract INormalResourceController",
                name: "_bandwidthController",
                type: "address",
            },
        ],
        name: "setBandwidthController",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "contract IBilling",
                name: "_billing",
                type: "address",
            },
        ],
        name: "setBilling",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "contract INormalResourceController",
                name: "_buildingTimeController",
                type: "address",
            },
        ],
        name: "setBuildingTimeController",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "contract IDstChainPayment",
                name: "_dstChainPayment",
                type: "address",
            },
        ],
        name: "setDstChainPayment",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "contract IFundPool",
                name: "_pool",
                type: "address",
            },
        ],
        name: "setFundPool",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "contract IGovernance",
                name: "_governance",
                type: "address",
            },
        ],
        name: "setGovernance",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "contract IIPFSStorageController",
                name: "_ipfsStorageController",
                type: "address",
            },
        ],
        name: "setIPFSStorageController",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_messageReceiver",
                type: "address",
            },
        ],
        name: "setMessageReceiver",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "contract IProviderController",
                name: "_providerController",
                type: "address",
            },
        ],
        name: "setProviderController",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "contract IProviderRegistry",
                name: "_providerRegistry",
                type: "address",
            },
        ],
        name: "setProviderRegistry",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "contract IResourcePriceAdaptor",
                name: "_resourcePriceAdaptor",
                type: "address",
            },
        ],
        name: "setResourcePriceAdaptor",
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
var _bytecode = "0x60806040523480156200001157600080fd5b50600054610100900460ff1615808015620000335750600054600160ff909116105b8062000063575062000050306200010460201b62000b891760201c565b15801562000063575060005460ff166001145b6200008b5760405162461bcd60e51b8152600401620000829062000113565b60405180910390fd5b6000805460ff191660011790558015620000af576000805461ff0019166101001790555b8015620000fd576000805461ff00191690556040517f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb384740249890620000f49060019062000189565b60405180910390a15b5062000199565b6001600160a01b03163b151590565b602080825281016200016681602e81527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160208201526d191e481a5b9a5d1a585b1a5e995960921b604082015260600190565b92915050565b600060ff821662000166565b62000183816200016c565b82525050565b6020810162000166828462000178565b610e9380620001a96000396000f3fe608060405234801561001057600080fd5b50600436106101da5760003560e01c8063914fd2c311610104578063c4d66de8116100a2578063ed1f63d311610071578063ed1f63d3146103e5578063f2fde38b146103f8578063f760660e1461040b578063f931ca561461041e57600080fd5b8063c4d66de814610399578063e20ce6eb146103ac578063e70b7acb146103bf578063e8437249146103d257600080fd5b8063a2d2f2db116100de578063a2d2f2db1461034d578063a5a3f6c814610360578063ab033ea914610373578063c24126761461038657600080fd5b8063914fd2c3146103145780639453911214610327578063a1c841ca1461033a57600080fd5b8063429aafd91161017c578063715018a61161014b578063715018a6146102d5578063740e8061146102dd5780637a7fa753146102f05780638da5cb5b1461030357600080fd5b8063429aafd9146102895780634540a85b1461029c57806364f401ab146102af5780636ebdff2c146102c257600080fd5b8063144fa6d7116101b8578063144fa6d71461023057806322b31aba1461024357806337187fc3146102635780633b8ccfb11461027657600080fd5b80630251d6c3146101df5780630db81c35146101f45780630efdf9ac14610207575b600080fd5b6101f26101ed366004610c51565b610431565b005b6101f2610202366004610c51565b6104be565b60655461021a906001600160a01b031681565b6040516102279190610c89565b60405180910390f35b6101f261023e366004610c51565b610537565b606a54610256906001600160a01b031681565b6040516102279190610cc7565b606e54610256906001600160a01b031681565b6101f2610284366004610ce9565b6105b0565b6101f2610297366004610c51565b610629565b6101f26102aa366004610c51565b6106a2565b6101f26102bd366004610c51565b61071b565b6101f26102d0366004610c51565b610794565b6101f261080d565b606d54610256906001600160a01b031681565b6101f26102fe366004610c51565b610821565b6033546001600160a01b031661021a565b6101f2610322366004610c51565b61089a565b606654610256906001600160a01b031681565b606854610256906001600160a01b031681565b606c54610256906001600160a01b031681565b606754610256906001600160a01b031681565b6101f2610381366004610c51565b610913565b606954610256906001600160a01b031681565b6101f26103a7366004610ce9565b61098c565b607054610256906001600160a01b031681565b607154610256906001600160a01b031681565b6101f26103e0366004610c51565b610a5d565b606f54610256906001600160a01b031681565b6101f2610406366004610ce9565b610ad6565b6101f2610419366004610c51565b610b10565b606b54610256906001600160a01b031681565b610439610b98565b6001600160a01b0381166104685760405162461bcd60e51b815260040161045f90610d38565b60405180910390fd5b606e80546001600160a01b0319166001600160a01b0383161790556040517fefc72b6a1e0750c490adba6e2fad3861ed80249e7e9db7fa88133536978e1618906104b3908390610cc7565b60405180910390a150565b6104c6610b98565b6001600160a01b0381166104ec5760405162461bcd60e51b815260040161045f90610d38565b607080546001600160a01b0319166001600160a01b0383161790556040517fc5d588a42a81fee76e7e80a4ef88ac097d4b28eecfd9ac79629ae06eb3eae4b8906104b3908390610cc7565b61053f610b98565b6001600160a01b0381166105655760405162461bcd60e51b815260040161045f90610d38565b606980546001600160a01b0319166001600160a01b0383161790556040517f5ba6b30cd4b2f9e9e67f4feb9b9df10d5da3b057598e6901b217b7d590345e30906104b3908390610cc7565b6105b8610b98565b6001600160a01b0381166105de5760405162461bcd60e51b815260040161045f90610d38565b606580546001600160a01b0319166001600160a01b0383161790556040517fafe9b28ca24a54df8c44769c685f7b92824aae021cdfcaa4719d493571a23c4c906104b3908390610c89565b610631610b98565b6001600160a01b0381166106575760405162461bcd60e51b815260040161045f90610d38565b606f80546001600160a01b0319166001600160a01b0383161790556040517ff2071e1b38ab3c561fb5d090a912ad00d911946da5f417b4eac46024a2f6ed60906104b3908390610cc7565b6106aa610b98565b6001600160a01b0381166106d05760405162461bcd60e51b815260040161045f90610d38565b606d80546001600160a01b0319166001600160a01b0383161790556040517f7b091d9397a2f75213edeec1728b27a9d863f0f8aafb62fce0f1154f48f110f8906104b3908390610cc7565b610723610b98565b6001600160a01b0381166107495760405162461bcd60e51b815260040161045f90610d38565b606880546001600160a01b0319166001600160a01b0383161790556040517f7877ecbc56deb4477526760cc3ac4edd24b62cb61fdcb7d768432dbe4b1c9e48906104b3908390610cc7565b61079c610b98565b6001600160a01b0381166107c25760405162461bcd60e51b815260040161045f90610d38565b607180546001600160a01b0319166001600160a01b0383161790556040517f3d4983d02f8bc19207842d9d88346943f300d7737b764cead01f10f3b9d23147906104b3908390610cc7565b610815610b98565b61081f6000610bc2565b565b610829610b98565b6001600160a01b03811661084f5760405162461bcd60e51b815260040161045f90610d38565b606b80546001600160a01b0319166001600160a01b0383161790556040517f100702071f8eb4f459f5f9dcf12bba9b3aeafa0eca6a018364f645558d792c37906104b3908390610cc7565b6108a2610b98565b6001600160a01b0381166108c85760405162461bcd60e51b815260040161045f90610d38565b606c80546001600160a01b0319166001600160a01b0383161790556040517f6a7e09ebc58179cd1c17c89209474e58d29e43b1bf78dd57f896e7be983220eb906104b3908390610cc7565b61091b610b98565b6001600160a01b0381166109415760405162461bcd60e51b815260040161045f90610d38565b606680546001600160a01b0319166001600160a01b0383161790556040517f9d3e522e1e47a2f6009739342b9cc7b252a1888154e843ab55ee1c81745795ab906104b3908390610cc7565b600054610100900460ff16158080156109ac5750600054600160ff909116105b806109c65750303b1580156109c6575060005460ff166001145b6109e25760405162461bcd60e51b815260040161045f90610d96565b6000805460ff191660011790558015610a05576000805461ff0019166101001790555b610a0e82610bc2565b8015610a59576000805461ff00191690556040517f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb384740249890610a5090600190610dba565b60405180910390a15b5050565b610a65610b98565b6001600160a01b038116610a8b5760405162461bcd60e51b815260040161045f90610d38565b606a80546001600160a01b0319166001600160a01b0383161790556040517feb1b948f6c63784a1d91e42dd967c49aae87b1db36d3107e9b913963ae7cd039906104b3908390610cc7565b610ade610b98565b6001600160a01b038116610b045760405162461bcd60e51b815260040161045f90610e0b565b610b0d81610bc2565b50565b610b18610b98565b6001600160a01b038116610b3e5760405162461bcd60e51b815260040161045f90610d38565b606780546001600160a01b0319166001600160a01b0383161790556040517fb8f8a6768be726978fef2f5342ee7b1d0eead3b5cbb0c5d55c68f56271ca0eeb906104b3908390610cc7565b6001600160a01b03163b151590565b6033546001600160a01b0316331461081f5760405162461bcd60e51b815260040161045f90610e4d565b603380546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b60006001600160a01b0382165b92915050565b6000610c2182610c14565b610c3b81610c27565b8114610b0d57600080fd5b8035610c2181610c32565b600060208284031215610c6657610c66600080fd5b6000610c728484610c46565b949350505050565b610c8381610c14565b82525050565b60208101610c218284610c7a565b60006001600160a01b038216610c21565b6000610c2182610c97565b6000610c2182610ca8565b610c8381610cb3565b60208101610c218284610cbe565b610c3b81610c14565b8035610c2181610cd5565b600060208284031215610cfe57610cfe600080fd5b6000610c728484610cde565b6014815260006020820173526f757465723a207a65726f206164647265737360601b815291505b5060200190565b60208082528101610c2181610d0a565b602e81526000602082017f496e697469616c697a61626c653a20636f6e747261637420697320616c72656181526d191e481a5b9a5d1a585b1a5e995960921b602082015291505b5060400190565b60208082528101610c2181610d48565b600060ff8216610c21565b610c8381610da6565b60208101610c218284610db1565b602681526000602082017f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206181526564647265737360d01b60208201529150610d8f565b60208082528101610c2181610dc8565b60208082527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657291019081526000610d31565b60208082528101610c2181610e1b56fea26469706673582212208c31f29b4195d20da35ea6a1df44f9baa58cd0cc7c2a86d6023ea255db7036be64736f6c63430008090033";
var Router__factory = /** @class */ (function (_super) {
    __extends(Router__factory, _super);
    function Router__factory() {
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
    Router__factory.prototype.deploy = function (overrides) {
        return _super.prototype.deploy.call(this, overrides || {});
    };
    Router__factory.prototype.getDeployTransaction = function (overrides) {
        return _super.prototype.getDeployTransaction.call(this, overrides || {});
    };
    Router__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    Router__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    Router__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    Router__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    Router__factory.bytecode = _bytecode;
    Router__factory.abi = _abi;
    return Router__factory;
}(ethers_1.ContractFactory));
exports.Router__factory = Router__factory;
