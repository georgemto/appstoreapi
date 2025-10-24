# AppStoreConnectApi.SubscriptionGracePeriodsApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**subscriptionGracePeriodsGetInstance**](SubscriptionGracePeriodsApi.md#subscriptionGracePeriodsGetInstance) | **GET** /v1/subscriptionGracePeriods/{id} | 
[**subscriptionGracePeriodsUpdateInstance**](SubscriptionGracePeriodsApi.md#subscriptionGracePeriodsUpdateInstance) | **PATCH** /v1/subscriptionGracePeriods/{id} | 



## subscriptionGracePeriodsGetInstance

> SubscriptionGracePeriodResponse subscriptionGracePeriodsGetInstance(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.SubscriptionGracePeriodsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsSubscriptionGracePeriods': ["null"] // [String] | the fields to include for returned resources of type subscriptionGracePeriods
};
apiInstance.subscriptionGracePeriodsGetInstance(id, opts, (error, data, response) => {
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
 **fieldsSubscriptionGracePeriods** | [**[String]**](String.md)| the fields to include for returned resources of type subscriptionGracePeriods | [optional] 

### Return type

[**SubscriptionGracePeriodResponse**](SubscriptionGracePeriodResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## subscriptionGracePeriodsUpdateInstance

> SubscriptionGracePeriodResponse subscriptionGracePeriodsUpdateInstance(id, subscriptionGracePeriodUpdateRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.SubscriptionGracePeriodsApi();
let id = "id_example"; // String | the id of the requested resource
let subscriptionGracePeriodUpdateRequest = new AppStoreConnectApi.SubscriptionGracePeriodUpdateRequest(); // SubscriptionGracePeriodUpdateRequest | SubscriptionGracePeriod representation
apiInstance.subscriptionGracePeriodsUpdateInstance(id, subscriptionGracePeriodUpdateRequest, (error, data, response) => {
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
 **subscriptionGracePeriodUpdateRequest** | [**SubscriptionGracePeriodUpdateRequest**](SubscriptionGracePeriodUpdateRequest.md)| SubscriptionGracePeriod representation | 

### Return type

[**SubscriptionGracePeriodResponse**](SubscriptionGracePeriodResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

