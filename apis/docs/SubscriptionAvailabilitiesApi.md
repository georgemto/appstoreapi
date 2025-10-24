# AppStoreConnectApi.SubscriptionAvailabilitiesApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**subscriptionAvailabilitiesAvailableTerritoriesGetToManyRelated**](SubscriptionAvailabilitiesApi.md#subscriptionAvailabilitiesAvailableTerritoriesGetToManyRelated) | **GET** /v1/subscriptionAvailabilities/{id}/availableTerritories | 
[**subscriptionAvailabilitiesAvailableTerritoriesGetToManyRelationship**](SubscriptionAvailabilitiesApi.md#subscriptionAvailabilitiesAvailableTerritoriesGetToManyRelationship) | **GET** /v1/subscriptionAvailabilities/{id}/relationships/availableTerritories | 
[**subscriptionAvailabilitiesCreateInstance**](SubscriptionAvailabilitiesApi.md#subscriptionAvailabilitiesCreateInstance) | **POST** /v1/subscriptionAvailabilities | 
[**subscriptionAvailabilitiesGetInstance**](SubscriptionAvailabilitiesApi.md#subscriptionAvailabilitiesGetInstance) | **GET** /v1/subscriptionAvailabilities/{id} | 



## subscriptionAvailabilitiesAvailableTerritoriesGetToManyRelated

> TerritoriesResponse subscriptionAvailabilitiesAvailableTerritoriesGetToManyRelated(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.SubscriptionAvailabilitiesApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsTerritories': ["null"], // [String] | the fields to include for returned resources of type territories
  'limit': 56 // Number | maximum resources per page
};
apiInstance.subscriptionAvailabilitiesAvailableTerritoriesGetToManyRelated(id, opts, (error, data, response) => {
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


## subscriptionAvailabilitiesAvailableTerritoriesGetToManyRelationship

> SubscriptionAvailabilityAvailableTerritoriesLinkagesResponse subscriptionAvailabilitiesAvailableTerritoriesGetToManyRelationship(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.SubscriptionAvailabilitiesApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'limit': 56 // Number | maximum resources per page
};
apiInstance.subscriptionAvailabilitiesAvailableTerritoriesGetToManyRelationship(id, opts, (error, data, response) => {
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

[**SubscriptionAvailabilityAvailableTerritoriesLinkagesResponse**](SubscriptionAvailabilityAvailableTerritoriesLinkagesResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## subscriptionAvailabilitiesCreateInstance

> SubscriptionAvailabilityResponse subscriptionAvailabilitiesCreateInstance(subscriptionAvailabilityCreateRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.SubscriptionAvailabilitiesApi();
let subscriptionAvailabilityCreateRequest = new AppStoreConnectApi.SubscriptionAvailabilityCreateRequest(); // SubscriptionAvailabilityCreateRequest | SubscriptionAvailability representation
apiInstance.subscriptionAvailabilitiesCreateInstance(subscriptionAvailabilityCreateRequest, (error, data, response) => {
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
 **subscriptionAvailabilityCreateRequest** | [**SubscriptionAvailabilityCreateRequest**](SubscriptionAvailabilityCreateRequest.md)| SubscriptionAvailability representation | 

### Return type

[**SubscriptionAvailabilityResponse**](SubscriptionAvailabilityResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## subscriptionAvailabilitiesGetInstance

> SubscriptionAvailabilityResponse subscriptionAvailabilitiesGetInstance(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.SubscriptionAvailabilitiesApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsSubscriptionAvailabilities': ["null"], // [String] | the fields to include for returned resources of type subscriptionAvailabilities
  'fieldsTerritories': ["null"], // [String] | the fields to include for returned resources of type territories
  'include': ["null"], // [String] | comma-separated list of relationships to include
  'limitAvailableTerritories': 56 // Number | maximum number of related availableTerritories returned (when they are included)
};
apiInstance.subscriptionAvailabilitiesGetInstance(id, opts, (error, data, response) => {
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
 **fieldsSubscriptionAvailabilities** | [**[String]**](String.md)| the fields to include for returned resources of type subscriptionAvailabilities | [optional] 
 **fieldsTerritories** | [**[String]**](String.md)| the fields to include for returned resources of type territories | [optional] 
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 
 **limitAvailableTerritories** | **Number**| maximum number of related availableTerritories returned (when they are included) | [optional] 

### Return type

[**SubscriptionAvailabilityResponse**](SubscriptionAvailabilityResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

