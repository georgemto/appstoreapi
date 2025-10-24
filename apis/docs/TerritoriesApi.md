# AppStoreConnectApi.TerritoriesApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**territoriesGetCollection**](TerritoriesApi.md#territoriesGetCollection) | **GET** /v1/territories | 



## territoriesGetCollection

> TerritoriesResponse territoriesGetCollection(opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.TerritoriesApi();
let opts = {
  'fieldsTerritories': ["null"], // [String] | the fields to include for returned resources of type territories
  'limit': 56 // Number | maximum resources per page
};
apiInstance.territoriesGetCollection(opts, (error, data, response) => {
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
 **fieldsTerritories** | [**[String]**](String.md)| the fields to include for returned resources of type territories | [optional] 
 **limit** | **Number**| maximum resources per page | [optional] 

### Return type

[**TerritoriesResponse**](TerritoriesResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

