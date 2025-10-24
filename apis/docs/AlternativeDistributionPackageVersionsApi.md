# AppStoreConnectApi.AlternativeDistributionPackageVersionsApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**alternativeDistributionPackageVersionsDeltasGetToManyRelated**](AlternativeDistributionPackageVersionsApi.md#alternativeDistributionPackageVersionsDeltasGetToManyRelated) | **GET** /v1/alternativeDistributionPackageVersions/{id}/deltas | 
[**alternativeDistributionPackageVersionsDeltasGetToManyRelationship**](AlternativeDistributionPackageVersionsApi.md#alternativeDistributionPackageVersionsDeltasGetToManyRelationship) | **GET** /v1/alternativeDistributionPackageVersions/{id}/relationships/deltas | 
[**alternativeDistributionPackageVersionsGetInstance**](AlternativeDistributionPackageVersionsApi.md#alternativeDistributionPackageVersionsGetInstance) | **GET** /v1/alternativeDistributionPackageVersions/{id} | 
[**alternativeDistributionPackageVersionsVariantsGetToManyRelated**](AlternativeDistributionPackageVersionsApi.md#alternativeDistributionPackageVersionsVariantsGetToManyRelated) | **GET** /v1/alternativeDistributionPackageVersions/{id}/variants | 
[**alternativeDistributionPackageVersionsVariantsGetToManyRelationship**](AlternativeDistributionPackageVersionsApi.md#alternativeDistributionPackageVersionsVariantsGetToManyRelationship) | **GET** /v1/alternativeDistributionPackageVersions/{id}/relationships/variants | 



## alternativeDistributionPackageVersionsDeltasGetToManyRelated

> AlternativeDistributionPackageDeltasResponse alternativeDistributionPackageVersionsDeltasGetToManyRelated(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AlternativeDistributionPackageVersionsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsAlternativeDistributionPackageDeltas': ["null"], // [String] | the fields to include for returned resources of type alternativeDistributionPackageDeltas
  'limit': 56 // Number | maximum resources per page
};
apiInstance.alternativeDistributionPackageVersionsDeltasGetToManyRelated(id, opts, (error, data, response) => {
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
 **fieldsAlternativeDistributionPackageDeltas** | [**[String]**](String.md)| the fields to include for returned resources of type alternativeDistributionPackageDeltas | [optional] 
 **limit** | **Number**| maximum resources per page | [optional] 

### Return type

[**AlternativeDistributionPackageDeltasResponse**](AlternativeDistributionPackageDeltasResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## alternativeDistributionPackageVersionsDeltasGetToManyRelationship

> AlternativeDistributionPackageVersionDeltasLinkagesResponse alternativeDistributionPackageVersionsDeltasGetToManyRelationship(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AlternativeDistributionPackageVersionsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'limit': 56 // Number | maximum resources per page
};
apiInstance.alternativeDistributionPackageVersionsDeltasGetToManyRelationship(id, opts, (error, data, response) => {
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

[**AlternativeDistributionPackageVersionDeltasLinkagesResponse**](AlternativeDistributionPackageVersionDeltasLinkagesResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## alternativeDistributionPackageVersionsGetInstance

> AlternativeDistributionPackageVersionResponse alternativeDistributionPackageVersionsGetInstance(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AlternativeDistributionPackageVersionsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsAlternativeDistributionPackageVersions': ["null"], // [String] | the fields to include for returned resources of type alternativeDistributionPackageVersions
  'fieldsAlternativeDistributionPackageVariants': ["null"], // [String] | the fields to include for returned resources of type alternativeDistributionPackageVariants
  'fieldsAlternativeDistributionPackageDeltas': ["null"], // [String] | the fields to include for returned resources of type alternativeDistributionPackageDeltas
  'include': ["null"], // [String] | comma-separated list of relationships to include
  'limitDeltas': 56, // Number | maximum number of related deltas returned (when they are included)
  'limitVariants': 56 // Number | maximum number of related variants returned (when they are included)
};
apiInstance.alternativeDistributionPackageVersionsGetInstance(id, opts, (error, data, response) => {
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
 **fieldsAlternativeDistributionPackageVersions** | [**[String]**](String.md)| the fields to include for returned resources of type alternativeDistributionPackageVersions | [optional] 
 **fieldsAlternativeDistributionPackageVariants** | [**[String]**](String.md)| the fields to include for returned resources of type alternativeDistributionPackageVariants | [optional] 
 **fieldsAlternativeDistributionPackageDeltas** | [**[String]**](String.md)| the fields to include for returned resources of type alternativeDistributionPackageDeltas | [optional] 
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 
 **limitDeltas** | **Number**| maximum number of related deltas returned (when they are included) | [optional] 
 **limitVariants** | **Number**| maximum number of related variants returned (when they are included) | [optional] 

### Return type

[**AlternativeDistributionPackageVersionResponse**](AlternativeDistributionPackageVersionResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## alternativeDistributionPackageVersionsVariantsGetToManyRelated

> AlternativeDistributionPackageVariantsResponse alternativeDistributionPackageVersionsVariantsGetToManyRelated(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AlternativeDistributionPackageVersionsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsAlternativeDistributionPackageVariants': ["null"], // [String] | the fields to include for returned resources of type alternativeDistributionPackageVariants
  'limit': 56 // Number | maximum resources per page
};
apiInstance.alternativeDistributionPackageVersionsVariantsGetToManyRelated(id, opts, (error, data, response) => {
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
 **fieldsAlternativeDistributionPackageVariants** | [**[String]**](String.md)| the fields to include for returned resources of type alternativeDistributionPackageVariants | [optional] 
 **limit** | **Number**| maximum resources per page | [optional] 

### Return type

[**AlternativeDistributionPackageVariantsResponse**](AlternativeDistributionPackageVariantsResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## alternativeDistributionPackageVersionsVariantsGetToManyRelationship

> AlternativeDistributionPackageVersionVariantsLinkagesResponse alternativeDistributionPackageVersionsVariantsGetToManyRelationship(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AlternativeDistributionPackageVersionsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'limit': 56 // Number | maximum resources per page
};
apiInstance.alternativeDistributionPackageVersionsVariantsGetToManyRelationship(id, opts, (error, data, response) => {
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

[**AlternativeDistributionPackageVersionVariantsLinkagesResponse**](AlternativeDistributionPackageVersionVariantsLinkagesResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

