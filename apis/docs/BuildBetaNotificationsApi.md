# AppStoreConnectApi.BuildBetaNotificationsApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**buildBetaNotificationsCreateInstance**](BuildBetaNotificationsApi.md#buildBetaNotificationsCreateInstance) | **POST** /v1/buildBetaNotifications | 



## buildBetaNotificationsCreateInstance

> BuildBetaNotificationResponse buildBetaNotificationsCreateInstance(buildBetaNotificationCreateRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.BuildBetaNotificationsApi();
let buildBetaNotificationCreateRequest = new AppStoreConnectApi.BuildBetaNotificationCreateRequest(); // BuildBetaNotificationCreateRequest | BuildBetaNotification representation
apiInstance.buildBetaNotificationsCreateInstance(buildBetaNotificationCreateRequest, (error, data, response) => {
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
 **buildBetaNotificationCreateRequest** | [**BuildBetaNotificationCreateRequest**](BuildBetaNotificationCreateRequest.md)| BuildBetaNotification representation | 

### Return type

[**BuildBetaNotificationResponse**](BuildBetaNotificationResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

