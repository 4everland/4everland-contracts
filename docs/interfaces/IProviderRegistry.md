# IProviderRegistry



> provider registry interface


## Functions
### addProvider

> add a provider


#### Declaration
```
function addProvider(address provider) external
```

#### Args:
| Arg | Type | Description |
| --- | --- | --- |
|`provider` | address | address

### removeProvider

> remove a provider


#### Declaration
```
function removeProvider(address provider) external
```

#### Args:
| Arg | Type | Description |
| --- | --- | --- |
|`provider` | address | address

### isProvider

> return whether address is a provider


#### Declaration
```
function isProvider(address provider) external returns (bool)
```

#### Args:
| Arg | Type | Description |
| --- | --- | --- |
|`provider` | address | address

### providerWallet

> return provider wallet


#### Declaration
```
function providerWallet(address provider) external returns (address)
```

#### Args:
| Arg | Type | Description |
| --- | --- | --- |
|`provider` | address | address

#### Returns:
| Type | Description |
| --- | --- |
|`provider` | wallet
### providerWalletExists

> return provider wallet exists


#### Declaration
```
function providerWalletExists(address provider) external returns (bool)
```

#### Args:
| Arg | Type | Description |
| --- | --- | --- |
|`provider` | address | address

#### Returns:
| Type | Description |
| --- | --- |
|`whether` | provider wallet exists
### isValidSignature

> return whether a valid signature


#### Declaration
```
function isValidSignature(address provider,bytes32 hash,bytes signature) external returns (bool)
```

#### Args:
| Arg | Type | Description |
| --- | --- | --- |
|`provider` | address | address
|`hash` | bytes32 | message hash
|`signature` | bytes | provider signature for message hash

#### Returns:
| Type | Description |
| --- | --- |
|`is` | valid signature

## Events

### AddProvider

> emit when provider is added

  
#### Params:
| Param | Type | Indexed | Description |
| --- | --- | :---: | --- |
|`provider` | address |  | provider address
### RemoveProvider

> emit when provider removed

  
#### Params:
| Param | Type | Indexed | Description |
| --- | --- | :---: | --- |
|`provider` | address |  | provider address
### AddProivderWallet


  

### RemoveProviderWallet


  

