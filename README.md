# Node-Dialogflow-Rule-Based-Regex
<h2>Problem</h2> <p>Create a service to take in text and the rule and return the text based on the rule applied to it. </p>

<h2>Summary</h2> <p>This service will take in a text and rule and will use Dialog Flow to determine which rule to use. DialogFlow will pass back an intent of which rule it is and will pass back regex that the user setting up dialog flow has set as a response. Then the API will return the text with the regex applied.</p>

<h2>Why use Dialog Flow</h2>
<ul>
  <li> Handles variances of words and checks for mistakes from the user</li>
  <li>For non programmers this is the best solution anyone can simply add new rules and go to https://regex101.com/ test and add regex as the response</li>
  <li>Can have variances of the text passed through without having to change any code Dialog flow can handle this</li>
  <li>Easily Users can add new rules and regex without having to change the backend code or deploy new code</li>
  <li>Can be tested from the Dialog flow instance or from a Rest Call</li>
</ul>

<strong>When searching for a specific string say date preceding "Phone" it will be case sensitive</strong>

<h2>Use Cases</h2>
<h3>the phone number is 973-222-5555 in my contacts</h3>
<ul>
    <li>Nth word->Grabs the nth word</li>
        <ul>
            <li>Example: Second Word, Returns: "phone"</li>
            <li>Example: Third Word, Returns: "number"</li>
            <li>Variances handled such as: ["word 5", "word five", "word number 5"]</li>
        </ul>
    </li>
  </ul>
    <h3>the phone number is 973-222-5555 in my contacts</h3>
    <li>Second through 4th word->Grabs from the second word to the forth</li>
        <ul>
        <li>Example: Second through 4th word, Returns: "phone number is 973-222-5555"</li>
        <li>Example: 1st through 3rd, Returns: "the phone number"</li>
        <li>Variances handled such as: ["1 to 3", "1st through 3rd", "2nd through 4th", "second through fourth"]]</li>
        </ul>
    </li>
    <p>email me at palumboe1@gmail.com when you have the chance thank you</p>
        <li>Following nth words->Grabs the following nth words after email address</li>
        <ul>
        <li>Example: email following 3 words, Returns: Grabs following 3 words after the word email is found</li>
        <li>Example: email address following 3 words, Returns: Grabs following 3 words after an email address is found</li>
        <li>Example: <strong>phone number</strong> following 3 words after a phone number is found</li>
        <li>Example: phone following 3 words, Returns: 3 words after a the word phone is found</li>
        <li>Variances handled such as: ["email following 3 words", "email 3 words after"]</li>
        </ul>
        </li>
    <p>this is my phone number 973-222-5555 </p>
        <li>string preceding "phone" :Grabs the following words prior to phone</li>
        <ul>
        <li>Example: string preceding phone, Returns: "this is my"</li>
        <li>Example: string preceding <strong>phone number</strong>, Returns: "this is my phone number "</li>
        <li>Variances handled such as: ["string preceding email address", "string preceding email", "string preceding dollars"]</li>
        </ul>
        </li>
    <p>06/22/2013 is when I was born I bought a phone at 12 </p>
    <li>grabs the date preceding the string "Phone" :returns the date preceding "Phone" 06/22/2013</li>
        <ul>
        <li>Example: Date preceding phone, Returns: "06/22/2013"</li>
        <li>Variances handled such as: ["Date preceding phone", "Date preceding phone number", "Date preceding email", "Date preceding email address", "Date preceding <string>"]</li>
        </ul>
        </li>

</ul>

	
<h2>Setup</h2>
  <h3>NodeJs</h3>
	<ul>
	<li>Clone code</li>
	<li>Nom install</li>
	<li>Node server.js</li>
	<li>Will run on localhost:5000</li>
	<li>Make a post man post request with url localhost:5000</li>
	<li>add text and rule in a json request body</li>
	</ul>
 <h3>Dialog flow </h3>
	<p>Has been exported so you can add it to your own project. In folder /Dialogflow </p>

<h2>Run it</h2>
<ul>
	<li>Download the postman request from /postman folder, also a screenshot is provided</li>
	<li>Run the node server with. “node server.js”</li>
       <li> Send the post man request </li>
</ul>

