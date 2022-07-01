# Billing



> Billing contract

## Globals
| Var | Type |
| --- | --- |
| billingTypesHash | bytes32 |
| nonces | mapping(address => mapping(bytes32 => mapping(uint64 => bool))) |
| balances | mapping(address => uint256) |

## Functions
### initialize

> proxy initialize function


#### Declaration
```
function initialize(address owner,string name,string version,string router) external initializer
```

#### Args:
| Arg | Type | Description |
| --- | --- | --- |
|`owner` | address | contract owner
|`name` | string | EIP712 name
|`version` | string | EIP712 version
|`router` | string | router contract address

### spend

> spend bills


#### Declaration
```
function spend(address provider,bytes32 account,bytes bills,uint256 timeout,uint64 nonce,bytes signature) external nonReentrant onlyFundPool returns (uint256 fee)
```

#### Args:
| Arg | Type | Description |
| --- | --- | --- |
|`provider` | address | provider address
|`account` | bytes32 | user account
|`bills` | bytes | billing data
|`timeout` | uint256 | tx timeout
|`nonce` | uint64 | billing nonce
|`signature` | bytes | billing signature

#### Returns:
| Type | Description |
| --- | --- |
|`fee` | billing fee
### billFee

> return bill fee


#### Declaration
```
function billFee(address provider,bytes data) external returns (uint256 value)
```

#### Args:
| Arg | Type | Description |
| --- | --- | --- |
|`provider` | address | provider address
|`data` | bytes | bill data

#### Returns:
| Type | Description |
| --- | --- |
|`value` | bill fee

