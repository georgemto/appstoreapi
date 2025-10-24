# AppStoreConnectApi.InAppPurchaseAvailabilitiesApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**inAppPurchaseAvailabilitiesAvailableTerritoriesGetToManyRelated**](InAppPurchaseAvailabilitiesApi.md#inAppPurchaseAvailabilitiesAvailableTerritoriesGetToManyRelated) | **GET** /v1/inAppPurchaseAvailabilities/{id}/availableTerritories | 
[**inAppPurchaseAvailabilitiesAvailableTerritoriesGetToManyRelationship**](InAppPurchaseAvailabilitiesApi.md#inAppPurchaseAvailabilitiesAvailableTerritoriesGetToManyRelationship) | **GET** /v1/inAppPurchaseAvailabilities/{id}/relationships/availableTerritories | 
[**inAppPurchaseAvailabilitiesCreateInstance**](InAppPurchaseAvailabilitiesApi.md#inAppPurchaseAvailabilitiesCreateInstance) | **POST** /v1/inAppPurchaseAvailabilities | 
[**inAppPurchaseAvailabilitiesGetInstance**](InAppPurchaseAvailabilitiesApi.md#inAppPurchaseAvailabilitiesGetInstance) | **GET** /v1/inAppPurchaseAvailabilities/{id} | 



## inAppPurchaseAvailabilitiesAvailableTerritoriesGetToManyRelated

> TerritoriesResponse inAppPurchaseAvailabilitiesAvailableTerritoriesGetToManyRelated(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.InAppPurchaseAvailabilitiesApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsTerritories': ["null"], // [String] | the fields to include for returned resources of type territories
  'limit': 56 // Number | maximum resources per page
};
apiInstance.inAppPurchaseAvailabilitiesAvailableTerritoriesGetToManyRelated(id, opts, (error, data, response) => {
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
 **fieldsTerritories** | [**[String]**](String.md)| the fields to include for returned resources of type territories | [optional] 
 **limit** | **Number**| maximum resources per page | [optional] 

### Return type

[**TerritoriesResponse**](TerritoriesResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## inAppPurchaseAvailabilitiesAvailableTerritoriesGetToManyRelationship

> InAppPurchaseAvailabilityAvailableTerritoriesLinkagesResponse inAppPurchaseAvailabilitiesAvailableTerritoriesGetToManyRelationship(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.InAppPurchaseAvailabilitiesApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'limit': 56 // Number | maximum resources per page
};
apiInstance.inAppPurchaseAvailabilitiesAvailableTerritoriesGetToManyRelationship(id, opts, (error, data, response) => {
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
 **limit** | **Number**| maximum resources per page | [optional] 

### Return type

[**InAppPurchaseAvailabilityAvailableTerritoriesLinkagesResponse**](InAppPurchaseAvailabilityAvailableTerritoriesLinkagesResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## inAppPurchaseAvailabilitiesCreateInstance

> InAppPurchaseAvailabilityResponse inAppPurchaseAvailabilitiesCreateInstance(inAppPurchaseAvailabilityCreateRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.InAppPurchaseAvailabilitiesApi();
let inAppPurchaseAvailabilityCreateRequest = new AppStoreConnectApi.InAppPurchaseAvailabilityCreateRequest(); // InAppPurchaseAvailabilityCreateRequest | InAppPurchaseAvailability representation
apiInstance.inAppPurchaseAvailabilitiesCreateInstance(inAppPurchaseAvailabilityCreateRequest, (error, data, response) => {
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
 **inAppPurchaseAvailabilityCreateRequest** | [**InAppPurchaseAvailabilityCreateRequest**](InAppPurchaseAvailabilityCreateRequest.md)| InAppPurchaseAvailability representation | 

### Return type

[**InAppPurchaseAvailabilityResponse**](InAppPurchaseAvailabilityResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## inAppPurchaseAvailabilitiesGetInstance

> InAppPurchaseAvailabilityResponse inAppPurchaseAvailabilitiesGetInstance(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.InAppPurchaseAvailabilitiesApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsInAppPurchaseAvailabilities': ["null"], // [String] | the fields to include for returned resources of type inAppPurchaseAvailabilities
  'fieldsTerritories': ["null"], // [String] | the fields to include for returned resources of type territories
  'include': ["null"], // [String] | comma-separated list of relationships to include
  'limitAvailableTerritories': 56 // Number | maximum number of related availableTerritories returned (when they are included)
};
apiInstance.inAppPurchaseAvailabilitiesGetInstance(id, opts, (error, data, response) => {
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
 **fieldsInAppPurchaseAvailabilities** | [**[String]**](String.md)| the fields to include for returned resources of type inAppPurchaseAvailabilities | [optional] 
 **fieldsTerritories** | [**[String]**](String.md)| the fields to include for returned resources of type territories | [optional] 
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 
 **limitAvailableTerritories** | **Number**| maximum number of related availableTerritories returned (when they are included) | [optional] 

### Return type

[**InAppPurchaseAvailabilityResponse**](InAppPurchaseAvailabilityResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

