import {reduce} from "./reduce.js";

const items = [1, 2, 3, 4, 5, 5];
let startingValue;
function cb(result,element){
    result+=element;
    return result;    
}

//With no value for startingValue
console.log("With no params");
const reduceTest1= reduce(items,cb,startingValue);
console.log(reduceTest1);


//With defined Params
startingValue=1;
console.log("With correct params");
const reduceTest2=reduce(items,cb,startingValue);
console.log(reduceTest2);


