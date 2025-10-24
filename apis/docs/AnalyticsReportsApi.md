# AppStoreConnectApi.AnalyticsReportsApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**analyticsReportsGetInstance**](AnalyticsReportsApi.md#analyticsReportsGetInstance) | **GET** /v1/analyticsReports/{id} | 
[**analyticsReportsInstancesGetToManyRelated**](AnalyticsReportsApi.md#analyticsReportsInstancesGetToManyRelated) | **GET** /v1/analyticsReports/{id}/instances | 
[**analyticsReportsInstancesGetToManyRelationship**](AnalyticsReportsApi.md#analyticsReportsInstancesGetToManyRelationship) | **GET** /v1/analyticsReports/{id}/relationships/instances | 



## analyticsReportsGetInstance

> AnalyticsReportResponse analyticsReportsGetInstance(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AnalyticsReportsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsAnalyticsReports': ["null"] // [String] | the fields to include for returned resources of type analyticsReports
};
apiInstance.analyticsReportsGetInstance(id, opts, (error, data, response) => {
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
 **fieldsAnalyticsReports** | [**[String]**](String.md)| the fields to include for returned resources of type analyticsReports | [optional] 

### Return type

[**AnalyticsReportResponse**](AnalyticsReportResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## analyticsReportsInstancesGetToManyRelated

> AnalyticsReportInstancesResponse analyticsReportsInstancesGetToManyRelated(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AnalyticsReportsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'filterGranularity': ["null"], // [String] | filter by attribute 'granularity'
  'filterProcessingDate': ["null"], // [String] | filter by attribute 'processingDate'
  'fieldsAnalyticsReportInstances': ["null"], // [String] | the fields to include for returned resources of type analyticsReportInstances
  'limit': 56 // Number | maximum resources per page
};
apiInstance.analyticsReportsInstancesGetToManyRelated(id, opts, (error, data, response) => {
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
 **filterGranularity** | [**[String]**](String.md)| filter by attribute &#39;granularity&#39; | [optional] 
 **filterProcessingDate** | [**[String]**](String.md)| filter by attribute &#39;processingDate&#39; | [optional] 
 **fieldsAnalyticsReportInstances** | [**[String]**](String.md)| the fields to include for returned resources of type analyticsReportInstances | [optional] 
 **limit** | **Number**| maximum resources per page | [optional] 

### Return type

[**AnalyticsReportInstancesResponse**](AnalyticsReportInstancesResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## analyticsReportsInstancesGetToManyRelationship

> AnalyticsReportInstancesLinkagesResponse analyticsReportsInstancesGetToManyRelationship(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AnalyticsReportsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'limit': 56 // Number | maximum resources per page
};
apiInstance.analyticsReportsInstancesGetToManyRelationship(id, opts, (error, data, response) => {
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

[**AnalyticsReportInstancesLinkagesResponse**](AnalyticsReportInstancesLinkagesResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

