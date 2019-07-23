const dialogflow = require('dialogflow').v2beta1;
const uuid = require('uuid');

const LANGUAGE_CODE = 'en-US' 


class DialogFlowService {
	constructor () {
		this.projectId = "rule-parser-ibaphg"

		this.sessionClient = new dialogflow.SessionsClient({
            keyFilename: './google.json'
        })
	}
    /**
    * Passes messages to DialogFlow Project
    *@param {string} textMessage Message sending to dialog flow
    */
	async sendTextMessageToDialogFlow(textMessage) {
        const sessionId = uuid.v4();
		// Define session path
		const sessionPath = this.sessionClient.sessionPath(this.projectId, sessionId);
		// The text query request.
		const request = {
			session: sessionPath,
			queryInput: {
				text: {
					text: textMessage,
					languageCode: LANGUAGE_CODE
				}
			}
		}
		try {
			let response = await this.sessionClient.detectIntent(request)			
            console.log('DialogFlow.sendTextMessageToDialogFlow: Detected intent');
            if(response && response[0] && response[0].queryResult){
                return response[0].queryResult
            }else{
                throw err
            }
		}
		catch(err) {
			console.error('DialogFlow.sendTextMessageToDialogFlow ERROR:', err);
			throw err
		}
	}
}
module.exports = DialogFlowService;