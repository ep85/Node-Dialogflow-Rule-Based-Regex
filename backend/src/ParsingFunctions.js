

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
    splice(text,upper,lower, res){
        console.log("Spliceing with lower: "+lowerbound+ " and "+"upper "+upperbound)
        let upperbound=parseInt(upper)
        let lowerbound=(lower!=null && lower!="")? parseInt(lower) : upperbound-1;
        let returnTxt=text.split(/\s+/).slice(lowerbound,upperbound).join(' ')
        return this.returnBack(res,returnTxt,text,"",uppwer,lower)

    }
    findText(text,following){

        if(text.length>1 ){
            let textFormat=text[text.length-1].trim().split(" ").slice(0,following).join(' ')
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
            returnTxt=this.findText(splitArray, followingNum)
        }else if(what=="phone number"){
            //phone number
            splitArray=text.split(/\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/)
            returnTxt=this.findText(splitArray, followingNum)
        }else{
            //any word passed thorugh
            splitArray=text.split(what)
            returnTxt=this.findText(splitArray, followingNum)
        }
        return this.returnBack(res,returnTxt.trim(),text,what);
    }
}
module.exports = ParsinFunctions;