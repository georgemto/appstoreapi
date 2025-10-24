# AppStoreConnectApi.BackgroundAssetUploadFilesApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**backgroundAssetUploadFilesCreateInstance**](BackgroundAssetUploadFilesApi.md#backgroundAssetUploadFilesCreateInstance) | **POST** /v1/backgroundAssetUploadFiles | 
[**backgroundAssetUploadFilesGetInstance**](BackgroundAssetUploadFilesApi.md#backgroundAssetUploadFilesGetInstance) | **GET** /v1/backgroundAssetUploadFiles/{id} | 
[**backgroundAssetUploadFilesUpdateInstance**](BackgroundAssetUploadFilesApi.md#backgroundAssetUploadFilesUpdateInstance) | **PATCH** /v1/backgroundAssetUploadFiles/{id} | 



## backgroundAssetUploadFilesCreateInstance

> BackgroundAssetUploadFileResponse backgroundAssetUploadFilesCreateInstance(backgroundAssetUploadFileCreateRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.BackgroundAssetUploadFilesApi();
let backgroundAssetUploadFileCreateRequest = new AppStoreConnectApi.BackgroundAssetUploadFileCreateRequest(); // BackgroundAssetUploadFileCreateRequest | BackgroundAssetUploadFile representation
apiInstance.backgroundAssetUploadFilesCreateInstance(backgroundAssetUploadFileCreateRequest, (error, data, response) => {
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
 **backgroundAssetUploadFileCreateRequest** | [**BackgroundAssetUploadFileCreateRequest**](BackgroundAssetUploadFileCreateRequest.md)| BackgroundAssetUploadFile representation | 

### Return type

[**BackgroundAssetUploadFileResponse**](BackgroundAssetUploadFileResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## backgroundAssetUploadFilesGetInstance

> BackgroundAssetUploadFileResponse backgroundAssetUploadFilesGetInstance(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.BackgroundAssetUploadFilesApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsBackgroundAssetUploadFiles': ["null"] // [String] | the fields to include for returned resources of type backgroundAssetUploadFiles
};
apiInstance.backgroundAssetUploadFilesGetInstance(id, opts, (error, data, response) => {
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
 **fieldsBackgroundAssetUploadFiles** | [**[String]**](String.md)| the fields to include for returned resources of type backgroundAssetUploadFiles | [optional] 

### Return type

[**BackgroundAssetUploadFileResponse**](BackgroundAssetUploadFileResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## backgroundAssetUploadFilesUpdateInstance

> BackgroundAssetUploadFileResponse backgroundAssetUploadFilesUpdateInstance(id, backgroundAssetUploadFileUpdateRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.BackgroundAssetUploadFilesApi();
let id = "id_example"; // String | the id of the requested resource
let backgroundAssetUploadFileUpdateRequest = new AppStoreConnectApi.BackgroundAssetUploadFileUpdateRequest(); // BackgroundAssetUploadFileUpdateRequest | BackgroundAssetUploadFile representation
apiInstance.backgroundAssetUploadFilesUpdateInstance(id, backgroundAssetUploadFileUpdateRequest, (error, data, response) => {
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
 **backgroundAssetUploadFileUpdateRequest** | [**BackgroundAssetUploadFileUpdateRequest**](BackgroundAssetUploadFileUpdateRequest.md)| BackgroundAssetUploadFile representation | 

### Return type

[**BackgroundAssetUploadFileResponse**](BackgroundAssetUploadFileResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

