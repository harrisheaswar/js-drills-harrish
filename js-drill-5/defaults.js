export function defaults(obj,defaultProps){

    for(let name in defaultProps){
        if(defaultProps.hasOwnProperty(name)){
            if(obj[name]===undefined){
                obj[name]=defaultProps[name];
            }
        }
    }

    return obj;
}