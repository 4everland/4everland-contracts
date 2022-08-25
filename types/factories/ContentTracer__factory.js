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
exports.ContentTracer__factory = void 0;
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
                internalType: "string",
                name: "content",
                type: "string",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "size",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "count",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "expiration",
                type: "uint256",
            },
        ],
        name: "Insert",
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
                indexed: false,
                internalType: "string",
                name: "content",
                type: "string",
            },
        ],
        name: "Remove",
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
        inputs: [
            {
                internalType: "bytes32",
                name: "account",
                type: "bytes32",
            },
            {
                internalType: "string",
                name: "content",
                type: "string",
            },
            {
                internalType: "uint256",
                name: "size",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "count",
                type: "uint256",
            },
        ],
        name: "insert",
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
                internalType: "string[]",
                name: "contents",
                type: "string[]",
            },
            {
                internalType: "uint256[]",
                name: "sizes",
                type: "uint256[]",
            },
            {
                internalType: "uint256[]",
                name: "counts",
                type: "uint256[]",
            },
        ],
        name: "insertMult",
        outputs: [],
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
            {
                internalType: "bytes32",
                name: "",
                type: "bytes32",
            },
            {
                internalType: "string",
                name: "",
                type: "string",
            },
        ],
        name: "metas",
        outputs: [
            {
                internalType: "uint256",
                name: "size",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "count",
                type: "uint256",
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
                internalType: "bytes32",
                name: "account",
                type: "bytes32",
            },
            {
                internalType: "string",
                name: "content",
                type: "string",
            },
        ],
        name: "remove",
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
                internalType: "string[]",
                name: "contents",
                type: "string[]",
            },
        ],
        name: "removeMult",
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
var _bytecode = "0x608060405234801561001057600080fd5b506117f4806100206000396000f3fe608060405234801561001057600080fd5b506004361061009e5760003560e01c8063db17012511610066578063db17012514610150578063dbfd473714610163578063de47238c14610176578063f2fde38b14610189578063f887ea401461019c57600080fd5b8063485cc955146100a3578063715018a6146100b857806389512e17146100c05780638da5cb5b14610124578063b840f9211461013d575b600080fd5b6100b66100b1366004610d05565b6101c2565b005b6100b6610248565b61010d6100ce366004610e4f565b60656020908152600093845260408085208252928452919092208251808401830180519281529083019390920192909220919052805460019091015482565b60405161011b929190610ec1565b60405180910390f35b6033546001600160a01b031660405161011b9190610eec565b6100b661014b3660046110a2565b610287565b6100b661015e36600461116d565b6104a3565b6100b66101713660046111ba565b6105d0565b6100b661018436600461122c565b610706565b6100b6610197366004611292565b6108aa565b6000546101b5906201000090046001600160a01b031681565b60405161011b91906112e3565b60006101ce6001610906565b905080156101e6576000805461ff0019166101001790555b6101ef83610993565b6101f8826109e5565b8015610243576000805461ff00191690556040517f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989061023a90600190611305565b60405180910390a15b505050565b6033546001600160a01b0316331461027b5760405162461bcd60e51b815260040161027290611348565b60405180910390fd5b6102856000610993565b565b60008060029054906101000a90046001600160a01b03166001600160a01b031663a5a3f6c86040518163ffffffff1660e01b815260040160206040518083038186803b1580156102d657600080fd5b505afa1580156102ea573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061030e9190611363565b604051636b074a0760e01b81529091506001600160a01b03821690636b074a079061033d903390600401610eec565b60206040518083038186803b15801561035557600080fd5b505afa158015610369573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061038d9190611397565b6103a95760405162461bcd60e51b815260040161027290611401565b83518551146103ca5760405162461bcd60e51b815260040161027290611456565b82518551146103eb5760405162461bcd60e51b815260040161027290611456565b815185511461040c5760405162461bcd60e51b815260040161027290611456565b60005b855181101561049b576104893387838151811061042e5761042e611466565b602002602001015187848151811061044857610448611466565b602002602001015187858151811061046257610462611466565b602002602001015187868151811061047c5761047c611466565b6020026020010151610a15565b8061049381611492565b91505061040f565b505050505050565b60008060029054906101000a90046001600160a01b03166001600160a01b031663a5a3f6c86040518163ffffffff1660e01b815260040160206040518083038186803b1580156104f257600080fd5b505afa158015610506573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061052a9190611363565b604051636b074a0760e01b81529091506001600160a01b03821690636b074a0790610559903390600401610eec565b60206040518083038186803b15801561057157600080fd5b505afa158015610585573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105a99190611397565b6105c55760405162461bcd60e51b815260040161027290611401565b610243338484610bfe565b60008060029054906101000a90046001600160a01b03166001600160a01b031663a5a3f6c86040518163ffffffff1660e01b815260040160206040518083038186803b15801561061f57600080fd5b505afa158015610633573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106579190611363565b604051636b074a0760e01b81529091506001600160a01b03821690636b074a0790610686903390600401610eec565b60206040518083038186803b15801561069e57600080fd5b505afa1580156106b2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106d69190611397565b6106f25760405162461bcd60e51b815260040161027290611401565b6106ff3386868686610a15565b5050505050565b60008060029054906101000a90046001600160a01b03166001600160a01b031663a5a3f6c86040518163ffffffff1660e01b815260040160206040518083038186803b15801561075557600080fd5b505afa158015610769573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061078d9190611363565b604051636b074a0760e01b81529091506001600160a01b03821690636b074a07906107bc903390600401610eec565b60206040518083038186803b1580156107d457600080fd5b505afa1580156107e8573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061080c9190611397565b6108285760405162461bcd60e51b815260040161027290611401565b81518351146108495760405162461bcd60e51b8152600401610272906114f1565b60005b83518110156108a4576108923385838151811061086b5761086b611466565b602002602001015185848151811061088557610885611466565b6020026020010151610bfe565b8061089c81611492565b91505061084c565b50505050565b6033546001600160a01b031633146108d45760405162461bcd60e51b815260040161027290611348565b6001600160a01b0381166108fa5760405162461bcd60e51b815260040161027290611544565b61090381610993565b50565b60008054610100900460ff161561094d578160ff1660011480156109295750303b155b6109455760405162461bcd60e51b81526004016102729061159f565b506000919050565b60005460ff8084169116106109745760405162461bcd60e51b81526004016102729061159f565b506000805460ff191660ff92909216919091179055600190565b919050565b603380546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b600054610100900460ff16610a0c5760405162461bcd60e51b8152600401610272906115f7565b61090381610c31565b60008060029054906101000a90046001600160a01b03166001600160a01b031663740e80616040518163ffffffff1660e01b815260040160206040518083038186803b158015610a6457600080fd5b505afa158015610a78573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a9c9190611363565b60405162f304db60e01b81529091506001600160a01b0382169062f304db90610acb9089908990600401611607565b60206040518083038186803b158015610ae357600080fd5b505afa158015610af7573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b1b9190611397565b15610b385760405162461bcd60e51b815260040161027290611649565b7fd8be615b569e10ab81c7e1ad876540845a9ad057e7bf224af878656a43ccbae78686868686866001600160a01b03166328b214a48d8d6040518363ffffffff1660e01b8152600401610b8c929190611607565b60206040518083038186803b158015610ba457600080fd5b505afa158015610bb8573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bdc9190611664565b604051610bee969594939291906116e3565b60405180910390a1505050505050565b7f20b2a0e9bd2cadc08b645e5d8c204c6d86d3c23817b100e0346846e77a88d7c983838360405161023a93929190611744565b6001600160a01b038116610c575760405162461bcd60e51b8152600401610272906117ae565b6000805462010000600160b01b031916620100006001600160a01b038416021790556040517f7aed1d3e8155a07ccf395e44ea3109a0e2d6c9b29bbbe9f142d9790596f4dc8090610ca99083906112e3565b60405180910390a150565b60006001600160a01b0382165b92915050565b610cd081610cb4565b811461090357600080fd5b8035610cc181610cc7565b6000610cc182610cb4565b610cd081610ce6565b8035610cc181610cf1565b60008060408385031215610d1b57610d1b600080fd5b6000610d278585610cdb565b9250506020610d3885828601610cfa565b9150509250929050565b80610cd0565b8035610cc181610d42565b634e487b7160e01b600052604160045260246000fd5b601f19601f83011681018181106001600160401b0382111715610d8e57610d8e610d53565b6040525050565b6000610da060405190565b905061098e8282610d69565b60006001600160401b03821115610dc557610dc5610d53565b601f19601f83011660200192915050565b82818337506000910152565b6000610df5610df084610dac565b610d95565b905082815260208101848484011115610e1057610e10600080fd5b610e1b848285610dd6565b509392505050565b600082601f830112610e3757610e37600080fd5b8135610e47848260208601610de2565b949350505050565b600080600060608486031215610e6757610e67600080fd5b6000610e738686610cdb565b9350506020610e8486828701610d48565b92505060408401356001600160401b03811115610ea357610ea3600080fd5b610eaf86828701610e23565b9150509250925092565b805b82525050565b60408101610ecf8285610eb9565b610edc6020830184610eb9565b9392505050565b610ebb81610cb4565b60208101610cc18284610ee3565b60006001600160401b03821115610f1357610f13610d53565b5060209081020190565b6000610f2b610df084610efa565b83815290506020808201908402830185811115610f4a57610f4a600080fd5b835b81811015610f6e5780610f5f8882610d48565b84525060209283019201610f4c565b5050509392505050565b600082601f830112610f8c57610f8c600080fd5b8135610e47848260208601610f1d565b6000610faa610df084610efa565b83815290506020808201908402830185811115610fc957610fc9600080fd5b835b81811015610f6e5780356001600160401b03811115610fec57610fec600080fd5b808601610ff98982610e23565b8552505060209283019201610fcb565b600082601f83011261101d5761101d600080fd5b8135610e47848260208601610f9c565b600061103b610df084610efa565b8381529050602080820190840283018581111561105a5761105a600080fd5b835b81811015610f6e578061106f8882610d48565b8452506020928301920161105c565b600082601f83011261109257611092600080fd5b8135610e4784826020860161102d565b600080600080608085870312156110bb576110bb600080fd5b84356001600160401b038111156110d4576110d4600080fd5b6110e087828801610f78565b94505060208501356001600160401b038111156110ff576110ff600080fd5b61110b87828801611009565b93505060408501356001600160401b0381111561112a5761112a600080fd5b6111368782880161107e565b92505060608501356001600160401b0381111561115557611155600080fd5b6111618782880161107e565b91505092959194509250565b6000806040838503121561118357611183600080fd5b600061118f8585610d48565b92505060208301356001600160401b038111156111ae576111ae600080fd5b610d3885828601610e23565b600080600080608085870312156111d3576111d3600080fd5b60006111df8787610d48565b94505060208501356001600160401b038111156111fe576111fe600080fd5b61120a87828801610e23565b935050604061121b87828801610d48565b925050606061116187828801610d48565b6000806040838503121561124257611242600080fd5b82356001600160401b0381111561125b5761125b600080fd5b61126785828601610f78565b92505060208301356001600160401b0381111561128657611286600080fd5b610d3885828601611009565b6000602082840312156112a7576112a7600080fd5b6000610e478484610cdb565b60006001600160a01b038216610cc1565b6000610cc1826112b3565b6000610cc1826112c4565b610ebb816112cf565b60208101610cc182846112da565b600060ff8216610cc1565b610ebb816112f1565b60208101610cc182846112fc565b60208082527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572910190815260005b5060200190565b60208082528101610cc181611313565b8051610cc181610cf1565b60006020828403121561137857611378600080fd5b6000610e478484611358565b801515610cd0565b8051610cc181611384565b6000602082840312156113ac576113ac600080fd5b6000610e47848461138c565b602981526000602082017f526f75746572577261707065723a2063616c6c6572206973206e6f742074686581526810383937bb34b232b960b91b602082015291505b5060400190565b60208082528101610cc1816113b8565b602881526000602082017f436f6e74656e745472616365723a20496e76616c696420706172616d65746572815267103632b733ba341760c11b602082015291506113fa565b60208082528101610cc181611411565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b60006000198214156114a6576114a661147c565b5060010190565b602781526000602082017f436f6e74656e745472616365723a20496e76616c696420706172616d65746572815266040d8cadccee8d60cb1b602082015291506113fa565b60208082528101610cc1816114ad565b602681526000602082017f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206181526564647265737360d01b602082015291506113fa565b60208082528101610cc181611501565b602e81526000602082017f496e697469616c697a61626c653a20636f6e747261637420697320616c72656181526d191e481a5b9a5d1a585b1a5e995960921b602082015291506113fa565b60208082528101610cc181611554565b602b81526000602082017f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206981526a6e697469616c697a696e6760a81b602082015291506113fa565b60208082528101610cc1816115af565b60408101610ecf8285610ee3565b601e81526000602082017f436f6e74656e745472616365723a206163636f756e742065787069726564000081529150611341565b60208082528101610cc181611615565b8051610cc181610d42565b60006020828403121561167957611679600080fd5b6000610e478484611659565b60005b838110156116a0578181015183820152602001611688565b838111156108a45750506000910152565b60006116bb825190565b8084526020840193506116d2818560208601611685565b601f01601f19169290920192915050565b60c081016116f18289610ee3565b6116fe6020830188610eb9565b818103604083015261171081876116b1565b905061171f6060830186610eb9565b61172c6080830185610eb9565b61173960a0830184610eb9565b979650505050505050565b606081016117528286610ee3565b61175f6020830185610eb9565b818103604083015261177181846116b1565b95945050505050565b601b81526000602082017f526f75746572577261707065723a207a65726f2061646472657373000000000081529150611341565b60208082528101610cc18161177a56fea26469706673582212203b7b9e9dc9e0c7f3d582c0c7e2efeb898f985704ed178fa278a76de8b27ba91c64736f6c63430008090033";
var ContentTracer__factory = /** @class */ (function (_super) {
    __extends(ContentTracer__factory, _super);
    function ContentTracer__factory() {
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
    ContentTracer__factory.prototype.deploy = function (overrides) {
        return _super.prototype.deploy.call(this, overrides || {});
    };
    ContentTracer__factory.prototype.getDeployTransaction = function (overrides) {
        return _super.prototype.getDeployTransaction.call(this, overrides || {});
    };
    ContentTracer__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    ContentTracer__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    ContentTracer__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    ContentTracer__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    ContentTracer__factory.bytecode = _bytecode;
    ContentTracer__factory.abi = _abi;
    return ContentTracer__factory;
}(ethers_1.ContractFactory));
exports.ContentTracer__factory = ContentTracer__factory;
