# IResourcePriceAdaptor



> resource adpator interface


## Functions
### priceAt

> get price for resource at a specific block


#### Declaration
```
function priceAt(address provider,enum ResourceData.ResourceType resourceType,uint256 priceIndexBlock) external returns (uint256)
```

#### Args:
| Arg | Type | Description |
| --- | --- | --- |
|`provider` | address | provider address
|`resourceType` | enum ResourceData.ResourceType | resource type
|`priceIndexBlock` | uint256 | block number

#### Returns:
| Type | Description |
| --- | --- |
|`price` | for resource at a specific block
### getValueAt

> get value for `amount` resource at a specific block


#### Declaration
```
function getValueAt(address provider,enum ResourceData.ResourceType resourceType,uint256 amount,uint256 priceIndexBlock) external returns (uint256)
```

#### Args:
| Arg | Type | Description |
| --- | --- | --- |
|`provider` | address | provider address
|`resourceType` | enum ResourceData.ResourceType | resource type
|`amount` | uint256 | resource amount
|`priceIndexBlock` | uint256 | block number

#### Returns:
| Type | Description |
| --- | --- |
|`token` | value in resource decimals(18)
### getAmountAt

> get amount resource with value at a specific block


#### Declaration
```
function getAmountAt(address provider,enum ResourceData.ResourceType resourceType,uint256 value,uint256 priceIndexBlock) external returns (uint256)
```

#### Args:
| Arg | Type | Description |
| --- | --- | --- |
|`provider` | address | provider address
|`resourceType` | enum ResourceData.ResourceType | resource type
|`value` | uint256 | token value
|`priceIndexBlock` | uint256 | block numer

#### Returns:
| Type | Description |
| --- | --- |
|`resource` | amount
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
|`token` | value in resource decimals(18)
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
|`value` | uint256 | token value in resource decimals(18)

#### Returns:
| Type | Description |
| --- | --- |
|`resource` | amount

## Events

### PriceIndexBlockUpdated

> emit when index block updated

  
#### Params:
| Param | Type | Indexed | Description |
| --- | --- | :---: | --- |
|`provider` | address |  | provider address
|`priceIndexBlock` | uint256 |  | price index block
### PriceAdaptorsUpdated

> emit when price updated

  
#### Params:
| Param | Type | Indexed | Description |
| --- | --- | :---: | --- |
|`provider` | address |  | provider address
|`adaptors` | struct IResourcePriceAdaptor.PriceAdaptor[] |  | price adaptors
