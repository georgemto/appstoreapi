# AppStoreConnectApi.GameCenterActivityImagesApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**gameCenterActivityImagesCreateInstance**](GameCenterActivityImagesApi.md#gameCenterActivityImagesCreateInstance) | **POST** /v1/gameCenterActivityImages | 
[**gameCenterActivityImagesDeleteInstance**](GameCenterActivityImagesApi.md#gameCenterActivityImagesDeleteInstance) | **DELETE** /v1/gameCenterActivityImages/{id} | 
[**gameCenterActivityImagesGetInstance**](GameCenterActivityImagesApi.md#gameCenterActivityImagesGetInstance) | **GET** /v1/gameCenterActivityImages/{id} | 
[**gameCenterActivityImagesUpdateInstance**](GameCenterActivityImagesApi.md#gameCenterActivityImagesUpdateInstance) | **PATCH** /v1/gameCenterActivityImages/{id} | 



## gameCenterActivityImagesCreateInstance

> GameCenterActivityImageResponse gameCenterActivityImagesCreateInstance(gameCenterActivityImageCreateRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.GameCenterActivityImagesApi();
let gameCenterActivityImageCreateRequest = new AppStoreConnectApi.GameCenterActivityImageCreateRequest(); // GameCenterActivityImageCreateRequest | GameCenterActivityImage representation
apiInstance.gameCenterActivityImagesCreateInstance(gameCenterActivityImageCreateRequest, (error, data, response) => {
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
 **gameCenterActivityImageCreateRequest** | [**GameCenterActivityImageCreateRequest**](GameCenterActivityImageCreateRequest.md)| GameCenterActivityImage representation | 

### Return type

[**GameCenterActivityImageResponse**](GameCenterActivityImageResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## gameCenterActivityImagesDeleteInstance

> gameCenterActivityImagesDeleteInstance(id)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.GameCenterActivityImagesApi();
let id = "id_example"; // String | the id of the requested resource
apiInstance.gameCenterActivityImagesDeleteInstance(id, (error, data, response) => {
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


## gameCenterActivityImagesGetInstance

> GameCenterActivityImageResponse gameCenterActivityImagesGetInstance(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.GameCenterActivityImagesApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsGameCenterActivityImages': ["null"] // [String] | the fields to include for returned resources of type gameCenterActivityImages
};
apiInstance.gameCenterActivityImagesGetInstance(id, opts, (error, data, response) => {
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
 **fieldsGameCenterActivityImages** | [**[String]**](String.md)| the fields to include for returned resources of type gameCenterActivityImages | [optional] 

### Return type

[**GameCenterActivityImageResponse**](GameCenterActivityImageResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## gameCenterActivityImagesUpdateInstance

> GameCenterActivityImageResponse gameCenterActivityImagesUpdateInstance(id, gameCenterActivityImageUpdateRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.GameCenterActivityImagesApi();
let id = "id_example"; // String | the id of the requested resource
let gameCenterActivityImageUpdateRequest = new AppStoreConnectApi.GameCenterActivityImageUpdateRequest(); // GameCenterActivityImageUpdateRequest | GameCenterActivityImage representation
apiInstance.gameCenterActivityImagesUpdateInstance(id, gameCenterActivityImageUpdateRequest, (error, data, response) => {
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
 **gameCenterActivityImageUpdateRequest** | [**GameCenterActivityImageUpdateRequest**](GameCenterActivityImageUpdateRequest.md)| GameCenterActivityImage representation | 

### Return type

[**GameCenterActivityImageResponse**](GameCenterActivityImageResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

