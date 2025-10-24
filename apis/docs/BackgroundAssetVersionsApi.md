# AppStoreConnectApi.BackgroundAssetVersionsApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**backgroundAssetVersionsBackgroundAssetUploadFilesGetToManyRelated**](BackgroundAssetVersionsApi.md#backgroundAssetVersionsBackgroundAssetUploadFilesGetToManyRelated) | **GET** /v1/backgroundAssetVersions/{id}/backgroundAssetUploadFiles | 
[**backgroundAssetVersionsBackgroundAssetUploadFilesGetToManyRelationship**](BackgroundAssetVersionsApi.md#backgroundAssetVersionsBackgroundAssetUploadFilesGetToManyRelationship) | **GET** /v1/backgroundAssetVersions/{id}/relationships/backgroundAssetUploadFiles | 
[**backgroundAssetVersionsCreateInstance**](BackgroundAssetVersionsApi.md#backgroundAssetVersionsCreateInstance) | **POST** /v1/backgroundAssetVersions | 
[**backgroundAssetVersionsGetInstance**](BackgroundAssetVersionsApi.md#backgroundAssetVersionsGetInstance) | **GET** /v1/backgroundAssetVersions/{id} | 



## backgroundAssetVersionsBackgroundAssetUploadFilesGetToManyRelated

> BackgroundAssetUploadFilesResponse backgroundAssetVersionsBackgroundAssetUploadFilesGetToManyRelated(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.BackgroundAssetVersionsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsBackgroundAssetUploadFiles': ["null"], // [String] | the fields to include for returned resources of type backgroundAssetUploadFiles
  'limit': 56 // Number | maximum resources per page
};
apiInstance.backgroundAssetVersionsBackgroundAssetUploadFilesGetToManyRelated(id, opts, (error, data, response) => {
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
 **limit** | **Number**| maximum resources per page | [optional] 

### Return type

[**BackgroundAssetUploadFilesResponse**](BackgroundAssetUploadFilesResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## backgroundAssetVersionsBackgroundAssetUploadFilesGetToManyRelationship

> BackgroundAssetVersionBackgroundAssetUploadFilesLinkagesResponse backgroundAssetVersionsBackgroundAssetUploadFilesGetToManyRelationship(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.BackgroundAssetVersionsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'limit': 56 // Number | maximum resources per page
};
apiInstance.backgroundAssetVersionsBackgroundAssetUploadFilesGetToManyRelationship(id, opts, (error, data, response) => {
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

[**BackgroundAssetVersionBackgroundAssetUploadFilesLinkagesResponse**](BackgroundAssetVersionBackgroundAssetUploadFilesLinkagesResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## backgroundAssetVersionsCreateInstance

> BackgroundAssetVersionResponse backgroundAssetVersionsCreateInstance(backgroundAssetVersionCreateRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.BackgroundAssetVersionsApi();
let backgroundAssetVersionCreateRequest = new AppStoreConnectApi.BackgroundAssetVersionCreateRequest(); // BackgroundAssetVersionCreateRequest | BackgroundAssetVersion representation
apiInstance.backgroundAssetVersionsCreateInstance(backgroundAssetVersionCreateRequest, (error, data, response) => {
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
 **backgroundAssetVersionCreateRequest** | [**BackgroundAssetVersionCreateRequest**](BackgroundAssetVersionCreateRequest.md)| BackgroundAssetVersion representation | 

### Return type

[**BackgroundAssetVersionResponse**](BackgroundAssetVersionResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## backgroundAssetVersionsGetInstance

> BackgroundAssetVersionResponse backgroundAssetVersionsGetInstance(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.BackgroundAssetVersionsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsBackgroundAssetVersions': ["null"], // [String] | the fields to include for returned resources of type backgroundAssetVersions
  'include': ["null"] // [String] | comma-separated list of relationships to include
};
apiInstance.backgroundAssetVersionsGetInstance(id, opts, (error, data, response) => {
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
 **fieldsBackgroundAssetVersions** | [**[String]**](String.md)| the fields to include for returned resources of type backgroundAssetVersions | [optional] 
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 

### Return type

[**BackgroundAssetVersionResponse**](BackgroundAssetVersionResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

