# DstChainPayment



> Dst chain payment contract

## Globals
| Var | Type |
| --- | --- |
| balances | mapping(address => uint256) |

## Functions
### initialize

> proxy initialize function


#### Declaration
```
function initialize(address owner,address pauser,contract IRouter router) external initializer
```

#### Args:
| Arg | Type | Description |
| --- | --- | --- |
|`owner` | address | contract owner
|`pauser` | address | contract pauser
|`router` | contract IRouter | router contract

### payFromSourceChain

> pay from source chain only called by message receiver


#### Declaration
```
function payFromSourceChain(contract IERC20Upgradeable _token,uint256 dstAmount,bytes message) external onlyMessageReceiver whenNotPaused nonReentrant
```

#### Args:
| Arg | Type | Description |
| --- | --- | --- |
|`_token` | contract IERC20Upgradeable | token address
|`dstAmount` | uint256 | token amount
|`message` | bytes | payment payload message bytes

### pay

> pay on dst chain


#### Declaration
```
function pay(struct IDstChainPayment.PaymentPayload payload) external whenNotPaused nonReentrant returns (uint256 value)
```

#### Args:
| Arg | Type | Description |
| --- | --- | --- |
|`payload` | struct IDstChainPayment.PaymentPayload | payment payload

#### Returns:
| Type | Description |
| --- | --- |
|`value` | payment value

