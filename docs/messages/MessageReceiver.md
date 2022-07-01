# MessageReceiver



> dst chain message receiver

## Globals
| Var | Type |
| --- | --- |
| messageBus | address |
| executor | address |

## Functions
### initialize

> proxy intialize function


#### Declaration
```
function initialize(address owner,address _messageBus,address _executor) external initializer
```

#### Args:
| Arg | Type | Description |
| --- | --- | --- |
|`owner` | address | contract owner
|`_messageBus` | address | dst chain message bus
|`_executor` | address | executor address

### executeMessageWithTransfer

> execute message with transfer


#### Declaration
```
function executeMessageWithTransfer(address sender,contract IERC20Upgradeable token,uint256 amount,uint64 srcChainId,bytes message,address _executor) external onlyMessageBus returns (enum MessageReceiver.ExecutionStatus)
```

#### Args:
| Arg | Type | Description |
| --- | --- | --- |
|`sender` | address | message sender address
|`token` | contract IERC20Upgradeable | token address
|`amount` | uint256 | token amount
|`srcChainId` | uint64 | src chain chainId
|`message` | bytes | src chain message
|`_executor` | address | executor address

### executeMessageWithTransferFallback

> execute message with transfer fallback


#### Declaration
```
function executeMessageWithTransferFallback(address _sender,address _token,uint256 _amount,uint64 _srcChainId,bytes _message,address executor) external onlyMessageBus returns (enum MessageReceiver.ExecutionStatus)
```

#### Args:
| Arg | Type | Description |
| --- | --- | --- |
|`_sender` | address | message sender address
|`_token` | address | token address
|`_amount` | uint256 | token amount
|`_srcChainId` | uint64 | src chain chainId
|`_message` | bytes | src chain message
|`executor` | address | executor address

### setMessageBus

> set message bus


#### Declaration
```
function setMessageBus(address messageBus) external onlyOwner
```

#### Args:
| Arg | Type | Description |
| --- | --- | --- |
|`messageBus` | address | message bus address

### setExecutor

> set executor address


#### Declaration
```
function setExecutor(address _executor) external onlyOwner
```

#### Args:
| Arg | Type | Description |
| --- | --- | --- |
|`_executor` | address | executor address


## Events

### MessageBusUpdated

> emit when message bus updated

  
#### Params:
| Param | Type | Indexed | Description |
| --- | --- | :---: | --- |
|`messageBus` | address |  | dst chain messageBus in sgn
### ExecutorUpdated

> emit when executor changed

  
#### Params:
| Param | Type | Indexed | Description |
| --- | --- | :---: | --- |
|`executor` | address |  | executor address
### MessageWithTransferExecuted

> emit when message with transfer executed

  
#### Params:
| Param | Type | Indexed | Description |
| --- | --- | :---: | --- |
|`sender` | address |  | message sender address
|`token` | contract IERC20Upgradeable |  | token address
|`amount` | uint256 |  | token amount
|`srcChainId` | uint64 |  | src chain chainId
|`message` | bytes |  | src chain message
|`executor` | address |  | executor address
### MessageWithTransferFailed

> emit message with transfer failed

  
#### Params:
| Param | Type | Indexed | Description |
| --- | --- | :---: | --- |
|`sender` | address |  | message sender address
|`token` | contract IERC20Upgradeable |  | token address
|`amount` | uint256 |  | token amount
|`srcChainId` | uint64 |  | src chain chainId
|`message` | bytes |  | src chain message
|`executor` | address |  | executor address
|`error` | bytes |  | error message
### MessageWithTransferFallback

> emit when message with transfer fallback

  
#### Params:
| Param | Type | Indexed | Description |
| --- | --- | :---: | --- |
|`_sender` | address |  | message sender address
|`_token` | address |  | token address
|`_amount` | uint256 |  | token amount
|`_srcChainId` | uint64 |  | src chain chainId
|`_message` | bytes |  | src chain message
|`executor` | address |  | executor address
