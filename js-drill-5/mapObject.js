import {testObject} from "./objects.js";

export function mapObject(obj,cb){

    let newObj={};

        for(let name in obj){
            newObj[name]=cb(obj[name]);
        }

    return newObj;
}