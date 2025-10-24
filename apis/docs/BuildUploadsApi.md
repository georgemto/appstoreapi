# AppStoreConnectApi.BuildUploadsApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**buildUploadsBuildUploadFilesGetToManyRelated**](BuildUploadsApi.md#buildUploadsBuildUploadFilesGetToManyRelated) | **GET** /v1/buildUploads/{id}/buildUploadFiles | 
[**buildUploadsBuildUploadFilesGetToManyRelationship**](BuildUploadsApi.md#buildUploadsBuildUploadFilesGetToManyRelationship) | **GET** /v1/buildUploads/{id}/relationships/buildUploadFiles | 
[**buildUploadsCreateInstance**](BuildUploadsApi.md#buildUploadsCreateInstance) | **POST** /v1/buildUploads | 
[**buildUploadsDeleteInstance**](BuildUploadsApi.md#buildUploadsDeleteInstance) | **DELETE** /v1/buildUploads/{id} | 
[**buildUploadsGetInstance**](BuildUploadsApi.md#buildUploadsGetInstance) | **GET** /v1/buildUploads/{id} | 



## buildUploadsBuildUploadFilesGetToManyRelated

> BuildUploadFilesResponse buildUploadsBuildUploadFilesGetToManyRelated(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.BuildUploadsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsBuildUploadFiles': ["null"], // [String] | the fields to include for returned resources of type buildUploadFiles
  'limit': 56 // Number | maximum resources per page
};
apiInstance.buildUploadsBuildUploadFilesGetToManyRelated(id, opts, (error, data, response) => {
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
 **limit** | **Number**| maximum resources per page | [optional] 

### Return type

[**BuildUploadFilesResponse**](BuildUploadFilesResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## buildUploadsBuildUploadFilesGetToManyRelationship

> BuildUploadBuildUploadFilesLinkagesResponse buildUploadsBuildUploadFilesGetToManyRelationship(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.BuildUploadsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'limit': 56 // Number | maximum resources per page
};
apiInstance.buildUploadsBuildUploadFilesGetToManyRelationship(id, opts, (error, data, response) => {
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

[**BuildUploadBuildUploadFilesLinkagesResponse**](BuildUploadBuildUploadFilesLinkagesResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## buildUploadsCreateInstance

> BuildUploadResponse buildUploadsCreateInstance(buildUploadCreateRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.BuildUploadsApi();
let buildUploadCreateRequest = new AppStoreConnectApi.BuildUploadCreateRequest(); // BuildUploadCreateRequest | BuildUpload representation
apiInstance.buildUploadsCreateInstance(buildUploadCreateRequest, (error, data, response) => {
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
 **buildUploadCreateRequest** | [**BuildUploadCreateRequest**](BuildUploadCreateRequest.md)| BuildUpload representation | 

### Return type

[**BuildUploadResponse**](BuildUploadResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## buildUploadsDeleteInstance

> buildUploadsDeleteInstance(id)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.BuildUploadsApi();
let id = "id_example"; // String | the id of the requested resource
apiInstance.buildUploadsDeleteInstance(id, (error, data, response) => {
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


## buildUploadsGetInstance

> BuildUploadResponse buildUploadsGetInstance(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.BuildUploadsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsBuildUploads': ["null"], // [String] | the fields to include for returned resources of type buildUploads
  'include': ["null"] // [String] | comma-separated list of relationships to include
};
apiInstance.buildUploadsGetInstance(id, opts, (error, data, response) => {
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
 **fieldsBuildUploads** | [**[String]**](String.md)| the fields to include for returned resources of type buildUploads | [optional] 
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 

### Return type

[**BuildUploadResponse**](BuildUploadResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

