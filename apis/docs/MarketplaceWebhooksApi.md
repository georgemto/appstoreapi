# AppStoreConnectApi.MarketplaceWebhooksApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**marketplaceWebhooksCreateInstance**](MarketplaceWebhooksApi.md#marketplaceWebhooksCreateInstance) | **POST** /v1/marketplaceWebhooks | 
[**marketplaceWebhooksDeleteInstance**](MarketplaceWebhooksApi.md#marketplaceWebhooksDeleteInstance) | **DELETE** /v1/marketplaceWebhooks/{id} | 
[**marketplaceWebhooksGetCollection**](MarketplaceWebhooksApi.md#marketplaceWebhooksGetCollection) | **GET** /v1/marketplaceWebhooks | 
[**marketplaceWebhooksUpdateInstance**](MarketplaceWebhooksApi.md#marketplaceWebhooksUpdateInstance) | **PATCH** /v1/marketplaceWebhooks/{id} | 



## marketplaceWebhooksCreateInstance

> MarketplaceWebhookResponse marketplaceWebhooksCreateInstance(marketplaceWebhookCreateRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.MarketplaceWebhooksApi();
let marketplaceWebhookCreateRequest = new AppStoreConnectApi.MarketplaceWebhookCreateRequest(); // MarketplaceWebhookCreateRequest | MarketplaceWebhook representation
apiInstance.marketplaceWebhooksCreateInstance(marketplaceWebhookCreateRequest, (error, data, response) => {
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
 **marketplaceWebhookCreateRequest** | [**MarketplaceWebhookCreateRequest**](MarketplaceWebhookCreateRequest.md)| MarketplaceWebhook representation | 

### Return type

[**MarketplaceWebhookResponse**](MarketplaceWebhookResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## marketplaceWebhooksDeleteInstance

> marketplaceWebhooksDeleteInstance(id)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.MarketplaceWebhooksApi();
let id = "id_example"; // String | the id of the requested resource
apiInstance.marketplaceWebhooksDeleteInstance(id, (error, data, response) => {
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


## marketplaceWebhooksGetCollection

> MarketplaceWebhooksResponse marketplaceWebhooksGetCollection(opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.MarketplaceWebhooksApi();
let opts = {
  'fieldsMarketplaceWebhooks': ["null"], // [String] | the fields to include for returned resources of type marketplaceWebhooks
  'limit': 56 // Number | maximum resources per page
};
apiInstance.marketplaceWebhooksGetCollection(opts, (error, data, response) => {
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
 **fieldsMarketplaceWebhooks** | [**[String]**](String.md)| the fields to include for returned resources of type marketplaceWebhooks | [optional] 
 **limit** | **Number**| maximum resources per page | [optional] 

### Return type

[**MarketplaceWebhooksResponse**](MarketplaceWebhooksResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## marketplaceWebhooksUpdateInstance

> MarketplaceWebhookResponse marketplaceWebhooksUpdateInstance(id, marketplaceWebhookUpdateRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.MarketplaceWebhooksApi();
let id = "id_example"; // String | the id of the requested resource
let marketplaceWebhookUpdateRequest = new AppStoreConnectApi.MarketplaceWebhookUpdateRequest(); // MarketplaceWebhookUpdateRequest | MarketplaceWebhook representation
apiInstance.marketplaceWebhooksUpdateInstance(id, marketplaceWebhookUpdateRequest, (error, data, response) => {
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
 **marketplaceWebhookUpdateRequest** | [**MarketplaceWebhookUpdateRequest**](MarketplaceWebhookUpdateRequest.md)| MarketplaceWebhook representation | 

### Return type

[**MarketplaceWebhookResponse**](MarketplaceWebhookResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

