import {map} from "./map.js";

const items = [1, 2, 3, 4, 5, 5];

function cb(element){                       //function takes the element and returns and returns element*2
    return element*2;
}

const mapTest=map(items,cb);
console.log(mapTest);

