# AppStoreConnectApi.BetaCrashLogsApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**betaCrashLogsGetInstance**](BetaCrashLogsApi.md#betaCrashLogsGetInstance) | **GET** /v1/betaCrashLogs/{id} | 



## betaCrashLogsGetInstance

> BetaCrashLogResponse betaCrashLogsGetInstance(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.BetaCrashLogsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsBetaCrashLogs': ["null"] // [String] | the fields to include for returned resources of type betaCrashLogs
};
apiInstance.betaCrashLogsGetInstance(id, opts, (error, data, response) => {
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
 **fieldsBetaCrashLogs** | [**[String]**](String.md)| the fields to include for returned resources of type betaCrashLogs | [optional] 

### Return type

[**BetaCrashLogResponse**](BetaCrashLogResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

