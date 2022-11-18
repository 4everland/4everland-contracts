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
                internalType: "bytes32",
                name: "account",
                type: "bytes32",
            },
        ],
        name: "expireAt",
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
var _bytecode = "0x608060405234801561001057600080fd5b50611950806100206000396000f3fe608060405234801561001057600080fd5b50600436106100a95760003560e01c8063b840f92111610071578063b840f92114610168578063db1701251461017b578063dbfd47371461018e578063de47238c146101a1578063f2fde38b146101b4578063f887ea40146101c757600080fd5b806312d89732146100ae578063485cc955146100d7578063715018a6146100ec57806389512e17146100f45780638da5cb5b1461014f575b600080fd5b6100c16100bc366004610e22565b6101ed565b6040516100ce9190610e53565b60405180910390f35b6100ea6100e5366004610ea5565b610312565b005b6100ea610398565b610141610102366004610fd6565b60656020908152600093845260408085208252928452919092208251808401830180519281529083019390920192909220919052805460019091015482565b6040516100ce929190611040565b6033546001600160a01b03166040516100ce9190611064565b6100ea61017636600461121a565b6103d7565b6100ea6101893660046112e5565b6105f3565b6100ea61019c366004611332565b610720565b6100ea6101af3660046113a4565b610856565b6100ea6101c236600461140a565b6109fa565b6000546101e0906201000090046001600160a01b031681565b6040516100ce919061143f565b600080600060029054906101000a90046001600160a01b03166001600160a01b031663740e80616040518163ffffffff1660e01b815260040160206040518083038186803b15801561023e57600080fd5b505afa158015610252573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102769190611458565b604051630a2c852960e21b81529091506001600160a01b038216906328b214a4906102bb907353b10a60f28c1f35025d9dc0773339638c540a67908790600401611479565b60206040518083038186803b1580156102d357600080fd5b505afa1580156102e7573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061030b9190611492565b9392505050565b600061031e6001610a56565b90508015610336576000805461ff0019166101001790555b61033f83610ae3565b61034882610b35565b8015610393576000805461ff00191690556040517f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989061038a906001906114c7565b60405180910390a15b505050565b6033546001600160a01b031633146103cb5760405162461bcd60e51b81526004016103c29061150a565b60405180910390fd5b6103d56000610ae3565b565b60008060029054906101000a90046001600160a01b03166001600160a01b031663a5a3f6c86040518163ffffffff1660e01b815260040160206040518083038186803b15801561042657600080fd5b505afa15801561043a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061045e9190611458565b604051636b074a0760e01b81529091506001600160a01b03821690636b074a079061048d903390600401611064565b60206040518083038186803b1580156104a557600080fd5b505afa1580156104b9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104dd919061152d565b6104f95760405162461bcd60e51b81526004016103c290611597565b835185511461051a5760405162461bcd60e51b81526004016103c2906115ec565b825185511461053b5760405162461bcd60e51b81526004016103c2906115ec565b815185511461055c5760405162461bcd60e51b81526004016103c2906115ec565b60005b85518110156105eb576105d93387838151811061057e5761057e6115fc565b6020026020010151878481518110610598576105986115fc565b60200260200101518785815181106105b2576105b26115fc565b60200260200101518786815181106105cc576105cc6115fc565b6020026020010151610b65565b806105e381611628565b91505061055f565b505050505050565b60008060029054906101000a90046001600160a01b03166001600160a01b031663a5a3f6c86040518163ffffffff1660e01b815260040160206040518083038186803b15801561064257600080fd5b505afa158015610656573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061067a9190611458565b604051636b074a0760e01b81529091506001600160a01b03821690636b074a07906106a9903390600401611064565b60206040518083038186803b1580156106c157600080fd5b505afa1580156106d5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106f9919061152d565b6107155760405162461bcd60e51b81526004016103c290611597565b610393338484610d4e565b60008060029054906101000a90046001600160a01b03166001600160a01b031663a5a3f6c86040518163ffffffff1660e01b815260040160206040518083038186803b15801561076f57600080fd5b505afa158015610783573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107a79190611458565b604051636b074a0760e01b81529091506001600160a01b03821690636b074a07906107d6903390600401611064565b60206040518083038186803b1580156107ee57600080fd5b505afa158015610802573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610826919061152d565b6108425760405162461bcd60e51b81526004016103c290611597565b61084f3386868686610b65565b5050505050565b60008060029054906101000a90046001600160a01b03166001600160a01b031663a5a3f6c86040518163ffffffff1660e01b815260040160206040518083038186803b1580156108a557600080fd5b505afa1580156108b9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108dd9190611458565b604051636b074a0760e01b81529091506001600160a01b03821690636b074a079061090c903390600401611064565b60206040518083038186803b15801561092457600080fd5b505afa158015610938573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061095c919061152d565b6109785760405162461bcd60e51b81526004016103c290611597565b81518351146109995760405162461bcd60e51b81526004016103c290611687565b60005b83518110156109f4576109e2338583815181106109bb576109bb6115fc565b60200260200101518584815181106109d5576109d56115fc565b6020026020010151610d4e565b806109ec81611628565b91505061099c565b50505050565b6033546001600160a01b03163314610a245760405162461bcd60e51b81526004016103c29061150a565b6001600160a01b038116610a4a5760405162461bcd60e51b81526004016103c2906116da565b610a5381610ae3565b50565b60008054610100900460ff1615610a9d578160ff166001148015610a795750303b155b610a955760405162461bcd60e51b81526004016103c290611735565b506000919050565b60005460ff808416911610610ac45760405162461bcd60e51b81526004016103c290611735565b506000805460ff191660ff92909216919091179055600190565b919050565b603380546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b600054610100900460ff16610b5c5760405162461bcd60e51b81526004016103c29061178d565b610a5381610d81565b60008060029054906101000a90046001600160a01b03166001600160a01b031663740e80616040518163ffffffff1660e01b815260040160206040518083038186803b158015610bb457600080fd5b505afa158015610bc8573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bec9190611458565b60405162f304db60e01b81529091506001600160a01b0382169062f304db90610c1b9089908990600401611479565b60206040518083038186803b158015610c3357600080fd5b505afa158015610c47573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c6b919061152d565b15610c885760405162461bcd60e51b81526004016103c2906117d1565b7fd8be615b569e10ab81c7e1ad876540845a9ad057e7bf224af878656a43ccbae78686868686866001600160a01b03166328b214a48d8d6040518363ffffffff1660e01b8152600401610cdc929190611479565b60206040518083038186803b158015610cf457600080fd5b505afa158015610d08573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d2c9190611492565b604051610d3e9695949392919061183f565b60405180910390a1505050505050565b7f20b2a0e9bd2cadc08b645e5d8c204c6d86d3c23817b100e0346846e77a88d7c983838360405161038a939291906118a0565b6001600160a01b038116610da75760405162461bcd60e51b81526004016103c29061190a565b6000805462010000600160b01b031916620100006001600160a01b038416021790556040517f7aed1d3e8155a07ccf395e44ea3109a0e2d6c9b29bbbe9f142d9790596f4dc8090610df990839061143f565b60405180910390a150565b805b8114610a5357600080fd5b8035610e1c81610e04565b92915050565b600060208284031215610e3757610e37600080fd5b6000610e438484610e11565b949350505050565b805b82525050565b60208101610e1c8284610e4b565b60006001600160a01b038216610e1c565b610e0681610e61565b8035610e1c81610e72565b6000610e1c82610e61565b610e0681610e86565b8035610e1c81610e91565b60008060408385031215610ebb57610ebb600080fd5b6000610ec78585610e7b565b9250506020610ed885828601610e9a565b9150509250929050565b634e487b7160e01b600052604160045260246000fd5b601f19601f83011681018181106001600160401b0382111715610f1d57610f1d610ee2565b6040525050565b6000610f2f60405190565b9050610ade8282610ef8565b60006001600160401b03821115610f5457610f54610ee2565b601f19601f83011660200192915050565b82818337506000910152565b6000610f84610f7f84610f3b565b610f24565b905082815260208101848484011115610f9f57610f9f600080fd5b610faa848285610f65565b509392505050565b600082601f830112610fc657610fc6600080fd5b8135610e43848260208601610f71565b600080600060608486031215610fee57610fee600080fd5b6000610ffa8686610e7b565b935050602061100b86828701610e11565b92505060408401356001600160401b0381111561102a5761102a600080fd5b61103686828701610fb2565b9150509250925092565b6040810161104e8285610e4b565b61030b6020830184610e4b565b610e4d81610e61565b60208101610e1c828461105b565b60006001600160401b0382111561108b5761108b610ee2565b5060209081020190565b60006110a3610f7f84611072565b838152905060208082019084028301858111156110c2576110c2600080fd5b835b818110156110e657806110d78882610e11565b845250602092830192016110c4565b5050509392505050565b600082601f83011261110457611104600080fd5b8135610e43848260208601611095565b6000611122610f7f84611072565b8381529050602080820190840283018581111561114157611141600080fd5b835b818110156110e65780356001600160401b0381111561116457611164600080fd5b8086016111718982610fb2565b8552505060209283019201611143565b600082601f83011261119557611195600080fd5b8135610e43848260208601611114565b60006111b3610f7f84611072565b838152905060208082019084028301858111156111d2576111d2600080fd5b835b818110156110e657806111e78882610e11565b845250602092830192016111d4565b600082601f83011261120a5761120a600080fd5b8135610e438482602086016111a5565b6000806000806080858703121561123357611233600080fd5b84356001600160401b0381111561124c5761124c600080fd5b611258878288016110f0565b94505060208501356001600160401b0381111561127757611277600080fd5b61128387828801611181565b93505060408501356001600160401b038111156112a2576112a2600080fd5b6112ae878288016111f6565b92505060608501356001600160401b038111156112cd576112cd600080fd5b6112d9878288016111f6565b91505092959194509250565b600080604083850312156112fb576112fb600080fd5b60006113078585610e11565b92505060208301356001600160401b0381111561132657611326600080fd5b610ed885828601610fb2565b6000806000806080858703121561134b5761134b600080fd5b60006113578787610e11565b94505060208501356001600160401b0381111561137657611376600080fd5b61138287828801610fb2565b935050604061139387828801610e11565b92505060606112d987828801610e11565b600080604083850312156113ba576113ba600080fd5b82356001600160401b038111156113d3576113d3600080fd5b6113df858286016110f0565b92505060208301356001600160401b038111156113fe576113fe600080fd5b610ed885828601611181565b60006020828403121561141f5761141f600080fd5b6000610e438484610e7b565b6000610e1c82610e86565b610e4d8161142b565b60208101610e1c8284611436565b8051610e1c81610e91565b60006020828403121561146d5761146d600080fd5b6000610e43848461144d565b6040810161104e828561105b565b8051610e1c81610e04565b6000602082840312156114a7576114a7600080fd5b6000610e438484611487565b600060ff8216610e1c565b610e4d816114b3565b60208101610e1c82846114be565b60208082527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572910190815260005b5060200190565b60208082528101610e1c816114d5565b801515610e06565b8051610e1c8161151a565b60006020828403121561154257611542600080fd5b6000610e438484611522565b602981526000602082017f526f75746572577261707065723a2063616c6c6572206973206e6f742074686581526810383937bb34b232b960b91b602082015291505b5060400190565b60208082528101610e1c8161154e565b602881526000602082017f436f6e74656e745472616365723a20496e76616c696420706172616d65746572815267103632b733ba341760c11b60208201529150611590565b60208082528101610e1c816115a7565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b600060001982141561163c5761163c611612565b5060010190565b602781526000602082017f436f6e74656e745472616365723a20496e76616c696420706172616d65746572815266040d8cadccee8d60cb1b60208201529150611590565b60208082528101610e1c81611643565b602681526000602082017f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206181526564647265737360d01b60208201529150611590565b60208082528101610e1c81611697565b602e81526000602082017f496e697469616c697a61626c653a20636f6e747261637420697320616c72656181526d191e481a5b9a5d1a585b1a5e995960921b60208201529150611590565b60208082528101610e1c816116ea565b602b81526000602082017f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206981526a6e697469616c697a696e6760a81b60208201529150611590565b60208082528101610e1c81611745565b601e81526000602082017f436f6e74656e745472616365723a206163636f756e742065787069726564000081529150611503565b60208082528101610e1c8161179d565b60005b838110156117fc5781810151838201526020016117e4565b838111156109f45750506000910152565b6000611817825190565b80845260208401935061182e8185602086016117e1565b601f01601f19169290920192915050565b60c0810161184d828961105b565b61185a6020830188610e4b565b818103604083015261186c818761180d565b905061187b6060830186610e4b565b6118886080830185610e4b565b61189560a0830184610e4b565b979650505050505050565b606081016118ae828661105b565b6118bb6020830185610e4b565b81810360408301526118cd818461180d565b95945050505050565b601b81526000602082017f526f75746572577261707065723a207a65726f2061646472657373000000000081529150611503565b60208082528101610e1c816118d656fea264697066735822122034c9745a29be85a2c54521314d6058f418e08cc3384e13a4df12f18c532fc3ad64736f6c63430008090033";
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
