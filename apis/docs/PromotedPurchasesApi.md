# AppStoreConnectApi.PromotedPurchasesApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**promotedPurchasesCreateInstance**](PromotedPurchasesApi.md#promotedPurchasesCreateInstance) | **POST** /v1/promotedPurchases | 
[**promotedPurchasesDeleteInstance**](PromotedPurchasesApi.md#promotedPurchasesDeleteInstance) | **DELETE** /v1/promotedPurchases/{id} | 
[**promotedPurchasesGetInstance**](PromotedPurchasesApi.md#promotedPurchasesGetInstance) | **GET** /v1/promotedPurchases/{id} | 
[**promotedPurchasesUpdateInstance**](PromotedPurchasesApi.md#promotedPurchasesUpdateInstance) | **PATCH** /v1/promotedPurchases/{id} | 



## promotedPurchasesCreateInstance

> PromotedPurchaseResponse promotedPurchasesCreateInstance(promotedPurchaseCreateRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.PromotedPurchasesApi();
let promotedPurchaseCreateRequest = new AppStoreConnectApi.PromotedPurchaseCreateRequest(); // PromotedPurchaseCreateRequest | PromotedPurchase representation
apiInstance.promotedPurchasesCreateInstance(promotedPurchaseCreateRequest, (error, data, response) => {
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
 **promotedPurchaseCreateRequest** | [**PromotedPurchaseCreateRequest**](PromotedPurchaseCreateRequest.md)| PromotedPurchase representation | 

### Return type

[**PromotedPurchaseResponse**](PromotedPurchaseResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## promotedPurchasesDeleteInstance

> promotedPurchasesDeleteInstance(id)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.PromotedPurchasesApi();
let id = "id_example"; // String | the id of the requested resource
apiInstance.promotedPurchasesDeleteInstance(id, (error, data, response) => {
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


## promotedPurchasesGetInstance

> PromotedPurchaseResponse promotedPurchasesGetInstance(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.PromotedPurchasesApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsPromotedPurchases': ["null"], // [String] | the fields to include for returned resources of type promotedPurchases
  'include': ["null"] // [String] | comma-separated list of relationships to include
};
apiInstance.promotedPurchasesGetInstance(id, opts, (error, data, response) => {
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
 **fieldsPromotedPurchases** | [**[String]**](String.md)| the fields to include for returned resources of type promotedPurchases | [optional] 
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 

### Return type

[**PromotedPurchaseResponse**](PromotedPurchaseResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## promotedPurchasesUpdateInstance

> PromotedPurchaseResponse promotedPurchasesUpdateInstance(id, promotedPurchaseUpdateRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.PromotedPurchasesApi();
let id = "id_example"; // String | the id of the requested resource
let promotedPurchaseUpdateRequest = new AppStoreConnectApi.PromotedPurchaseUpdateRequest(); // PromotedPurchaseUpdateRequest | PromotedPurchase representation
apiInstance.promotedPurchasesUpdateInstance(id, promotedPurchaseUpdateRequest, (error, data, response) => {
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
 **promotedPurchaseUpdateRequest** | [**PromotedPurchaseUpdateRequest**](PromotedPurchaseUpdateRequest.md)| PromotedPurchase representation | 

### Return type

[**PromotedPurchaseResponse**](PromotedPurchaseResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

