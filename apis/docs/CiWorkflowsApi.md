# AppStoreConnectApi.CiWorkflowsApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**ciWorkflowsBuildRunsGetToManyRelated**](CiWorkflowsApi.md#ciWorkflowsBuildRunsGetToManyRelated) | **GET** /v1/ciWorkflows/{id}/buildRuns | 
[**ciWorkflowsBuildRunsGetToManyRelationship**](CiWorkflowsApi.md#ciWorkflowsBuildRunsGetToManyRelationship) | **GET** /v1/ciWorkflows/{id}/relationships/buildRuns | 
[**ciWorkflowsCreateInstance**](CiWorkflowsApi.md#ciWorkflowsCreateInstance) | **POST** /v1/ciWorkflows | 
[**ciWorkflowsDeleteInstance**](CiWorkflowsApi.md#ciWorkflowsDeleteInstance) | **DELETE** /v1/ciWorkflows/{id} | 
[**ciWorkflowsGetInstance**](CiWorkflowsApi.md#ciWorkflowsGetInstance) | **GET** /v1/ciWorkflows/{id} | 
[**ciWorkflowsRepositoryGetToOneRelated**](CiWorkflowsApi.md#ciWorkflowsRepositoryGetToOneRelated) | **GET** /v1/ciWorkflows/{id}/repository | 
[**ciWorkflowsRepositoryGetToOneRelationship**](CiWorkflowsApi.md#ciWorkflowsRepositoryGetToOneRelationship) | **GET** /v1/ciWorkflows/{id}/relationships/repository | 
[**ciWorkflowsUpdateInstance**](CiWorkflowsApi.md#ciWorkflowsUpdateInstance) | **PATCH** /v1/ciWorkflows/{id} | 



## ciWorkflowsBuildRunsGetToManyRelated

> CiBuildRunsResponse ciWorkflowsBuildRunsGetToManyRelated(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.CiWorkflowsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'filterBuilds': ["null"], // [String] | filter by id(s) of related 'builds'
  'sort': ["null"], // [String] | comma-separated list of sort expressions; resources will be sorted as specified
  'fieldsCiBuildRuns': ["null"], // [String] | the fields to include for returned resources of type ciBuildRuns
  'fieldsBuilds': ["null"], // [String] | the fields to include for returned resources of type builds
  'fieldsCiWorkflows': ["null"], // [String] | the fields to include for returned resources of type ciWorkflows
  'fieldsCiProducts': ["null"], // [String] | the fields to include for returned resources of type ciProducts
  'fieldsScmGitReferences': ["null"], // [String] | the fields to include for returned resources of type scmGitReferences
  'fieldsScmPullRequests': ["null"], // [String] | the fields to include for returned resources of type scmPullRequests
  'limit': 56, // Number | maximum resources per page
  'include': ["null"], // [String] | comma-separated list of relationships to include
  'limitBuilds': 56 // Number | maximum number of related builds returned (when they are included)
};
apiInstance.ciWorkflowsBuildRunsGetToManyRelated(id, opts, (error, data, response) => {
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
 **filterBuilds** | [**[String]**](String.md)| filter by id(s) of related &#39;builds&#39; | [optional] 
 **sort** | [**[String]**](String.md)| comma-separated list of sort expressions; resources will be sorted as specified | [optional] 
 **fieldsCiBuildRuns** | [**[String]**](String.md)| the fields to include for returned resources of type ciBuildRuns | [optional] 
 **fieldsBuilds** | [**[String]**](String.md)| the fields to include for returned resources of type builds | [optional] 
 **fieldsCiWorkflows** | [**[String]**](String.md)| the fields to include for returned resources of type ciWorkflows | [optional] 
 **fieldsCiProducts** | [**[String]**](String.md)| the fields to include for returned resources of type ciProducts | [optional] 
 **fieldsScmGitReferences** | [**[String]**](String.md)| the fields to include for returned resources of type scmGitReferences | [optional] 
 **fieldsScmPullRequests** | [**[String]**](String.md)| the fields to include for returned resources of type scmPullRequests | [optional] 
 **limit** | **Number**| maximum resources per page | [optional] 
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 
 **limitBuilds** | **Number**| maximum number of related builds returned (when they are included) | [optional] 

### Return type

[**CiBuildRunsResponse**](CiBuildRunsResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## ciWorkflowsBuildRunsGetToManyRelationship

> CiWorkflowBuildRunsLinkagesResponse ciWorkflowsBuildRunsGetToManyRelationship(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.CiWorkflowsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'limit': 56 // Number | maximum resources per page
};
apiInstance.ciWorkflowsBuildRunsGetToManyRelationship(id, opts, (error, data, response) => {
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

[**CiWorkflowBuildRunsLinkagesResponse**](CiWorkflowBuildRunsLinkagesResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## ciWorkflowsCreateInstance

> CiWorkflowResponse ciWorkflowsCreateInstance(ciWorkflowCreateRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.CiWorkflowsApi();
let ciWorkflowCreateRequest = new AppStoreConnectApi.CiWorkflowCreateRequest(); // CiWorkflowCreateRequest | CiWorkflow representation
apiInstance.ciWorkflowsCreateInstance(ciWorkflowCreateRequest, (error, data, response) => {
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
 **ciWorkflowCreateRequest** | [**CiWorkflowCreateRequest**](CiWorkflowCreateRequest.md)| CiWorkflow representation | 

### Return type

[**CiWorkflowResponse**](CiWorkflowResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## ciWorkflowsDeleteInstance

> ciWorkflowsDeleteInstance(id)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.CiWorkflowsApi();
let id = "id_example"; // String | the id of the requested resource
apiInstance.ciWorkflowsDeleteInstance(id, (error, data, response) => {
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


## ciWorkflowsGetInstance

> CiWorkflowResponse ciWorkflowsGetInstance(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.CiWorkflowsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsCiWorkflows': ["null"], // [String] | the fields to include for returned resources of type ciWorkflows
  'fieldsScmRepositories': ["null"], // [String] | the fields to include for returned resources of type scmRepositories
  'include': ["null"] // [String] | comma-separated list of relationships to include
};
apiInstance.ciWorkflowsGetInstance(id, opts, (error, data, response) => {
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
 **fieldsCiWorkflows** | [**[String]**](String.md)| the fields to include for returned resources of type ciWorkflows | [optional] 
 **fieldsScmRepositories** | [**[String]**](String.md)| the fields to include for returned resources of type scmRepositories | [optional] 
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 

### Return type

[**CiWorkflowResponse**](CiWorkflowResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## ciWorkflowsRepositoryGetToOneRelated

> ScmRepositoryResponse ciWorkflowsRepositoryGetToOneRelated(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.CiWorkflowsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsScmRepositories': ["null"], // [String] | the fields to include for returned resources of type scmRepositories
  'fieldsScmProviders': ["null"], // [String] | the fields to include for returned resources of type scmProviders
  'fieldsScmGitReferences': ["null"], // [String] | the fields to include for returned resources of type scmGitReferences
  'include': ["null"] // [String] | comma-separated list of relationships to include
};
apiInstance.ciWorkflowsRepositoryGetToOneRelated(id, opts, (error, data, response) => {
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
 **fieldsScmProviders** | [**[String]**](String.md)| the fields to include for returned resources of type scmProviders | [optional] 
 **fieldsScmGitReferences** | [**[String]**](String.md)| the fields to include for returned resources of type scmGitReferences | [optional] 
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 

### Return type

[**ScmRepositoryResponse**](ScmRepositoryResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## ciWorkflowsRepositoryGetToOneRelationship

> CiWorkflowRepositoryLinkageResponse ciWorkflowsRepositoryGetToOneRelationship(id)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.CiWorkflowsApi();
let id = "id_example"; // String | the id of the requested resource
apiInstance.ciWorkflowsRepositoryGetToOneRelationship(id, (error, data, response) => {
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

[**CiWorkflowRepositoryLinkageResponse**](CiWorkflowRepositoryLinkageResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## ciWorkflowsUpdateInstance

> CiWorkflowResponse ciWorkflowsUpdateInstance(id, ciWorkflowUpdateRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.CiWorkflowsApi();
let id = "id_example"; // String | the id of the requested resource
let ciWorkflowUpdateRequest = new AppStoreConnectApi.CiWorkflowUpdateRequest(); // CiWorkflowUpdateRequest | CiWorkflow representation
apiInstance.ciWorkflowsUpdateInstance(id, ciWorkflowUpdateRequest, (error, data, response) => {
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
 **ciWorkflowUpdateRequest** | [**CiWorkflowUpdateRequest**](CiWorkflowUpdateRequest.md)| CiWorkflow representation | 

### Return type

[**CiWorkflowResponse**](CiWorkflowResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

