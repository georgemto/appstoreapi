# AppStoreConnectApi.BackgroundAssetVersionExternalBetaReleasesApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**backgroundAssetVersionExternalBetaReleasesGetInstance**](BackgroundAssetVersionExternalBetaReleasesApi.md#backgroundAssetVersionExternalBetaReleasesGetInstance) | **GET** /v1/backgroundAssetVersionExternalBetaReleases/{id} | 



## backgroundAssetVersionExternalBetaReleasesGetInstance

> BackgroundAssetVersionExternalBetaReleaseResponse backgroundAssetVersionExternalBetaReleasesGetInstance(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.BackgroundAssetVersionExternalBetaReleasesApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsBackgroundAssetVersionExternalBetaReleases': ["null"], // [String] | the fields to include for returned resources of type backgroundAssetVersionExternalBetaReleases
  'include': ["null"] // [String] | comma-separated list of relationships to include
};
apiInstance.backgroundAssetVersionExternalBetaReleasesGetInstance(id, opts, (error, data, response) => {
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
 **fieldsBackgroundAssetVersionExternalBetaReleases** | [**[String]**](String.md)| the fields to include for returned resources of type backgroundAssetVersionExternalBetaReleases | [optional] 
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 

### Return type

[**BackgroundAssetVersionExternalBetaReleaseResponse**](BackgroundAssetVersionExternalBetaReleaseResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

