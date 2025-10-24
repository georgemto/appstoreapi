# AppStoreConnectApi.BuildUploadFileAttributes

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assetDeliveryState** | [**AppMediaAssetState**](AppMediaAssetState.md) |  | [optional] 
**assetToken** | **String** |  | [optional] 
**assetType** | **String** |  | [optional] 
**fileName** | **String** |  | [optional] 
**fileSize** | **Number** |  | [optional] 
**sourceFileChecksums** | [**Checksums**](Checksums.md) |  | [optional] 
**uploadOperations** | [**[DeliveryFileUploadOperation]**](DeliveryFileUploadOperation.md) |  | [optional] 
**uti** | **String** |  | [optional] 



## Enum: AssetTypeEnum


* `ASSET` (value: `"ASSET"`)

* `ASSET_DESCRIPTION` (value: `"ASSET_DESCRIPTION"`)

* `ASSET_SPI` (value: `"ASSET_SPI"`)





## Enum: UtiEnum


* `com.apple.binary-property-list` (value: `"com.apple.binary-property-list"`)

* `com.apple.ipa` (value: `"com.apple.ipa"`)

* `com.apple.pkg` (value: `"com.apple.pkg"`)

* `com.apple.xml-property-list` (value: `"com.apple.xml-property-list"`)

* `com.pkware.zip-archive` (value: `"com.pkware.zip-archive"`)




