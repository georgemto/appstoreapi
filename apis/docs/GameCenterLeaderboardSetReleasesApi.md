# AppStoreConnectApi.GameCenterLeaderboardSetReleasesApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**gameCenterLeaderboardSetReleasesCreateInstance**](GameCenterLeaderboardSetReleasesApi.md#gameCenterLeaderboardSetReleasesCreateInstance) | **POST** /v1/gameCenterLeaderboardSetReleases | 
[**gameCenterLeaderboardSetReleasesDeleteInstance**](GameCenterLeaderboardSetReleasesApi.md#gameCenterLeaderboardSetReleasesDeleteInstance) | **DELETE** /v1/gameCenterLeaderboardSetReleases/{id} | 
[**gameCenterLeaderboardSetReleasesGetInstance**](GameCenterLeaderboardSetReleasesApi.md#gameCenterLeaderboardSetReleasesGetInstance) | **GET** /v1/gameCenterLeaderboardSetReleases/{id} | 



## gameCenterLeaderboardSetReleasesCreateInstance

> GameCenterLeaderboardSetReleaseResponse gameCenterLeaderboardSetReleasesCreateInstance(gameCenterLeaderboardSetReleaseCreateRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.GameCenterLeaderboardSetReleasesApi();
let gameCenterLeaderboardSetReleaseCreateRequest = new AppStoreConnectApi.GameCenterLeaderboardSetReleaseCreateRequest(); // GameCenterLeaderboardSetReleaseCreateRequest | GameCenterLeaderboardSetRelease representation
apiInstance.gameCenterLeaderboardSetReleasesCreateInstance(gameCenterLeaderboardSetReleaseCreateRequest, (error, data, response) => {
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
 **gameCenterLeaderboardSetReleaseCreateRequest** | [**GameCenterLeaderboardSetReleaseCreateRequest**](GameCenterLeaderboardSetReleaseCreateRequest.md)| GameCenterLeaderboardSetRelease representation | 

### Return type

[**GameCenterLeaderboardSetReleaseResponse**](GameCenterLeaderboardSetReleaseResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## gameCenterLeaderboardSetReleasesDeleteInstance

> gameCenterLeaderboardSetReleasesDeleteInstance(id)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.GameCenterLeaderboardSetReleasesApi();
let id = "id_example"; // String | the id of the requested resource
apiInstance.gameCenterLeaderboardSetReleasesDeleteInstance(id, (error, data, response) => {
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


## gameCenterLeaderboardSetReleasesGetInstance

> GameCenterLeaderboardSetReleaseResponse gameCenterLeaderboardSetReleasesGetInstance(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.GameCenterLeaderboardSetReleasesApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsGameCenterLeaderboardSetReleases': ["null"], // [String] | the fields to include for returned resources of type gameCenterLeaderboardSetReleases
  'include': ["null"] // [String] | comma-separated list of relationships to include
};
apiInstance.gameCenterLeaderboardSetReleasesGetInstance(id, opts, (error, data, response) => {
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
 **fieldsGameCenterLeaderboardSetReleases** | [**[String]**](String.md)| the fields to include for returned resources of type gameCenterLeaderboardSetReleases | [optional] 
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 

### Return type

[**GameCenterLeaderboardSetReleaseResponse**](GameCenterLeaderboardSetReleaseResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

