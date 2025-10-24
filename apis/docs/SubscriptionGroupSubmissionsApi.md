# AppStoreConnectApi.SubscriptionGroupSubmissionsApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**subscriptionGroupSubmissionsCreateInstance**](SubscriptionGroupSubmissionsApi.md#subscriptionGroupSubmissionsCreateInstance) | **POST** /v1/subscriptionGroupSubmissions | 



## subscriptionGroupSubmissionsCreateInstance

> SubscriptionGroupSubmissionResponse subscriptionGroupSubmissionsCreateInstance(subscriptionGroupSubmissionCreateRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.SubscriptionGroupSubmissionsApi();
let subscriptionGroupSubmissionCreateRequest = new AppStoreConnectApi.SubscriptionGroupSubmissionCreateRequest(); // SubscriptionGroupSubmissionCreateRequest | SubscriptionGroupSubmission representation
apiInstance.subscriptionGroupSubmissionsCreateInstance(subscriptionGroupSubmissionCreateRequest, (error, data, response) => {
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
 **subscriptionGroupSubmissionCreateRequest** | [**SubscriptionGroupSubmissionCreateRequest**](SubscriptionGroupSubmissionCreateRequest.md)| SubscriptionGroupSubmission representation | 

### Return type

[**SubscriptionGroupSubmissionResponse**](SubscriptionGroupSubmissionResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

