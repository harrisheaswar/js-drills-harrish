export function map(elements,cb){
    
    let res=[];

        for(let index=0;index<elements.length;index++){

            const changedVal=cb(elements[index]);           //call back function which multiplies the elemet by 2 and returns it

            res.push(changedVal);
        }

    return res;
}