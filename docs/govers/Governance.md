# Governance



> Governace contract


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
|`router` | contract IRouter | router contract

### drip

> governance drip resource to provider


#### Declaration
```
function drip(address provider,struct ResourceData.AmountPayload[] payloads) external onlyOwner
```

#### Args:
| Arg | Type | Description |
| --- | --- | --- |
|`provider` | address | provider address
|`payloads` | struct ResourceData.AmountPayload[] | resource amount payloads

### addProvider

> add a provider


#### Declaration
```
function addProvider(address provider) external onlyOwner
```

#### Args:
| Arg | Type | Description |
| --- | --- | --- |
|`provider` | address | address

### removeProvider

> remove a provider


#### Declaration
```
function removeProvider(address provider) external onlyOwner
```

#### Args:
| Arg | Type | Description |
| --- | --- | --- |
|`provider` | address | address


