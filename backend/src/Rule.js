const DialogFlow=require("./DialogFlowService.js");
const ParsingFunctions=require("./ParsingFunctions.js");


class Rule{
    start(req,res){
            //rule to query Dialog Flow with
            var query = req.body.rule;
            //Parse this text
            var text = req.body.text;
            //Pass the text to Dialog Flow
            /**
             * Send a query to the dialogflow agent, and return the query result.
             * @param {string} projectId The project to be used
             */
            var dialogFlowService = new DialogFlow();
            var parsingFunctions = new ParsingFunctions();
            dialogFlowService.sendTextMessageToDialogFlow(query)
                .then(function(response){
                    let intent=response.intent.displayName.toLowerCase()
                    console.log("intent: "+intent)
                    if(intent ==null){return res.send({"ERROR":"NO INTENT FOUND"});}
                    let what=""
                    switch(intent) {
                        case "splice":
                            //single or multiple words first two cases
                            //second word or second through 4th word
                            let lower=response.fulfillmentMessages[0].payload.fields.lower.stringValue
                            let upper=response.fulfillmentMessages[0].payload.fields.upper.stringValue
                            return parsingFunctions.splice(text,upper,lower,res)
                        break;
                        case "splice-based-on-email":
                            let following=response.fulfillmentMessages[0].payload.fields.following.stringValue
                            what=response.fulfillmentMessages[0].payload.fields.what.stringValue
                            return parsingFunctions.wordAndFollowing(text,what,following,res)
                        break;
                        case "preceding-text":
                            what=response.fulfillmentMessages[0].payload.fields.what.stringValue
                            return parsingFunctions.wordsPreceding(text,what,res)
                        break;
                        default:
                                return res.send({"ERROR":"NO INTENT MATCHED FOR A FUNCTION"});
                                
                    }
                    //return res.send({"forcast":returnTxt});
                })    
    }
    
    

}
module.exports = Rule;