# ContentTracer



> IPFS content tracer

## Globals
| Var | Type |
| --- | --- |
| metas | mapping(address => mapping(bytes32 => mapping(string => struct ContentTracer.ContentMeta))) |

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

### insertMult

> insert multiple ipfs content for accounts


#### Declaration
```
function insertMult(bytes32[] accounts,string[] contents,uint256[] sizes,uint256[] counts) external onlyProvider
```

#### Args:
| Arg | Type | Description |
| --- | --- | --- |
|`accounts` | bytes32[] | array of user account
|`contents` | string[] | array of ipfs contents
|`sizes` | uint256[] | array of ipfs content size
|`counts` | uint256[] | array of ipfs content count

### removeMult

> remove ipfs content


#### Declaration
```
function removeMult(bytes32[] accounts,string[] contents) external onlyProvider
```

#### Args:
| Arg | Type | Description |
| --- | --- | --- |
|`accounts` | bytes32[] | array of user account
|`contents` | string[] | array of ipfs contents


## Events

### Insert

> emit when ipfs content inserted

  
#### Params:
| Param | Type | Indexed | Description |
| --- | --- | :---: | --- |
|`provider` | address |  | provider address
|`account` | bytes32 |  | user account
|`content` | string |  | ipfs content
|`size` | uint256 |  | ipfs content size
|`count` | uint256 |  | ipfs content count
|`expiration` | uint256 |  | ipfs content expiration
### Remove

> emit when ipfs content removed

  
#### Params:
| Param | Type | Indexed | Description |
| --- | --- | :---: | --- |
|`provider` | address |  | provider address
|`account` | bytes32 |  | user account
|`content` | string |  | ipfs content
|`size` | uint256 |  | ipfs content size
|`count` | uint256 |  | ipfs content count
