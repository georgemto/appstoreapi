# AppStoreConnectApi.BetaAppReviewSubmissionsApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**betaAppReviewSubmissionsBuildGetToOneRelated**](BetaAppReviewSubmissionsApi.md#betaAppReviewSubmissionsBuildGetToOneRelated) | **GET** /v1/betaAppReviewSubmissions/{id}/build | 
[**betaAppReviewSubmissionsBuildGetToOneRelationship**](BetaAppReviewSubmissionsApi.md#betaAppReviewSubmissionsBuildGetToOneRelationship) | **GET** /v1/betaAppReviewSubmissions/{id}/relationships/build | 
[**betaAppReviewSubmissionsCreateInstance**](BetaAppReviewSubmissionsApi.md#betaAppReviewSubmissionsCreateInstance) | **POST** /v1/betaAppReviewSubmissions | 
[**betaAppReviewSubmissionsGetCollection**](BetaAppReviewSubmissionsApi.md#betaAppReviewSubmissionsGetCollection) | **GET** /v1/betaAppReviewSubmissions | 
[**betaAppReviewSubmissionsGetInstance**](BetaAppReviewSubmissionsApi.md#betaAppReviewSubmissionsGetInstance) | **GET** /v1/betaAppReviewSubmissions/{id} | 



## betaAppReviewSubmissionsBuildGetToOneRelated

> BuildWithoutIncludesResponse betaAppReviewSubmissionsBuildGetToOneRelated(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.BetaAppReviewSubmissionsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsBuilds': ["null"] // [String] | the fields to include for returned resources of type builds
};
apiInstance.betaAppReviewSubmissionsBuildGetToOneRelated(id, opts, (error, data, response) => {
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
 **fieldsBuilds** | [**[String]**](String.md)| the fields to include for returned resources of type builds | [optional] 

### Return type

[**BuildWithoutIncludesResponse**](BuildWithoutIncludesResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## betaAppReviewSubmissionsBuildGetToOneRelationship

> BetaAppReviewSubmissionBuildLinkageResponse betaAppReviewSubmissionsBuildGetToOneRelationship(id)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.BetaAppReviewSubmissionsApi();
let id = "id_example"; // String | the id of the requested resource
apiInstance.betaAppReviewSubmissionsBuildGetToOneRelationship(id, (error, data, response) => {
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

[**BetaAppReviewSubmissionBuildLinkageResponse**](BetaAppReviewSubmissionBuildLinkageResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## betaAppReviewSubmissionsCreateInstance

> BetaAppReviewSubmissionResponse betaAppReviewSubmissionsCreateInstance(betaAppReviewSubmissionCreateRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.BetaAppReviewSubmissionsApi();
let betaAppReviewSubmissionCreateRequest = new AppStoreConnectApi.BetaAppReviewSubmissionCreateRequest(); // BetaAppReviewSubmissionCreateRequest | BetaAppReviewSubmission representation
apiInstance.betaAppReviewSubmissionsCreateInstance(betaAppReviewSubmissionCreateRequest, (error, data, response) => {
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
 **betaAppReviewSubmissionCreateRequest** | [**BetaAppReviewSubmissionCreateRequest**](BetaAppReviewSubmissionCreateRequest.md)| BetaAppReviewSubmission representation | 

### Return type

[**BetaAppReviewSubmissionResponse**](BetaAppReviewSubmissionResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## betaAppReviewSubmissionsGetCollection

> BetaAppReviewSubmissionsResponse betaAppReviewSubmissionsGetCollection(filterBuild, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.BetaAppReviewSubmissionsApi();
let filterBuild = ["null"]; // [String] | filter by id(s) of related 'build'
let opts = {
  'filterBetaReviewState': ["null"], // [String] | filter by attribute 'betaReviewState'
  'fieldsBetaAppReviewSubmissions': ["null"], // [String] | the fields to include for returned resources of type betaAppReviewSubmissions
  'fieldsBuilds': ["null"], // [String] | the fields to include for returned resources of type builds
  'limit': 56, // Number | maximum resources per page
  'include': ["null"] // [String] | comma-separated list of relationships to include
};
apiInstance.betaAppReviewSubmissionsGetCollection(filterBuild, opts, (error, data, response) => {
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
 **filterBuild** | [**[String]**](String.md)| filter by id(s) of related &#39;build&#39; | 
 **filterBetaReviewState** | [**[String]**](String.md)| filter by attribute &#39;betaReviewState&#39; | [optional] 
 **fieldsBetaAppReviewSubmissions** | [**[String]**](String.md)| the fields to include for returned resources of type betaAppReviewSubmissions | [optional] 
 **fieldsBuilds** | [**[String]**](String.md)| the fields to include for returned resources of type builds | [optional] 
 **limit** | **Number**| maximum resources per page | [optional] 
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 

### Return type

[**BetaAppReviewSubmissionsResponse**](BetaAppReviewSubmissionsResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## betaAppReviewSubmissionsGetInstance

> BetaAppReviewSubmissionResponse betaAppReviewSubmissionsGetInstance(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.BetaAppReviewSubmissionsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsBetaAppReviewSubmissions': ["null"], // [String] | the fields to include for returned resources of type betaAppReviewSubmissions
  'fieldsBuilds': ["null"], // [String] | the fields to include for returned resources of type builds
  'include': ["null"] // [String] | comma-separated list of relationships to include
};
apiInstance.betaAppReviewSubmissionsGetInstance(id, opts, (error, data, response) => {
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
 **fieldsBetaAppReviewSubmissions** | [**[String]**](String.md)| the fields to include for returned resources of type betaAppReviewSubmissions | [optional] 
 **fieldsBuilds** | [**[String]**](String.md)| the fields to include for returned resources of type builds | [optional] 
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 

### Return type

[**BetaAppReviewSubmissionResponse**](BetaAppReviewSubmissionResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

