import {defaults} from "./defaults.js";
import {testObject} from "./objects.js";

const defaultProps={
    name: "Bruce Wayne",
    age: 36,
    location: "Gotham" ,
    car: "Bat-mobile"
}
const testDefaults= defaults(testObject,defaultProps);
console.log(testDefaults);

