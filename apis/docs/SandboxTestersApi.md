# AppStoreConnectApi.SandboxTestersApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**sandboxTestersV2GetCollection**](SandboxTestersApi.md#sandboxTestersV2GetCollection) | **GET** /v2/sandboxTesters | 
[**sandboxTestersV2UpdateInstance**](SandboxTestersApi.md#sandboxTestersV2UpdateInstance) | **PATCH** /v2/sandboxTesters/{id} | 



## sandboxTestersV2GetCollection

> SandboxTestersV2Response sandboxTestersV2GetCollection(opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.SandboxTestersApi();
let opts = {
  'fieldsSandboxTesters': ["null"], // [String] | the fields to include for returned resources of type sandboxTesters
  'limit': 56 // Number | maximum resources per page
};
apiInstance.sandboxTestersV2GetCollection(opts, (error, data, response) => {
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
 **fieldsSandboxTesters** | [**[String]**](String.md)| the fields to include for returned resources of type sandboxTesters | [optional] 
 **limit** | **Number**| maximum resources per page | [optional] 

### Return type

[**SandboxTestersV2Response**](SandboxTestersV2Response.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## sandboxTestersV2UpdateInstance

> SandboxTesterV2Response sandboxTestersV2UpdateInstance(id, sandboxTesterV2UpdateRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.SandboxTestersApi();
let id = "id_example"; // String | the id of the requested resource
let sandboxTesterV2UpdateRequest = new AppStoreConnectApi.SandboxTesterV2UpdateRequest(); // SandboxTesterV2UpdateRequest | SandboxTester representation
apiInstance.sandboxTestersV2UpdateInstance(id, sandboxTesterV2UpdateRequest, (error, data, response) => {
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
 **sandboxTesterV2UpdateRequest** | [**SandboxTesterV2UpdateRequest**](SandboxTesterV2UpdateRequest.md)| SandboxTester representation | 

### Return type

[**SandboxTesterV2Response**](SandboxTesterV2Response.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

