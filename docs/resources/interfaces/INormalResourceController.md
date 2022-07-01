# INormalResourceController



> normal resource controller interface


## Functions
### allocateProvider

> allocate resource for the provider


#### Declaration
```
function allocateProvider(address provider,uint256 amount) external
```

#### Args:
| Arg | Type | Description |
| --- | --- | --- |
|`provider` | address | provider address
|`amount` | uint256 | resource amount

### paymentAllocate

> allocate user's resource balance


#### Declaration
```
function paymentAllocate(address provider,bytes32 account,uint256 amount) external
```

#### Args:
| Arg | Type | Description |
| --- | --- | --- |
|`provider` | address | provider address
|`account` | bytes32 | user account
|`amount` | uint256 | resource amount

### drip

> provider drip resource to account directly


#### Declaration
```
function drip(address provider,bytes32 account,uint256 amount) external
```

#### Args:
| Arg | Type | Description |
| --- | --- | --- |
|`provider` | address | provider address
|`account` | bytes32 | user account
|`amount` | uint256 | resource amount

### balanceOf

> resource balance


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
|`balance` | of the account
### providerBalanceOf

> resource balance


#### Declaration
```
function providerBalanceOf(address provider) external returns (uint256)
```

#### Args:
| Arg | Type | Description |
| --- | --- | --- |
|`provider` | address | provider address

#### Returns:
| Type | Description |
| --- | --- |
|`balance` | of the account

## Events

### ProviderAllocated

> emit when resource allocated for the provider

  
#### Params:
| Param | Type | Indexed | Description |
| --- | --- | :---: | --- |
|`provider` | address |  | provider address
|`amount` | uint256 |  | ipfs storage amount
### AccountAllocated

> emit when resource allocated for the account

  
#### Params:
| Param | Type | Indexed | Description |
| --- | --- | :---: | --- |
|`provider` | address |  | provider address
|`account` | bytes32 |  | user account
|`amount` | uint256 |  | ipfs storage amount
