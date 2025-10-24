# AppStoreConnectApi.GameCenterActivityLocalizationsApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**gameCenterActivityLocalizationsCreateInstance**](GameCenterActivityLocalizationsApi.md#gameCenterActivityLocalizationsCreateInstance) | **POST** /v1/gameCenterActivityLocalizations | 
[**gameCenterActivityLocalizationsDeleteInstance**](GameCenterActivityLocalizationsApi.md#gameCenterActivityLocalizationsDeleteInstance) | **DELETE** /v1/gameCenterActivityLocalizations/{id} | 
[**gameCenterActivityLocalizationsGetInstance**](GameCenterActivityLocalizationsApi.md#gameCenterActivityLocalizationsGetInstance) | **GET** /v1/gameCenterActivityLocalizations/{id} | 
[**gameCenterActivityLocalizationsImageGetToOneRelated**](GameCenterActivityLocalizationsApi.md#gameCenterActivityLocalizationsImageGetToOneRelated) | **GET** /v1/gameCenterActivityLocalizations/{id}/image | 
[**gameCenterActivityLocalizationsImageGetToOneRelationship**](GameCenterActivityLocalizationsApi.md#gameCenterActivityLocalizationsImageGetToOneRelationship) | **GET** /v1/gameCenterActivityLocalizations/{id}/relationships/image | 
[**gameCenterActivityLocalizationsUpdateInstance**](GameCenterActivityLocalizationsApi.md#gameCenterActivityLocalizationsUpdateInstance) | **PATCH** /v1/gameCenterActivityLocalizations/{id} | 



## gameCenterActivityLocalizationsCreateInstance

> GameCenterActivityLocalizationResponse gameCenterActivityLocalizationsCreateInstance(gameCenterActivityLocalizationCreateRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.GameCenterActivityLocalizationsApi();
let gameCenterActivityLocalizationCreateRequest = new AppStoreConnectApi.GameCenterActivityLocalizationCreateRequest(); // GameCenterActivityLocalizationCreateRequest | GameCenterActivityLocalization representation
apiInstance.gameCenterActivityLocalizationsCreateInstance(gameCenterActivityLocalizationCreateRequest, (error, data, response) => {
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
 **gameCenterActivityLocalizationCreateRequest** | [**GameCenterActivityLocalizationCreateRequest**](GameCenterActivityLocalizationCreateRequest.md)| GameCenterActivityLocalization representation | 

### Return type

[**GameCenterActivityLocalizationResponse**](GameCenterActivityLocalizationResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## gameCenterActivityLocalizationsDeleteInstance

> gameCenterActivityLocalizationsDeleteInstance(id)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.GameCenterActivityLocalizationsApi();
let id = "id_example"; // String | the id of the requested resource
apiInstance.gameCenterActivityLocalizationsDeleteInstance(id, (error, data, response) => {
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


## gameCenterActivityLocalizationsGetInstance

> GameCenterActivityLocalizationResponse gameCenterActivityLocalizationsGetInstance(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.GameCenterActivityLocalizationsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsGameCenterActivityLocalizations': ["null"], // [String] | the fields to include for returned resources of type gameCenterActivityLocalizations
  'fieldsGameCenterActivityImages': ["null"], // [String] | the fields to include for returned resources of type gameCenterActivityImages
  'include': ["null"] // [String] | comma-separated list of relationships to include
};
apiInstance.gameCenterActivityLocalizationsGetInstance(id, opts, (error, data, response) => {
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
 **fieldsGameCenterActivityLocalizations** | [**[String]**](String.md)| the fields to include for returned resources of type gameCenterActivityLocalizations | [optional] 
 **fieldsGameCenterActivityImages** | [**[String]**](String.md)| the fields to include for returned resources of type gameCenterActivityImages | [optional] 
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 

### Return type

[**GameCenterActivityLocalizationResponse**](GameCenterActivityLocalizationResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## gameCenterActivityLocalizationsImageGetToOneRelated

> GameCenterActivityImageResponse gameCenterActivityLocalizationsImageGetToOneRelated(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.GameCenterActivityLocalizationsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsGameCenterActivityImages': ["null"] // [String] | the fields to include for returned resources of type gameCenterActivityImages
};
apiInstance.gameCenterActivityLocalizationsImageGetToOneRelated(id, opts, (error, data, response) => {
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


## gameCenterActivityLocalizationsImageGetToOneRelationship

> GameCenterActivityLocalizationImageLinkageResponse gameCenterActivityLocalizationsImageGetToOneRelationship(id)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.GameCenterActivityLocalizationsApi();
let id = "id_example"; // String | the id of the requested resource
apiInstance.gameCenterActivityLocalizationsImageGetToOneRelationship(id, (error, data, response) => {
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

### Return type

[**GameCenterActivityLocalizationImageLinkageResponse**](GameCenterActivityLocalizationImageLinkageResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## gameCenterActivityLocalizationsUpdateInstance

> GameCenterActivityLocalizationResponse gameCenterActivityLocalizationsUpdateInstance(id, gameCenterActivityLocalizationUpdateRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.GameCenterActivityLocalizationsApi();
let id = "id_example"; // String | the id of the requested resource
let gameCenterActivityLocalizationUpdateRequest = new AppStoreConnectApi.GameCenterActivityLocalizationUpdateRequest(); // GameCenterActivityLocalizationUpdateRequest | GameCenterActivityLocalization representation
apiInstance.gameCenterActivityLocalizationsUpdateInstance(id, gameCenterActivityLocalizationUpdateRequest, (error, data, response) => {
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
 **gameCenterActivityLocalizationUpdateRequest** | [**GameCenterActivityLocalizationUpdateRequest**](GameCenterActivityLocalizationUpdateRequest.md)| GameCenterActivityLocalization representation | 

### Return type

[**GameCenterActivityLocalizationResponse**](GameCenterActivityLocalizationResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

