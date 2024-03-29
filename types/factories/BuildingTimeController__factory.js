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
exports.BuildingTimeController__factory = void 0;
var ethers_1 = require("ethers");
var _abi = [
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
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "AccountAllocated",
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
                name: "provider",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "ProviderAllocated",
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
                name: "amount",
                type: "uint256",
            },
        ],
        name: "allocateProvider",
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
        name: "balanceOf",
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
                internalType: "bytes32",
                name: "account",
                type: "bytes32",
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
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
            {
                internalType: "bytes32",
                name: "account",
                type: "bytes32",
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "paymentAllocate",
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
        ],
        name: "providerBalanceOf",
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
var _bytecode = "0x60806040523480156200001157600080fd5b5060006200002060016200008e565b9050801562000039576000805461ff0019166101001790555b801562000087576000805461ff00191690556040517f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb3847402498906200007e9060019062000168565b60405180910390a15b50620001cb565b60008054610100900460ff1615620000f7578160ff166001148015620000c75750620000c5306200013b60201b6200051b1760201c565b155b620000ef5760405162461bcd60e51b8152600401620000e69062000178565b60405180910390fd5b506000919050565b60005460ff808416911610620001215760405162461bcd60e51b8152600401620000e69062000178565b506000805460ff191660ff92909216919091179055600190565b6001600160a01b03163b151590565b600060ff82165b92915050565b62000162816200014a565b82525050565b6020810162000151828462000157565b602080825281016200015181602e81527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160208201526d191e481a5b9a5d1a585b1a5e995960921b604082015260600190565b610dfe80620001db6000396000f3fe608060405234801561001057600080fd5b506004361061009e5760003560e01c80638da5cb5b116100665780638da5cb5b1461010f578063ce34d64f14610128578063da5001a514610151578063f2fde38b14610164578063f887ea401461017757600080fd5b80630de48287146100a3578063196e92e0146100b8578063485cc955146100cb5780634d30b6be146100de578063715018a614610107575b600080fd5b6100b66100b136600461088b565b61019d565b005b6100b66100c63660046108db565b610268565b6100b66100d9366004610937565b610328565b6100f16100ec3660046108db565b6103ad565b6040516100fe9190610972565b60405180910390f35b6100b66103d8565b6033546001600160a01b03166040516100fe9190610989565b6100f1610136366004610997565b6001600160a01b031660009081526065602052604090205490565b6100b661015f36600461088b565b61040e565b6100b6610172366004610997565b6104bf565b600054610190906201000090046001600160a01b031681565b6040516100fe91906109d4565b60008060029054906101000a90046001600160a01b03166001600160a01b031663ed1f63d36040518163ffffffff1660e01b815260040160206040518083038186803b1580156101ec57600080fd5b505afa158015610200573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061022491906109ed565b9050336001600160a01b038216146102575760405162461bcd60e51b815260040161024e90610a5c565b60405180910390fd5b61026284848461052a565b50505050565b60008060029054906101000a90046001600160a01b03166001600160a01b031663945391126040518163ffffffff1660e01b815260040160206040518083038186803b1580156102b757600080fd5b505afa1580156102cb573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102ef91906109ed565b9050336001600160a01b038216146103195760405162461bcd60e51b815260040161024e90610ab4565b6103238383610621565b505050565b6000610334600161069e565b9050801561034c576000805461ff0019166101001790555b61035583610726565b61035e82610778565b8015610323576000805461ff00191690556040517f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb3847402498906103a090600190610ad8565b60405180910390a1505050565b6001600160a01b03821660009081526066602090815260408083208484529091529020545b92915050565b6033546001600160a01b031633146104025760405162461bcd60e51b815260040161024e90610b1b565b61040c6000610726565b565b60008060029054906101000a90046001600160a01b03166001600160a01b031663a1c841ca6040518163ffffffff1660e01b815260040160206040518083038186803b15801561045d57600080fd5b505afa158015610471573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061049591906109ed565b9050336001600160a01b038216146102575760405162461bcd60e51b815260040161024e90610b7c565b6033546001600160a01b031633146104e95760405162461bcd60e51b815260040161024e90610b1b565b6001600160a01b03811661050f5760405162461bcd60e51b815260040161024e90610bcf565b61051881610726565b50565b6001600160a01b03163b151590565b8061054a846001600160a01b031660009081526065602052604090205490565b10156105685760405162461bcd60e51b815260040161024e90610c39565b6001600160a01b038316600090815260666020908152604080832085845290915290205461059690826107a8565b6001600160a01b0384166000818152606660209081526040808320878452825280832094909455918152606590915220546105d190826107bb565b6001600160a01b0384166000908152606560205260409081902091909155517f84f7b6e1bef5a2f139bd6f5f5263fb145907512577fd87ce95e9ed2af8e714f0906103a090859085908590610c49565b6001600160a01b03821660009081526065602052604090205461064490826107a8565b6001600160a01b0383166000908152606560205260409081902091909155517f7827a9c29c2e1d4a1b9b63b8579fad78661282e2c40b184d23b08ce28d8a532a906106929084908490610c71565b60405180910390a15050565b60008054610100900460ff16156106e5578160ff1660011480156106c15750303b155b6106dd5760405162461bcd60e51b815260040161024e90610cd7565b506000919050565b60005460ff80841691161061070c5760405162461bcd60e51b815260040161024e90610cd7565b506000805460ff191660ff92909216919091179055600190565b603380546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b600054610100900460ff1661079f5760405162461bcd60e51b815260040161024e90610d2f565b610518816107c7565b60006107b48284610d55565b9392505050565b60006107b48284610d6d565b6001600160a01b0381166107ed5760405162461bcd60e51b815260040161024e90610db8565b6000805462010000600160b01b031916620100006001600160a01b038416021790556040517f7aed1d3e8155a07ccf395e44ea3109a0e2d6c9b29bbbe9f142d9790596f4dc809061083f9083906109d4565b60405180910390a150565b60006001600160a01b0382166103d2565b6108648161084a565b811461051857600080fd5b80356103d28161085b565b80610864565b80356103d28161087a565b6000806000606084860312156108a3576108a3600080fd5b60006108af868661086f565b93505060206108c086828701610880565b92505060406108d186828701610880565b9150509250925092565b600080604083850312156108f1576108f1600080fd5b60006108fd858561086f565b925050602061090e85828601610880565b9150509250929050565b60006103d28261084a565b61086481610918565b80356103d281610923565b6000806040838503121561094d5761094d600080fd5b6000610959858561086f565b925050602061090e8582860161092c565b805b82525050565b602081016103d2828461096a565b61096c8161084a565b602081016103d28284610980565b6000602082840312156109ac576109ac600080fd5b60006109b8848461086f565b949350505050565b60006103d282610918565b61096c816109c0565b602081016103d282846109cb565b80516103d281610923565b600060208284031215610a0257610a02600080fd5b60006109b884846109e2565b602e81526000602082017f526f75746572577261707065723a2063616c6c6572206973206e6f742064737481526d0818da185a5b881c185e5b595b9d60921b602082015291505b5060400190565b602080825281016103d281610a0e565b602b81526000602082017f526f75746572577261707065723a2063616c6c6572206973206e6f742074686581526a20676f7665726e616e636560a81b60208201529150610a55565b602080825281016103d281610a6c565b600060ff82166103d2565b61096c81610ac4565b602081016103d28284610acf565b60208082527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572910190815260005b5060200190565b602080825281016103d281610ae6565b603481526000602082017f526f75746572577261707065723a2063616c6c6572206973206e6f742074686581527310383937bb34b232b91031b7b73a3937b63632b960611b60208201529150610a55565b602080825281016103d281610b2b565b602681526000602082017f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206181526564647265737360d01b60208201529150610a55565b602080825281016103d281610b8c565b603781526000602082017f4e6f726d616c5265736f75726365436f6e74726f6c6c65723a20696e7375666681527f696369656e742070726f76696465722062616c616e636500000000000000000060208201529150610a55565b602080825281016103d281610bdf565b60608101610c578286610980565b610c64602083018561096a565b6109b8604083018461096a565b60408101610c7f8285610980565b6107b4602083018461096a565b602e81526000602082017f496e697469616c697a61626c653a20636f6e747261637420697320616c72656181526d191e481a5b9a5d1a585b1a5e995960921b60208201529150610a55565b602080825281016103d281610c8c565b602b81526000602082017f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206981526a6e697469616c697a696e6760a81b60208201529150610a55565b602080825281016103d281610ce7565b634e487b7160e01b600052601160045260246000fd5b60008219821115610d6857610d68610d3f565b500190565b600082821015610d7f57610d7f610d3f565b500390565b601b81526000602082017f526f75746572577261707065723a207a65726f2061646472657373000000000081529150610b14565b602080825281016103d281610d8456fea264697066735822122057251ab34c927f3044f6d0836acc0041cb6be9906446a37a6db7f816c117d96964736f6c63430008090033";
var BuildingTimeController__factory = /** @class */ (function (_super) {
    __extends(BuildingTimeController__factory, _super);
    function BuildingTimeController__factory() {
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
    BuildingTimeController__factory.prototype.deploy = function (overrides) {
        return _super.prototype.deploy.call(this, overrides || {});
    };
    BuildingTimeController__factory.prototype.getDeployTransaction = function (overrides) {
        return _super.prototype.getDeployTransaction.call(this, overrides || {});
    };
    BuildingTimeController__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    BuildingTimeController__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    BuildingTimeController__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    BuildingTimeController__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    BuildingTimeController__factory.bytecode = _bytecode;
    BuildingTimeController__factory.abi = _abi;
    return BuildingTimeController__factory;
}(ethers_1.ContractFactory));
exports.BuildingTimeController__factory = BuildingTimeController__factory;
