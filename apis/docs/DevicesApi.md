# AppStoreConnectApi.DevicesApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**devicesCreateInstance**](DevicesApi.md#devicesCreateInstance) | **POST** /v1/devices | 
[**devicesGetCollection**](DevicesApi.md#devicesGetCollection) | **GET** /v1/devices | 
[**devicesGetInstance**](DevicesApi.md#devicesGetInstance) | **GET** /v1/devices/{id} | 
[**devicesUpdateInstance**](DevicesApi.md#devicesUpdateInstance) | **PATCH** /v1/devices/{id} | 



## devicesCreateInstance

> DeviceResponse devicesCreateInstance(deviceCreateRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.DevicesApi();
let deviceCreateRequest = new AppStoreConnectApi.DeviceCreateRequest(); // DeviceCreateRequest | Device representation
apiInstance.devicesCreateInstance(deviceCreateRequest, (error, data, response) => {
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
 **deviceCreateRequest** | [**DeviceCreateRequest**](DeviceCreateRequest.md)| Device representation | 

### Return type

[**DeviceResponse**](DeviceResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## devicesGetCollection

> DevicesResponse devicesGetCollection(opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.DevicesApi();
let opts = {
  'filterName': ["null"], // [String] | filter by attribute 'name'
  'filterPlatform': ["null"], // [String] | filter by attribute 'platform'
  'filterUdid': ["null"], // [String] | filter by attribute 'udid'
  'filterStatus': ["null"], // [String] | filter by attribute 'status'
  'filterId': ["null"], // [String] | filter by id(s)
  'sort': ["null"], // [String] | comma-separated list of sort expressions; resources will be sorted as specified
  'fieldsDevices': ["null"], // [String] | the fields to include for returned resources of type devices
  'limit': 56 // Number | maximum resources per page
};
apiInstance.devicesGetCollection(opts, (error, data, response) => {
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
 **filterName** | [**[String]**](String.md)| filter by attribute &#39;name&#39; | [optional] 
 **filterPlatform** | [**[String]**](String.md)| filter by attribute &#39;platform&#39; | [optional] 
 **filterUdid** | [**[String]**](String.md)| filter by attribute &#39;udid&#39; | [optional] 
 **filterStatus** | [**[String]**](String.md)| filter by attribute &#39;status&#39; | [optional] 
 **filterId** | [**[String]**](String.md)| filter by id(s) | [optional] 
 **sort** | [**[String]**](String.md)| comma-separated list of sort expressions; resources will be sorted as specified | [optional] 
 **fieldsDevices** | [**[String]**](String.md)| the fields to include for returned resources of type devices | [optional] 
 **limit** | **Number**| maximum resources per page | [optional] 

### Return type

[**DevicesResponse**](DevicesResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## devicesGetInstance

> DeviceResponse devicesGetInstance(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.DevicesApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsDevices': ["null"] // [String] | the fields to include for returned resources of type devices
};
apiInstance.devicesGetInstance(id, opts, (error, data, response) => {
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
 **fieldsDevices** | [**[String]**](String.md)| the fields to include for returned resources of type devices | [optional] 

### Return type

[**DeviceResponse**](DeviceResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## devicesUpdateInstance

> DeviceResponse devicesUpdateInstance(id, deviceUpdateRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.DevicesApi();
let id = "id_example"; // String | the id of the requested resource
let deviceUpdateRequest = new AppStoreConnectApi.DeviceUpdateRequest(); // DeviceUpdateRequest | Device representation
apiInstance.devicesUpdateInstance(id, deviceUpdateRequest, (error, data, response) => {
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
 **deviceUpdateRequest** | [**DeviceUpdateRequest**](DeviceUpdateRequest.md)| Device representation | 

### Return type

[**DeviceResponse**](DeviceResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

