# AppStoreConnectApi.MerchantIdsApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**merchantIdsCertificatesGetToManyRelated**](MerchantIdsApi.md#merchantIdsCertificatesGetToManyRelated) | **GET** /v1/merchantIds/{id}/certificates | 
[**merchantIdsCertificatesGetToManyRelationship**](MerchantIdsApi.md#merchantIdsCertificatesGetToManyRelationship) | **GET** /v1/merchantIds/{id}/relationships/certificates | 
[**merchantIdsCreateInstance**](MerchantIdsApi.md#merchantIdsCreateInstance) | **POST** /v1/merchantIds | 
[**merchantIdsDeleteInstance**](MerchantIdsApi.md#merchantIdsDeleteInstance) | **DELETE** /v1/merchantIds/{id} | 
[**merchantIdsGetCollection**](MerchantIdsApi.md#merchantIdsGetCollection) | **GET** /v1/merchantIds | 
[**merchantIdsGetInstance**](MerchantIdsApi.md#merchantIdsGetInstance) | **GET** /v1/merchantIds/{id} | 
[**merchantIdsUpdateInstance**](MerchantIdsApi.md#merchantIdsUpdateInstance) | **PATCH** /v1/merchantIds/{id} | 



## merchantIdsCertificatesGetToManyRelated

> CertificatesResponse merchantIdsCertificatesGetToManyRelated(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.MerchantIdsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'filterDisplayName': ["null"], // [String] | filter by attribute 'displayName'
  'filterCertificateType': ["null"], // [String] | filter by attribute 'certificateType'
  'filterSerialNumber': ["null"], // [String] | filter by attribute 'serialNumber'
  'filterId': ["null"], // [String] | filter by id(s)
  'sort': ["null"], // [String] | comma-separated list of sort expressions; resources will be sorted as specified
  'fieldsCertificates': ["null"], // [String] | the fields to include for returned resources of type certificates
  'fieldsPassTypeIds': ["null"], // [String] | the fields to include for returned resources of type passTypeIds
  'limit': 56, // Number | maximum resources per page
  'include': ["null"] // [String] | comma-separated list of relationships to include
};
apiInstance.merchantIdsCertificatesGetToManyRelated(id, opts, (error, data, response) => {
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
 **filterDisplayName** | [**[String]**](String.md)| filter by attribute &#39;displayName&#39; | [optional] 
 **filterCertificateType** | [**[String]**](String.md)| filter by attribute &#39;certificateType&#39; | [optional] 
 **filterSerialNumber** | [**[String]**](String.md)| filter by attribute &#39;serialNumber&#39; | [optional] 
 **filterId** | [**[String]**](String.md)| filter by id(s) | [optional] 
 **sort** | [**[String]**](String.md)| comma-separated list of sort expressions; resources will be sorted as specified | [optional] 
 **fieldsCertificates** | [**[String]**](String.md)| the fields to include for returned resources of type certificates | [optional] 
 **fieldsPassTypeIds** | [**[String]**](String.md)| the fields to include for returned resources of type passTypeIds | [optional] 
 **limit** | **Number**| maximum resources per page | [optional] 
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 

### Return type

[**CertificatesResponse**](CertificatesResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## merchantIdsCertificatesGetToManyRelationship

> MerchantIdCertificatesLinkagesResponse merchantIdsCertificatesGetToManyRelationship(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.MerchantIdsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'limit': 56 // Number | maximum resources per page
};
apiInstance.merchantIdsCertificatesGetToManyRelationship(id, opts, (error, data, response) => {
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

[**MerchantIdCertificatesLinkagesResponse**](MerchantIdCertificatesLinkagesResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## merchantIdsCreateInstance

> MerchantIdResponse merchantIdsCreateInstance(merchantIdCreateRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.MerchantIdsApi();
let merchantIdCreateRequest = new AppStoreConnectApi.MerchantIdCreateRequest(); // MerchantIdCreateRequest | MerchantId representation
apiInstance.merchantIdsCreateInstance(merchantIdCreateRequest, (error, data, response) => {
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
 **merchantIdCreateRequest** | [**MerchantIdCreateRequest**](MerchantIdCreateRequest.md)| MerchantId representation | 

### Return type

[**MerchantIdResponse**](MerchantIdResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## merchantIdsDeleteInstance

> merchantIdsDeleteInstance(id)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.MerchantIdsApi();
let id = "id_example"; // String | the id of the requested resource
apiInstance.merchantIdsDeleteInstance(id, (error, data, response) => {
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


## merchantIdsGetCollection

> MerchantIdsResponse merchantIdsGetCollection(opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.MerchantIdsApi();
let opts = {
  'filterName': ["null"], // [String] | filter by attribute 'name'
  'filterIdentifier': ["null"], // [String] | filter by attribute 'identifier'
  'sort': ["null"], // [String] | comma-separated list of sort expressions; resources will be sorted as specified
  'fieldsMerchantIds': ["null"], // [String] | the fields to include for returned resources of type merchantIds
  'fieldsCertificates': ["null"], // [String] | the fields to include for returned resources of type certificates
  'limit': 56, // Number | maximum resources per page
  'include': ["null"], // [String] | comma-separated list of relationships to include
  'limitCertificates': 56 // Number | maximum number of related certificates returned (when they are included)
};
apiInstance.merchantIdsGetCollection(opts, (error, data, response) => {
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
 **filterIdentifier** | [**[String]**](String.md)| filter by attribute &#39;identifier&#39; | [optional] 
 **sort** | [**[String]**](String.md)| comma-separated list of sort expressions; resources will be sorted as specified | [optional] 
 **fieldsMerchantIds** | [**[String]**](String.md)| the fields to include for returned resources of type merchantIds | [optional] 
 **fieldsCertificates** | [**[String]**](String.md)| the fields to include for returned resources of type certificates | [optional] 
 **limit** | **Number**| maximum resources per page | [optional] 
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 
 **limitCertificates** | **Number**| maximum number of related certificates returned (when they are included) | [optional] 

### Return type

[**MerchantIdsResponse**](MerchantIdsResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## merchantIdsGetInstance

> MerchantIdResponse merchantIdsGetInstance(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.MerchantIdsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsMerchantIds': ["null"], // [String] | the fields to include for returned resources of type merchantIds
  'fieldsCertificates': ["null"], // [String] | the fields to include for returned resources of type certificates
  'include': ["null"], // [String] | comma-separated list of relationships to include
  'limitCertificates': 56 // Number | maximum number of related certificates returned (when they are included)
};
apiInstance.merchantIdsGetInstance(id, opts, (error, data, response) => {
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
 **fieldsMerchantIds** | [**[String]**](String.md)| the fields to include for returned resources of type merchantIds | [optional] 
 **fieldsCertificates** | [**[String]**](String.md)| the fields to include for returned resources of type certificates | [optional] 
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 
 **limitCertificates** | **Number**| maximum number of related certificates returned (when they are included) | [optional] 

### Return type

[**MerchantIdResponse**](MerchantIdResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## merchantIdsUpdateInstance

> MerchantIdResponse merchantIdsUpdateInstance(id, merchantIdUpdateRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.MerchantIdsApi();
let id = "id_example"; // String | the id of the requested resource
let merchantIdUpdateRequest = new AppStoreConnectApi.MerchantIdUpdateRequest(); // MerchantIdUpdateRequest | MerchantId representation
apiInstance.merchantIdsUpdateInstance(id, merchantIdUpdateRequest, (error, data, response) => {
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
 **merchantIdUpdateRequest** | [**MerchantIdUpdateRequest**](MerchantIdUpdateRequest.md)| MerchantId representation | 

### Return type

[**MerchantIdResponse**](MerchantIdResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

