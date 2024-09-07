import {each} from "./each.js";

const items = [1, 2, 3, 4, 5, 5];

function cb(element,index){
    console.log(`Callback function called for index: ${index} and element: ${element}`);
}

const eachTest1= each(items,cb);


