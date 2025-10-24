# AppStoreConnectApi.AppEncryptionDeclarationDocumentsApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**appEncryptionDeclarationDocumentsCreateInstance**](AppEncryptionDeclarationDocumentsApi.md#appEncryptionDeclarationDocumentsCreateInstance) | **POST** /v1/appEncryptionDeclarationDocuments | 
[**appEncryptionDeclarationDocumentsGetInstance**](AppEncryptionDeclarationDocumentsApi.md#appEncryptionDeclarationDocumentsGetInstance) | **GET** /v1/appEncryptionDeclarationDocuments/{id} | 
[**appEncryptionDeclarationDocumentsUpdateInstance**](AppEncryptionDeclarationDocumentsApi.md#appEncryptionDeclarationDocumentsUpdateInstance) | **PATCH** /v1/appEncryptionDeclarationDocuments/{id} | 



## appEncryptionDeclarationDocumentsCreateInstance

> AppEncryptionDeclarationDocumentResponse appEncryptionDeclarationDocumentsCreateInstance(appEncryptionDeclarationDocumentCreateRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AppEncryptionDeclarationDocumentsApi();
let appEncryptionDeclarationDocumentCreateRequest = new AppStoreConnectApi.AppEncryptionDeclarationDocumentCreateRequest(); // AppEncryptionDeclarationDocumentCreateRequest | AppEncryptionDeclarationDocument representation
apiInstance.appEncryptionDeclarationDocumentsCreateInstance(appEncryptionDeclarationDocumentCreateRequest, (error, data, response) => {
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
 **appEncryptionDeclarationDocumentCreateRequest** | [**AppEncryptionDeclarationDocumentCreateRequest**](AppEncryptionDeclarationDocumentCreateRequest.md)| AppEncryptionDeclarationDocument representation | 

### Return type

[**AppEncryptionDeclarationDocumentResponse**](AppEncryptionDeclarationDocumentResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## appEncryptionDeclarationDocumentsGetInstance

> AppEncryptionDeclarationDocumentResponse appEncryptionDeclarationDocumentsGetInstance(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AppEncryptionDeclarationDocumentsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsAppEncryptionDeclarationDocuments': ["null"] // [String] | the fields to include for returned resources of type appEncryptionDeclarationDocuments
};
apiInstance.appEncryptionDeclarationDocumentsGetInstance(id, opts, (error, data, response) => {
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
 **fieldsAppEncryptionDeclarationDocuments** | [**[String]**](String.md)| the fields to include for returned resources of type appEncryptionDeclarationDocuments | [optional] 

### Return type

[**AppEncryptionDeclarationDocumentResponse**](AppEncryptionDeclarationDocumentResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## appEncryptionDeclarationDocumentsUpdateInstance

> AppEncryptionDeclarationDocumentResponse appEncryptionDeclarationDocumentsUpdateInstance(id, appEncryptionDeclarationDocumentUpdateRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AppEncryptionDeclarationDocumentsApi();
let id = "id_example"; // String | the id of the requested resource
let appEncryptionDeclarationDocumentUpdateRequest = new AppStoreConnectApi.AppEncryptionDeclarationDocumentUpdateRequest(); // AppEncryptionDeclarationDocumentUpdateRequest | AppEncryptionDeclarationDocument representation
apiInstance.appEncryptionDeclarationDocumentsUpdateInstance(id, appEncryptionDeclarationDocumentUpdateRequest, (error, data, response) => {
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
 **appEncryptionDeclarationDocumentUpdateRequest** | [**AppEncryptionDeclarationDocumentUpdateRequest**](AppEncryptionDeclarationDocumentUpdateRequest.md)| AppEncryptionDeclarationDocument representation | 

### Return type

[**AppEncryptionDeclarationDocumentResponse**](AppEncryptionDeclarationDocumentResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

