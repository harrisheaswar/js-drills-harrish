import {filter} from './filter.js';

const items = [1, 2, 3, 4, 5, 5];

    function cb(element){
        
        if(element%2===0) return true;

        return false;
    }

console.log("Test for function filter(): ");
const filterTest=filter(items,cb);
console.log(filterTest);