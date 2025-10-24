# AppStoreConnectApi.AppClipAppStoreReviewDetailsApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**appClipAppStoreReviewDetailsCreateInstance**](AppClipAppStoreReviewDetailsApi.md#appClipAppStoreReviewDetailsCreateInstance) | **POST** /v1/appClipAppStoreReviewDetails | 
[**appClipAppStoreReviewDetailsGetInstance**](AppClipAppStoreReviewDetailsApi.md#appClipAppStoreReviewDetailsGetInstance) | **GET** /v1/appClipAppStoreReviewDetails/{id} | 
[**appClipAppStoreReviewDetailsUpdateInstance**](AppClipAppStoreReviewDetailsApi.md#appClipAppStoreReviewDetailsUpdateInstance) | **PATCH** /v1/appClipAppStoreReviewDetails/{id} | 



## appClipAppStoreReviewDetailsCreateInstance

> AppClipAppStoreReviewDetailResponse appClipAppStoreReviewDetailsCreateInstance(appClipAppStoreReviewDetailCreateRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AppClipAppStoreReviewDetailsApi();
let appClipAppStoreReviewDetailCreateRequest = new AppStoreConnectApi.AppClipAppStoreReviewDetailCreateRequest(); // AppClipAppStoreReviewDetailCreateRequest | AppClipAppStoreReviewDetail representation
apiInstance.appClipAppStoreReviewDetailsCreateInstance(appClipAppStoreReviewDetailCreateRequest, (error, data, response) => {
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
 **appClipAppStoreReviewDetailCreateRequest** | [**AppClipAppStoreReviewDetailCreateRequest**](AppClipAppStoreReviewDetailCreateRequest.md)| AppClipAppStoreReviewDetail representation | 

### Return type

[**AppClipAppStoreReviewDetailResponse**](AppClipAppStoreReviewDetailResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## appClipAppStoreReviewDetailsGetInstance

> AppClipAppStoreReviewDetailResponse appClipAppStoreReviewDetailsGetInstance(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AppClipAppStoreReviewDetailsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsAppClipAppStoreReviewDetails': ["null"], // [String] | the fields to include for returned resources of type appClipAppStoreReviewDetails
  'include': ["null"] // [String] | comma-separated list of relationships to include
};
apiInstance.appClipAppStoreReviewDetailsGetInstance(id, opts, (error, data, response) => {
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
 **fieldsAppClipAppStoreReviewDetails** | [**[String]**](String.md)| the fields to include for returned resources of type appClipAppStoreReviewDetails | [optional] 
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 

### Return type

[**AppClipAppStoreReviewDetailResponse**](AppClipAppStoreReviewDetailResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## appClipAppStoreReviewDetailsUpdateInstance

> AppClipAppStoreReviewDetailResponse appClipAppStoreReviewDetailsUpdateInstance(id, appClipAppStoreReviewDetailUpdateRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AppClipAppStoreReviewDetailsApi();
let id = "id_example"; // String | the id of the requested resource
let appClipAppStoreReviewDetailUpdateRequest = new AppStoreConnectApi.AppClipAppStoreReviewDetailUpdateRequest(); // AppClipAppStoreReviewDetailUpdateRequest | AppClipAppStoreReviewDetail representation
apiInstance.appClipAppStoreReviewDetailsUpdateInstance(id, appClipAppStoreReviewDetailUpdateRequest, (error, data, response) => {
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
 **appClipAppStoreReviewDetailUpdateRequest** | [**AppClipAppStoreReviewDetailUpdateRequest**](AppClipAppStoreReviewDetailUpdateRequest.md)| AppClipAppStoreReviewDetail representation | 

### Return type

[**AppClipAppStoreReviewDetailResponse**](AppClipAppStoreReviewDetailResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

