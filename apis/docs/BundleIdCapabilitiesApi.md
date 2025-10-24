# AppStoreConnectApi.BundleIdCapabilitiesApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**bundleIdCapabilitiesCreateInstance**](BundleIdCapabilitiesApi.md#bundleIdCapabilitiesCreateInstance) | **POST** /v1/bundleIdCapabilities | 
[**bundleIdCapabilitiesDeleteInstance**](BundleIdCapabilitiesApi.md#bundleIdCapabilitiesDeleteInstance) | **DELETE** /v1/bundleIdCapabilities/{id} | 
[**bundleIdCapabilitiesUpdateInstance**](BundleIdCapabilitiesApi.md#bundleIdCapabilitiesUpdateInstance) | **PATCH** /v1/bundleIdCapabilities/{id} | 



## bundleIdCapabilitiesCreateInstance

> BundleIdCapabilityResponse bundleIdCapabilitiesCreateInstance(bundleIdCapabilityCreateRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.BundleIdCapabilitiesApi();
let bundleIdCapabilityCreateRequest = new AppStoreConnectApi.BundleIdCapabilityCreateRequest(); // BundleIdCapabilityCreateRequest | BundleIdCapability representation
apiInstance.bundleIdCapabilitiesCreateInstance(bundleIdCapabilityCreateRequest, (error, data, response) => {
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
 **bundleIdCapabilityCreateRequest** | [**BundleIdCapabilityCreateRequest**](BundleIdCapabilityCreateRequest.md)| BundleIdCapability representation | 

### Return type

[**BundleIdCapabilityResponse**](BundleIdCapabilityResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## bundleIdCapabilitiesDeleteInstance

> bundleIdCapabilitiesDeleteInstance(id)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.BundleIdCapabilitiesApi();
let id = "id_example"; // String | the id of the requested resource
apiInstance.bundleIdCapabilitiesDeleteInstance(id, (error, data, response) => {
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


## bundleIdCapabilitiesUpdateInstance

> BundleIdCapabilityResponse bundleIdCapabilitiesUpdateInstance(id, bundleIdCapabilityUpdateRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.BundleIdCapabilitiesApi();
let id = "id_example"; // String | the id of the requested resource
let bundleIdCapabilityUpdateRequest = new AppStoreConnectApi.BundleIdCapabilityUpdateRequest(); // BundleIdCapabilityUpdateRequest | BundleIdCapability representation
apiInstance.bundleIdCapabilitiesUpdateInstance(id, bundleIdCapabilityUpdateRequest, (error, data, response) => {
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
 **bundleIdCapabilityUpdateRequest** | [**BundleIdCapabilityUpdateRequest**](BundleIdCapabilityUpdateRequest.md)| BundleIdCapability representation | 

### Return type

[**BundleIdCapabilityResponse**](BundleIdCapabilityResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

