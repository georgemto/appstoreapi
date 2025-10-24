# AppStoreConnectApi.AlternativeDistributionKeysApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**alternativeDistributionKeysCreateInstance**](AlternativeDistributionKeysApi.md#alternativeDistributionKeysCreateInstance) | **POST** /v1/alternativeDistributionKeys | 
[**alternativeDistributionKeysDeleteInstance**](AlternativeDistributionKeysApi.md#alternativeDistributionKeysDeleteInstance) | **DELETE** /v1/alternativeDistributionKeys/{id} | 
[**alternativeDistributionKeysGetCollection**](AlternativeDistributionKeysApi.md#alternativeDistributionKeysGetCollection) | **GET** /v1/alternativeDistributionKeys | 
[**alternativeDistributionKeysGetInstance**](AlternativeDistributionKeysApi.md#alternativeDistributionKeysGetInstance) | **GET** /v1/alternativeDistributionKeys/{id} | 



## alternativeDistributionKeysCreateInstance

> AlternativeDistributionKeyResponse alternativeDistributionKeysCreateInstance(alternativeDistributionKeyCreateRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AlternativeDistributionKeysApi();
let alternativeDistributionKeyCreateRequest = new AppStoreConnectApi.AlternativeDistributionKeyCreateRequest(); // AlternativeDistributionKeyCreateRequest | AlternativeDistributionKey representation
apiInstance.alternativeDistributionKeysCreateInstance(alternativeDistributionKeyCreateRequest, (error, data, response) => {
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
 **alternativeDistributionKeyCreateRequest** | [**AlternativeDistributionKeyCreateRequest**](AlternativeDistributionKeyCreateRequest.md)| AlternativeDistributionKey representation | 

### Return type

[**AlternativeDistributionKeyResponse**](AlternativeDistributionKeyResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## alternativeDistributionKeysDeleteInstance

> alternativeDistributionKeysDeleteInstance(id)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AlternativeDistributionKeysApi();
let id = "id_example"; // String | the id of the requested resource
apiInstance.alternativeDistributionKeysDeleteInstance(id, (error, data, response) => {
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


## alternativeDistributionKeysGetCollection

> AlternativeDistributionKeysResponse alternativeDistributionKeysGetCollection(opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AlternativeDistributionKeysApi();
let opts = {
  'existsApp': true, // Boolean | filter by existence or non-existence of related 'app'
  'fieldsAlternativeDistributionKeys': ["null"], // [String] | the fields to include for returned resources of type alternativeDistributionKeys
  'limit': 56 // Number | maximum resources per page
};
apiInstance.alternativeDistributionKeysGetCollection(opts, (error, data, response) => {
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
 **existsApp** | **Boolean**| filter by existence or non-existence of related &#39;app&#39; | [optional] 
 **fieldsAlternativeDistributionKeys** | [**[String]**](String.md)| the fields to include for returned resources of type alternativeDistributionKeys | [optional] 
 **limit** | **Number**| maximum resources per page | [optional] 

### Return type

[**AlternativeDistributionKeysResponse**](AlternativeDistributionKeysResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## alternativeDistributionKeysGetInstance

> AlternativeDistributionKeyResponse alternativeDistributionKeysGetInstance(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AlternativeDistributionKeysApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsAlternativeDistributionKeys': ["null"] // [String] | the fields to include for returned resources of type alternativeDistributionKeys
};
apiInstance.alternativeDistributionKeysGetInstance(id, opts, (error, data, response) => {
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
 **fieldsAlternativeDistributionKeys** | [**[String]**](String.md)| the fields to include for returned resources of type alternativeDistributionKeys | [optional] 

### Return type

[**AlternativeDistributionKeyResponse**](AlternativeDistributionKeyResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

