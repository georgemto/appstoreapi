# AppStoreConnectApi.AlternativeDistributionDomainsApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**alternativeDistributionDomainsCreateInstance**](AlternativeDistributionDomainsApi.md#alternativeDistributionDomainsCreateInstance) | **POST** /v1/alternativeDistributionDomains | 
[**alternativeDistributionDomainsDeleteInstance**](AlternativeDistributionDomainsApi.md#alternativeDistributionDomainsDeleteInstance) | **DELETE** /v1/alternativeDistributionDomains/{id} | 
[**alternativeDistributionDomainsGetCollection**](AlternativeDistributionDomainsApi.md#alternativeDistributionDomainsGetCollection) | **GET** /v1/alternativeDistributionDomains | 
[**alternativeDistributionDomainsGetInstance**](AlternativeDistributionDomainsApi.md#alternativeDistributionDomainsGetInstance) | **GET** /v1/alternativeDistributionDomains/{id} | 



## alternativeDistributionDomainsCreateInstance

> AlternativeDistributionDomainResponse alternativeDistributionDomainsCreateInstance(alternativeDistributionDomainCreateRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AlternativeDistributionDomainsApi();
let alternativeDistributionDomainCreateRequest = new AppStoreConnectApi.AlternativeDistributionDomainCreateRequest(); // AlternativeDistributionDomainCreateRequest | AlternativeDistributionDomain representation
apiInstance.alternativeDistributionDomainsCreateInstance(alternativeDistributionDomainCreateRequest, (error, data, response) => {
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
 **alternativeDistributionDomainCreateRequest** | [**AlternativeDistributionDomainCreateRequest**](AlternativeDistributionDomainCreateRequest.md)| AlternativeDistributionDomain representation | 

### Return type

[**AlternativeDistributionDomainResponse**](AlternativeDistributionDomainResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## alternativeDistributionDomainsDeleteInstance

> alternativeDistributionDomainsDeleteInstance(id)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AlternativeDistributionDomainsApi();
let id = "id_example"; // String | the id of the requested resource
apiInstance.alternativeDistributionDomainsDeleteInstance(id, (error, data, response) => {
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


## alternativeDistributionDomainsGetCollection

> AlternativeDistributionDomainsResponse alternativeDistributionDomainsGetCollection(opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AlternativeDistributionDomainsApi();
let opts = {
  'fieldsAlternativeDistributionDomains': ["null"], // [String] | the fields to include for returned resources of type alternativeDistributionDomains
  'limit': 56 // Number | maximum resources per page
};
apiInstance.alternativeDistributionDomainsGetCollection(opts, (error, data, response) => {
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
 **fieldsAlternativeDistributionDomains** | [**[String]**](String.md)| the fields to include for returned resources of type alternativeDistributionDomains | [optional] 
 **limit** | **Number**| maximum resources per page | [optional] 

### Return type

[**AlternativeDistributionDomainsResponse**](AlternativeDistributionDomainsResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## alternativeDistributionDomainsGetInstance

> AlternativeDistributionDomainResponse alternativeDistributionDomainsGetInstance(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AlternativeDistributionDomainsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsAlternativeDistributionDomains': ["null"] // [String] | the fields to include for returned resources of type alternativeDistributionDomains
};
apiInstance.alternativeDistributionDomainsGetInstance(id, opts, (error, data, response) => {
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
 **fieldsAlternativeDistributionDomains** | [**[String]**](String.md)| the fields to include for returned resources of type alternativeDistributionDomains | [optional] 

### Return type

[**AlternativeDistributionDomainResponse**](AlternativeDistributionDomainResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

