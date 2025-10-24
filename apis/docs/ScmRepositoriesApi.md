# AppStoreConnectApi.ScmRepositoriesApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**scmRepositoriesGetCollection**](ScmRepositoriesApi.md#scmRepositoriesGetCollection) | **GET** /v1/scmRepositories | 
[**scmRepositoriesGetInstance**](ScmRepositoriesApi.md#scmRepositoriesGetInstance) | **GET** /v1/scmRepositories/{id} | 
[**scmRepositoriesGitReferencesGetToManyRelated**](ScmRepositoriesApi.md#scmRepositoriesGitReferencesGetToManyRelated) | **GET** /v1/scmRepositories/{id}/gitReferences | 
[**scmRepositoriesGitReferencesGetToManyRelationship**](ScmRepositoriesApi.md#scmRepositoriesGitReferencesGetToManyRelationship) | **GET** /v1/scmRepositories/{id}/relationships/gitReferences | 
[**scmRepositoriesPullRequestsGetToManyRelated**](ScmRepositoriesApi.md#scmRepositoriesPullRequestsGetToManyRelated) | **GET** /v1/scmRepositories/{id}/pullRequests | 
[**scmRepositoriesPullRequestsGetToManyRelationship**](ScmRepositoriesApi.md#scmRepositoriesPullRequestsGetToManyRelationship) | **GET** /v1/scmRepositories/{id}/relationships/pullRequests | 



## scmRepositoriesGetCollection

> ScmRepositoriesResponse scmRepositoriesGetCollection(opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.ScmRepositoriesApi();
let opts = {
  'filterId': ["null"], // [String] | filter by id(s)
  'fieldsScmRepositories': ["null"], // [String] | the fields to include for returned resources of type scmRepositories
  'limit': 56, // Number | maximum resources per page
  'include': ["null"] // [String] | comma-separated list of relationships to include
};
apiInstance.scmRepositoriesGetCollection(opts, (error, data, response) => {
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
 **filterId** | [**[String]**](String.md)| filter by id(s) | [optional] 
 **fieldsScmRepositories** | [**[String]**](String.md)| the fields to include for returned resources of type scmRepositories | [optional] 
 **limit** | **Number**| maximum resources per page | [optional] 
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 

### Return type

[**ScmRepositoriesResponse**](ScmRepositoriesResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## scmRepositoriesGetInstance

> ScmRepositoryResponse scmRepositoriesGetInstance(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.ScmRepositoriesApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsScmRepositories': ["null"], // [String] | the fields to include for returned resources of type scmRepositories
  'include': ["null"] // [String] | comma-separated list of relationships to include
};
apiInstance.scmRepositoriesGetInstance(id, opts, (error, data, response) => {
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
 **fieldsScmRepositories** | [**[String]**](String.md)| the fields to include for returned resources of type scmRepositories | [optional] 
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 

### Return type

[**ScmRepositoryResponse**](ScmRepositoryResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## scmRepositoriesGitReferencesGetToManyRelated

> ScmGitReferencesResponse scmRepositoriesGitReferencesGetToManyRelated(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.ScmRepositoriesApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsScmGitReferences': ["null"], // [String] | the fields to include for returned resources of type scmGitReferences
  'fieldsScmRepositories': ["null"], // [String] | the fields to include for returned resources of type scmRepositories
  'limit': 56, // Number | maximum resources per page
  'include': ["null"] // [String] | comma-separated list of relationships to include
};
apiInstance.scmRepositoriesGitReferencesGetToManyRelated(id, opts, (error, data, response) => {
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
 **fieldsScmGitReferences** | [**[String]**](String.md)| the fields to include for returned resources of type scmGitReferences | [optional] 
 **fieldsScmRepositories** | [**[String]**](String.md)| the fields to include for returned resources of type scmRepositories | [optional] 
 **limit** | **Number**| maximum resources per page | [optional] 
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 

### Return type

[**ScmGitReferencesResponse**](ScmGitReferencesResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## scmRepositoriesGitReferencesGetToManyRelationship

> ScmRepositoryGitReferencesLinkagesResponse scmRepositoriesGitReferencesGetToManyRelationship(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.ScmRepositoriesApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'limit': 56 // Number | maximum resources per page
};
apiInstance.scmRepositoriesGitReferencesGetToManyRelationship(id, opts, (error, data, response) => {
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

[**ScmRepositoryGitReferencesLinkagesResponse**](ScmRepositoryGitReferencesLinkagesResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## scmRepositoriesPullRequestsGetToManyRelated

> ScmPullRequestsResponse scmRepositoriesPullRequestsGetToManyRelated(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.ScmRepositoriesApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsScmPullRequests': ["null"], // [String] | the fields to include for returned resources of type scmPullRequests
  'fieldsScmRepositories': ["null"], // [String] | the fields to include for returned resources of type scmRepositories
  'limit': 56, // Number | maximum resources per page
  'include': ["null"] // [String] | comma-separated list of relationships to include
};
apiInstance.scmRepositoriesPullRequestsGetToManyRelated(id, opts, (error, data, response) => {
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
 **fieldsScmPullRequests** | [**[String]**](String.md)| the fields to include for returned resources of type scmPullRequests | [optional] 
 **fieldsScmRepositories** | [**[String]**](String.md)| the fields to include for returned resources of type scmRepositories | [optional] 
 **limit** | **Number**| maximum resources per page | [optional] 
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 

### Return type

[**ScmPullRequestsResponse**](ScmPullRequestsResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## scmRepositoriesPullRequestsGetToManyRelationship

> ScmRepositoryPullRequestsLinkagesResponse scmRepositoriesPullRequestsGetToManyRelationship(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.ScmRepositoriesApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'limit': 56 // Number | maximum resources per page
};
apiInstance.scmRepositoriesPullRequestsGetToManyRelationship(id, opts, (error, data, response) => {
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

[**ScmRepositoryPullRequestsLinkagesResponse**](ScmRepositoryPullRequestsLinkagesResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

