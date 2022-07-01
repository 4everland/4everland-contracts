# ResourcePriceAdaptor



> Resource price adaptor contract

## Globals
| Var | Type |
| --- | --- |
| priceIndexBlocks | mapping(address => uint256) |
| prices | mapping(address => mapping(enum ResourceData.ResourceType => mapping(uint256 => uint256))) |

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

### setPriceAdaptors

> update price adaptors


#### Declaration
```
function setPriceAdaptors(struct IResourcePriceAdaptor.PriceAdaptor[] adaptors) external onlyProvider
```

#### Args:
| Arg | Type | Description |
| --- | --- | --- |
|`adaptors` | struct IResourcePriceAdaptor.PriceAdaptor[] | price adaptors


