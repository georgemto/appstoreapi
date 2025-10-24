# AppStoreConnectApi.AppInfosApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**appInfosAgeRatingDeclarationGetToOneRelated**](AppInfosApi.md#appInfosAgeRatingDeclarationGetToOneRelated) | **GET** /v1/appInfos/{id}/ageRatingDeclaration | 
[**appInfosAgeRatingDeclarationGetToOneRelationship**](AppInfosApi.md#appInfosAgeRatingDeclarationGetToOneRelationship) | **GET** /v1/appInfos/{id}/relationships/ageRatingDeclaration | 
[**appInfosAppInfoLocalizationsGetToManyRelated**](AppInfosApi.md#appInfosAppInfoLocalizationsGetToManyRelated) | **GET** /v1/appInfos/{id}/appInfoLocalizations | 
[**appInfosAppInfoLocalizationsGetToManyRelationship**](AppInfosApi.md#appInfosAppInfoLocalizationsGetToManyRelationship) | **GET** /v1/appInfos/{id}/relationships/appInfoLocalizations | 
[**appInfosGetInstance**](AppInfosApi.md#appInfosGetInstance) | **GET** /v1/appInfos/{id} | 
[**appInfosPrimaryCategoryGetToOneRelated**](AppInfosApi.md#appInfosPrimaryCategoryGetToOneRelated) | **GET** /v1/appInfos/{id}/primaryCategory | 
[**appInfosPrimaryCategoryGetToOneRelationship**](AppInfosApi.md#appInfosPrimaryCategoryGetToOneRelationship) | **GET** /v1/appInfos/{id}/relationships/primaryCategory | 
[**appInfosPrimarySubcategoryOneGetToOneRelated**](AppInfosApi.md#appInfosPrimarySubcategoryOneGetToOneRelated) | **GET** /v1/appInfos/{id}/primarySubcategoryOne | 
[**appInfosPrimarySubcategoryOneGetToOneRelationship**](AppInfosApi.md#appInfosPrimarySubcategoryOneGetToOneRelationship) | **GET** /v1/appInfos/{id}/relationships/primarySubcategoryOne | 
[**appInfosPrimarySubcategoryTwoGetToOneRelated**](AppInfosApi.md#appInfosPrimarySubcategoryTwoGetToOneRelated) | **GET** /v1/appInfos/{id}/primarySubcategoryTwo | 
[**appInfosPrimarySubcategoryTwoGetToOneRelationship**](AppInfosApi.md#appInfosPrimarySubcategoryTwoGetToOneRelationship) | **GET** /v1/appInfos/{id}/relationships/primarySubcategoryTwo | 
[**appInfosSecondaryCategoryGetToOneRelated**](AppInfosApi.md#appInfosSecondaryCategoryGetToOneRelated) | **GET** /v1/appInfos/{id}/secondaryCategory | 
[**appInfosSecondaryCategoryGetToOneRelationship**](AppInfosApi.md#appInfosSecondaryCategoryGetToOneRelationship) | **GET** /v1/appInfos/{id}/relationships/secondaryCategory | 
[**appInfosSecondarySubcategoryOneGetToOneRelated**](AppInfosApi.md#appInfosSecondarySubcategoryOneGetToOneRelated) | **GET** /v1/appInfos/{id}/secondarySubcategoryOne | 
[**appInfosSecondarySubcategoryOneGetToOneRelationship**](AppInfosApi.md#appInfosSecondarySubcategoryOneGetToOneRelationship) | **GET** /v1/appInfos/{id}/relationships/secondarySubcategoryOne | 
[**appInfosSecondarySubcategoryTwoGetToOneRelated**](AppInfosApi.md#appInfosSecondarySubcategoryTwoGetToOneRelated) | **GET** /v1/appInfos/{id}/secondarySubcategoryTwo | 
[**appInfosSecondarySubcategoryTwoGetToOneRelationship**](AppInfosApi.md#appInfosSecondarySubcategoryTwoGetToOneRelationship) | **GET** /v1/appInfos/{id}/relationships/secondarySubcategoryTwo | 
[**appInfosTerritoryAgeRatingsGetToManyRelated**](AppInfosApi.md#appInfosTerritoryAgeRatingsGetToManyRelated) | **GET** /v1/appInfos/{id}/territoryAgeRatings | 
[**appInfosTerritoryAgeRatingsGetToManyRelationship**](AppInfosApi.md#appInfosTerritoryAgeRatingsGetToManyRelationship) | **GET** /v1/appInfos/{id}/relationships/territoryAgeRatings | 
[**appInfosUpdateInstance**](AppInfosApi.md#appInfosUpdateInstance) | **PATCH** /v1/appInfos/{id} | 



## appInfosAgeRatingDeclarationGetToOneRelated

> AgeRatingDeclarationResponse appInfosAgeRatingDeclarationGetToOneRelated(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AppInfosApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsAgeRatingDeclarations': ["null"] // [String] | the fields to include for returned resources of type ageRatingDeclarations
};
apiInstance.appInfosAgeRatingDeclarationGetToOneRelated(id, opts, (error, data, response) => {
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
 **fieldsAgeRatingDeclarations** | [**[String]**](String.md)| the fields to include for returned resources of type ageRatingDeclarations | [optional] 

### Return type

[**AgeRatingDeclarationResponse**](AgeRatingDeclarationResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## appInfosAgeRatingDeclarationGetToOneRelationship

> AppInfoAgeRatingDeclarationLinkageResponse appInfosAgeRatingDeclarationGetToOneRelationship(id)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AppInfosApi();
let id = "id_example"; // String | the id of the requested resource
apiInstance.appInfosAgeRatingDeclarationGetToOneRelationship(id, (error, data, response) => {
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

[**AppInfoAgeRatingDeclarationLinkageResponse**](AppInfoAgeRatingDeclarationLinkageResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## appInfosAppInfoLocalizationsGetToManyRelated

> AppInfoLocalizationsResponse appInfosAppInfoLocalizationsGetToManyRelated(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AppInfosApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'filterLocale': ["null"], // [String] | filter by attribute 'locale'
  'fieldsAppInfoLocalizations': ["null"], // [String] | the fields to include for returned resources of type appInfoLocalizations
  'fieldsAppInfos': ["null"], // [String] | the fields to include for returned resources of type appInfos
  'limit': 56, // Number | maximum resources per page
  'include': ["null"] // [String] | comma-separated list of relationships to include
};
apiInstance.appInfosAppInfoLocalizationsGetToManyRelated(id, opts, (error, data, response) => {
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
 **filterLocale** | [**[String]**](String.md)| filter by attribute &#39;locale&#39; | [optional] 
 **fieldsAppInfoLocalizations** | [**[String]**](String.md)| the fields to include for returned resources of type appInfoLocalizations | [optional] 
 **fieldsAppInfos** | [**[String]**](String.md)| the fields to include for returned resources of type appInfos | [optional] 
 **limit** | **Number**| maximum resources per page | [optional] 
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 

### Return type

[**AppInfoLocalizationsResponse**](AppInfoLocalizationsResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## appInfosAppInfoLocalizationsGetToManyRelationship

> AppInfoAppInfoLocalizationsLinkagesResponse appInfosAppInfoLocalizationsGetToManyRelationship(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AppInfosApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'limit': 56 // Number | maximum resources per page
};
apiInstance.appInfosAppInfoLocalizationsGetToManyRelationship(id, opts, (error, data, response) => {
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

[**AppInfoAppInfoLocalizationsLinkagesResponse**](AppInfoAppInfoLocalizationsLinkagesResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## appInfosGetInstance

> AppInfoResponse appInfosGetInstance(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AppInfosApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsAppInfos': ["null"], // [String] | the fields to include for returned resources of type appInfos
  'fieldsAgeRatingDeclarations': ["null"], // [String] | the fields to include for returned resources of type ageRatingDeclarations
  'fieldsAppInfoLocalizations': ["null"], // [String] | the fields to include for returned resources of type appInfoLocalizations
  'fieldsAppCategories': ["null"], // [String] | the fields to include for returned resources of type appCategories
  'include': ["null"], // [String] | comma-separated list of relationships to include
  'limitAppInfoLocalizations': 56 // Number | maximum number of related appInfoLocalizations returned (when they are included)
};
apiInstance.appInfosGetInstance(id, opts, (error, data, response) => {
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
 **fieldsAppInfos** | [**[String]**](String.md)| the fields to include for returned resources of type appInfos | [optional] 
 **fieldsAgeRatingDeclarations** | [**[String]**](String.md)| the fields to include for returned resources of type ageRatingDeclarations | [optional] 
 **fieldsAppInfoLocalizations** | [**[String]**](String.md)| the fields to include for returned resources of type appInfoLocalizations | [optional] 
 **fieldsAppCategories** | [**[String]**](String.md)| the fields to include for returned resources of type appCategories | [optional] 
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 
 **limitAppInfoLocalizations** | **Number**| maximum number of related appInfoLocalizations returned (when they are included) | [optional] 

### Return type

[**AppInfoResponse**](AppInfoResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## appInfosPrimaryCategoryGetToOneRelated

> AppCategoryResponse appInfosPrimaryCategoryGetToOneRelated(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AppInfosApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsAppCategories': ["null"], // [String] | the fields to include for returned resources of type appCategories
  'include': ["null"], // [String] | comma-separated list of relationships to include
  'limitSubcategories': 56 // Number | maximum number of related subcategories returned (when they are included)
};
apiInstance.appInfosPrimaryCategoryGetToOneRelated(id, opts, (error, data, response) => {
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


## appInfosPrimaryCategoryGetToOneRelationship

> AppInfoPrimaryCategoryLinkageResponse appInfosPrimaryCategoryGetToOneRelationship(id)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AppInfosApi();
let id = "id_example"; // String | the id of the requested resource
apiInstance.appInfosPrimaryCategoryGetToOneRelationship(id, (error, data, response) => {
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

[**AppInfoPrimaryCategoryLinkageResponse**](AppInfoPrimaryCategoryLinkageResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## appInfosPrimarySubcategoryOneGetToOneRelated

> AppCategoryResponse appInfosPrimarySubcategoryOneGetToOneRelated(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AppInfosApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsAppCategories': ["null"], // [String] | the fields to include for returned resources of type appCategories
  'include': ["null"], // [String] | comma-separated list of relationships to include
  'limitSubcategories': 56 // Number | maximum number of related subcategories returned (when they are included)
};
apiInstance.appInfosPrimarySubcategoryOneGetToOneRelated(id, opts, (error, data, response) => {
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


## appInfosPrimarySubcategoryOneGetToOneRelationship

> AppInfoPrimarySubcategoryOneLinkageResponse appInfosPrimarySubcategoryOneGetToOneRelationship(id)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AppInfosApi();
let id = "id_example"; // String | the id of the requested resource
apiInstance.appInfosPrimarySubcategoryOneGetToOneRelationship(id, (error, data, response) => {
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

[**AppInfoPrimarySubcategoryOneLinkageResponse**](AppInfoPrimarySubcategoryOneLinkageResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## appInfosPrimarySubcategoryTwoGetToOneRelated

> AppCategoryResponse appInfosPrimarySubcategoryTwoGetToOneRelated(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AppInfosApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsAppCategories': ["null"], // [String] | the fields to include for returned resources of type appCategories
  'include': ["null"], // [String] | comma-separated list of relationships to include
  'limitSubcategories': 56 // Number | maximum number of related subcategories returned (when they are included)
};
apiInstance.appInfosPrimarySubcategoryTwoGetToOneRelated(id, opts, (error, data, response) => {
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


## appInfosPrimarySubcategoryTwoGetToOneRelationship

> AppInfoPrimarySubcategoryTwoLinkageResponse appInfosPrimarySubcategoryTwoGetToOneRelationship(id)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AppInfosApi();
let id = "id_example"; // String | the id of the requested resource
apiInstance.appInfosPrimarySubcategoryTwoGetToOneRelationship(id, (error, data, response) => {
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

[**AppInfoPrimarySubcategoryTwoLinkageResponse**](AppInfoPrimarySubcategoryTwoLinkageResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## appInfosSecondaryCategoryGetToOneRelated

> AppCategoryResponse appInfosSecondaryCategoryGetToOneRelated(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AppInfosApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsAppCategories': ["null"], // [String] | the fields to include for returned resources of type appCategories
  'include': ["null"], // [String] | comma-separated list of relationships to include
  'limitSubcategories': 56 // Number | maximum number of related subcategories returned (when they are included)
};
apiInstance.appInfosSecondaryCategoryGetToOneRelated(id, opts, (error, data, response) => {
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


## appInfosSecondaryCategoryGetToOneRelationship

> AppInfoSecondaryCategoryLinkageResponse appInfosSecondaryCategoryGetToOneRelationship(id)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AppInfosApi();
let id = "id_example"; // String | the id of the requested resource
apiInstance.appInfosSecondaryCategoryGetToOneRelationship(id, (error, data, response) => {
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

[**AppInfoSecondaryCategoryLinkageResponse**](AppInfoSecondaryCategoryLinkageResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## appInfosSecondarySubcategoryOneGetToOneRelated

> AppCategoryResponse appInfosSecondarySubcategoryOneGetToOneRelated(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AppInfosApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsAppCategories': ["null"], // [String] | the fields to include for returned resources of type appCategories
  'include': ["null"], // [String] | comma-separated list of relationships to include
  'limitSubcategories': 56 // Number | maximum number of related subcategories returned (when they are included)
};
apiInstance.appInfosSecondarySubcategoryOneGetToOneRelated(id, opts, (error, data, response) => {
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


## appInfosSecondarySubcategoryOneGetToOneRelationship

> AppInfoSecondarySubcategoryOneLinkageResponse appInfosSecondarySubcategoryOneGetToOneRelationship(id)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AppInfosApi();
let id = "id_example"; // String | the id of the requested resource
apiInstance.appInfosSecondarySubcategoryOneGetToOneRelationship(id, (error, data, response) => {
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

[**AppInfoSecondarySubcategoryOneLinkageResponse**](AppInfoSecondarySubcategoryOneLinkageResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## appInfosSecondarySubcategoryTwoGetToOneRelated

> AppCategoryResponse appInfosSecondarySubcategoryTwoGetToOneRelated(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AppInfosApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsAppCategories': ["null"], // [String] | the fields to include for returned resources of type appCategories
  'include': ["null"], // [String] | comma-separated list of relationships to include
  'limitSubcategories': 56 // Number | maximum number of related subcategories returned (when they are included)
};
apiInstance.appInfosSecondarySubcategoryTwoGetToOneRelated(id, opts, (error, data, response) => {
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


## appInfosSecondarySubcategoryTwoGetToOneRelationship

> AppInfoSecondarySubcategoryTwoLinkageResponse appInfosSecondarySubcategoryTwoGetToOneRelationship(id)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AppInfosApi();
let id = "id_example"; // String | the id of the requested resource
apiInstance.appInfosSecondarySubcategoryTwoGetToOneRelationship(id, (error, data, response) => {
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

[**AppInfoSecondarySubcategoryTwoLinkageResponse**](AppInfoSecondarySubcategoryTwoLinkageResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## appInfosTerritoryAgeRatingsGetToManyRelated

> TerritoryAgeRatingsResponse appInfosTerritoryAgeRatingsGetToManyRelated(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AppInfosApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsTerritoryAgeRatings': ["null"], // [String] | the fields to include for returned resources of type territoryAgeRatings
  'fieldsTerritories': ["null"], // [String] | the fields to include for returned resources of type territories
  'limit': 56, // Number | maximum resources per page
  'include': ["null"] // [String] | comma-separated list of relationships to include
};
apiInstance.appInfosTerritoryAgeRatingsGetToManyRelated(id, opts, (error, data, response) => {
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
 **fieldsTerritoryAgeRatings** | [**[String]**](String.md)| the fields to include for returned resources of type territoryAgeRatings | [optional] 
 **fieldsTerritories** | [**[String]**](String.md)| the fields to include for returned resources of type territories | [optional] 
 **limit** | **Number**| maximum resources per page | [optional] 
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 

### Return type

[**TerritoryAgeRatingsResponse**](TerritoryAgeRatingsResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## appInfosTerritoryAgeRatingsGetToManyRelationship

> AppInfoTerritoryAgeRatingsLinkagesResponse appInfosTerritoryAgeRatingsGetToManyRelationship(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AppInfosApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'limit': 56 // Number | maximum resources per page
};
apiInstance.appInfosTerritoryAgeRatingsGetToManyRelationship(id, opts, (error, data, response) => {
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

[**AppInfoTerritoryAgeRatingsLinkagesResponse**](AppInfoTerritoryAgeRatingsLinkagesResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## appInfosUpdateInstance

> AppInfoResponse appInfosUpdateInstance(id, appInfoUpdateRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AppInfosApi();
let id = "id_example"; // String | the id of the requested resource
let appInfoUpdateRequest = new AppStoreConnectApi.AppInfoUpdateRequest(); // AppInfoUpdateRequest | AppInfo representation
apiInstance.appInfosUpdateInstance(id, appInfoUpdateRequest, (error, data, response) => {
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
 **appInfoUpdateRequest** | [**AppInfoUpdateRequest**](AppInfoUpdateRequest.md)| AppInfo representation | 

### Return type

[**AppInfoResponse**](AppInfoResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

