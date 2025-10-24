# AppStoreConnectApi.ScmProvidersApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**scmProvidersGetCollection**](ScmProvidersApi.md#scmProvidersGetCollection) | **GET** /v1/scmProviders | 
[**scmProvidersGetInstance**](ScmProvidersApi.md#scmProvidersGetInstance) | **GET** /v1/scmProviders/{id} | 
[**scmProvidersRepositoriesGetToManyRelated**](ScmProvidersApi.md#scmProvidersRepositoriesGetToManyRelated) | **GET** /v1/scmProviders/{id}/repositories | 
[**scmProvidersRepositoriesGetToManyRelationship**](ScmProvidersApi.md#scmProvidersRepositoriesGetToManyRelationship) | **GET** /v1/scmProviders/{id}/relationships/repositories | 



## scmProvidersGetCollection

> ScmProvidersResponse scmProvidersGetCollection(opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.ScmProvidersApi();
let opts = {
  'fieldsScmProviders': ["null"], // [String] | the fields to include for returned resources of type scmProviders
  'limit': 56 // Number | maximum resources per page
};
apiInstance.scmProvidersGetCollection(opts, (error, data, response) => {
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
 **fieldsScmProviders** | [**[String]**](String.md)| the fields to include for returned resources of type scmProviders | [optional] 
 **limit** | **Number**| maximum resources per page | [optional] 

### Return type

[**ScmProvidersResponse**](ScmProvidersResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## scmProvidersGetInstance

> ScmProviderResponse scmProvidersGetInstance(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.ScmProvidersApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsScmProviders': ["null"] // [String] | the fields to include for returned resources of type scmProviders
};
apiInstance.scmProvidersGetInstance(id, opts, (error, data, response) => {
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
 **fieldsScmProviders** | [**[String]**](String.md)| the fields to include for returned resources of type scmProviders | [optional] 

### Return type

[**ScmProviderResponse**](ScmProviderResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## scmProvidersRepositoriesGetToManyRelated

> ScmRepositoriesResponse scmProvidersRepositoriesGetToManyRelated(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.ScmProvidersApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'filterId': ["null"], // [String] | filter by id(s)
  'fieldsScmRepositories': ["null"], // [String] | the fields to include for returned resources of type scmRepositories
  'fieldsScmProviders': ["null"], // [String] | the fields to include for returned resources of type scmProviders
  'fieldsScmGitReferences': ["null"], // [String] | the fields to include for returned resources of type scmGitReferences
  'limit': 56, // Number | maximum resources per page
  'include': ["null"] // [String] | comma-separated list of relationships to include
};
apiInstance.scmProvidersRepositoriesGetToManyRelated(id, opts, (error, data, response) => {
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
 **filterId** | [**[String]**](String.md)| filter by id(s) | [optional] 
 **fieldsScmRepositories** | [**[String]**](String.md)| the fields to include for returned resources of type scmRepositories | [optional] 
 **fieldsScmProviders** | [**[String]**](String.md)| the fields to include for returned resources of type scmProviders | [optional] 
 **fieldsScmGitReferences** | [**[String]**](String.md)| the fields to include for returned resources of type scmGitReferences | [optional] 
 **limit** | **Number**| maximum resources per page | [optional] 
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 

### Return type

[**ScmRepositoriesResponse**](ScmRepositoriesResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## scmProvidersRepositoriesGetToManyRelationship

> ScmProviderRepositoriesLinkagesResponse scmProvidersRepositoriesGetToManyRelationship(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.ScmProvidersApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'limit': 56 // Number | maximum resources per page
};
apiInstance.scmProvidersRepositoriesGetToManyRelationship(id, opts, (error, data, response) => {
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

[**ScmProviderRepositoriesLinkagesResponse**](ScmProviderRepositoriesLinkagesResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

