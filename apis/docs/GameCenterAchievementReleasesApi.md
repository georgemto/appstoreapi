# AppStoreConnectApi.GameCenterAchievementReleasesApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**gameCenterAchievementReleasesCreateInstance**](GameCenterAchievementReleasesApi.md#gameCenterAchievementReleasesCreateInstance) | **POST** /v1/gameCenterAchievementReleases | 
[**gameCenterAchievementReleasesDeleteInstance**](GameCenterAchievementReleasesApi.md#gameCenterAchievementReleasesDeleteInstance) | **DELETE** /v1/gameCenterAchievementReleases/{id} | 
[**gameCenterAchievementReleasesGetInstance**](GameCenterAchievementReleasesApi.md#gameCenterAchievementReleasesGetInstance) | **GET** /v1/gameCenterAchievementReleases/{id} | 



## gameCenterAchievementReleasesCreateInstance

> GameCenterAchievementReleaseResponse gameCenterAchievementReleasesCreateInstance(gameCenterAchievementReleaseCreateRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.GameCenterAchievementReleasesApi();
let gameCenterAchievementReleaseCreateRequest = new AppStoreConnectApi.GameCenterAchievementReleaseCreateRequest(); // GameCenterAchievementReleaseCreateRequest | GameCenterAchievementRelease representation
apiInstance.gameCenterAchievementReleasesCreateInstance(gameCenterAchievementReleaseCreateRequest, (error, data, response) => {
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
 **gameCenterAchievementReleaseCreateRequest** | [**GameCenterAchievementReleaseCreateRequest**](GameCenterAchievementReleaseCreateRequest.md)| GameCenterAchievementRelease representation | 

### Return type

[**GameCenterAchievementReleaseResponse**](GameCenterAchievementReleaseResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## gameCenterAchievementReleasesDeleteInstance

> gameCenterAchievementReleasesDeleteInstance(id)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.GameCenterAchievementReleasesApi();
let id = "id_example"; // String | the id of the requested resource
apiInstance.gameCenterAchievementReleasesDeleteInstance(id, (error, data, response) => {
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


## gameCenterAchievementReleasesGetInstance

> GameCenterAchievementReleaseResponse gameCenterAchievementReleasesGetInstance(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.GameCenterAchievementReleasesApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsGameCenterAchievementReleases': ["null"], // [String] | the fields to include for returned resources of type gameCenterAchievementReleases
  'include': ["null"] // [String] | comma-separated list of relationships to include
};
apiInstance.gameCenterAchievementReleasesGetInstance(id, opts, (error, data, response) => {
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
 **fieldsGameCenterAchievementReleases** | [**[String]**](String.md)| the fields to include for returned resources of type gameCenterAchievementReleases | [optional] 
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 

### Return type

[**GameCenterAchievementReleaseResponse**](GameCenterAchievementReleaseResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

