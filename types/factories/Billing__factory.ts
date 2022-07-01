/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Billing, BillingInterface } from "../Billing";

const _abi = [
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

const _bytecode =
  "0x608060405234801561001057600080fd5b506125ec806100206000396000f3fe608060405234801561001057600080fd5b50600436106100ea5760003560e01c80638da5cb5b1161008c578063c025303e11610066578063c025303e146101b6578063de7c8e58146101d6578063f2fde38b146101e9578063f887ea40146101fc57600080fd5b80638da5cb5b1461017757806393563a9514610190578063a29ee11e146101a357600080fd5b8063699256f4116100c8578063699256f41461013657806370a0823114610149578063715018a61461015c578063851981d21461016457600080fd5b806308277dda146100ef57806317a6020b1461010457806360bcb0ce1461012d575b600080fd5b6101026100fd366004611526565b61021c565b005b610117610112366004611617565b6102b8565b60405161012491906116dd565b60405180910390f35b61011760cc5481565b6101026101443660046116eb565b6105c1565b610117610157366004611728565b61066f565b61010261079f565b610117610172366004611749565b6107d5565b6033546001600160a01b031660405161012491906117d7565b61010261019e3660046117e5565b61081d565b6101176101b1366004611835565b61088e565b6101c96101c4366004611882565b6108a3565b60405161012491906118d0565b6101176101e4366004611749565b6109fa565b6101026101f7366004611728565b610a1b565b60cb5461020f906001600160a01b031681565b60405161012491906118f2565b60006102286001610a77565b90508015610240576000805461ff0019166101001790555b61024986610b04565b6102538585610b56565b61025c83610b8b565b61026582610bc2565b80156102b0576000805461ff00191690556040517f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb3847402498906102a790600190611914565b60405180910390a15b505050505050565b6000600260995414156102e65760405162461bcd60e51b81526004016102dd90611959565b60405180910390fd5b600260995560cb546040805163e70b7acb60e01b815290516000926001600160a01b03169163e70b7acb916004808301926020929190829003018186803b15801561033057600080fd5b505afa158015610344573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103689190611974565b9050336001600160a01b038216146103925760405162461bcd60e51b81526004016102dd906119db565b6000846001600160401b0316116103bb5760405162461bcd60e51b81526004016102dd90611a18565b4285116103da5760405162461bcd60e51b81526004016102dd90611a52565b6001600160a01b038816600090815260cd602090815260408083208a845282528083206001600160401b038816845290915290205460ff161561042f5760405162461bcd60e51b81526004016102dd90611a8e565b600061043e89898989896109fa565b905060cb60009054906101000a90046001600160a01b03166001600160a01b031663a5a3f6c86040518163ffffffff1660e01b815260040160206040518083038186803b15801561048e57600080fd5b505afa1580156104a2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104c69190611974565b6001600160a01b031663238a4d1e8a83876040518463ffffffff1660e01b81526004016104f593929190611b00565b602060405180830381600087803b15801561050f57600080fd5b505af1158015610523573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105479190611b40565b6105635760405162461bcd60e51b81526004016102dd90611b95565b61056f89898988610bf2565b92507fb23a1eee6a70af817a758fd091feb704a6bd3edc57e7fa7d2f8a5bfa5894929889898986896040516105a8959493929190611bb4565b60405180910390a1505060016099559695505050505050565b6033546001600160a01b031633146105eb5760405162461bcd60e51b81526004016102dd90611c2f565b6040516000906001600160a01b0384169083156108fc0290849084818181858888f193505050509050806106315760405162461bcd60e51b81526004016102dd90611c8b565b7f2c876ecb97b3c6854f2488d373403f903eacb800e51c159a5c0c7a9c857e48278383604051610662929190611c9b565b60405180910390a1505050565b60cb54604080516314b47ed960e31b815290516000926001600160a01b03169163a5a3f6c8916004808301926020929190829003018186803b1580156106b457600080fd5b505afa1580156106c8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106ec9190611974565b6001600160a01b0316636b074a07836040518263ffffffff1660e01b815260040161071791906117d7565b60206040518083038186803b15801561072f57600080fd5b505afa158015610743573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107679190611b40565b6107835760405162461bcd60e51b81526004016102dd90611cea565b506001600160a01b0316600090815260ce602052604090205490565b6033546001600160a01b031633146107c95760405162461bcd60e51b81526004016102dd90611c2f565b6107d36000610b04565b565b600060cc548686868051906020012086866040516020016107fb96959493929190611cfa565b6040516020818303038152906040528051906020012090505b95945050505050565b6033546001600160a01b031633146108475760405162461bcd60e51b81526004016102dd90611c2f565b61085b6001600160a01b0384168383610d23565b7f2717ead6b9200dd235aad468c9809ea400fe33ac69b5bfaa6d3e90fc922b639883838360405161066293929190611d49565b600061089a8383610d7e565b90505b92915050565b60cb54604080516350e420e560e11b815290516000926001600160a01b03169163a1c841ca916004808301926020929190829003018186803b1580156108e857600080fd5b505afa1580156108fc573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109209190611974565b6001600160a01b0316632d52976485856040518363ffffffff1660e01b815260040161094d929190611d71565b60206040518083038186803b15801561096557600080fd5b505afa158015610979573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061099d9190611b40565b6109b95760405162461bcd60e51b81526004016102dd90611cea565b506001600160a01b038316600090815260cd6020908152604080832085845282528083206001600160401b038516845290915290205460ff165b9392505050565b6000610a11610a0c87878787876107d5565b610f75565b9695505050505050565b6033546001600160a01b03163314610a455760405162461bcd60e51b81526004016102dd90611c2f565b6001600160a01b038116610a6b5760405162461bcd60e51b81526004016102dd90611dc2565b610a7481610b04565b50565b60008054610100900460ff1615610abe578160ff166001148015610a9a5750303b155b610ab65760405162461bcd60e51b81526004016102dd90611e1d565b506000919050565b60005460ff808416911610610ae55760405162461bcd60e51b81526004016102dd90611e1d565b506000805460ff191660ff92909216919091179055600190565b919050565b603380546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b600054610100900460ff16610b7d5760405162461bcd60e51b81526004016102dd90611e75565b610b878282610f88565b5050565b600054610100900460ff16610bb25760405162461bcd60e51b81526004016102dd90611e75565b610a748180519060200120610fc9565b600054610100900460ff16610be95760405162461bcd60e51b81526004016102dd90611e75565b610a7481611009565b60008060cb60009054906101000a90046001600160a01b03166001600160a01b031663c24126766040518163ffffffff1660e01b815260040160206040518083038186803b158015610c4357600080fd5b505afa158015610c57573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c7b9190611974565b9050610c878685610d7e565b91508115610cd957610c99818361107a565b6001600160a01b038716600090815260ce6020526040902054909250610cbf90836110d8565b6001600160a01b038716600090815260ce60205260409020555b506001600160a01b03909416600090815260cd602090815260408083209583529481528482206001600160401b0390931682529190915291909120805460ff191660011790555090565b610d798363a9059cbb60e01b8484604051602401610d42929190611d71565b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b0319909316929092179091526110e4565b505050565b60008082806020019051810190610d95919061207f565b805190915015610f6e5760005b8151811015610f6c576000828281518110610dbf57610dbf6120b9565b60200260200101519050600081602001515111610dee5760405162461bcd60e51b81526004016102dd90612103565b60005b816020015151811015610f5757600082602001518281518110610e1657610e166120b9565b60200260200101519050600060cb60009054906101000a90046001600160a01b03166001600160a01b03166337187fc36040518163ffffffff1660e01b815260040160206040518083038186803b158015610e7057600080fd5b505afa158015610e84573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ea89190611974565b825160208401518651604051630ace4d5d60e41b81526001600160a01b03949094169363ace4d5d093610ee4938f939192909190600401612157565b60206040518083038186803b158015610efc57600080fd5b505afa158015610f10573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f34919061218c565b9050610f4087826110d8565b965050508080610f4f906121c3565b915050610df1565b50508080610f64906121c3565b915050610da2565b505b5092915050565b600061089d610f82611173565b836111af565b600054610100900460ff16610faf5760405162461bcd60e51b81526004016102dd90611e75565b815160209283012081519190920120606591909155606655565b60cc8190556040517fcf56a45f18d68202ed136bed985143964e07246be70e444cc5d94d670de61f5390610ffe9083906116dd565b60405180910390a150565b6001600160a01b03811661102f5760405162461bcd60e51b81526004016102dd90612212565b60cb80546001600160a01b0319166001600160a01b0383161790556040517f7aed1d3e8155a07ccf395e44ea3109a0e2d6c9b29bbbe9f142d9790596f4dc8090610ffe9083906118f2565b600080611086846111e2565b905060128082116110b9576110b061109e828461127b565b6110a990600a612330565b8590611287565b9250505061089d565b6108146110c6838361127b565b6110d190600a612330565b8590611293565b600061089a828461233f565b6000611139826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b031661129f9092919063ffffffff16565b805190915015610d7957808060200190518101906111579190611b40565b610d795760405162461bcd60e51b81526004016102dd9061239e565b60006111aa7f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f6111a260655490565b6066546112ae565b905090565b600082826040516020016111c49291906123b4565b60405160208183030381529060405280519060200120905092915050565b6000806000836001600160a01b03166040516111fd906123e5565b600060405180830381855afa9150503d8060008114611238576040519150601f19603f3d011682016040523d82523d6000602084013e61123d565b606091505b50915091508161125f5760405162461bcd60e51b81526004016102dd9061242e565b80806020019051810190611273919061218c565b949350505050565b600061089a828461243e565b600061089a828461246b565b600061089a828461247f565b606061127384846000856112e8565b600083838346306040516020016112c995949392919061249e565b6040516020818303038152906040528051906020012090509392505050565b60608247101561130a5760405162461bcd60e51b81526004016102dd90612523565b6001600160a01b0385163b6113315760405162461bcd60e51b81526004016102dd90612567565b600080866001600160a01b0316858760405161134d9190612599565b60006040518083038185875af1925050503d806000811461138a576040519150601f19603f3d011682016040523d82523d6000602084013e61138f565b606091505b509150915061139f8282866113aa565b979650505050505050565b606083156113b95750816109f3565b8251156113c95782518084602001fd5b8160405162461bcd60e51b81526004016102dd91906125a5565b60006001600160a01b03821661089d565b6113fd816113e3565b8114610a7457600080fd5b803561089d816113f4565b634e487b7160e01b600052604160045260246000fd5b601f19601f83011681018181106001600160401b038211171561144e5761144e611413565b6040525050565b600061146060405190565b9050610aff8282611429565b60006001600160401b0382111561148557611485611413565b601f19601f83011660200192915050565b82818337506000910152565b60006114b56114b08461146c565b611455565b9050828152602081018484840111156114d0576114d0600080fd5b6114db848285611496565b509392505050565b600082601f8301126114f7576114f7600080fd5b81356112738482602086016114a2565b600061089d826113e3565b6113fd81611507565b803561089d81611512565b600080600080600060a0868803121561154157611541600080fd5b600061154d8888611408565b95505060208601356001600160401b0381111561156c5761156c600080fd5b611578888289016114e3565b94505060408601356001600160401b0381111561159757611597600080fd5b6115a3888289016114e3565b93505060608601356001600160401b038111156115c2576115c2600080fd5b6115ce888289016114e3565b92505060806115df8882890161151b565b9150509295509295909350565b806113fd565b803561089d816115ec565b6001600160401b0381166113fd565b803561089d816115fd565b60008060008060008060c0878903121561163357611633600080fd5b600061163f8989611408565b965050602061165089828a016115f2565b95505060408701356001600160401b0381111561166f5761166f600080fd5b61167b89828a016114e3565b945050606061168c89828a016115f2565b935050608061169d89828a0161160c565b92505060a08701356001600160401b038111156116bc576116bc600080fd5b6116c889828a016114e3565b9150509295509295509295565b805b82525050565b6020810161089d82846116d5565b6000806040838503121561170157611701600080fd5b600061170d8585611408565b925050602061171e858286016115f2565b9150509250929050565b60006020828403121561173d5761173d600080fd5b60006112738484611408565b600080600080600060a0868803121561176457611764600080fd5b60006117708888611408565b9550506020611781888289016115f2565b94505060408601356001600160401b038111156117a0576117a0600080fd5b6117ac888289016114e3565b93505060606117bd888289016115f2565b92505060806115df8882890161160c565b6116d7816113e3565b6020810161089d82846117ce565b6000806000606084860312156117fd576117fd600080fd5b6000611809868661151b565b935050602061181a86828701611408565b925050604061182b868287016115f2565b9150509250925092565b6000806040838503121561184b5761184b600080fd5b60006118578585611408565b92505060208301356001600160401b0381111561187657611876600080fd5b61171e858286016114e3565b60008060006060848603121561189a5761189a600080fd5b60006118a68686611408565b93505060206118b7868287016115f2565b925050604061182b8682870161160c565b8015156116d7565b6020810161089d82846118c8565b600061089d82611507565b6116d7816118de565b6020810161089d82846118e9565b600060ff821661089d565b6116d781611900565b6020810161089d828461190b565b601f81526000602082017f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00815291505b5060200190565b6020808252810161089d81611922565b805161089d81611512565b60006020828403121561198957611989600080fd5b60006112738484611969565b602681526000602082017f526f75746572577261707065723a2063616c6c6572206973206e6f742066756e81526519081c1bdbdb60d21b602082015291505b5060400190565b6020808252810161089d81611995565b601681526000602082017542696c6c696e673a20696e76616c6964206e6f6e636560501b81529150611952565b6020808252810161089d816119eb565b601381526000602082017242696c6c696e673a207478206578706972657360681b81529150611952565b6020808252810161089d81611a28565b601581526000602082017442696c6c696e673a206e6f6e63652065786973747360581b81529150611952565b6020808252810161089d81611a62565b60005b83811015611ab9578181015183820152602001611aa1565b83811115611ac8576000848401525b50505050565b6000611ad8825190565b808452602084019350611aef818560208601611a9e565b601f01601f19169290920192915050565b60608101611b0e82866117ce565b611b1b60208301856116d5565b81810360408301526108148184611ace565b8015156113fd565b805161089d81611b2d565b600060208284031215611b5557611b55600080fd5b60006112738484611b35565b601a81526000602082017f42696c6c696e673a20696e76616c6964207369676e617475726500000000000081529150611952565b6020808252810161089d81611b61565b6001600160401b0381166116d7565b60a08101611bc282886117ce565b611bcf60208301876116d5565b8181036040830152611be18186611ace565b9050611bf060608301856116d5565b610a116080830184611ba5565b60208082527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657291019081526000611952565b6020808252810161089d81611bfd565b602f81526000602082017f4f776e6572576974686472617761626c653a207769746864726177206e61746981526e1d99481d1bdad95b8819985a5b1959608a1b602082015291506119d4565b6020808252810161089d81611c3f565b60408101611ca982856118e9565b6109f360208301846116d5565b601d81526000602082017f42696c6c696e673a206e6f6e6578697374656e742070726f766964657200000081529150611952565b6020808252810161089d81611cb6565b60c08101611d0882896116d5565b611d1560208301886117ce565b611d2260408301876116d5565b611d2f60608301866116d5565b611d3c60808301856116d5565b61139f60a0830184611ba5565b60608101611d5782866118e9565b611d6460208301856117ce565b61127360408301846116d5565b60408101611ca982856117ce565b602681526000602082017f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206181526564647265737360d01b602082015291506119d4565b6020808252810161089d81611d7f565b602e81526000602082017f496e697469616c697a61626c653a20636f6e747261637420697320616c72656181526d191e481a5b9a5d1a585b1a5e995960921b602082015291506119d4565b6020808252810161089d81611dd2565b602b81526000602082017f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206981526a6e697469616c697a696e6760a81b602082015291506119d4565b6020808252810161089d81611e2d565b60006001600160401b03821115611e9e57611e9e611413565b5060209081020190565b805161089d816115ec565b60058110610a7457600080fd5b805161089d81611eb3565b600060408284031215611ee057611ee0600080fd5b611eea6040611455565b90506000611ef88484611ec0565b8252506020611f0984848301611ea8565b60208301525092915050565b6000611f236114b084611e85565b83815290506020810160408402830185811115611f4257611f42600080fd5b835b81811015611f685780611f578882611ecb565b845250602090920191604001611f44565b5050509392505050565b600082601f830112611f8657611f86600080fd5b8151611273848260208601611f15565b600060408284031215611fab57611fab600080fd5b611fb56040611455565b90506000611fc38484611ea8565b82525060208201516001600160401b03811115611fe257611fe2600080fd5b611f0984828501611f72565b6000611ffc6114b084611e85565b8381529050602080820190840283018581111561201b5761201b600080fd5b835b81811015611f685780516001600160401b0381111561203e5761203e600080fd5b80860161204b8982611f96565b855250506020928301920161201d565b600082601f83011261206f5761206f600080fd5b8151611273848260208601611fee565b60006020828403121561209457612094600080fd5b81516001600160401b038111156120ad576120ad600080fd5b6112738482850161205b565b634e487b7160e01b600052603260045260246000fd5b601981526000602082017f42696c6c696e673a20656d7074792062696c6c20656e7472790000000000000081529150611952565b6020808252810161089d816120cf565b634e487b7160e01b600052602160045260246000fd5b60058110610a7457610a74612113565b80610aff81612129565b600061089d82612139565b6116d781612143565b6080810161216582876117ce565b612172602083018661214e565b61217f60408301856116d5565b61081460608301846116d5565b6000602082840312156121a1576121a1600080fd5b60006112738484611ea8565b634e487b7160e01b600052601160045260246000fd5b60006000198214156121d7576121d76121ad565b5060010190565b601b81526000602082017f526f75746572577261707065723a207a65726f2061646472657373000000000081529150611952565b6020808252810161089d816121de565b80825b600185111561226157808604811115612240576122406121ad565b600185161561224e57908102905b800261225a8560011c90565b9450612225565b94509492505050565b600082612279575060016109f3565b81612286575060006109f3565b816001811461229c57600281146122a6576122d3565b60019150506109f3565b60ff8411156122b7576122b76121ad565b8360020a9150848211156122cd576122cd6121ad565b506109f3565b5060208310610133831016604e8410600b8410161715612306575081810a83811115612301576123016121ad565b6109f3565b6123138484846001612222565b92509050818404811115612329576123296121ad565b0292915050565b600061089a600019848461226a565b60008219821115612352576123526121ad565b500190565b602a81526000602082017f5361666545524332303a204552433230206f7065726174696f6e20646964206e8152691bdd081cdd58d8d9595960b21b602082015291506119d4565b6020808252810161089d81612357565b806116d7565b61190160f01b815260020160006123cb82856123ae565b6020820191506123db82846123ae565b5060200192915050565b63313ce56760e01b815260006004820161089d565b601b81526000602082017f5265736f75726365446174613a20696e76616c696420746f6b656e000000000081529150611952565b6020808252810161089d816123fa565b600082821015612450576124506121ad565b500390565b634e487b7160e01b600052601260045260246000fd5b60008261247a5761247a612455565b500490565b6000816000190483118215151615612499576124996121ad565b500290565b60a081016124ac82886116d5565b6124b960208301876116d5565b6124c660408301866116d5565b6124d360608301856116d5565b610a1160808301846117ce565b602681526000602082017f416464726573733a20696e73756666696369656e742062616c616e636520666f8152651c8818d85b1b60d21b602082015291506119d4565b6020808252810161089d816124e0565b601d81526000602082017f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000081529150611952565b6020808252810161089d81612533565b6000612581825190565b61258f818560208601611a9e565b9290920192915050565b60006109f38284612577565b6020808252810161089a8184611ace56fea2646970667358221220c44367f81d6111d5a6cc966f441cc014e262e888d6f808490bbf7f2b95a9a6aa64736f6c63430008090033";

export class Billing__factory extends ContractFactory {
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
  ): Promise<Billing> {
    return super.deploy(overrides || {}) as Promise<Billing>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Billing {
    return super.attach(address) as Billing;
  }
  connect(signer: Signer): Billing__factory {
    return super.connect(signer) as Billing__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BillingInterface {
    return new utils.Interface(_abi) as BillingInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Billing {
    return new Contract(address, _abi, signerOrProvider) as Billing;
  }
}
