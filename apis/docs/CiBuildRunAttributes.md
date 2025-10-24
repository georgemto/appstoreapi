# AppStoreConnectApi.CiBuildRunAttributes

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**number** | **Number** |  | [optional] 
**createdDate** | **Date** |  | [optional] 
**startedDate** | **Date** |  | [optional] 
**finishedDate** | **Date** |  | [optional] 
**sourceCommit** | [**CiBuildRunAttributesSourceCommit**](CiBuildRunAttributesSourceCommit.md) |  | [optional] 
**destinationCommit** | [**CiBuildRunAttributesSourceCommit**](CiBuildRunAttributesSourceCommit.md) |  | [optional] 
**isPullRequestBuild** | **Boolean** |  | [optional] 
**issueCounts** | [**CiIssueCounts**](CiIssueCounts.md) |  | [optional] 
**executionProgress** | [**CiExecutionProgress**](CiExecutionProgress.md) |  | [optional] 
**completionStatus** | [**CiCompletionStatus**](CiCompletionStatus.md) |  | [optional] 
**startReason** | **String** |  | [optional] 
**cancelReason** | **String** |  | [optional] 



## Enum: StartReasonEnum


* `GIT_REF_CHANGE` (value: `"GIT_REF_CHANGE"`)

* `MANUAL` (value: `"MANUAL"`)

* `MANUAL_REBUILD` (value: `"MANUAL_REBUILD"`)

* `PULL_REQUEST_OPEN` (value: `"PULL_REQUEST_OPEN"`)

* `PULL_REQUEST_UPDATE` (value: `"PULL_REQUEST_UPDATE"`)

* `SCHEDULE` (value: `"SCHEDULE"`)





## Enum: CancelReasonEnum


* `AUTOMATICALLY_BY_NEWER_BUILD` (value: `"AUTOMATICALLY_BY_NEWER_BUILD"`)

* `MANUALLY_BY_USER` (value: `"MANUALLY_BY_USER"`)




