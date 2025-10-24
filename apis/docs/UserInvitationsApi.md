# AppStoreConnectApi.UserInvitationsApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**userInvitationsCreateInstance**](UserInvitationsApi.md#userInvitationsCreateInstance) | **POST** /v1/userInvitations | 
[**userInvitationsDeleteInstance**](UserInvitationsApi.md#userInvitationsDeleteInstance) | **DELETE** /v1/userInvitations/{id} | 
[**userInvitationsGetCollection**](UserInvitationsApi.md#userInvitationsGetCollection) | **GET** /v1/userInvitations | 
[**userInvitationsGetInstance**](UserInvitationsApi.md#userInvitationsGetInstance) | **GET** /v1/userInvitations/{id} | 
[**userInvitationsVisibleAppsGetToManyRelated**](UserInvitationsApi.md#userInvitationsVisibleAppsGetToManyRelated) | **GET** /v1/userInvitations/{id}/visibleApps | 
[**userInvitationsVisibleAppsGetToManyRelationship**](UserInvitationsApi.md#userInvitationsVisibleAppsGetToManyRelationship) | **GET** /v1/userInvitations/{id}/relationships/visibleApps | 



## userInvitationsCreateInstance

> UserInvitationResponse userInvitationsCreateInstance(userInvitationCreateRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.UserInvitationsApi();
let userInvitationCreateRequest = new AppStoreConnectApi.UserInvitationCreateRequest(); // UserInvitationCreateRequest | UserInvitation representation
apiInstance.userInvitationsCreateInstance(userInvitationCreateRequest, (error, data, response) => {
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
 **userInvitationCreateRequest** | [**UserInvitationCreateRequest**](UserInvitationCreateRequest.md)| UserInvitation representation | 

### Return type

[**UserInvitationResponse**](UserInvitationResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## userInvitationsDeleteInstance

> userInvitationsDeleteInstance(id)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.UserInvitationsApi();
let id = "id_example"; // String | the id of the requested resource
apiInstance.userInvitationsDeleteInstance(id, (error, data, response) => {
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


## userInvitationsGetCollection

> UserInvitationsResponse userInvitationsGetCollection(opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.UserInvitationsApi();
let opts = {
  'filterEmail': ["null"], // [String] | filter by attribute 'email'
  'filterRoles': ["null"], // [String] | filter by attribute 'roles'
  'filterVisibleApps': ["null"], // [String] | filter by id(s) of related 'visibleApps'
  'sort': ["null"], // [String] | comma-separated list of sort expressions; resources will be sorted as specified
  'fieldsUserInvitations': ["null"], // [String] | the fields to include for returned resources of type userInvitations
  'fieldsApps': ["null"], // [String] | the fields to include for returned resources of type apps
  'limit': 56, // Number | maximum resources per page
  'include': ["null"], // [String] | comma-separated list of relationships to include
  'limitVisibleApps': 56 // Number | maximum number of related visibleApps returned (when they are included)
};
apiInstance.userInvitationsGetCollection(opts, (error, data, response) => {
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
 **filterEmail** | [**[String]**](String.md)| filter by attribute &#39;email&#39; | [optional] 
 **filterRoles** | [**[String]**](String.md)| filter by attribute &#39;roles&#39; | [optional] 
 **filterVisibleApps** | [**[String]**](String.md)| filter by id(s) of related &#39;visibleApps&#39; | [optional] 
 **sort** | [**[String]**](String.md)| comma-separated list of sort expressions; resources will be sorted as specified | [optional] 
 **fieldsUserInvitations** | [**[String]**](String.md)| the fields to include for returned resources of type userInvitations | [optional] 
 **fieldsApps** | [**[String]**](String.md)| the fields to include for returned resources of type apps | [optional] 
 **limit** | **Number**| maximum resources per page | [optional] 
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 
 **limitVisibleApps** | **Number**| maximum number of related visibleApps returned (when they are included) | [optional] 

### Return type

[**UserInvitationsResponse**](UserInvitationsResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## userInvitationsGetInstance

> UserInvitationResponse userInvitationsGetInstance(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.UserInvitationsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsUserInvitations': ["null"], // [String] | the fields to include for returned resources of type userInvitations
  'fieldsApps': ["null"], // [String] | the fields to include for returned resources of type apps
  'include': ["null"], // [String] | comma-separated list of relationships to include
  'limitVisibleApps': 56 // Number | maximum number of related visibleApps returned (when they are included)
};
apiInstance.userInvitationsGetInstance(id, opts, (error, data, response) => {
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
 **fieldsUserInvitations** | [**[String]**](String.md)| the fields to include for returned resources of type userInvitations | [optional] 
 **fieldsApps** | [**[String]**](String.md)| the fields to include for returned resources of type apps | [optional] 
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 
 **limitVisibleApps** | **Number**| maximum number of related visibleApps returned (when they are included) | [optional] 

### Return type

[**UserInvitationResponse**](UserInvitationResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## userInvitationsVisibleAppsGetToManyRelated

> AppsWithoutIncludesResponse userInvitationsVisibleAppsGetToManyRelated(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.UserInvitationsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsApps': ["null"], // [String] | the fields to include for returned resources of type apps
  'limit': 56 // Number | maximum resources per page
};
apiInstance.userInvitationsVisibleAppsGetToManyRelated(id, opts, (error, data, response) => {
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


## userInvitationsVisibleAppsGetToManyRelationship

> UserInvitationVisibleAppsLinkagesResponse userInvitationsVisibleAppsGetToManyRelationship(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.UserInvitationsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'limit': 56 // Number | maximum resources per page
};
apiInstance.userInvitationsVisibleAppsGetToManyRelationship(id, opts, (error, data, response) => {
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

[**UserInvitationVisibleAppsLinkagesResponse**](UserInvitationVisibleAppsLinkagesResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

