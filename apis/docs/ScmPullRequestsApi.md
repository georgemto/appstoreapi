# AppStoreConnectApi.ScmPullRequestsApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**scmPullRequestsGetInstance**](ScmPullRequestsApi.md#scmPullRequestsGetInstance) | **GET** /v1/scmPullRequests/{id} | 



## scmPullRequestsGetInstance

> ScmPullRequestResponse scmPullRequestsGetInstance(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.ScmPullRequestsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsScmPullRequests': ["null"], // [String] | the fields to include for returned resources of type scmPullRequests
  'include': ["null"] // [String] | comma-separated list of relationships to include
};
apiInstance.scmPullRequestsGetInstance(id, opts, (error, data, response) => {
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
 **fieldsScmPullRequests** | [**[String]**](String.md)| the fields to include for returned resources of type scmPullRequests | [optional] 
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 

### Return type

[**ScmPullRequestResponse**](ScmPullRequestResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

