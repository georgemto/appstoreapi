# AppStoreConnectApi.BundleIdsApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**bundleIdsAppGetToOneRelated**](BundleIdsApi.md#bundleIdsAppGetToOneRelated) | **GET** /v1/bundleIds/{id}/app | 
[**bundleIdsAppGetToOneRelationship**](BundleIdsApi.md#bundleIdsAppGetToOneRelationship) | **GET** /v1/bundleIds/{id}/relationships/app | 
[**bundleIdsBundleIdCapabilitiesGetToManyRelated**](BundleIdsApi.md#bundleIdsBundleIdCapabilitiesGetToManyRelated) | **GET** /v1/bundleIds/{id}/bundleIdCapabilities | 
[**bundleIdsBundleIdCapabilitiesGetToManyRelationship**](BundleIdsApi.md#bundleIdsBundleIdCapabilitiesGetToManyRelationship) | **GET** /v1/bundleIds/{id}/relationships/bundleIdCapabilities | 
[**bundleIdsCreateInstance**](BundleIdsApi.md#bundleIdsCreateInstance) | **POST** /v1/bundleIds | 
[**bundleIdsDeleteInstance**](BundleIdsApi.md#bundleIdsDeleteInstance) | **DELETE** /v1/bundleIds/{id} | 
[**bundleIdsGetCollection**](BundleIdsApi.md#bundleIdsGetCollection) | **GET** /v1/bundleIds | 
[**bundleIdsGetInstance**](BundleIdsApi.md#bundleIdsGetInstance) | **GET** /v1/bundleIds/{id} | 
[**bundleIdsProfilesGetToManyRelated**](BundleIdsApi.md#bundleIdsProfilesGetToManyRelated) | **GET** /v1/bundleIds/{id}/profiles | 
[**bundleIdsProfilesGetToManyRelationship**](BundleIdsApi.md#bundleIdsProfilesGetToManyRelationship) | **GET** /v1/bundleIds/{id}/relationships/profiles | 
[**bundleIdsUpdateInstance**](BundleIdsApi.md#bundleIdsUpdateInstance) | **PATCH** /v1/bundleIds/{id} | 



## bundleIdsAppGetToOneRelated

> AppWithoutIncludesResponse bundleIdsAppGetToOneRelated(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.BundleIdsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsApps': ["null"] // [String] | the fields to include for returned resources of type apps
};
apiInstance.bundleIdsAppGetToOneRelated(id, opts, (error, data, response) => {
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


## bundleIdsAppGetToOneRelationship

> BundleIdAppLinkageResponse bundleIdsAppGetToOneRelationship(id)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.BundleIdsApi();
let id = "id_example"; // String | the id of the requested resource
apiInstance.bundleIdsAppGetToOneRelationship(id, (error, data, response) => {
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

[**BundleIdAppLinkageResponse**](BundleIdAppLinkageResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## bundleIdsBundleIdCapabilitiesGetToManyRelated

> BundleIdCapabilitiesWithoutIncludesResponse bundleIdsBundleIdCapabilitiesGetToManyRelated(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.BundleIdsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsBundleIdCapabilities': ["null"], // [String] | the fields to include for returned resources of type bundleIdCapabilities
  'limit': 56 // Number | maximum resources per page
};
apiInstance.bundleIdsBundleIdCapabilitiesGetToManyRelated(id, opts, (error, data, response) => {
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
 **fieldsBundleIdCapabilities** | [**[String]**](String.md)| the fields to include for returned resources of type bundleIdCapabilities | [optional] 
 **limit** | **Number**| maximum resources per page | [optional] 

### Return type

[**BundleIdCapabilitiesWithoutIncludesResponse**](BundleIdCapabilitiesWithoutIncludesResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## bundleIdsBundleIdCapabilitiesGetToManyRelationship

> BundleIdBundleIdCapabilitiesLinkagesResponse bundleIdsBundleIdCapabilitiesGetToManyRelationship(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.BundleIdsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'limit': 56 // Number | maximum resources per page
};
apiInstance.bundleIdsBundleIdCapabilitiesGetToManyRelationship(id, opts, (error, data, response) => {
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

[**BundleIdBundleIdCapabilitiesLinkagesResponse**](BundleIdBundleIdCapabilitiesLinkagesResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## bundleIdsCreateInstance

> BundleIdResponse bundleIdsCreateInstance(bundleIdCreateRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.BundleIdsApi();
let bundleIdCreateRequest = new AppStoreConnectApi.BundleIdCreateRequest(); // BundleIdCreateRequest | BundleId representation
apiInstance.bundleIdsCreateInstance(bundleIdCreateRequest, (error, data, response) => {
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
 **bundleIdCreateRequest** | [**BundleIdCreateRequest**](BundleIdCreateRequest.md)| BundleId representation | 

### Return type

[**BundleIdResponse**](BundleIdResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## bundleIdsDeleteInstance

> bundleIdsDeleteInstance(id)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.BundleIdsApi();
let id = "id_example"; // String | the id of the requested resource
apiInstance.bundleIdsDeleteInstance(id, (error, data, response) => {
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


## bundleIdsGetCollection

> BundleIdsResponse bundleIdsGetCollection(opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.BundleIdsApi();
let opts = {
  'filterName': ["null"], // [String] | filter by attribute 'name'
  'filterPlatform': ["null"], // [String] | filter by attribute 'platform'
  'filterIdentifier': ["null"], // [String] | filter by attribute 'identifier'
  'filterSeedId': ["null"], // [String] | filter by attribute 'seedId'
  'filterId': ["null"], // [String] | filter by id(s)
  'sort': ["null"], // [String] | comma-separated list of sort expressions; resources will be sorted as specified
  'fieldsBundleIds': ["null"], // [String] | the fields to include for returned resources of type bundleIds
  'fieldsProfiles': ["null"], // [String] | the fields to include for returned resources of type profiles
  'fieldsBundleIdCapabilities': ["null"], // [String] | the fields to include for returned resources of type bundleIdCapabilities
  'fieldsApps': ["null"], // [String] | the fields to include for returned resources of type apps
  'limit': 56, // Number | maximum resources per page
  'include': ["null"], // [String] | comma-separated list of relationships to include
  'limitBundleIdCapabilities': 56, // Number | maximum number of related bundleIdCapabilities returned (when they are included)
  'limitProfiles': 56 // Number | maximum number of related profiles returned (when they are included)
};
apiInstance.bundleIdsGetCollection(opts, (error, data, response) => {
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
 **filterIdentifier** | [**[String]**](String.md)| filter by attribute &#39;identifier&#39; | [optional] 
 **filterSeedId** | [**[String]**](String.md)| filter by attribute &#39;seedId&#39; | [optional] 
 **filterId** | [**[String]**](String.md)| filter by id(s) | [optional] 
 **sort** | [**[String]**](String.md)| comma-separated list of sort expressions; resources will be sorted as specified | [optional] 
 **fieldsBundleIds** | [**[String]**](String.md)| the fields to include for returned resources of type bundleIds | [optional] 
 **fieldsProfiles** | [**[String]**](String.md)| the fields to include for returned resources of type profiles | [optional] 
 **fieldsBundleIdCapabilities** | [**[String]**](String.md)| the fields to include for returned resources of type bundleIdCapabilities | [optional] 
 **fieldsApps** | [**[String]**](String.md)| the fields to include for returned resources of type apps | [optional] 
 **limit** | **Number**| maximum resources per page | [optional] 
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 
 **limitBundleIdCapabilities** | **Number**| maximum number of related bundleIdCapabilities returned (when they are included) | [optional] 
 **limitProfiles** | **Number**| maximum number of related profiles returned (when they are included) | [optional] 

### Return type

[**BundleIdsResponse**](BundleIdsResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## bundleIdsGetInstance

> BundleIdResponse bundleIdsGetInstance(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.BundleIdsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsBundleIds': ["null"], // [String] | the fields to include for returned resources of type bundleIds
  'fieldsProfiles': ["null"], // [String] | the fields to include for returned resources of type profiles
  'fieldsBundleIdCapabilities': ["null"], // [String] | the fields to include for returned resources of type bundleIdCapabilities
  'fieldsApps': ["null"], // [String] | the fields to include for returned resources of type apps
  'include': ["null"], // [String] | comma-separated list of relationships to include
  'limitBundleIdCapabilities': 56, // Number | maximum number of related bundleIdCapabilities returned (when they are included)
  'limitProfiles': 56 // Number | maximum number of related profiles returned (when they are included)
};
apiInstance.bundleIdsGetInstance(id, opts, (error, data, response) => {
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
 **fieldsBundleIds** | [**[String]**](String.md)| the fields to include for returned resources of type bundleIds | [optional] 
 **fieldsProfiles** | [**[String]**](String.md)| the fields to include for returned resources of type profiles | [optional] 
 **fieldsBundleIdCapabilities** | [**[String]**](String.md)| the fields to include for returned resources of type bundleIdCapabilities | [optional] 
 **fieldsApps** | [**[String]**](String.md)| the fields to include for returned resources of type apps | [optional] 
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 
 **limitBundleIdCapabilities** | **Number**| maximum number of related bundleIdCapabilities returned (when they are included) | [optional] 
 **limitProfiles** | **Number**| maximum number of related profiles returned (when they are included) | [optional] 

### Return type

[**BundleIdResponse**](BundleIdResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## bundleIdsProfilesGetToManyRelated

> ProfilesWithoutIncludesResponse bundleIdsProfilesGetToManyRelated(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.BundleIdsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsProfiles': ["null"], // [String] | the fields to include for returned resources of type profiles
  'limit': 56 // Number | maximum resources per page
};
apiInstance.bundleIdsProfilesGetToManyRelated(id, opts, (error, data, response) => {
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
 **fieldsProfiles** | [**[String]**](String.md)| the fields to include for returned resources of type profiles | [optional] 
 **limit** | **Number**| maximum resources per page | [optional] 

### Return type

[**ProfilesWithoutIncludesResponse**](ProfilesWithoutIncludesResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## bundleIdsProfilesGetToManyRelationship

> BundleIdProfilesLinkagesResponse bundleIdsProfilesGetToManyRelationship(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.BundleIdsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'limit': 56 // Number | maximum resources per page
};
apiInstance.bundleIdsProfilesGetToManyRelationship(id, opts, (error, data, response) => {
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

[**BundleIdProfilesLinkagesResponse**](BundleIdProfilesLinkagesResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## bundleIdsUpdateInstance

> BundleIdResponse bundleIdsUpdateInstance(id, bundleIdUpdateRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.BundleIdsApi();
let id = "id_example"; // String | the id of the requested resource
let bundleIdUpdateRequest = new AppStoreConnectApi.BundleIdUpdateRequest(); // BundleIdUpdateRequest | BundleId representation
apiInstance.bundleIdsUpdateInstance(id, bundleIdUpdateRequest, (error, data, response) => {
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
 **bundleIdUpdateRequest** | [**BundleIdUpdateRequest**](BundleIdUpdateRequest.md)| BundleId representation | 

### Return type

[**BundleIdResponse**](BundleIdResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

