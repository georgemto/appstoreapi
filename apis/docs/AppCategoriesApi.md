# AppStoreConnectApi.AppCategoriesApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**appCategoriesGetCollection**](AppCategoriesApi.md#appCategoriesGetCollection) | **GET** /v1/appCategories | 
[**appCategoriesGetInstance**](AppCategoriesApi.md#appCategoriesGetInstance) | **GET** /v1/appCategories/{id} | 
[**appCategoriesParentGetToOneRelated**](AppCategoriesApi.md#appCategoriesParentGetToOneRelated) | **GET** /v1/appCategories/{id}/parent | 
[**appCategoriesParentGetToOneRelationship**](AppCategoriesApi.md#appCategoriesParentGetToOneRelationship) | **GET** /v1/appCategories/{id}/relationships/parent | 
[**appCategoriesSubcategoriesGetToManyRelated**](AppCategoriesApi.md#appCategoriesSubcategoriesGetToManyRelated) | **GET** /v1/appCategories/{id}/subcategories | 
[**appCategoriesSubcategoriesGetToManyRelationship**](AppCategoriesApi.md#appCategoriesSubcategoriesGetToManyRelationship) | **GET** /v1/appCategories/{id}/relationships/subcategories | 



## appCategoriesGetCollection

> AppCategoriesResponse appCategoriesGetCollection(opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AppCategoriesApi();
let opts = {
  'filterPlatforms': ["null"], // [String] | filter by attribute 'platforms'
  'existsParent': true, // Boolean | filter by existence or non-existence of related 'parent'
  'fieldsAppCategories': ["null"], // [String] | the fields to include for returned resources of type appCategories
  'limit': 56, // Number | maximum resources per page
  'include': ["null"], // [String] | comma-separated list of relationships to include
  'limitSubcategories': 56 // Number | maximum number of related subcategories returned (when they are included)
};
apiInstance.appCategoriesGetCollection(opts, (error, data, response) => {
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
 **filterPlatforms** | [**[String]**](String.md)| filter by attribute &#39;platforms&#39; | [optional] 
 **existsParent** | **Boolean**| filter by existence or non-existence of related &#39;parent&#39; | [optional] 
 **fieldsAppCategories** | [**[String]**](String.md)| the fields to include for returned resources of type appCategories | [optional] 
 **limit** | **Number**| maximum resources per page | [optional] 
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 
 **limitSubcategories** | **Number**| maximum number of related subcategories returned (when they are included) | [optional] 

### Return type

[**AppCategoriesResponse**](AppCategoriesResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## appCategoriesGetInstance

> AppCategoryResponse appCategoriesGetInstance(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AppCategoriesApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsAppCategories': ["null"], // [String] | the fields to include for returned resources of type appCategories
  'include': ["null"], // [String] | comma-separated list of relationships to include
  'limitSubcategories': 56 // Number | maximum number of related subcategories returned (when they are included)
};
apiInstance.appCategoriesGetInstance(id, opts, (error, data, response) => {
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
 **fieldsAppCategories** | [**[String]**](String.md)| the fields to include for returned resources of type appCategories | [optional] 
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 
 **limitSubcategories** | **Number**| maximum number of related subcategories returned (when they are included) | [optional] 

### Return type

[**AppCategoryResponse**](AppCategoryResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## appCategoriesParentGetToOneRelated

> AppCategoryWithoutIncludesResponse appCategoriesParentGetToOneRelated(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AppCategoriesApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsAppCategories': ["null"] // [String] | the fields to include for returned resources of type appCategories
};
apiInstance.appCategoriesParentGetToOneRelated(id, opts, (error, data, response) => {
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
 **fieldsAppCategories** | [**[String]**](String.md)| the fields to include for returned resources of type appCategories | [optional] 

### Return type

[**AppCategoryWithoutIncludesResponse**](AppCategoryWithoutIncludesResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## appCategoriesParentGetToOneRelationship

> AppCategoryParentLinkageResponse appCategoriesParentGetToOneRelationship(id)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AppCategoriesApi();
let id = "id_example"; // String | the id of the requested resource
apiInstance.appCategoriesParentGetToOneRelationship(id, (error, data, response) => {
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

[**AppCategoryParentLinkageResponse**](AppCategoryParentLinkageResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## appCategoriesSubcategoriesGetToManyRelated

> AppCategoriesWithoutIncludesResponse appCategoriesSubcategoriesGetToManyRelated(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AppCategoriesApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsAppCategories': ["null"], // [String] | the fields to include for returned resources of type appCategories
  'limit': 56 // Number | maximum resources per page
};
apiInstance.appCategoriesSubcategoriesGetToManyRelated(id, opts, (error, data, response) => {
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
 **fieldsAppCategories** | [**[String]**](String.md)| the fields to include for returned resources of type appCategories | [optional] 
 **limit** | **Number**| maximum resources per page | [optional] 

### Return type

[**AppCategoriesWithoutIncludesResponse**](AppCategoriesWithoutIncludesResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## appCategoriesSubcategoriesGetToManyRelationship

> AppCategorySubcategoriesLinkagesResponse appCategoriesSubcategoriesGetToManyRelationship(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AppCategoriesApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'limit': 56 // Number | maximum resources per page
};
apiInstance.appCategoriesSubcategoriesGetToManyRelationship(id, opts, (error, data, response) => {
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

[**AppCategorySubcategoriesLinkagesResponse**](AppCategorySubcategoriesLinkagesResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

