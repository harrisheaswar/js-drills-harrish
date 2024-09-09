import {counterFactory} from "./counterFactory.js";

console.log("Test for function counterFactory(): ");

//No param test:
console.log("No input param test: ");
const counterObjTest1=counterFactory();

//increment
console.log("Increment:")
const varInc=counterObjTest1.increment();
console.log(varInc);
//decrement
console.log("Decrement");
const varDec=counterObjTest1.decrement();
console.log(varDec+'\n');

//-----------------------------------------------------------------------------------------------------------------//

//Correct Param test:
console.log("Valid input param test: ");
const counterObjTest2=counterFactory(10);

    //increment

console.log("Increment:")
const varInc2=counterObjTest2.increment();
console.log(varInc2);

    //decrement

console.log("Decrement:")
const varDec2=counterObjTest2.decrement();
console.log(varDec2+'\n');

//-----------------------------------------------------------------------------------------------------------------//

//Inappropriate param test:
console.group("Inappropriate param test: ");
const counterObjTest3=counterFactory("Whats up!!");
console.log(counterObjTest3+'\n');

console.log("-------------------End Of Test---------------------");