export function reduce(elements,cb,startingValue){

    let result=startingValue;
    let start=0;
    
        if(result===undefined){
            result=elements[0];
            start=1;
        }

            for(let index=start;index<elements.length;index++){
                result=cb(result,elements[index]);
            }


    return result;
}