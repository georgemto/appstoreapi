# AppStoreConnectApi.RoutingAppCoveragesApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**routingAppCoveragesCreateInstance**](RoutingAppCoveragesApi.md#routingAppCoveragesCreateInstance) | **POST** /v1/routingAppCoverages | 
[**routingAppCoveragesDeleteInstance**](RoutingAppCoveragesApi.md#routingAppCoveragesDeleteInstance) | **DELETE** /v1/routingAppCoverages/{id} | 
[**routingAppCoveragesGetInstance**](RoutingAppCoveragesApi.md#routingAppCoveragesGetInstance) | **GET** /v1/routingAppCoverages/{id} | 
[**routingAppCoveragesUpdateInstance**](RoutingAppCoveragesApi.md#routingAppCoveragesUpdateInstance) | **PATCH** /v1/routingAppCoverages/{id} | 



## routingAppCoveragesCreateInstance

> RoutingAppCoverageResponse routingAppCoveragesCreateInstance(routingAppCoverageCreateRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.RoutingAppCoveragesApi();
let routingAppCoverageCreateRequest = new AppStoreConnectApi.RoutingAppCoverageCreateRequest(); // RoutingAppCoverageCreateRequest | RoutingAppCoverage representation
apiInstance.routingAppCoveragesCreateInstance(routingAppCoverageCreateRequest, (error, data, response) => {
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
 **routingAppCoverageCreateRequest** | [**RoutingAppCoverageCreateRequest**](RoutingAppCoverageCreateRequest.md)| RoutingAppCoverage representation | 

### Return type

[**RoutingAppCoverageResponse**](RoutingAppCoverageResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## routingAppCoveragesDeleteInstance

> routingAppCoveragesDeleteInstance(id)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.RoutingAppCoveragesApi();
let id = "id_example"; // String | the id of the requested resource
apiInstance.routingAppCoveragesDeleteInstance(id, (error, data, response) => {
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


## routingAppCoveragesGetInstance

> RoutingAppCoverageResponse routingAppCoveragesGetInstance(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.RoutingAppCoveragesApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsRoutingAppCoverages': ["null"], // [String] | the fields to include for returned resources of type routingAppCoverages
  'include': ["null"] // [String] | comma-separated list of relationships to include
};
apiInstance.routingAppCoveragesGetInstance(id, opts, (error, data, response) => {
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
 **fieldsRoutingAppCoverages** | [**[String]**](String.md)| the fields to include for returned resources of type routingAppCoverages | [optional] 
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 

### Return type

[**RoutingAppCoverageResponse**](RoutingAppCoverageResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## routingAppCoveragesUpdateInstance

> RoutingAppCoverageResponse routingAppCoveragesUpdateInstance(id, routingAppCoverageUpdateRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.RoutingAppCoveragesApi();
let id = "id_example"; // String | the id of the requested resource
let routingAppCoverageUpdateRequest = new AppStoreConnectApi.RoutingAppCoverageUpdateRequest(); // RoutingAppCoverageUpdateRequest | RoutingAppCoverage representation
apiInstance.routingAppCoveragesUpdateInstance(id, routingAppCoverageUpdateRequest, (error, data, response) => {
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
 **routingAppCoverageUpdateRequest** | [**RoutingAppCoverageUpdateRequest**](RoutingAppCoverageUpdateRequest.md)| RoutingAppCoverage representation | 

### Return type

[**RoutingAppCoverageResponse**](RoutingAppCoverageResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

