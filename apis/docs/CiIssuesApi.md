# AppStoreConnectApi.CiIssuesApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**ciIssuesGetInstance**](CiIssuesApi.md#ciIssuesGetInstance) | **GET** /v1/ciIssues/{id} | 



## ciIssuesGetInstance

> CiIssueResponse ciIssuesGetInstance(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.CiIssuesApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsCiIssues': ["null"] // [String] | the fields to include for returned resources of type ciIssues
};
apiInstance.ciIssuesGetInstance(id, opts, (error, data, response) => {
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
 **fieldsCiIssues** | [**[String]**](String.md)| the fields to include for returned resources of type ciIssues | [optional] 

### Return type

[**CiIssueResponse**](CiIssueResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

