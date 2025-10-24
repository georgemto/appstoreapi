# AppStoreConnectApi.SubscriptionLocalizationsApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**subscriptionLocalizationsCreateInstance**](SubscriptionLocalizationsApi.md#subscriptionLocalizationsCreateInstance) | **POST** /v1/subscriptionLocalizations | 
[**subscriptionLocalizationsDeleteInstance**](SubscriptionLocalizationsApi.md#subscriptionLocalizationsDeleteInstance) | **DELETE** /v1/subscriptionLocalizations/{id} | 
[**subscriptionLocalizationsGetInstance**](SubscriptionLocalizationsApi.md#subscriptionLocalizationsGetInstance) | **GET** /v1/subscriptionLocalizations/{id} | 
[**subscriptionLocalizationsUpdateInstance**](SubscriptionLocalizationsApi.md#subscriptionLocalizationsUpdateInstance) | **PATCH** /v1/subscriptionLocalizations/{id} | 



## subscriptionLocalizationsCreateInstance

> SubscriptionLocalizationResponse subscriptionLocalizationsCreateInstance(subscriptionLocalizationCreateRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.SubscriptionLocalizationsApi();
let subscriptionLocalizationCreateRequest = new AppStoreConnectApi.SubscriptionLocalizationCreateRequest(); // SubscriptionLocalizationCreateRequest | SubscriptionLocalization representation
apiInstance.subscriptionLocalizationsCreateInstance(subscriptionLocalizationCreateRequest, (error, data, response) => {
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
 **subscriptionLocalizationCreateRequest** | [**SubscriptionLocalizationCreateRequest**](SubscriptionLocalizationCreateRequest.md)| SubscriptionLocalization representation | 

### Return type

[**SubscriptionLocalizationResponse**](SubscriptionLocalizationResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## subscriptionLocalizationsDeleteInstance

> subscriptionLocalizationsDeleteInstance(id)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.SubscriptionLocalizationsApi();
let id = "id_example"; // String | the id of the requested resource
apiInstance.subscriptionLocalizationsDeleteInstance(id, (error, data, response) => {
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


## subscriptionLocalizationsGetInstance

> SubscriptionLocalizationResponse subscriptionLocalizationsGetInstance(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.SubscriptionLocalizationsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsSubscriptionLocalizations': ["null"], // [String] | the fields to include for returned resources of type subscriptionLocalizations
  'include': ["null"] // [String] | comma-separated list of relationships to include
};
apiInstance.subscriptionLocalizationsGetInstance(id, opts, (error, data, response) => {
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
 **fieldsSubscriptionLocalizations** | [**[String]**](String.md)| the fields to include for returned resources of type subscriptionLocalizations | [optional] 
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 

### Return type

[**SubscriptionLocalizationResponse**](SubscriptionLocalizationResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## subscriptionLocalizationsUpdateInstance

> SubscriptionLocalizationResponse subscriptionLocalizationsUpdateInstance(id, subscriptionLocalizationUpdateRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.SubscriptionLocalizationsApi();
let id = "id_example"; // String | the id of the requested resource
let subscriptionLocalizationUpdateRequest = new AppStoreConnectApi.SubscriptionLocalizationUpdateRequest(); // SubscriptionLocalizationUpdateRequest | SubscriptionLocalization representation
apiInstance.subscriptionLocalizationsUpdateInstance(id, subscriptionLocalizationUpdateRequest, (error, data, response) => {
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
 **subscriptionLocalizationUpdateRequest** | [**SubscriptionLocalizationUpdateRequest**](SubscriptionLocalizationUpdateRequest.md)| SubscriptionLocalization representation | 

### Return type

[**SubscriptionLocalizationResponse**](SubscriptionLocalizationResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

