# ProviderRegistry



> provider registry contract

## Globals
| Var | Type |
| --- | --- |
| providers | mapping(address => bool) |
| providerWallets | mapping(address => address) |

## Functions
### initialize

> proxy initialize function


#### Declaration
```
function initialize(address owner,contract IRouter router) external initializer
```

#### Args:
| Arg | Type | Description |
| --- | --- | --- |
|`owner` | address | contract owner
|`router` | contract IRouter | router contract address

### addProvider

> add a provider


#### Declaration
```
function addProvider(address provider) external onlyGovernance
```

#### Args:
| Arg | Type | Description |
| --- | --- | --- |
|`provider` | address | address

### removeProvider

> remove a provider


#### Declaration
```
function removeProvider(address provider) external onlyGovernance
```

#### Args:
| Arg | Type | Description |
| --- | --- | --- |
|`provider` | address | address

### addWallet

> add provider wallet


#### Declaration
```
function addWallet(address wallet) external onlyProvider
```

#### Args:
| Arg | Type | Description |
| --- | --- | --- |
|`wallet` | address | wallet address

### removeWallet

> remove provider wallet


#### Declaration
```
function removeWallet(address wallet) external onlyProvider
```

#### Args:
| Arg | Type | Description |
| --- | --- | --- |
|`wallet` | address | wallet address


