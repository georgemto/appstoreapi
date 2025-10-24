# AppStoreConnectApi.AlternativeDistributionPackagesApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**alternativeDistributionPackagesCreateInstance**](AlternativeDistributionPackagesApi.md#alternativeDistributionPackagesCreateInstance) | **POST** /v1/alternativeDistributionPackages | 
[**alternativeDistributionPackagesGetInstance**](AlternativeDistributionPackagesApi.md#alternativeDistributionPackagesGetInstance) | **GET** /v1/alternativeDistributionPackages/{id} | 
[**alternativeDistributionPackagesVersionsGetToManyRelated**](AlternativeDistributionPackagesApi.md#alternativeDistributionPackagesVersionsGetToManyRelated) | **GET** /v1/alternativeDistributionPackages/{id}/versions | 
[**alternativeDistributionPackagesVersionsGetToManyRelationship**](AlternativeDistributionPackagesApi.md#alternativeDistributionPackagesVersionsGetToManyRelationship) | **GET** /v1/alternativeDistributionPackages/{id}/relationships/versions | 



## alternativeDistributionPackagesCreateInstance

> AlternativeDistributionPackageResponse alternativeDistributionPackagesCreateInstance(alternativeDistributionPackageCreateRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AlternativeDistributionPackagesApi();
let alternativeDistributionPackageCreateRequest = new AppStoreConnectApi.AlternativeDistributionPackageCreateRequest(); // AlternativeDistributionPackageCreateRequest | AlternativeDistributionPackage representation
apiInstance.alternativeDistributionPackagesCreateInstance(alternativeDistributionPackageCreateRequest, (error, data, response) => {
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
 **alternativeDistributionPackageCreateRequest** | [**AlternativeDistributionPackageCreateRequest**](AlternativeDistributionPackageCreateRequest.md)| AlternativeDistributionPackage representation | 

### Return type

[**AlternativeDistributionPackageResponse**](AlternativeDistributionPackageResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## alternativeDistributionPackagesGetInstance

> AlternativeDistributionPackageResponse alternativeDistributionPackagesGetInstance(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AlternativeDistributionPackagesApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsAlternativeDistributionPackages': ["null"], // [String] | the fields to include for returned resources of type alternativeDistributionPackages
  'fieldsAlternativeDistributionPackageVersions': ["null"], // [String] | the fields to include for returned resources of type alternativeDistributionPackageVersions
  'include': ["null"], // [String] | comma-separated list of relationships to include
  'limitVersions': 56 // Number | maximum number of related versions returned (when they are included)
};
apiInstance.alternativeDistributionPackagesGetInstance(id, opts, (error, data, response) => {
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
 **fieldsAlternativeDistributionPackages** | [**[String]**](String.md)| the fields to include for returned resources of type alternativeDistributionPackages | [optional] 
 **fieldsAlternativeDistributionPackageVersions** | [**[String]**](String.md)| the fields to include for returned resources of type alternativeDistributionPackageVersions | [optional] 
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 
 **limitVersions** | **Number**| maximum number of related versions returned (when they are included) | [optional] 

### Return type

[**AlternativeDistributionPackageResponse**](AlternativeDistributionPackageResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## alternativeDistributionPackagesVersionsGetToManyRelated

> AlternativeDistributionPackageVersionsResponse alternativeDistributionPackagesVersionsGetToManyRelated(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AlternativeDistributionPackagesApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'filterState': ["null"], // [String] | filter by attribute 'state'
  'fieldsAlternativeDistributionPackageVersions': ["null"], // [String] | the fields to include for returned resources of type alternativeDistributionPackageVersions
  'fieldsAlternativeDistributionPackageVariants': ["null"], // [String] | the fields to include for returned resources of type alternativeDistributionPackageVariants
  'fieldsAlternativeDistributionPackageDeltas': ["null"], // [String] | the fields to include for returned resources of type alternativeDistributionPackageDeltas
  'fieldsAlternativeDistributionPackages': ["null"], // [String] | the fields to include for returned resources of type alternativeDistributionPackages
  'limit': 56, // Number | maximum resources per page
  'include': ["null"], // [String] | comma-separated list of relationships to include
  'limitVariants': 56, // Number | maximum number of related variants returned (when they are included)
  'limitDeltas': 56 // Number | maximum number of related deltas returned (when they are included)
};
apiInstance.alternativeDistributionPackagesVersionsGetToManyRelated(id, opts, (error, data, response) => {
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
 **filterState** | [**[String]**](String.md)| filter by attribute &#39;state&#39; | [optional] 
 **fieldsAlternativeDistributionPackageVersions** | [**[String]**](String.md)| the fields to include for returned resources of type alternativeDistributionPackageVersions | [optional] 
 **fieldsAlternativeDistributionPackageVariants** | [**[String]**](String.md)| the fields to include for returned resources of type alternativeDistributionPackageVariants | [optional] 
 **fieldsAlternativeDistributionPackageDeltas** | [**[String]**](String.md)| the fields to include for returned resources of type alternativeDistributionPackageDeltas | [optional] 
 **fieldsAlternativeDistributionPackages** | [**[String]**](String.md)| the fields to include for returned resources of type alternativeDistributionPackages | [optional] 
 **limit** | **Number**| maximum resources per page | [optional] 
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 
 **limitVariants** | **Number**| maximum number of related variants returned (when they are included) | [optional] 
 **limitDeltas** | **Number**| maximum number of related deltas returned (when they are included) | [optional] 

### Return type

[**AlternativeDistributionPackageVersionsResponse**](AlternativeDistributionPackageVersionsResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## alternativeDistributionPackagesVersionsGetToManyRelationship

> AlternativeDistributionPackageVersionsLinkagesResponse alternativeDistributionPackagesVersionsGetToManyRelationship(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AlternativeDistributionPackagesApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'limit': 56 // Number | maximum resources per page
};
apiInstance.alternativeDistributionPackagesVersionsGetToManyRelationship(id, opts, (error, data, response) => {
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

[**AlternativeDistributionPackageVersionsLinkagesResponse**](AlternativeDistributionPackageVersionsLinkagesResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

