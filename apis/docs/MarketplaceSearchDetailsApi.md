# AppStoreConnectApi.MarketplaceSearchDetailsApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**marketplaceSearchDetailsCreateInstance**](MarketplaceSearchDetailsApi.md#marketplaceSearchDetailsCreateInstance) | **POST** /v1/marketplaceSearchDetails | 
[**marketplaceSearchDetailsDeleteInstance**](MarketplaceSearchDetailsApi.md#marketplaceSearchDetailsDeleteInstance) | **DELETE** /v1/marketplaceSearchDetails/{id} | 
[**marketplaceSearchDetailsUpdateInstance**](MarketplaceSearchDetailsApi.md#marketplaceSearchDetailsUpdateInstance) | **PATCH** /v1/marketplaceSearchDetails/{id} | 



## marketplaceSearchDetailsCreateInstance

> MarketplaceSearchDetailResponse marketplaceSearchDetailsCreateInstance(marketplaceSearchDetailCreateRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.MarketplaceSearchDetailsApi();
let marketplaceSearchDetailCreateRequest = new AppStoreConnectApi.MarketplaceSearchDetailCreateRequest(); // MarketplaceSearchDetailCreateRequest | MarketplaceSearchDetail representation
apiInstance.marketplaceSearchDetailsCreateInstance(marketplaceSearchDetailCreateRequest, (error, data, response) => {
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
 **marketplaceSearchDetailCreateRequest** | [**MarketplaceSearchDetailCreateRequest**](MarketplaceSearchDetailCreateRequest.md)| MarketplaceSearchDetail representation | 

### Return type

[**MarketplaceSearchDetailResponse**](MarketplaceSearchDetailResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## marketplaceSearchDetailsDeleteInstance

> marketplaceSearchDetailsDeleteInstance(id)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.MarketplaceSearchDetailsApi();
let id = "id_example"; // String | the id of the requested resource
apiInstance.marketplaceSearchDetailsDeleteInstance(id, (error, data, response) => {
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


## marketplaceSearchDetailsUpdateInstance

> MarketplaceSearchDetailResponse marketplaceSearchDetailsUpdateInstance(id, marketplaceSearchDetailUpdateRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.MarketplaceSearchDetailsApi();
let id = "id_example"; // String | the id of the requested resource
let marketplaceSearchDetailUpdateRequest = new AppStoreConnectApi.MarketplaceSearchDetailUpdateRequest(); // MarketplaceSearchDetailUpdateRequest | MarketplaceSearchDetail representation
apiInstance.marketplaceSearchDetailsUpdateInstance(id, marketplaceSearchDetailUpdateRequest, (error, data, response) => {
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
 **marketplaceSearchDetailUpdateRequest** | [**MarketplaceSearchDetailUpdateRequest**](MarketplaceSearchDetailUpdateRequest.md)| MarketplaceSearchDetail representation | 

### Return type

[**MarketplaceSearchDetailResponse**](MarketplaceSearchDetailResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

