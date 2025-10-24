# AppStoreConnectApi.SubscriptionOfferCodeOneTimeUseCodesApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**subscriptionOfferCodeOneTimeUseCodesCreateInstance**](SubscriptionOfferCodeOneTimeUseCodesApi.md#subscriptionOfferCodeOneTimeUseCodesCreateInstance) | **POST** /v1/subscriptionOfferCodeOneTimeUseCodes | 
[**subscriptionOfferCodeOneTimeUseCodesGetInstance**](SubscriptionOfferCodeOneTimeUseCodesApi.md#subscriptionOfferCodeOneTimeUseCodesGetInstance) | **GET** /v1/subscriptionOfferCodeOneTimeUseCodes/{id} | 
[**subscriptionOfferCodeOneTimeUseCodesUpdateInstance**](SubscriptionOfferCodeOneTimeUseCodesApi.md#subscriptionOfferCodeOneTimeUseCodesUpdateInstance) | **PATCH** /v1/subscriptionOfferCodeOneTimeUseCodes/{id} | 
[**subscriptionOfferCodeOneTimeUseCodesValuesGetToOneRelated**](SubscriptionOfferCodeOneTimeUseCodesApi.md#subscriptionOfferCodeOneTimeUseCodesValuesGetToOneRelated) | **GET** /v1/subscriptionOfferCodeOneTimeUseCodes/{id}/values | 



## subscriptionOfferCodeOneTimeUseCodesCreateInstance

> SubscriptionOfferCodeOneTimeUseCodeResponse subscriptionOfferCodeOneTimeUseCodesCreateInstance(subscriptionOfferCodeOneTimeUseCodeCreateRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.SubscriptionOfferCodeOneTimeUseCodesApi();
let subscriptionOfferCodeOneTimeUseCodeCreateRequest = new AppStoreConnectApi.SubscriptionOfferCodeOneTimeUseCodeCreateRequest(); // SubscriptionOfferCodeOneTimeUseCodeCreateRequest | SubscriptionOfferCodeOneTimeUseCode representation
apiInstance.subscriptionOfferCodeOneTimeUseCodesCreateInstance(subscriptionOfferCodeOneTimeUseCodeCreateRequest, (error, data, response) => {
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
 **subscriptionOfferCodeOneTimeUseCodeCreateRequest** | [**SubscriptionOfferCodeOneTimeUseCodeCreateRequest**](SubscriptionOfferCodeOneTimeUseCodeCreateRequest.md)| SubscriptionOfferCodeOneTimeUseCode representation | 

### Return type

[**SubscriptionOfferCodeOneTimeUseCodeResponse**](SubscriptionOfferCodeOneTimeUseCodeResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## subscriptionOfferCodeOneTimeUseCodesGetInstance

> SubscriptionOfferCodeOneTimeUseCodeResponse subscriptionOfferCodeOneTimeUseCodesGetInstance(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.SubscriptionOfferCodeOneTimeUseCodesApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsSubscriptionOfferCodeOneTimeUseCodes': ["null"], // [String] | the fields to include for returned resources of type subscriptionOfferCodeOneTimeUseCodes
  'include': ["null"] // [String] | comma-separated list of relationships to include
};
apiInstance.subscriptionOfferCodeOneTimeUseCodesGetInstance(id, opts, (error, data, response) => {
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
 **fieldsSubscriptionOfferCodeOneTimeUseCodes** | [**[String]**](String.md)| the fields to include for returned resources of type subscriptionOfferCodeOneTimeUseCodes | [optional] 
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 

### Return type

[**SubscriptionOfferCodeOneTimeUseCodeResponse**](SubscriptionOfferCodeOneTimeUseCodeResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## subscriptionOfferCodeOneTimeUseCodesUpdateInstance

> SubscriptionOfferCodeOneTimeUseCodeResponse subscriptionOfferCodeOneTimeUseCodesUpdateInstance(id, subscriptionOfferCodeOneTimeUseCodeUpdateRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.SubscriptionOfferCodeOneTimeUseCodesApi();
let id = "id_example"; // String | the id of the requested resource
let subscriptionOfferCodeOneTimeUseCodeUpdateRequest = new AppStoreConnectApi.SubscriptionOfferCodeOneTimeUseCodeUpdateRequest(); // SubscriptionOfferCodeOneTimeUseCodeUpdateRequest | SubscriptionOfferCodeOneTimeUseCode representation
apiInstance.subscriptionOfferCodeOneTimeUseCodesUpdateInstance(id, subscriptionOfferCodeOneTimeUseCodeUpdateRequest, (error, data, response) => {
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
 **subscriptionOfferCodeOneTimeUseCodeUpdateRequest** | [**SubscriptionOfferCodeOneTimeUseCodeUpdateRequest**](SubscriptionOfferCodeOneTimeUseCodeUpdateRequest.md)| SubscriptionOfferCodeOneTimeUseCode representation | 

### Return type

[**SubscriptionOfferCodeOneTimeUseCodeResponse**](SubscriptionOfferCodeOneTimeUseCodeResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## subscriptionOfferCodeOneTimeUseCodesValuesGetToOneRelated

> String subscriptionOfferCodeOneTimeUseCodesValuesGetToOneRelated(id)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.SubscriptionOfferCodeOneTimeUseCodesApi();
let id = "id_example"; // String | the id of the requested resource
apiInstance.subscriptionOfferCodeOneTimeUseCodesValuesGetToOneRelated(id, (error, data, response) => {
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

**String**

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/csv

