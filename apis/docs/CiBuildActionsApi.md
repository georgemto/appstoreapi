# AppStoreConnectApi.CiBuildActionsApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**ciBuildActionsArtifactsGetToManyRelated**](CiBuildActionsApi.md#ciBuildActionsArtifactsGetToManyRelated) | **GET** /v1/ciBuildActions/{id}/artifacts | 
[**ciBuildActionsArtifactsGetToManyRelationship**](CiBuildActionsApi.md#ciBuildActionsArtifactsGetToManyRelationship) | **GET** /v1/ciBuildActions/{id}/relationships/artifacts | 
[**ciBuildActionsBuildRunGetToOneRelated**](CiBuildActionsApi.md#ciBuildActionsBuildRunGetToOneRelated) | **GET** /v1/ciBuildActions/{id}/buildRun | 
[**ciBuildActionsBuildRunGetToOneRelationship**](CiBuildActionsApi.md#ciBuildActionsBuildRunGetToOneRelationship) | **GET** /v1/ciBuildActions/{id}/relationships/buildRun | 
[**ciBuildActionsGetInstance**](CiBuildActionsApi.md#ciBuildActionsGetInstance) | **GET** /v1/ciBuildActions/{id} | 
[**ciBuildActionsIssuesGetToManyRelated**](CiBuildActionsApi.md#ciBuildActionsIssuesGetToManyRelated) | **GET** /v1/ciBuildActions/{id}/issues | 
[**ciBuildActionsIssuesGetToManyRelationship**](CiBuildActionsApi.md#ciBuildActionsIssuesGetToManyRelationship) | **GET** /v1/ciBuildActions/{id}/relationships/issues | 
[**ciBuildActionsTestResultsGetToManyRelated**](CiBuildActionsApi.md#ciBuildActionsTestResultsGetToManyRelated) | **GET** /v1/ciBuildActions/{id}/testResults | 
[**ciBuildActionsTestResultsGetToManyRelationship**](CiBuildActionsApi.md#ciBuildActionsTestResultsGetToManyRelationship) | **GET** /v1/ciBuildActions/{id}/relationships/testResults | 



## ciBuildActionsArtifactsGetToManyRelated

> CiArtifactsResponse ciBuildActionsArtifactsGetToManyRelated(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.CiBuildActionsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsCiArtifacts': ["null"], // [String] | the fields to include for returned resources of type ciArtifacts
  'limit': 56 // Number | maximum resources per page
};
apiInstance.ciBuildActionsArtifactsGetToManyRelated(id, opts, (error, data, response) => {
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
 **fieldsCiArtifacts** | [**[String]**](String.md)| the fields to include for returned resources of type ciArtifacts | [optional] 
 **limit** | **Number**| maximum resources per page | [optional] 

### Return type

[**CiArtifactsResponse**](CiArtifactsResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## ciBuildActionsArtifactsGetToManyRelationship

> CiBuildActionArtifactsLinkagesResponse ciBuildActionsArtifactsGetToManyRelationship(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.CiBuildActionsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'limit': 56 // Number | maximum resources per page
};
apiInstance.ciBuildActionsArtifactsGetToManyRelationship(id, opts, (error, data, response) => {
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

[**CiBuildActionArtifactsLinkagesResponse**](CiBuildActionArtifactsLinkagesResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## ciBuildActionsBuildRunGetToOneRelated

> CiBuildRunResponse ciBuildActionsBuildRunGetToOneRelated(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.CiBuildActionsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsCiBuildRuns': ["null"], // [String] | the fields to include for returned resources of type ciBuildRuns
  'fieldsBuilds': ["null"], // [String] | the fields to include for returned resources of type builds
  'fieldsCiWorkflows': ["null"], // [String] | the fields to include for returned resources of type ciWorkflows
  'fieldsCiProducts': ["null"], // [String] | the fields to include for returned resources of type ciProducts
  'fieldsScmGitReferences': ["null"], // [String] | the fields to include for returned resources of type scmGitReferences
  'fieldsScmPullRequests': ["null"], // [String] | the fields to include for returned resources of type scmPullRequests
  'include': ["null"], // [String] | comma-separated list of relationships to include
  'limitBuilds': 56 // Number | maximum number of related builds returned (when they are included)
};
apiInstance.ciBuildActionsBuildRunGetToOneRelated(id, opts, (error, data, response) => {
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
 **fieldsCiBuildRuns** | [**[String]**](String.md)| the fields to include for returned resources of type ciBuildRuns | [optional] 
 **fieldsBuilds** | [**[String]**](String.md)| the fields to include for returned resources of type builds | [optional] 
 **fieldsCiWorkflows** | [**[String]**](String.md)| the fields to include for returned resources of type ciWorkflows | [optional] 
 **fieldsCiProducts** | [**[String]**](String.md)| the fields to include for returned resources of type ciProducts | [optional] 
 **fieldsScmGitReferences** | [**[String]**](String.md)| the fields to include for returned resources of type scmGitReferences | [optional] 
 **fieldsScmPullRequests** | [**[String]**](String.md)| the fields to include for returned resources of type scmPullRequests | [optional] 
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 
 **limitBuilds** | **Number**| maximum number of related builds returned (when they are included) | [optional] 

### Return type

[**CiBuildRunResponse**](CiBuildRunResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## ciBuildActionsBuildRunGetToOneRelationship

> CiBuildActionBuildRunLinkageResponse ciBuildActionsBuildRunGetToOneRelationship(id)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.CiBuildActionsApi();
let id = "id_example"; // String | the id of the requested resource
apiInstance.ciBuildActionsBuildRunGetToOneRelationship(id, (error, data, response) => {
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

[**CiBuildActionBuildRunLinkageResponse**](CiBuildActionBuildRunLinkageResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## ciBuildActionsGetInstance

> CiBuildActionResponse ciBuildActionsGetInstance(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.CiBuildActionsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsCiBuildActions': ["null"], // [String] | the fields to include for returned resources of type ciBuildActions
  'fieldsCiBuildRuns': ["null"], // [String] | the fields to include for returned resources of type ciBuildRuns
  'include': ["null"] // [String] | comma-separated list of relationships to include
};
apiInstance.ciBuildActionsGetInstance(id, opts, (error, data, response) => {
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
 **fieldsCiBuildActions** | [**[String]**](String.md)| the fields to include for returned resources of type ciBuildActions | [optional] 
 **fieldsCiBuildRuns** | [**[String]**](String.md)| the fields to include for returned resources of type ciBuildRuns | [optional] 
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 

### Return type

[**CiBuildActionResponse**](CiBuildActionResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## ciBuildActionsIssuesGetToManyRelated

> CiIssuesResponse ciBuildActionsIssuesGetToManyRelated(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.CiBuildActionsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsCiIssues': ["null"], // [String] | the fields to include for returned resources of type ciIssues
  'limit': 56 // Number | maximum resources per page
};
apiInstance.ciBuildActionsIssuesGetToManyRelated(id, opts, (error, data, response) => {
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
 **fieldsCiIssues** | [**[String]**](String.md)| the fields to include for returned resources of type ciIssues | [optional] 
 **limit** | **Number**| maximum resources per page | [optional] 

### Return type

[**CiIssuesResponse**](CiIssuesResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## ciBuildActionsIssuesGetToManyRelationship

> CiBuildActionIssuesLinkagesResponse ciBuildActionsIssuesGetToManyRelationship(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.CiBuildActionsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'limit': 56 // Number | maximum resources per page
};
apiInstance.ciBuildActionsIssuesGetToManyRelationship(id, opts, (error, data, response) => {
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

[**CiBuildActionIssuesLinkagesResponse**](CiBuildActionIssuesLinkagesResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## ciBuildActionsTestResultsGetToManyRelated

> CiTestResultsResponse ciBuildActionsTestResultsGetToManyRelated(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.CiBuildActionsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsCiTestResults': ["null"], // [String] | the fields to include for returned resources of type ciTestResults
  'limit': 56 // Number | maximum resources per page
};
apiInstance.ciBuildActionsTestResultsGetToManyRelated(id, opts, (error, data, response) => {
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
 **fieldsCiTestResults** | [**[String]**](String.md)| the fields to include for returned resources of type ciTestResults | [optional] 
 **limit** | **Number**| maximum resources per page | [optional] 

### Return type

[**CiTestResultsResponse**](CiTestResultsResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## ciBuildActionsTestResultsGetToManyRelationship

> CiBuildActionTestResultsLinkagesResponse ciBuildActionsTestResultsGetToManyRelationship(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.CiBuildActionsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'limit': 56 // Number | maximum resources per page
};
apiInstance.ciBuildActionsTestResultsGetToManyRelationship(id, opts, (error, data, response) => {
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

[**CiBuildActionTestResultsLinkagesResponse**](CiBuildActionTestResultsLinkagesResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

