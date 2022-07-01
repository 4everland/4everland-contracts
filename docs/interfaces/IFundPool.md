# IFundPool



> FundPool interface


## Functions
### recharge

> recharge for account


#### Declaration
```
function recharge(address provider,bytes32 account,uint256 amount) external
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
function spend(address provider,bytes32 account,bytes bills,uint256 timeout,uint64 nonce,bytes signature) external returns (uint256 fee)
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
function withdraw(address provider,bytes32 account,bytes bills,uint256 timeout,uint64 nonce,bytes signature,address to,uint256 amount, signature) external returns (uint256 fee)
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
### walletOf

> return wallet of the account


#### Declaration
```
function walletOf(address provider,bytes32 account) external returns (address)
```

#### Args:
| Arg | Type | Description |
| --- | --- | --- |
|`provider` | address | provider address
|`account` | bytes32 | user account

#### Returns:
| Type | Description |
| --- | --- |
|`wallet` | of the account
### balanceOf

> return balance of account


#### Declaration
```
function balanceOf(address provider,bytes32 account) external returns (uint256)
```

#### Args:
| Arg | Type | Description |
| --- | --- | --- |
|`provider` | address | provider address
|`account` | bytes32 | user account

#### Returns:
| Type | Description |
| --- | --- |
|`balance` | of account account

## Events

### Spent

> emit when bill spent

  
#### Params:
| Param | Type | Indexed | Description |
| --- | --- | :---: | --- |
|`provider` | address |  | provider address
|`account` | bytes32 |  | user account
|`amount` | uint256 |  | token amount
### Recharged

> emit when account recharged

  
#### Params:
| Param | Type | Indexed | Description |
| --- | --- | :---: | --- |
|`provider` | address |  | provider address
|`account` | bytes32 |  | user account
|`amount` | uint256 |  | token amount
### Withdrawn

> emit when user withdrawn

  
#### Params:
| Param | Type | Indexed | Description |
| --- | --- | :---: | --- |
|`provider` | address |  | provider address
|`account` | bytes32 |  | user account
|`to` | address |  | token receiver
|`amount` | uint256 |  | token amount
