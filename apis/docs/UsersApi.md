# AppStoreConnectApi.UsersApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**usersDeleteInstance**](UsersApi.md#usersDeleteInstance) | **DELETE** /v1/users/{id} | 
[**usersGetCollection**](UsersApi.md#usersGetCollection) | **GET** /v1/users | 
[**usersGetInstance**](UsersApi.md#usersGetInstance) | **GET** /v1/users/{id} | 
[**usersUpdateInstance**](UsersApi.md#usersUpdateInstance) | **PATCH** /v1/users/{id} | 
[**usersVisibleAppsCreateToManyRelationship**](UsersApi.md#usersVisibleAppsCreateToManyRelationship) | **POST** /v1/users/{id}/relationships/visibleApps | 
[**usersVisibleAppsDeleteToManyRelationship**](UsersApi.md#usersVisibleAppsDeleteToManyRelationship) | **DELETE** /v1/users/{id}/relationships/visibleApps | 
[**usersVisibleAppsGetToManyRelated**](UsersApi.md#usersVisibleAppsGetToManyRelated) | **GET** /v1/users/{id}/visibleApps | 
[**usersVisibleAppsGetToManyRelationship**](UsersApi.md#usersVisibleAppsGetToManyRelationship) | **GET** /v1/users/{id}/relationships/visibleApps | 
[**usersVisibleAppsReplaceToManyRelationship**](UsersApi.md#usersVisibleAppsReplaceToManyRelationship) | **PATCH** /v1/users/{id}/relationships/visibleApps | 



## usersDeleteInstance

> usersDeleteInstance(id)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.UsersApi();
let id = "id_example"; // String | the id of the requested resource
apiInstance.usersDeleteInstance(id, (error, data, response) => {
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


## usersGetCollection

> UsersResponse usersGetCollection(opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.UsersApi();
let opts = {
  'filterUsername': ["null"], // [String] | filter by attribute 'username'
  'filterRoles': ["null"], // [String] | filter by attribute 'roles'
  'filterVisibleApps': ["null"], // [String] | filter by id(s) of related 'visibleApps'
  'sort': ["null"], // [String] | comma-separated list of sort expressions; resources will be sorted as specified
  'fieldsUsers': ["null"], // [String] | the fields to include for returned resources of type users
  'fieldsApps': ["null"], // [String] | the fields to include for returned resources of type apps
  'limit': 56, // Number | maximum resources per page
  'include': ["null"], // [String] | comma-separated list of relationships to include
  'limitVisibleApps': 56 // Number | maximum number of related visibleApps returned (when they are included)
};
apiInstance.usersGetCollection(opts, (error, data, response) => {
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
 **filterUsername** | [**[String]**](String.md)| filter by attribute &#39;username&#39; | [optional] 
 **filterRoles** | [**[String]**](String.md)| filter by attribute &#39;roles&#39; | [optional] 
 **filterVisibleApps** | [**[String]**](String.md)| filter by id(s) of related &#39;visibleApps&#39; | [optional] 
 **sort** | [**[String]**](String.md)| comma-separated list of sort expressions; resources will be sorted as specified | [optional] 
 **fieldsUsers** | [**[String]**](String.md)| the fields to include for returned resources of type users | [optional] 
 **fieldsApps** | [**[String]**](String.md)| the fields to include for returned resources of type apps | [optional] 
 **limit** | **Number**| maximum resources per page | [optional] 
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 
 **limitVisibleApps** | **Number**| maximum number of related visibleApps returned (when they are included) | [optional] 

### Return type

[**UsersResponse**](UsersResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## usersGetInstance

> UserResponse usersGetInstance(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.UsersApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsUsers': ["null"], // [String] | the fields to include for returned resources of type users
  'fieldsApps': ["null"], // [String] | the fields to include for returned resources of type apps
  'include': ["null"], // [String] | comma-separated list of relationships to include
  'limitVisibleApps': 56 // Number | maximum number of related visibleApps returned (when they are included)
};
apiInstance.usersGetInstance(id, opts, (error, data, response) => {
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
 **fieldsUsers** | [**[String]**](String.md)| the fields to include for returned resources of type users | [optional] 
 **fieldsApps** | [**[String]**](String.md)| the fields to include for returned resources of type apps | [optional] 
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 
 **limitVisibleApps** | **Number**| maximum number of related visibleApps returned (when they are included) | [optional] 

### Return type

[**UserResponse**](UserResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## usersUpdateInstance

> UserResponse usersUpdateInstance(id, userUpdateRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.UsersApi();
let id = "id_example"; // String | the id of the requested resource
let userUpdateRequest = new AppStoreConnectApi.UserUpdateRequest(); // UserUpdateRequest | User representation
apiInstance.usersUpdateInstance(id, userUpdateRequest, (error, data, response) => {
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
 **userUpdateRequest** | [**UserUpdateRequest**](UserUpdateRequest.md)| User representation | 

### Return type

[**UserResponse**](UserResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## usersVisibleAppsCreateToManyRelationship

> usersVisibleAppsCreateToManyRelationship(id, userVisibleAppsLinkagesRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.UsersApi();
let id = "id_example"; // String | the id of the requested resource
let userVisibleAppsLinkagesRequest = new AppStoreConnectApi.UserVisibleAppsLinkagesRequest(); // UserVisibleAppsLinkagesRequest | List of related linkages
apiInstance.usersVisibleAppsCreateToManyRelationship(id, userVisibleAppsLinkagesRequest, (error, data, response) => {
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
 **userVisibleAppsLinkagesRequest** | [**UserVisibleAppsLinkagesRequest**](UserVisibleAppsLinkagesRequest.md)| List of related linkages | 

### Return type

null (empty response body)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## usersVisibleAppsDeleteToManyRelationship

> usersVisibleAppsDeleteToManyRelationship(id, userVisibleAppsLinkagesRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.UsersApi();
let id = "id_example"; // String | the id of the requested resource
let userVisibleAppsLinkagesRequest = new AppStoreConnectApi.UserVisibleAppsLinkagesRequest(); // UserVisibleAppsLinkagesRequest | List of related linkages
apiInstance.usersVisibleAppsDeleteToManyRelationship(id, userVisibleAppsLinkagesRequest, (error, data, response) => {
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
 **userVisibleAppsLinkagesRequest** | [**UserVisibleAppsLinkagesRequest**](UserVisibleAppsLinkagesRequest.md)| List of related linkages | 

### Return type

null (empty response body)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## usersVisibleAppsGetToManyRelated

> AppsWithoutIncludesResponse usersVisibleAppsGetToManyRelated(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.UsersApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsApps': ["null"], // [String] | the fields to include for returned resources of type apps
  'limit': 56 // Number | maximum resources per page
};
apiInstance.usersVisibleAppsGetToManyRelated(id, opts, (error, data, response) => {
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
 **limit** | **Number**| maximum resources per page | [optional] 

### Return type

[**AppsWithoutIncludesResponse**](AppsWithoutIncludesResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## usersVisibleAppsGetToManyRelationship

> UserVisibleAppsLinkagesResponse usersVisibleAppsGetToManyRelationship(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.UsersApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'limit': 56 // Number | maximum resources per page
};
apiInstance.usersVisibleAppsGetToManyRelationship(id, opts, (error, data, response) => {
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

[**UserVisibleAppsLinkagesResponse**](UserVisibleAppsLinkagesResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## usersVisibleAppsReplaceToManyRelationship

> usersVisibleAppsReplaceToManyRelationship(id, userVisibleAppsLinkagesRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.UsersApi();
let id = "id_example"; // String | the id of the requested resource
let userVisibleAppsLinkagesRequest = new AppStoreConnectApi.UserVisibleAppsLinkagesRequest(); // UserVisibleAppsLinkagesRequest | List of related linkages
apiInstance.usersVisibleAppsReplaceToManyRelationship(id, userVisibleAppsLinkagesRequest, (error, data, response) => {
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
 **userVisibleAppsLinkagesRequest** | [**UserVisibleAppsLinkagesRequest**](UserVisibleAppsLinkagesRequest.md)| List of related linkages | 

### Return type

null (empty response body)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

