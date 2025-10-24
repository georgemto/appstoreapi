# AppStoreConnectApi.AppStoreVersionReleaseRequestsApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**appStoreVersionReleaseRequestsCreateInstance**](AppStoreVersionReleaseRequestsApi.md#appStoreVersionReleaseRequestsCreateInstance) | **POST** /v1/appStoreVersionReleaseRequests | 



## appStoreVersionReleaseRequestsCreateInstance

> AppStoreVersionReleaseRequestResponse appStoreVersionReleaseRequestsCreateInstance(appStoreVersionReleaseRequestCreateRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AppStoreVersionReleaseRequestsApi();
let appStoreVersionReleaseRequestCreateRequest = new AppStoreConnectApi.AppStoreVersionReleaseRequestCreateRequest(); // AppStoreVersionReleaseRequestCreateRequest | AppStoreVersionReleaseRequest representation
apiInstance.appStoreVersionReleaseRequestsCreateInstance(appStoreVersionReleaseRequestCreateRequest, (error, data, response) => {
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
 **appStoreVersionReleaseRequestCreateRequest** | [**AppStoreVersionReleaseRequestCreateRequest**](AppStoreVersionReleaseRequestCreateRequest.md)| AppStoreVersionReleaseRequest representation | 

### Return type

[**AppStoreVersionReleaseRequestResponse**](AppStoreVersionReleaseRequestResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

