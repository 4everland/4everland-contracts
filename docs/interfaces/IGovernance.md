# IGovernance



> Governance interface


## Functions
### addProvider

> add a provider


#### Declaration
```
function addProvider(address provider) external
```

#### Args:
| Arg | Type | Description |
| --- | --- | --- |
|`provider` | address | address

### removeProvider

> remove a provider


#### Declaration
```
function removeProvider(address provider) external
```

#### Args:
| Arg | Type | Description |
| --- | --- | --- |
|`provider` | address | address

### drip

> drip resource to provider


#### Declaration
```
function drip(address provider,struct ResourceData.AmountPayload[] payloads) external
```

#### Args:
| Arg | Type | Description |
| --- | --- | --- |
|`provider` | address | provider address
|`payloads` | struct ResourceData.AmountPayload[] | resource payloads


## Events

### GovernanceDrip

> emit when governance drip resource to provider

  
#### Params:
| Param | Type | Indexed | Description |
| --- | --- | :---: | --- |
|`provider` | address |  | provider address
