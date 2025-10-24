# AppStoreConnectApi.SubscriptionPricesApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**subscriptionPricesCreateInstance**](SubscriptionPricesApi.md#subscriptionPricesCreateInstance) | **POST** /v1/subscriptionPrices | 
[**subscriptionPricesDeleteInstance**](SubscriptionPricesApi.md#subscriptionPricesDeleteInstance) | **DELETE** /v1/subscriptionPrices/{id} | 



## subscriptionPricesCreateInstance

> SubscriptionPriceResponse subscriptionPricesCreateInstance(subscriptionPriceCreateRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.SubscriptionPricesApi();
let subscriptionPriceCreateRequest = new AppStoreConnectApi.SubscriptionPriceCreateRequest(); // SubscriptionPriceCreateRequest | SubscriptionPrice representation
apiInstance.subscriptionPricesCreateInstance(subscriptionPriceCreateRequest, (error, data, response) => {
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
 **subscriptionPriceCreateRequest** | [**SubscriptionPriceCreateRequest**](SubscriptionPriceCreateRequest.md)| SubscriptionPrice representation | 

### Return type

[**SubscriptionPriceResponse**](SubscriptionPriceResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## subscriptionPricesDeleteInstance

> subscriptionPricesDeleteInstance(id)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.SubscriptionPricesApi();
let id = "id_example"; // String | the id of the requested resource
apiInstance.subscriptionPricesDeleteInstance(id, (error, data, response) => {
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

