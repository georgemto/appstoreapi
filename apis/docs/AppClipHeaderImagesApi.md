# AppStoreConnectApi.AppClipHeaderImagesApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**appClipHeaderImagesCreateInstance**](AppClipHeaderImagesApi.md#appClipHeaderImagesCreateInstance) | **POST** /v1/appClipHeaderImages | 
[**appClipHeaderImagesDeleteInstance**](AppClipHeaderImagesApi.md#appClipHeaderImagesDeleteInstance) | **DELETE** /v1/appClipHeaderImages/{id} | 
[**appClipHeaderImagesGetInstance**](AppClipHeaderImagesApi.md#appClipHeaderImagesGetInstance) | **GET** /v1/appClipHeaderImages/{id} | 
[**appClipHeaderImagesUpdateInstance**](AppClipHeaderImagesApi.md#appClipHeaderImagesUpdateInstance) | **PATCH** /v1/appClipHeaderImages/{id} | 



## appClipHeaderImagesCreateInstance

> AppClipHeaderImageResponse appClipHeaderImagesCreateInstance(appClipHeaderImageCreateRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AppClipHeaderImagesApi();
let appClipHeaderImageCreateRequest = new AppStoreConnectApi.AppClipHeaderImageCreateRequest(); // AppClipHeaderImageCreateRequest | AppClipHeaderImage representation
apiInstance.appClipHeaderImagesCreateInstance(appClipHeaderImageCreateRequest, (error, data, response) => {
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
 **appClipHeaderImageCreateRequest** | [**AppClipHeaderImageCreateRequest**](AppClipHeaderImageCreateRequest.md)| AppClipHeaderImage representation | 

### Return type

[**AppClipHeaderImageResponse**](AppClipHeaderImageResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## appClipHeaderImagesDeleteInstance

> appClipHeaderImagesDeleteInstance(id)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AppClipHeaderImagesApi();
let id = "id_example"; // String | the id of the requested resource
apiInstance.appClipHeaderImagesDeleteInstance(id, (error, data, response) => {
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


## appClipHeaderImagesGetInstance

> AppClipHeaderImageResponse appClipHeaderImagesGetInstance(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AppClipHeaderImagesApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsAppClipHeaderImages': ["null"], // [String] | the fields to include for returned resources of type appClipHeaderImages
  'include': ["null"] // [String] | comma-separated list of relationships to include
};
apiInstance.appClipHeaderImagesGetInstance(id, opts, (error, data, response) => {
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
 **fieldsAppClipHeaderImages** | [**[String]**](String.md)| the fields to include for returned resources of type appClipHeaderImages | [optional] 
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 

### Return type

[**AppClipHeaderImageResponse**](AppClipHeaderImageResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## appClipHeaderImagesUpdateInstance

> AppClipHeaderImageResponse appClipHeaderImagesUpdateInstance(id, appClipHeaderImageUpdateRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AppClipHeaderImagesApi();
let id = "id_example"; // String | the id of the requested resource
let appClipHeaderImageUpdateRequest = new AppStoreConnectApi.AppClipHeaderImageUpdateRequest(); // AppClipHeaderImageUpdateRequest | AppClipHeaderImage representation
apiInstance.appClipHeaderImagesUpdateInstance(id, appClipHeaderImageUpdateRequest, (error, data, response) => {
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
 **appClipHeaderImageUpdateRequest** | [**AppClipHeaderImageUpdateRequest**](AppClipHeaderImageUpdateRequest.md)| AppClipHeaderImage representation | 

### Return type

[**AppClipHeaderImageResponse**](AppClipHeaderImageResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

