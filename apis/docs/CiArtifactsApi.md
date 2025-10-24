# AppStoreConnectApi.CiArtifactsApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**ciArtifactsGetInstance**](CiArtifactsApi.md#ciArtifactsGetInstance) | **GET** /v1/ciArtifacts/{id} | 



## ciArtifactsGetInstance

> CiArtifactResponse ciArtifactsGetInstance(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.CiArtifactsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsCiArtifacts': ["null"] // [String] | the fields to include for returned resources of type ciArtifacts
};
apiInstance.ciArtifactsGetInstance(id, opts, (error, data, response) => {
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
 **fieldsCiArtifacts** | [**[String]**](String.md)| the fields to include for returned resources of type ciArtifacts | [optional] 

### Return type

[**CiArtifactResponse**](CiArtifactResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

