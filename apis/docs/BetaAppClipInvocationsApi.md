# AppStoreConnectApi.BetaAppClipInvocationsApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**betaAppClipInvocationsCreateInstance**](BetaAppClipInvocationsApi.md#betaAppClipInvocationsCreateInstance) | **POST** /v1/betaAppClipInvocations | 
[**betaAppClipInvocationsDeleteInstance**](BetaAppClipInvocationsApi.md#betaAppClipInvocationsDeleteInstance) | **DELETE** /v1/betaAppClipInvocations/{id} | 
[**betaAppClipInvocationsGetInstance**](BetaAppClipInvocationsApi.md#betaAppClipInvocationsGetInstance) | **GET** /v1/betaAppClipInvocations/{id} | 
[**betaAppClipInvocationsUpdateInstance**](BetaAppClipInvocationsApi.md#betaAppClipInvocationsUpdateInstance) | **PATCH** /v1/betaAppClipInvocations/{id} | 



## betaAppClipInvocationsCreateInstance

> BetaAppClipInvocationResponse betaAppClipInvocationsCreateInstance(betaAppClipInvocationCreateRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.BetaAppClipInvocationsApi();
let betaAppClipInvocationCreateRequest = new AppStoreConnectApi.BetaAppClipInvocationCreateRequest(); // BetaAppClipInvocationCreateRequest | BetaAppClipInvocation representation
apiInstance.betaAppClipInvocationsCreateInstance(betaAppClipInvocationCreateRequest, (error, data, response) => {
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
 **betaAppClipInvocationCreateRequest** | [**BetaAppClipInvocationCreateRequest**](BetaAppClipInvocationCreateRequest.md)| BetaAppClipInvocation representation | 

### Return type

[**BetaAppClipInvocationResponse**](BetaAppClipInvocationResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## betaAppClipInvocationsDeleteInstance

> betaAppClipInvocationsDeleteInstance(id)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.BetaAppClipInvocationsApi();
let id = "id_example"; // String | the id of the requested resource
apiInstance.betaAppClipInvocationsDeleteInstance(id, (error, data, response) => {
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


## betaAppClipInvocationsGetInstance

> BetaAppClipInvocationResponse betaAppClipInvocationsGetInstance(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.BetaAppClipInvocationsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsBetaAppClipInvocations': ["null"], // [String] | the fields to include for returned resources of type betaAppClipInvocations
  'include': ["null"], // [String] | comma-separated list of relationships to include
  'limitBetaAppClipInvocationLocalizations': 56 // Number | maximum number of related betaAppClipInvocationLocalizations returned (when they are included)
};
apiInstance.betaAppClipInvocationsGetInstance(id, opts, (error, data, response) => {
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
 **fieldsBetaAppClipInvocations** | [**[String]**](String.md)| the fields to include for returned resources of type betaAppClipInvocations | [optional] 
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 
 **limitBetaAppClipInvocationLocalizations** | **Number**| maximum number of related betaAppClipInvocationLocalizations returned (when they are included) | [optional] 

### Return type

[**BetaAppClipInvocationResponse**](BetaAppClipInvocationResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## betaAppClipInvocationsUpdateInstance

> BetaAppClipInvocationResponse betaAppClipInvocationsUpdateInstance(id, betaAppClipInvocationUpdateRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.BetaAppClipInvocationsApi();
let id = "id_example"; // String | the id of the requested resource
let betaAppClipInvocationUpdateRequest = new AppStoreConnectApi.BetaAppClipInvocationUpdateRequest(); // BetaAppClipInvocationUpdateRequest | BetaAppClipInvocation representation
apiInstance.betaAppClipInvocationsUpdateInstance(id, betaAppClipInvocationUpdateRequest, (error, data, response) => {
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
 **betaAppClipInvocationUpdateRequest** | [**BetaAppClipInvocationUpdateRequest**](BetaAppClipInvocationUpdateRequest.md)| BetaAppClipInvocation representation | 

### Return type

[**BetaAppClipInvocationResponse**](BetaAppClipInvocationResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

