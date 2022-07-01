# IIPFSStorageController



> IPFS storage controller interface


## Functions
### allocateProvider

> allocate user's normal resource balance


#### Declaration
```
function allocateProvider(address provider,uint256 amount,uint256 expiration) external
```

#### Args:
| Arg | Type | Description |
| --- | --- | --- |
|`provider` | address | provider address
|`amount` | uint256 | resource amount
|`expiration` | uint256 | ipfs expiration

### drip

> provider drip resource to account directly


#### Declaration
```
function drip(address provider,bytes32 account,uint256 amount,uint256 expiration) external
```

#### Args:
| Arg | Type | Description |
| --- | --- | --- |
|`provider` | address | provider address
|`account` | bytes32 | user account
|`amount` | uint256 | ipfs storage amount
|`expiration` | uint256 | ipfs expiration

### paymentAllocate

> allocate user's resource balance


#### Declaration
```
function paymentAllocate(address provider,bytes32 account,uint256 amount,uint256 expiration) external
```

#### Args:
| Arg | Type | Description |
| --- | --- | --- |
|`provider` | address | provider address
|`account` | bytes32 | user account
|`amount` | uint256 | ipfs storage amount
|`expiration` | uint256 | ipfs expiration

### recoverStorage

> recover provider storage


#### Declaration
```
function recoverStorage(address provider,bytes32 account) external
```

#### Args:
| Arg | Type | Description |
| --- | --- | --- |
|`provider` | address | provider address
|`account` | bytes32 | user account

### isProviderExpired

> return whether ipfs storage is expired for the provider


#### Declaration
```
function isProviderExpired(address provider) external returns (bool)
```

#### Args:
| Arg | Type | Description |
| --- | --- | --- |
|`provider` | address | provider address

#### Returns:
| Type | Description |
| --- | --- |
|`whether` | ipfs storage is expired for the provider
### providerStartTime

> return ipfs storage start time for the provider


#### Declaration
```
function providerStartTime(address provider) external returns (uint256)
```

#### Args:
| Arg | Type | Description |
| --- | --- | --- |
|`provider` | address | provider address

#### Returns:
| Type | Description |
| --- | --- |
|`start` | time for the provider
### providerExpiration

> return total expiration time for the provider


#### Declaration
```
function providerExpiration(address provider) external returns (uint256)
```

#### Args:
| Arg | Type | Description |
| --- | --- | --- |
|`provider` | address | provider address

#### Returns:
| Type | Description |
| --- | --- |
|`total` | expiration time for the provider
### providerAvailableExpiration

> return available expiration time for the provider


#### Declaration
```
function providerAvailableExpiration(address provider) external returns (uint256)
```

#### Args:
| Arg | Type | Description |
| --- | --- | --- |
|`provider` | address | provider address

#### Returns:
| Type | Description |
| --- | --- |
|`available` | expiration time for the provider
### providerExpiredAt

> return when the provider will expire


#### Declaration
```
function providerExpiredAt(address provider) external returns (uint256)
```

#### Args:
| Arg | Type | Description |
| --- | --- | --- |
|`provider` | address | provider address

#### Returns:
| Type | Description |
| --- | --- |
|`when` | the provider will expire
### providerBalanceOf

> return ipfs storage amount for the provider


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
|`ipfs` | storage amount for the provider
### isExpired

> return whether ipfs storage is expired for the account


#### Declaration
```
function isExpired(address provider,bytes32 account) external returns (bool)
```

#### Args:
| Arg | Type | Description |
| --- | --- | --- |
|`provider` | address | provider address
|`account` | bytes32 | user account

#### Returns:
| Type | Description |
| --- | --- |
|`whether` | ipfs storage is expired for the account
### availableExpiration

> return available expiration time for the account


#### Declaration
```
function availableExpiration(address provider,bytes32 account) external returns (uint256)
```

#### Args:
| Arg | Type | Description |
| --- | --- | --- |
|`provider` | address | provider address
|`account` | bytes32 | user account

#### Returns:
| Type | Description |
| --- | --- |
|`available` | expiration time for the account
### expiredAt

> return when the account will expire


#### Declaration
```
function expiredAt(address provider,bytes32 account) external returns (uint256)
```

#### Args:
| Arg | Type | Description |
| --- | --- | --- |
|`provider` | address | provider address
|`account` | bytes32 | user account

#### Returns:
| Type | Description |
| --- | --- |
|`when` | the account will expire
### startTime

> return ipfs storage start time for the account


#### Declaration
```
function startTime(address provider,bytes32 account) external returns (uint256)
```

#### Args:
| Arg | Type | Description |
| --- | --- | --- |
|`provider` | address | provider address
|`account` | bytes32 | user account

#### Returns:
| Type | Description |
| --- | --- |
|`start` | time for the account
### expiration

> return total expiration time for the account


#### Declaration
```
function expiration(address provider,bytes32 account) external returns (uint256)
```

#### Args:
| Arg | Type | Description |
| --- | --- | --- |
|`provider` | address | provider address
|`account` | bytes32 | user account

#### Returns:
| Type | Description |
| --- | --- |
|`total` | expiration time for the account
### balanceOf

> return ipfs storage amount for the account


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
|`ipfs` | storage amount for the account

## Events

### ProviderAllocated

> emit when ipfs storage allocated for the provider

  
#### Params:
| Param | Type | Indexed | Description |
| --- | --- | :---: | --- |
|`provider` | address |  | provider address
|`amount` | uint256 |  | ipfs storage amount
|`expiration` | uint256 |  | ipfs storage expiration
### AccountAllocated

> emit when ipfs storage allocated for the account

  
#### Params:
| Param | Type | Indexed | Description |
| --- | --- | :---: | --- |
|`provider` | address |  | provider address
|`account` | bytes32 |  | user account
|`amount` | uint256 |  | ipfs storage amount
|`expiration` | uint256 |  | ipfs storage expiration
### ProviderRecovered

> emit when provider recovered ipfs storage

  
#### Params:
| Param | Type | Indexed | Description |
| --- | --- | :---: | --- |
|`provider` | address |  | provider address
|`account` | bytes32 |  | user account
|`amount` | uint256 |  | ipfs storage amount
