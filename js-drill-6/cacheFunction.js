export function cacheFunction(cbAdd) {
    let cache={};


    return function(...args){

        let resultObj={};

        const search=args.filter((value)=>typeof value==="string");         //invalid input and error message
        if(search.length>0){
            resultObj["result"]= undefined;
            resultObj["message"]= "Invalid input. Please enter a valid input";
            return resultObj;
        }

        const keyStr=args.sort((a,b)=>a-b).join(" ");               //sort all the numbers and convert it to a string with spaces.This is the key.
               

        if(cache[keyStr]!=undefined){
            
            const cacheValue=cache[keyStr];
            resultObj["result"]= cacheValue;
            resultObj["message"]= "Returning an exisiting result";

            return resultObj;                                       // return an obj withe the result and a message stating whether the value was cached or is it a fresh value
        }else{
            
            const cacheValue=cbAdd(args);
            cache[keyStr]=cacheValue;
            resultObj["result"]= cacheValue;
            resultObj["message"]= "New value successfully cached";
            
            return resultObj;                                       // return an obj withe the result and a message stating whether the value was cached or is it a fresh value
        }

    }

}
