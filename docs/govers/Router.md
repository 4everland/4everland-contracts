# Router



> Router contract

## Globals
| Var | Type |
| --- | --- |
| MessageReceiver | address |
| Governance | contract IGovernance |
| ProviderRegistry | contract IProviderRegistry |
| ProviderController | contract IProviderController |
| Token | contract IERC20Upgradeable |
| BuildingTimeController | contract INormalResourceController |
| BandwidthController | contract INormalResourceController |
| ARStorageController | contract INormalResourceController |
| IPFSStorageController | contract IIPFSStorageController |
| ResourcePriceAdaptor | contract IResourcePriceAdaptor |
| DstChainPayment | contract IDstChainPayment |
| Billing | contract IBilling |
| FundPool | contract IFundPool |

## Functions
### initialize

> proxy initialize function


#### Declaration
```
function initialize(address owner) external initializer
```

#### Args:
| Arg | Type | Description |
| --- | --- | --- |
|`owner` | address | contract owner

### setMessageReceiver

> set messageReceiver contract address


#### Declaration
```
function setMessageReceiver(address _messageReceiver) external onlyOwner
```

#### Args:
| Arg | Type | Description |
| --- | --- | --- |
|`_messageReceiver` | address | message receiver contract address

### setGovernance

> update GoverDrip contract address


#### Declaration
```
function setGovernance(contract IGovernance _governance) external onlyOwner
```

#### Args:
| Arg | Type | Description |
| --- | --- | --- |
|`_governance` | contract IGovernance | governance contract address

### setProviderRegistry

> update provider registry contract


#### Declaration
```
function setProviderRegistry(contract IProviderRegistry _providerRegistry) external onlyOwner
```

#### Args:
| Arg | Type | Description |
| --- | --- | --- |
|`_providerRegistry` | contract IProviderRegistry | provider registry contract address

### setProviderController

> update provider controller contract address


#### Declaration
```
function setProviderController(contract IProviderController _providerController) external onlyOwner
```

#### Args:
| Arg | Type | Description |
| --- | --- | --- |
|`_providerController` | contract IProviderController | provider controller contract address

### setToken

> update token address


#### Declaration
```
function setToken(contract IERC20Upgradeable _token) external onlyOwner
```

#### Args:
| Arg | Type | Description |
| --- | --- | --- |
|`_token` | contract IERC20Upgradeable | token address

### setBuildingTimeController

> update building time controller contract


#### Declaration
```
function setBuildingTimeController(contract INormalResourceController _buildingTimeController) external onlyOwner
```

#### Args:
| Arg | Type | Description |
| --- | --- | --- |
|`_buildingTimeController` | contract INormalResourceController | building time controller contract

### setBandwidthController

> update bandwidth controller contract


#### Declaration
```
function setBandwidthController(contract INormalResourceController _bandwidthController) external onlyOwner
```

#### Args:
| Arg | Type | Description |
| --- | --- | --- |
|`_bandwidthController` | contract INormalResourceController | bandwidth controller contract

### setARStorageController

> update AR storage controller contract


#### Declaration
```
function setARStorageController(contract INormalResourceController _arStorageController) external onlyOwner
```

#### Args:
| Arg | Type | Description |
| --- | --- | --- |
|`_arStorageController` | contract INormalResourceController | AR storage controller contract

### setIPFSStorageController

> update ipfs storage controller contract


#### Declaration
```
function setIPFSStorageController(contract IIPFSStorageController _ipfsStorageController) external onlyOwner
```

#### Args:
| Arg | Type | Description |
| --- | --- | --- |
|`_ipfsStorageController` | contract IIPFSStorageController | IPFS storage controller contract

### setResourcePriceAdaptor

> update resource adaptor contract


#### Declaration
```
function setResourcePriceAdaptor(contract IResourcePriceAdaptor _resourcePriceAdaptor) external onlyOwner
```

#### Args:
| Arg | Type | Description |
| --- | --- | --- |
|`_resourcePriceAdaptor` | contract IResourcePriceAdaptor | resource adaptor contract

### setDstChainPayment

> update dst chain payment contract address


#### Declaration
```
function setDstChainPayment(contract IDstChainPayment _dstChainPayment) external onlyOwner
```

#### Args:
| Arg | Type | Description |
| --- | --- | --- |
|`_dstChainPayment` | contract IDstChainPayment | dst chain payment contract address

### setBilling

> update resource adaptor contract


#### Declaration
```
function setBilling(contract IBilling _billing) external onlyOwner
```

#### Args:
| Arg | Type | Description |
| --- | --- | --- |
|`_billing` | contract IBilling | billing contract

### setFundPool

> update resource adaptor contract


#### Declaration
```
function setFundPool(contract IFundPool _pool) external onlyOwner
```

#### Args:
| Arg | Type | Description |
| --- | --- | --- |
|`_pool` | contract IFundPool | fund pool contract


