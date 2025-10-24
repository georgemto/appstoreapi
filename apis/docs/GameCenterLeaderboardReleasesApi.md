# AppStoreConnectApi.GameCenterLeaderboardReleasesApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**gameCenterLeaderboardReleasesCreateInstance**](GameCenterLeaderboardReleasesApi.md#gameCenterLeaderboardReleasesCreateInstance) | **POST** /v1/gameCenterLeaderboardReleases | 
[**gameCenterLeaderboardReleasesDeleteInstance**](GameCenterLeaderboardReleasesApi.md#gameCenterLeaderboardReleasesDeleteInstance) | **DELETE** /v1/gameCenterLeaderboardReleases/{id} | 
[**gameCenterLeaderboardReleasesGetInstance**](GameCenterLeaderboardReleasesApi.md#gameCenterLeaderboardReleasesGetInstance) | **GET** /v1/gameCenterLeaderboardReleases/{id} | 



## gameCenterLeaderboardReleasesCreateInstance

> GameCenterLeaderboardReleaseResponse gameCenterLeaderboardReleasesCreateInstance(gameCenterLeaderboardReleaseCreateRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.GameCenterLeaderboardReleasesApi();
let gameCenterLeaderboardReleaseCreateRequest = new AppStoreConnectApi.GameCenterLeaderboardReleaseCreateRequest(); // GameCenterLeaderboardReleaseCreateRequest | GameCenterLeaderboardRelease representation
apiInstance.gameCenterLeaderboardReleasesCreateInstance(gameCenterLeaderboardReleaseCreateRequest, (error, data, response) => {
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
 **gameCenterLeaderboardReleaseCreateRequest** | [**GameCenterLeaderboardReleaseCreateRequest**](GameCenterLeaderboardReleaseCreateRequest.md)| GameCenterLeaderboardRelease representation | 

### Return type

[**GameCenterLeaderboardReleaseResponse**](GameCenterLeaderboardReleaseResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## gameCenterLeaderboardReleasesDeleteInstance

> gameCenterLeaderboardReleasesDeleteInstance(id)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.GameCenterLeaderboardReleasesApi();
let id = "id_example"; // String | the id of the requested resource
apiInstance.gameCenterLeaderboardReleasesDeleteInstance(id, (error, data, response) => {
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


## gameCenterLeaderboardReleasesGetInstance

> GameCenterLeaderboardReleaseResponse gameCenterLeaderboardReleasesGetInstance(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.GameCenterLeaderboardReleasesApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsGameCenterLeaderboardReleases': ["null"], // [String] | the fields to include for returned resources of type gameCenterLeaderboardReleases
  'include': ["null"] // [String] | comma-separated list of relationships to include
};
apiInstance.gameCenterLeaderboardReleasesGetInstance(id, opts, (error, data, response) => {
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
 **fieldsGameCenterLeaderboardReleases** | [**[String]**](String.md)| the fields to include for returned resources of type gameCenterLeaderboardReleases | [optional] 
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 

### Return type

[**GameCenterLeaderboardReleaseResponse**](GameCenterLeaderboardReleaseResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

