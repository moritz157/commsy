exports.getGuestSession = function(portal_id, callback){
	soapClient.getGuestSession({"portal_id":portal_id}, function(err, result){
		if(err){
			console.log(err)
		}
		callback(err, result)
	})
}
exports.getActiveRoomList = function(session_id, portal_id, count, callback){
	soapClient.getActiveRoomList({"session_id":session_id, "portal_id":portal_id, "count":count}, function(err, result){
		if(err){
			console.log(err)
		}
		callback(err, result)
	})
}
exports.getActiveRoomListForUser = function(session_id, portal_id, count, callback){
	soapClient.getActiveRoomListForUser({"session_id":session_id, "portal_id":portal_id, "count":count}, function(err, result){
		if(err){
			console.log(err)
		}
		callback(err, result)
	})
}
exports.createUser = function(session_id, portal_id, firstname, lastname, mail, user_id, user_pwd, agb, send_email, callback){
	soapClient.createUser({"session_id":session_id, "portal_id":portal_id, "firstname":firstname, "lastname":lastname, "mail":mail, "user_id":user_id, "user_pwd":user_pwd, "agb":agb, "send_email":send_email}, function(err, result){
		if(err){
			console.log(err)
		}
		callback(err, result)
	})
}
exports.getCountRooms = function(session_id, portal_id, callback){
	soapClient.getCountRooms({"session_id":session_id, "portal_id":portal_id}, function(err, result){
		if(err){
			console.log(err)
		}
		callback(err, result)
	})
}
exports.getCountUser = function(session_id, portal_id, callback){
	soapClient.getCountUser({"session_id":session_id, "portal_id":portal_id}, function(err, result){
		if(err){
			console.log(err)
		}
		callback(err, result)
	})
}
exports.authenticate = function(user_id, password, portal_id, auth_source_id, callback){
	soapClient.authenticate({"user_id":user_id, "password":password, "portal_id":portal_id, "auth_source_id":auth_source_id}, function(err, result){
		if(err){
			console.log(err)
		}
		callback(err, result)
	})
}
exports.authenticateWithLogin = function(user_id, password, portal_id, auth_source_id, callback){
	soapClient.authenticateWithLogin({"user_id":user_id, "password":password, "portal_id":portal_id, "auth_source_id":auth_source_id}, function(err, result){
		if(err){
			console.log(err)
		}
		callback(err, result)
	})
}
exports.IMS = function(session_id, ims_xml, callback){
	soapClient.IMS({"session_id":session_id, "ims_xml":ims_xml}, function(err, result){
		if(err){
			console.log(err)
		}
		callback(err, result)
	})
}
exports.getMaterialList = function(session_id, context_id, callback){
	soapClient.getMaterialList({"session_id":session_id, "context_id":context_id}, function(err, result){
		if(err){
			console.log(err)
		}
		callback(err, result)
	})
}
exports.getPrivateRoomMaterialList = function(session_id, callback){
	soapClient.getPrivateRoomMaterialList({"session_id":session_id}, function(err, result){
		if(err){
			console.log(err)
		}
		callback(err, result)
	})
}
exports.getSectionListFromMaterial = function(session_id, material_id, callback){
	soapClient.getSectionListFromMaterial({"session_id":session_id, "material_id":material_id}, function(err, result){
		if(err){
			console.log(err)
		}
		callback(err, result)
	})
}
exports.getFileListFromMaterial = function(session_id, material_id, callback){
	soapClient.getFileListFromMaterial({"session_id":session_id, "material_id":material_id}, function(err, result){
		if(err){
			console.log(err)
		}
		callback(err, result)
	})
}
exports.getFileListFromItem = function(session_id, item_id, callback){
	soapClient.getFileListFromItem({"session_id":session_id, "item_id":item_id}, function(err, result){
		if(err){
			console.log(err)
		}
		callback(err, result)
	})
}
exports.getFileItem = function(session_id, file_id, callback){
	soapClient.getFileItem({"session_id":session_id, "file_id":file_id}, function(err, result){
		if(err){
			console.log(err)
		}
		callback(err, result)
	})
}
exports.deleteFileItem = function(session_id, file_id, callback){
	soapClient.deleteFileItem({"session_id":session_id, "file_id":file_id}, function(err, result){
		if(err){
			console.log(err)
		}
		callback(err, result)
	})
}
exports.addPrivateRoomMaterialList = function(session_id, material_list_xml, callback){
	soapClient.addPrivateRoomMaterialList({"session_id":session_id, "material_list_xml":material_list_xml}, function(err, result){
		if(err){
			console.log(err)
		}
		callback(err, result)
	})
}
exports.addFileForMaterial = function(session_id, material_id, file_item_xml, callback){
	soapClient.addFileForMaterial({"session_id":session_id, "material_id":material_id, "file_item_xml":file_item_xml}, function(err, result){
		if(err){
			console.log(err)
		}
		callback(err, result)
	})
}
exports.linkFileToMaterial = function(session_id, material_id, file_id, callback){
	soapClient.linkFileToMaterial({"session_id":session_id, "material_id":material_id, "file_id":file_id}, function(err, result){
		if(err){
			console.log(err)
		}
		callback(err, result)
	})
}
exports.addMaterialLimit = function(key, value, session_id, callback){
	soapClient.addMaterialLimit({"key":key, "value":value, "session_id":session_id}, function(err, result){
		if(err){
			console.log(err)
		}
		callback(err, result)
	})
}
exports.getBuzzwordList = function(session_id, context_id, callback){
	soapClient.getBuzzwordList({"session_id":session_id, "context_id":context_id}, function(err, result){
		if(err){
			console.log(err)
		}
		callback(err, result)
	})
}
exports.getLabelList = function(session_id, context_id, callback){
	soapClient.getLabelList({"session_id":session_id, "context_id":context_id}, function(err, result){
		if(err){
			console.log(err)
		}
		callback(err, result)
	})
}
exports.getGroupList = function(session_id, context_id, callback){
	soapClient.getGroupList({"session_id":session_id, "context_id":context_id}, function(err, result){
		if(err){
			console.log(err)
		}
		callback(err, result)
	})
}
exports.getTopicList = function(session_id, context_id, callback){
	soapClient.getTopicList({"session_id":session_id, "context_id":context_id}, function(err, result){
		if(err){
			console.log(err)
		}
		callback(err, result)
	})
}
exports.getUserInfo = function(session_id, context_id, callback){
	soapClient.getUserInfo({"session_id":session_id, "context_id":context_id}, function(err, result){
		if(err){
			console.log(err)
		}
		callback(err, result)
	})
}
exports.getRSSUrl = function(session_id, callback){
	soapClient.getRSSUrl({"session_id":session_id}, function(err, result){
		if(err){
			console.log(err)
		}
		callback(err, result)
	})
}
exports.getRoomList = function(session_id, callback){
	soapClient.getRoomList({"session_id":session_id}, function(err, result){
		if(err){
			console.log(err)
		}
		callback(err, result)
	})
}
exports.getPortalRoomConfiguration = function(session_id, portal_id, callback){
	soapClient.getPortalRoomConfiguration({"session_id":session_id, "portal_id":portal_id}, function(err, result){
		if(err){
			console.log(err)
		}
		callback(err, result)
	})
}
exports.touAccepted = function(session_id, portal_id, callback){
	soapClient.touAccepted({"session_id":session_id, "portal_id":portal_id}, function(err, result){
		if(err){
			console.log(err)
		}
		callback(err, result)
	})
}
exports.saveRoom = function(session_id, context_id, title, id, type, template, language, intervals, assignments, description, callback){
	soapClient.saveRoom({"session_id":session_id, "context_id":context_id, "title":title, "id":id, "type":type, "template":template, "language":language, "intervals":intervals, "assignments":assignments, "description":description}, function(err, result){
		if(err){
			console.log(err)
		}
		callback(err, result)
	})
}
exports.deleteRoom = function(session_id, portal_id, room_id, callback){
	soapClient.deleteRoom({"session_id":session_id, "portal_id":portal_id, "room_id":room_id}, function(err, result){
		if(err){
			console.log(err)
		}
		callback(err, result)
	})
}
exports.archiveRoom = function(session_id, portal_id, room_id, callback){
	soapClient.archiveRoom({"session_id":session_id, "portal_id":portal_id, "room_id":room_id}, function(err, result){
		if(err){
			console.log(err)
		}
		callback(err, result)
	})
}
exports.getRoomDetails = function(session_id, context_id, room_id, callback){
	soapClient.getRoomDetails({"session_id":session_id, "context_id":context_id, "room_id":room_id}, function(err, result){
		if(err){
			console.log(err)
		}
		callback(err, result)
	})
}
exports.sendContactMail = function(session_id, context_id, message, callback){
	soapClient.sendContactMail({"session_id":session_id, "context_id":context_id, "message":message}, function(err, result){
		if(err){
			console.log(err)
		}
		callback(err, result)
	})
}
exports.getAuthenticationForWiki = function(session_id, context_id, user_id, callback){
	soapClient.getAuthenticationForWiki({"session_id":session_id, "context_id":context_id, "user_id":user_id}, function(err, result){
		if(err){
			console.log(err)
		}
		callback(err, result)
	})
}
exports.savePosForItem = function(session_id, item_id, x, y, callback){
	soapClient.savePosForItem({"session_id":session_id, "item_id":item_id, "x":x, "y":y}, function(err, result){
		if(err){
			console.log(err)
		}
		callback(err, result)
	})
}
exports.savePosForLink = function(session_id, item_id, label_id, x, y, callback){
	soapClient.savePosForLink({"session_id":session_id, "item_id":item_id, "label_id":label_id, "x":x, "y":y}, function(err, result){
		if(err){
			console.log(err)
		}
		callback(err, result)
	})
}
exports.refreshSession = function(session_id, callback){
	soapClient.refreshSession({"session_id":session_id}, function(err, result){
		if(err){
			console.log(err)
		}
		callback(err, result)
	})
}
exports.logout = function(session_id, callback){
	soapClient.logout({"session_id":session_id}, function(err, result){
		if(err){
			console.log(err)
		}
		callback(err, result)
	})
}
exports.authenticateViaSession = function(session_id, callback){
	soapClient.authenticateViaSession({"session_id":session_id}, function(err, result){
		if(err){
			console.log(err)
		}
		callback(err, result)
	})
}
exports.wordpressAuthenticateViaSession = function(session_id, callback){
	soapClient.wordpressAuthenticateViaSession({"session_id":session_id}, function(err, result){
		if(err){
			console.log(err)
		}
		callback(err, result)
	})
}
exports.changeUserEmail = function(session_id, email, callback){
	soapClient.changeUserEmail({"session_id":session_id, "email":email}, function(err, result){
		if(err){
			console.log(err)
		}
		callback(err, result)
	})
}
exports.changeUserEmailAll = function(session_id, email, callback){
	soapClient.changeUserEmailAll({"session_id":session_id, "email":email}, function(err, result){
		if(err){
			console.log(err)
		}
		callback(err, result)
	})
}
exports.changeUserId = function(session_id, user_id, callback){
	soapClient.changeUserId({"session_id":session_id, "user_id":user_id}, function(err, result){
		if(err){
			console.log(err)
		}
		callback(err, result)
	})
}
exports.setUserExternalId = function(session_id, external_id, callback){
	soapClient.setUserExternalId({"session_id":session_id, "external_id":external_id}, function(err, result){
		if(err){
			console.log(err)
		}
		callback(err, result)
	})
}
exports.changeUserName = function(session_id, firstname, lastname, callback){
	soapClient.changeUserName({"session_id":session_id, "firstname":firstname, "lastname":lastname}, function(err, result){
		if(err){
			console.log(err)
		}
		callback(err, result)
	})
}
exports.updateLastlogin = function(session_id, tool, room_id, callback){
	soapClient.updateLastlogin({"session_id":session_id, "tool":tool, "room_id":room_id}, function(err, result){
		if(err){
			console.log(err)
		}
		callback(err, result)
	})
}
exports.createMembershipBySession = function(session_id, context_id, agb, callback){
	soapClient.createMembershipBySession({"session_id":session_id, "context_id":context_id, "agb":agb}, function(err, result){
		if(err){
			console.log(err)
		}
		callback(err, result)
	})
}
exports.getAGBFromRoom = function(context_id, language, callback){
	soapClient.getAGBFromRoom({"context_id":context_id, "language":language}, function(err, result){
		if(err){
			console.log(err)
		}
		callback(err, result)
	})
}
exports.getStatistics = function(session_id, start_date, end_date, callback){
	soapClient.getStatistics({"session_id":session_id, "start_date":start_date, "end_date":end_date}, function(err, result){
		if(err){
			console.log(err)
		}
		callback(err, result)
	})
}
exports.authenticateForApp = function(user_id, password, portal_id, auth_source_id, callback){
	soapClient.authenticateForApp({"user_id":user_id, "password":password, "portal_id":portal_id, "auth_source_id":auth_source_id}, function(err, result){
		if(err){
			console.log(err)
		}
		callback(err, result)
	})
}
exports.getPortalRoomList = function(session_id, portal_id, callback){
	soapClient.getPortalRoomList({"session_id":session_id, "portal_id":portal_id}, function(err, result){
		if(err){
			console.log(err)
		}
		callback(err, result)
	})
}
exports.getPortalRoomListByCountAndSearch = function(session_id, start, count, search, timeLimit, roomTypeLimit, order, callback){
	soapClient.getPortalRoomListByCountAndSearch({"session_id":session_id, "start":start, "count":count, "search":search, "timeLimit":timeLimit, "roomTypeLimit":roomTypeLimit, "order":order}, function(err, result){
		if(err){
			console.log(err)
		}
		callback(err, result)
	})
}
exports.getUserInformation = function(session_id, context_id, callback){
	soapClient.getUserInformation({"session_id":session_id, "context_id":context_id}, function(err, result){
		if(err){
			console.log(err)
		}
		callback(err, result)
	})
}
exports.getPortalConfig = function(portal_id, callback){
	soapClient.getPortalConfig({"portal_id":portal_id}, function(err, result){
		if(err){
			console.log(err)
		}
		callback(err, result)
	})
}
exports.getAuthSources = function(session_id, portal_id, callback){
	soapClient.getAuthSources({"session_id":session_id, "portal_id":portal_id}, function(err, result){
		if(err){
			console.log(err)
		}
		callback(err, result)
	})
}
exports.getBarInformation = function(session_id, portal_id, callback){
	soapClient.getBarInformation({"session_id":session_id, "portal_id":portal_id}, function(err, result){
		if(err){
			console.log(err)
		}
		callback(err, result)
	})
}
exports.getContextToU = function(session_id, portal_id, callback){
	soapClient.getContextToU({"session_id":session_id, "portal_id":portal_id}, function(err, result){
		if(err){
			console.log(err)
		}
		callback(err, result)
	})
}
exports.registerUser = function(session_id, portal_id, firstname, lastname, email, identification, password, tou, callback){
	soapClient.registerUser({"session_id":session_id, "portal_id":portal_id, "firstname":firstname, "lastname":lastname, "email":email, "identification":identification, "password":password, "tou":tou}, function(err, result){
		if(err){
			console.log(err)
		}
		callback(err, result)
	})
}
exports.sendIdForget = function(session_id, portal_id, email, callback){
	soapClient.sendIdForget({"session_id":session_id, "portal_id":portal_id, "email":email}, function(err, result){
		if(err){
			console.log(err)
		}
		callback(err, result)
	})
}
exports.sendPwForget = function(session_id, portal_id, identification, callback){
	soapClient.sendPwForget({"session_id":session_id, "portal_id":portal_id, "identification":identification}, function(err, result){
		if(err){
			console.log(err)
		}
		callback(err, result)
	})
}
exports.getPortalList = function(callback){
	soapClient.getPortalList({}, function(err, result){
		if(err){
			console.log(err)
		}
		callback(err, result)
	})
}
exports.getAnnouncementsInRange = function(session_id, context_id, valid_timestamp, callback){
	soapClient.getAnnouncementsInRange({"session_id":session_id, "context_id":context_id, "valid_timestamp":valid_timestamp}, function(err, result){
		if(err){
			console.log(err)
		}
		callback(err, result)
	})
}
exports.getDatesList = function(session_id, context_id, callback){
	soapClient.getDatesList({"session_id":session_id, "context_id":context_id}, function(err, result){
		if(err){
			console.log(err)
		}
		callback(err, result)
	})
}
exports.getDatesInRange = function(session_id, context_id, start_timestamp, end_timestamp, callback){
	soapClient.getDatesInRange({"session_id":session_id, "context_id":context_id, "start_timestamp":start_timestamp, "end_timestamp":end_timestamp}, function(err, result){
		if(err){
			console.log(err)
		}
		callback(err, result)
	})
}
exports.getDateDetails = function(session_id, context_id, item_id, callback){
	soapClient.getDateDetails({"session_id":session_id, "context_id":context_id, "item_id":item_id}, function(err, result){
		if(err){
			console.log(err)
		}
		callback(err, result)
	})
}
exports.saveDate = function(session_id, context_id, item_id, title, place, description, startingDate, startingTime, endingDate, endingTime, uploadFiles, deleteFiles, callback){
	soapClient.saveDate({"session_id":session_id, "context_id":context_id, "item_id":item_id, "title":title, "place":place, "description":description, "startingDate":startingDate, "startingTime":startingTime, "endingDate":endingDate, "endingTime":endingTime, "uploadFiles":uploadFiles, "deleteFiles":deleteFiles}, function(err, result){
		if(err){
			console.log(err)
		}
		callback(err, result)
	})
}
exports.deleteDate = function(session_id, context_id, item_id, callback){
	soapClient.deleteDate({"session_id":session_id, "context_id":context_id, "item_id":item_id}, function(err, result){
		if(err){
			console.log(err)
		}
		callback(err, result)
	})
}
exports.getMaterialsList = function(session_id, context_id, callback){
	soapClient.getMaterialsList({"session_id":session_id, "context_id":context_id}, function(err, result){
		if(err){
			console.log(err)
		}
		callback(err, result)
	})
}
exports.getMaterialDetails = function(session_id, context_id, item_id, callback){
	soapClient.getMaterialDetails({"session_id":session_id, "context_id":context_id, "item_id":item_id}, function(err, result){
		if(err){
			console.log(err)
		}
		callback(err, result)
	})
}
exports.saveMaterial = function(session_id, context_id, item_id, title, description, uploadFiles, deleteFiles, callback){
	soapClient.saveMaterial({"session_id":session_id, "context_id":context_id, "item_id":item_id, "title":title, "description":description, "uploadFiles":uploadFiles, "deleteFiles":deleteFiles}, function(err, result){
		if(err){
			console.log(err)
		}
		callback(err, result)
	})
}
exports.deleteMaterial = function(session_id, context_id, item_id, callback){
	soapClient.deleteMaterial({"session_id":session_id, "context_id":context_id, "item_id":item_id}, function(err, result){
		if(err){
			console.log(err)
		}
		callback(err, result)
	})
}
exports.saveSection = function(session_id, context_id, item_id, title, description, number, uploadFiles, deleteFiles, material_item_id, callback){
	soapClient.saveSection({"session_id":session_id, "context_id":context_id, "item_id":item_id, "title":title, "description":description, "number":number, "uploadFiles":uploadFiles, "deleteFiles":deleteFiles, "material_item_id":material_item_id}, function(err, result){
		if(err){
			console.log(err)
		}
		callback(err, result)
	})
}
exports.deleteSection = function(session_id, context_id, item_id, callback){
	soapClient.deleteSection({"session_id":session_id, "context_id":context_id, "item_id":item_id}, function(err, result){
		if(err){
			console.log(err)
		}
		callback(err, result)
	})
}
exports.getDiscussionList = function(session_id, context_id, callback){
	soapClient.getDiscussionList({"session_id":session_id, "context_id":context_id}, function(err, result){
		if(err){
			console.log(err)
		}
		callback(err, result)
	})
}
exports.getDiscussionDetails = function(session_id, context_id, item_id, callback){
	soapClient.getDiscussionDetails({"session_id":session_id, "context_id":context_id, "item_id":item_id}, function(err, result){
		if(err){
			console.log(err)
		}
		callback(err, result)
	})
}
exports.deleteDiscussion = function(session_id, context_id, item_id, callback){
	soapClient.deleteDiscussion({"session_id":session_id, "context_id":context_id, "item_id":item_id}, function(err, result){
		if(err){
			console.log(err)
		}
		callback(err, result)
	})
}
exports.saveDiscussionArticle = function(session_id, context_id, item_id, title, description, uploadFiles, deleteFiles, discussion_item_id, answerTo, callback){
	soapClient.saveDiscussionArticle({"session_id":session_id, "context_id":context_id, "item_id":item_id, "title":title, "description":description, "uploadFiles":uploadFiles, "deleteFiles":deleteFiles, "discussion_item_id":discussion_item_id, "answerTo":answerTo}, function(err, result){
		if(err){
			console.log(err)
		}
		callback(err, result)
	})
}
exports.saveDiscussionWithInitialArticle = function(session_id, context_id, item_id, title, item_id_article, title_article, description_article, uploadFiles, deleteFiles, callback){
	soapClient.saveDiscussionWithInitialArticle({"session_id":session_id, "context_id":context_id, "item_id":item_id, "title":title, "item_id_article":item_id_article, "title_article":title_article, "description_article":description_article, "uploadFiles":uploadFiles, "deleteFiles":deleteFiles}, function(err, result){
		if(err){
			console.log(err)
		}
		callback(err, result)
	})
}
exports.saveDiscussion = function(session_id, context_id, item_id, title, callback){
	soapClient.saveDiscussion({"session_id":session_id, "context_id":context_id, "item_id":item_id, "title":title}, function(err, result){
		if(err){
			console.log(err)
		}
		callback(err, result)
	})
}
exports.deleteDiscussionArticle = function(session_id, context_id, item_id, callback){
	soapClient.deleteDiscussionArticle({"session_id":session_id, "context_id":context_id, "item_id":item_id}, function(err, result){
		if(err){
			console.log(err)
		}
		callback(err, result)
	})
}
exports.getUserList = function(session_id, context_id, callback){
	soapClient.getUserList({"session_id":session_id, "context_id":context_id}, function(err, result){
		if(err){
			console.log(err)
		}
		callback(err, result)
	})
}
exports.saveUser = function(session_id, context_id, item_id, name, firstname, email, phone1, phone2, callback){
	soapClient.saveUser({"session_id":session_id, "context_id":context_id, "item_id":item_id, "name":name, "firstname":firstname, "email":email, "phone1":phone1, "phone2":phone2}, function(err, result){
		if(err){
			console.log(err)
		}
		callback(err, result)
	})
}
exports.uploadFile = function(session_id, context_id, file_id, file_data, callback){
	soapClient.uploadFile({"session_id":session_id, "context_id":context_id, "file_id":file_id, "file_data":file_data}, function(err, result){
		if(err){
			console.log(err)
		}
		callback(err, result)
	})
}
exports.getRoomReadCounter = function(session_id, context_id, callback){
	soapClient.getRoomReadCounter({"session_id":session_id, "context_id":context_id}, function(err, result){
		if(err){
			console.log(err)
		}
		callback(err, result)
	})
}
exports.getModerationUserList = function(session_id, callback){
	soapClient.getModerationUserList({"session_id":session_id}, function(err, result){
		if(err){
			console.log(err)
		}
		callback(err, result)
	})
}
exports.activateUser = function(session_id, activate_user_id, callback){
	soapClient.activateUser({"session_id":session_id, "activate_user_id":activate_user_id}, function(err, result){
		if(err){
			console.log(err)
		}
		callback(err, result)
	})
}
exports.getSessionIdFromConnectionKey = function(session_id, portal_id, user_key, server_key, callback){
	soapClient.getSessionIdFromConnectionKey({"session_id":session_id, "portal_id":portal_id, "user_key":user_key, "server_key":server_key}, function(err, result){
		if(err){
			console.log(err)
		}
		callback(err, result)
	})
}
exports.getRoomListAsJson = function(session_id, callback){
	soapClient.getRoomListAsJson({"session_id":session_id}, function(err, result){
		if(err){
			console.log(err)
		}else{
			result.return.$value=JSON.parse(result.return.$value)}
		callback(err, result)
	})
}
exports.getPortalListAsJson = function(callback){
	soapClient.getPortalListAsJson({}, function(err, result){
		if(err){
			console.log(err)
		}else{
			result.return.$value=JSON.parse(result.return.$value)}
		callback(err, result)
	})
}
exports.saveExternalConnectionKey = function(session_id, user_key, callback){
	soapClient.saveExternalConnectionKey({"session_id":session_id, "user_key":user_key}, function(err, result){
		if(err){
			console.log(err)
		}
		callback(err, result)
	})
}
exports.getOwnConnectionKey = function(session_id, callback){
	soapClient.getOwnConnectionKey({"session_id":session_id}, function(err, result){
		if(err){
			console.log(err)
		}
		callback(err, result)
	})
}
exports.setPortalConnectionInfo = function(session_id, server_key, portal_id, tab_id, user_key, callback){
	soapClient.setPortalConnectionInfo({"session_id":session_id, "server_key":server_key, "portal_id":portal_id, "tab_id":tab_id, "user_key":user_key}, function(err, result){
		if(err){
			console.log(err)
		}
		callback(err, result)
	})
}
exports.deleteConnection = function(session_id, tab_id, callback){
	soapClient.deleteConnection({"session_id":session_id, "tab_id":tab_id}, function(err, result){
		if(err){
			console.log(err)
		}
		callback(err, result)
	})
}
