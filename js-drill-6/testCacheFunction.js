import {cacheFunction} from "./cacheFunction.js";

function cbAdd(args){
    let sum=0;
    for(let index=0;index<args.length;index++){
        sum+=args[index];
    }
    return sum;
}

console.log("Testing for cacheFunction(): ");

//No param test
const testCacheFunction1=cacheFunction(cbAdd);
console.log("No input param test: ");

const testRes1=testCacheFunction1();
console.log(testRes1.result);
console.log(testRes1.message);

//-----------------------------------------------------//

//Input param test
const testCacheFunction2=cacheFunction(cbAdd);
console.log("Correct param test: ");

const testRes2=testCacheFunction2(2,7,9,3);
console.log(testRes2.result);
console.log(testRes2.message);

//-----------------------------------------------------//

//Input param test(with exisiting result)
console.log("Correct param test(Exisiting result): ");

const testRes3=testCacheFunction2(2,7,9,3);
console.log(testRes3.result);
console.log(testRes3.message);

//-----------------------------------------------------//


//Inappropriate param 
const testCacheFunction4=cacheFunction(cbAdd);
console.log("Inappropriate param test: ");

const testRes4=testCacheFunction4("Hello World",2,3)
console.log(testRes4.result);
console.log(testRes4.message);


//-----------------------------------------------------//