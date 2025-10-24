# AppStoreConnectApi.CustomerReviewsApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**customerReviewsGetInstance**](CustomerReviewsApi.md#customerReviewsGetInstance) | **GET** /v1/customerReviews/{id} | 
[**customerReviewsResponseGetToOneRelated**](CustomerReviewsApi.md#customerReviewsResponseGetToOneRelated) | **GET** /v1/customerReviews/{id}/response | 
[**customerReviewsResponseGetToOneRelationship**](CustomerReviewsApi.md#customerReviewsResponseGetToOneRelationship) | **GET** /v1/customerReviews/{id}/relationships/response | 



## customerReviewsGetInstance

> CustomerReviewResponse customerReviewsGetInstance(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.CustomerReviewsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsCustomerReviews': ["null"], // [String] | the fields to include for returned resources of type customerReviews
  'fieldsCustomerReviewResponses': ["null"], // [String] | the fields to include for returned resources of type customerReviewResponses
  'include': ["null"] // [String] | comma-separated list of relationships to include
};
apiInstance.customerReviewsGetInstance(id, opts, (error, data, response) => {
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
 **fieldsCustomerReviews** | [**[String]**](String.md)| the fields to include for returned resources of type customerReviews | [optional] 
 **fieldsCustomerReviewResponses** | [**[String]**](String.md)| the fields to include for returned resources of type customerReviewResponses | [optional] 
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 

### Return type

[**CustomerReviewResponse**](CustomerReviewResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## customerReviewsResponseGetToOneRelated

> CustomerReviewResponseV1Response customerReviewsResponseGetToOneRelated(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.CustomerReviewsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsCustomerReviewResponses': ["null"], // [String] | the fields to include for returned resources of type customerReviewResponses
  'fieldsCustomerReviews': ["null"], // [String] | the fields to include for returned resources of type customerReviews
  'include': ["null"] // [String] | comma-separated list of relationships to include
};
apiInstance.customerReviewsResponseGetToOneRelated(id, opts, (error, data, response) => {
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
 **fieldsCustomerReviews** | [**[String]**](String.md)| the fields to include for returned resources of type customerReviews | [optional] 
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 

### Return type

[**CustomerReviewResponseV1Response**](CustomerReviewResponseV1Response.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## customerReviewsResponseGetToOneRelationship

> CustomerReviewResponseLinkageResponse customerReviewsResponseGetToOneRelationship(id)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.CustomerReviewsApi();
let id = "id_example"; // String | the id of the requested resource
apiInstance.customerReviewsResponseGetToOneRelationship(id, (error, data, response) => {
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

[**CustomerReviewResponseLinkageResponse**](CustomerReviewResponseLinkageResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

