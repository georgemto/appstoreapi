# AppStoreConnectApi.BetaFeedbackScreenshotSubmissionsApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**betaFeedbackScreenshotSubmissionsDeleteInstance**](BetaFeedbackScreenshotSubmissionsApi.md#betaFeedbackScreenshotSubmissionsDeleteInstance) | **DELETE** /v1/betaFeedbackScreenshotSubmissions/{id} | 
[**betaFeedbackScreenshotSubmissionsGetInstance**](BetaFeedbackScreenshotSubmissionsApi.md#betaFeedbackScreenshotSubmissionsGetInstance) | **GET** /v1/betaFeedbackScreenshotSubmissions/{id} | 



## betaFeedbackScreenshotSubmissionsDeleteInstance

> betaFeedbackScreenshotSubmissionsDeleteInstance(id)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.BetaFeedbackScreenshotSubmissionsApi();
let id = "id_example"; // String | the id of the requested resource
apiInstance.betaFeedbackScreenshotSubmissionsDeleteInstance(id, (error, data, response) => {
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


## betaFeedbackScreenshotSubmissionsGetInstance

> BetaFeedbackScreenshotSubmissionResponse betaFeedbackScreenshotSubmissionsGetInstance(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.BetaFeedbackScreenshotSubmissionsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsBetaFeedbackScreenshotSubmissions': ["null"], // [String] | the fields to include for returned resources of type betaFeedbackScreenshotSubmissions
  'include': ["null"] // [String] | comma-separated list of relationships to include
};
apiInstance.betaFeedbackScreenshotSubmissionsGetInstance(id, opts, (error, data, response) => {
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
 **fieldsBetaFeedbackScreenshotSubmissions** | [**[String]**](String.md)| the fields to include for returned resources of type betaFeedbackScreenshotSubmissions | [optional] 
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 

### Return type

[**BetaFeedbackScreenshotSubmissionResponse**](BetaFeedbackScreenshotSubmissionResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

