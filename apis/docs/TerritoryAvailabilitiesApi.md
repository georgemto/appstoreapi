# AppStoreConnectApi.TerritoryAvailabilitiesApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**territoryAvailabilitiesUpdateInstance**](TerritoryAvailabilitiesApi.md#territoryAvailabilitiesUpdateInstance) | **PATCH** /v1/territoryAvailabilities/{id} | 



## territoryAvailabilitiesUpdateInstance

> TerritoryAvailabilityResponse territoryAvailabilitiesUpdateInstance(id, territoryAvailabilityUpdateRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.TerritoryAvailabilitiesApi();
let id = "id_example"; // String | the id of the requested resource
let territoryAvailabilityUpdateRequest = new AppStoreConnectApi.TerritoryAvailabilityUpdateRequest(); // TerritoryAvailabilityUpdateRequest | TerritoryAvailability representation
apiInstance.territoryAvailabilitiesUpdateInstance(id, territoryAvailabilityUpdateRequest, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| the id of the requested resource | 
 **territoryAvailabilityUpdateRequest** | [**TerritoryAvailabilityUpdateRequest**](TerritoryAvailabilityUpdateRequest.md)| TerritoryAvailability representation | 

### Return type

[**TerritoryAvailabilityResponse**](TerritoryAvailabilityResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

