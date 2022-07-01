# IRouter



> Router interface


## Functions
### MessageReceiver

> message receiver contract address

#### Declaration
```
function MessageReceiver() external returns (address)
```



### Governance

> Governance contract address

#### Declaration
```
function Governance() external returns (contract IGovernance)
```



### ProviderRegistry

> providers contract address

#### Declaration
```
function ProviderRegistry() external returns (contract IProviderRegistry)
```



### ProviderController

> provider controller contract address

#### Declaration
```
function ProviderController() external returns (contract IProviderController)
```



### Token

> token address

#### Declaration
```
function Token() external returns (contract IERC20Upgradeable)
```



### BuildingTimeController

> return building time controller

#### Declaration
```
function BuildingTimeController() external returns (contract INormalResourceController)
```



### BandwidthController

> return bandwidth controller

#### Declaration
```
function BandwidthController() external returns (contract INormalResourceController)
```



### ARStorageController

> return AR storage controller

#### Declaration
```
function ARStorageController() external returns (contract INormalResourceController)
```



### IPFSStorageController

> return ipfs storage controller

#### Declaration
```
function IPFSStorageController() external returns (contract IIPFSStorageController)
```



### ResourcePriceAdaptor

> return resource price adaptor contract address

#### Declaration
```
function ResourcePriceAdaptor() external returns (contract IResourcePriceAdaptor)
```



### DstChainPayment

> dst chain payment contract address

#### Declaration
```
function DstChainPayment() external returns (contract IDstChainPayment)
```



### Billing

> billing contract address

#### Declaration
```
function Billing() external returns (contract IBilling)
```



### FundPool

> fund pool contract address

#### Declaration
```
function FundPool() external returns (contract IFundPool)
```




## Events

### GovernanceUpdated

> emit when governance contract address updated

  
#### Params:
| Param | Type | Indexed | Description |
| --- | --- | :---: | --- |
|`governance` | contract IGovernance |  | governance contract address
### MessageReceiverUpdated

> emit when message receiver updated

  
#### Params:
| Param | Type | Indexed | Description |
| --- | --- | :---: | --- |
|`messageReceiver` | address |  | message receiver contract address
### ProviderRegistryUpdated

> emit when provider registry contract updated

  
#### Params:
| Param | Type | Indexed | Description |
| --- | --- | :---: | --- |
|`_providerRegistry` | contract IProviderRegistry |  | provider registry contract
### ProviderControllerUpdated

> emit when dst ProviderController contract address updated

  
#### Params:
| Param | Type | Indexed | Description |
| --- | --- | :---: | --- |
|`providerController` | contract IProviderController |  | ProviderController contract address
### TokenUpdated

> emit when token updated

  
#### Params:
| Param | Type | Indexed | Description |
| --- | --- | :---: | --- |
|`token` | contract IERC20Upgradeable |  | token address
### BuildingTimeControllerUpdated

> emit when building time controller updated

  
#### Params:
| Param | Type | Indexed | Description |
| --- | --- | :---: | --- |
|`buildingTimeController` | contract INormalResourceController |  | building time controller contract
### BandwidthControllerUpdated

> emit when bandwidth controller updated

  
#### Params:
| Param | Type | Indexed | Description |
| --- | --- | :---: | --- |
|`bandwidthController` | contract INormalResourceController |  | bandwidth controller contract
### ARStorageControllerUpdated

> emit when AR storage controller updated

  
#### Params:
| Param | Type | Indexed | Description |
| --- | --- | :---: | --- |
|`arStorageController` | contract INormalResourceController |  | AR storage controller contract
### IPFSStorageControllerUpdated

> emit when ipfs storage controller updated

  
#### Params:
| Param | Type | Indexed | Description |
| --- | --- | :---: | --- |
|`ipfsStorageController` | contract IIPFSStorageController |  | IPFS storage controller contract
### ResourcePriceAdaptorUpdated

> emit when resource price adaptor updated

  
#### Params:
| Param | Type | Indexed | Description |
| --- | --- | :---: | --- |
|`resourcePriceAdaptor` | contract IResourcePriceAdaptor |  | resource price adaptor contract
### DstChainPaymentUpdated

> emit when dst chain payment contract address updated

  
#### Params:
| Param | Type | Indexed | Description |
| --- | --- | :---: | --- |
|`dstChainPayment` | contract IDstChainPayment |  | dst chain payment contract address
### BillingUpdated

> emit when billing contract updated

  
#### Params:
| Param | Type | Indexed | Description |
| --- | --- | :---: | --- |
|`billing` | contract IBilling |  | billing contract
### FundPoolUpdated

> emit when fund pool contract updated

  
#### Params:
| Param | Type | Indexed | Description |
| --- | --- | :---: | --- |
|`fundPool` | contract IFundPool |  | fund pool contract
