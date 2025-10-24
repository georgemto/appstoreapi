# AppStoreConnectApi.AnalyticsReportRequestsApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**analyticsReportRequestsCreateInstance**](AnalyticsReportRequestsApi.md#analyticsReportRequestsCreateInstance) | **POST** /v1/analyticsReportRequests | 
[**analyticsReportRequestsDeleteInstance**](AnalyticsReportRequestsApi.md#analyticsReportRequestsDeleteInstance) | **DELETE** /v1/analyticsReportRequests/{id} | 
[**analyticsReportRequestsGetInstance**](AnalyticsReportRequestsApi.md#analyticsReportRequestsGetInstance) | **GET** /v1/analyticsReportRequests/{id} | 
[**analyticsReportRequestsReportsGetToManyRelated**](AnalyticsReportRequestsApi.md#analyticsReportRequestsReportsGetToManyRelated) | **GET** /v1/analyticsReportRequests/{id}/reports | 
[**analyticsReportRequestsReportsGetToManyRelationship**](AnalyticsReportRequestsApi.md#analyticsReportRequestsReportsGetToManyRelationship) | **GET** /v1/analyticsReportRequests/{id}/relationships/reports | 



## analyticsReportRequestsCreateInstance

> AnalyticsReportRequestResponse analyticsReportRequestsCreateInstance(analyticsReportRequestCreateRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AnalyticsReportRequestsApi();
let analyticsReportRequestCreateRequest = new AppStoreConnectApi.AnalyticsReportRequestCreateRequest(); // AnalyticsReportRequestCreateRequest | AnalyticsReportRequest representation
apiInstance.analyticsReportRequestsCreateInstance(analyticsReportRequestCreateRequest, (error, data, response) => {
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
 **analyticsReportRequestCreateRequest** | [**AnalyticsReportRequestCreateRequest**](AnalyticsReportRequestCreateRequest.md)| AnalyticsReportRequest representation | 

### Return type

[**AnalyticsReportRequestResponse**](AnalyticsReportRequestResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## analyticsReportRequestsDeleteInstance

> analyticsReportRequestsDeleteInstance(id)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AnalyticsReportRequestsApi();
let id = "id_example"; // String | the id of the requested resource
apiInstance.analyticsReportRequestsDeleteInstance(id, (error, data, response) => {
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


## analyticsReportRequestsGetInstance

> AnalyticsReportRequestResponse analyticsReportRequestsGetInstance(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AnalyticsReportRequestsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsAnalyticsReportRequests': ["null"], // [String] | the fields to include for returned resources of type analyticsReportRequests
  'fieldsAnalyticsReports': ["null"], // [String] | the fields to include for returned resources of type analyticsReports
  'include': ["null"], // [String] | comma-separated list of relationships to include
  'limitReports': 56 // Number | maximum number of related reports returned (when they are included)
};
apiInstance.analyticsReportRequestsGetInstance(id, opts, (error, data, response) => {
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
 **fieldsAnalyticsReportRequests** | [**[String]**](String.md)| the fields to include for returned resources of type analyticsReportRequests | [optional] 
 **fieldsAnalyticsReports** | [**[String]**](String.md)| the fields to include for returned resources of type analyticsReports | [optional] 
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 
 **limitReports** | **Number**| maximum number of related reports returned (when they are included) | [optional] 

### Return type

[**AnalyticsReportRequestResponse**](AnalyticsReportRequestResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## analyticsReportRequestsReportsGetToManyRelated

> AnalyticsReportsResponse analyticsReportRequestsReportsGetToManyRelated(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AnalyticsReportRequestsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'filterName': ["null"], // [String] | filter by attribute 'name'
  'filterCategory': ["null"], // [String] | filter by attribute 'category'
  'fieldsAnalyticsReports': ["null"], // [String] | the fields to include for returned resources of type analyticsReports
  'limit': 56 // Number | maximum resources per page
};
apiInstance.analyticsReportRequestsReportsGetToManyRelated(id, opts, (error, data, response) => {
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
 **filterName** | [**[String]**](String.md)| filter by attribute &#39;name&#39; | [optional] 
 **filterCategory** | [**[String]**](String.md)| filter by attribute &#39;category&#39; | [optional] 
 **fieldsAnalyticsReports** | [**[String]**](String.md)| the fields to include for returned resources of type analyticsReports | [optional] 
 **limit** | **Number**| maximum resources per page | [optional] 

### Return type

[**AnalyticsReportsResponse**](AnalyticsReportsResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## analyticsReportRequestsReportsGetToManyRelationship

> AnalyticsReportRequestReportsLinkagesResponse analyticsReportRequestsReportsGetToManyRelationship(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AnalyticsReportRequestsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'limit': 56 // Number | maximum resources per page
};
apiInstance.analyticsReportRequestsReportsGetToManyRelationship(id, opts, (error, data, response) => {
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

[**AnalyticsReportRequestReportsLinkagesResponse**](AnalyticsReportRequestReportsLinkagesResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

