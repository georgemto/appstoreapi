# AppStoreConnectApi.SubscriptionGroupLocalizationsApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**subscriptionGroupLocalizationsCreateInstance**](SubscriptionGroupLocalizationsApi.md#subscriptionGroupLocalizationsCreateInstance) | **POST** /v1/subscriptionGroupLocalizations | 
[**subscriptionGroupLocalizationsDeleteInstance**](SubscriptionGroupLocalizationsApi.md#subscriptionGroupLocalizationsDeleteInstance) | **DELETE** /v1/subscriptionGroupLocalizations/{id} | 
[**subscriptionGroupLocalizationsGetInstance**](SubscriptionGroupLocalizationsApi.md#subscriptionGroupLocalizationsGetInstance) | **GET** /v1/subscriptionGroupLocalizations/{id} | 
[**subscriptionGroupLocalizationsUpdateInstance**](SubscriptionGroupLocalizationsApi.md#subscriptionGroupLocalizationsUpdateInstance) | **PATCH** /v1/subscriptionGroupLocalizations/{id} | 



## subscriptionGroupLocalizationsCreateInstance

> SubscriptionGroupLocalizationResponse subscriptionGroupLocalizationsCreateInstance(subscriptionGroupLocalizationCreateRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.SubscriptionGroupLocalizationsApi();
let subscriptionGroupLocalizationCreateRequest = new AppStoreConnectApi.SubscriptionGroupLocalizationCreateRequest(); // SubscriptionGroupLocalizationCreateRequest | SubscriptionGroupLocalization representation
apiInstance.subscriptionGroupLocalizationsCreateInstance(subscriptionGroupLocalizationCreateRequest, (error, data, response) => {
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
 **subscriptionGroupLocalizationCreateRequest** | [**SubscriptionGroupLocalizationCreateRequest**](SubscriptionGroupLocalizationCreateRequest.md)| SubscriptionGroupLocalization representation | 

### Return type

[**SubscriptionGroupLocalizationResponse**](SubscriptionGroupLocalizationResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## subscriptionGroupLocalizationsDeleteInstance

> subscriptionGroupLocalizationsDeleteInstance(id)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.SubscriptionGroupLocalizationsApi();
let id = "id_example"; // String | the id of the requested resource
apiInstance.subscriptionGroupLocalizationsDeleteInstance(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| the id of the requested resource | 

### Return type

null (empty response body)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## subscriptionGroupLocalizationsGetInstance

> SubscriptionGroupLocalizationResponse subscriptionGroupLocalizationsGetInstance(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.SubscriptionGroupLocalizationsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsSubscriptionGroupLocalizations': ["null"], // [String] | the fields to include for returned resources of type subscriptionGroupLocalizations
  'include': ["null"] // [String] | comma-separated list of relationships to include
};
apiInstance.subscriptionGroupLocalizationsGetInstance(id, opts, (error, data, response) => {
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
 **fieldsSubscriptionGroupLocalizations** | [**[String]**](String.md)| the fields to include for returned resources of type subscriptionGroupLocalizations | [optional] 
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 

### Return type

[**SubscriptionGroupLocalizationResponse**](SubscriptionGroupLocalizationResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## subscriptionGroupLocalizationsUpdateInstance

> SubscriptionGroupLocalizationResponse subscriptionGroupLocalizationsUpdateInstance(id, subscriptionGroupLocalizationUpdateRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.SubscriptionGroupLocalizationsApi();
let id = "id_example"; // String | the id of the requested resource
let subscriptionGroupLocalizationUpdateRequest = new AppStoreConnectApi.SubscriptionGroupLocalizationUpdateRequest(); // SubscriptionGroupLocalizationUpdateRequest | SubscriptionGroupLocalization representation
apiInstance.subscriptionGroupLocalizationsUpdateInstance(id, subscriptionGroupLocalizationUpdateRequest, (error, data, response) => {
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
 **subscriptionGroupLocalizationUpdateRequest** | [**SubscriptionGroupLocalizationUpdateRequest**](SubscriptionGroupLocalizationUpdateRequest.md)| SubscriptionGroupLocalization representation | 

### Return type

[**SubscriptionGroupLocalizationResponse**](SubscriptionGroupLocalizationResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

