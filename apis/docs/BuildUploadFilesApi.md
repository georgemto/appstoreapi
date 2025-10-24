# AppStoreConnectApi.BuildUploadFilesApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**buildUploadFilesCreateInstance**](BuildUploadFilesApi.md#buildUploadFilesCreateInstance) | **POST** /v1/buildUploadFiles | 
[**buildUploadFilesGetInstance**](BuildUploadFilesApi.md#buildUploadFilesGetInstance) | **GET** /v1/buildUploadFiles/{id} | 
[**buildUploadFilesUpdateInstance**](BuildUploadFilesApi.md#buildUploadFilesUpdateInstance) | **PATCH** /v1/buildUploadFiles/{id} | 



## buildUploadFilesCreateInstance

> BuildUploadFileResponse buildUploadFilesCreateInstance(buildUploadFileCreateRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.BuildUploadFilesApi();
let buildUploadFileCreateRequest = new AppStoreConnectApi.BuildUploadFileCreateRequest(); // BuildUploadFileCreateRequest | BuildUploadFile representation
apiInstance.buildUploadFilesCreateInstance(buildUploadFileCreateRequest, (error, data, response) => {
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
 **buildUploadFileCreateRequest** | [**BuildUploadFileCreateRequest**](BuildUploadFileCreateRequest.md)| BuildUploadFile representation | 

### Return type

[**BuildUploadFileResponse**](BuildUploadFileResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## buildUploadFilesGetInstance

> BuildUploadFileResponse buildUploadFilesGetInstance(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.BuildUploadFilesApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsBuildUploadFiles': ["null"] // [String] | the fields to include for returned resources of type buildUploadFiles
};
apiInstance.buildUploadFilesGetInstance(id, opts, (error, data, response) => {
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
 **fieldsBuildUploadFiles** | [**[String]**](String.md)| the fields to include for returned resources of type buildUploadFiles | [optional] 

### Return type

[**BuildUploadFileResponse**](BuildUploadFileResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## buildUploadFilesUpdateInstance

> BuildUploadFileResponse buildUploadFilesUpdateInstance(id, buildUploadFileUpdateRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.BuildUploadFilesApi();
let id = "id_example"; // String | the id of the requested resource
let buildUploadFileUpdateRequest = new AppStoreConnectApi.BuildUploadFileUpdateRequest(); // BuildUploadFileUpdateRequest | BuildUploadFile representation
apiInstance.buildUploadFilesUpdateInstance(id, buildUploadFileUpdateRequest, (error, data, response) => {
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
 **buildUploadFileUpdateRequest** | [**BuildUploadFileUpdateRequest**](BuildUploadFileUpdateRequest.md)| BuildUploadFile representation | 

### Return type

[**BuildUploadFileResponse**](BuildUploadFileResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

