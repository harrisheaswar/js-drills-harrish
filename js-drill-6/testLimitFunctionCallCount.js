import {limitFunctionCallCount} from "./limitFunctionCallCount.js";

let count=0;
function cb(){
    console.log(count);
    count++;
}

const testLimitTest1=limitFunctionCallCount(cb,20);

for( let index=0;index<testLimitTest1.limit+1;index++){
    if(testLimitTest1.cbCount()===null) console.log("null"); 
}