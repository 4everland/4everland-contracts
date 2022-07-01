# ProviderController



> provider controller contract

## Globals
| Var | Type |
| --- | --- |
| accounts | mapping(address => mapping(bytes32 => bool)) |
| wallets | mapping(address => mapping(bytes32 => address)) |
| walletTypesHash | bytes32 |

## Functions
### initialize

> proxy initialize function


#### Declaration
```
function initialize(address owner,address pauser,string router) external initializer
```

#### Args:
| Arg | Type | Description |
| --- | --- | --- |
|`owner` | address | contract owner
|`pauser` | address | contract pauser
|`router` | string | router contract address

### registerAccount

> register account


#### Declaration
```
function registerAccount(bytes32 account) external onlyProvider
```

#### Args:
| Arg | Type | Description |
| --- | --- | --- |
|`account` | bytes32 | user account

### registerMult

> register multiple account


#### Declaration
```
function registerMult(bytes32[] accounts) external onlyProvider
```

#### Args:
| Arg | Type | Description |
| --- | --- | --- |
|`accounts` | bytes32[] | user accounts

### dripMult

> provider drip resource to multiple accounts


#### Declaration
```
function dripMult(bytes32[] accounts,struct ResourceData.AmountPayload[][] payloads) external onlyProvider
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
function drip(bytes32 account,struct ResourceData.AmountPayload[] payloads) external onlyProvider
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
function registerAndDripMult(bytes32[] accounts,struct ResourceData.AmountPayload[][] payloads) external onlyProvider
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


