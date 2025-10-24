# AppStoreConnectApi.AppEncryptionDeclarationsApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**appEncryptionDeclarationsAppEncryptionDeclarationDocumentGetToOneRelated**](AppEncryptionDeclarationsApi.md#appEncryptionDeclarationsAppEncryptionDeclarationDocumentGetToOneRelated) | **GET** /v1/appEncryptionDeclarations/{id}/appEncryptionDeclarationDocument | 
[**appEncryptionDeclarationsAppEncryptionDeclarationDocumentGetToOneRelationship**](AppEncryptionDeclarationsApi.md#appEncryptionDeclarationsAppEncryptionDeclarationDocumentGetToOneRelationship) | **GET** /v1/appEncryptionDeclarations/{id}/relationships/appEncryptionDeclarationDocument | 
[**appEncryptionDeclarationsAppGetToOneRelated**](AppEncryptionDeclarationsApi.md#appEncryptionDeclarationsAppGetToOneRelated) | **GET** /v1/appEncryptionDeclarations/{id}/app | 
[**appEncryptionDeclarationsAppGetToOneRelationship**](AppEncryptionDeclarationsApi.md#appEncryptionDeclarationsAppGetToOneRelationship) | **GET** /v1/appEncryptionDeclarations/{id}/relationships/app | 
[**appEncryptionDeclarationsBuildsCreateToManyRelationship**](AppEncryptionDeclarationsApi.md#appEncryptionDeclarationsBuildsCreateToManyRelationship) | **POST** /v1/appEncryptionDeclarations/{id}/relationships/builds | 
[**appEncryptionDeclarationsCreateInstance**](AppEncryptionDeclarationsApi.md#appEncryptionDeclarationsCreateInstance) | **POST** /v1/appEncryptionDeclarations | 
[**appEncryptionDeclarationsGetCollection**](AppEncryptionDeclarationsApi.md#appEncryptionDeclarationsGetCollection) | **GET** /v1/appEncryptionDeclarations | 
[**appEncryptionDeclarationsGetInstance**](AppEncryptionDeclarationsApi.md#appEncryptionDeclarationsGetInstance) | **GET** /v1/appEncryptionDeclarations/{id} | 



## appEncryptionDeclarationsAppEncryptionDeclarationDocumentGetToOneRelated

> AppEncryptionDeclarationDocumentResponse appEncryptionDeclarationsAppEncryptionDeclarationDocumentGetToOneRelated(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AppEncryptionDeclarationsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsAppEncryptionDeclarationDocuments': ["null"] // [String] | the fields to include for returned resources of type appEncryptionDeclarationDocuments
};
apiInstance.appEncryptionDeclarationsAppEncryptionDeclarationDocumentGetToOneRelated(id, opts, (error, data, response) => {
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
 **fieldsAppEncryptionDeclarationDocuments** | [**[String]**](String.md)| the fields to include for returned resources of type appEncryptionDeclarationDocuments | [optional] 

### Return type

[**AppEncryptionDeclarationDocumentResponse**](AppEncryptionDeclarationDocumentResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## appEncryptionDeclarationsAppEncryptionDeclarationDocumentGetToOneRelationship

> AppEncryptionDeclarationAppEncryptionDeclarationDocumentLinkageResponse appEncryptionDeclarationsAppEncryptionDeclarationDocumentGetToOneRelationship(id)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AppEncryptionDeclarationsApi();
let id = "id_example"; // String | the id of the requested resource
apiInstance.appEncryptionDeclarationsAppEncryptionDeclarationDocumentGetToOneRelationship(id, (error, data, response) => {
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

### Return type

[**AppEncryptionDeclarationAppEncryptionDeclarationDocumentLinkageResponse**](AppEncryptionDeclarationAppEncryptionDeclarationDocumentLinkageResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## appEncryptionDeclarationsAppGetToOneRelated

> AppWithoutIncludesResponse appEncryptionDeclarationsAppGetToOneRelated(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AppEncryptionDeclarationsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsApps': ["null"] // [String] | the fields to include for returned resources of type apps
};
apiInstance.appEncryptionDeclarationsAppGetToOneRelated(id, opts, (error, data, response) => {
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
 **fieldsApps** | [**[String]**](String.md)| the fields to include for returned resources of type apps | [optional] 

### Return type

[**AppWithoutIncludesResponse**](AppWithoutIncludesResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## appEncryptionDeclarationsAppGetToOneRelationship

> AppEncryptionDeclarationAppLinkageResponse appEncryptionDeclarationsAppGetToOneRelationship(id)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AppEncryptionDeclarationsApi();
let id = "id_example"; // String | the id of the requested resource
apiInstance.appEncryptionDeclarationsAppGetToOneRelationship(id, (error, data, response) => {
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

### Return type

[**AppEncryptionDeclarationAppLinkageResponse**](AppEncryptionDeclarationAppLinkageResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## appEncryptionDeclarationsBuildsCreateToManyRelationship

> appEncryptionDeclarationsBuildsCreateToManyRelationship(id, appEncryptionDeclarationBuildsLinkagesRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AppEncryptionDeclarationsApi();
let id = "id_example"; // String | the id of the requested resource
let appEncryptionDeclarationBuildsLinkagesRequest = new AppStoreConnectApi.AppEncryptionDeclarationBuildsLinkagesRequest(); // AppEncryptionDeclarationBuildsLinkagesRequest | List of related linkages
apiInstance.appEncryptionDeclarationsBuildsCreateToManyRelationship(id, appEncryptionDeclarationBuildsLinkagesRequest, (error, data, response) => {
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
 **appEncryptionDeclarationBuildsLinkagesRequest** | [**AppEncryptionDeclarationBuildsLinkagesRequest**](AppEncryptionDeclarationBuildsLinkagesRequest.md)| List of related linkages | 

### Return type

null (empty response body)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## appEncryptionDeclarationsCreateInstance

> AppEncryptionDeclarationResponse appEncryptionDeclarationsCreateInstance(appEncryptionDeclarationCreateRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AppEncryptionDeclarationsApi();
let appEncryptionDeclarationCreateRequest = new AppStoreConnectApi.AppEncryptionDeclarationCreateRequest(); // AppEncryptionDeclarationCreateRequest | AppEncryptionDeclaration representation
apiInstance.appEncryptionDeclarationsCreateInstance(appEncryptionDeclarationCreateRequest, (error, data, response) => {
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
 **appEncryptionDeclarationCreateRequest** | [**AppEncryptionDeclarationCreateRequest**](AppEncryptionDeclarationCreateRequest.md)| AppEncryptionDeclaration representation | 

### Return type

[**AppEncryptionDeclarationResponse**](AppEncryptionDeclarationResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## appEncryptionDeclarationsGetCollection

> AppEncryptionDeclarationsResponse appEncryptionDeclarationsGetCollection(opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AppEncryptionDeclarationsApi();
let opts = {
  'filterPlatform': ["null"], // [String] | filter by attribute 'platform'
  'filterApp': ["null"], // [String] | filter by id(s) of related 'app'
  'filterBuilds': ["null"], // [String] | filter by id(s) of related 'builds'
  'fieldsAppEncryptionDeclarations': ["null"], // [String] | the fields to include for returned resources of type appEncryptionDeclarations
  'fieldsApps': ["null"], // [String] | the fields to include for returned resources of type apps
  'fieldsAppEncryptionDeclarationDocuments': ["null"], // [String] | the fields to include for returned resources of type appEncryptionDeclarationDocuments
  'limit': 56, // Number | maximum resources per page
  'include': ["null"], // [String] | comma-separated list of relationships to include
  'limitBuilds': 56 // Number | maximum number of related builds returned (when they are included)
};
apiInstance.appEncryptionDeclarationsGetCollection(opts, (error, data, response) => {
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
 **filterPlatform** | [**[String]**](String.md)| filter by attribute &#39;platform&#39; | [optional] 
 **filterApp** | [**[String]**](String.md)| filter by id(s) of related &#39;app&#39; | [optional] 
 **filterBuilds** | [**[String]**](String.md)| filter by id(s) of related &#39;builds&#39; | [optional] 
 **fieldsAppEncryptionDeclarations** | [**[String]**](String.md)| the fields to include for returned resources of type appEncryptionDeclarations | [optional] 
 **fieldsApps** | [**[String]**](String.md)| the fields to include for returned resources of type apps | [optional] 
 **fieldsAppEncryptionDeclarationDocuments** | [**[String]**](String.md)| the fields to include for returned resources of type appEncryptionDeclarationDocuments | [optional] 
 **limit** | **Number**| maximum resources per page | [optional] 
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 
 **limitBuilds** | **Number**| maximum number of related builds returned (when they are included) | [optional] 

### Return type

[**AppEncryptionDeclarationsResponse**](AppEncryptionDeclarationsResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## appEncryptionDeclarationsGetInstance

> AppEncryptionDeclarationResponse appEncryptionDeclarationsGetInstance(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AppEncryptionDeclarationsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsAppEncryptionDeclarations': ["null"], // [String] | the fields to include for returned resources of type appEncryptionDeclarations
  'fieldsApps': ["null"], // [String] | the fields to include for returned resources of type apps
  'fieldsAppEncryptionDeclarationDocuments': ["null"], // [String] | the fields to include for returned resources of type appEncryptionDeclarationDocuments
  'include': ["null"], // [String] | comma-separated list of relationships to include
  'limitBuilds': 56 // Number | maximum number of related builds returned (when they are included)
};
apiInstance.appEncryptionDeclarationsGetInstance(id, opts, (error, data, response) => {
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
 **fieldsAppEncryptionDeclarations** | [**[String]**](String.md)| the fields to include for returned resources of type appEncryptionDeclarations | [optional] 
 **fieldsApps** | [**[String]**](String.md)| the fields to include for returned resources of type apps | [optional] 
 **fieldsAppEncryptionDeclarationDocuments** | [**[String]**](String.md)| the fields to include for returned resources of type appEncryptionDeclarationDocuments | [optional] 
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 
 **limitBuilds** | **Number**| maximum number of related builds returned (when they are included) | [optional] 

### Return type

[**AppEncryptionDeclarationResponse**](AppEncryptionDeclarationResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

