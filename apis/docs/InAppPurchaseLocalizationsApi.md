# AppStoreConnectApi.InAppPurchaseLocalizationsApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**inAppPurchaseLocalizationsCreateInstance**](InAppPurchaseLocalizationsApi.md#inAppPurchaseLocalizationsCreateInstance) | **POST** /v1/inAppPurchaseLocalizations | 
[**inAppPurchaseLocalizationsDeleteInstance**](InAppPurchaseLocalizationsApi.md#inAppPurchaseLocalizationsDeleteInstance) | **DELETE** /v1/inAppPurchaseLocalizations/{id} | 
[**inAppPurchaseLocalizationsGetInstance**](InAppPurchaseLocalizationsApi.md#inAppPurchaseLocalizationsGetInstance) | **GET** /v1/inAppPurchaseLocalizations/{id} | 
[**inAppPurchaseLocalizationsUpdateInstance**](InAppPurchaseLocalizationsApi.md#inAppPurchaseLocalizationsUpdateInstance) | **PATCH** /v1/inAppPurchaseLocalizations/{id} | 



## inAppPurchaseLocalizationsCreateInstance

> InAppPurchaseLocalizationResponse inAppPurchaseLocalizationsCreateInstance(inAppPurchaseLocalizationCreateRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.InAppPurchaseLocalizationsApi();
let inAppPurchaseLocalizationCreateRequest = new AppStoreConnectApi.InAppPurchaseLocalizationCreateRequest(); // InAppPurchaseLocalizationCreateRequest | InAppPurchaseLocalization representation
apiInstance.inAppPurchaseLocalizationsCreateInstance(inAppPurchaseLocalizationCreateRequest, (error, data, response) => {
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
 **inAppPurchaseLocalizationCreateRequest** | [**InAppPurchaseLocalizationCreateRequest**](InAppPurchaseLocalizationCreateRequest.md)| InAppPurchaseLocalization representation | 

### Return type

[**InAppPurchaseLocalizationResponse**](InAppPurchaseLocalizationResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## inAppPurchaseLocalizationsDeleteInstance

> inAppPurchaseLocalizationsDeleteInstance(id)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.InAppPurchaseLocalizationsApi();
let id = "id_example"; // String | the id of the requested resource
apiInstance.inAppPurchaseLocalizationsDeleteInstance(id, (error, data, response) => {
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


## inAppPurchaseLocalizationsGetInstance

> InAppPurchaseLocalizationResponse inAppPurchaseLocalizationsGetInstance(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.InAppPurchaseLocalizationsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsInAppPurchaseLocalizations': ["null"], // [String] | the fields to include for returned resources of type inAppPurchaseLocalizations
  'include': ["null"] // [String] | comma-separated list of relationships to include
};
apiInstance.inAppPurchaseLocalizationsGetInstance(id, opts, (error, data, response) => {
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
 **fieldsInAppPurchaseLocalizations** | [**[String]**](String.md)| the fields to include for returned resources of type inAppPurchaseLocalizations | [optional] 
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 

### Return type

[**InAppPurchaseLocalizationResponse**](InAppPurchaseLocalizationResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## inAppPurchaseLocalizationsUpdateInstance

> InAppPurchaseLocalizationResponse inAppPurchaseLocalizationsUpdateInstance(id, inAppPurchaseLocalizationUpdateRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.InAppPurchaseLocalizationsApi();
let id = "id_example"; // String | the id of the requested resource
let inAppPurchaseLocalizationUpdateRequest = new AppStoreConnectApi.InAppPurchaseLocalizationUpdateRequest(); // InAppPurchaseLocalizationUpdateRequest | InAppPurchaseLocalization representation
apiInstance.inAppPurchaseLocalizationsUpdateInstance(id, inAppPurchaseLocalizationUpdateRequest, (error, data, response) => {
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
 **inAppPurchaseLocalizationUpdateRequest** | [**InAppPurchaseLocalizationUpdateRequest**](InAppPurchaseLocalizationUpdateRequest.md)| InAppPurchaseLocalization representation | 

### Return type

[**InAppPurchaseLocalizationResponse**](InAppPurchaseLocalizationResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

