# OwnerWithdrawable



> Make the contract owner can withdraw token and eth


## Functions
### ownerWithdrawERC20

> withdraw token


#### Declaration
```
function ownerWithdrawERC20(contract IERC20Upgradeable token,address to,uint256 value) external onlyOwner
```

#### Args:
| Arg | Type | Description |
| --- | --- | --- |
|`token` | contract IERC20Upgradeable | token address
|`to` | address | receiver address
|`value` | uint256 | token value

### ownerWithdrawNative

> withdraw ETH


#### Declaration
```
function ownerWithdrawNative(address payable to,uint256 value) external onlyOwner
```

#### Args:
| Arg | Type | Description |
| --- | --- | --- |
|`to` | address payable | receiver address
|`value` | uint256 | token value


## Events

### Withdrawal

> emit when token is withdrawn

  
#### Params:
| Param | Type | Indexed | Description |
| --- | --- | :---: | --- |
|`token` | contract IERC20Upgradeable |  | token address
|`to` | address |  | receiver address
|`value` | uint256 |  | token value
### NativeWithdrawal

> emit when ETH is withdrawn

  
#### Params:
| Param | Type | Indexed | Description |
| --- | --- | :---: | --- |
|`to` | address |  | receiver address
|`value` | uint256 |  | token value
