# AppStoreConnectApi.GameCenterLeaderboardSetImagesApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**gameCenterLeaderboardSetImagesCreateInstance**](GameCenterLeaderboardSetImagesApi.md#gameCenterLeaderboardSetImagesCreateInstance) | **POST** /v1/gameCenterLeaderboardSetImages | 
[**gameCenterLeaderboardSetImagesDeleteInstance**](GameCenterLeaderboardSetImagesApi.md#gameCenterLeaderboardSetImagesDeleteInstance) | **DELETE** /v1/gameCenterLeaderboardSetImages/{id} | 
[**gameCenterLeaderboardSetImagesGetInstance**](GameCenterLeaderboardSetImagesApi.md#gameCenterLeaderboardSetImagesGetInstance) | **GET** /v1/gameCenterLeaderboardSetImages/{id} | 
[**gameCenterLeaderboardSetImagesUpdateInstance**](GameCenterLeaderboardSetImagesApi.md#gameCenterLeaderboardSetImagesUpdateInstance) | **PATCH** /v1/gameCenterLeaderboardSetImages/{id} | 



## gameCenterLeaderboardSetImagesCreateInstance

> GameCenterLeaderboardSetImageResponse gameCenterLeaderboardSetImagesCreateInstance(gameCenterLeaderboardSetImageCreateRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.GameCenterLeaderboardSetImagesApi();
let gameCenterLeaderboardSetImageCreateRequest = new AppStoreConnectApi.GameCenterLeaderboardSetImageCreateRequest(); // GameCenterLeaderboardSetImageCreateRequest | GameCenterLeaderboardSetImage representation
apiInstance.gameCenterLeaderboardSetImagesCreateInstance(gameCenterLeaderboardSetImageCreateRequest, (error, data, response) => {
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
 **gameCenterLeaderboardSetImageCreateRequest** | [**GameCenterLeaderboardSetImageCreateRequest**](GameCenterLeaderboardSetImageCreateRequest.md)| GameCenterLeaderboardSetImage representation | 

### Return type

[**GameCenterLeaderboardSetImageResponse**](GameCenterLeaderboardSetImageResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## gameCenterLeaderboardSetImagesDeleteInstance

> gameCenterLeaderboardSetImagesDeleteInstance(id)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.GameCenterLeaderboardSetImagesApi();
let id = "id_example"; // String | the id of the requested resource
apiInstance.gameCenterLeaderboardSetImagesDeleteInstance(id, (error, data, response) => {
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


## gameCenterLeaderboardSetImagesGetInstance

> GameCenterLeaderboardSetImageResponse gameCenterLeaderboardSetImagesGetInstance(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.GameCenterLeaderboardSetImagesApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsGameCenterLeaderboardSetImages': ["null"], // [String] | the fields to include for returned resources of type gameCenterLeaderboardSetImages
  'include': ["null"] // [String] | comma-separated list of relationships to include
};
apiInstance.gameCenterLeaderboardSetImagesGetInstance(id, opts, (error, data, response) => {
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
 **fieldsGameCenterLeaderboardSetImages** | [**[String]**](String.md)| the fields to include for returned resources of type gameCenterLeaderboardSetImages | [optional] 
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 

### Return type

[**GameCenterLeaderboardSetImageResponse**](GameCenterLeaderboardSetImageResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## gameCenterLeaderboardSetImagesUpdateInstance

> GameCenterLeaderboardSetImageResponse gameCenterLeaderboardSetImagesUpdateInstance(id, gameCenterLeaderboardSetImageUpdateRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.GameCenterLeaderboardSetImagesApi();
let id = "id_example"; // String | the id of the requested resource
let gameCenterLeaderboardSetImageUpdateRequest = new AppStoreConnectApi.GameCenterLeaderboardSetImageUpdateRequest(); // GameCenterLeaderboardSetImageUpdateRequest | GameCenterLeaderboardSetImage representation
apiInstance.gameCenterLeaderboardSetImagesUpdateInstance(id, gameCenterLeaderboardSetImageUpdateRequest, (error, data, response) => {
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
 **gameCenterLeaderboardSetImageUpdateRequest** | [**GameCenterLeaderboardSetImageUpdateRequest**](GameCenterLeaderboardSetImageUpdateRequest.md)| GameCenterLeaderboardSetImage representation | 

### Return type

[**GameCenterLeaderboardSetImageResponse**](GameCenterLeaderboardSetImageResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

