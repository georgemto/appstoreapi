# AppStoreConnectApi.AppAvailabilitiesApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**appAvailabilitiesV2CreateInstance**](AppAvailabilitiesApi.md#appAvailabilitiesV2CreateInstance) | **POST** /v2/appAvailabilities | 
[**appAvailabilitiesV2GetInstance**](AppAvailabilitiesApi.md#appAvailabilitiesV2GetInstance) | **GET** /v2/appAvailabilities/{id} | 
[**appAvailabilitiesV2TerritoryAvailabilitiesGetToManyRelated**](AppAvailabilitiesApi.md#appAvailabilitiesV2TerritoryAvailabilitiesGetToManyRelated) | **GET** /v2/appAvailabilities/{id}/territoryAvailabilities | 
[**appAvailabilitiesV2TerritoryAvailabilitiesGetToManyRelationship**](AppAvailabilitiesApi.md#appAvailabilitiesV2TerritoryAvailabilitiesGetToManyRelationship) | **GET** /v2/appAvailabilities/{id}/relationships/territoryAvailabilities | 



## appAvailabilitiesV2CreateInstance

> AppAvailabilityV2Response appAvailabilitiesV2CreateInstance(appAvailabilityV2CreateRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AppAvailabilitiesApi();
let appAvailabilityV2CreateRequest = new AppStoreConnectApi.AppAvailabilityV2CreateRequest(); // AppAvailabilityV2CreateRequest | AppAvailability representation
apiInstance.appAvailabilitiesV2CreateInstance(appAvailabilityV2CreateRequest, (error, data, response) => {
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
 **appAvailabilityV2CreateRequest** | [**AppAvailabilityV2CreateRequest**](AppAvailabilityV2CreateRequest.md)| AppAvailability representation | 

### Return type

[**AppAvailabilityV2Response**](AppAvailabilityV2Response.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## appAvailabilitiesV2GetInstance

> AppAvailabilityV2Response appAvailabilitiesV2GetInstance(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AppAvailabilitiesApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsAppAvailabilities': ["null"], // [String] | the fields to include for returned resources of type appAvailabilities
  'fieldsTerritoryAvailabilities': ["null"], // [String] | the fields to include for returned resources of type territoryAvailabilities
  'include': ["null"], // [String] | comma-separated list of relationships to include
  'limitTerritoryAvailabilities': 56 // Number | maximum number of related territoryAvailabilities returned (when they are included)
};
apiInstance.appAvailabilitiesV2GetInstance(id, opts, (error, data, response) => {
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
 **fieldsAppAvailabilities** | [**[String]**](String.md)| the fields to include for returned resources of type appAvailabilities | [optional] 
 **fieldsTerritoryAvailabilities** | [**[String]**](String.md)| the fields to include for returned resources of type territoryAvailabilities | [optional] 
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 
 **limitTerritoryAvailabilities** | **Number**| maximum number of related territoryAvailabilities returned (when they are included) | [optional] 

### Return type

[**AppAvailabilityV2Response**](AppAvailabilityV2Response.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## appAvailabilitiesV2TerritoryAvailabilitiesGetToManyRelated

> TerritoryAvailabilitiesResponse appAvailabilitiesV2TerritoryAvailabilitiesGetToManyRelated(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AppAvailabilitiesApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsTerritoryAvailabilities': ["null"], // [String] | the fields to include for returned resources of type territoryAvailabilities
  'fieldsTerritories': ["null"], // [String] | the fields to include for returned resources of type territories
  'limit': 56, // Number | maximum resources per page
  'include': ["null"] // [String] | comma-separated list of relationships to include
};
apiInstance.appAvailabilitiesV2TerritoryAvailabilitiesGetToManyRelated(id, opts, (error, data, response) => {
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
 **fieldsTerritoryAvailabilities** | [**[String]**](String.md)| the fields to include for returned resources of type territoryAvailabilities | [optional] 
 **fieldsTerritories** | [**[String]**](String.md)| the fields to include for returned resources of type territories | [optional] 
 **limit** | **Number**| maximum resources per page | [optional] 
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 

### Return type

[**TerritoryAvailabilitiesResponse**](TerritoryAvailabilitiesResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## appAvailabilitiesV2TerritoryAvailabilitiesGetToManyRelationship

> AppAvailabilityV2TerritoryAvailabilitiesLinkagesResponse appAvailabilitiesV2TerritoryAvailabilitiesGetToManyRelationship(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AppAvailabilitiesApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'limit': 56 // Number | maximum resources per page
};
apiInstance.appAvailabilitiesV2TerritoryAvailabilitiesGetToManyRelationship(id, opts, (error, data, response) => {
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

[**AppAvailabilityV2TerritoryAvailabilitiesLinkagesResponse**](AppAvailabilityV2TerritoryAvailabilitiesLinkagesResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

