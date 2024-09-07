export function each(elements,cb){

    for(let index=0;index<elements.length;index++){
        cb(elements[index],index);
    }
}

