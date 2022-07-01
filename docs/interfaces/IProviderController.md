# IProviderController



> provider controller interface


## Functions
### walletTypesHash

> keccak256("Wallet(address provider,bytes32 account,address wallet)")

#### Declaration
```
function walletTypesHash() external returns (bytes32)
```



### registerAccount

> register account


#### Declaration
```
function registerAccount(bytes32 account) external
```

#### Args:
| Arg | Type | Description |
| --- | --- | --- |
|`account` | bytes32 | user account

### registerMult

> register multiple account


#### Declaration
```
function registerMult(bytes32[] accounts) external
```

#### Args:
| Arg | Type | Description |
| --- | --- | --- |
|`accounts` | bytes32[] | user accounts

### accountExists

> Explain to a developer any extra details


#### Declaration
```
function accountExists(address provider,bytes32 account) external returns (bool)
```

#### Args:
| Arg | Type | Description |
| --- | --- | --- |
|`provider` | address | provider address
|`account` | bytes32 | user account

#### Returns:
| Type | Description |
| --- | --- |
|`whether` | account exists
### dripMult

> provider drip resource to multiple accounts


#### Declaration
```
function dripMult(bytes32[] accounts,struct ResourceData.AmountPayload[][] payloads) external
```

#### Args:
| Arg | Type | Description |
| --- | --- | --- |
|`accounts` | bytes32[] | user accounts
|`payloads` | struct ResourceData.AmountPayload[][] | resource amount payloads

### drip

> provider drip resource to user account


#### Declaration
```
function drip(bytes32 account,struct ResourceData.AmountPayload[] payloads) external
```

#### Args:
| Arg | Type | Description |
| --- | --- | --- |
|`account` | bytes32 | user account
|`payloads` | struct ResourceData.AmountPayload[] | resource amount payloads

### registerAndDripMult

> provider register and drip resource for multiple accounts


#### Declaration
```
function registerAndDripMult(bytes32[] accounts,struct ResourceData.AmountPayload[][] payloads) external
```

#### Args:
| Arg | Type | Description |
| --- | --- | --- |
|`accounts` | bytes32[] | user accounts
|`payloads` | struct ResourceData.AmountPayload[][] | resource amount payloads

### initWallet

> initialize wallet for the given account


#### Declaration
```
function initWallet(address provider,bytes32 account,address wallet,bytes signature) external
```

#### Args:
| Arg | Type | Description |
| --- | --- | --- |
|`provider` | address | provider address
|`account` | bytes32 | user account
|`wallet` | address | account wallet
|`signature` | bytes | provider signature

### transferWallet

> transfer wallet for the account


#### Declaration
```
function transferWallet(address provider,bytes32 account,address newWallet) external
```

#### Args:
| Arg | Type | Description |
| --- | --- | --- |
|`provider` | address | provider address
|`account` | bytes32 | user account
|`newWallet` | address | account wallet

### walletOf

> return wallet for the account


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
|`wallet` | for the account
### walletExists

> return whether wallet exists


#### Declaration
```
function walletExists(address provider,bytes32 account) external returns (bool)
```

#### Args:
| Arg | Type | Description |
| --- | --- | --- |
|`provider` | address | provider address
|`account` | bytes32 | user account

#### Returns:
| Type | Description |
| --- | --- |
|`whether` | wallet exists

## Events

### AccountRegistered

> emit when account registered in provider

  
#### Params:
| Param | Type | Indexed | Description |
| --- | --- | :---: | --- |
|`provider` | address |  | provider address
|`account` | bytes32 |  | user account
### ProviderDripped

> emit when provider drip resource to account

  
#### Params:
| Param | Type | Indexed | Description |
| --- | --- | :---: | --- |
|`provider` | address |  | provider address
|`account` | bytes32 |  | user account
### WalletTypesHashUpdated

> emit when wallet types hash updated

  
#### Params:
| Param | Type | Indexed | Description |
| --- | --- | :---: | --- |
|`hash` | bytes32 |  | wallet types hash
### WalletTransferred

> emit when wallet transferred

  
#### Params:
| Param | Type | Indexed | Description |
| --- | --- | :---: | --- |
|`provider` | address |  | provider address
|`account` | bytes32 |  | user account
|`from` | address |  | original wallet address
|`to` | address |  | new wallet address
