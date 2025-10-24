# AppStoreConnectApi.GameCenterLeaderboardImagesApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**gameCenterLeaderboardImagesCreateInstance**](GameCenterLeaderboardImagesApi.md#gameCenterLeaderboardImagesCreateInstance) | **POST** /v1/gameCenterLeaderboardImages | 
[**gameCenterLeaderboardImagesDeleteInstance**](GameCenterLeaderboardImagesApi.md#gameCenterLeaderboardImagesDeleteInstance) | **DELETE** /v1/gameCenterLeaderboardImages/{id} | 
[**gameCenterLeaderboardImagesGetInstance**](GameCenterLeaderboardImagesApi.md#gameCenterLeaderboardImagesGetInstance) | **GET** /v1/gameCenterLeaderboardImages/{id} | 
[**gameCenterLeaderboardImagesUpdateInstance**](GameCenterLeaderboardImagesApi.md#gameCenterLeaderboardImagesUpdateInstance) | **PATCH** /v1/gameCenterLeaderboardImages/{id} | 



## gameCenterLeaderboardImagesCreateInstance

> GameCenterLeaderboardImageResponse gameCenterLeaderboardImagesCreateInstance(gameCenterLeaderboardImageCreateRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.GameCenterLeaderboardImagesApi();
let gameCenterLeaderboardImageCreateRequest = new AppStoreConnectApi.GameCenterLeaderboardImageCreateRequest(); // GameCenterLeaderboardImageCreateRequest | GameCenterLeaderboardImage representation
apiInstance.gameCenterLeaderboardImagesCreateInstance(gameCenterLeaderboardImageCreateRequest, (error, data, response) => {
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
 **gameCenterLeaderboardImageCreateRequest** | [**GameCenterLeaderboardImageCreateRequest**](GameCenterLeaderboardImageCreateRequest.md)| GameCenterLeaderboardImage representation | 

### Return type

[**GameCenterLeaderboardImageResponse**](GameCenterLeaderboardImageResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## gameCenterLeaderboardImagesDeleteInstance

> gameCenterLeaderboardImagesDeleteInstance(id)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.GameCenterLeaderboardImagesApi();
let id = "id_example"; // String | the id of the requested resource
apiInstance.gameCenterLeaderboardImagesDeleteInstance(id, (error, data, response) => {
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


## gameCenterLeaderboardImagesGetInstance

> GameCenterLeaderboardImageResponse gameCenterLeaderboardImagesGetInstance(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.GameCenterLeaderboardImagesApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsGameCenterLeaderboardImages': ["null"], // [String] | the fields to include for returned resources of type gameCenterLeaderboardImages
  'include': ["null"] // [String] | comma-separated list of relationships to include
};
apiInstance.gameCenterLeaderboardImagesGetInstance(id, opts, (error, data, response) => {
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
 **fieldsGameCenterLeaderboardImages** | [**[String]**](String.md)| the fields to include for returned resources of type gameCenterLeaderboardImages | [optional] 
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 

### Return type

[**GameCenterLeaderboardImageResponse**](GameCenterLeaderboardImageResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## gameCenterLeaderboardImagesUpdateInstance

> GameCenterLeaderboardImageResponse gameCenterLeaderboardImagesUpdateInstance(id, gameCenterLeaderboardImageUpdateRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.GameCenterLeaderboardImagesApi();
let id = "id_example"; // String | the id of the requested resource
let gameCenterLeaderboardImageUpdateRequest = new AppStoreConnectApi.GameCenterLeaderboardImageUpdateRequest(); // GameCenterLeaderboardImageUpdateRequest | GameCenterLeaderboardImage representation
apiInstance.gameCenterLeaderboardImagesUpdateInstance(id, gameCenterLeaderboardImageUpdateRequest, (error, data, response) => {
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
 **gameCenterLeaderboardImageUpdateRequest** | [**GameCenterLeaderboardImageUpdateRequest**](GameCenterLeaderboardImageUpdateRequest.md)| GameCenterLeaderboardImage representation | 

### Return type

[**GameCenterLeaderboardImageResponse**](GameCenterLeaderboardImageResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

