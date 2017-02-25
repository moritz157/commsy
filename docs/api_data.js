define({ "api": [
  {
    "type": "post",
    "url": "/activateUser",
    "title": "activateUser",
    "group": "Main",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "session_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "activate_user_id",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "generated/generatedApp.js",
    "groupTitle": "Main",
    "name": "PostActivateuser"
  },
  {
    "type": "post",
    "url": "/addFileForMaterial",
    "title": "addFileForMaterial",
    "group": "Main",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "session_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "material_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "file_item_xml",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "generated/generatedApp.js",
    "groupTitle": "Main",
    "name": "PostAddfileformaterial"
  },
  {
    "type": "post",
    "url": "/addMaterialLimit",
    "title": "addMaterialLimit",
    "group": "Main",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "value",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "session_id",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "generated/generatedApp.js",
    "groupTitle": "Main",
    "name": "PostAddmateriallimit"
  },
  {
    "type": "post",
    "url": "/addPrivateRoomMaterialList",
    "title": "addPrivateRoomMaterialList",
    "group": "Main",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "session_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "material_list_xml",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "generated/generatedApp.js",
    "groupTitle": "Main",
    "name": "PostAddprivateroommateriallist"
  },
  {
    "type": "post",
    "url": "/archiveRoom",
    "title": "archiveRoom",
    "group": "Main",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "session_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "portal_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "room_id",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "generated/generatedApp.js",
    "groupTitle": "Main",
    "name": "PostArchiveroom"
  },
  {
    "type": "post",
    "url": "/authenticate",
    "title": "authenticate",
    "group": "Main",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "portal_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "auth_source_id",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "generated/generatedApp.js",
    "groupTitle": "Main",
    "name": "PostAuthenticate"
  },
  {
    "type": "post",
    "url": "/authenticateForApp",
    "title": "authenticateForApp",
    "group": "Main",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "portal_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "auth_source_id",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "generated/generatedApp.js",
    "groupTitle": "Main",
    "name": "PostAuthenticateforapp"
  },
  {
    "type": "post",
    "url": "/authenticateViaSession",
    "title": "authenticateViaSession",
    "group": "Main",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "session_id",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "generated/generatedApp.js",
    "groupTitle": "Main",
    "name": "PostAuthenticateviasession"
  },
  {
    "type": "post",
    "url": "/authenticateWithLogin",
    "title": "authenticateWithLogin",
    "group": "Main",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "portal_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "auth_source_id",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "generated/generatedApp.js",
    "groupTitle": "Main",
    "name": "PostAuthenticatewithlogin"
  },
  {
    "type": "post",
    "url": "/changeUserEmail",
    "title": "changeUserEmail",
    "group": "Main",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "session_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "generated/generatedApp.js",
    "groupTitle": "Main",
    "name": "PostChangeuseremail"
  },
  {
    "type": "post",
    "url": "/changeUserEmailAll",
    "title": "changeUserEmailAll",
    "group": "Main",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "session_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "generated/generatedApp.js",
    "groupTitle": "Main",
    "name": "PostChangeuseremailall"
  },
  {
    "type": "post",
    "url": "/changeUserId",
    "title": "changeUserId",
    "group": "Main",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "session_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user_id",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "generated/generatedApp.js",
    "groupTitle": "Main",
    "name": "PostChangeuserid"
  },
  {
    "type": "post",
    "url": "/changeUserName",
    "title": "changeUserName",
    "group": "Main",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "session_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "firstname",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lastname",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "generated/generatedApp.js",
    "groupTitle": "Main",
    "name": "PostChangeusername"
  },
  {
    "type": "post",
    "url": "/createMembershipBySession",
    "title": "createMembershipBySession",
    "group": "Main",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "session_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "context_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "agb",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "generated/generatedApp.js",
    "groupTitle": "Main",
    "name": "PostCreatemembershipbysession"
  },
  {
    "type": "post",
    "url": "/createUser",
    "title": "createUser",
    "group": "Main",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "session_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "portal_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "firstname",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lastname",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mail",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user_pwd",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "agb",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "send_email",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "generated/generatedApp.js",
    "groupTitle": "Main",
    "name": "PostCreateuser"
  },
  {
    "type": "post",
    "url": "/deleteConnection",
    "title": "deleteConnection",
    "group": "Main",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "session_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tab_id",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "generated/generatedApp.js",
    "groupTitle": "Main",
    "name": "PostDeleteconnection"
  },
  {
    "type": "post",
    "url": "/deleteDate",
    "title": "deleteDate",
    "group": "Main",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "session_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "context_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "item_id",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "generated/generatedApp.js",
    "groupTitle": "Main",
    "name": "PostDeletedate"
  },
  {
    "type": "post",
    "url": "/deleteDiscussion",
    "title": "deleteDiscussion",
    "group": "Main",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "session_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "context_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "item_id",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "generated/generatedApp.js",
    "groupTitle": "Main",
    "name": "PostDeletediscussion"
  },
  {
    "type": "post",
    "url": "/deleteDiscussionArticle",
    "title": "deleteDiscussionArticle",
    "group": "Main",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "session_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "context_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "item_id",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "generated/generatedApp.js",
    "groupTitle": "Main",
    "name": "PostDeletediscussionarticle"
  },
  {
    "type": "post",
    "url": "/deleteFileItem",
    "title": "deleteFileItem",
    "group": "Main",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "session_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "file_id",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "generated/generatedApp.js",
    "groupTitle": "Main",
    "name": "PostDeletefileitem"
  },
  {
    "type": "post",
    "url": "/deleteMaterial",
    "title": "deleteMaterial",
    "group": "Main",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "session_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "context_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "item_id",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "generated/generatedApp.js",
    "groupTitle": "Main",
    "name": "PostDeletematerial"
  },
  {
    "type": "post",
    "url": "/deleteRoom",
    "title": "deleteRoom",
    "group": "Main",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "session_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "portal_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "room_id",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "generated/generatedApp.js",
    "groupTitle": "Main",
    "name": "PostDeleteroom"
  },
  {
    "type": "post",
    "url": "/deleteSection",
    "title": "deleteSection",
    "group": "Main",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "session_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "context_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "item_id",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "generated/generatedApp.js",
    "groupTitle": "Main",
    "name": "PostDeletesection"
  },
  {
    "type": "post",
    "url": "/getActiveRoomList",
    "title": "getActiveRoomList",
    "group": "Main",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "session_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "portal_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "count",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "generated/generatedApp.js",
    "groupTitle": "Main",
    "name": "PostGetactiveroomlist"
  },
  {
    "type": "post",
    "url": "/getActiveRoomListForUser",
    "title": "getActiveRoomListForUser",
    "group": "Main",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "session_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "portal_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "count",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "generated/generatedApp.js",
    "groupTitle": "Main",
    "name": "PostGetactiveroomlistforuser"
  },
  {
    "type": "post",
    "url": "/getAGBFromRoom",
    "title": "getAGBFromRoom",
    "group": "Main",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "context_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "language",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "generated/generatedApp.js",
    "groupTitle": "Main",
    "name": "PostGetagbfromroom"
  },
  {
    "type": "post",
    "url": "/getAnnouncementsInRange",
    "title": "getAnnouncementsInRange",
    "group": "Main",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "session_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "context_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "valid_timestamp",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "generated/generatedApp.js",
    "groupTitle": "Main",
    "name": "PostGetannouncementsinrange"
  },
  {
    "type": "post",
    "url": "/getAuthenticationForWiki",
    "title": "getAuthenticationForWiki",
    "group": "Main",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "session_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "context_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user_id",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "generated/generatedApp.js",
    "groupTitle": "Main",
    "name": "PostGetauthenticationforwiki"
  },
  {
    "type": "post",
    "url": "/getAuthSources",
    "title": "getAuthSources",
    "group": "Main",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "session_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "portal_id",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "generated/generatedApp.js",
    "groupTitle": "Main",
    "name": "PostGetauthsources"
  },
  {
    "type": "post",
    "url": "/getBarInformation",
    "title": "getBarInformation",
    "group": "Main",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "session_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "portal_id",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "generated/generatedApp.js",
    "groupTitle": "Main",
    "name": "PostGetbarinformation"
  },
  {
    "type": "post",
    "url": "/getBuzzwordList",
    "title": "getBuzzwordList",
    "group": "Main",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "session_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "context_id",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "generated/generatedApp.js",
    "groupTitle": "Main",
    "name": "PostGetbuzzwordlist"
  },
  {
    "type": "post",
    "url": "/getContextToU",
    "title": "getContextToU",
    "group": "Main",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "session_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "portal_id",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "generated/generatedApp.js",
    "groupTitle": "Main",
    "name": "PostGetcontexttou"
  },
  {
    "type": "post",
    "url": "/getCountRooms",
    "title": "getCountRooms",
    "group": "Main",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "session_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "portal_id",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "generated/generatedApp.js",
    "groupTitle": "Main",
    "name": "PostGetcountrooms"
  },
  {
    "type": "post",
    "url": "/getCountUser",
    "title": "getCountUser",
    "group": "Main",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "session_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "portal_id",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "generated/generatedApp.js",
    "groupTitle": "Main",
    "name": "PostGetcountuser"
  },
  {
    "type": "post",
    "url": "/getDateDetails",
    "title": "getDateDetails",
    "group": "Main",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "session_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "context_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "item_id",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "generated/generatedApp.js",
    "groupTitle": "Main",
    "name": "PostGetdatedetails"
  },
  {
    "type": "post",
    "url": "/getDatesInRange",
    "title": "getDatesInRange",
    "group": "Main",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "session_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "context_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "start_timestamp",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "end_timestamp",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "generated/generatedApp.js",
    "groupTitle": "Main",
    "name": "PostGetdatesinrange"
  },
  {
    "type": "post",
    "url": "/getDatesList",
    "title": "getDatesList",
    "group": "Main",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "session_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "context_id",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "generated/generatedApp.js",
    "groupTitle": "Main",
    "name": "PostGetdateslist"
  },
  {
    "type": "post",
    "url": "/getDiscussionDetails",
    "title": "getDiscussionDetails",
    "group": "Main",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "session_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "context_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "item_id",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "generated/generatedApp.js",
    "groupTitle": "Main",
    "name": "PostGetdiscussiondetails"
  },
  {
    "type": "post",
    "url": "/getDiscussionList",
    "title": "getDiscussionList",
    "group": "Main",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "session_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "context_id",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "generated/generatedApp.js",
    "groupTitle": "Main",
    "name": "PostGetdiscussionlist"
  },
  {
    "type": "post",
    "url": "/getFileItem",
    "title": "getFileItem",
    "group": "Main",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "session_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "file_id",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "generated/generatedApp.js",
    "groupTitle": "Main",
    "name": "PostGetfileitem"
  },
  {
    "type": "post",
    "url": "/getFileListFromItem",
    "title": "getFileListFromItem",
    "group": "Main",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "session_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "item_id",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "generated/generatedApp.js",
    "groupTitle": "Main",
    "name": "PostGetfilelistfromitem"
  },
  {
    "type": "post",
    "url": "/getFileListFromMaterial",
    "title": "getFileListFromMaterial",
    "group": "Main",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "session_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "material_id",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "generated/generatedApp.js",
    "groupTitle": "Main",
    "name": "PostGetfilelistfrommaterial"
  },
  {
    "type": "post",
    "url": "/getGroupList",
    "title": "getGroupList",
    "group": "Main",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "session_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "context_id",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "generated/generatedApp.js",
    "groupTitle": "Main",
    "name": "PostGetgrouplist"
  },
  {
    "type": "post",
    "url": "/getGuestSession",
    "title": "getGuestSession",
    "group": "Main",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "portal_id",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "generated/generatedApp.js",
    "groupTitle": "Main",
    "name": "PostGetguestsession"
  },
  {
    "type": "post",
    "url": "/getLabelList",
    "title": "getLabelList",
    "group": "Main",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "session_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "context_id",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "generated/generatedApp.js",
    "groupTitle": "Main",
    "name": "PostGetlabellist"
  },
  {
    "type": "post",
    "url": "/getMaterialDetails",
    "title": "getMaterialDetails",
    "group": "Main",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "session_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "context_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "item_id",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "generated/generatedApp.js",
    "groupTitle": "Main",
    "name": "PostGetmaterialdetails"
  },
  {
    "type": "post",
    "url": "/getMaterialList",
    "title": "getMaterialList",
    "group": "Main",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "session_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "context_id",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "generated/generatedApp.js",
    "groupTitle": "Main",
    "name": "PostGetmateriallist"
  },
  {
    "type": "post",
    "url": "/getMaterialsList",
    "title": "getMaterialsList",
    "group": "Main",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "session_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "context_id",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "generated/generatedApp.js",
    "groupTitle": "Main",
    "name": "PostGetmaterialslist"
  },
  {
    "type": "post",
    "url": "/getModerationUserList",
    "title": "getModerationUserList",
    "group": "Main",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "session_id",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "generated/generatedApp.js",
    "groupTitle": "Main",
    "name": "PostGetmoderationuserlist"
  },
  {
    "type": "post",
    "url": "/getOwnConnectionKey",
    "title": "getOwnConnectionKey",
    "group": "Main",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "session_id",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "generated/generatedApp.js",
    "groupTitle": "Main",
    "name": "PostGetownconnectionkey"
  },
  {
    "type": "post",
    "url": "/getPortalConfig",
    "title": "getPortalConfig",
    "group": "Main",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "portal_id",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "generated/generatedApp.js",
    "groupTitle": "Main",
    "name": "PostGetportalconfig"
  },
  {
    "type": "post",
    "url": "/getPortalList",
    "title": "getPortalList",
    "group": "Main",
    "version": "0.0.0",
    "filename": "generated/generatedApp.js",
    "groupTitle": "Main",
    "name": "PostGetportallist"
  },
  {
    "type": "post",
    "url": "/getPortalListAsJson",
    "title": "getPortalListAsJson",
    "group": "Main",
    "version": "0.0.0",
    "filename": "generated/generatedApp.js",
    "groupTitle": "Main",
    "name": "PostGetportallistasjson"
  },
  {
    "type": "post",
    "url": "/getPortalRoomConfiguration",
    "title": "getPortalRoomConfiguration",
    "group": "Main",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "session_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "portal_id",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "generated/generatedApp.js",
    "groupTitle": "Main",
    "name": "PostGetportalroomconfiguration"
  },
  {
    "type": "post",
    "url": "/getPortalRoomList",
    "title": "getPortalRoomList",
    "group": "Main",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "session_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "portal_id",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "generated/generatedApp.js",
    "groupTitle": "Main",
    "name": "PostGetportalroomlist"
  },
  {
    "type": "post",
    "url": "/getPortalRoomListByCountAndSearch",
    "title": "getPortalRoomListByCountAndSearch",
    "group": "Main",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "session_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "start",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "count",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "search",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "timeLimit",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "roomTypeLimit",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "order",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "generated/generatedApp.js",
    "groupTitle": "Main",
    "name": "PostGetportalroomlistbycountandsearch"
  },
  {
    "type": "post",
    "url": "/getPrivateRoomMaterialList",
    "title": "getPrivateRoomMaterialList",
    "group": "Main",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "session_id",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "generated/generatedApp.js",
    "groupTitle": "Main",
    "name": "PostGetprivateroommateriallist"
  },
  {
    "type": "post",
    "url": "/getRoomDetails",
    "title": "getRoomDetails",
    "group": "Main",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "session_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "context_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "room_id",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "generated/generatedApp.js",
    "groupTitle": "Main",
    "name": "PostGetroomdetails"
  },
  {
    "type": "post",
    "url": "/getRoomList",
    "title": "getRoomList",
    "group": "Main",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "session_id",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "generated/generatedApp.js",
    "groupTitle": "Main",
    "name": "PostGetroomlist"
  },
  {
    "type": "post",
    "url": "/getRoomListAsJson",
    "title": "getRoomListAsJson",
    "group": "Main",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "session_id",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "generated/generatedApp.js",
    "groupTitle": "Main",
    "name": "PostGetroomlistasjson"
  },
  {
    "type": "post",
    "url": "/getRoomReadCounter",
    "title": "getRoomReadCounter",
    "group": "Main",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "session_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "context_id",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "generated/generatedApp.js",
    "groupTitle": "Main",
    "name": "PostGetroomreadcounter"
  },
  {
    "type": "post",
    "url": "/getRSSUrl",
    "title": "getRSSUrl",
    "group": "Main",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "session_id",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "generated/generatedApp.js",
    "groupTitle": "Main",
    "name": "PostGetrssurl"
  },
  {
    "type": "post",
    "url": "/getSectionListFromMaterial",
    "title": "getSectionListFromMaterial",
    "group": "Main",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "session_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "material_id",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "generated/generatedApp.js",
    "groupTitle": "Main",
    "name": "PostGetsectionlistfrommaterial"
  },
  {
    "type": "post",
    "url": "/getSessionIdFromConnectionKey",
    "title": "getSessionIdFromConnectionKey",
    "group": "Main",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "session_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "portal_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user_key",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "server_key",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "generated/generatedApp.js",
    "groupTitle": "Main",
    "name": "PostGetsessionidfromconnectionkey"
  },
  {
    "type": "post",
    "url": "/getStatistics",
    "title": "getStatistics",
    "group": "Main",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "session_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "start_date",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "end_date",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "generated/generatedApp.js",
    "groupTitle": "Main",
    "name": "PostGetstatistics"
  },
  {
    "type": "post",
    "url": "/getTopicList",
    "title": "getTopicList",
    "group": "Main",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "session_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "context_id",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "generated/generatedApp.js",
    "groupTitle": "Main",
    "name": "PostGettopiclist"
  },
  {
    "type": "post",
    "url": "/getUserInfo",
    "title": "getUserInfo",
    "group": "Main",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "session_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "context_id",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "generated/generatedApp.js",
    "groupTitle": "Main",
    "name": "PostGetuserinfo"
  },
  {
    "type": "post",
    "url": "/getUserInformation",
    "title": "getUserInformation",
    "group": "Main",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "session_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "context_id",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "generated/generatedApp.js",
    "groupTitle": "Main",
    "name": "PostGetuserinformation"
  },
  {
    "type": "post",
    "url": "/getUserList",
    "title": "getUserList",
    "group": "Main",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "session_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "context_id",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "generated/generatedApp.js",
    "groupTitle": "Main",
    "name": "PostGetuserlist"
  },
  {
    "type": "post",
    "url": "/IMS",
    "title": "IMS",
    "group": "Main",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "session_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ims_xml",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "generated/generatedApp.js",
    "groupTitle": "Main",
    "name": "PostIms"
  },
  {
    "type": "post",
    "url": "/linkFileToMaterial",
    "title": "linkFileToMaterial",
    "group": "Main",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "session_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "material_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "file_id",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "generated/generatedApp.js",
    "groupTitle": "Main",
    "name": "PostLinkfiletomaterial"
  },
  {
    "type": "post",
    "url": "/logout",
    "title": "logout",
    "group": "Main",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "session_id",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "generated/generatedApp.js",
    "groupTitle": "Main",
    "name": "PostLogout"
  },
  {
    "type": "post",
    "url": "/refreshSession",
    "title": "refreshSession",
    "group": "Main",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "session_id",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "generated/generatedApp.js",
    "groupTitle": "Main",
    "name": "PostRefreshsession"
  },
  {
    "type": "post",
    "url": "/registerUser",
    "title": "registerUser",
    "group": "Main",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "session_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "portal_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "firstname",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lastname",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "identification",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "tou",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "generated/generatedApp.js",
    "groupTitle": "Main",
    "name": "PostRegisteruser"
  },
  {
    "type": "post",
    "url": "/saveDate",
    "title": "saveDate",
    "group": "Main",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "session_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "context_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "item_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "place",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "startingDate",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "startingTime",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "endingDate",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "endingTime",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "uploadFiles",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "deleteFiles",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "generated/generatedApp.js",
    "groupTitle": "Main",
    "name": "PostSavedate"
  },
  {
    "type": "post",
    "url": "/saveDiscussion",
    "title": "saveDiscussion",
    "group": "Main",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "session_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "context_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "item_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "generated/generatedApp.js",
    "groupTitle": "Main",
    "name": "PostSavediscussion"
  },
  {
    "type": "post",
    "url": "/saveDiscussionArticle",
    "title": "saveDiscussionArticle",
    "group": "Main",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "session_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "context_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "item_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "uploadFiles",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "deleteFiles",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "discussion_item_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "answerTo",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "generated/generatedApp.js",
    "groupTitle": "Main",
    "name": "PostSavediscussionarticle"
  },
  {
    "type": "post",
    "url": "/saveDiscussionWithInitialArticle",
    "title": "saveDiscussionWithInitialArticle",
    "group": "Main",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "session_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "context_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "item_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "item_id_article",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title_article",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description_article",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "uploadFiles",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "deleteFiles",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "generated/generatedApp.js",
    "groupTitle": "Main",
    "name": "PostSavediscussionwithinitialarticle"
  },
  {
    "type": "post",
    "url": "/saveExternalConnectionKey",
    "title": "saveExternalConnectionKey",
    "group": "Main",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "session_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user_key",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "generated/generatedApp.js",
    "groupTitle": "Main",
    "name": "PostSaveexternalconnectionkey"
  },
  {
    "type": "post",
    "url": "/saveMaterial",
    "title": "saveMaterial",
    "group": "Main",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "session_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "context_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "item_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "uploadFiles",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "deleteFiles",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "generated/generatedApp.js",
    "groupTitle": "Main",
    "name": "PostSavematerial"
  },
  {
    "type": "post",
    "url": "/savePosForItem",
    "title": "savePosForItem",
    "group": "Main",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "session_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "item_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "x",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "y",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "generated/generatedApp.js",
    "groupTitle": "Main",
    "name": "PostSaveposforitem"
  },
  {
    "type": "post",
    "url": "/savePosForLink",
    "title": "savePosForLink",
    "group": "Main",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "session_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "item_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "label_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "x",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "y",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "generated/generatedApp.js",
    "groupTitle": "Main",
    "name": "PostSaveposforlink"
  },
  {
    "type": "post",
    "url": "/saveRoom",
    "title": "saveRoom",
    "group": "Main",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "session_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "context_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "template",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "language",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "intervals",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "assignments",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "generated/generatedApp.js",
    "groupTitle": "Main",
    "name": "PostSaveroom"
  },
  {
    "type": "post",
    "url": "/saveSection",
    "title": "saveSection",
    "group": "Main",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "session_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "context_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "item_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "number",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "uploadFiles",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "deleteFiles",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "material_item_id",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "generated/generatedApp.js",
    "groupTitle": "Main",
    "name": "PostSavesection"
  },
  {
    "type": "post",
    "url": "/saveUser",
    "title": "saveUser",
    "group": "Main",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "session_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "context_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "item_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "firstname",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone1",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone2",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "generated/generatedApp.js",
    "groupTitle": "Main",
    "name": "PostSaveuser"
  },
  {
    "type": "post",
    "url": "/sendContactMail",
    "title": "sendContactMail",
    "group": "Main",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "session_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "context_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "generated/generatedApp.js",
    "groupTitle": "Main",
    "name": "PostSendcontactmail"
  },
  {
    "type": "post",
    "url": "/sendIdForget",
    "title": "sendIdForget",
    "group": "Main",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "session_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "portal_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "generated/generatedApp.js",
    "groupTitle": "Main",
    "name": "PostSendidforget"
  },
  {
    "type": "post",
    "url": "/sendPwForget",
    "title": "sendPwForget",
    "group": "Main",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "session_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "portal_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "identification",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "generated/generatedApp.js",
    "groupTitle": "Main",
    "name": "PostSendpwforget"
  },
  {
    "type": "post",
    "url": "/setPortalConnectionInfo",
    "title": "setPortalConnectionInfo",
    "group": "Main",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "session_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "server_key",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "portal_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tab_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user_key",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "generated/generatedApp.js",
    "groupTitle": "Main",
    "name": "PostSetportalconnectioninfo"
  },
  {
    "type": "post",
    "url": "/setUserExternalId",
    "title": "setUserExternalId",
    "group": "Main",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "session_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "external_id",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "generated/generatedApp.js",
    "groupTitle": "Main",
    "name": "PostSetuserexternalid"
  },
  {
    "type": "post",
    "url": "/touAccepted",
    "title": "touAccepted",
    "group": "Main",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "session_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "portal_id",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "generated/generatedApp.js",
    "groupTitle": "Main",
    "name": "PostTouaccepted"
  },
  {
    "type": "post",
    "url": "/updateLastlogin",
    "title": "updateLastlogin",
    "group": "Main",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "session_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tool",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "room_id",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "generated/generatedApp.js",
    "groupTitle": "Main",
    "name": "PostUpdatelastlogin"
  },
  {
    "type": "post",
    "url": "/uploadFile",
    "title": "uploadFile",
    "group": "Main",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "session_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "context_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "file_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "file_data",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "generated/generatedApp.js",
    "groupTitle": "Main",
    "name": "PostUploadfile"
  },
  {
    "type": "post",
    "url": "/wordpressAuthenticateViaSession",
    "title": "wordpressAuthenticateViaSession",
    "group": "Main",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "session_id",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "generated/generatedApp.js",
    "groupTitle": "Main",
    "name": "PostWordpressauthenticateviasession"
  }
] });
