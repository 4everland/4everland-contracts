# IMessageSender






## Functions
### receiver

> dst chain receiver

#### Declaration
```
function receiver() external returns (address)
```



### dstChainId

> dst chain chainId

#### Declaration
```
function dstChainId() external returns (uint64)
```



### calcFee

> calculate message fee

#### Declaration
```
function calcFee() external returns (uint256)
```



### messageId

> message id for Message bus in sgn

#### Declaration
```
function messageId() external returns (bytes32)
```



### sendMessageWithTransfer

> send message with transfer to dst chain


#### Declaration
```
function sendMessageWithTransfer(address token,uint256 amount,uint64 nonce,uint32 maxSlippage,bytes message,enum MsgDataTypes.BridgeSendType bridgeSendType) external returns (bytes32)
```

#### Args:
| Arg | Type | Description |
| --- | --- | --- |
|`token` | address | pay token
|`amount` | uint256 | token amount
|`nonce` | uint64 | nonce
|`maxSlippage` | uint32 | max slippage for cBridge in sgn
|`message` | bytes | message for dst chain
|`bridgeSendType` | enum MsgDataTypes.BridgeSendType | bridge send type for cBridge

#### Returns:
| Type | Description |
| --- | --- |
|`messageId` | message id for messageBus in sgn

## Events

### SrcChainPaymentUpdated

> emit when src chain payment address updated

  
#### Params:
| Param | Type | Indexed | Description |
| --- | --- | :---: | --- |
|`payment` | address |  | payment address
### MessageBusUpdated

> emit when src chain messageBus address updated

  
#### Params:
| Param | Type | Indexed | Description |
| --- | --- | :---: | --- |
|`messageBus` | address |  | messageBus address
### ReceiverUpdated

> emit when dst chain receiver address updated

  
#### Params:
| Param | Type | Indexed | Description |
| --- | --- | :---: | --- |
|`receiver` | address |  | receiver address
### DstChainIdUpdated

> emit when dst chain updated

  
#### Params:
| Param | Type | Indexed | Description |
| --- | --- | :---: | --- |
|`dstChainId` | uint64 |  | dst chainId
### MessageWithTransferRefund

> emit when transfer refund

  
#### Params:
| Param | Type | Indexed | Description |
| --- | --- | :---: | --- |
|`token` | address |  | token address
|`amount` | uint256 |  | token amount
|`message` | bytes |  | sender's message
|`executor` | address |  | executor address
