export function filter(elements,cb){
    let arr=[];
    for(let index=0;index<elements.length;index++){
        if(cb(elements[index])) arr.push(elements[index]);
    }

    return arr;
}