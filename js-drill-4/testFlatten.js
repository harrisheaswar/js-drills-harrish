import {flatten} from "./flatten.js";

const nestedArray = [1, [2], [[3]], [[[4]]]];

console.log("Test for function flatten(): ");
console.log(flatten(nestedArray));