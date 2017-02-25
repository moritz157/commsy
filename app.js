var bodyParser = require("body-parser")
var express = require("express");
var app = express();
app.use(bodyParser.urlencoded({"extended":"false"}));
app.use(bodyParser.json());
app.use(function(req,res,next){
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Content-Type', '*');
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  console.log(req);
  next();
});
app.use(express.static('doc'));

var commsy = require("commsy");
var fs = require('fs');


var wsdl_location = "http://dev.commsy.net/soap_wsdl.php";
var apiEndpoint = "https://commsy.hamburg.schulcommsy.de/soap.php";

commsy.init(wsdl_location, apiEndpoint, function(err){
  if(err){
    console.log("[ERROR] "+err)
  }else{
    //fs.writeFile("generated.js", commsy.generate().module, function(err){});
    //fs.writeFile("generated/generatedApp.js", commsy.generate().rest, function(err){});
    //fs.writeFile("description.txt", commsy.getTypes(), function(err){});
  }
});

/*app.post("/authenticate", function(req, res){
  commsy.authenticate(req.body.user_id, req.body.password, req.body.portal_id, req.body.auth_source_id, function(err, result){
    if(err){
      console.log("[ERROR] "+ err);
      res.status(400)
      res.send({"Error":err});
    }else{
      console.log(result);
      res.send(result);
    }
  });
});*/

app.post('/getGuestSession', function(req, res){commsy.getGuestSession(req.body.portal_id, function(err, result){
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
app.post('/getActiveRoomList', function(req, res){commsy.getActiveRoomList(req.body.session_id, req.body.portal_id, req.body.count, function(err, result){
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
app.post('/getActiveRoomListForUser', function(req, res){commsy.getActiveRoomListForUser(req.body.session_id, req.body.portal_id, req.body.count, function(err, result){
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
app.post('/createUser', function(req, res){commsy.createUser(req.body.session_id, req.body.portal_id, req.body.firstname, req.body.lastname, req.body.mail, req.body.user_id, req.body.user_pwd, req.body.agb, req.body.send_email, function(err, result){
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
app.post('/getCountRooms', function(req, res){commsy.getCountRooms(req.body.session_id, req.body.portal_id, function(err, result){
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
app.post('/getCountUser', function(req, res){commsy.getCountUser(req.body.session_id, req.body.portal_id, function(err, result){
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
app.post('/authenticate', function(req, res){commsy.authenticate(req.body.user_id, req.body.password, req.body.portal_id, req.body.auth_source_id, function(err, result){
	if(err){
		//console.log('[ERROR] '+ err);
		res.status(400);
		res.send({'Error':err});
	}else{
		//console.log(result);
			res.send(result);
		}
	});
});
app.post('/authenticateWithLogin', function(req, res){commsy.authenticateWithLogin(req.body.user_id, req.body.password, req.body.portal_id, req.body.auth_source_id, function(err, result){
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
app.post('/IMS', function(req, res){commsy.IMS(req.body.session_id, req.body.ims_xml, function(err, result){
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
app.post('/getMaterialList', function(req, res){commsy.getMaterialList(req.body.session_id, req.body.context_id, function(err, result){
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
app.post('/getPrivateRoomMaterialList', function(req, res){commsy.getPrivateRoomMaterialList(req.body.session_id, function(err, result){
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
app.post('/getSectionListFromMaterial', function(req, res){commsy.getSectionListFromMaterial(req.body.session_id, req.body.material_id, function(err, result){
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
app.post('/getFileListFromMaterial', function(req, res){commsy.getFileListFromMaterial(req.body.session_id, req.body.material_id, function(err, result){
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
app.post('/getFileListFromItem', function(req, res){commsy.getFileListFromItem(req.body.session_id, req.body.item_id, function(err, result){
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
app.post('/getFileItem', function(req, res){commsy.getFileItem(req.body.session_id, req.body.file_id, function(err, result){
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
app.post('/deleteFileItem', function(req, res){commsy.deleteFileItem(req.body.session_id, req.body.file_id, function(err, result){
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
app.post('/addPrivateRoomMaterialList', function(req, res){commsy.addPrivateRoomMaterialList(req.body.session_id, req.body.material_list_xml, function(err, result){
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
app.post('/addFileForMaterial', function(req, res){commsy.addFileForMaterial(req.body.session_id, req.body.material_id, req.body.file_item_xml, function(err, result){
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
app.post('/linkFileToMaterial', function(req, res){commsy.linkFileToMaterial(req.body.session_id, req.body.material_id, req.body.file_id, function(err, result){
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
app.post('/addMaterialLimit', function(req, res){commsy.addMaterialLimit(req.body.key, req.body.value, req.body.session_id, function(err, result){
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
app.post('/getBuzzwordList', function(req, res){commsy.getBuzzwordList(req.body.session_id, req.body.context_id, function(err, result){
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
app.post('/getLabelList', function(req, res){commsy.getLabelList(req.body.session_id, req.body.context_id, function(err, result){
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
app.post('/getGroupList', function(req, res){commsy.getGroupList(req.body.session_id, req.body.context_id, function(err, result){
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
app.post('/getTopicList', function(req, res){commsy.getTopicList(req.body.session_id, req.body.context_id, function(err, result){
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
app.post('/getUserInfo', function(req, res){commsy.getUserInfo(req.body.session_id, req.body.context_id, function(err, result){
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
app.post('/getRSSUrl', function(req, res){commsy.getRSSUrl(req.body.session_id, function(err, result){
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
app.post('/getRoomList', function(req, res){commsy.getRoomList(req.body.session_id, function(err, result){
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
app.post('/getPortalRoomConfiguration', function(req, res){commsy.getPortalRoomConfiguration(req.body.session_id, req.body.portal_id, function(err, result){
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
app.post('/touAccepted', function(req, res){commsy.touAccepted(req.body.session_id, req.body.portal_id, function(err, result){
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
app.post('/saveRoom', function(req, res){commsy.saveRoom(req.body.session_id, req.body.context_id, req.body.title, req.body.id, req.body.type, req.body.template, req.body.language, req.body.intervals, req.body.assignments, req.body.description, function(err, result){
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
app.post('/deleteRoom', function(req, res){commsy.deleteRoom(req.body.session_id, req.body.portal_id, req.body.room_id, function(err, result){
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
app.post('/archiveRoom', function(req, res){commsy.archiveRoom(req.body.session_id, req.body.portal_id, req.body.room_id, function(err, result){
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
app.post('/getRoomDetails', function(req, res){commsy.getRoomDetails(req.body.session_id, req.body.context_id, req.body.room_id, function(err, result){
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
app.post('/sendContactMail', function(req, res){commsy.sendContactMail(req.body.session_id, req.body.context_id, req.body.message, function(err, result){
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
app.post('/getAuthenticationForWiki', function(req, res){commsy.getAuthenticationForWiki(req.body.session_id, req.body.context_id, req.body.user_id, function(err, result){
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
app.post('/savePosForItem', function(req, res){commsy.savePosForItem(req.body.session_id, req.body.item_id, req.body.x, req.body.y, function(err, result){
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
app.post('/savePosForLink', function(req, res){commsy.savePosForLink(req.body.session_id, req.body.item_id, req.body.label_id, req.body.x, req.body.y, function(err, result){
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
app.post('/refreshSession', function(req, res){commsy.refreshSession(req.body.session_id, function(err, result){
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
app.post('/logout', function(req, res){commsy.logout(req.body.session_id, function(err, result){
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
app.post('/authenticateViaSession', function(req, res){commsy.authenticateViaSession(req.body.session_id, function(err, result){
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
app.post('/wordpressAuthenticateViaSession', function(req, res){commsy.wordpressAuthenticateViaSession(req.body.session_id, function(err, result){
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
app.post('/changeUserEmail', function(req, res){commsy.changeUserEmail(req.body.session_id, req.body.email, function(err, result){
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
app.post('/changeUserEmailAll', function(req, res){commsy.changeUserEmailAll(req.body.session_id, req.body.email, function(err, result){
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
app.post('/changeUserId', function(req, res){commsy.changeUserId(req.body.session_id, req.body.user_id, function(err, result){
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
app.post('/setUserExternalId', function(req, res){commsy.setUserExternalId(req.body.session_id, req.body.external_id, function(err, result){
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
app.post('/changeUserName', function(req, res){commsy.changeUserName(req.body.session_id, req.body.firstname, req.body.lastname, function(err, result){
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
app.post('/updateLastlogin', function(req, res){commsy.updateLastlogin(req.body.session_id, req.body.tool, req.body.room_id, function(err, result){
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
app.post('/createMembershipBySession', function(req, res){commsy.createMembershipBySession(req.body.session_id, req.body.context_id, req.body.agb, function(err, result){
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
app.post('/getAGBFromRoom', function(req, res){commsy.getAGBFromRoom(req.body.context_id, req.body.language, function(err, result){
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
app.post('/getStatistics', function(req, res){commsy.getStatistics(req.body.session_id, req.body.start_date, req.body.end_date, function(err, result){
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
app.post('/authenticateForApp', function(req, res){commsy.authenticateForApp(req.body.user_id, req.body.password, req.body.portal_id, req.body.auth_source_id, function(err, result){
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
app.post('/getPortalRoomList', function(req, res){commsy.getPortalRoomList(req.body.session_id, req.body.portal_id, function(err, result){
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
app.post('/getPortalRoomListByCountAndSearch', function(req, res){commsy.getPortalRoomListByCountAndSearch(req.body.session_id, req.body.start, req.body.count, req.body.search, req.body.timeLimit, req.body.roomTypeLimit, req.body.order, function(err, result){
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
app.post('/getUserInformation', function(req, res){commsy.getUserInformation(req.body.session_id, req.body.context_id, function(err, result){
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
app.post('/getPortalConfig', function(req, res){commsy.getPortalConfig(req.body.portal_id, function(err, result){
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
app.post('/getAuthSources', function(req, res){commsy.getAuthSources(req.body.session_id, req.body.portal_id, function(err, result){
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
app.post('/getBarInformation', function(req, res){commsy.getBarInformation(req.body.session_id, req.body.portal_id, function(err, result){
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
app.post('/getContextToU', function(req, res){commsy.getContextToU(req.body.session_id, req.body.portal_id, function(err, result){
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
app.post('/registerUser', function(req, res){commsy.registerUser(req.body.session_id, req.body.portal_id, req.body.firstname, req.body.lastname, req.body.email, req.body.identification, req.body.password, req.body.tou, function(err, result){
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
app.post('/sendIdForget', function(req, res){commsy.sendIdForget(req.body.session_id, req.body.portal_id, req.body.email, function(err, result){
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
app.post('/sendPwForget', function(req, res){commsy.sendPwForget(req.body.session_id, req.body.portal_id, req.body.identification, function(err, result){
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
app.post('/getPortalList', function(req, res){commsy.getPortalList(function(err, result){
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
app.post('/getAnnouncementsInRange', function(req, res){commsy.getAnnouncementsInRange(req.body.session_id, req.body.context_id, req.body.valid_timestamp, function(err, result){
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
app.post('/getDatesList', function(req, res){commsy.getDatesList(req.body.session_id, req.body.context_id, function(err, result){
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
app.post('/getDatesInRange', function(req, res){commsy.getDatesInRange(req.body.session_id, req.body.context_id, req.body.start_timestamp, req.body.end_timestamp, function(err, result){
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
app.post('/getDateDetails', function(req, res){commsy.getDateDetails(req.body.session_id, req.body.context_id, req.body.item_id, function(err, result){
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
app.post('/saveDate', function(req, res){commsy.saveDate(req.body.session_id, req.body.context_id, req.body.item_id, req.body.title, req.body.place, req.body.description, req.body.startingDate, req.body.startingTime, req.body.endingDate, req.body.endingTime, req.body.uploadFiles, req.body.deleteFiles, function(err, result){
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
app.post('/deleteDate', function(req, res){commsy.deleteDate(req.body.session_id, req.body.context_id, req.body.item_id, function(err, result){
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
app.post('/getMaterialsList', function(req, res){commsy.getMaterialsList(req.body.session_id, req.body.context_id, function(err, result){
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
app.post('/getMaterialDetails', function(req, res){commsy.getMaterialDetails(req.body.session_id, req.body.context_id, req.body.item_id, function(err, result){
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
app.post('/saveMaterial', function(req, res){commsy.saveMaterial(req.body.session_id, req.body.context_id, req.body.item_id, req.body.title, req.body.description, req.body.uploadFiles, req.body.deleteFiles, function(err, result){
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
app.post('/deleteMaterial', function(req, res){commsy.deleteMaterial(req.body.session_id, req.body.context_id, req.body.item_id, function(err, result){
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
app.post('/saveSection', function(req, res){commsy.saveSection(req.body.session_id, req.body.context_id, req.body.item_id, req.body.title, req.body.description, req.body.number, req.body.uploadFiles, req.body.deleteFiles, req.body.material_item_id, function(err, result){
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
app.post('/deleteSection', function(req, res){commsy.deleteSection(req.body.session_id, req.body.context_id, req.body.item_id, function(err, result){
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
app.post('/getDiscussionList', function(req, res){commsy.getDiscussionList(req.body.session_id, req.body.context_id, function(err, result){
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
app.post('/getDiscussionDetails', function(req, res){commsy.getDiscussionDetails(req.body.session_id, req.body.context_id, req.body.item_id, function(err, result){
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
app.post('/deleteDiscussion', function(req, res){commsy.deleteDiscussion(req.body.session_id, req.body.context_id, req.body.item_id, function(err, result){
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
app.post('/saveDiscussionArticle', function(req, res){commsy.saveDiscussionArticle(req.body.session_id, req.body.context_id, req.body.item_id, req.body.title, req.body.description, req.body.uploadFiles, req.body.deleteFiles, req.body.discussion_item_id, req.body.answerTo, function(err, result){
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
app.post('/saveDiscussionWithInitialArticle', function(req, res){commsy.saveDiscussionWithInitialArticle(req.body.session_id, req.body.context_id, req.body.item_id, req.body.title, req.body.item_id_article, req.body.title_article, req.body.description_article, req.body.uploadFiles, req.body.deleteFiles, function(err, result){
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
app.post('/saveDiscussion', function(req, res){commsy.saveDiscussion(req.body.session_id, req.body.context_id, req.body.item_id, req.body.title, function(err, result){
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
app.post('/deleteDiscussionArticle', function(req, res){commsy.deleteDiscussionArticle(req.body.session_id, req.body.context_id, req.body.item_id, function(err, result){
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
app.post('/getUserList', function(req, res){commsy.getUserList(req.body.session_id, req.body.context_id, function(err, result){
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
app.post('/saveUser', function(req, res){commsy.saveUser(req.body.session_id, req.body.context_id, req.body.item_id, req.body.name, req.body.firstname, req.body.email, req.body.phone1, req.body.phone2, function(err, result){
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
app.post('/uploadFile', function(req, res){commsy.uploadFile(req.body.session_id, req.body.context_id, req.body.file_id, req.body.file_data, function(err, result){
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
app.post('/getRoomReadCounter', function(req, res){commsy.getRoomReadCounter(req.body.session_id, req.body.context_id, function(err, result){
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
app.post('/getModerationUserList', function(req, res){commsy.getModerationUserList(req.body.session_id, function(err, result){
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
app.post('/activateUser', function(req, res){commsy.activateUser(req.body.session_id, req.body.activate_user_id, function(err, result){
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
app.post('/getSessionIdFromConnectionKey', function(req, res){commsy.getSessionIdFromConnectionKey(req.body.session_id, req.body.portal_id, req.body.user_key, req.body.server_key, function(err, result){
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
app.post('/getRoomListAsJson', function(req, res){commsy.getRoomListAsJson(req.body.session_id, function(err, result){
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
app.post('/getPortalListAsJson', function(req, res){commsy.getPortalListAsJson(function(err, result){
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
app.post('/saveExternalConnectionKey', function(req, res){commsy.saveExternalConnectionKey(req.body.session_id, req.body.user_key, function(err, result){
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
app.post('/getOwnConnectionKey', function(req, res){commsy.getOwnConnectionKey(req.body.session_id, function(err, result){
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
app.post('/setPortalConnectionInfo', function(req, res){commsy.setPortalConnectionInfo(req.body.session_id, req.body.server_key, req.body.portal_id, req.body.tab_id, req.body.user_key, function(err, result){
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
app.post('/deleteConnection', function(req, res){commsy.deleteConnection(req.body.session_id, req.body.tab_id, function(err, result){
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

var port = process.env.PORT || 8000
app.listen(port, function(){
  console.log("Server started");
});
