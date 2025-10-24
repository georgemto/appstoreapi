# AppStoreConnectApi.BetaAppClipInvocationLocalizationsApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**betaAppClipInvocationLocalizationsCreateInstance**](BetaAppClipInvocationLocalizationsApi.md#betaAppClipInvocationLocalizationsCreateInstance) | **POST** /v1/betaAppClipInvocationLocalizations | 
[**betaAppClipInvocationLocalizationsDeleteInstance**](BetaAppClipInvocationLocalizationsApi.md#betaAppClipInvocationLocalizationsDeleteInstance) | **DELETE** /v1/betaAppClipInvocationLocalizations/{id} | 
[**betaAppClipInvocationLocalizationsUpdateInstance**](BetaAppClipInvocationLocalizationsApi.md#betaAppClipInvocationLocalizationsUpdateInstance) | **PATCH** /v1/betaAppClipInvocationLocalizations/{id} | 



## betaAppClipInvocationLocalizationsCreateInstance

> BetaAppClipInvocationLocalizationResponse betaAppClipInvocationLocalizationsCreateInstance(betaAppClipInvocationLocalizationCreateRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.BetaAppClipInvocationLocalizationsApi();
let betaAppClipInvocationLocalizationCreateRequest = new AppStoreConnectApi.BetaAppClipInvocationLocalizationCreateRequest(); // BetaAppClipInvocationLocalizationCreateRequest | BetaAppClipInvocationLocalization representation
apiInstance.betaAppClipInvocationLocalizationsCreateInstance(betaAppClipInvocationLocalizationCreateRequest, (error, data, response) => {
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
 **betaAppClipInvocationLocalizationCreateRequest** | [**BetaAppClipInvocationLocalizationCreateRequest**](BetaAppClipInvocationLocalizationCreateRequest.md)| BetaAppClipInvocationLocalization representation | 

### Return type

[**BetaAppClipInvocationLocalizationResponse**](BetaAppClipInvocationLocalizationResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## betaAppClipInvocationLocalizationsDeleteInstance

> betaAppClipInvocationLocalizationsDeleteInstance(id)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.BetaAppClipInvocationLocalizationsApi();
let id = "id_example"; // String | the id of the requested resource
apiInstance.betaAppClipInvocationLocalizationsDeleteInstance(id, (error, data, response) => {
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


## betaAppClipInvocationLocalizationsUpdateInstance

> BetaAppClipInvocationLocalizationResponse betaAppClipInvocationLocalizationsUpdateInstance(id, betaAppClipInvocationLocalizationUpdateRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.BetaAppClipInvocationLocalizationsApi();
let id = "id_example"; // String | the id of the requested resource
let betaAppClipInvocationLocalizationUpdateRequest = new AppStoreConnectApi.BetaAppClipInvocationLocalizationUpdateRequest(); // BetaAppClipInvocationLocalizationUpdateRequest | BetaAppClipInvocationLocalization representation
apiInstance.betaAppClipInvocationLocalizationsUpdateInstance(id, betaAppClipInvocationLocalizationUpdateRequest, (error, data, response) => {
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
 **betaAppClipInvocationLocalizationUpdateRequest** | [**BetaAppClipInvocationLocalizationUpdateRequest**](BetaAppClipInvocationLocalizationUpdateRequest.md)| BetaAppClipInvocationLocalization representation | 

### Return type

[**BetaAppClipInvocationLocalizationResponse**](BetaAppClipInvocationLocalizationResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

