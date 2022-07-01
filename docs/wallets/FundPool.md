# FundPool



> FundPool contract

## Globals
| Var | Type |
| --- | --- |
| balances | mapping(address => mapping(bytes32 => uint256)) |

## Functions
### initialize

> proxy initialize function


#### Declaration
```
function initialize(address owner,address pauser,contract IRouter router) external initializer
```

#### Args:
| Arg | Type | Description |
| --- | --- | --- |
|`owner` | address | contract owner
|`pauser` | address | contract pauser
|`router` | contract IRouter | router contract address

### recharge

> recharge for account


#### Declaration
```
function recharge(address provider,bytes32 account,uint256 amount) external whenNotPaused nonReentrant
```

#### Args:
| Arg | Type | Description |
| --- | --- | --- |
|`provider` | address | provider address
|`account` | bytes32 | user account
|`amount` | uint256 | token amount

### spend

> spend bills for account


#### Declaration
```
function spend(address provider,bytes32 account,bytes bills,uint256 timeout,uint64 nonce,bytes signature) external whenNotPaused nonReentrant returns (uint256 fee)
```

#### Args:
| Arg | Type | Description |
| --- | --- | --- |
|`provider` | address | provider address
|`account` | bytes32 | user account
|`bills` | bytes | billing data
|`timeout` | uint256 | tx timeout
|`nonce` | uint64 | billing nonce
|`signature` | bytes | provider signature

#### Returns:
| Type | Description |
| --- | --- |
|`fee` | bills fee
### withdraw

> withdraw token for account


#### Declaration
```
function withdraw(address provider,bytes32 account,bytes bills,uint256 timeout,uint64 nonce,bytes signature,address to,uint256 amount, signature) external whenNotPaused nonReentrant returns (uint256 fee)
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
|`to` | address | token receiver
|`amount` | uint256 | token amount
|`signature` |  | provider signature

#### Returns:
| Type | Description |
| --- | --- |
|`fee` | bill fee

