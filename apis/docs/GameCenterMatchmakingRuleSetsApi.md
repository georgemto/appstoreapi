# AppStoreConnectApi.GameCenterMatchmakingRuleSetsApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**gameCenterMatchmakingRuleSetsCreateInstance**](GameCenterMatchmakingRuleSetsApi.md#gameCenterMatchmakingRuleSetsCreateInstance) | **POST** /v1/gameCenterMatchmakingRuleSets | 
[**gameCenterMatchmakingRuleSetsDeleteInstance**](GameCenterMatchmakingRuleSetsApi.md#gameCenterMatchmakingRuleSetsDeleteInstance) | **DELETE** /v1/gameCenterMatchmakingRuleSets/{id} | 
[**gameCenterMatchmakingRuleSetsGetCollection**](GameCenterMatchmakingRuleSetsApi.md#gameCenterMatchmakingRuleSetsGetCollection) | **GET** /v1/gameCenterMatchmakingRuleSets | 
[**gameCenterMatchmakingRuleSetsGetInstance**](GameCenterMatchmakingRuleSetsApi.md#gameCenterMatchmakingRuleSetsGetInstance) | **GET** /v1/gameCenterMatchmakingRuleSets/{id} | 
[**gameCenterMatchmakingRuleSetsMatchmakingQueuesGetToManyRelated**](GameCenterMatchmakingRuleSetsApi.md#gameCenterMatchmakingRuleSetsMatchmakingQueuesGetToManyRelated) | **GET** /v1/gameCenterMatchmakingRuleSets/{id}/matchmakingQueues | 
[**gameCenterMatchmakingRuleSetsMatchmakingQueuesGetToManyRelationship**](GameCenterMatchmakingRuleSetsApi.md#gameCenterMatchmakingRuleSetsMatchmakingQueuesGetToManyRelationship) | **GET** /v1/gameCenterMatchmakingRuleSets/{id}/relationships/matchmakingQueues | 
[**gameCenterMatchmakingRuleSetsRulesGetToManyRelated**](GameCenterMatchmakingRuleSetsApi.md#gameCenterMatchmakingRuleSetsRulesGetToManyRelated) | **GET** /v1/gameCenterMatchmakingRuleSets/{id}/rules | 
[**gameCenterMatchmakingRuleSetsRulesGetToManyRelationship**](GameCenterMatchmakingRuleSetsApi.md#gameCenterMatchmakingRuleSetsRulesGetToManyRelationship) | **GET** /v1/gameCenterMatchmakingRuleSets/{id}/relationships/rules | 
[**gameCenterMatchmakingRuleSetsTeamsGetToManyRelated**](GameCenterMatchmakingRuleSetsApi.md#gameCenterMatchmakingRuleSetsTeamsGetToManyRelated) | **GET** /v1/gameCenterMatchmakingRuleSets/{id}/teams | 
[**gameCenterMatchmakingRuleSetsTeamsGetToManyRelationship**](GameCenterMatchmakingRuleSetsApi.md#gameCenterMatchmakingRuleSetsTeamsGetToManyRelationship) | **GET** /v1/gameCenterMatchmakingRuleSets/{id}/relationships/teams | 
[**gameCenterMatchmakingRuleSetsUpdateInstance**](GameCenterMatchmakingRuleSetsApi.md#gameCenterMatchmakingRuleSetsUpdateInstance) | **PATCH** /v1/gameCenterMatchmakingRuleSets/{id} | 



## gameCenterMatchmakingRuleSetsCreateInstance

> GameCenterMatchmakingRuleSetResponse gameCenterMatchmakingRuleSetsCreateInstance(gameCenterMatchmakingRuleSetCreateRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.GameCenterMatchmakingRuleSetsApi();
let gameCenterMatchmakingRuleSetCreateRequest = new AppStoreConnectApi.GameCenterMatchmakingRuleSetCreateRequest(); // GameCenterMatchmakingRuleSetCreateRequest | GameCenterMatchmakingRuleSet representation
apiInstance.gameCenterMatchmakingRuleSetsCreateInstance(gameCenterMatchmakingRuleSetCreateRequest, (error, data, response) => {
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
 **gameCenterMatchmakingRuleSetCreateRequest** | [**GameCenterMatchmakingRuleSetCreateRequest**](GameCenterMatchmakingRuleSetCreateRequest.md)| GameCenterMatchmakingRuleSet representation | 

### Return type

[**GameCenterMatchmakingRuleSetResponse**](GameCenterMatchmakingRuleSetResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## gameCenterMatchmakingRuleSetsDeleteInstance

> gameCenterMatchmakingRuleSetsDeleteInstance(id)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.GameCenterMatchmakingRuleSetsApi();
let id = "id_example"; // String | the id of the requested resource
apiInstance.gameCenterMatchmakingRuleSetsDeleteInstance(id, (error, data, response) => {
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


## gameCenterMatchmakingRuleSetsGetCollection

> GameCenterMatchmakingRuleSetsResponse gameCenterMatchmakingRuleSetsGetCollection(opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.GameCenterMatchmakingRuleSetsApi();
let opts = {
  'fieldsGameCenterMatchmakingRuleSets': ["null"], // [String] | the fields to include for returned resources of type gameCenterMatchmakingRuleSets
  'fieldsGameCenterMatchmakingTeams': ["null"], // [String] | the fields to include for returned resources of type gameCenterMatchmakingTeams
  'fieldsGameCenterMatchmakingRules': ["null"], // [String] | the fields to include for returned resources of type gameCenterMatchmakingRules
  'fieldsGameCenterMatchmakingQueues': ["null"], // [String] | the fields to include for returned resources of type gameCenterMatchmakingQueues
  'limit': 56, // Number | maximum resources per page
  'include': ["null"], // [String] | comma-separated list of relationships to include
  'limitMatchmakingQueues': 56, // Number | maximum number of related matchmakingQueues returned (when they are included)
  'limitRules': 56, // Number | maximum number of related rules returned (when they are included)
  'limitTeams': 56 // Number | maximum number of related teams returned (when they are included)
};
apiInstance.gameCenterMatchmakingRuleSetsGetCollection(opts, (error, data, response) => {
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
 **fieldsGameCenterMatchmakingRuleSets** | [**[String]**](String.md)| the fields to include for returned resources of type gameCenterMatchmakingRuleSets | [optional] 
 **fieldsGameCenterMatchmakingTeams** | [**[String]**](String.md)| the fields to include for returned resources of type gameCenterMatchmakingTeams | [optional] 
 **fieldsGameCenterMatchmakingRules** | [**[String]**](String.md)| the fields to include for returned resources of type gameCenterMatchmakingRules | [optional] 
 **fieldsGameCenterMatchmakingQueues** | [**[String]**](String.md)| the fields to include for returned resources of type gameCenterMatchmakingQueues | [optional] 
 **limit** | **Number**| maximum resources per page | [optional] 
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 
 **limitMatchmakingQueues** | **Number**| maximum number of related matchmakingQueues returned (when they are included) | [optional] 
 **limitRules** | **Number**| maximum number of related rules returned (when they are included) | [optional] 
 **limitTeams** | **Number**| maximum number of related teams returned (when they are included) | [optional] 

### Return type

[**GameCenterMatchmakingRuleSetsResponse**](GameCenterMatchmakingRuleSetsResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## gameCenterMatchmakingRuleSetsGetInstance

> GameCenterMatchmakingRuleSetResponse gameCenterMatchmakingRuleSetsGetInstance(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.GameCenterMatchmakingRuleSetsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsGameCenterMatchmakingRuleSets': ["null"], // [String] | the fields to include for returned resources of type gameCenterMatchmakingRuleSets
  'fieldsGameCenterMatchmakingTeams': ["null"], // [String] | the fields to include for returned resources of type gameCenterMatchmakingTeams
  'fieldsGameCenterMatchmakingRules': ["null"], // [String] | the fields to include for returned resources of type gameCenterMatchmakingRules
  'fieldsGameCenterMatchmakingQueues': ["null"], // [String] | the fields to include for returned resources of type gameCenterMatchmakingQueues
  'include': ["null"], // [String] | comma-separated list of relationships to include
  'limitMatchmakingQueues': 56, // Number | maximum number of related matchmakingQueues returned (when they are included)
  'limitRules': 56, // Number | maximum number of related rules returned (when they are included)
  'limitTeams': 56 // Number | maximum number of related teams returned (when they are included)
};
apiInstance.gameCenterMatchmakingRuleSetsGetInstance(id, opts, (error, data, response) => {
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
 **fieldsGameCenterMatchmakingRuleSets** | [**[String]**](String.md)| the fields to include for returned resources of type gameCenterMatchmakingRuleSets | [optional] 
 **fieldsGameCenterMatchmakingTeams** | [**[String]**](String.md)| the fields to include for returned resources of type gameCenterMatchmakingTeams | [optional] 
 **fieldsGameCenterMatchmakingRules** | [**[String]**](String.md)| the fields to include for returned resources of type gameCenterMatchmakingRules | [optional] 
 **fieldsGameCenterMatchmakingQueues** | [**[String]**](String.md)| the fields to include for returned resources of type gameCenterMatchmakingQueues | [optional] 
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 
 **limitMatchmakingQueues** | **Number**| maximum number of related matchmakingQueues returned (when they are included) | [optional] 
 **limitRules** | **Number**| maximum number of related rules returned (when they are included) | [optional] 
 **limitTeams** | **Number**| maximum number of related teams returned (when they are included) | [optional] 

### Return type

[**GameCenterMatchmakingRuleSetResponse**](GameCenterMatchmakingRuleSetResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## gameCenterMatchmakingRuleSetsMatchmakingQueuesGetToManyRelated

> GameCenterMatchmakingQueuesResponse gameCenterMatchmakingRuleSetsMatchmakingQueuesGetToManyRelated(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.GameCenterMatchmakingRuleSetsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsGameCenterMatchmakingQueues': ["null"], // [String] | the fields to include for returned resources of type gameCenterMatchmakingQueues
  'fieldsGameCenterMatchmakingRuleSets': ["null"], // [String] | the fields to include for returned resources of type gameCenterMatchmakingRuleSets
  'limit': 56, // Number | maximum resources per page
  'include': ["null"] // [String] | comma-separated list of relationships to include
};
apiInstance.gameCenterMatchmakingRuleSetsMatchmakingQueuesGetToManyRelated(id, opts, (error, data, response) => {
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
 **fieldsGameCenterMatchmakingQueues** | [**[String]**](String.md)| the fields to include for returned resources of type gameCenterMatchmakingQueues | [optional] 
 **fieldsGameCenterMatchmakingRuleSets** | [**[String]**](String.md)| the fields to include for returned resources of type gameCenterMatchmakingRuleSets | [optional] 
 **limit** | **Number**| maximum resources per page | [optional] 
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 

### Return type

[**GameCenterMatchmakingQueuesResponse**](GameCenterMatchmakingQueuesResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## gameCenterMatchmakingRuleSetsMatchmakingQueuesGetToManyRelationship

> GameCenterMatchmakingRuleSetMatchmakingQueuesLinkagesResponse gameCenterMatchmakingRuleSetsMatchmakingQueuesGetToManyRelationship(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.GameCenterMatchmakingRuleSetsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'limit': 56 // Number | maximum resources per page
};
apiInstance.gameCenterMatchmakingRuleSetsMatchmakingQueuesGetToManyRelationship(id, opts, (error, data, response) => {
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

[**GameCenterMatchmakingRuleSetMatchmakingQueuesLinkagesResponse**](GameCenterMatchmakingRuleSetMatchmakingQueuesLinkagesResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## gameCenterMatchmakingRuleSetsRulesGetToManyRelated

> GameCenterMatchmakingRulesResponse gameCenterMatchmakingRuleSetsRulesGetToManyRelated(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.GameCenterMatchmakingRuleSetsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsGameCenterMatchmakingRules': ["null"], // [String] | the fields to include for returned resources of type gameCenterMatchmakingRules
  'limit': 56 // Number | maximum resources per page
};
apiInstance.gameCenterMatchmakingRuleSetsRulesGetToManyRelated(id, opts, (error, data, response) => {
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
 **fieldsGameCenterMatchmakingRules** | [**[String]**](String.md)| the fields to include for returned resources of type gameCenterMatchmakingRules | [optional] 
 **limit** | **Number**| maximum resources per page | [optional] 

### Return type

[**GameCenterMatchmakingRulesResponse**](GameCenterMatchmakingRulesResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## gameCenterMatchmakingRuleSetsRulesGetToManyRelationship

> GameCenterMatchmakingRuleSetRulesLinkagesResponse gameCenterMatchmakingRuleSetsRulesGetToManyRelationship(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.GameCenterMatchmakingRuleSetsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'limit': 56 // Number | maximum resources per page
};
apiInstance.gameCenterMatchmakingRuleSetsRulesGetToManyRelationship(id, opts, (error, data, response) => {
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

[**GameCenterMatchmakingRuleSetRulesLinkagesResponse**](GameCenterMatchmakingRuleSetRulesLinkagesResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## gameCenterMatchmakingRuleSetsTeamsGetToManyRelated

> GameCenterMatchmakingTeamsResponse gameCenterMatchmakingRuleSetsTeamsGetToManyRelated(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.GameCenterMatchmakingRuleSetsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsGameCenterMatchmakingTeams': ["null"], // [String] | the fields to include for returned resources of type gameCenterMatchmakingTeams
  'limit': 56 // Number | maximum resources per page
};
apiInstance.gameCenterMatchmakingRuleSetsTeamsGetToManyRelated(id, opts, (error, data, response) => {
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
 **fieldsGameCenterMatchmakingTeams** | [**[String]**](String.md)| the fields to include for returned resources of type gameCenterMatchmakingTeams | [optional] 
 **limit** | **Number**| maximum resources per page | [optional] 

### Return type

[**GameCenterMatchmakingTeamsResponse**](GameCenterMatchmakingTeamsResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## gameCenterMatchmakingRuleSetsTeamsGetToManyRelationship

> GameCenterMatchmakingRuleSetTeamsLinkagesResponse gameCenterMatchmakingRuleSetsTeamsGetToManyRelationship(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.GameCenterMatchmakingRuleSetsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'limit': 56 // Number | maximum resources per page
};
apiInstance.gameCenterMatchmakingRuleSetsTeamsGetToManyRelationship(id, opts, (error, data, response) => {
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

[**GameCenterMatchmakingRuleSetTeamsLinkagesResponse**](GameCenterMatchmakingRuleSetTeamsLinkagesResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## gameCenterMatchmakingRuleSetsUpdateInstance

> GameCenterMatchmakingRuleSetResponse gameCenterMatchmakingRuleSetsUpdateInstance(id, gameCenterMatchmakingRuleSetUpdateRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.GameCenterMatchmakingRuleSetsApi();
let id = "id_example"; // String | the id of the requested resource
let gameCenterMatchmakingRuleSetUpdateRequest = new AppStoreConnectApi.GameCenterMatchmakingRuleSetUpdateRequest(); // GameCenterMatchmakingRuleSetUpdateRequest | GameCenterMatchmakingRuleSet representation
apiInstance.gameCenterMatchmakingRuleSetsUpdateInstance(id, gameCenterMatchmakingRuleSetUpdateRequest, (error, data, response) => {
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
 **gameCenterMatchmakingRuleSetUpdateRequest** | [**GameCenterMatchmakingRuleSetUpdateRequest**](GameCenterMatchmakingRuleSetUpdateRequest.md)| GameCenterMatchmakingRuleSet representation | 

### Return type

[**GameCenterMatchmakingRuleSetResponse**](GameCenterMatchmakingRuleSetResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

