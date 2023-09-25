
         function setupSimpleXAPI(actorName, actorMail, verbId, verbDisplay, objectId, objectName, objectDescription, resultResponseValue, resultSuccessValue, contextActivity, contextActivityName){

                let userAgent = JSON.stringify(navigator.userAgent);

                 var statement = {
                     "actor": {
                         "mbox": actorMail,
                         "name": actorName,
                         "objectType": "Agent"
                     },
                     "verb": {
                         "id": verbId,
                         "display": {"en-US": verbDisplay}
                     },
                     "object": {
                         "id": objectId,
                         "objectType": "Activity",
                         "definition": {
                             "name": {"en-US": objectName},
                             "description": {"en-US": objectDescription}
                         }
                     },
                     "context": {
                        "extensions": {
                           "https://credreg.net/ctdlasn/terms/Competency#alignTo": "https://credentialengineregistry.org/resources/ce-4451c5bf-6e1f-4935-9e63-e1c4f18b6e18",
                           "https://w3id.org/xapi/netc/extensions/user-agent": navigator.userAgent
                        }
                     },
                     "result": {
                        "response": resultResponseValue,
                        "success": resultSuccessValue
                    },
                 }; //end statement definition
                 console.log(JSON.stringify(statement));
                 return statement;

             }


