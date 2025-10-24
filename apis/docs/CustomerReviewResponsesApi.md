# AppStoreConnectApi.CustomerReviewResponsesApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**customerReviewResponsesCreateInstance**](CustomerReviewResponsesApi.md#customerReviewResponsesCreateInstance) | **POST** /v1/customerReviewResponses | 
[**customerReviewResponsesDeleteInstance**](CustomerReviewResponsesApi.md#customerReviewResponsesDeleteInstance) | **DELETE** /v1/customerReviewResponses/{id} | 
[**customerReviewResponsesGetInstance**](CustomerReviewResponsesApi.md#customerReviewResponsesGetInstance) | **GET** /v1/customerReviewResponses/{id} | 



## customerReviewResponsesCreateInstance

> CustomerReviewResponseV1Response customerReviewResponsesCreateInstance(customerReviewResponseV1CreateRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.CustomerReviewResponsesApi();
let customerReviewResponseV1CreateRequest = new AppStoreConnectApi.CustomerReviewResponseV1CreateRequest(); // CustomerReviewResponseV1CreateRequest | CustomerReviewResponse representation
apiInstance.customerReviewResponsesCreateInstance(customerReviewResponseV1CreateRequest, (error, data, response) => {
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
 **customerReviewResponseV1CreateRequest** | [**CustomerReviewResponseV1CreateRequest**](CustomerReviewResponseV1CreateRequest.md)| CustomerReviewResponse representation | 

### Return type

[**CustomerReviewResponseV1Response**](CustomerReviewResponseV1Response.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## customerReviewResponsesDeleteInstance

> customerReviewResponsesDeleteInstance(id)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.CustomerReviewResponsesApi();
let id = "id_example"; // String | the id of the requested resource
apiInstance.customerReviewResponsesDeleteInstance(id, (error, data, response) => {
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


## customerReviewResponsesGetInstance

> CustomerReviewResponseV1Response customerReviewResponsesGetInstance(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.CustomerReviewResponsesApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsCustomerReviewResponses': ["null"], // [String] | the fields to include for returned resources of type customerReviewResponses
  'include': ["null"] // [String] | comma-separated list of relationships to include
};
apiInstance.customerReviewResponsesGetInstance(id, opts, (error, data, response) => {
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
 **fieldsCustomerReviewResponses** | [**[String]**](String.md)| the fields to include for returned resources of type customerReviewResponses | [optional] 
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 

### Return type

[**CustomerReviewResponseV1Response**](CustomerReviewResponseV1Response.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

