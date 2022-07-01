# NormalResourceController



> Normal resource controller

## Globals
| Var | Type |
| --- | --- |
| providerBalances | mapping(address => uint256) |
| balances | mapping(address => mapping(bytes32 => uint256)) |

## Functions
### allocateProvider

> allocate resource for the provider


#### Declaration
```
function allocateProvider(address provider,uint256 amount) external onlyGovernance
```

#### Args:
| Arg | Type | Description |
| --- | --- | --- |
|`provider` | address | provider address
|`amount` | uint256 | resource amount

### drip

> provider drip resource to account directly


#### Declaration
```
function drip(address provider,bytes32 account,uint256 amount) external onlyProviderController
```

#### Args:
| Arg | Type | Description |
| --- | --- | --- |
|`provider` | address | provider address
|`account` | bytes32 | user account
|`amount` | uint256 | resource amount

### paymentAllocate

> allocate user's resource balance


#### Declaration
```
function paymentAllocate(address provider,bytes32 account,uint256 amount) external onlyDstChainPayment
```

#### Args:
| Arg | Type | Description |
| --- | --- | --- |
|`provider` | address | provider address
|`account` | bytes32 | user account
|`amount` | uint256 | resource amount


