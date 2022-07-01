# SrcChainPayment



> source chain payment contract

## Globals
| Var | Type |
| --- | --- |
| token | contract IERC20Upgradeable |
| messageSender | contract IMessageSender |

## Functions
### initialize

> proxy initialize function


#### Declaration
```
function initialize(address owner,address pauser,contract IMessageSender messageSender,contract IERC20Upgradeable token) external initializer
```

#### Args:
| Arg | Type | Description |
| --- | --- | --- |
|`owner` | address | contract owner
|`pauser` | address | contract pauser
|`messageSender` | contract IMessageSender | messageSender address
|`token` | contract IERC20Upgradeable | token address

### pay

> pay from source chain


#### Declaration
```
function pay(address provider,uint64 nonce,bytes32 account,struct ResourceData.ValuePayload[] payloads,uint32 maxSlippage) external whenNotPaused nonReentrant returns (bytes32 transferId)
```

#### Args:
| Arg | Type | Description |
| --- | --- | --- |
|`provider` | address | provider address
|`nonce` | uint64 | nonce
|`account` | bytes32 | sender
|`payloads` | struct ResourceData.ValuePayload[] | payment payloads
|`maxSlippage` | uint32 | maxSlippage in cBridge

#### Returns:
| Type | Description |
| --- | --- |
|`transferId` | token transfer id in cBridge
### setMessageSender

> update message sender


#### Declaration
```
function setMessageSender(contract IMessageSender _messageSender) external onlyOwner
```

#### Args:
| Arg | Type | Description |
| --- | --- | --- |
|`_messageSender` | contract IMessageSender | message sender address

### setToken

> update token


#### Declaration
```
function setToken(contract IERC20Upgradeable _token) external onlyOwner
```

#### Args:
| Arg | Type | Description |
| --- | --- | --- |
|`_token` | contract IERC20Upgradeable | token address


## Events

### TokenUpdated

> emit when token updated

  
#### Params:
| Param | Type | Indexed | Description |
| --- | --- | :---: | --- |
|`token` | contract IERC20Upgradeable |  | token address
### MessageSenderUpdated

> emit when message sender updated

  
#### Params:
| Param | Type | Indexed | Description |
| --- | --- | :---: | --- |
|`messageSender` | contract IMessageSender |  | messageSender address
### Paid

> emit when user paid on src chain

  
#### Params:
| Param | Type | Indexed | Description |
| --- | --- | :---: | --- |
|`provider` | address |  | provider address
|`nonce` | uint64 |  | nonce
|`account` | bytes32 |  | sender
|`payloads` | struct ResourceData.ValuePayload[] |  | payment payloads
|`maxSlippage` | uint32 |  | maxSlippage in cBridge
