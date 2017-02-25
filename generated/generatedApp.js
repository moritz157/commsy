/**
 * @api {post} /getGuestSession getGuestSession
 * @apiGroup Main
 * @apiParam {Number} portal_id
 **/
app.post('/getGuestSession', function(req, res){
	commsy.getGuestSession(req.body.portal_id, function(err, result){
	if(err){
		console.log('[ERROR] '+ err);
		res.status(400);
		res.send({'Error':err});
	}else{
		console.log(result);
			res.send(result);
		}
	});
});
/**
 * @api {post} /getActiveRoomList getActiveRoomList
 * @apiGroup Main
 * @apiParam {String} session_id
 * @apiParam {Number} portal_id
 * @apiParam {Number} count
 **/
app.post('/getActiveRoomList', function(req, res){
	commsy.getActiveRoomList(req.body.session_id, req.body.portal_id, req.body.count, function(err, result){
	if(err){
		console.log('[ERROR] '+ err);
		res.status(400);
		res.send({'Error':err});
	}else{
		console.log(result);
			res.send(result);
		}
	});
});
/**
 * @api {post} /getActiveRoomListForUser getActiveRoomListForUser
 * @apiGroup Main
 * @apiParam {String} session_id
 * @apiParam {Number} portal_id
 * @apiParam {Number} count
 **/
app.post('/getActiveRoomListForUser', function(req, res){
	commsy.getActiveRoomListForUser(req.body.session_id, req.body.portal_id, req.body.count, function(err, result){
	if(err){
		console.log('[ERROR] '+ err);
		res.status(400);
		res.send({'Error':err});
	}else{
		console.log(result);
			res.send(result);
		}
	});
});
/**
 * @api {post} /createUser createUser
 * @apiGroup Main
 * @apiParam {String} session_id
 * @apiParam {Number} portal_id
 * @apiParam {String} firstname
 * @apiParam {String} lastname
 * @apiParam {String} mail
 * @apiParam {String} user_id
 * @apiParam {String} user_pwd
 * @apiParam {Boolean} agb
 * @apiParam {Boolean} send_email
 **/
app.post('/createUser', function(req, res){
	commsy.createUser(req.body.session_id, req.body.portal_id, req.body.firstname, req.body.lastname, req.body.mail, req.body.user_id, req.body.user_pwd, req.body.agb, req.body.send_email, function(err, result){
	if(err){
		console.log('[ERROR] '+ err);
		res.status(400);
		res.send({'Error':err});
	}else{
		console.log(result);
			res.send(result);
		}
	});
});
/**
 * @api {post} /getCountRooms getCountRooms
 * @apiGroup Main
 * @apiParam {String} session_id
 * @apiParam {Number} portal_id
 **/
app.post('/getCountRooms', function(req, res){
	commsy.getCountRooms(req.body.session_id, req.body.portal_id, function(err, result){
	if(err){
		console.log('[ERROR] '+ err);
		res.status(400);
		res.send({'Error':err});
	}else{
		console.log(result);
			res.send(result);
		}
	});
});
/**
 * @api {post} /getCountUser getCountUser
 * @apiGroup Main
 * @apiParam {String} session_id
 * @apiParam {Number} portal_id
 **/
app.post('/getCountUser', function(req, res){
	commsy.getCountUser(req.body.session_id, req.body.portal_id, function(err, result){
	if(err){
		console.log('[ERROR] '+ err);
		res.status(400);
		res.send({'Error':err});
	}else{
		console.log(result);
			res.send(result);
		}
	});
});
/**
 * @api {post} /authenticate authenticate
 * @apiGroup Main
 * @apiParam {String} user_id
 * @apiParam {String} password
 * @apiParam {Number} portal_id
 * @apiParam {Number} auth_source_id
 **/
app.post('/authenticate', function(req, res){
	commsy.authenticate(req.body.user_id, req.body.password, req.body.portal_id, req.body.auth_source_id, function(err, result){
	if(err){
		console.log('[ERROR] '+ err);
		res.status(400);
		res.send({'Error':err});
	}else{
		console.log(result);
			res.send(result);
		}
	});
});
/**
 * @api {post} /authenticateWithLogin authenticateWithLogin
 * @apiGroup Main
 * @apiParam {String} user_id
 * @apiParam {String} password
 * @apiParam {Number} portal_id
 * @apiParam {Number} auth_source_id
 **/
app.post('/authenticateWithLogin', function(req, res){
	commsy.authenticateWithLogin(req.body.user_id, req.body.password, req.body.portal_id, req.body.auth_source_id, function(err, result){
	if(err){
		console.log('[ERROR] '+ err);
		res.status(400);
		res.send({'Error':err});
	}else{
		console.log(result);
			res.send(result);
		}
	});
});
/**
 * @api {post} /IMS IMS
 * @apiGroup Main
 * @apiParam {String} session_id
 * @apiParam {String} ims_xml
 **/
app.post('/IMS', function(req, res){
	commsy.IMS(req.body.session_id, req.body.ims_xml, function(err, result){
	if(err){
		console.log('[ERROR] '+ err);
		res.status(400);
		res.send({'Error':err});
	}else{
		console.log(result);
			res.send(result);
		}
	});
});
/**
 * @api {post} /getMaterialList getMaterialList
 * @apiGroup Main
 * @apiParam {String} session_id
 * @apiParam {Number} context_id
 **/
app.post('/getMaterialList', function(req, res){
	commsy.getMaterialList(req.body.session_id, req.body.context_id, function(err, result){
	if(err){
		console.log('[ERROR] '+ err);
		res.status(400);
		res.send({'Error':err});
	}else{
		console.log(result);
			res.send(result);
		}
	});
});
/**
 * @api {post} /getPrivateRoomMaterialList getPrivateRoomMaterialList
 * @apiGroup Main
 * @apiParam {String} session_id
 **/
app.post('/getPrivateRoomMaterialList', function(req, res){
	commsy.getPrivateRoomMaterialList(req.body.session_id, function(err, result){
	if(err){
		console.log('[ERROR] '+ err);
		res.status(400);
		res.send({'Error':err});
	}else{
		console.log(result);
			res.send(result);
		}
	});
});
/**
 * @api {post} /getSectionListFromMaterial getSectionListFromMaterial
 * @apiGroup Main
 * @apiParam {String} session_id
 * @apiParam {Number} material_id
 **/
app.post('/getSectionListFromMaterial', function(req, res){
	commsy.getSectionListFromMaterial(req.body.session_id, req.body.material_id, function(err, result){
	if(err){
		console.log('[ERROR] '+ err);
		res.status(400);
		res.send({'Error':err});
	}else{
		console.log(result);
			res.send(result);
		}
	});
});
/**
 * @api {post} /getFileListFromMaterial getFileListFromMaterial
 * @apiGroup Main
 * @apiParam {String} session_id
 * @apiParam {Number} material_id
 **/
app.post('/getFileListFromMaterial', function(req, res){
	commsy.getFileListFromMaterial(req.body.session_id, req.body.material_id, function(err, result){
	if(err){
		console.log('[ERROR] '+ err);
		res.status(400);
		res.send({'Error':err});
	}else{
		console.log(result);
			res.send(result);
		}
	});
});
/**
 * @api {post} /getFileListFromItem getFileListFromItem
 * @apiGroup Main
 * @apiParam {String} session_id
 * @apiParam {Number} item_id
 **/
app.post('/getFileListFromItem', function(req, res){
	commsy.getFileListFromItem(req.body.session_id, req.body.item_id, function(err, result){
	if(err){
		console.log('[ERROR] '+ err);
		res.status(400);
		res.send({'Error':err});
	}else{
		console.log(result);
			res.send(result);
		}
	});
});
/**
 * @api {post} /getFileItem getFileItem
 * @apiGroup Main
 * @apiParam {String} session_id
 * @apiParam {Number} file_id
 **/
app.post('/getFileItem', function(req, res){
	commsy.getFileItem(req.body.session_id, req.body.file_id, function(err, result){
	if(err){
		console.log('[ERROR] '+ err);
		res.status(400);
		res.send({'Error':err});
	}else{
		console.log(result);
			res.send(result);
		}
	});
});
/**
 * @api {post} /deleteFileItem deleteFileItem
 * @apiGroup Main
 * @apiParam {String} session_id
 * @apiParam {Number} file_id
 **/
app.post('/deleteFileItem', function(req, res){
	commsy.deleteFileItem(req.body.session_id, req.body.file_id, function(err, result){
	if(err){
		console.log('[ERROR] '+ err);
		res.status(400);
		res.send({'Error':err});
	}else{
		console.log(result);
			res.send(result);
		}
	});
});
/**
 * @api {post} /addPrivateRoomMaterialList addPrivateRoomMaterialList
 * @apiGroup Main
 * @apiParam {String} session_id
 * @apiParam {String} material_list_xml
 **/
app.post('/addPrivateRoomMaterialList', function(req, res){
	commsy.addPrivateRoomMaterialList(req.body.session_id, req.body.material_list_xml, function(err, result){
	if(err){
		console.log('[ERROR] '+ err);
		res.status(400);
		res.send({'Error':err});
	}else{
		console.log(result);
			res.send(result);
		}
	});
});
/**
 * @api {post} /addFileForMaterial addFileForMaterial
 * @apiGroup Main
 * @apiParam {String} session_id
 * @apiParam {Number} material_id
 * @apiParam {String} file_item_xml
 **/
app.post('/addFileForMaterial', function(req, res){
	commsy.addFileForMaterial(req.body.session_id, req.body.material_id, req.body.file_item_xml, function(err, result){
	if(err){
		console.log('[ERROR] '+ err);
		res.status(400);
		res.send({'Error':err});
	}else{
		console.log(result);
			res.send(result);
		}
	});
});
/**
 * @api {post} /linkFileToMaterial linkFileToMaterial
 * @apiGroup Main
 * @apiParam {String} session_id
 * @apiParam {Number} material_id
 * @apiParam {Number} file_id
 **/
app.post('/linkFileToMaterial', function(req, res){
	commsy.linkFileToMaterial(req.body.session_id, req.body.material_id, req.body.file_id, function(err, result){
	if(err){
		console.log('[ERROR] '+ err);
		res.status(400);
		res.send({'Error':err});
	}else{
		console.log(result);
			res.send(result);
		}
	});
});
/**
 * @api {post} /addMaterialLimit addMaterialLimit
 * @apiGroup Main
 * @apiParam {String} key
 * @apiParam {Number} value
 * @apiParam {String} session_id
 **/
app.post('/addMaterialLimit', function(req, res){
	commsy.addMaterialLimit(req.body.key, req.body.value, req.body.session_id, function(err, result){
	if(err){
		console.log('[ERROR] '+ err);
		res.status(400);
		res.send({'Error':err});
	}else{
		console.log(result);
			res.send(result);
		}
	});
});
/**
 * @api {post} /getBuzzwordList getBuzzwordList
 * @apiGroup Main
 * @apiParam {String} session_id
 * @apiParam {Number} context_id
 **/
app.post('/getBuzzwordList', function(req, res){
	commsy.getBuzzwordList(req.body.session_id, req.body.context_id, function(err, result){
	if(err){
		console.log('[ERROR] '+ err);
		res.status(400);
		res.send({'Error':err});
	}else{
		console.log(result);
			res.send(result);
		}
	});
});
/**
 * @api {post} /getLabelList getLabelList
 * @apiGroup Main
 * @apiParam {String} session_id
 * @apiParam {Number} context_id
 **/
app.post('/getLabelList', function(req, res){
	commsy.getLabelList(req.body.session_id, req.body.context_id, function(err, result){
	if(err){
		console.log('[ERROR] '+ err);
		res.status(400);
		res.send({'Error':err});
	}else{
		console.log(result);
			res.send(result);
		}
	});
});
/**
 * @api {post} /getGroupList getGroupList
 * @apiGroup Main
 * @apiParam {String} session_id
 * @apiParam {Number} context_id
 **/
app.post('/getGroupList', function(req, res){
	commsy.getGroupList(req.body.session_id, req.body.context_id, function(err, result){
	if(err){
		console.log('[ERROR] '+ err);
		res.status(400);
		res.send({'Error':err});
	}else{
		console.log(result);
			res.send(result);
		}
	});
});
/**
 * @api {post} /getTopicList getTopicList
 * @apiGroup Main
 * @apiParam {String} session_id
 * @apiParam {Number} context_id
 **/
app.post('/getTopicList', function(req, res){
	commsy.getTopicList(req.body.session_id, req.body.context_id, function(err, result){
	if(err){
		console.log('[ERROR] '+ err);
		res.status(400);
		res.send({'Error':err});
	}else{
		console.log(result);
			res.send(result);
		}
	});
});
/**
 * @api {post} /getUserInfo getUserInfo
 * @apiGroup Main
 * @apiParam {String} session_id
 * @apiParam {String} context_id
 **/
app.post('/getUserInfo', function(req, res){
	commsy.getUserInfo(req.body.session_id, req.body.context_id, function(err, result){
	if(err){
		console.log('[ERROR] '+ err);
		res.status(400);
		res.send({'Error':err});
	}else{
		console.log(result);
			res.send(result);
		}
	});
});
/**
 * @api {post} /getRSSUrl getRSSUrl
 * @apiGroup Main
 * @apiParam {String} session_id
 **/
app.post('/getRSSUrl', function(req, res){
	commsy.getRSSUrl(req.body.session_id, function(err, result){
	if(err){
		console.log('[ERROR] '+ err);
		res.status(400);
		res.send({'Error':err});
	}else{
		console.log(result);
			res.send(result);
		}
	});
});
/**
 * @api {post} /getRoomList getRoomList
 * @apiGroup Main
 * @apiParam {String} session_id
 **/
app.post('/getRoomList', function(req, res){
	commsy.getRoomList(req.body.session_id, function(err, result){
	if(err){
		console.log('[ERROR] '+ err);
		res.status(400);
		res.send({'Error':err});
	}else{
		console.log(result);
			res.send(result);
		}
	});
});
/**
 * @api {post} /getPortalRoomConfiguration getPortalRoomConfiguration
 * @apiGroup Main
 * @apiParam {String} session_id
 * @apiParam {String} portal_id
 **/
app.post('/getPortalRoomConfiguration', function(req, res){
	commsy.getPortalRoomConfiguration(req.body.session_id, req.body.portal_id, function(err, result){
	if(err){
		console.log('[ERROR] '+ err);
		res.status(400);
		res.send({'Error':err});
	}else{
		console.log(result);
			res.send(result);
		}
	});
});
/**
 * @api {post} /touAccepted touAccepted
 * @apiGroup Main
 * @apiParam {String} session_id
 * @apiParam {String} portal_id
 **/
app.post('/touAccepted', function(req, res){
	commsy.touAccepted(req.body.session_id, req.body.portal_id, function(err, result){
	if(err){
		console.log('[ERROR] '+ err);
		res.status(400);
		res.send({'Error':err});
	}else{
		console.log(result);
			res.send(result);
		}
	});
});
/**
 * @api {post} /saveRoom saveRoom
 * @apiGroup Main
 * @apiParam {String} session_id
 * @apiParam {String} context_id
 * @apiParam {String} title
 * @apiParam {String} id
 * @apiParam {String} type
 * @apiParam {String} template
 * @apiParam {String} language
 * @apiParam {String} intervals
 * @apiParam {String} assignments
 * @apiParam {String} description
 **/
app.post('/saveRoom', function(req, res){
	commsy.saveRoom(req.body.session_id, req.body.context_id, req.body.title, req.body.id, req.body.type, req.body.template, req.body.language, req.body.intervals, req.body.assignments, req.body.description, function(err, result){
	if(err){
		console.log('[ERROR] '+ err);
		res.status(400);
		res.send({'Error':err});
	}else{
		console.log(result);
			res.send(result);
		}
	});
});
/**
 * @api {post} /deleteRoom deleteRoom
 * @apiGroup Main
 * @apiParam {String} session_id
 * @apiParam {String} portal_id
 * @apiParam {String} room_id
 **/
app.post('/deleteRoom', function(req, res){
	commsy.deleteRoom(req.body.session_id, req.body.portal_id, req.body.room_id, function(err, result){
	if(err){
		console.log('[ERROR] '+ err);
		res.status(400);
		res.send({'Error':err});
	}else{
		console.log(result);
			res.send(result);
		}
	});
});
/**
 * @api {post} /archiveRoom archiveRoom
 * @apiGroup Main
 * @apiParam {String} session_id
 * @apiParam {String} portal_id
 * @apiParam {String} room_id
 **/
app.post('/archiveRoom', function(req, res){
	commsy.archiveRoom(req.body.session_id, req.body.portal_id, req.body.room_id, function(err, result){
	if(err){
		console.log('[ERROR] '+ err);
		res.status(400);
		res.send({'Error':err});
	}else{
		console.log(result);
			res.send(result);
		}
	});
});
/**
 * @api {post} /getRoomDetails getRoomDetails
 * @apiGroup Main
 * @apiParam {String} session_id
 * @apiParam {String} context_id
 * @apiParam {String} room_id
 **/
app.post('/getRoomDetails', function(req, res){
	commsy.getRoomDetails(req.body.session_id, req.body.context_id, req.body.room_id, function(err, result){
	if(err){
		console.log('[ERROR] '+ err);
		res.status(400);
		res.send({'Error':err});
	}else{
		console.log(result);
			res.send(result);
		}
	});
});
/**
 * @api {post} /sendContactMail sendContactMail
 * @apiGroup Main
 * @apiParam {String} session_id
 * @apiParam {String} context_id
 * @apiParam {String} message
 **/
app.post('/sendContactMail', function(req, res){
	commsy.sendContactMail(req.body.session_id, req.body.context_id, req.body.message, function(err, result){
	if(err){
		console.log('[ERROR] '+ err);
		res.status(400);
		res.send({'Error':err});
	}else{
		console.log(result);
			res.send(result);
		}
	});
});
/**
 * @api {post} /getAuthenticationForWiki getAuthenticationForWiki
 * @apiGroup Main
 * @apiParam {String} session_id
 * @apiParam {String} context_id
 * @apiParam {String} user_id
 **/
app.post('/getAuthenticationForWiki', function(req, res){
	commsy.getAuthenticationForWiki(req.body.session_id, req.body.context_id, req.body.user_id, function(err, result){
	if(err){
		console.log('[ERROR] '+ err);
		res.status(400);
		res.send({'Error':err});
	}else{
		console.log(result);
			res.send(result);
		}
	});
});
/**
 * @api {post} /savePosForItem savePosForItem
 * @apiGroup Main
 * @apiParam {String} session_id
 * @apiParam {Number} item_id
 * @apiParam {Number} x
 * @apiParam {Number} y
 **/
app.post('/savePosForItem', function(req, res){
	commsy.savePosForItem(req.body.session_id, req.body.item_id, req.body.x, req.body.y, function(err, result){
	if(err){
		console.log('[ERROR] '+ err);
		res.status(400);
		res.send({'Error':err});
	}else{
		console.log(result);
			res.send(result);
		}
	});
});
/**
 * @api {post} /savePosForLink savePosForLink
 * @apiGroup Main
 * @apiParam {String} session_id
 * @apiParam {Number} item_id
 * @apiParam {Number} label_id
 * @apiParam {Number} x
 * @apiParam {Number} y
 **/
app.post('/savePosForLink', function(req, res){
	commsy.savePosForLink(req.body.session_id, req.body.item_id, req.body.label_id, req.body.x, req.body.y, function(err, result){
	if(err){
		console.log('[ERROR] '+ err);
		res.status(400);
		res.send({'Error':err});
	}else{
		console.log(result);
			res.send(result);
		}
	});
});
/**
 * @api {post} /refreshSession refreshSession
 * @apiGroup Main
 * @apiParam {String} session_id
 **/
app.post('/refreshSession', function(req, res){
	commsy.refreshSession(req.body.session_id, function(err, result){
	if(err){
		console.log('[ERROR] '+ err);
		res.status(400);
		res.send({'Error':err});
	}else{
		console.log(result);
			res.send(result);
		}
	});
});
/**
 * @api {post} /logout logout
 * @apiGroup Main
 * @apiParam {String} session_id
 **/
app.post('/logout', function(req, res){
	commsy.logout(req.body.session_id, function(err, result){
	if(err){
		console.log('[ERROR] '+ err);
		res.status(400);
		res.send({'Error':err});
	}else{
		console.log(result);
			res.send(result);
		}
	});
});
/**
 * @api {post} /authenticateViaSession authenticateViaSession
 * @apiGroup Main
 * @apiParam {String} session_id
 **/
app.post('/authenticateViaSession', function(req, res){
	commsy.authenticateViaSession(req.body.session_id, function(err, result){
	if(err){
		console.log('[ERROR] '+ err);
		res.status(400);
		res.send({'Error':err});
	}else{
		console.log(result);
			res.send(result);
		}
	});
});
/**
 * @api {post} /wordpressAuthenticateViaSession wordpressAuthenticateViaSession
 * @apiGroup Main
 * @apiParam {String} session_id
 **/
app.post('/wordpressAuthenticateViaSession', function(req, res){
	commsy.wordpressAuthenticateViaSession(req.body.session_id, function(err, result){
	if(err){
		console.log('[ERROR] '+ err);
		res.status(400);
		res.send({'Error':err});
	}else{
		console.log(result);
			res.send(result);
		}
	});
});
/**
 * @api {post} /changeUserEmail changeUserEmail
 * @apiGroup Main
 * @apiParam {String} session_id
 * @apiParam {String} email
 **/
app.post('/changeUserEmail', function(req, res){
	commsy.changeUserEmail(req.body.session_id, req.body.email, function(err, result){
	if(err){
		console.log('[ERROR] '+ err);
		res.status(400);
		res.send({'Error':err});
	}else{
		console.log(result);
			res.send(result);
		}
	});
});
/**
 * @api {post} /changeUserEmailAll changeUserEmailAll
 * @apiGroup Main
 * @apiParam {String} session_id
 * @apiParam {String} email
 **/
app.post('/changeUserEmailAll', function(req, res){
	commsy.changeUserEmailAll(req.body.session_id, req.body.email, function(err, result){
	if(err){
		console.log('[ERROR] '+ err);
		res.status(400);
		res.send({'Error':err});
	}else{
		console.log(result);
			res.send(result);
		}
	});
});
/**
 * @api {post} /changeUserId changeUserId
 * @apiGroup Main
 * @apiParam {String} session_id
 * @apiParam {String} user_id
 **/
app.post('/changeUserId', function(req, res){
	commsy.changeUserId(req.body.session_id, req.body.user_id, function(err, result){
	if(err){
		console.log('[ERROR] '+ err);
		res.status(400);
		res.send({'Error':err});
	}else{
		console.log(result);
			res.send(result);
		}
	});
});
/**
 * @api {post} /setUserExternalId setUserExternalId
 * @apiGroup Main
 * @apiParam {String} session_id
 * @apiParam {String} external_id
 **/
app.post('/setUserExternalId', function(req, res){
	commsy.setUserExternalId(req.body.session_id, req.body.external_id, function(err, result){
	if(err){
		console.log('[ERROR] '+ err);
		res.status(400);
		res.send({'Error':err});
	}else{
		console.log(result);
			res.send(result);
		}
	});
});
/**
 * @api {post} /changeUserName changeUserName
 * @apiGroup Main
 * @apiParam {String} session_id
 * @apiParam {String} firstname
 * @apiParam {String} lastname
 **/
app.post('/changeUserName', function(req, res){
	commsy.changeUserName(req.body.session_id, req.body.firstname, req.body.lastname, function(err, result){
	if(err){
		console.log('[ERROR] '+ err);
		res.status(400);
		res.send({'Error':err});
	}else{
		console.log(result);
			res.send(result);
		}
	});
});
/**
 * @api {post} /updateLastlogin updateLastlogin
 * @apiGroup Main
 * @apiParam {String} session_id
 * @apiParam {String} tool
 * @apiParam {Number} room_id
 **/
app.post('/updateLastlogin', function(req, res){
	commsy.updateLastlogin(req.body.session_id, req.body.tool, req.body.room_id, function(err, result){
	if(err){
		console.log('[ERROR] '+ err);
		res.status(400);
		res.send({'Error':err});
	}else{
		console.log(result);
			res.send(result);
		}
	});
});
/**
 * @api {post} /createMembershipBySession createMembershipBySession
 * @apiGroup Main
 * @apiParam {String} session_id
 * @apiParam {Number} context_id
 * @apiParam {Boolean} agb
 **/
app.post('/createMembershipBySession', function(req, res){
	commsy.createMembershipBySession(req.body.session_id, req.body.context_id, req.body.agb, function(err, result){
	if(err){
		console.log('[ERROR] '+ err);
		res.status(400);
		res.send({'Error':err});
	}else{
		console.log(result);
			res.send(result);
		}
	});
});
/**
 * @api {post} /getAGBFromRoom getAGBFromRoom
 * @apiGroup Main
 * @apiParam {Number} context_id
 * @apiParam {String} language
 **/
app.post('/getAGBFromRoom', function(req, res){
	commsy.getAGBFromRoom(req.body.context_id, req.body.language, function(err, result){
	if(err){
		console.log('[ERROR] '+ err);
		res.status(400);
		res.send({'Error':err});
	}else{
		console.log(result);
			res.send(result);
		}
	});
});
/**
 * @api {post} /getStatistics getStatistics
 * @apiGroup Main
 * @apiParam {String} session_id
 * @apiParam {String} start_date
 * @apiParam {String} end_date
 **/
app.post('/getStatistics', function(req, res){
	commsy.getStatistics(req.body.session_id, req.body.start_date, req.body.end_date, function(err, result){
	if(err){
		console.log('[ERROR] '+ err);
		res.status(400);
		res.send({'Error':err});
	}else{
		console.log(result);
			res.send(result);
		}
	});
});
/**
 * @api {post} /authenticateForApp authenticateForApp
 * @apiGroup Main
 * @apiParam {String} user_id
 * @apiParam {String} password
 * @apiParam {Number} portal_id
 * @apiParam {Number} auth_source_id
 **/
app.post('/authenticateForApp', function(req, res){
	commsy.authenticateForApp(req.body.user_id, req.body.password, req.body.portal_id, req.body.auth_source_id, function(err, result){
	if(err){
		console.log('[ERROR] '+ err);
		res.status(400);
		res.send({'Error':err});
	}else{
		console.log(result);
			res.send(result);
		}
	});
});
/**
 * @api {post} /getPortalRoomList getPortalRoomList
 * @apiGroup Main
 * @apiParam {String} session_id
 * @apiParam {Number} portal_id
 **/
app.post('/getPortalRoomList', function(req, res){
	commsy.getPortalRoomList(req.body.session_id, req.body.portal_id, function(err, result){
	if(err){
		console.log('[ERROR] '+ err);
		res.status(400);
		res.send({'Error':err});
	}else{
		console.log(result);
			res.send(result);
		}
	});
});
/**
 * @api {post} /getPortalRoomListByCountAndSearch getPortalRoomListByCountAndSearch
 * @apiGroup Main
 * @apiParam {String} session_id
 * @apiParam {Number} start
 * @apiParam {Number} count
 * @apiParam {String} search
 * @apiParam {String} timeLimit
 * @apiParam {String} roomTypeLimit
 * @apiParam {String} order
 **/
app.post('/getPortalRoomListByCountAndSearch', function(req, res){
	commsy.getPortalRoomListByCountAndSearch(req.body.session_id, req.body.start, req.body.count, req.body.search, req.body.timeLimit, req.body.roomTypeLimit, req.body.order, function(err, result){
	if(err){
		console.log('[ERROR] '+ err);
		res.status(400);
		res.send({'Error':err});
	}else{
		console.log(result);
			res.send(result);
		}
	});
});
/**
 * @api {post} /getUserInformation getUserInformation
 * @apiGroup Main
 * @apiParam {String} session_id
 * @apiParam {Number} context_id
 **/
app.post('/getUserInformation', function(req, res){
	commsy.getUserInformation(req.body.session_id, req.body.context_id, function(err, result){
	if(err){
		console.log('[ERROR] '+ err);
		res.status(400);
		res.send({'Error':err});
	}else{
		console.log(result);
			res.send(result);
		}
	});
});
/**
 * @api {post} /getPortalConfig getPortalConfig
 * @apiGroup Main
 * @apiParam {String} portal_id
 **/
app.post('/getPortalConfig', function(req, res){
	commsy.getPortalConfig(req.body.portal_id, function(err, result){
	if(err){
		console.log('[ERROR] '+ err);
		res.status(400);
		res.send({'Error':err});
	}else{
		console.log(result);
			res.send(result);
		}
	});
});
/**
 * @api {post} /getAuthSources getAuthSources
 * @apiGroup Main
 * @apiParam {String} session_id
 * @apiParam {Number} portal_id
 **/
app.post('/getAuthSources', function(req, res){
	commsy.getAuthSources(req.body.session_id, req.body.portal_id, function(err, result){
	if(err){
		console.log('[ERROR] '+ err);
		res.status(400);
		res.send({'Error':err});
	}else{
		console.log(result);
			res.send(result);
		}
	});
});
/**
 * @api {post} /getBarInformation getBarInformation
 * @apiGroup Main
 * @apiParam {String} session_id
 * @apiParam {Number} portal_id
 **/
app.post('/getBarInformation', function(req, res){
	commsy.getBarInformation(req.body.session_id, req.body.portal_id, function(err, result){
	if(err){
		console.log('[ERROR] '+ err);
		res.status(400);
		res.send({'Error':err});
	}else{
		console.log(result);
			res.send(result);
		}
	});
});
/**
 * @api {post} /getContextToU getContextToU
 * @apiGroup Main
 * @apiParam {String} session_id
 * @apiParam {Number} portal_id
 **/
app.post('/getContextToU', function(req, res){
	commsy.getContextToU(req.body.session_id, req.body.portal_id, function(err, result){
	if(err){
		console.log('[ERROR] '+ err);
		res.status(400);
		res.send({'Error':err});
	}else{
		console.log(result);
			res.send(result);
		}
	});
});
/**
 * @api {post} /registerUser registerUser
 * @apiGroup Main
 * @apiParam {String} session_id
 * @apiParam {Number} portal_id
 * @apiParam {String} firstname
 * @apiParam {String} lastname
 * @apiParam {String} email
 * @apiParam {String} identification
 * @apiParam {String} password
 * @apiParam {Boolean} tou
 **/
app.post('/registerUser', function(req, res){
	commsy.registerUser(req.body.session_id, req.body.portal_id, req.body.firstname, req.body.lastname, req.body.email, req.body.identification, req.body.password, req.body.tou, function(err, result){
	if(err){
		console.log('[ERROR] '+ err);
		res.status(400);
		res.send({'Error':err});
	}else{
		console.log(result);
			res.send(result);
		}
	});
});
/**
 * @api {post} /sendIdForget sendIdForget
 * @apiGroup Main
 * @apiParam {String} session_id
 * @apiParam {Number} portal_id
 * @apiParam {String} email
 **/
app.post('/sendIdForget', function(req, res){
	commsy.sendIdForget(req.body.session_id, req.body.portal_id, req.body.email, function(err, result){
	if(err){
		console.log('[ERROR] '+ err);
		res.status(400);
		res.send({'Error':err});
	}else{
		console.log(result);
			res.send(result);
		}
	});
});
/**
 * @api {post} /sendPwForget sendPwForget
 * @apiGroup Main
 * @apiParam {String} session_id
 * @apiParam {Number} portal_id
 * @apiParam {String} identification
 **/
app.post('/sendPwForget', function(req, res){
	commsy.sendPwForget(req.body.session_id, req.body.portal_id, req.body.identification, function(err, result){
	if(err){
		console.log('[ERROR] '+ err);
		res.status(400);
		res.send({'Error':err});
	}else{
		console.log(result);
			res.send(result);
		}
	});
});
/**
 * @api {post} /getPortalList getPortalList
 * @apiGroup Main
 **/
app.post('/getPortalList', function(req, res){
	commsy.getPortalList(function(err, result){
	if(err){
		console.log('[ERROR] '+ err);
		res.status(400);
		res.send({'Error':err});
	}else{
		console.log(result);
			res.send(result);
		}
	});
});
/**
 * @api {post} /getAnnouncementsInRange getAnnouncementsInRange
 * @apiGroup Main
 * @apiParam {String} session_id
 * @apiParam {Number} context_id
 * @apiParam {String} valid_timestamp
 **/
app.post('/getAnnouncementsInRange', function(req, res){
	commsy.getAnnouncementsInRange(req.body.session_id, req.body.context_id, req.body.valid_timestamp, function(err, result){
	if(err){
		console.log('[ERROR] '+ err);
		res.status(400);
		res.send({'Error':err});
	}else{
		console.log(result);
			res.send(result);
		}
	});
});
/**
 * @api {post} /getDatesList getDatesList
 * @apiGroup Main
 * @apiParam {String} session_id
 * @apiParam {Number} context_id
 **/
app.post('/getDatesList', function(req, res){
	commsy.getDatesList(req.body.session_id, req.body.context_id, function(err, result){
	if(err){
		console.log('[ERROR] '+ err);
		res.status(400);
		res.send({'Error':err});
	}else{
		console.log(result);
			res.send(result);
		}
	});
});
/**
 * @api {post} /getDatesInRange getDatesInRange
 * @apiGroup Main
 * @apiParam {String} session_id
 * @apiParam {Number} context_id
 * @apiParam {String} start_timestamp
 * @apiParam {String} end_timestamp
 **/
app.post('/getDatesInRange', function(req, res){
	commsy.getDatesInRange(req.body.session_id, req.body.context_id, req.body.start_timestamp, req.body.end_timestamp, function(err, result){
	if(err){
		console.log('[ERROR] '+ err);
		res.status(400);
		res.send({'Error':err});
	}else{
		console.log(result);
			res.send(result);
		}
	});
});
/**
 * @api {post} /getDateDetails getDateDetails
 * @apiGroup Main
 * @apiParam {String} session_id
 * @apiParam {Number} context_id
 * @apiParam {Number} item_id
 **/
app.post('/getDateDetails', function(req, res){
	commsy.getDateDetails(req.body.session_id, req.body.context_id, req.body.item_id, function(err, result){
	if(err){
		console.log('[ERROR] '+ err);
		res.status(400);
		res.send({'Error':err});
	}else{
		console.log(result);
			res.send(result);
		}
	});
});
/**
 * @api {post} /saveDate saveDate
 * @apiGroup Main
 * @apiParam {String} session_id
 * @apiParam {String} context_id
 * @apiParam {String} item_id
 * @apiParam {String} title
 * @apiParam {String} place
 * @apiParam {String} description
 * @apiParam {String} startingDate
 * @apiParam {String} startingTime
 * @apiParam {String} endingDate
 * @apiParam {String} endingTime
 * @apiParam {String} uploadFiles
 * @apiParam {String} deleteFiles
 **/
app.post('/saveDate', function(req, res){
	commsy.saveDate(req.body.session_id, req.body.context_id, req.body.item_id, req.body.title, req.body.place, req.body.description, req.body.startingDate, req.body.startingTime, req.body.endingDate, req.body.endingTime, req.body.uploadFiles, req.body.deleteFiles, function(err, result){
	if(err){
		console.log('[ERROR] '+ err);
		res.status(400);
		res.send({'Error':err});
	}else{
		console.log(result);
			res.send(result);
		}
	});
});
/**
 * @api {post} /deleteDate deleteDate
 * @apiGroup Main
 * @apiParam {String} session_id
 * @apiParam {String} context_id
 * @apiParam {String} item_id
 **/
app.post('/deleteDate', function(req, res){
	commsy.deleteDate(req.body.session_id, req.body.context_id, req.body.item_id, function(err, result){
	if(err){
		console.log('[ERROR] '+ err);
		res.status(400);
		res.send({'Error':err});
	}else{
		console.log(result);
			res.send(result);
		}
	});
});
/**
 * @api {post} /getMaterialsList getMaterialsList
 * @apiGroup Main
 * @apiParam {String} session_id
 * @apiParam {Number} context_id
 **/
app.post('/getMaterialsList', function(req, res){
	commsy.getMaterialsList(req.body.session_id, req.body.context_id, function(err, result){
	if(err){
		console.log('[ERROR] '+ err);
		res.status(400);
		res.send({'Error':err});
	}else{
		console.log(result);
			res.send(result);
		}
	});
});
/**
 * @api {post} /getMaterialDetails getMaterialDetails
 * @apiGroup Main
 * @apiParam {String} session_id
 * @apiParam {Number} context_id
 * @apiParam {Number} item_id
 **/
app.post('/getMaterialDetails', function(req, res){
	commsy.getMaterialDetails(req.body.session_id, req.body.context_id, req.body.item_id, function(err, result){
	if(err){
		console.log('[ERROR] '+ err);
		res.status(400);
		res.send({'Error':err});
	}else{
		console.log(result);
			res.send(result);
		}
	});
});
/**
 * @api {post} /saveMaterial saveMaterial
 * @apiGroup Main
 * @apiParam {String} session_id
 * @apiParam {String} context_id
 * @apiParam {String} item_id
 * @apiParam {String} title
 * @apiParam {String} description
 * @apiParam {String} uploadFiles
 * @apiParam {String} deleteFiles
 **/
app.post('/saveMaterial', function(req, res){
	commsy.saveMaterial(req.body.session_id, req.body.context_id, req.body.item_id, req.body.title, req.body.description, req.body.uploadFiles, req.body.deleteFiles, function(err, result){
	if(err){
		console.log('[ERROR] '+ err);
		res.status(400);
		res.send({'Error':err});
	}else{
		console.log(result);
			res.send(result);
		}
	});
});
/**
 * @api {post} /deleteMaterial deleteMaterial
 * @apiGroup Main
 * @apiParam {String} session_id
 * @apiParam {String} context_id
 * @apiParam {String} item_id
 **/
app.post('/deleteMaterial', function(req, res){
	commsy.deleteMaterial(req.body.session_id, req.body.context_id, req.body.item_id, function(err, result){
	if(err){
		console.log('[ERROR] '+ err);
		res.status(400);
		res.send({'Error':err});
	}else{
		console.log(result);
			res.send(result);
		}
	});
});
/**
 * @api {post} /saveSection saveSection
 * @apiGroup Main
 * @apiParam {String} session_id
 * @apiParam {String} context_id
 * @apiParam {String} item_id
 * @apiParam {String} title
 * @apiParam {String} description
 * @apiParam {String} number
 * @apiParam {String} uploadFiles
 * @apiParam {String} deleteFiles
 * @apiParam {String} material_item_id
 **/
app.post('/saveSection', function(req, res){
	commsy.saveSection(req.body.session_id, req.body.context_id, req.body.item_id, req.body.title, req.body.description, req.body.number, req.body.uploadFiles, req.body.deleteFiles, req.body.material_item_id, function(err, result){
	if(err){
		console.log('[ERROR] '+ err);
		res.status(400);
		res.send({'Error':err});
	}else{
		console.log(result);
			res.send(result);
		}
	});
});
/**
 * @api {post} /deleteSection deleteSection
 * @apiGroup Main
 * @apiParam {String} session_id
 * @apiParam {String} context_id
 * @apiParam {String} item_id
 **/
app.post('/deleteSection', function(req, res){
	commsy.deleteSection(req.body.session_id, req.body.context_id, req.body.item_id, function(err, result){
	if(err){
		console.log('[ERROR] '+ err);
		res.status(400);
		res.send({'Error':err});
	}else{
		console.log(result);
			res.send(result);
		}
	});
});
/**
 * @api {post} /getDiscussionList getDiscussionList
 * @apiGroup Main
 * @apiParam {String} session_id
 * @apiParam {Number} context_id
 **/
app.post('/getDiscussionList', function(req, res){
	commsy.getDiscussionList(req.body.session_id, req.body.context_id, function(err, result){
	if(err){
		console.log('[ERROR] '+ err);
		res.status(400);
		res.send({'Error':err});
	}else{
		console.log(result);
			res.send(result);
		}
	});
});
/**
 * @api {post} /getDiscussionDetails getDiscussionDetails
 * @apiGroup Main
 * @apiParam {String} session_id
 * @apiParam {Number} context_id
 * @apiParam {Number} item_id
 **/
app.post('/getDiscussionDetails', function(req, res){
	commsy.getDiscussionDetails(req.body.session_id, req.body.context_id, req.body.item_id, function(err, result){
	if(err){
		console.log('[ERROR] '+ err);
		res.status(400);
		res.send({'Error':err});
	}else{
		console.log(result);
			res.send(result);
		}
	});
});
/**
 * @api {post} /deleteDiscussion deleteDiscussion
 * @apiGroup Main
 * @apiParam {String} session_id
 * @apiParam {String} context_id
 * @apiParam {String} item_id
 **/
app.post('/deleteDiscussion', function(req, res){
	commsy.deleteDiscussion(req.body.session_id, req.body.context_id, req.body.item_id, function(err, result){
	if(err){
		console.log('[ERROR] '+ err);
		res.status(400);
		res.send({'Error':err});
	}else{
		console.log(result);
			res.send(result);
		}
	});
});
/**
 * @api {post} /saveDiscussionArticle saveDiscussionArticle
 * @apiGroup Main
 * @apiParam {String} session_id
 * @apiParam {String} context_id
 * @apiParam {String} item_id
 * @apiParam {String} title
 * @apiParam {String} description
 * @apiParam {String} uploadFiles
 * @apiParam {String} deleteFiles
 * @apiParam {String} discussion_item_id
 * @apiParam {String} answerTo
 **/
app.post('/saveDiscussionArticle', function(req, res){
	commsy.saveDiscussionArticle(req.body.session_id, req.body.context_id, req.body.item_id, req.body.title, req.body.description, req.body.uploadFiles, req.body.deleteFiles, req.body.discussion_item_id, req.body.answerTo, function(err, result){
	if(err){
		console.log('[ERROR] '+ err);
		res.status(400);
		res.send({'Error':err});
	}else{
		console.log(result);
			res.send(result);
		}
	});
});
/**
 * @api {post} /saveDiscussionWithInitialArticle saveDiscussionWithInitialArticle
 * @apiGroup Main
 * @apiParam {String} session_id
 * @apiParam {String} context_id
 * @apiParam {String} item_id
 * @apiParam {String} title
 * @apiParam {String} item_id_article
 * @apiParam {String} title_article
 * @apiParam {String} description_article
 * @apiParam {String} uploadFiles
 * @apiParam {String} deleteFiles
 **/
app.post('/saveDiscussionWithInitialArticle', function(req, res){
	commsy.saveDiscussionWithInitialArticle(req.body.session_id, req.body.context_id, req.body.item_id, req.body.title, req.body.item_id_article, req.body.title_article, req.body.description_article, req.body.uploadFiles, req.body.deleteFiles, function(err, result){
	if(err){
		console.log('[ERROR] '+ err);
		res.status(400);
		res.send({'Error':err});
	}else{
		console.log(result);
			res.send(result);
		}
	});
});
/**
 * @api {post} /saveDiscussion saveDiscussion
 * @apiGroup Main
 * @apiParam {String} session_id
 * @apiParam {String} context_id
 * @apiParam {String} item_id
 * @apiParam {String} title
 **/
app.post('/saveDiscussion', function(req, res){
	commsy.saveDiscussion(req.body.session_id, req.body.context_id, req.body.item_id, req.body.title, function(err, result){
	if(err){
		console.log('[ERROR] '+ err);
		res.status(400);
		res.send({'Error':err});
	}else{
		console.log(result);
			res.send(result);
		}
	});
});
/**
 * @api {post} /deleteDiscussionArticle deleteDiscussionArticle
 * @apiGroup Main
 * @apiParam {String} session_id
 * @apiParam {String} context_id
 * @apiParam {String} item_id
 **/
app.post('/deleteDiscussionArticle', function(req, res){
	commsy.deleteDiscussionArticle(req.body.session_id, req.body.context_id, req.body.item_id, function(err, result){
	if(err){
		console.log('[ERROR] '+ err);
		res.status(400);
		res.send({'Error':err});
	}else{
		console.log(result);
			res.send(result);
		}
	});
});
/**
 * @api {post} /getUserList getUserList
 * @apiGroup Main
 * @apiParam {String} session_id
 * @apiParam {Number} context_id
 **/
app.post('/getUserList', function(req, res){
	commsy.getUserList(req.body.session_id, req.body.context_id, function(err, result){
	if(err){
		console.log('[ERROR] '+ err);
		res.status(400);
		res.send({'Error':err});
	}else{
		console.log(result);
			res.send(result);
		}
	});
});
/**
 * @api {post} /saveUser saveUser
 * @apiGroup Main
 * @apiParam {String} session_id
 * @apiParam {String} context_id
 * @apiParam {String} item_id
 * @apiParam {String} name
 * @apiParam {String} firstname
 * @apiParam {String} email
 * @apiParam {String} phone1
 * @apiParam {String} phone2
 **/
app.post('/saveUser', function(req, res){
	commsy.saveUser(req.body.session_id, req.body.context_id, req.body.item_id, req.body.name, req.body.firstname, req.body.email, req.body.phone1, req.body.phone2, function(err, result){
	if(err){
		console.log('[ERROR] '+ err);
		res.status(400);
		res.send({'Error':err});
	}else{
		console.log(result);
			res.send(result);
		}
	});
});
/**
 * @api {post} /uploadFile uploadFile
 * @apiGroup Main
 * @apiParam {String} session_id
 * @apiParam {Number} context_id
 * @apiParam {String} file_id
 * @apiParam {String} file_data
 **/
app.post('/uploadFile', function(req, res){
	commsy.uploadFile(req.body.session_id, req.body.context_id, req.body.file_id, req.body.file_data, function(err, result){
	if(err){
		console.log('[ERROR] '+ err);
		res.status(400);
		res.send({'Error':err});
	}else{
		console.log(result);
			res.send(result);
		}
	});
});
/**
 * @api {post} /getRoomReadCounter getRoomReadCounter
 * @apiGroup Main
 * @apiParam {String} session_id
 * @apiParam {Number} context_id
 **/
app.post('/getRoomReadCounter', function(req, res){
	commsy.getRoomReadCounter(req.body.session_id, req.body.context_id, function(err, result){
	if(err){
		console.log('[ERROR] '+ err);
		res.status(400);
		res.send({'Error':err});
	}else{
		console.log(result);
			res.send(result);
		}
	});
});
/**
 * @api {post} /getModerationUserList getModerationUserList
 * @apiGroup Main
 * @apiParam {String} session_id
 **/
app.post('/getModerationUserList', function(req, res){
	commsy.getModerationUserList(req.body.session_id, function(err, result){
	if(err){
		console.log('[ERROR] '+ err);
		res.status(400);
		res.send({'Error':err});
	}else{
		console.log(result);
			res.send(result);
		}
	});
});
/**
 * @api {post} /activateUser activateUser
 * @apiGroup Main
 * @apiParam {String} session_id
 * @apiParam {Number} activate_user_id
 **/
app.post('/activateUser', function(req, res){
	commsy.activateUser(req.body.session_id, req.body.activate_user_id, function(err, result){
	if(err){
		console.log('[ERROR] '+ err);
		res.status(400);
		res.send({'Error':err});
	}else{
		console.log(result);
			res.send(result);
		}
	});
});
/**
 * @api {post} /getSessionIdFromConnectionKey getSessionIdFromConnectionKey
 * @apiGroup Main
 * @apiParam {String} session_id
 * @apiParam {Number} portal_id
 * @apiParam {String} user_key
 * @apiParam {String} server_key
 **/
app.post('/getSessionIdFromConnectionKey', function(req, res){
	commsy.getSessionIdFromConnectionKey(req.body.session_id, req.body.portal_id, req.body.user_key, req.body.server_key, function(err, result){
	if(err){
		console.log('[ERROR] '+ err);
		res.status(400);
		res.send({'Error':err});
	}else{
		console.log(result);
			res.send(result);
		}
	});
});
/**
 * @api {post} /getRoomListAsJson getRoomListAsJson
 * @apiGroup Main
 * @apiParam {String} session_id
 **/
app.post('/getRoomListAsJson', function(req, res){
	commsy.getRoomListAsJson(req.body.session_id, function(err, result){
	if(err){
		console.log('[ERROR] '+ err);
		res.status(400);
		res.send({'Error':err});
	}else{
		console.log(result);
			res.send(result);
		}
	});
});
/**
 * @api {post} /getPortalListAsJson getPortalListAsJson
 * @apiGroup Main
 **/
app.post('/getPortalListAsJson', function(req, res){
	commsy.getPortalListAsJson(function(err, result){
	if(err){
		console.log('[ERROR] '+ err);
		res.status(400);
		res.send({'Error':err});
	}else{
		console.log(result);
			res.send(result);
		}
	});
});
/**
 * @api {post} /saveExternalConnectionKey saveExternalConnectionKey
 * @apiGroup Main
 * @apiParam {String} session_id
 * @apiParam {String} user_key
 **/
app.post('/saveExternalConnectionKey', function(req, res){
	commsy.saveExternalConnectionKey(req.body.session_id, req.body.user_key, function(err, result){
	if(err){
		console.log('[ERROR] '+ err);
		res.status(400);
		res.send({'Error':err});
	}else{
		console.log(result);
			res.send(result);
		}
	});
});
/**
 * @api {post} /getOwnConnectionKey getOwnConnectionKey
 * @apiGroup Main
 * @apiParam {String} session_id
 **/
app.post('/getOwnConnectionKey', function(req, res){
	commsy.getOwnConnectionKey(req.body.session_id, function(err, result){
	if(err){
		console.log('[ERROR] '+ err);
		res.status(400);
		res.send({'Error':err});
	}else{
		console.log(result);
			res.send(result);
		}
	});
});
/**
 * @api {post} /setPortalConnectionInfo setPortalConnectionInfo
 * @apiGroup Main
 * @apiParam {String} session_id
 * @apiParam {String} server_key
 * @apiParam {Number} portal_id
 * @apiParam {String} tab_id
 * @apiParam {String} user_key
 **/
app.post('/setPortalConnectionInfo', function(req, res){
	commsy.setPortalConnectionInfo(req.body.session_id, req.body.server_key, req.body.portal_id, req.body.tab_id, req.body.user_key, function(err, result){
	if(err){
		console.log('[ERROR] '+ err);
		res.status(400);
		res.send({'Error':err});
	}else{
		console.log(result);
			res.send(result);
		}
	});
});
/**
 * @api {post} /deleteConnection deleteConnection
 * @apiGroup Main
 * @apiParam {String} session_id
 * @apiParam {String} tab_id
 **/
app.post('/deleteConnection', function(req, res){
	commsy.deleteConnection(req.body.session_id, req.body.tab_id, function(err, result){
	if(err){
		console.log('[ERROR] '+ err);
		res.status(400);
		res.send({'Error':err});
	}else{
		console.log(result);
			res.send(result);
		}
	});
});
