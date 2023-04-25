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
exports.Billing__factory = void 0;
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
                internalType: "bytes",
                name: "bills",
                type: "bytes",
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
                name: "nonce",
                type: "uint64",
            },
        ],
        name: "Billing",
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
        name: "BillingTypesHashUpdated",
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
                name: "provider",
                type: "address",
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
                internalType: "bytes",
                name: "data",
                type: "bytes",
            },
        ],
        name: "billFee",
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
        inputs: [],
        name: "billingTypesHash",
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
                internalType: "bytes",
                name: "bills",
                type: "bytes",
            },
            {
                internalType: "uint256",
                name: "timeout",
                type: "uint256",
            },
            {
                internalType: "uint64",
                name: "nonce",
                type: "uint64",
            },
        ],
        name: "hashBillingTypes",
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
                internalType: "bytes",
                name: "bills",
                type: "bytes",
            },
            {
                internalType: "uint256",
                name: "timeout",
                type: "uint256",
            },
            {
                internalType: "uint64",
                name: "nonce",
                type: "uint64",
            },
        ],
        name: "hashTypedDataV4ForBills",
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
                name: "owner",
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
                name: "billingTypes",
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
                name: "provider",
                type: "address",
            },
            {
                internalType: "bytes32",
                name: "account",
                type: "bytes32",
            },
            {
                internalType: "uint64",
                name: "nonce",
                type: "uint64",
            },
        ],
        name: "nonceExists",
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
                name: "provider",
                type: "address",
            },
            {
                internalType: "bytes32",
                name: "account",
                type: "bytes32",
            },
            {
                internalType: "bytes",
                name: "bills",
                type: "bytes",
            },
            {
                internalType: "uint256",
                name: "timeout",
                type: "uint256",
            },
            {
                internalType: "uint64",
                name: "nonce",
                type: "uint64",
            },
            {
                internalType: "bytes",
                name: "signature",
                type: "bytes",
            },
        ],
        name: "spend",
        outputs: [
            {
                internalType: "uint256",
                name: "fee",
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
var _bytecode = "0x608060405234801561001057600080fd5b5061256c806100206000396000f3fe608060405234801561001057600080fd5b50600436106100ea5760003560e01c80638da5cb5b1161008c578063c025303e11610066578063c025303e146101b6578063de7c8e58146101d6578063f2fde38b146101e9578063f887ea40146101fc57600080fd5b80638da5cb5b1461017757806393563a9514610190578063a29ee11e146101a357600080fd5b8063699256f4116100c8578063699256f41461013657806370a0823114610149578063715018a61461015c578063851981d21461016457600080fd5b806308277dda146100ef57806317a6020b1461010457806360bcb0ce1461012d575b600080fd5b6101026100fd3660046114a6565b61021c565b005b610117610112366004611597565b610316565b604051610124919061165d565b60405180910390f35b61011760cc5481565b61010261014436600461166b565b6105fb565b6101176101573660046116a8565b610687565b6101026107b7565b6101176101723660046116c9565b6107cb565b6033546001600160a01b03166040516101249190611757565b61010261019e366004611765565b610813565b6101176101b13660046117b5565b610862565b6101c96101c4366004611802565b610877565b6040516101249190611850565b6101176101e43660046116c9565b6109ce565b6101026101f73660046116a8565b6109e5565b60cb5461020f906001600160a01b031681565b6040516101249190611872565b600054610100900460ff161580801561023c5750600054600160ff909116105b806102565750303b158015610256575060005460ff166001145b61027b5760405162461bcd60e51b8152600401610272906118ce565b60405180910390fd5b6000805460ff19166001179055801561029e576000805461ff0019166101001790555b6102a786610a1f565b6102b18585610a71565b6102ba83610aa6565b6102c382610add565b801561030e576000805461ff00191690556040517f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb384740249890610305906001906118f2565b60405180910390a15b505050505050565b6000610320610b0d565b60cb546040805163e70b7acb60e01b815290516000926001600160a01b03169163e70b7acb916004808301926020929190829003018186803b15801561036557600080fd5b505afa158015610379573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061039d919061190b565b9050336001600160a01b038216146103c75760405162461bcd60e51b81526004016102729061196f565b6000846001600160401b0316116103f05760405162461bcd60e51b8152600401610272906119af565b42851161040f5760405162461bcd60e51b8152600401610272906119e9565b6001600160a01b038816600090815260cd602090815260408083208a845282528083206001600160401b038816845290915290205460ff16156104645760405162461bcd60e51b815260040161027290611a25565b600061047389898989896109ce565b905060cb60009054906101000a90046001600160a01b03166001600160a01b031663a5a3f6c86040518163ffffffff1660e01b815260040160206040518083038186803b1580156104c357600080fd5b505afa1580156104d7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104fb919061190b565b6001600160a01b031663238a4d1e8a83876040518463ffffffff1660e01b815260040161052a93929190611a97565b602060405180830381600087803b15801561054457600080fd5b505af1158015610558573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061057c9190611ad7565b6105985760405162461bcd60e51b815260040161027290611b2c565b6105a489898988610b37565b92507fb23a1eee6a70af817a758fd091feb704a6bd3edc57e7fa7d2f8a5bfa5894929889898986896040516105dd959493929190611b4b565b60405180910390a150506105f16001609955565b9695505050505050565b610603610c68565b6040516000906001600160a01b0384169083156108fc0290849084818181858888f193505050509050806106495760405162461bcd60e51b815260040161027290611be0565b7f2c876ecb97b3c6854f2488d373403f903eacb800e51c159a5c0c7a9c857e4827838360405161067a929190611bf0565b60405180910390a1505050565b60cb54604080516314b47ed960e31b815290516000926001600160a01b03169163a5a3f6c8916004808301926020929190829003018186803b1580156106cc57600080fd5b505afa1580156106e0573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610704919061190b565b6001600160a01b0316636b074a07836040518263ffffffff1660e01b815260040161072f9190611757565b60206040518083038186803b15801561074757600080fd5b505afa15801561075b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061077f9190611ad7565b61079b5760405162461bcd60e51b815260040161027290611c3f565b506001600160a01b0316600090815260ce602052604090205490565b6107bf610c68565b6107c96000610a1f565b565b600060cc548686868051906020012086866040516020016107f196959493929190611c4f565b6040516020818303038152906040528051906020012090505b95945050505050565b61081b610c68565b61082f6001600160a01b0384168383610c92565b7f2717ead6b9200dd235aad468c9809ea400fe33ac69b5bfaa6d3e90fc922b639883838360405161067a93929190611c9e565b600061086e8383610ced565b90505b92915050565b60cb54604080516350e420e560e11b815290516000926001600160a01b03169163a1c841ca916004808301926020929190829003018186803b1580156108bc57600080fd5b505afa1580156108d0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108f4919061190b565b6001600160a01b0316632d52976485856040518363ffffffff1660e01b8152600401610921929190611cc6565b60206040518083038186803b15801561093957600080fd5b505afa15801561094d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109719190611ad7565b61098d5760405162461bcd60e51b815260040161027290611c3f565b506001600160a01b038316600090815260cd6020908152604080832085845282528083206001600160401b038516845290915290205460ff165b9392505050565b60006105f16109e087878787876107cb565b610ee4565b6109ed610c68565b6001600160a01b038116610a135760405162461bcd60e51b815260040161027290611d17565b610a1c81610a1f565b50565b603380546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b600054610100900460ff16610a985760405162461bcd60e51b815260040161027290611d6f565b610aa28282610ef7565b5050565b600054610100900460ff16610acd5760405162461bcd60e51b815260040161027290611d6f565b610a1c8180519060200120610f38565b600054610100900460ff16610b045760405162461bcd60e51b815260040161027290611d6f565b610a1c81610f78565b60026099541415610b305760405162461bcd60e51b815260040161027290611db3565b6002609955565b60008060cb60009054906101000a90046001600160a01b03166001600160a01b031663c24126766040518163ffffffff1660e01b815260040160206040518083038186803b158015610b8857600080fd5b505afa158015610b9c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bc0919061190b565b9050610bcc8685610ced565b91508115610c1e57610bde8183610fe9565b6001600160a01b038716600090815260ce6020526040902054909250610c049083611047565b6001600160a01b038716600090815260ce60205260409020555b506001600160a01b03909416600090815260cd602090815260408083209583529481528482206001600160401b0390931682529190915291909120805460ff191660011790555090565b6033546001600160a01b031633146107c95760405162461bcd60e51b815260040161027290611df5565b610ce88363a9059cbb60e01b8484604051602401610cb1929190611cc6565b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b031990931692909217909152611053565b505050565b60008082806020019051810190610d049190611fff565b805190915015610edd5760005b8151811015610edb576000828281518110610d2e57610d2e612039565b60200260200101519050600081602001515111610d5d5760405162461bcd60e51b815260040161027290612083565b60005b816020015151811015610ec657600082602001518281518110610d8557610d85612039565b60200260200101519050600060cb60009054906101000a90046001600160a01b03166001600160a01b03166337187fc36040518163ffffffff1660e01b815260040160206040518083038186803b158015610ddf57600080fd5b505afa158015610df3573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e17919061190b565b825160208401518651604051630ace4d5d60e41b81526001600160a01b03949094169363ace4d5d093610e53938f9391929091906004016120d7565b60206040518083038186803b158015610e6b57600080fd5b505afa158015610e7f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ea3919061210c565b9050610eaf8782611047565b965050508080610ebe90612143565b915050610d60565b50508080610ed390612143565b915050610d11565b505b5092915050565b6000610871610ef16110e2565b8361111e565b600054610100900460ff16610f1e5760405162461bcd60e51b815260040161027290611d6f565b815160209283012081519190920120606591909155606655565b60cc8190556040517fcf56a45f18d68202ed136bed985143964e07246be70e444cc5d94d670de61f5390610f6d90839061165d565b60405180910390a150565b6001600160a01b038116610f9e5760405162461bcd60e51b815260040161027290612192565b60cb80546001600160a01b0319166001600160a01b0383161790556040517f7aed1d3e8155a07ccf395e44ea3109a0e2d6c9b29bbbe9f142d9790596f4dc8090610f6d908390611872565b600080610ff584611151565b905060128082116110285761101f61100d82846111ea565b61101890600a6122b0565b85906111f6565b92505050610871565b61080a61103583836111ea565b61104090600a6122b0565b8590611202565b600061086e82846122bf565b60006110a8826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b031661120e9092919063ffffffff16565b805190915015610ce857808060200190518101906110c69190611ad7565b610ce85760405162461bcd60e51b81526004016102729061231e565b60006111197f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f61111160655490565b60665461121d565b905090565b60008282604051602001611133929190612334565b60405160208183030381529060405280519060200120905092915050565b6000806000836001600160a01b031660405161116c90612365565b600060405180830381855afa9150503d80600081146111a7576040519150601f19603f3d011682016040523d82523d6000602084013e6111ac565b606091505b5091509150816111ce5760405162461bcd60e51b8152600401610272906123ae565b808060200190518101906111e2919061210c565b949350505050565b600061086e82846123be565b600061086e82846123eb565b600061086e82846123ff565b60606111e28484600085611257565b6000838383463060405160200161123895949392919061241e565b6040516020818303038152906040528051906020012090509392505050565b6060824710156112795760405162461bcd60e51b8152600401610272906124a3565b600080866001600160a01b0316858760405161129591906124d5565b60006040518083038185875af1925050503d80600081146112d2576040519150601f19603f3d011682016040523d82523d6000602084013e6112d7565b606091505b50915091506112e8878383876112f3565b979650505050505050565b6060831561132f578251611328576001600160a01b0385163b6113285760405162461bcd60e51b815260040161027290612515565b50816111e2565b6111e283838151156113445781518083602001fd5b8060405162461bcd60e51b81526004016102729190612525565b60006001600160a01b038216610871565b6113788161135e565b8114610a1c57600080fd5b80356108718161136f565b634e487b7160e01b600052604160045260246000fd5b601f19601f83011681018181106001600160401b03821117156113c9576113c961138e565b6040525050565b60006113db60405190565b90506113e782826113a4565b919050565b60006001600160401b038211156114055761140561138e565b601f19601f83011660200192915050565b82818337506000910152565b6000611435611430846113ec565b6113d0565b90508281526020810184848401111561145057611450600080fd5b61145b848285611416565b509392505050565b600082601f83011261147757611477600080fd5b81356111e2848260208601611422565b60006108718261135e565b61137881611487565b803561087181611492565b600080600080600060a086880312156114c1576114c1600080fd5b60006114cd8888611383565b95505060208601356001600160401b038111156114ec576114ec600080fd5b6114f888828901611463565b94505060408601356001600160401b0381111561151757611517600080fd5b61152388828901611463565b93505060608601356001600160401b0381111561154257611542600080fd5b61154e88828901611463565b925050608061155f8882890161149b565b9150509295509295909350565b80611378565b80356108718161156c565b6001600160401b038116611378565b80356108718161157d565b60008060008060008060c087890312156115b3576115b3600080fd5b60006115bf8989611383565b96505060206115d089828a01611572565b95505060408701356001600160401b038111156115ef576115ef600080fd5b6115fb89828a01611463565b945050606061160c89828a01611572565b935050608061161d89828a0161158c565b92505060a08701356001600160401b0381111561163c5761163c600080fd5b61164889828a01611463565b9150509295509295509295565b805b82525050565b602081016108718284611655565b6000806040838503121561168157611681600080fd5b600061168d8585611383565b925050602061169e85828601611572565b9150509250929050565b6000602082840312156116bd576116bd600080fd5b60006111e28484611383565b600080600080600060a086880312156116e4576116e4600080fd5b60006116f08888611383565b955050602061170188828901611572565b94505060408601356001600160401b0381111561172057611720600080fd5b61172c88828901611463565b935050606061173d88828901611572565b925050608061155f8882890161158c565b6116578161135e565b60208101610871828461174e565b60008060006060848603121561177d5761177d600080fd5b6000611789868661149b565b935050602061179a86828701611383565b92505060406117ab86828701611572565b9150509250925092565b600080604083850312156117cb576117cb600080fd5b60006117d78585611383565b92505060208301356001600160401b038111156117f6576117f6600080fd5b61169e85828601611463565b60008060006060848603121561181a5761181a600080fd5b60006118268686611383565b935050602061183786828701611572565b92505060406117ab8682870161158c565b801515611657565b602081016108718284611848565b600061087182611487565b6116578161185e565b602081016108718284611869565b602e81526000602082017f496e697469616c697a61626c653a20636f6e747261637420697320616c72656181526d191e481a5b9a5d1a585b1a5e995960921b602082015291505b5060400190565b6020808252810161087181611880565b600060ff8216610871565b611657816118de565b6020810161087182846118e9565b805161087181611492565b60006020828403121561192057611920600080fd5b60006111e28484611900565b602681526000602082017f526f75746572577261707065723a2063616c6c6572206973206e6f742066756e81526519081c1bdbdb60d21b602082015291506118c7565b602080825281016108718161192c565b601681526000602082017542696c6c696e673a20696e76616c6964206e6f6e636560501b815291505b5060200190565b602080825281016108718161197f565b601381526000602082017242696c6c696e673a207478206578706972657360681b815291506119a8565b60208082528101610871816119bf565b601581526000602082017442696c6c696e673a206e6f6e63652065786973747360581b815291506119a8565b60208082528101610871816119f9565b60005b83811015611a50578181015183820152602001611a38565b83811115611a5f576000848401525b50505050565b6000611a6f825190565b808452602084019350611a86818560208601611a35565b601f01601f19169290920192915050565b60608101611aa5828661174e565b611ab26020830185611655565b818103604083015261080a8184611a65565b801515611378565b805161087181611ac4565b600060208284031215611aec57611aec600080fd5b60006111e28484611acc565b601a81526000602082017f42696c6c696e673a20696e76616c6964207369676e6174757265000000000000815291506119a8565b6020808252810161087181611af8565b6001600160401b038116611657565b60a08101611b59828861174e565b611b666020830187611655565b8181036040830152611b788186611a65565b9050611b876060830185611655565b6105f16080830184611b3c565b602f81526000602082017f4f776e6572576974686472617761626c653a207769746864726177206e61746981526e1d99481d1bdad95b8819985a5b1959608a1b602082015291506118c7565b6020808252810161087181611b94565b60408101611bfe8285611869565b6109c76020830184611655565b601d81526000602082017f42696c6c696e673a206e6f6e6578697374656e742070726f7669646572000000815291506119a8565b6020808252810161087181611c0b565b60c08101611c5d8289611655565b611c6a602083018861174e565b611c776040830187611655565b611c846060830186611655565b611c916080830185611655565b6112e860a0830184611b3c565b60608101611cac8286611869565b611cb9602083018561174e565b6111e26040830184611655565b60408101611bfe828561174e565b602681526000602082017f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206181526564647265737360d01b602082015291506118c7565b6020808252810161087181611cd4565b602b81526000602082017f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206981526a6e697469616c697a696e6760a81b602082015291506118c7565b6020808252810161087181611d27565b601f81526000602082017f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00815291506119a8565b6020808252810161087181611d7f565b60208082527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572910190815260006119a8565b6020808252810161087181611dc3565b60006001600160401b03821115611e1e57611e1e61138e565b5060209081020190565b80516108718161156c565b60058110610a1c57600080fd5b805161087181611e33565b600060408284031215611e6057611e60600080fd5b611e6a60406113d0565b90506000611e788484611e40565b8252506020611e8984848301611e28565b60208301525092915050565b6000611ea361143084611e05565b83815290506020810160408402830185811115611ec257611ec2600080fd5b835b81811015611ee85780611ed78882611e4b565b845250602090920191604001611ec4565b5050509392505050565b600082601f830112611f0657611f06600080fd5b81516111e2848260208601611e95565b600060408284031215611f2b57611f2b600080fd5b611f3560406113d0565b90506000611f438484611e28565b82525060208201516001600160401b03811115611f6257611f62600080fd5b611e8984828501611ef2565b6000611f7c61143084611e05565b83815290506020808201908402830185811115611f9b57611f9b600080fd5b835b81811015611ee85780516001600160401b03811115611fbe57611fbe600080fd5b808601611fcb8982611f16565b8552505060209283019201611f9d565b600082601f830112611fef57611fef600080fd5b81516111e2848260208601611f6e565b60006020828403121561201457612014600080fd5b81516001600160401b0381111561202d5761202d600080fd5b6111e284828501611fdb565b634e487b7160e01b600052603260045260246000fd5b601981526000602082017f42696c6c696e673a20656d7074792062696c6c20656e74727900000000000000815291506119a8565b602080825281016108718161204f565b634e487b7160e01b600052602160045260246000fd5b60058110610a1c57610a1c612093565b806113e7816120a9565b6000610871826120b9565b611657816120c3565b608081016120e5828761174e565b6120f260208301866120ce565b6120ff6040830185611655565b61080a6060830184611655565b60006020828403121561212157612121600080fd5b60006111e28484611e28565b634e487b7160e01b600052601160045260246000fd5b60006000198214156121575761215761212d565b5060010190565b601b81526000602082017f526f75746572577261707065723a207a65726f20616464726573730000000000815291506119a8565b602080825281016108718161215e565b80825b60018511156121e1578086048111156121c0576121c061212d565b60018516156121ce57908102905b80026121da8560011c90565b94506121a5565b94509492505050565b6000826121f9575060016109c7565b81612206575060006109c7565b816001811461221c576002811461222657612253565b60019150506109c7565b60ff8411156122375761223761212d565b8360020a91508482111561224d5761224d61212d565b506109c7565b5060208310610133831016604e8410600b8410161715612286575081810a838111156122815761228161212d565b6109c7565b61229384848460016121a2565b925090508184048111156122a9576122a961212d565b0292915050565b600061086e60001984846121ea565b600082198211156122d2576122d261212d565b500190565b602a81526000602082017f5361666545524332303a204552433230206f7065726174696f6e20646964206e8152691bdd081cdd58d8d9595960b21b602082015291506118c7565b60208082528101610871816122d7565b80611657565b61190160f01b8152600201600061234b828561232e565b60208201915061235b828461232e565b5060200192915050565b63313ce56760e01b8152600060048201610871565b601b81526000602082017f5265736f75726365446174613a20696e76616c696420746f6b656e0000000000815291506119a8565b602080825281016108718161237a565b6000828210156123d0576123d061212d565b500390565b634e487b7160e01b600052601260045260246000fd5b6000826123fa576123fa6123d5565b500490565b60008160001904831182151516156124195761241961212d565b500290565b60a0810161242c8288611655565b6124396020830187611655565b6124466040830186611655565b6124536060830185611655565b6105f1608083018461174e565b602681526000602082017f416464726573733a20696e73756666696369656e742062616c616e636520666f8152651c8818d85b1b60d21b602082015291506118c7565b6020808252810161087181612460565b60006124bd825190565b6124cb818560208601611a35565b9290920192915050565b60006109c782846124b3565b601d81526000602082017f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000815291506119a8565b60208082528101610871816124e1565b6020808252810161086e8184611a6556fea26469706673582212207a446985798e650ed4deb4ed1ee779fa51f0ce522c427ee751cba123de7bddd964736f6c63430008090033";
var Billing__factory = /** @class */ (function (_super) {
    __extends(Billing__factory, _super);
    function Billing__factory() {
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
    Billing__factory.prototype.deploy = function (overrides) {
        return _super.prototype.deploy.call(this, overrides || {});
    };
    Billing__factory.prototype.getDeployTransaction = function (overrides) {
        return _super.prototype.getDeployTransaction.call(this, overrides || {});
    };
    Billing__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    Billing__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    Billing__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    Billing__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    Billing__factory.bytecode = _bytecode;
    Billing__factory.abi = _abi;
    return Billing__factory;
}(ethers_1.ContractFactory));
exports.Billing__factory = Billing__factory;
