# AppStoreConnectApi.AppStoreVersionPhasedReleasesApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**appStoreVersionPhasedReleasesCreateInstance**](AppStoreVersionPhasedReleasesApi.md#appStoreVersionPhasedReleasesCreateInstance) | **POST** /v1/appStoreVersionPhasedReleases | 
[**appStoreVersionPhasedReleasesDeleteInstance**](AppStoreVersionPhasedReleasesApi.md#appStoreVersionPhasedReleasesDeleteInstance) | **DELETE** /v1/appStoreVersionPhasedReleases/{id} | 
[**appStoreVersionPhasedReleasesUpdateInstance**](AppStoreVersionPhasedReleasesApi.md#appStoreVersionPhasedReleasesUpdateInstance) | **PATCH** /v1/appStoreVersionPhasedReleases/{id} | 



## appStoreVersionPhasedReleasesCreateInstance

> AppStoreVersionPhasedReleaseResponse appStoreVersionPhasedReleasesCreateInstance(appStoreVersionPhasedReleaseCreateRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AppStoreVersionPhasedReleasesApi();
let appStoreVersionPhasedReleaseCreateRequest = new AppStoreConnectApi.AppStoreVersionPhasedReleaseCreateRequest(); // AppStoreVersionPhasedReleaseCreateRequest | AppStoreVersionPhasedRelease representation
apiInstance.appStoreVersionPhasedReleasesCreateInstance(appStoreVersionPhasedReleaseCreateRequest, (error, data, response) => {
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
 **appStoreVersionPhasedReleaseCreateRequest** | [**AppStoreVersionPhasedReleaseCreateRequest**](AppStoreVersionPhasedReleaseCreateRequest.md)| AppStoreVersionPhasedRelease representation | 

### Return type

[**AppStoreVersionPhasedReleaseResponse**](AppStoreVersionPhasedReleaseResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## appStoreVersionPhasedReleasesDeleteInstance

> appStoreVersionPhasedReleasesDeleteInstance(id)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AppStoreVersionPhasedReleasesApi();
let id = "id_example"; // String | the id of the requested resource
apiInstance.appStoreVersionPhasedReleasesDeleteInstance(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| the id of the requested resource | 

### Return type

null (empty response body)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## appStoreVersionPhasedReleasesUpdateInstance

> AppStoreVersionPhasedReleaseResponse appStoreVersionPhasedReleasesUpdateInstance(id, appStoreVersionPhasedReleaseUpdateRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AppStoreVersionPhasedReleasesApi();
let id = "id_example"; // String | the id of the requested resource
let appStoreVersionPhasedReleaseUpdateRequest = new AppStoreConnectApi.AppStoreVersionPhasedReleaseUpdateRequest(); // AppStoreVersionPhasedReleaseUpdateRequest | AppStoreVersionPhasedRelease representation
apiInstance.appStoreVersionPhasedReleasesUpdateInstance(id, appStoreVersionPhasedReleaseUpdateRequest, (error, data, response) => {
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
 **appStoreVersionPhasedReleaseUpdateRequest** | [**AppStoreVersionPhasedReleaseUpdateRequest**](AppStoreVersionPhasedReleaseUpdateRequest.md)| AppStoreVersionPhasedRelease representation | 

### Return type

[**AppStoreVersionPhasedReleaseResponse**](AppStoreVersionPhasedReleaseResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

