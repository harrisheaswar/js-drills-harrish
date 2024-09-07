import {find} from './find.js';

const items = [1, 2, 3, 4, 5, 5];
let testValue=5;

function cb(element){
    if(element===testValue){
        return true;
    }

    return false;
}

console.log("Test for function find(): ");
const findTest=find(items,cb);
console.log(findTest);
