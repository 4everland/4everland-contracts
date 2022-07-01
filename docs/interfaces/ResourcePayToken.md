# ResourcePayToken



> resource pay token interface


## Functions
### token

> token address

#### Declaration
```
function token() external returns (contract IERC20Upgradeable)
```



### matchTokenToResource

> match token amount to resource decimals


#### Declaration
```
function matchTokenToResource(uint256 value) external returns (uint256)
```

#### Args:
| Arg | Type | Description |
| --- | --- | --- |
|`value` | uint256 | token amount with resource decimals

#### Returns:
| Type | Description |
| --- | --- |
|`resource` | value
### matchResourceToToken

> match value to token decimals


#### Declaration
```
function matchResourceToToken(uint256 value) external returns (uint256)
```

#### Args:
| Arg | Type | Description |
| --- | --- | --- |
|`value` | uint256 | resource value

#### Returns:
| Type | Description |
| --- | --- |
|`token` | value
### decimals

> return resource decimals


#### Declaration
```
function decimals() external returns (uint256)
```


#### Returns:
| Type | Description |
| --- | --- |
|`resource` | decimals
### tokenDecimals

> return token decimals


#### Declaration
```
function tokenDecimals() external returns (uint256)
```


#### Returns:
| Type | Description |
| --- | --- |
|`token` | decimals

## Events

### TokenUpdated

> emit when token updated

  
#### Params:
| Param | Type | Indexed | Description |
| --- | --- | :---: | --- |
|`token` | contract IERC20Upgradeable |  | token address
