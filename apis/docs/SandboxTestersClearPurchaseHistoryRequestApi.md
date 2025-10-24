# AppStoreConnectApi.SandboxTestersClearPurchaseHistoryRequestApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**sandboxTestersClearPurchaseHistoryRequestV2CreateInstance**](SandboxTestersClearPurchaseHistoryRequestApi.md#sandboxTestersClearPurchaseHistoryRequestV2CreateInstance) | **POST** /v2/sandboxTestersClearPurchaseHistoryRequest | 



## sandboxTestersClearPurchaseHistoryRequestV2CreateInstance

> SandboxTestersClearPurchaseHistoryRequestV2Response sandboxTestersClearPurchaseHistoryRequestV2CreateInstance(sandboxTestersClearPurchaseHistoryRequestV2CreateRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.SandboxTestersClearPurchaseHistoryRequestApi();
let sandboxTestersClearPurchaseHistoryRequestV2CreateRequest = new AppStoreConnectApi.SandboxTestersClearPurchaseHistoryRequestV2CreateRequest(); // SandboxTestersClearPurchaseHistoryRequestV2CreateRequest | SandboxTestersClearPurchaseHistoryRequest representation
apiInstance.sandboxTestersClearPurchaseHistoryRequestV2CreateInstance(sandboxTestersClearPurchaseHistoryRequestV2CreateRequest, (error, data, response) => {
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
 **sandboxTestersClearPurchaseHistoryRequestV2CreateRequest** | [**SandboxTestersClearPurchaseHistoryRequestV2CreateRequest**](SandboxTestersClearPurchaseHistoryRequestV2CreateRequest.md)| SandboxTestersClearPurchaseHistoryRequest representation | 

### Return type

[**SandboxTestersClearPurchaseHistoryRequestV2Response**](SandboxTestersClearPurchaseHistoryRequestV2Response.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

