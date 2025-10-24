# AppStoreConnectApi.BuildBundlesApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**buildBundlesAppClipDomainCacheStatusGetToOneRelated**](BuildBundlesApi.md#buildBundlesAppClipDomainCacheStatusGetToOneRelated) | **GET** /v1/buildBundles/{id}/appClipDomainCacheStatus | 
[**buildBundlesAppClipDomainCacheStatusGetToOneRelationship**](BuildBundlesApi.md#buildBundlesAppClipDomainCacheStatusGetToOneRelationship) | **GET** /v1/buildBundles/{id}/relationships/appClipDomainCacheStatus | 
[**buildBundlesAppClipDomainDebugStatusGetToOneRelated**](BuildBundlesApi.md#buildBundlesAppClipDomainDebugStatusGetToOneRelated) | **GET** /v1/buildBundles/{id}/appClipDomainDebugStatus | 
[**buildBundlesAppClipDomainDebugStatusGetToOneRelationship**](BuildBundlesApi.md#buildBundlesAppClipDomainDebugStatusGetToOneRelationship) | **GET** /v1/buildBundles/{id}/relationships/appClipDomainDebugStatus | 
[**buildBundlesBetaAppClipInvocationsGetToManyRelated**](BuildBundlesApi.md#buildBundlesBetaAppClipInvocationsGetToManyRelated) | **GET** /v1/buildBundles/{id}/betaAppClipInvocations | 
[**buildBundlesBetaAppClipInvocationsGetToManyRelationship**](BuildBundlesApi.md#buildBundlesBetaAppClipInvocationsGetToManyRelationship) | **GET** /v1/buildBundles/{id}/relationships/betaAppClipInvocations | 
[**buildBundlesBuildBundleFileSizesGetToManyRelated**](BuildBundlesApi.md#buildBundlesBuildBundleFileSizesGetToManyRelated) | **GET** /v1/buildBundles/{id}/buildBundleFileSizes | 
[**buildBundlesBuildBundleFileSizesGetToManyRelationship**](BuildBundlesApi.md#buildBundlesBuildBundleFileSizesGetToManyRelationship) | **GET** /v1/buildBundles/{id}/relationships/buildBundleFileSizes | 



## buildBundlesAppClipDomainCacheStatusGetToOneRelated

> AppClipDomainStatusResponse buildBundlesAppClipDomainCacheStatusGetToOneRelated(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.BuildBundlesApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsAppClipDomainStatuses': ["null"] // [String] | the fields to include for returned resources of type appClipDomainStatuses
};
apiInstance.buildBundlesAppClipDomainCacheStatusGetToOneRelated(id, opts, (error, data, response) => {
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
 **fieldsAppClipDomainStatuses** | [**[String]**](String.md)| the fields to include for returned resources of type appClipDomainStatuses | [optional] 

### Return type

[**AppClipDomainStatusResponse**](AppClipDomainStatusResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## buildBundlesAppClipDomainCacheStatusGetToOneRelationship

> BuildBundleAppClipDomainCacheStatusLinkageResponse buildBundlesAppClipDomainCacheStatusGetToOneRelationship(id)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.BuildBundlesApi();
let id = "id_example"; // String | the id of the requested resource
apiInstance.buildBundlesAppClipDomainCacheStatusGetToOneRelationship(id, (error, data, response) => {
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

### Return type

[**BuildBundleAppClipDomainCacheStatusLinkageResponse**](BuildBundleAppClipDomainCacheStatusLinkageResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## buildBundlesAppClipDomainDebugStatusGetToOneRelated

> AppClipDomainStatusResponse buildBundlesAppClipDomainDebugStatusGetToOneRelated(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.BuildBundlesApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsAppClipDomainStatuses': ["null"] // [String] | the fields to include for returned resources of type appClipDomainStatuses
};
apiInstance.buildBundlesAppClipDomainDebugStatusGetToOneRelated(id, opts, (error, data, response) => {
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
 **fieldsAppClipDomainStatuses** | [**[String]**](String.md)| the fields to include for returned resources of type appClipDomainStatuses | [optional] 

### Return type

[**AppClipDomainStatusResponse**](AppClipDomainStatusResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## buildBundlesAppClipDomainDebugStatusGetToOneRelationship

> BuildBundleAppClipDomainDebugStatusLinkageResponse buildBundlesAppClipDomainDebugStatusGetToOneRelationship(id)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.BuildBundlesApi();
let id = "id_example"; // String | the id of the requested resource
apiInstance.buildBundlesAppClipDomainDebugStatusGetToOneRelationship(id, (error, data, response) => {
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

### Return type

[**BuildBundleAppClipDomainDebugStatusLinkageResponse**](BuildBundleAppClipDomainDebugStatusLinkageResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## buildBundlesBetaAppClipInvocationsGetToManyRelated

> BetaAppClipInvocationsResponse buildBundlesBetaAppClipInvocationsGetToManyRelated(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.BuildBundlesApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsBetaAppClipInvocations': ["null"], // [String] | the fields to include for returned resources of type betaAppClipInvocations
  'fieldsBetaAppClipInvocationLocalizations': ["null"], // [String] | the fields to include for returned resources of type betaAppClipInvocationLocalizations
  'limit': 56, // Number | maximum resources per page
  'include': ["null"], // [String] | comma-separated list of relationships to include
  'limitBetaAppClipInvocationLocalizations': 56 // Number | maximum number of related betaAppClipInvocationLocalizations returned (when they are included)
};
apiInstance.buildBundlesBetaAppClipInvocationsGetToManyRelated(id, opts, (error, data, response) => {
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
 **fieldsBetaAppClipInvocationLocalizations** | [**[String]**](String.md)| the fields to include for returned resources of type betaAppClipInvocationLocalizations | [optional] 
 **limit** | **Number**| maximum resources per page | [optional] 
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 
 **limitBetaAppClipInvocationLocalizations** | **Number**| maximum number of related betaAppClipInvocationLocalizations returned (when they are included) | [optional] 

### Return type

[**BetaAppClipInvocationsResponse**](BetaAppClipInvocationsResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## buildBundlesBetaAppClipInvocationsGetToManyRelationship

> BuildBundleBetaAppClipInvocationsLinkagesResponse buildBundlesBetaAppClipInvocationsGetToManyRelationship(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.BuildBundlesApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'limit': 56 // Number | maximum resources per page
};
apiInstance.buildBundlesBetaAppClipInvocationsGetToManyRelationship(id, opts, (error, data, response) => {
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

[**BuildBundleBetaAppClipInvocationsLinkagesResponse**](BuildBundleBetaAppClipInvocationsLinkagesResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## buildBundlesBuildBundleFileSizesGetToManyRelated

> BuildBundleFileSizesResponse buildBundlesBuildBundleFileSizesGetToManyRelated(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.BuildBundlesApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsBuildBundleFileSizes': ["null"], // [String] | the fields to include for returned resources of type buildBundleFileSizes
  'limit': 56 // Number | maximum resources per page
};
apiInstance.buildBundlesBuildBundleFileSizesGetToManyRelated(id, opts, (error, data, response) => {
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
 **fieldsBuildBundleFileSizes** | [**[String]**](String.md)| the fields to include for returned resources of type buildBundleFileSizes | [optional] 
 **limit** | **Number**| maximum resources per page | [optional] 

### Return type

[**BuildBundleFileSizesResponse**](BuildBundleFileSizesResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## buildBundlesBuildBundleFileSizesGetToManyRelationship

> BuildBundleBuildBundleFileSizesLinkagesResponse buildBundlesBuildBundleFileSizesGetToManyRelationship(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.BuildBundlesApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'limit': 56 // Number | maximum resources per page
};
apiInstance.buildBundlesBuildBundleFileSizesGetToManyRelationship(id, opts, (error, data, response) => {
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

[**BuildBundleBuildBundleFileSizesLinkagesResponse**](BuildBundleBuildBundleFileSizesLinkagesResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

