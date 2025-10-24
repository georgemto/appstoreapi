# AppStoreConnectApi.ProfilesApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**profilesBundleIdGetToOneRelated**](ProfilesApi.md#profilesBundleIdGetToOneRelated) | **GET** /v1/profiles/{id}/bundleId | 
[**profilesBundleIdGetToOneRelationship**](ProfilesApi.md#profilesBundleIdGetToOneRelationship) | **GET** /v1/profiles/{id}/relationships/bundleId | 
[**profilesCertificatesGetToManyRelated**](ProfilesApi.md#profilesCertificatesGetToManyRelated) | **GET** /v1/profiles/{id}/certificates | 
[**profilesCertificatesGetToManyRelationship**](ProfilesApi.md#profilesCertificatesGetToManyRelationship) | **GET** /v1/profiles/{id}/relationships/certificates | 
[**profilesCreateInstance**](ProfilesApi.md#profilesCreateInstance) | **POST** /v1/profiles | 
[**profilesDeleteInstance**](ProfilesApi.md#profilesDeleteInstance) | **DELETE** /v1/profiles/{id} | 
[**profilesDevicesGetToManyRelated**](ProfilesApi.md#profilesDevicesGetToManyRelated) | **GET** /v1/profiles/{id}/devices | 
[**profilesDevicesGetToManyRelationship**](ProfilesApi.md#profilesDevicesGetToManyRelationship) | **GET** /v1/profiles/{id}/relationships/devices | 
[**profilesGetCollection**](ProfilesApi.md#profilesGetCollection) | **GET** /v1/profiles | 
[**profilesGetInstance**](ProfilesApi.md#profilesGetInstance) | **GET** /v1/profiles/{id} | 



## profilesBundleIdGetToOneRelated

> BundleIdWithoutIncludesResponse profilesBundleIdGetToOneRelated(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.ProfilesApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsBundleIds': ["null"] // [String] | the fields to include for returned resources of type bundleIds
};
apiInstance.profilesBundleIdGetToOneRelated(id, opts, (error, data, response) => {
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

### Return type

[**BundleIdWithoutIncludesResponse**](BundleIdWithoutIncludesResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## profilesBundleIdGetToOneRelationship

> ProfileBundleIdLinkageResponse profilesBundleIdGetToOneRelationship(id)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.ProfilesApi();
let id = "id_example"; // String | the id of the requested resource
apiInstance.profilesBundleIdGetToOneRelationship(id, (error, data, response) => {
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

[**ProfileBundleIdLinkageResponse**](ProfileBundleIdLinkageResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## profilesCertificatesGetToManyRelated

> CertificatesWithoutIncludesResponse profilesCertificatesGetToManyRelated(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.ProfilesApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsCertificates': ["null"], // [String] | the fields to include for returned resources of type certificates
  'limit': 56 // Number | maximum resources per page
};
apiInstance.profilesCertificatesGetToManyRelated(id, opts, (error, data, response) => {
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
 **fieldsCertificates** | [**[String]**](String.md)| the fields to include for returned resources of type certificates | [optional] 
 **limit** | **Number**| maximum resources per page | [optional] 

### Return type

[**CertificatesWithoutIncludesResponse**](CertificatesWithoutIncludesResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## profilesCertificatesGetToManyRelationship

> ProfileCertificatesLinkagesResponse profilesCertificatesGetToManyRelationship(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.ProfilesApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'limit': 56 // Number | maximum resources per page
};
apiInstance.profilesCertificatesGetToManyRelationship(id, opts, (error, data, response) => {
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

[**ProfileCertificatesLinkagesResponse**](ProfileCertificatesLinkagesResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## profilesCreateInstance

> ProfileResponse profilesCreateInstance(profileCreateRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.ProfilesApi();
let profileCreateRequest = new AppStoreConnectApi.ProfileCreateRequest(); // ProfileCreateRequest | Profile representation
apiInstance.profilesCreateInstance(profileCreateRequest, (error, data, response) => {
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
 **profileCreateRequest** | [**ProfileCreateRequest**](ProfileCreateRequest.md)| Profile representation | 

### Return type

[**ProfileResponse**](ProfileResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## profilesDeleteInstance

> profilesDeleteInstance(id)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.ProfilesApi();
let id = "id_example"; // String | the id of the requested resource
apiInstance.profilesDeleteInstance(id, (error, data, response) => {
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


## profilesDevicesGetToManyRelated

> DevicesWithoutIncludesResponse profilesDevicesGetToManyRelated(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.ProfilesApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsDevices': ["null"], // [String] | the fields to include for returned resources of type devices
  'limit': 56 // Number | maximum resources per page
};
apiInstance.profilesDevicesGetToManyRelated(id, opts, (error, data, response) => {
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
 **limit** | **Number**| maximum resources per page | [optional] 

### Return type

[**DevicesWithoutIncludesResponse**](DevicesWithoutIncludesResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## profilesDevicesGetToManyRelationship

> ProfileDevicesLinkagesResponse profilesDevicesGetToManyRelationship(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.ProfilesApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'limit': 56 // Number | maximum resources per page
};
apiInstance.profilesDevicesGetToManyRelationship(id, opts, (error, data, response) => {
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

[**ProfileDevicesLinkagesResponse**](ProfileDevicesLinkagesResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## profilesGetCollection

> ProfilesResponse profilesGetCollection(opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.ProfilesApi();
let opts = {
  'filterName': ["null"], // [String] | filter by attribute 'name'
  'filterProfileType': ["null"], // [String] | filter by attribute 'profileType'
  'filterProfileState': ["null"], // [String] | filter by attribute 'profileState'
  'filterId': ["null"], // [String] | filter by id(s)
  'sort': ["null"], // [String] | comma-separated list of sort expressions; resources will be sorted as specified
  'fieldsProfiles': ["null"], // [String] | the fields to include for returned resources of type profiles
  'fieldsBundleIds': ["null"], // [String] | the fields to include for returned resources of type bundleIds
  'fieldsDevices': ["null"], // [String] | the fields to include for returned resources of type devices
  'fieldsCertificates': ["null"], // [String] | the fields to include for returned resources of type certificates
  'limit': 56, // Number | maximum resources per page
  'include': ["null"], // [String] | comma-separated list of relationships to include
  'limitCertificates': 56, // Number | maximum number of related certificates returned (when they are included)
  'limitDevices': 56 // Number | maximum number of related devices returned (when they are included)
};
apiInstance.profilesGetCollection(opts, (error, data, response) => {
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
 **filterProfileType** | [**[String]**](String.md)| filter by attribute &#39;profileType&#39; | [optional] 
 **filterProfileState** | [**[String]**](String.md)| filter by attribute &#39;profileState&#39; | [optional] 
 **filterId** | [**[String]**](String.md)| filter by id(s) | [optional] 
 **sort** | [**[String]**](String.md)| comma-separated list of sort expressions; resources will be sorted as specified | [optional] 
 **fieldsProfiles** | [**[String]**](String.md)| the fields to include for returned resources of type profiles | [optional] 
 **fieldsBundleIds** | [**[String]**](String.md)| the fields to include for returned resources of type bundleIds | [optional] 
 **fieldsDevices** | [**[String]**](String.md)| the fields to include for returned resources of type devices | [optional] 
 **fieldsCertificates** | [**[String]**](String.md)| the fields to include for returned resources of type certificates | [optional] 
 **limit** | **Number**| maximum resources per page | [optional] 
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 
 **limitCertificates** | **Number**| maximum number of related certificates returned (when they are included) | [optional] 
 **limitDevices** | **Number**| maximum number of related devices returned (when they are included) | [optional] 

### Return type

[**ProfilesResponse**](ProfilesResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## profilesGetInstance

> ProfileResponse profilesGetInstance(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.ProfilesApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsProfiles': ["null"], // [String] | the fields to include for returned resources of type profiles
  'fieldsBundleIds': ["null"], // [String] | the fields to include for returned resources of type bundleIds
  'fieldsDevices': ["null"], // [String] | the fields to include for returned resources of type devices
  'fieldsCertificates': ["null"], // [String] | the fields to include for returned resources of type certificates
  'include': ["null"], // [String] | comma-separated list of relationships to include
  'limitCertificates': 56, // Number | maximum number of related certificates returned (when they are included)
  'limitDevices': 56 // Number | maximum number of related devices returned (when they are included)
};
apiInstance.profilesGetInstance(id, opts, (error, data, response) => {
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
 **fieldsBundleIds** | [**[String]**](String.md)| the fields to include for returned resources of type bundleIds | [optional] 
 **fieldsDevices** | [**[String]**](String.md)| the fields to include for returned resources of type devices | [optional] 
 **fieldsCertificates** | [**[String]**](String.md)| the fields to include for returned resources of type certificates | [optional] 
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 
 **limitCertificates** | **Number**| maximum number of related certificates returned (when they are included) | [optional] 
 **limitDevices** | **Number**| maximum number of related devices returned (when they are included) | [optional] 

### Return type

[**ProfileResponse**](ProfileResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

