# IDstChainPayment



> DstChainPayment interface


## Functions
### payFromSourceChain

> pay from source chain only called by message receiver


#### Declaration
```
function payFromSourceChain(contract IERC20Upgradeable _token,uint256 dstAmount,bytes message) external
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
function pay(struct IDstChainPayment.PaymentPayload payload) external returns (uint256 value)
```

#### Args:
| Arg | Type | Description |
| --- | --- | --- |
|`payload` | struct IDstChainPayment.PaymentPayload | payment payload

#### Returns:
| Type | Description |
| --- | --- |
|`value` | payment value
### decodeSourceChainMessage

> decode source chain message


#### Declaration
```
function decodeSourceChainMessage(bytes message) external returns (address provider, uint64 nonce, bytes32 account, struct ResourceData.ValuePayload[] payloads)
```

#### Args:
| Arg | Type | Description |
| --- | --- | --- |
|`message` | bytes | message bytes

#### Returns:
| Type | Description |
| --- | --- |
|`provider` | provider address
|`nonce` | nonce
|`account` | user account
|`payloads` | payment payloads
### ipfsAlloctionsFee

> calculate fee for ipfs storage and expiration


#### Declaration
```
function ipfsAlloctionsFee(address provider,bytes32 account,uint256 amount,uint256 expiration) external returns (uint256 storageFee, uint256 expirationFee)
```

#### Args:
| Arg | Type | Description |
| --- | --- | --- |
|`provider` | address | provider address
|`account` | bytes32 | user account
|`amount` | uint256 | ipfs storage amount
|`expiration` | uint256 | ipfs expiration(in seconds)

#### Returns:
| Type | Description |
| --- | --- |
|`storageFee` | ipfs storage fee
|`expirationFee` | ipfs expiration fee
### ipfsAllocations

> calculate ipfs storage and expiration with storage fee and expiration fee


#### Declaration
```
function ipfsAllocations(address provider,bytes32 account,uint256 storageFee,uint256 expirationFee) external returns (uint256 amount, uint256 expiration)
```

#### Args:
| Arg | Type | Description |
| --- | --- | --- |
|`provider` | address | provider address
|`account` | bytes32 | user account
|`storageFee` | uint256 | storage fee
|`expirationFee` | uint256 | expiration fee

#### Returns:
| Type | Description |
| --- | --- |
|`amount` | ipfs storage amount
|`expiration` | ipfs expiration(in seconds)
### balanceOf

> return balance of provider


#### Declaration
```
function balanceOf(address provider) external returns (uint256)
```

#### Args:
| Arg | Type | Description |
| --- | --- | --- |
|`provider` | address | provider address

#### Returns:
| Type | Description |
| --- | --- |
|`balance` | of provider
### priceOf

> return resource price


#### Declaration
```
function priceOf(address provider,enum ResourceData.ResourceType resourceType) external returns (uint256)
```

#### Args:
| Arg | Type | Description |
| --- | --- | --- |
|`provider` | address | provider address
|`resourceType` | enum ResourceData.ResourceType | resource type

#### Returns:
| Type | Description |
| --- | --- |
|`resource` | price
### getValueOf

> return value of amount resource


#### Declaration
```
function getValueOf(address provider,enum ResourceData.ResourceType resourceType,uint256 amount) external returns (uint256)
```

#### Args:
| Arg | Type | Description |
| --- | --- | --- |
|`provider` | address | provider address
|`resourceType` | enum ResourceData.ResourceType | resource type
|`amount` | uint256 | resource amount

#### Returns:
| Type | Description |
| --- | --- |
|`token` | value
### getAmountOf

> return resource amount with value


#### Declaration
```
function getAmountOf(address provider,enum ResourceData.ResourceType resourceType,uint256 value) external returns (uint256)
```

#### Args:
| Arg | Type | Description |
| --- | --- | --- |
|`provider` | address | provider address
|`resourceType` | enum ResourceData.ResourceType | resource type
|`value` | uint256 | token value

#### Returns:
| Type | Description |
| --- | --- |
|`resource` | amount

## Events

### Paid

> emit when a user paid

  
#### Params:
| Param | Type | Indexed | Description |
| --- | --- | :---: | --- |
|`token` | contract IERC20Upgradeable |  | token address
|`payload` | struct IDstChainPayment.PaymentPayload |  | payment payload
