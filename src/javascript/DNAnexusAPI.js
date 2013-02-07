// Do not modify this file by hand.
//
// It is automatically generated by src/api_wrappers/generateJSAPIWrappers.py.
// (Run make api_wrappers to update it.)

var dx = require('DNAnexus');


exports.appAddCategories = function(app_id_or_name, input_params) {
  return dx.DXHTTPRequest('/' + app_id_or_name + '/addCategories', input_params);
};

exports.appAddCategoriesWithAlias = function(app_name, app_alias, input_params) {
  return exports.appAddCategories(app_name + '/' + app_alias, input_params);
};


exports.appAddDevelopers = function(app_id_or_name, input_params) {
  return dx.DXHTTPRequest('/' + app_id_or_name + '/addDevelopers', input_params);
};

exports.appAddDevelopersWithAlias = function(app_name, app_alias, input_params) {
  return exports.appAddDevelopers(app_name + '/' + app_alias, input_params);
};


exports.appAddTags = function(app_id_or_name, input_params) {
  return dx.DXHTTPRequest('/' + app_id_or_name + '/addTags', input_params);
};

exports.appAddTagsWithAlias = function(app_name, app_alias, input_params) {
  return exports.appAddTags(app_name + '/' + app_alias, input_params);
};


exports.appDelete = function(app_id_or_name, input_params) {
  return dx.DXHTTPRequest('/' + app_id_or_name + '/delete', input_params);
};

exports.appDeleteWithAlias = function(app_name, app_alias, input_params) {
  return exports.appDelete(app_name + '/' + app_alias, input_params);
};


exports.appDescribe = function(app_id_or_name, input_params) {
  return dx.DXHTTPRequest('/' + app_id_or_name + '/describe', input_params);
};

exports.appDescribeWithAlias = function(app_name, app_alias, input_params) {
  return exports.appDescribe(app_name + '/' + app_alias, input_params);
};


exports.appGet = function(app_id_or_name, input_params) {
  return dx.DXHTTPRequest('/' + app_id_or_name + '/get', input_params);
};

exports.appGetWithAlias = function(app_name, app_alias, input_params) {
  return exports.appGet(app_name + '/' + app_alias, input_params);
};


exports.appInstall = function(app_id_or_name, input_params) {
  return dx.DXHTTPRequest('/' + app_id_or_name + '/install', input_params);
};

exports.appInstallWithAlias = function(app_name, app_alias, input_params) {
  return exports.appInstall(app_name + '/' + app_alias, input_params);
};


exports.appListCategories = function(app_id_or_name, input_params) {
  return dx.DXHTTPRequest('/' + app_id_or_name + '/listCategories', input_params);
};

exports.appListCategoriesWithAlias = function(app_name, app_alias, input_params) {
  return exports.appListCategories(app_name + '/' + app_alias, input_params);
};


exports.appListDevelopers = function(app_id_or_name, input_params) {
  return dx.DXHTTPRequest('/' + app_id_or_name + '/listDevelopers', input_params);
};

exports.appListDevelopersWithAlias = function(app_name, app_alias, input_params) {
  return exports.appListDevelopers(app_name + '/' + app_alias, input_params);
};


exports.appPublish = function(app_id_or_name, input_params) {
  return dx.DXHTTPRequest('/' + app_id_or_name + '/publish', input_params);
};

exports.appPublishWithAlias = function(app_name, app_alias, input_params) {
  return exports.appPublish(app_name + '/' + app_alias, input_params);
};


exports.appRemoveCategories = function(app_id_or_name, input_params) {
  return dx.DXHTTPRequest('/' + app_id_or_name + '/removeCategories', input_params);
};

exports.appRemoveCategoriesWithAlias = function(app_name, app_alias, input_params) {
  return exports.appRemoveCategories(app_name + '/' + app_alias, input_params);
};


exports.appRemoveDevelopers = function(app_id_or_name, input_params) {
  return dx.DXHTTPRequest('/' + app_id_or_name + '/removeDevelopers', input_params);
};

exports.appRemoveDevelopersWithAlias = function(app_name, app_alias, input_params) {
  return exports.appRemoveDevelopers(app_name + '/' + app_alias, input_params);
};


exports.appRemoveTags = function(app_id_or_name, input_params) {
  return dx.DXHTTPRequest('/' + app_id_or_name + '/removeTags', input_params);
};

exports.appRemoveTagsWithAlias = function(app_name, app_alias, input_params) {
  return exports.appRemoveTags(app_name + '/' + app_alias, input_params);
};


exports.appRun = function(app_id_or_name, input_params) {
  return dx.DXHTTPRequest('/' + app_id_or_name + '/run', input_params);
};

exports.appRunWithAlias = function(app_name, app_alias, input_params) {
  return exports.appRun(app_name + '/' + app_alias, input_params);
};


exports.appUninstall = function(app_id_or_name, input_params) {
  return dx.DXHTTPRequest('/' + app_id_or_name + '/uninstall', input_params);
};

exports.appUninstallWithAlias = function(app_name, app_alias, input_params) {
  return exports.appUninstall(app_name + '/' + app_alias, input_params);
};


exports.appUpdate = function(app_id_or_name, input_params) {
  return dx.DXHTTPRequest('/' + app_id_or_name + '/update', input_params);
};

exports.appUpdateWithAlias = function(app_name, app_alias, input_params) {
  return exports.appUpdate(app_name + '/' + app_alias, input_params);
};


exports.appNew = function(input_params) {
  return dx.DXHTTPRequest('/app/new', input_params);
};


exports.appletAddTags = function(object_id, input_params) {
  return dx.DXHTTPRequest('/' + object_id + '/addTags', input_params);
};


exports.appletAddTypes = function(object_id, input_params) {
  return dx.DXHTTPRequest('/' + object_id + '/addTypes', input_params);
};


exports.appletClose = function(object_id, input_params) {
  return dx.DXHTTPRequest('/' + object_id + '/close', input_params);
};


exports.appletDescribe = function(object_id, input_params) {
  return dx.DXHTTPRequest('/' + object_id + '/describe', input_params);
};


exports.appletGet = function(object_id, input_params) {
  return dx.DXHTTPRequest('/' + object_id + '/get', input_params);
};


exports.appletGetDetails = function(object_id, input_params) {
  return dx.DXHTTPRequest('/' + object_id + '/getDetails', input_params);
};


exports.appletListProjects = function(object_id, input_params) {
  return dx.DXHTTPRequest('/' + object_id + '/listProjects', input_params);
};


exports.appletRemoveTags = function(object_id, input_params) {
  return dx.DXHTTPRequest('/' + object_id + '/removeTags', input_params);
};


exports.appletRemoveTypes = function(object_id, input_params) {
  return dx.DXHTTPRequest('/' + object_id + '/removeTypes', input_params);
};


exports.appletRename = function(object_id, input_params) {
  return dx.DXHTTPRequest('/' + object_id + '/rename', input_params);
};


exports.appletRun = function(object_id, input_params) {
  return dx.DXHTTPRequest('/' + object_id + '/run', input_params);
};


exports.appletSetDetails = function(object_id, input_params) {
  return dx.DXHTTPRequest('/' + object_id + '/setDetails', input_params);
};


exports.appletSetProperties = function(object_id, input_params) {
  return dx.DXHTTPRequest('/' + object_id + '/setProperties', input_params);
};


exports.appletSetVisibility = function(object_id, input_params) {
  return dx.DXHTTPRequest('/' + object_id + '/setVisibility', input_params);
};


exports.appletNew = function(input_params) {
  return dx.DXHTTPRequest('/applet/new', input_params);
};


exports.containerClone = function(object_id, input_params) {
  return dx.DXHTTPRequest('/' + object_id + '/clone', input_params);
};


exports.containerDescribe = function(object_id, input_params) {
  return dx.DXHTTPRequest('/' + object_id + '/describe', input_params);
};


exports.containerDestroy = function(object_id, input_params) {
  return dx.DXHTTPRequest('/' + object_id + '/destroy', input_params);
};


exports.containerListFolder = function(object_id, input_params) {
  return dx.DXHTTPRequest('/' + object_id + '/listFolder', input_params);
};


exports.containerMove = function(object_id, input_params) {
  return dx.DXHTTPRequest('/' + object_id + '/move', input_params);
};


exports.containerNewFolder = function(object_id, input_params) {
  return dx.DXHTTPRequest('/' + object_id + '/newFolder', input_params);
};


exports.containerRemoveFolder = function(object_id, input_params) {
  return dx.DXHTTPRequest('/' + object_id + '/removeFolder', input_params);
};


exports.containerRemoveObjects = function(object_id, input_params) {
  return dx.DXHTTPRequest('/' + object_id + '/removeObjects', input_params);
};


exports.containerRenameFolder = function(object_id, input_params) {
  return dx.DXHTTPRequest('/' + object_id + '/renameFolder', input_params);
};


exports.fileAddTags = function(object_id, input_params) {
  return dx.DXHTTPRequest('/' + object_id + '/addTags', input_params);
};


exports.fileAddTypes = function(object_id, input_params) {
  return dx.DXHTTPRequest('/' + object_id + '/addTypes', input_params);
};


exports.fileClose = function(object_id, input_params) {
  return dx.DXHTTPRequest('/' + object_id + '/close', input_params);
};


exports.fileDescribe = function(object_id, input_params) {
  return dx.DXHTTPRequest('/' + object_id + '/describe', input_params);
};


exports.fileDownload = function(object_id, input_params) {
  return dx.DXHTTPRequest('/' + object_id + '/download', input_params);
};


exports.fileGetDetails = function(object_id, input_params) {
  return dx.DXHTTPRequest('/' + object_id + '/getDetails', input_params);
};


exports.fileListProjects = function(object_id, input_params) {
  return dx.DXHTTPRequest('/' + object_id + '/listProjects', input_params);
};


exports.fileRemoveTags = function(object_id, input_params) {
  return dx.DXHTTPRequest('/' + object_id + '/removeTags', input_params);
};


exports.fileRemoveTypes = function(object_id, input_params) {
  return dx.DXHTTPRequest('/' + object_id + '/removeTypes', input_params);
};


exports.fileRename = function(object_id, input_params) {
  return dx.DXHTTPRequest('/' + object_id + '/rename', input_params);
};


exports.fileSetDetails = function(object_id, input_params) {
  return dx.DXHTTPRequest('/' + object_id + '/setDetails', input_params);
};


exports.fileSetProperties = function(object_id, input_params) {
  return dx.DXHTTPRequest('/' + object_id + '/setProperties', input_params);
};


exports.fileSetVisibility = function(object_id, input_params) {
  return dx.DXHTTPRequest('/' + object_id + '/setVisibility', input_params);
};


exports.fileUpload = function(object_id, input_params) {
  return dx.DXHTTPRequest('/' + object_id + '/upload', input_params);
};


exports.fileNew = function(input_params) {
  return dx.DXHTTPRequest('/file/new', input_params);
};


exports.gtableAddRows = function(object_id, input_params) {
  return dx.DXHTTPRequest('/' + object_id + '/addRows', input_params);
};


exports.gtableAddTags = function(object_id, input_params) {
  return dx.DXHTTPRequest('/' + object_id + '/addTags', input_params);
};


exports.gtableAddTypes = function(object_id, input_params) {
  return dx.DXHTTPRequest('/' + object_id + '/addTypes', input_params);
};


exports.gtableClose = function(object_id, input_params) {
  return dx.DXHTTPRequest('/' + object_id + '/close', input_params);
};


exports.gtableDescribe = function(object_id, input_params) {
  return dx.DXHTTPRequest('/' + object_id + '/describe', input_params);
};


exports.gtableGet = function(object_id, input_params) {
  return dx.DXHTTPRequest('/' + object_id + '/get', input_params);
};


exports.gtableGetDetails = function(object_id, input_params) {
  return dx.DXHTTPRequest('/' + object_id + '/getDetails', input_params);
};


exports.gtableListProjects = function(object_id, input_params) {
  return dx.DXHTTPRequest('/' + object_id + '/listProjects', input_params);
};


exports.gtableNextPart = function(object_id, input_params) {
  return dx.DXHTTPRequest('/' + object_id + '/nextPart', input_params);
};


exports.gtableRemoveTags = function(object_id, input_params) {
  return dx.DXHTTPRequest('/' + object_id + '/removeTags', input_params);
};


exports.gtableRemoveTypes = function(object_id, input_params) {
  return dx.DXHTTPRequest('/' + object_id + '/removeTypes', input_params);
};


exports.gtableRename = function(object_id, input_params) {
  return dx.DXHTTPRequest('/' + object_id + '/rename', input_params);
};


exports.gtableSetDetails = function(object_id, input_params) {
  return dx.DXHTTPRequest('/' + object_id + '/setDetails', input_params);
};


exports.gtableSetProperties = function(object_id, input_params) {
  return dx.DXHTTPRequest('/' + object_id + '/setProperties', input_params);
};


exports.gtableSetVisibility = function(object_id, input_params) {
  return dx.DXHTTPRequest('/' + object_id + '/setVisibility', input_params);
};


exports.gtableNew = function(input_params) {
  return dx.DXHTTPRequest('/gtable/new', input_params);
};


exports.jobDescribe = function(object_id, input_params) {
  return dx.DXHTTPRequest('/' + object_id + '/describe', input_params);
};


exports.jobStreamLog = function(object_id, input_params) {
  return dx.DXHTTPRequest('/' + object_id + '/streamLog', input_params);
};


exports.jobTerminate = function(object_id, input_params) {
  return dx.DXHTTPRequest('/' + object_id + '/terminate', input_params);
};


exports.jobNew = function(input_params) {
  return dx.DXHTTPRequest('/job/new', input_params);
};


exports.notificationsGet = function(input_params) {
  return dx.DXHTTPRequest('/notifications/get', input_params);
};


exports.notificationsMarkRead = function(input_params) {
  return dx.DXHTTPRequest('/notifications/markRead', input_params);
};


exports.projectAddTags = function(object_id, input_params) {
  return dx.DXHTTPRequest('/' + object_id + '/addTags', input_params);
};


exports.projectClone = function(object_id, input_params) {
  return dx.DXHTTPRequest('/' + object_id + '/clone', input_params);
};


exports.projectDecreasePermissions = function(object_id, input_params) {
  return dx.DXHTTPRequest('/' + object_id + '/decreasePermissions', input_params);
};


exports.projectDescribe = function(object_id, input_params) {
  return dx.DXHTTPRequest('/' + object_id + '/describe', input_params);
};


exports.projectDestroy = function(object_id, input_params) {
  return dx.DXHTTPRequest('/' + object_id + '/destroy', input_params);
};


exports.projectInvite = function(object_id, input_params) {
  return dx.DXHTTPRequest('/' + object_id + '/invite', input_params);
};


exports.projectLeave = function(object_id, input_params) {
  return dx.DXHTTPRequest('/' + object_id + '/leave', input_params);
};


exports.projectListFolder = function(object_id, input_params) {
  return dx.DXHTTPRequest('/' + object_id + '/listFolder', input_params);
};


exports.projectMove = function(object_id, input_params) {
  return dx.DXHTTPRequest('/' + object_id + '/move', input_params);
};


exports.projectNewFolder = function(object_id, input_params) {
  return dx.DXHTTPRequest('/' + object_id + '/newFolder', input_params);
};


exports.projectRemoveFolder = function(object_id, input_params) {
  return dx.DXHTTPRequest('/' + object_id + '/removeFolder', input_params);
};


exports.projectRemoveObjects = function(object_id, input_params) {
  return dx.DXHTTPRequest('/' + object_id + '/removeObjects', input_params);
};


exports.projectRemoveTags = function(object_id, input_params) {
  return dx.DXHTTPRequest('/' + object_id + '/removeTags', input_params);
};


exports.projectRenameFolder = function(object_id, input_params) {
  return dx.DXHTTPRequest('/' + object_id + '/renameFolder', input_params);
};


exports.projectSetProperties = function(object_id, input_params) {
  return dx.DXHTTPRequest('/' + object_id + '/setProperties', input_params);
};


exports.projectSubscribe = function(object_id, input_params) {
  return dx.DXHTTPRequest('/' + object_id + '/subscribe', input_params);
};


exports.projectUnsubscribe = function(object_id, input_params) {
  return dx.DXHTTPRequest('/' + object_id + '/unsubscribe', input_params);
};


exports.projectUpdate = function(object_id, input_params) {
  return dx.DXHTTPRequest('/' + object_id + '/update', input_params);
};


exports.projectNew = function(input_params) {
  return dx.DXHTTPRequest('/project/new', input_params);
};


exports.recordAddTags = function(object_id, input_params) {
  return dx.DXHTTPRequest('/' + object_id + '/addTags', input_params);
};


exports.recordAddTypes = function(object_id, input_params) {
  return dx.DXHTTPRequest('/' + object_id + '/addTypes', input_params);
};


exports.recordClose = function(object_id, input_params) {
  return dx.DXHTTPRequest('/' + object_id + '/close', input_params);
};


exports.recordDescribe = function(object_id, input_params) {
  return dx.DXHTTPRequest('/' + object_id + '/describe', input_params);
};


exports.recordGetDetails = function(object_id, input_params) {
  return dx.DXHTTPRequest('/' + object_id + '/getDetails', input_params);
};


exports.recordListProjects = function(object_id, input_params) {
  return dx.DXHTTPRequest('/' + object_id + '/listProjects', input_params);
};


exports.recordRemoveTags = function(object_id, input_params) {
  return dx.DXHTTPRequest('/' + object_id + '/removeTags', input_params);
};


exports.recordRemoveTypes = function(object_id, input_params) {
  return dx.DXHTTPRequest('/' + object_id + '/removeTypes', input_params);
};


exports.recordRename = function(object_id, input_params) {
  return dx.DXHTTPRequest('/' + object_id + '/rename', input_params);
};


exports.recordSetDetails = function(object_id, input_params) {
  return dx.DXHTTPRequest('/' + object_id + '/setDetails', input_params);
};


exports.recordSetProperties = function(object_id, input_params) {
  return dx.DXHTTPRequest('/' + object_id + '/setProperties', input_params);
};


exports.recordSetVisibility = function(object_id, input_params) {
  return dx.DXHTTPRequest('/' + object_id + '/setVisibility', input_params);
};


exports.recordNew = function(input_params) {
  return dx.DXHTTPRequest('/record/new', input_params);
};


exports.systemFindAffiliates = function(input_params) {
  return dx.DXHTTPRequest('/system/findAffiliates', input_params);
};


exports.systemFindApps = function(input_params) {
  return dx.DXHTTPRequest('/system/findApps', input_params);
};


exports.systemFindDataObjects = function(input_params) {
  return dx.DXHTTPRequest('/system/findDataObjects', input_params);
};


exports.systemFindJobs = function(input_params) {
  return dx.DXHTTPRequest('/system/findJobs', input_params);
};


exports.systemFindProjects = function(input_params) {
  return dx.DXHTTPRequest('/system/findProjects', input_params);
};


exports.systemFindUsers = function(input_params) {
  return dx.DXHTTPRequest('/system/findUsers', input_params);
};


exports.systemFindProjectMembers = function(input_params) {
  return dx.DXHTTPRequest('/system/findProjectMembers', input_params);
};


exports.systemShortenURL = function(input_params) {
  return dx.DXHTTPRequest('/system/shortenURL', input_params);
};


exports.userDescribe = function(object_id, input_params) {
  return dx.DXHTTPRequest('/' + object_id + '/describe', input_params);
};


exports.userUpdate = function(object_id, input_params) {
  return dx.DXHTTPRequest('/' + object_id + '/update', input_params);
};

