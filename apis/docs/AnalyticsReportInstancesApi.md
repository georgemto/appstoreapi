# AppStoreConnectApi.AnalyticsReportInstancesApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**analyticsReportInstancesGetInstance**](AnalyticsReportInstancesApi.md#analyticsReportInstancesGetInstance) | **GET** /v1/analyticsReportInstances/{id} | 
[**analyticsReportInstancesSegmentsGetToManyRelated**](AnalyticsReportInstancesApi.md#analyticsReportInstancesSegmentsGetToManyRelated) | **GET** /v1/analyticsReportInstances/{id}/segments | 
[**analyticsReportInstancesSegmentsGetToManyRelationship**](AnalyticsReportInstancesApi.md#analyticsReportInstancesSegmentsGetToManyRelationship) | **GET** /v1/analyticsReportInstances/{id}/relationships/segments | 



## analyticsReportInstancesGetInstance

> AnalyticsReportInstanceResponse analyticsReportInstancesGetInstance(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AnalyticsReportInstancesApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsAnalyticsReportInstances': ["null"] // [String] | the fields to include for returned resources of type analyticsReportInstances
};
apiInstance.analyticsReportInstancesGetInstance(id, opts, (error, data, response) => {
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
 **fieldsAnalyticsReportInstances** | [**[String]**](String.md)| the fields to include for returned resources of type analyticsReportInstances | [optional] 

### Return type

[**AnalyticsReportInstanceResponse**](AnalyticsReportInstanceResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## analyticsReportInstancesSegmentsGetToManyRelated

> AnalyticsReportSegmentsResponse analyticsReportInstancesSegmentsGetToManyRelated(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AnalyticsReportInstancesApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsAnalyticsReportSegments': ["null"], // [String] | the fields to include for returned resources of type analyticsReportSegments
  'limit': 56 // Number | maximum resources per page
};
apiInstance.analyticsReportInstancesSegmentsGetToManyRelated(id, opts, (error, data, response) => {
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
 **fieldsAnalyticsReportSegments** | [**[String]**](String.md)| the fields to include for returned resources of type analyticsReportSegments | [optional] 
 **limit** | **Number**| maximum resources per page | [optional] 

### Return type

[**AnalyticsReportSegmentsResponse**](AnalyticsReportSegmentsResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## analyticsReportInstancesSegmentsGetToManyRelationship

> AnalyticsReportInstanceSegmentsLinkagesResponse analyticsReportInstancesSegmentsGetToManyRelationship(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AnalyticsReportInstancesApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'limit': 56 // Number | maximum resources per page
};
apiInstance.analyticsReportInstancesSegmentsGetToManyRelationship(id, opts, (error, data, response) => {
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

[**AnalyticsReportInstanceSegmentsLinkagesResponse**](AnalyticsReportInstanceSegmentsLinkagesResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

