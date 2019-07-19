

class ParsinFunctions{
    //works for case of multiple or single
    splice(text,upper,lower, res){
        console.log("Spliceing with lower: "+lowerbound+ " and "+"upper "+upperbound)
        let upperbound=parseInt(upper)
        let lowerbound=(lower!=null && lower!="")? parseInt(lower) : upperbound-1;
        let returnTxt=text.split(/\s+/).slice(lowerbound,upperbound).join(' ')
        return res.send({"forcast":returnTxt});
    }
    wordAndFollowing(text,what,following,res){
        let returnTxt
        console.log(following)
        if(what=="email"){
            returnTxt=text.split(/@\w*.\w*/).slice(1,following).join(' ')
        }else if(what=="phone"){
            returnTxt=text.split(/@\w*.\w*/).slice(1,following).join(' ')
        }
        return res.send({"forcast":returnTxt});
    }
}
module.exports = ParsinFunctions;