# AppStoreConnectApi.BetaFeedbackCrashSubmissionsApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**betaFeedbackCrashSubmissionsCrashLogGetToOneRelated**](BetaFeedbackCrashSubmissionsApi.md#betaFeedbackCrashSubmissionsCrashLogGetToOneRelated) | **GET** /v1/betaFeedbackCrashSubmissions/{id}/crashLog | 
[**betaFeedbackCrashSubmissionsCrashLogGetToOneRelationship**](BetaFeedbackCrashSubmissionsApi.md#betaFeedbackCrashSubmissionsCrashLogGetToOneRelationship) | **GET** /v1/betaFeedbackCrashSubmissions/{id}/relationships/crashLog | 
[**betaFeedbackCrashSubmissionsDeleteInstance**](BetaFeedbackCrashSubmissionsApi.md#betaFeedbackCrashSubmissionsDeleteInstance) | **DELETE** /v1/betaFeedbackCrashSubmissions/{id} | 
[**betaFeedbackCrashSubmissionsGetInstance**](BetaFeedbackCrashSubmissionsApi.md#betaFeedbackCrashSubmissionsGetInstance) | **GET** /v1/betaFeedbackCrashSubmissions/{id} | 



## betaFeedbackCrashSubmissionsCrashLogGetToOneRelated

> BetaCrashLogResponse betaFeedbackCrashSubmissionsCrashLogGetToOneRelated(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.BetaFeedbackCrashSubmissionsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsBetaCrashLogs': ["null"] // [String] | the fields to include for returned resources of type betaCrashLogs
};
apiInstance.betaFeedbackCrashSubmissionsCrashLogGetToOneRelated(id, opts, (error, data, response) => {
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
 **fieldsBetaCrashLogs** | [**[String]**](String.md)| the fields to include for returned resources of type betaCrashLogs | [optional] 

### Return type

[**BetaCrashLogResponse**](BetaCrashLogResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## betaFeedbackCrashSubmissionsCrashLogGetToOneRelationship

> BetaFeedbackCrashSubmissionCrashLogLinkageResponse betaFeedbackCrashSubmissionsCrashLogGetToOneRelationship(id)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.BetaFeedbackCrashSubmissionsApi();
let id = "id_example"; // String | the id of the requested resource
apiInstance.betaFeedbackCrashSubmissionsCrashLogGetToOneRelationship(id, (error, data, response) => {
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

[**BetaFeedbackCrashSubmissionCrashLogLinkageResponse**](BetaFeedbackCrashSubmissionCrashLogLinkageResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## betaFeedbackCrashSubmissionsDeleteInstance

> betaFeedbackCrashSubmissionsDeleteInstance(id)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.BetaFeedbackCrashSubmissionsApi();
let id = "id_example"; // String | the id of the requested resource
apiInstance.betaFeedbackCrashSubmissionsDeleteInstance(id, (error, data, response) => {
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


## betaFeedbackCrashSubmissionsGetInstance

> BetaFeedbackCrashSubmissionResponse betaFeedbackCrashSubmissionsGetInstance(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.BetaFeedbackCrashSubmissionsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsBetaFeedbackCrashSubmissions': ["null"], // [String] | the fields to include for returned resources of type betaFeedbackCrashSubmissions
  'include': ["null"] // [String] | comma-separated list of relationships to include
};
apiInstance.betaFeedbackCrashSubmissionsGetInstance(id, opts, (error, data, response) => {
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
 **fieldsBetaFeedbackCrashSubmissions** | [**[String]**](String.md)| the fields to include for returned resources of type betaFeedbackCrashSubmissions | [optional] 
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 

### Return type

[**BetaFeedbackCrashSubmissionResponse**](BetaFeedbackCrashSubmissionResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

