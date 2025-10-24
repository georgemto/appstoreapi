# AppStoreConnectApi.AccessibilityDeclarationsApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**accessibilityDeclarationsCreateInstance**](AccessibilityDeclarationsApi.md#accessibilityDeclarationsCreateInstance) | **POST** /v1/accessibilityDeclarations | 
[**accessibilityDeclarationsDeleteInstance**](AccessibilityDeclarationsApi.md#accessibilityDeclarationsDeleteInstance) | **DELETE** /v1/accessibilityDeclarations/{id} | 
[**accessibilityDeclarationsGetInstance**](AccessibilityDeclarationsApi.md#accessibilityDeclarationsGetInstance) | **GET** /v1/accessibilityDeclarations/{id} | 
[**accessibilityDeclarationsUpdateInstance**](AccessibilityDeclarationsApi.md#accessibilityDeclarationsUpdateInstance) | **PATCH** /v1/accessibilityDeclarations/{id} | 



## accessibilityDeclarationsCreateInstance

> AccessibilityDeclarationResponse accessibilityDeclarationsCreateInstance(accessibilityDeclarationCreateRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AccessibilityDeclarationsApi();
let accessibilityDeclarationCreateRequest = new AppStoreConnectApi.AccessibilityDeclarationCreateRequest(); // AccessibilityDeclarationCreateRequest | AccessibilityDeclaration representation
apiInstance.accessibilityDeclarationsCreateInstance(accessibilityDeclarationCreateRequest, (error, data, response) => {
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
 **accessibilityDeclarationCreateRequest** | [**AccessibilityDeclarationCreateRequest**](AccessibilityDeclarationCreateRequest.md)| AccessibilityDeclaration representation | 

### Return type

[**AccessibilityDeclarationResponse**](AccessibilityDeclarationResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## accessibilityDeclarationsDeleteInstance

> accessibilityDeclarationsDeleteInstance(id)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AccessibilityDeclarationsApi();
let id = "id_example"; // String | the id of the requested resource
apiInstance.accessibilityDeclarationsDeleteInstance(id, (error, data, response) => {
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


## accessibilityDeclarationsGetInstance

> AccessibilityDeclarationResponse accessibilityDeclarationsGetInstance(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AccessibilityDeclarationsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsAccessibilityDeclarations': ["null"] // [String] | the fields to include for returned resources of type accessibilityDeclarations
};
apiInstance.accessibilityDeclarationsGetInstance(id, opts, (error, data, response) => {
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
 **fieldsAccessibilityDeclarations** | [**[String]**](String.md)| the fields to include for returned resources of type accessibilityDeclarations | [optional] 

### Return type

[**AccessibilityDeclarationResponse**](AccessibilityDeclarationResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## accessibilityDeclarationsUpdateInstance

> AccessibilityDeclarationResponse accessibilityDeclarationsUpdateInstance(id, accessibilityDeclarationUpdateRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AccessibilityDeclarationsApi();
let id = "id_example"; // String | the id of the requested resource
let accessibilityDeclarationUpdateRequest = new AppStoreConnectApi.AccessibilityDeclarationUpdateRequest(); // AccessibilityDeclarationUpdateRequest | AccessibilityDeclaration representation
apiInstance.accessibilityDeclarationsUpdateInstance(id, accessibilityDeclarationUpdateRequest, (error, data, response) => {
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
 **accessibilityDeclarationUpdateRequest** | [**AccessibilityDeclarationUpdateRequest**](AccessibilityDeclarationUpdateRequest.md)| AccessibilityDeclaration representation | 

### Return type

[**AccessibilityDeclarationResponse**](AccessibilityDeclarationResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

