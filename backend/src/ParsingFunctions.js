

class ParsinFunctions{
    /**
     * Standard format for returning back to the API
     */
    returnBack(res,returnTxt,text,what,upper,lower){
        if(returnTxt !=null && returnTxt !=""){
            return res.send({"forcast":returnTxt});
        }else{
            if(what !=""){
                return res.send({"ERROR":"For the following: "+text+" "+what+" was not found"}); 
            }if(upper !="" && lower!=""){
                return res.send({"ERROR":"For the following: "+text+" "+upper+" "+ lower+" could not be parsed"}); 
            }
        }
    }
    /*
    --------------------------------------------------------------------------
                    Word Splicing
    --------------------------------------------------------------------------
    */
    /**
     * Use Case
     * 1. GET Specific index of word -> "Second word"
     * 2. Get words between two indexs -> "Second through fifth word"
    * Description
    * Finds the word to splice then gets the specific amount of words after that 
    * the query asks for, can work for 
    */
    splice(text,upper,lower, res){
        let upperbound=parseInt(upper)
        let lowerbound=(lower!=null && lower!="")? parseInt(lower) : upperbound-1;
        let returnTxt=text.split(/\s+/).slice(lowerbound,upperbound).join(' ')
        return this.returnBack(res,returnTxt,text,"",uppwer,lower)

    }
    /*
    --------------------------------------------------------------------------
                    Following Parsing
    --------------------------------------------------------------------------
    */
   //Parses the array to get Specific amount of words after what it was looking for
    wordAndFollowingParsing(text,following){
        console.log(text)
        if(text.length>1 ){
            let textFormat=text[text.length-1].trim().split(" ").slice(0,following).join(' ')
            return textFormat
        }
        return "";
    }
     /**
     * Use Case
     * 1. Email/Phone or word following a specific amount of words
    * Description
    * Locates the specific word then grabs the amount of words after specificed
    * Technical:
    * Splits based regex of what it is then passes it to parser  
    */
    wordAndFollowing(text,what,following,res){
        let returnTxt
        let followingNum=parseInt(following)
        let splitArray=[]
        if(what=="email address"){
            //email address
            splitArray=text.split(/@\w*.\w*/)
            returnTxt=this.wordAndFollowingParsing(splitArray, followingNum)
        }else if(what=="phone number"){
            //phone number
            splitArray=text.split(/\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/)
            returnTxt=this.wordAndFollowingParsing(splitArray, followingNum)
        }else{
            //any word passed thorugh
            splitArray=text.split(what)
            returnTxt=this.wordAndFollowingParsing(splitArray, followingNum)
        }
        return this.returnBack(res,returnTxt,text,what);
    }
    /*
    --------------------------------------------------------------------------
                    Preceding Parsing
    --------------------------------------------------------------------------
    */
   //Returns the string prior to specific word
   wordsPrecedingParsing(text){
        if(text.length>1 ){
            let textFormat=text[0].trim()
            return textFormat
        }
        return "";
    }
    /**
    * Use Case
    * 1. String Preceding
    * Description
    * Locates the specific word then grabs the string after
    * Technical:
    * Splits based regex of what it is then passes it to parser  
    */
    wordsPreceding(text,what,res){
        let returnTxt
        let splitArray=[]
        if(what=="email address"){
            //email address
            splitArray=text.split(/@\w*.\w*/)
            returnTxt=this.wordsPrecedingParsing(splitArray)
        }else if(what=="phone number"){
            //phone number
            splitArray=text.split(/\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/)
            returnTxt=this.wordsPrecedingParsing(splitArray)
        }else{
            //any word passed thorugh
            splitArray=text.split(what)
            returnTxt=this.wordsPrecedingParsing(splitArray)
        }
        return this.returnBack(res,returnTxt,text,what);
    }

    /*
    --------------------------------------------------------------------------
                    Specific Word Parsing
    --------------------------------------------------------------------------
    */
   //finds the preceding date and returns it back
   specificPrecedingParsing(text){
        if(text.length>1 ){
            let textFormat=text[0].trim()
            //will only work for MM-DD-YYYY
            textFormat= textFormat.match(/((?=\d{4})\d{4}|(?=[a-zA-Z]{3})[a-zA-Z]{3}|\d{2})((?=\/)\/|\-)((?=[0-9]{2})[0-9]{2}|(?=[0-9]{1,2})[0-9]{1,2}|[a-zA-Z]{3})((?=\/)\/|\-)((?=[0-9]{4})[0-9]{4}|(?=[0-9]{2})[0-9]{2}|[a-zA-Z]{3})/g)
            if(textFormat.length>0){
                return textFormat[0].trim()
            }else{
                return ""
            }
        }
        return "";
    }
    /**
    * Use Case
    * 1. Specific date preceding the specified word
    * Description
    * Locates the specificed word such as emal/phone/word then gets the date prior to it
    * Technical:
    * Splits based regex of what it is then passes it to parser to find the date  
    */
    specificPreceding(text,what,res){
        let returnTxt
        let splitArray=[]
        if(what=="email address"){
            //email address
            splitArray=text.split(/@\w*.\w*/)
            returnTxt=this.specificPrecedingParsing(splitArray)
        }else if(what=="phone number"){
            //phone number
            splitArray=text.split(/\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/)
            returnTxt=this.specificPrecedingParsing(splitArray)
        }else{
            //any word passed thorugh
            splitArray=text.split(what)
            console.log(what)
            returnTxt=this.specificPrecedingParsing(splitArray)
        }
        return this.returnBack(res,returnTxt,text,what);
    }
}
module.exports = ParsinFunctions;