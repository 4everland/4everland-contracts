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
exports.Governance__factory = void 0;
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
                internalType: "address",
                name: "provider",
                type: "address",
            },
        ],
        name: "GovernanceDrip",
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
        ],
        name: "addProvider",
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
        ],
        name: "removeProvider",
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
var _bytecode = "0x60806040523480156200001157600080fd5b50600054610100900460ff1615808015620000335750600054600160ff909116105b8062000063575062000050306200010460201b620009871760201c565b15801562000063575060005460ff166001145b6200008b5760405162461bcd60e51b8152600401620000829062000113565b60405180910390fd5b6000805460ff191660011790558015620000af576000805461ff0019166101001790555b8015620000fd576000805461ff00191690556040517f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb384740249890620000f49060019062000189565b60405180910390a15b5062000199565b6001600160a01b03163b151590565b602080825281016200016681602e81527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160208201526d191e481a5b9a5d1a585b1a5e995960921b604082015260600190565b92915050565b600060ff821662000166565b62000183816200016c565b82525050565b6020810162000166828462000178565b61136680620001a96000396000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c80638da5cb5b1161005b5780638da5cb5b146100d0578063b1e26220146100f2578063f2fde38b14610105578063f887ea401461011857600080fd5b806346e2577a1461008d578063485cc955146100a2578063715018a6146100b55780638a355a57146100bd575b600080fd5b6100a061009b366004610af2565b61013e565b005b6100a06100b0366004610b3a565b61022c565b6100a0610310565b6100a06100cb366004610af2565b610324565b6033546001600160a01b03166040516100e99190610b86565b60405180910390f35b6100a0610100366004610dbb565b6103dd565b6100a0610113366004610af2565b61094d565b600054610131906201000090046001600160a01b031681565b6040516100e99190610e39565b610146610996565b600060029054906101000a90046001600160a01b03166001600160a01b031663a5a3f6c86040518163ffffffff1660e01b815260040160206040518083038186803b15801561019457600080fd5b505afa1580156101a8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101cc9190610e52565b6001600160a01b03166346e2577a826040518263ffffffff1660e01b81526004016101f79190610b86565b600060405180830381600087803b15801561021157600080fd5b505af1158015610225573d6000803e3d6000fd5b5050505050565b600054610100900460ff161580801561024c5750600054600160ff909116105b806102665750303b158015610266575060005460ff166001145b61028b5760405162461bcd60e51b815260040161028290610ec1565b60405180910390fd5b6000805460ff1916600117905580156102ae576000805461ff0019166101001790555b6102b7836109c0565b6102c082610a12565b801561030b576000805461ff00191690556040517f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989061030290600190610ee5565b60405180910390a15b505050565b610318610996565b61032260006109c0565b565b61032c610996565b600060029054906101000a90046001600160a01b03166001600160a01b031663a5a3f6c86040518163ffffffff1660e01b815260040160206040518083038186803b15801561037a57600080fd5b505afa15801561038e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103b29190610e52565b6001600160a01b0316638a355a57826040518263ffffffff1660e01b81526004016101f79190610b86565b6103e5610996565b600060029054906101000a90046001600160a01b03166001600160a01b031663a5a3f6c86040518163ffffffff1660e01b815260040160206040518083038186803b15801561043357600080fd5b505afa158015610447573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061046b9190610e52565b6001600160a01b0316636b074a07836040518263ffffffff1660e01b81526004016104969190610b86565b60206040518083038186803b1580156104ae57600080fd5b505afa1580156104c2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104e69190610f06565b6105025760405162461bcd60e51b815260040161028290610f5c565b60008151116105235760405162461bcd60e51b815260040161028290610fa0565b60005b815181101561091157600082828151811061054357610543610fb0565b60209081029190910101518051909150600181600481111561056757610567610fc6565b141561069a578160200151516001146105925760405162461bcd60e51b81526004016102829061101b565b600060029054906101000a90046001600160a01b03166001600160a01b03166322b31aba6040518163ffffffff1660e01b815260040160206040518083038186803b1580156105e057600080fd5b505afa1580156105f4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106189190610e52565b6001600160a01b031663196e92e086846020015160008151811061063e5761063e610fb0565b60200260200101516040518363ffffffff1660e01b8152600401610663929190611031565b600060405180830381600087803b15801561067d57600080fd5b505af1158015610691573d6000803e3d6000fd5b505050506108fc565b60028160048111156106ae576106ae610fc6565b1415610727578160200151516001146106d95760405162461bcd60e51b81526004016102829061108e565b600060029054906101000a90046001600160a01b03166001600160a01b031663f931ca566040518163ffffffff1660e01b815260040160206040518083038186803b1580156105e057600080fd5b600381600481111561073b5761073b610fc6565b14156107b4578160200151516001146107665760405162461bcd60e51b8152600401610282906110da565b600060029054906101000a90046001600160a01b03166001600160a01b031663a2d2f2db6040518163ffffffff1660e01b815260040160206040518083038186803b1580156105e057600080fd5b60048160048111156107c8576107c8610fc6565b14156108e4578160200151516002146107f35760405162461bcd60e51b815260040161028290611128565b600060029054906101000a90046001600160a01b03166001600160a01b031663740e80616040518163ffffffff1660e01b815260040160206040518083038186803b15801561084157600080fd5b505afa158015610855573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108799190610e52565b6001600160a01b031663d8bbb1fe86846020015160008151811061089f5761089f610fb0565b602002602001015185602001516001815181106108be576108be610fb0565b60200260200101516040518463ffffffff1660e01b815260040161066393929190611138565b60405162461bcd60e51b81526004016102829061119e565b50508080610909906111c4565b915050610526565b507f63680b432e43eedc6998f23c9323ea32c11ab0b526103297d9958ff93f21e3b1826040516109419190610b86565b60405180910390a15050565b610955610996565b6001600160a01b03811661097b5760405162461bcd60e51b815260040161028290611222565b610984816109c0565b50565b6001600160a01b03163b151590565b6033546001600160a01b031633146103225760405162461bcd60e51b815260040161028290611264565b603380546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b600054610100900460ff16610a395760405162461bcd60e51b8152600401610282906112bc565b610984816001600160a01b038116610a635760405162461bcd60e51b815260040161028290611300565b6000805462010000600160b01b031916620100006001600160a01b038416021790556040517f7aed1d3e8155a07ccf395e44ea3109a0e2d6c9b29bbbe9f142d9790596f4dc8090610ab5908390610e39565b60405180910390a150565b60006001600160a01b0382165b92915050565b610adc81610ac0565b811461098457600080fd5b8035610acd81610ad3565b600060208284031215610b0757610b07600080fd5b6000610b138484610ae7565b949350505050565b6000610acd82610ac0565b610adc81610b1b565b8035610acd81610b26565b60008060408385031215610b5057610b50600080fd5b6000610b5c8585610ae7565b9250506020610b6d85828601610b2f565b9150509250929050565b610b8081610ac0565b82525050565b60208101610acd8284610b77565b634e487b7160e01b600052604160045260246000fd5b601f19601f830116810181811067ffffffffffffffff82111715610bd057610bd0610b94565b6040525050565b6000610be260405190565b9050610bee8282610baa565b919050565b600067ffffffffffffffff821115610c0d57610c0d610b94565b5060209081020190565b6005811061098457600080fd5b8035610acd81610c17565b80610adc565b8035610acd81610c2f565b6000610c53610c4e84610bf3565b610bd7565b83815290506020808201908402830185811115610c7257610c72600080fd5b835b81811015610c965780610c878882610c35565b84525060209283019201610c74565b5050509392505050565b600082601f830112610cb457610cb4600080fd5b8135610b13848260208601610c40565b600060408284031215610cd957610cd9600080fd5b610ce36040610bd7565b90506000610cf18484610c24565b825250602082013567ffffffffffffffff811115610d1157610d11600080fd5b610d1d84828501610ca0565b60208301525092915050565b6000610d37610c4e84610bf3565b83815290506020808201908402830185811115610d5657610d56600080fd5b835b81811015610c9657803567ffffffffffffffff811115610d7a57610d7a600080fd5b808601610d878982610cc4565b8552505060209283019201610d58565b600082601f830112610dab57610dab600080fd5b8135610b13848260208601610d29565b60008060408385031215610dd157610dd1600080fd5b6000610ddd8585610ae7565b925050602083013567ffffffffffffffff811115610dfd57610dfd600080fd5b610b6d85828601610d97565b60006001600160a01b038216610acd565b6000610acd82610e09565b6000610acd82610e1a565b610b8081610e25565b60208101610acd8284610e30565b8051610acd81610b26565b600060208284031215610e6757610e67600080fd5b6000610b138484610e47565b602e81526000602082017f496e697469616c697a61626c653a20636f6e747261637420697320616c72656181526d191e481a5b9a5d1a585b1a5e995960921b602082015291505b5060400190565b60208082528101610acd81610e73565b600060ff8216610acd565b610b8081610ed1565b60208101610acd8284610edc565b801515610adc565b8051610acd81610ef3565b600060208284031215610f1b57610f1b600080fd5b6000610b138484610efb565b60208082527f476f7665726e616e63653a206e6f6e6578697374656e742070726f7669646572910190815260005b5060200190565b60208082528101610acd81610f27565b601a81526000602082017f476f7665726e616e63653a20656d707479207061796c6f61647300000000000081529150610f55565b60208082528101610acd81610f6c565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052602160045260246000fd5b60348152600060208201600080516020611311833981519152815273746820666f72206275696c64696e672074696d6560601b60208201529150610eba565b60208082528101610acd81610fdc565b80610b80565b6040810161103f8285610b77565b61104c602083018461102b565b9392505050565b6030815260006020820160008051602061131183398151915281526f0e8d040ccdee440c4c2dcc8eed2c8e8d60831b60208201529150610eba565b60208082528101610acd81611053565b60318152600060208201600080516020611311833981519152815270746820666f722061722073746f7261676560781b60208201529150610eba565b60208082528101610acd8161109e565b60338152600060208201600080516020611311833981519152815272746820666f7220697066732073746f7261676560681b60208201529150610eba565b60208082528101610acd816110ea565b606081016111468286610b77565b611153602083018561102b565b610b13604083018461102b565b602181526000602082017f476f7665726e616e63653a20756e6b6e6f776e207265736f75726365207479708152606560f81b60208201529150610eba565b60208082528101610acd81611160565b634e487b7160e01b600052601160045260246000fd5b60006000198214156111d8576111d86111ae565b5060010190565b602681526000602082017f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206181526564647265737360d01b60208201529150610eba565b60208082528101610acd816111df565b60208082527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657291019081526000610f55565b60208082528101610acd81611232565b602b81526000602082017f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206981526a6e697469616c697a696e6760a81b60208201529150610eba565b60208082528101610acd81611274565b601b81526000602082017f526f75746572577261707065723a207a65726f2061646472657373000000000081529150610f55565b60208082528101610acd816112cc56fe476f7665726e616e63653a20696e76616c696420616d6f756e7473206c656e67a2646970667358221220e75a8ca63d1fb107078fc98b5e8aec1906f2fcff6dac0e69909d90ebdd88b09c64736f6c63430008090033";
var Governance__factory = /** @class */ (function (_super) {
    __extends(Governance__factory, _super);
    function Governance__factory() {
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
    Governance__factory.prototype.deploy = function (overrides) {
        return _super.prototype.deploy.call(this, overrides || {});
    };
    Governance__factory.prototype.getDeployTransaction = function (overrides) {
        return _super.prototype.getDeployTransaction.call(this, overrides || {});
    };
    Governance__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    Governance__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    Governance__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    Governance__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    Governance__factory.bytecode = _bytecode;
    Governance__factory.abi = _abi;
    return Governance__factory;
}(ethers_1.ContractFactory));
exports.Governance__factory = Governance__factory;
