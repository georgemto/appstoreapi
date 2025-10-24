# AppStoreConnectApi.CiMacOsVersionsApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**ciMacOsVersionsGetCollection**](CiMacOsVersionsApi.md#ciMacOsVersionsGetCollection) | **GET** /v1/ciMacOsVersions | 
[**ciMacOsVersionsGetInstance**](CiMacOsVersionsApi.md#ciMacOsVersionsGetInstance) | **GET** /v1/ciMacOsVersions/{id} | 
[**ciMacOsVersionsXcodeVersionsGetToManyRelated**](CiMacOsVersionsApi.md#ciMacOsVersionsXcodeVersionsGetToManyRelated) | **GET** /v1/ciMacOsVersions/{id}/xcodeVersions | 
[**ciMacOsVersionsXcodeVersionsGetToManyRelationship**](CiMacOsVersionsApi.md#ciMacOsVersionsXcodeVersionsGetToManyRelationship) | **GET** /v1/ciMacOsVersions/{id}/relationships/xcodeVersions | 



## ciMacOsVersionsGetCollection

> CiMacOsVersionsResponse ciMacOsVersionsGetCollection(opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.CiMacOsVersionsApi();
let opts = {
  'fieldsCiMacOsVersions': ["null"], // [String] | the fields to include for returned resources of type ciMacOsVersions
  'fieldsCiXcodeVersions': ["null"], // [String] | the fields to include for returned resources of type ciXcodeVersions
  'limit': 56, // Number | maximum resources per page
  'include': ["null"], // [String] | comma-separated list of relationships to include
  'limitXcodeVersions': 56 // Number | maximum number of related xcodeVersions returned (when they are included)
};
apiInstance.ciMacOsVersionsGetCollection(opts, (error, data, response) => {
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
 **fieldsCiMacOsVersions** | [**[String]**](String.md)| the fields to include for returned resources of type ciMacOsVersions | [optional] 
 **fieldsCiXcodeVersions** | [**[String]**](String.md)| the fields to include for returned resources of type ciXcodeVersions | [optional] 
 **limit** | **Number**| maximum resources per page | [optional] 
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 
 **limitXcodeVersions** | **Number**| maximum number of related xcodeVersions returned (when they are included) | [optional] 

### Return type

[**CiMacOsVersionsResponse**](CiMacOsVersionsResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## ciMacOsVersionsGetInstance

> CiMacOsVersionResponse ciMacOsVersionsGetInstance(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.CiMacOsVersionsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsCiMacOsVersions': ["null"], // [String] | the fields to include for returned resources of type ciMacOsVersions
  'fieldsCiXcodeVersions': ["null"], // [String] | the fields to include for returned resources of type ciXcodeVersions
  'include': ["null"], // [String] | comma-separated list of relationships to include
  'limitXcodeVersions': 56 // Number | maximum number of related xcodeVersions returned (when they are included)
};
apiInstance.ciMacOsVersionsGetInstance(id, opts, (error, data, response) => {
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
 **fieldsCiMacOsVersions** | [**[String]**](String.md)| the fields to include for returned resources of type ciMacOsVersions | [optional] 
 **fieldsCiXcodeVersions** | [**[String]**](String.md)| the fields to include for returned resources of type ciXcodeVersions | [optional] 
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 
 **limitXcodeVersions** | **Number**| maximum number of related xcodeVersions returned (when they are included) | [optional] 

### Return type

[**CiMacOsVersionResponse**](CiMacOsVersionResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## ciMacOsVersionsXcodeVersionsGetToManyRelated

> CiXcodeVersionsResponse ciMacOsVersionsXcodeVersionsGetToManyRelated(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.CiMacOsVersionsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsCiXcodeVersions': ["null"], // [String] | the fields to include for returned resources of type ciXcodeVersions
  'fieldsCiMacOsVersions': ["null"], // [String] | the fields to include for returned resources of type ciMacOsVersions
  'limit': 56, // Number | maximum resources per page
  'include': ["null"], // [String] | comma-separated list of relationships to include
  'limitMacOsVersions': 56 // Number | maximum number of related macOsVersions returned (when they are included)
};
apiInstance.ciMacOsVersionsXcodeVersionsGetToManyRelated(id, opts, (error, data, response) => {
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
 **fieldsCiXcodeVersions** | [**[String]**](String.md)| the fields to include for returned resources of type ciXcodeVersions | [optional] 
 **fieldsCiMacOsVersions** | [**[String]**](String.md)| the fields to include for returned resources of type ciMacOsVersions | [optional] 
 **limit** | **Number**| maximum resources per page | [optional] 
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 
 **limitMacOsVersions** | **Number**| maximum number of related macOsVersions returned (when they are included) | [optional] 

### Return type

[**CiXcodeVersionsResponse**](CiXcodeVersionsResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## ciMacOsVersionsXcodeVersionsGetToManyRelationship

> CiMacOsVersionXcodeVersionsLinkagesResponse ciMacOsVersionsXcodeVersionsGetToManyRelationship(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.CiMacOsVersionsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'limit': 56 // Number | maximum resources per page
};
apiInstance.ciMacOsVersionsXcodeVersionsGetToManyRelationship(id, opts, (error, data, response) => {
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
 **limit** | **Number**| maximum resources per page | [optional] 

### Return type

[**CiMacOsVersionXcodeVersionsLinkagesResponse**](CiMacOsVersionXcodeVersionsLinkagesResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

