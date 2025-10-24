# AppStoreConnectApi.GameCenterActivityVersionsApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**gameCenterActivityVersionsCreateInstance**](GameCenterActivityVersionsApi.md#gameCenterActivityVersionsCreateInstance) | **POST** /v1/gameCenterActivityVersions | 
[**gameCenterActivityVersionsDefaultImageGetToOneRelated**](GameCenterActivityVersionsApi.md#gameCenterActivityVersionsDefaultImageGetToOneRelated) | **GET** /v1/gameCenterActivityVersions/{id}/defaultImage | 
[**gameCenterActivityVersionsDefaultImageGetToOneRelationship**](GameCenterActivityVersionsApi.md#gameCenterActivityVersionsDefaultImageGetToOneRelationship) | **GET** /v1/gameCenterActivityVersions/{id}/relationships/defaultImage | 
[**gameCenterActivityVersionsGetInstance**](GameCenterActivityVersionsApi.md#gameCenterActivityVersionsGetInstance) | **GET** /v1/gameCenterActivityVersions/{id} | 
[**gameCenterActivityVersionsLocalizationsGetToManyRelated**](GameCenterActivityVersionsApi.md#gameCenterActivityVersionsLocalizationsGetToManyRelated) | **GET** /v1/gameCenterActivityVersions/{id}/localizations | 
[**gameCenterActivityVersionsLocalizationsGetToManyRelationship**](GameCenterActivityVersionsApi.md#gameCenterActivityVersionsLocalizationsGetToManyRelationship) | **GET** /v1/gameCenterActivityVersions/{id}/relationships/localizations | 
[**gameCenterActivityVersionsUpdateInstance**](GameCenterActivityVersionsApi.md#gameCenterActivityVersionsUpdateInstance) | **PATCH** /v1/gameCenterActivityVersions/{id} | 



## gameCenterActivityVersionsCreateInstance

> GameCenterActivityVersionResponse gameCenterActivityVersionsCreateInstance(gameCenterActivityVersionCreateRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.GameCenterActivityVersionsApi();
let gameCenterActivityVersionCreateRequest = new AppStoreConnectApi.GameCenterActivityVersionCreateRequest(); // GameCenterActivityVersionCreateRequest | GameCenterActivityVersion representation
apiInstance.gameCenterActivityVersionsCreateInstance(gameCenterActivityVersionCreateRequest, (error, data, response) => {
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
 **gameCenterActivityVersionCreateRequest** | [**GameCenterActivityVersionCreateRequest**](GameCenterActivityVersionCreateRequest.md)| GameCenterActivityVersion representation | 

### Return type

[**GameCenterActivityVersionResponse**](GameCenterActivityVersionResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## gameCenterActivityVersionsDefaultImageGetToOneRelated

> GameCenterActivityImageResponse gameCenterActivityVersionsDefaultImageGetToOneRelated(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.GameCenterActivityVersionsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsGameCenterActivityImages': ["null"] // [String] | the fields to include for returned resources of type gameCenterActivityImages
};
apiInstance.gameCenterActivityVersionsDefaultImageGetToOneRelated(id, opts, (error, data, response) => {
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


## gameCenterActivityVersionsDefaultImageGetToOneRelationship

> GameCenterActivityVersionDefaultImageLinkageResponse gameCenterActivityVersionsDefaultImageGetToOneRelationship(id)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.GameCenterActivityVersionsApi();
let id = "id_example"; // String | the id of the requested resource
apiInstance.gameCenterActivityVersionsDefaultImageGetToOneRelationship(id, (error, data, response) => {
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

[**GameCenterActivityVersionDefaultImageLinkageResponse**](GameCenterActivityVersionDefaultImageLinkageResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## gameCenterActivityVersionsGetInstance

> GameCenterActivityVersionResponse gameCenterActivityVersionsGetInstance(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.GameCenterActivityVersionsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsGameCenterActivityVersions': ["null"], // [String] | the fields to include for returned resources of type gameCenterActivityVersions
  'fieldsGameCenterActivityLocalizations': ["null"], // [String] | the fields to include for returned resources of type gameCenterActivityLocalizations
  'fieldsGameCenterActivityImages': ["null"], // [String] | the fields to include for returned resources of type gameCenterActivityImages
  'include': ["null"], // [String] | comma-separated list of relationships to include
  'limitLocalizations': 56, // Number | maximum number of related localizations returned (when they are included)
  'limitReleases': 56 // Number | maximum number of related releases returned (when they are included)
};
apiInstance.gameCenterActivityVersionsGetInstance(id, opts, (error, data, response) => {
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
 **fieldsGameCenterActivityVersions** | [**[String]**](String.md)| the fields to include for returned resources of type gameCenterActivityVersions | [optional] 
 **fieldsGameCenterActivityLocalizations** | [**[String]**](String.md)| the fields to include for returned resources of type gameCenterActivityLocalizations | [optional] 
 **fieldsGameCenterActivityImages** | [**[String]**](String.md)| the fields to include for returned resources of type gameCenterActivityImages | [optional] 
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 
 **limitLocalizations** | **Number**| maximum number of related localizations returned (when they are included) | [optional] 
 **limitReleases** | **Number**| maximum number of related releases returned (when they are included) | [optional] 

### Return type

[**GameCenterActivityVersionResponse**](GameCenterActivityVersionResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## gameCenterActivityVersionsLocalizationsGetToManyRelated

> GameCenterActivityLocalizationsResponse gameCenterActivityVersionsLocalizationsGetToManyRelated(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.GameCenterActivityVersionsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsGameCenterActivityLocalizations': ["null"], // [String] | the fields to include for returned resources of type gameCenterActivityLocalizations
  'fieldsGameCenterActivityVersions': ["null"], // [String] | the fields to include for returned resources of type gameCenterActivityVersions
  'fieldsGameCenterActivityImages': ["null"], // [String] | the fields to include for returned resources of type gameCenterActivityImages
  'limit': 56, // Number | maximum resources per page
  'include': ["null"] // [String] | comma-separated list of relationships to include
};
apiInstance.gameCenterActivityVersionsLocalizationsGetToManyRelated(id, opts, (error, data, response) => {
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
 **fieldsGameCenterActivityVersions** | [**[String]**](String.md)| the fields to include for returned resources of type gameCenterActivityVersions | [optional] 
 **fieldsGameCenterActivityImages** | [**[String]**](String.md)| the fields to include for returned resources of type gameCenterActivityImages | [optional] 
 **limit** | **Number**| maximum resources per page | [optional] 
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 

### Return type

[**GameCenterActivityLocalizationsResponse**](GameCenterActivityLocalizationsResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## gameCenterActivityVersionsLocalizationsGetToManyRelationship

> GameCenterActivityVersionLocalizationsLinkagesResponse gameCenterActivityVersionsLocalizationsGetToManyRelationship(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.GameCenterActivityVersionsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'limit': 56 // Number | maximum resources per page
};
apiInstance.gameCenterActivityVersionsLocalizationsGetToManyRelationship(id, opts, (error, data, response) => {
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
 **limit** | **Number**| maximum resources per page | [optional] 

### Return type

[**GameCenterActivityVersionLocalizationsLinkagesResponse**](GameCenterActivityVersionLocalizationsLinkagesResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## gameCenterActivityVersionsUpdateInstance

> GameCenterActivityVersionResponse gameCenterActivityVersionsUpdateInstance(id, gameCenterActivityVersionUpdateRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.GameCenterActivityVersionsApi();
let id = "id_example"; // String | the id of the requested resource
let gameCenterActivityVersionUpdateRequest = new AppStoreConnectApi.GameCenterActivityVersionUpdateRequest(); // GameCenterActivityVersionUpdateRequest | GameCenterActivityVersion representation
apiInstance.gameCenterActivityVersionsUpdateInstance(id, gameCenterActivityVersionUpdateRequest, (error, data, response) => {
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
 **gameCenterActivityVersionUpdateRequest** | [**GameCenterActivityVersionUpdateRequest**](GameCenterActivityVersionUpdateRequest.md)| GameCenterActivityVersion representation | 

### Return type

[**GameCenterActivityVersionResponse**](GameCenterActivityVersionResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

