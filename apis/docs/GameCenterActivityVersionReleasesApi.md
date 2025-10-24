# AppStoreConnectApi.GameCenterActivityVersionReleasesApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**gameCenterActivityVersionReleasesCreateInstance**](GameCenterActivityVersionReleasesApi.md#gameCenterActivityVersionReleasesCreateInstance) | **POST** /v1/gameCenterActivityVersionReleases | 
[**gameCenterActivityVersionReleasesDeleteInstance**](GameCenterActivityVersionReleasesApi.md#gameCenterActivityVersionReleasesDeleteInstance) | **DELETE** /v1/gameCenterActivityVersionReleases/{id} | 
[**gameCenterActivityVersionReleasesGetInstance**](GameCenterActivityVersionReleasesApi.md#gameCenterActivityVersionReleasesGetInstance) | **GET** /v1/gameCenterActivityVersionReleases/{id} | 



## gameCenterActivityVersionReleasesCreateInstance

> GameCenterActivityVersionReleaseResponse gameCenterActivityVersionReleasesCreateInstance(gameCenterActivityVersionReleaseCreateRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.GameCenterActivityVersionReleasesApi();
let gameCenterActivityVersionReleaseCreateRequest = new AppStoreConnectApi.GameCenterActivityVersionReleaseCreateRequest(); // GameCenterActivityVersionReleaseCreateRequest | GameCenterActivityVersionRelease representation
apiInstance.gameCenterActivityVersionReleasesCreateInstance(gameCenterActivityVersionReleaseCreateRequest, (error, data, response) => {
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
 **gameCenterActivityVersionReleaseCreateRequest** | [**GameCenterActivityVersionReleaseCreateRequest**](GameCenterActivityVersionReleaseCreateRequest.md)| GameCenterActivityVersionRelease representation | 

### Return type

[**GameCenterActivityVersionReleaseResponse**](GameCenterActivityVersionReleaseResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## gameCenterActivityVersionReleasesDeleteInstance

> gameCenterActivityVersionReleasesDeleteInstance(id)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.GameCenterActivityVersionReleasesApi();
let id = "id_example"; // String | the id of the requested resource
apiInstance.gameCenterActivityVersionReleasesDeleteInstance(id, (error, data, response) => {
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


## gameCenterActivityVersionReleasesGetInstance

> GameCenterActivityVersionReleaseResponse gameCenterActivityVersionReleasesGetInstance(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.GameCenterActivityVersionReleasesApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsGameCenterActivityVersionReleases': ["null"], // [String] | the fields to include for returned resources of type gameCenterActivityVersionReleases
  'include': ["null"] // [String] | comma-separated list of relationships to include
};
apiInstance.gameCenterActivityVersionReleasesGetInstance(id, opts, (error, data, response) => {
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
 **fieldsGameCenterActivityVersionReleases** | [**[String]**](String.md)| the fields to include for returned resources of type gameCenterActivityVersionReleases | [optional] 
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 

### Return type

[**GameCenterActivityVersionReleaseResponse**](GameCenterActivityVersionReleaseResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

