# AppStoreConnectApi.ActorsApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**actorsGetCollection**](ActorsApi.md#actorsGetCollection) | **GET** /v1/actors | 
[**actorsGetInstance**](ActorsApi.md#actorsGetInstance) | **GET** /v1/actors/{id} | 



## actorsGetCollection

> ActorsResponse actorsGetCollection(filterId, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.ActorsApi();
let filterId = ["null"]; // [String] | filter by id(s)
let opts = {
  'fieldsActors': ["null"], // [String] | the fields to include for returned resources of type actors
  'limit': 56 // Number | maximum resources per page
};
apiInstance.actorsGetCollection(filterId, opts, (error, data, response) => {
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
 **filterId** | [**[String]**](String.md)| filter by id(s) | 
 **fieldsActors** | [**[String]**](String.md)| the fields to include for returned resources of type actors | [optional] 
 **limit** | **Number**| maximum resources per page | [optional] 

### Return type

[**ActorsResponse**](ActorsResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## actorsGetInstance

> ActorResponse actorsGetInstance(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.ActorsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsActors': ["null"] // [String] | the fields to include for returned resources of type actors
};
apiInstance.actorsGetInstance(id, opts, (error, data, response) => {
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
 **fieldsActors** | [**[String]**](String.md)| the fields to include for returned resources of type actors | [optional] 

### Return type

[**ActorResponse**](ActorResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

