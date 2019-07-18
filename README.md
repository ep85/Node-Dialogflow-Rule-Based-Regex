# Node-Dialogflow-Rule-Based-Regex
Rule based regex, based on api passing through a text and rule. Strip the text based on the rule passed in
NodeJs

Dialog flow pass text to every time
Comes back with intent
Add regex that comes back to run it on text 
Everything can be managed from Dialog flow

Npm modules
 	https://www.npmjs.com/package/dialogflow
 	https://www.npmjs.com/package/data-store
	Express,fs

Setup
  NodeJs
	Clone code
	Nom install
	Node server.js
	Will run on localhost:5000
		Make a post man post request with url localhost:5000
		add text and rule in a son request
		See screenshot below
  Dialog flow 
	Has been exported so you can add it to your own project or see screenshots and add manually. In folder /Dialogflow

Run it
	Download the postman request from /postman folder, also a screenshot is provided
	Run the node server with. “node server.js”
        Send the post man request 

Why use Dialog Flow
  For non programmers this is the best solution anyone can simply add new rules and go to https://regex101.com/ test and add regex as the response
  Can have variances of the text passed through without having to change any code Dialog flow can handle this
  Easily Users can add new rules and regex without having to change the backend code or deploy new code
  Can be tested from the Dialog flow instance or from a Rest Call

 
