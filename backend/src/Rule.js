const DialogFlow=require("./DialogFlowService.js");
const ParsingFunctions=require("./ParsingFunctions.js");
const dialogFlowService = new DialogFlow();
 const parsingFunctions = new ParsingFunctions();
class Rule{
    //
    start(req,res){
            //take in variables from message body of request
            var query = req.body.rule;
            var text = req.body.text;
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
                        case "splice-based-on-email":
                            let following=response.fulfillmentMessages[0].payload.fields.following.stringValue
                            what=response.fulfillmentMessages[0].payload.fields.what.stringValue
                            return parsingFunctions.wordAndFollowing(text,what,following,res)
                        case "preceding-text":
                            //string before email/phone/any word
                            what=response.fulfillmentMessages[0].payload.fields.what.stringValue
                            return parsingFunctions.wordsPreceding(text,what,res)
                        case "preceding-date":
                            //date or other email/phone/any word
                            what=response.fulfillmentMessages[0].payload.fields.what.stringValue
                            return parsingFunctions.specificPreceding(text,what,res)
                        default:
                                return res.send({"ERROR":"NO INTENT MATCHED FOR A FUNCTION"});
                                
                    }
                })    
    }
    
    

}
module.exports = Rule;