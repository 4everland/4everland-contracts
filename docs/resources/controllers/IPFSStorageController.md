# IPFSStorageController



> IPFS storage controller

## Globals
| Var | Type |
| --- | --- |
| providersStorage | mapping(address => struct IIPFSStorageController.Storage) |
| storages | mapping(address => mapping(bytes32 => struct IIPFSStorageController.Storage)) |

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

### allocateProvider

> allocate user's normal resource balance


#### Declaration
```
function allocateProvider(address provider,uint256 amount,uint256 expiration) external onlyGovernance
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
function drip(address provider,bytes32 account,uint256 amount,uint256 expiration) external onlyProviderController
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
function paymentAllocate(address provider,bytes32 account,uint256 amount,uint256 expiration) external onlyDstChainPayment
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


