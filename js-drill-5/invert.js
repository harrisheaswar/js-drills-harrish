export function invert(obj){

    let newObj={};

        for(let name in obj){
            newObj[obj[name]]=name;
        }
    
    return newObj;
}