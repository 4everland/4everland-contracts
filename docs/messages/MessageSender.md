# MessageSender



> Celer SGN source chain sender contract

## Globals
| Var | Type |
| --- | --- |
| srcChainPayment | address |
| messageBus | address |
| receiver | address |
| dstChainId | uint64 |

## Functions
### initialize

> proxy initialize function


#### Declaration
```
function initialize(address owner,address _messageBus,address _receiver,uint64 _dstChainId) external initializer
```

#### Args:
| Arg | Type | Description |
| --- | --- | --- |
|`owner` | address | contract owner
|`_messageBus` | address | src chain messageBus
|`_receiver` | address | dst chain receiver
|`_dstChainId` | uint64 | dst chain chainId

### sendMessageWithTransfer

> sendMessageWithTransfer to dst chain


#### Declaration
```
function sendMessageWithTransfer(address token,uint256 amount,uint64 nonce,uint32 maxSlippage,bytes message,enum MsgDataTypes.BridgeSendType bridgeSendType) external onlySrcChainPayment returns (bytes32)
```

#### Args:
| Arg | Type | Description |
| --- | --- | --- |
|`token` | address | src payment token address
|`amount` | uint256 | token amount
|`nonce` | uint64 | nonce
|`maxSlippage` | uint32 | maxSlippage for sgn cBridge
|`message` | bytes | message to dst chain
|`bridgeSendType` | enum MsgDataTypes.BridgeSendType | bridge send type for sgn cBridge

### executeMessageWithTransferRefund

> call when cBridge transfer failed


#### Declaration
```
function executeMessageWithTransferRefund(address _token,uint256 _amount,bytes _message,address executor) external onlyMessageBus returns (enum MessageSender.ExecutionStatus)
```

#### Args:
| Arg | Type | Description |
| --- | --- | --- |
|`_token` | address | token address
|`_amount` | uint256 | token amount
|`_message` | bytes | message
|`executor` | address | exector address

### setSrcChainPayment

> set src chain payment


#### Declaration
```
function setSrcChainPayment(address _payment) external onlyOwner
```

#### Args:
| Arg | Type | Description |
| --- | --- | --- |
|`_payment` | address | src chain payment address

### setMessageBus

> update message bus


#### Declaration
```
function setMessageBus(address messageBus) external onlyOwner
```

#### Args:
| Arg | Type | Description |
| --- | --- | --- |
|`messageBus` | address | message bus address

### setDstChainId

> set dst chain chainId


#### Declaration
```
function setDstChainId(uint64 dstChainId) external onlyOwner
```

#### Args:
| Arg | Type | Description |
| --- | --- | --- |
|`dstChainId` | uint64 | dst chainId

### setReceiver

> set dst chain receiver


#### Declaration
```
function setReceiver(address _receiver) external onlyOwner
```

#### Args:
| Arg | Type | Description |
| --- | --- | --- |
|`_receiver` | address | dst chain receiver

### messageId

> messageId for message bus


#### Declaration
```
function messageId(struct MsgDataTypes.RouteInfo route,uint64 dstChainId,bytes message) external returns (bytes32)
```

#### Args:
| Arg | Type | Description |
| --- | --- | --- |
|`route` | struct MsgDataTypes.RouteInfo | message route info
|`dstChainId` | uint64 | message route info
|`message` | bytes | message bytes


