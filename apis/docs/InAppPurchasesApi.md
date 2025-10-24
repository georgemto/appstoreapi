# AppStoreConnectApi.InAppPurchasesApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**inAppPurchasesGetInstance**](InAppPurchasesApi.md#inAppPurchasesGetInstance) | **GET** /v1/inAppPurchases/{id} | 
[**inAppPurchasesV2AppStoreReviewScreenshotGetToOneRelated**](InAppPurchasesApi.md#inAppPurchasesV2AppStoreReviewScreenshotGetToOneRelated) | **GET** /v2/inAppPurchases/{id}/appStoreReviewScreenshot | 
[**inAppPurchasesV2AppStoreReviewScreenshotGetToOneRelationship**](InAppPurchasesApi.md#inAppPurchasesV2AppStoreReviewScreenshotGetToOneRelationship) | **GET** /v2/inAppPurchases/{id}/relationships/appStoreReviewScreenshot | 
[**inAppPurchasesV2ContentGetToOneRelated**](InAppPurchasesApi.md#inAppPurchasesV2ContentGetToOneRelated) | **GET** /v2/inAppPurchases/{id}/content | 
[**inAppPurchasesV2ContentGetToOneRelationship**](InAppPurchasesApi.md#inAppPurchasesV2ContentGetToOneRelationship) | **GET** /v2/inAppPurchases/{id}/relationships/content | 
[**inAppPurchasesV2CreateInstance**](InAppPurchasesApi.md#inAppPurchasesV2CreateInstance) | **POST** /v2/inAppPurchases | 
[**inAppPurchasesV2DeleteInstance**](InAppPurchasesApi.md#inAppPurchasesV2DeleteInstance) | **DELETE** /v2/inAppPurchases/{id} | 
[**inAppPurchasesV2GetInstance**](InAppPurchasesApi.md#inAppPurchasesV2GetInstance) | **GET** /v2/inAppPurchases/{id} | 
[**inAppPurchasesV2IapPriceScheduleGetToOneRelated**](InAppPurchasesApi.md#inAppPurchasesV2IapPriceScheduleGetToOneRelated) | **GET** /v2/inAppPurchases/{id}/iapPriceSchedule | 
[**inAppPurchasesV2IapPriceScheduleGetToOneRelationship**](InAppPurchasesApi.md#inAppPurchasesV2IapPriceScheduleGetToOneRelationship) | **GET** /v2/inAppPurchases/{id}/relationships/iapPriceSchedule | 
[**inAppPurchasesV2ImagesGetToManyRelated**](InAppPurchasesApi.md#inAppPurchasesV2ImagesGetToManyRelated) | **GET** /v2/inAppPurchases/{id}/images | 
[**inAppPurchasesV2ImagesGetToManyRelationship**](InAppPurchasesApi.md#inAppPurchasesV2ImagesGetToManyRelationship) | **GET** /v2/inAppPurchases/{id}/relationships/images | 
[**inAppPurchasesV2InAppPurchaseAvailabilityGetToOneRelated**](InAppPurchasesApi.md#inAppPurchasesV2InAppPurchaseAvailabilityGetToOneRelated) | **GET** /v2/inAppPurchases/{id}/inAppPurchaseAvailability | 
[**inAppPurchasesV2InAppPurchaseAvailabilityGetToOneRelationship**](InAppPurchasesApi.md#inAppPurchasesV2InAppPurchaseAvailabilityGetToOneRelationship) | **GET** /v2/inAppPurchases/{id}/relationships/inAppPurchaseAvailability | 
[**inAppPurchasesV2InAppPurchaseLocalizationsGetToManyRelated**](InAppPurchasesApi.md#inAppPurchasesV2InAppPurchaseLocalizationsGetToManyRelated) | **GET** /v2/inAppPurchases/{id}/inAppPurchaseLocalizations | 
[**inAppPurchasesV2InAppPurchaseLocalizationsGetToManyRelationship**](InAppPurchasesApi.md#inAppPurchasesV2InAppPurchaseLocalizationsGetToManyRelationship) | **GET** /v2/inAppPurchases/{id}/relationships/inAppPurchaseLocalizations | 
[**inAppPurchasesV2PricePointsGetToManyRelated**](InAppPurchasesApi.md#inAppPurchasesV2PricePointsGetToManyRelated) | **GET** /v2/inAppPurchases/{id}/pricePoints | 
[**inAppPurchasesV2PricePointsGetToManyRelationship**](InAppPurchasesApi.md#inAppPurchasesV2PricePointsGetToManyRelationship) | **GET** /v2/inAppPurchases/{id}/relationships/pricePoints | 
[**inAppPurchasesV2PromotedPurchaseGetToOneRelated**](InAppPurchasesApi.md#inAppPurchasesV2PromotedPurchaseGetToOneRelated) | **GET** /v2/inAppPurchases/{id}/promotedPurchase | 
[**inAppPurchasesV2PromotedPurchaseGetToOneRelationship**](InAppPurchasesApi.md#inAppPurchasesV2PromotedPurchaseGetToOneRelationship) | **GET** /v2/inAppPurchases/{id}/relationships/promotedPurchase | 
[**inAppPurchasesV2UpdateInstance**](InAppPurchasesApi.md#inAppPurchasesV2UpdateInstance) | **PATCH** /v2/inAppPurchases/{id} | 



## inAppPurchasesGetInstance

> InAppPurchaseResponse inAppPurchasesGetInstance(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.InAppPurchasesApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsInAppPurchases': ["null"], // [String] | the fields to include for returned resources of type inAppPurchases
  'include': ["null"], // [String] | comma-separated list of relationships to include
  'limitApps': 56 // Number | maximum number of related apps returned (when they are included)
};
apiInstance.inAppPurchasesGetInstance(id, opts, (error, data, response) => {
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
 **fieldsInAppPurchases** | [**[String]**](String.md)| the fields to include for returned resources of type inAppPurchases | [optional] 
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 
 **limitApps** | **Number**| maximum number of related apps returned (when they are included) | [optional] 

### Return type

[**InAppPurchaseResponse**](InAppPurchaseResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## inAppPurchasesV2AppStoreReviewScreenshotGetToOneRelated

> InAppPurchaseAppStoreReviewScreenshotResponse inAppPurchasesV2AppStoreReviewScreenshotGetToOneRelated(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.InAppPurchasesApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsInAppPurchaseAppStoreReviewScreenshots': ["null"], // [String] | the fields to include for returned resources of type inAppPurchaseAppStoreReviewScreenshots
  'fieldsInAppPurchases': ["null"], // [String] | the fields to include for returned resources of type inAppPurchases
  'include': ["null"] // [String] | comma-separated list of relationships to include
};
apiInstance.inAppPurchasesV2AppStoreReviewScreenshotGetToOneRelated(id, opts, (error, data, response) => {
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
 **fieldsInAppPurchaseAppStoreReviewScreenshots** | [**[String]**](String.md)| the fields to include for returned resources of type inAppPurchaseAppStoreReviewScreenshots | [optional] 
 **fieldsInAppPurchases** | [**[String]**](String.md)| the fields to include for returned resources of type inAppPurchases | [optional] 
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 

### Return type

[**InAppPurchaseAppStoreReviewScreenshotResponse**](InAppPurchaseAppStoreReviewScreenshotResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## inAppPurchasesV2AppStoreReviewScreenshotGetToOneRelationship

> InAppPurchaseV2AppStoreReviewScreenshotLinkageResponse inAppPurchasesV2AppStoreReviewScreenshotGetToOneRelationship(id)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.InAppPurchasesApi();
let id = "id_example"; // String | the id of the requested resource
apiInstance.inAppPurchasesV2AppStoreReviewScreenshotGetToOneRelationship(id, (error, data, response) => {
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

[**InAppPurchaseV2AppStoreReviewScreenshotLinkageResponse**](InAppPurchaseV2AppStoreReviewScreenshotLinkageResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## inAppPurchasesV2ContentGetToOneRelated

> InAppPurchaseContentResponse inAppPurchasesV2ContentGetToOneRelated(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.InAppPurchasesApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsInAppPurchaseContents': ["null"], // [String] | the fields to include for returned resources of type inAppPurchaseContents
  'fieldsInAppPurchases': ["null"], // [String] | the fields to include for returned resources of type inAppPurchases
  'include': ["null"] // [String] | comma-separated list of relationships to include
};
apiInstance.inAppPurchasesV2ContentGetToOneRelated(id, opts, (error, data, response) => {
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
 **fieldsInAppPurchaseContents** | [**[String]**](String.md)| the fields to include for returned resources of type inAppPurchaseContents | [optional] 
 **fieldsInAppPurchases** | [**[String]**](String.md)| the fields to include for returned resources of type inAppPurchases | [optional] 
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 

### Return type

[**InAppPurchaseContentResponse**](InAppPurchaseContentResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## inAppPurchasesV2ContentGetToOneRelationship

> InAppPurchaseV2ContentLinkageResponse inAppPurchasesV2ContentGetToOneRelationship(id)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.InAppPurchasesApi();
let id = "id_example"; // String | the id of the requested resource
apiInstance.inAppPurchasesV2ContentGetToOneRelationship(id, (error, data, response) => {
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

[**InAppPurchaseV2ContentLinkageResponse**](InAppPurchaseV2ContentLinkageResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## inAppPurchasesV2CreateInstance

> InAppPurchaseV2Response inAppPurchasesV2CreateInstance(inAppPurchaseV2CreateRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.InAppPurchasesApi();
let inAppPurchaseV2CreateRequest = new AppStoreConnectApi.InAppPurchaseV2CreateRequest(); // InAppPurchaseV2CreateRequest | InAppPurchase representation
apiInstance.inAppPurchasesV2CreateInstance(inAppPurchaseV2CreateRequest, (error, data, response) => {
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
 **inAppPurchaseV2CreateRequest** | [**InAppPurchaseV2CreateRequest**](InAppPurchaseV2CreateRequest.md)| InAppPurchase representation | 

### Return type

[**InAppPurchaseV2Response**](InAppPurchaseV2Response.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## inAppPurchasesV2DeleteInstance

> inAppPurchasesV2DeleteInstance(id)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.InAppPurchasesApi();
let id = "id_example"; // String | the id of the requested resource
apiInstance.inAppPurchasesV2DeleteInstance(id, (error, data, response) => {
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


## inAppPurchasesV2GetInstance

> InAppPurchaseV2Response inAppPurchasesV2GetInstance(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.InAppPurchasesApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsInAppPurchases': ["null"], // [String] | the fields to include for returned resources of type inAppPurchases
  'fieldsInAppPurchaseLocalizations': ["null"], // [String] | the fields to include for returned resources of type inAppPurchaseLocalizations
  'fieldsInAppPurchasePricePoints': ["null"], // [String] | the fields to include for returned resources of type inAppPurchasePricePoints
  'fieldsInAppPurchaseContents': ["null"], // [String] | the fields to include for returned resources of type inAppPurchaseContents
  'fieldsInAppPurchaseAppStoreReviewScreenshots': ["null"], // [String] | the fields to include for returned resources of type inAppPurchaseAppStoreReviewScreenshots
  'fieldsPromotedPurchases': ["null"], // [String] | the fields to include for returned resources of type promotedPurchases
  'fieldsInAppPurchasePriceSchedules': ["null"], // [String] | the fields to include for returned resources of type inAppPurchasePriceSchedules
  'fieldsInAppPurchaseAvailabilities': ["null"], // [String] | the fields to include for returned resources of type inAppPurchaseAvailabilities
  'fieldsInAppPurchaseImages': ["null"], // [String] | the fields to include for returned resources of type inAppPurchaseImages
  'include': ["null"], // [String] | comma-separated list of relationships to include
  'limitImages': 56, // Number | maximum number of related images returned (when they are included)
  'limitInAppPurchaseLocalizations': 56, // Number | maximum number of related inAppPurchaseLocalizations returned (when they are included)
  'limitPricePoints': 56 // Number | maximum number of related pricePoints returned (when they are included)
};
apiInstance.inAppPurchasesV2GetInstance(id, opts, (error, data, response) => {
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
 **fieldsInAppPurchases** | [**[String]**](String.md)| the fields to include for returned resources of type inAppPurchases | [optional] 
 **fieldsInAppPurchaseLocalizations** | [**[String]**](String.md)| the fields to include for returned resources of type inAppPurchaseLocalizations | [optional] 
 **fieldsInAppPurchasePricePoints** | [**[String]**](String.md)| the fields to include for returned resources of type inAppPurchasePricePoints | [optional] 
 **fieldsInAppPurchaseContents** | [**[String]**](String.md)| the fields to include for returned resources of type inAppPurchaseContents | [optional] 
 **fieldsInAppPurchaseAppStoreReviewScreenshots** | [**[String]**](String.md)| the fields to include for returned resources of type inAppPurchaseAppStoreReviewScreenshots | [optional] 
 **fieldsPromotedPurchases** | [**[String]**](String.md)| the fields to include for returned resources of type promotedPurchases | [optional] 
 **fieldsInAppPurchasePriceSchedules** | [**[String]**](String.md)| the fields to include for returned resources of type inAppPurchasePriceSchedules | [optional] 
 **fieldsInAppPurchaseAvailabilities** | [**[String]**](String.md)| the fields to include for returned resources of type inAppPurchaseAvailabilities | [optional] 
 **fieldsInAppPurchaseImages** | [**[String]**](String.md)| the fields to include for returned resources of type inAppPurchaseImages | [optional] 
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 
 **limitImages** | **Number**| maximum number of related images returned (when they are included) | [optional] 
 **limitInAppPurchaseLocalizations** | **Number**| maximum number of related inAppPurchaseLocalizations returned (when they are included) | [optional] 
 **limitPricePoints** | **Number**| maximum number of related pricePoints returned (when they are included) | [optional] 

### Return type

[**InAppPurchaseV2Response**](InAppPurchaseV2Response.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## inAppPurchasesV2IapPriceScheduleGetToOneRelated

> InAppPurchasePriceScheduleResponse inAppPurchasesV2IapPriceScheduleGetToOneRelated(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.InAppPurchasesApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsInAppPurchasePriceSchedules': ["null"], // [String] | the fields to include for returned resources of type inAppPurchasePriceSchedules
  'fieldsTerritories': ["null"], // [String] | the fields to include for returned resources of type territories
  'fieldsInAppPurchasePrices': ["null"], // [String] | the fields to include for returned resources of type inAppPurchasePrices
  'include': ["null"], // [String] | comma-separated list of relationships to include
  'limitManualPrices': 56, // Number | maximum number of related manualPrices returned (when they are included)
  'limitAutomaticPrices': 56 // Number | maximum number of related automaticPrices returned (when they are included)
};
apiInstance.inAppPurchasesV2IapPriceScheduleGetToOneRelated(id, opts, (error, data, response) => {
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
 **fieldsInAppPurchasePriceSchedules** | [**[String]**](String.md)| the fields to include for returned resources of type inAppPurchasePriceSchedules | [optional] 
 **fieldsTerritories** | [**[String]**](String.md)| the fields to include for returned resources of type territories | [optional] 
 **fieldsInAppPurchasePrices** | [**[String]**](String.md)| the fields to include for returned resources of type inAppPurchasePrices | [optional] 
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 
 **limitManualPrices** | **Number**| maximum number of related manualPrices returned (when they are included) | [optional] 
 **limitAutomaticPrices** | **Number**| maximum number of related automaticPrices returned (when they are included) | [optional] 

### Return type

[**InAppPurchasePriceScheduleResponse**](InAppPurchasePriceScheduleResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## inAppPurchasesV2IapPriceScheduleGetToOneRelationship

> InAppPurchaseV2IapPriceScheduleLinkageResponse inAppPurchasesV2IapPriceScheduleGetToOneRelationship(id)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.InAppPurchasesApi();
let id = "id_example"; // String | the id of the requested resource
apiInstance.inAppPurchasesV2IapPriceScheduleGetToOneRelationship(id, (error, data, response) => {
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

[**InAppPurchaseV2IapPriceScheduleLinkageResponse**](InAppPurchaseV2IapPriceScheduleLinkageResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## inAppPurchasesV2ImagesGetToManyRelated

> InAppPurchaseImagesResponse inAppPurchasesV2ImagesGetToManyRelated(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.InAppPurchasesApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsInAppPurchaseImages': ["null"], // [String] | the fields to include for returned resources of type inAppPurchaseImages
  'fieldsInAppPurchases': ["null"], // [String] | the fields to include for returned resources of type inAppPurchases
  'limit': 56, // Number | maximum resources per page
  'include': ["null"] // [String] | comma-separated list of relationships to include
};
apiInstance.inAppPurchasesV2ImagesGetToManyRelated(id, opts, (error, data, response) => {
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
 **fieldsInAppPurchaseImages** | [**[String]**](String.md)| the fields to include for returned resources of type inAppPurchaseImages | [optional] 
 **fieldsInAppPurchases** | [**[String]**](String.md)| the fields to include for returned resources of type inAppPurchases | [optional] 
 **limit** | **Number**| maximum resources per page | [optional] 
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 

### Return type

[**InAppPurchaseImagesResponse**](InAppPurchaseImagesResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## inAppPurchasesV2ImagesGetToManyRelationship

> InAppPurchaseV2ImagesLinkagesResponse inAppPurchasesV2ImagesGetToManyRelationship(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.InAppPurchasesApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'limit': 56 // Number | maximum resources per page
};
apiInstance.inAppPurchasesV2ImagesGetToManyRelationship(id, opts, (error, data, response) => {
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

[**InAppPurchaseV2ImagesLinkagesResponse**](InAppPurchaseV2ImagesLinkagesResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## inAppPurchasesV2InAppPurchaseAvailabilityGetToOneRelated

> InAppPurchaseAvailabilityResponse inAppPurchasesV2InAppPurchaseAvailabilityGetToOneRelated(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.InAppPurchasesApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsInAppPurchaseAvailabilities': ["null"], // [String] | the fields to include for returned resources of type inAppPurchaseAvailabilities
  'fieldsTerritories': ["null"], // [String] | the fields to include for returned resources of type territories
  'include': ["null"], // [String] | comma-separated list of relationships to include
  'limitAvailableTerritories': 56 // Number | maximum number of related availableTerritories returned (when they are included)
};
apiInstance.inAppPurchasesV2InAppPurchaseAvailabilityGetToOneRelated(id, opts, (error, data, response) => {
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
 **fieldsInAppPurchaseAvailabilities** | [**[String]**](String.md)| the fields to include for returned resources of type inAppPurchaseAvailabilities | [optional] 
 **fieldsTerritories** | [**[String]**](String.md)| the fields to include for returned resources of type territories | [optional] 
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 
 **limitAvailableTerritories** | **Number**| maximum number of related availableTerritories returned (when they are included) | [optional] 

### Return type

[**InAppPurchaseAvailabilityResponse**](InAppPurchaseAvailabilityResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## inAppPurchasesV2InAppPurchaseAvailabilityGetToOneRelationship

> InAppPurchaseV2InAppPurchaseAvailabilityLinkageResponse inAppPurchasesV2InAppPurchaseAvailabilityGetToOneRelationship(id)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.InAppPurchasesApi();
let id = "id_example"; // String | the id of the requested resource
apiInstance.inAppPurchasesV2InAppPurchaseAvailabilityGetToOneRelationship(id, (error, data, response) => {
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

[**InAppPurchaseV2InAppPurchaseAvailabilityLinkageResponse**](InAppPurchaseV2InAppPurchaseAvailabilityLinkageResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## inAppPurchasesV2InAppPurchaseLocalizationsGetToManyRelated

> InAppPurchaseLocalizationsResponse inAppPurchasesV2InAppPurchaseLocalizationsGetToManyRelated(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.InAppPurchasesApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsInAppPurchaseLocalizations': ["null"], // [String] | the fields to include for returned resources of type inAppPurchaseLocalizations
  'fieldsInAppPurchases': ["null"], // [String] | the fields to include for returned resources of type inAppPurchases
  'limit': 56, // Number | maximum resources per page
  'include': ["null"] // [String] | comma-separated list of relationships to include
};
apiInstance.inAppPurchasesV2InAppPurchaseLocalizationsGetToManyRelated(id, opts, (error, data, response) => {
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
 **fieldsInAppPurchaseLocalizations** | [**[String]**](String.md)| the fields to include for returned resources of type inAppPurchaseLocalizations | [optional] 
 **fieldsInAppPurchases** | [**[String]**](String.md)| the fields to include for returned resources of type inAppPurchases | [optional] 
 **limit** | **Number**| maximum resources per page | [optional] 
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 

### Return type

[**InAppPurchaseLocalizationsResponse**](InAppPurchaseLocalizationsResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## inAppPurchasesV2InAppPurchaseLocalizationsGetToManyRelationship

> InAppPurchaseV2InAppPurchaseLocalizationsLinkagesResponse inAppPurchasesV2InAppPurchaseLocalizationsGetToManyRelationship(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.InAppPurchasesApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'limit': 56 // Number | maximum resources per page
};
apiInstance.inAppPurchasesV2InAppPurchaseLocalizationsGetToManyRelationship(id, opts, (error, data, response) => {
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

[**InAppPurchaseV2InAppPurchaseLocalizationsLinkagesResponse**](InAppPurchaseV2InAppPurchaseLocalizationsLinkagesResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## inAppPurchasesV2PricePointsGetToManyRelated

> InAppPurchasePricePointsResponse inAppPurchasesV2PricePointsGetToManyRelated(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.InAppPurchasesApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'filterTerritory': ["null"], // [String] | filter by id(s) of related 'territory'
  'fieldsInAppPurchasePricePoints': ["null"], // [String] | the fields to include for returned resources of type inAppPurchasePricePoints
  'fieldsTerritories': ["null"], // [String] | the fields to include for returned resources of type territories
  'limit': 56, // Number | maximum resources per page
  'include': ["null"] // [String] | comma-separated list of relationships to include
};
apiInstance.inAppPurchasesV2PricePointsGetToManyRelated(id, opts, (error, data, response) => {
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
 **filterTerritory** | [**[String]**](String.md)| filter by id(s) of related &#39;territory&#39; | [optional] 
 **fieldsInAppPurchasePricePoints** | [**[String]**](String.md)| the fields to include for returned resources of type inAppPurchasePricePoints | [optional] 
 **fieldsTerritories** | [**[String]**](String.md)| the fields to include for returned resources of type territories | [optional] 
 **limit** | **Number**| maximum resources per page | [optional] 
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 

### Return type

[**InAppPurchasePricePointsResponse**](InAppPurchasePricePointsResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/csv


## inAppPurchasesV2PricePointsGetToManyRelationship

> InAppPurchaseV2PricePointsLinkagesResponse inAppPurchasesV2PricePointsGetToManyRelationship(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.InAppPurchasesApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'limit': 56 // Number | maximum resources per page
};
apiInstance.inAppPurchasesV2PricePointsGetToManyRelationship(id, opts, (error, data, response) => {
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

[**InAppPurchaseV2PricePointsLinkagesResponse**](InAppPurchaseV2PricePointsLinkagesResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## inAppPurchasesV2PromotedPurchaseGetToOneRelated

> PromotedPurchaseResponse inAppPurchasesV2PromotedPurchaseGetToOneRelated(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.InAppPurchasesApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsPromotedPurchases': ["null"], // [String] | the fields to include for returned resources of type promotedPurchases
  'fieldsInAppPurchases': ["null"], // [String] | the fields to include for returned resources of type inAppPurchases
  'fieldsSubscriptions': ["null"], // [String] | the fields to include for returned resources of type subscriptions
  'include': ["null"] // [String] | comma-separated list of relationships to include
};
apiInstance.inAppPurchasesV2PromotedPurchaseGetToOneRelated(id, opts, (error, data, response) => {
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
 **fieldsPromotedPurchases** | [**[String]**](String.md)| the fields to include for returned resources of type promotedPurchases | [optional] 
 **fieldsInAppPurchases** | [**[String]**](String.md)| the fields to include for returned resources of type inAppPurchases | [optional] 
 **fieldsSubscriptions** | [**[String]**](String.md)| the fields to include for returned resources of type subscriptions | [optional] 
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 

### Return type

[**PromotedPurchaseResponse**](PromotedPurchaseResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## inAppPurchasesV2PromotedPurchaseGetToOneRelationship

> InAppPurchaseV2PromotedPurchaseLinkageResponse inAppPurchasesV2PromotedPurchaseGetToOneRelationship(id)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.InAppPurchasesApi();
let id = "id_example"; // String | the id of the requested resource
apiInstance.inAppPurchasesV2PromotedPurchaseGetToOneRelationship(id, (error, data, response) => {
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

[**InAppPurchaseV2PromotedPurchaseLinkageResponse**](InAppPurchaseV2PromotedPurchaseLinkageResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## inAppPurchasesV2UpdateInstance

> InAppPurchaseV2Response inAppPurchasesV2UpdateInstance(id, inAppPurchaseV2UpdateRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.InAppPurchasesApi();
let id = "id_example"; // String | the id of the requested resource
let inAppPurchaseV2UpdateRequest = new AppStoreConnectApi.InAppPurchaseV2UpdateRequest(); // InAppPurchaseV2UpdateRequest | InAppPurchase representation
apiInstance.inAppPurchasesV2UpdateInstance(id, inAppPurchaseV2UpdateRequest, (error, data, response) => {
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
 **inAppPurchaseV2UpdateRequest** | [**InAppPurchaseV2UpdateRequest**](InAppPurchaseV2UpdateRequest.md)| InAppPurchase representation | 

### Return type

[**InAppPurchaseV2Response**](InAppPurchaseV2Response.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

