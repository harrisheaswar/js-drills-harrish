import {mapObject} from "./mapObject.js";
import {testObject} from "./objects.js";
function cb(value){

    if(typeof value==="number"){
        return value*2;
    }
    return "Joker!!";
}

console.log("Test for function mapObject(): ");
const mapObjectTest=mapObject(testObject,cb);
console.log(mapObjectTest);