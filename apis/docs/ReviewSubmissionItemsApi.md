# AppStoreConnectApi.ReviewSubmissionItemsApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**reviewSubmissionItemsCreateInstance**](ReviewSubmissionItemsApi.md#reviewSubmissionItemsCreateInstance) | **POST** /v1/reviewSubmissionItems | 
[**reviewSubmissionItemsDeleteInstance**](ReviewSubmissionItemsApi.md#reviewSubmissionItemsDeleteInstance) | **DELETE** /v1/reviewSubmissionItems/{id} | 
[**reviewSubmissionItemsUpdateInstance**](ReviewSubmissionItemsApi.md#reviewSubmissionItemsUpdateInstance) | **PATCH** /v1/reviewSubmissionItems/{id} | 



## reviewSubmissionItemsCreateInstance

> ReviewSubmissionItemResponse reviewSubmissionItemsCreateInstance(reviewSubmissionItemCreateRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.ReviewSubmissionItemsApi();
let reviewSubmissionItemCreateRequest = new AppStoreConnectApi.ReviewSubmissionItemCreateRequest(); // ReviewSubmissionItemCreateRequest | ReviewSubmissionItem representation
apiInstance.reviewSubmissionItemsCreateInstance(reviewSubmissionItemCreateRequest, (error, data, response) => {
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
 **reviewSubmissionItemCreateRequest** | [**ReviewSubmissionItemCreateRequest**](ReviewSubmissionItemCreateRequest.md)| ReviewSubmissionItem representation | 

### Return type

[**ReviewSubmissionItemResponse**](ReviewSubmissionItemResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## reviewSubmissionItemsDeleteInstance

> reviewSubmissionItemsDeleteInstance(id)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.ReviewSubmissionItemsApi();
let id = "id_example"; // String | the id of the requested resource
apiInstance.reviewSubmissionItemsDeleteInstance(id, (error, data, response) => {
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


## reviewSubmissionItemsUpdateInstance

> ReviewSubmissionItemResponse reviewSubmissionItemsUpdateInstance(id, reviewSubmissionItemUpdateRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.ReviewSubmissionItemsApi();
let id = "id_example"; // String | the id of the requested resource
let reviewSubmissionItemUpdateRequest = new AppStoreConnectApi.ReviewSubmissionItemUpdateRequest(); // ReviewSubmissionItemUpdateRequest | ReviewSubmissionItem representation
apiInstance.reviewSubmissionItemsUpdateInstance(id, reviewSubmissionItemUpdateRequest, (error, data, response) => {
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
 **reviewSubmissionItemUpdateRequest** | [**ReviewSubmissionItemUpdateRequest**](ReviewSubmissionItemUpdateRequest.md)| ReviewSubmissionItem representation | 

### Return type

[**ReviewSubmissionItemResponse**](ReviewSubmissionItemResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

