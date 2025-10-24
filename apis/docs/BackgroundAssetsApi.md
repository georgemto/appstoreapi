# AppStoreConnectApi.BackgroundAssetsApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**backgroundAssetsCreateInstance**](BackgroundAssetsApi.md#backgroundAssetsCreateInstance) | **POST** /v1/backgroundAssets | 
[**backgroundAssetsGetInstance**](BackgroundAssetsApi.md#backgroundAssetsGetInstance) | **GET** /v1/backgroundAssets/{id} | 
[**backgroundAssetsVersionsGetToManyRelated**](BackgroundAssetsApi.md#backgroundAssetsVersionsGetToManyRelated) | **GET** /v1/backgroundAssets/{id}/versions | 
[**backgroundAssetsVersionsGetToManyRelationship**](BackgroundAssetsApi.md#backgroundAssetsVersionsGetToManyRelationship) | **GET** /v1/backgroundAssets/{id}/relationships/versions | 



## backgroundAssetsCreateInstance

> BackgroundAssetResponse backgroundAssetsCreateInstance(backgroundAssetCreateRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.BackgroundAssetsApi();
let backgroundAssetCreateRequest = new AppStoreConnectApi.BackgroundAssetCreateRequest(); // BackgroundAssetCreateRequest | BackgroundAsset representation
apiInstance.backgroundAssetsCreateInstance(backgroundAssetCreateRequest, (error, data, response) => {
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
 **backgroundAssetCreateRequest** | [**BackgroundAssetCreateRequest**](BackgroundAssetCreateRequest.md)| BackgroundAsset representation | 

### Return type

[**BackgroundAssetResponse**](BackgroundAssetResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## backgroundAssetsGetInstance

> BackgroundAssetResponse backgroundAssetsGetInstance(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.BackgroundAssetsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsBackgroundAssets': ["null"], // [String] | the fields to include for returned resources of type backgroundAssets
  'include': ["null"] // [String] | comma-separated list of relationships to include
};
apiInstance.backgroundAssetsGetInstance(id, opts, (error, data, response) => {
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
 **fieldsBackgroundAssets** | [**[String]**](String.md)| the fields to include for returned resources of type backgroundAssets | [optional] 
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 

### Return type

[**BackgroundAssetResponse**](BackgroundAssetResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## backgroundAssetsVersionsGetToManyRelated

> BackgroundAssetVersionsResponse backgroundAssetsVersionsGetToManyRelated(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.BackgroundAssetsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'filterState': ["null"], // [String] | filter by attribute 'state'
  'filterVersion': ["null"], // [String] | filter by attribute 'version'
  'filterInternalBetaReleaseState': ["null"], // [String] | filter by attribute 'internalBetaRelease.state'
  'filterExternalBetaReleaseState': ["null"], // [String] | filter by attribute 'externalBetaRelease.state'
  'filterAppStoreReleaseState': ["null"], // [String] | filter by attribute 'appStoreRelease.state'
  'sort': ["null"], // [String] | comma-separated list of sort expressions; resources will be sorted as specified
  'fieldsBackgroundAssetVersions': ["null"], // [String] | the fields to include for returned resources of type backgroundAssetVersions
  'fieldsBackgroundAssets': ["null"], // [String] | the fields to include for returned resources of type backgroundAssets
  'fieldsBackgroundAssetVersionInternalBetaReleases': ["null"], // [String] | the fields to include for returned resources of type backgroundAssetVersionInternalBetaReleases
  'fieldsBackgroundAssetVersionExternalBetaReleases': ["null"], // [String] | the fields to include for returned resources of type backgroundAssetVersionExternalBetaReleases
  'fieldsBackgroundAssetVersionAppStoreReleases': ["null"], // [String] | the fields to include for returned resources of type backgroundAssetVersionAppStoreReleases
  'fieldsBackgroundAssetUploadFiles': ["null"], // [String] | the fields to include for returned resources of type backgroundAssetUploadFiles
  'limit': 56, // Number | maximum resources per page
  'include': ["null"] // [String] | comma-separated list of relationships to include
};
apiInstance.backgroundAssetsVersionsGetToManyRelated(id, opts, (error, data, response) => {
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
 **filterState** | [**[String]**](String.md)| filter by attribute &#39;state&#39; | [optional] 
 **filterVersion** | [**[String]**](String.md)| filter by attribute &#39;version&#39; | [optional] 
 **filterInternalBetaReleaseState** | [**[String]**](String.md)| filter by attribute &#39;internalBetaRelease.state&#39; | [optional] 
 **filterExternalBetaReleaseState** | [**[String]**](String.md)| filter by attribute &#39;externalBetaRelease.state&#39; | [optional] 
 **filterAppStoreReleaseState** | [**[String]**](String.md)| filter by attribute &#39;appStoreRelease.state&#39; | [optional] 
 **sort** | [**[String]**](String.md)| comma-separated list of sort expressions; resources will be sorted as specified | [optional] 
 **fieldsBackgroundAssetVersions** | [**[String]**](String.md)| the fields to include for returned resources of type backgroundAssetVersions | [optional] 
 **fieldsBackgroundAssets** | [**[String]**](String.md)| the fields to include for returned resources of type backgroundAssets | [optional] 
 **fieldsBackgroundAssetVersionInternalBetaReleases** | [**[String]**](String.md)| the fields to include for returned resources of type backgroundAssetVersionInternalBetaReleases | [optional] 
 **fieldsBackgroundAssetVersionExternalBetaReleases** | [**[String]**](String.md)| the fields to include for returned resources of type backgroundAssetVersionExternalBetaReleases | [optional] 
 **fieldsBackgroundAssetVersionAppStoreReleases** | [**[String]**](String.md)| the fields to include for returned resources of type backgroundAssetVersionAppStoreReleases | [optional] 
 **fieldsBackgroundAssetUploadFiles** | [**[String]**](String.md)| the fields to include for returned resources of type backgroundAssetUploadFiles | [optional] 
 **limit** | **Number**| maximum resources per page | [optional] 
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 

### Return type

[**BackgroundAssetVersionsResponse**](BackgroundAssetVersionsResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## backgroundAssetsVersionsGetToManyRelationship

> BackgroundAssetVersionsLinkagesResponse backgroundAssetsVersionsGetToManyRelationship(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.BackgroundAssetsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'limit': 56 // Number | maximum resources per page
};
apiInstance.backgroundAssetsVersionsGetToManyRelationship(id, opts, (error, data, response) => {
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

[**BackgroundAssetVersionsLinkagesResponse**](BackgroundAssetVersionsLinkagesResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

