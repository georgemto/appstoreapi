# AppStoreConnectApi.AppTagsApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**appTagsTerritoriesGetToManyRelated**](AppTagsApi.md#appTagsTerritoriesGetToManyRelated) | **GET** /v1/appTags/{id}/territories | 
[**appTagsTerritoriesGetToManyRelationship**](AppTagsApi.md#appTagsTerritoriesGetToManyRelationship) | **GET** /v1/appTags/{id}/relationships/territories | 
[**appTagsUpdateInstance**](AppTagsApi.md#appTagsUpdateInstance) | **PATCH** /v1/appTags/{id} | 



## appTagsTerritoriesGetToManyRelated

> TerritoriesResponse appTagsTerritoriesGetToManyRelated(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AppTagsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsTerritories': ["null"], // [String] | the fields to include for returned resources of type territories
  'limit': 56 // Number | maximum resources per page
};
apiInstance.appTagsTerritoriesGetToManyRelated(id, opts, (error, data, response) => {
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
 **fieldsTerritories** | [**[String]**](String.md)| the fields to include for returned resources of type territories | [optional] 
 **limit** | **Number**| maximum resources per page | [optional] 

### Return type

[**TerritoriesResponse**](TerritoriesResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## appTagsTerritoriesGetToManyRelationship

> AppTagTerritoriesLinkagesResponse appTagsTerritoriesGetToManyRelationship(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AppTagsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'limit': 56 // Number | maximum resources per page
};
apiInstance.appTagsTerritoriesGetToManyRelationship(id, opts, (error, data, response) => {
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

[**AppTagTerritoriesLinkagesResponse**](AppTagTerritoriesLinkagesResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## appTagsUpdateInstance

> AppTagResponse appTagsUpdateInstance(id, appTagUpdateRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AppTagsApi();
let id = "id_example"; // String | the id of the requested resource
let appTagUpdateRequest = new AppStoreConnectApi.AppTagUpdateRequest(); // AppTagUpdateRequest | AppTag representation
apiInstance.appTagsUpdateInstance(id, appTagUpdateRequest, (error, data, response) => {
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
 **appTagUpdateRequest** | [**AppTagUpdateRequest**](AppTagUpdateRequest.md)| AppTag representation | 

### Return type

[**AppTagResponse**](AppTagResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

