# IBilling



> Billing interface


## Functions
### billingTypesHash

> get billing types hash


#### Declaration
```
function billingTypesHash() external returns (bytes32)
```


#### Returns:
| Type | Description |
| --- | --- |
|`billing` | types hash
### spend

> spend bills


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
|`signature` | bytes | billing signature

#### Returns:
| Type | Description |
| --- | --- |
|`fee` | billing fee
### balanceOf

> return balance of provider


#### Declaration
```
function balanceOf(address provider) external returns (uint256)
```

#### Args:
| Arg | Type | Description |
| --- | --- | --- |
|`provider` | address | provider address

#### Returns:
| Type | Description |
| --- | --- |
|`balance` | of provider
### nonceExists

> provider nonces for account


#### Declaration
```
function nonceExists(address provider,bytes32 account,uint64 nonce) external returns (bool)
```

#### Args:
| Arg | Type | Description |
| --- | --- | --- |
|`provider` | address | provider address
|`account` | bytes32 | user account
|`nonce` | uint64 | nonce

#### Returns:
| Type | Description |
| --- | --- |
|`whether` | nonce exists

## Events

### BillingTypesHashUpdated

> emit when billing types hash updated

  
#### Params:
| Param | Type | Indexed | Description |
| --- | --- | :---: | --- |
|`hash` | bytes32 |  | billing types Hash
### Billing

> emit when bills finalized

  
#### Params:
| Param | Type | Indexed | Description |
| --- | --- | :---: | --- |
|`provider` | address |  | provider address
|`account` | bytes32 |  | user account
|`bills` | bytes |  | bills data
|`amount` | uint256 |  | fee
|`nonce` | uint64 |  | nonce
