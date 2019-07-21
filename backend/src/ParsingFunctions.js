

class ParsinFunctions{
    //works for case of multiple or single
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
    splice(text,upper,lower, res){
        console.log("Spliceing with lower: "+lowerbound+ " and "+"upper "+upperbound)
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
    wordAndFollowingParsing(text,following){
        if(text.length>1 ){
            let textFormat=text[0].trim().split(" ").slice(0,following).join(' ')
            return textFormat
        }
        return "";
    }
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
   wordsPrecedingParsing(text){
        if(text.length>1 ){
            let textFormat=text[0].trim()
            return textFormat
        }
        return "";
    }
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
   specificPrecedingParsing(text){
        console.log("HERE")
        console.log(text)
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