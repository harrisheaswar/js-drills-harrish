import {inventory} from "./cars.js";


// ==== Problem #1 ====
    // The dealer can't recall the information for a car with an id of 33 on his lot. Help the dealer find out which car has an id of 33 by calling a function that will return the data for that car. Then log the car's year, make, and model in the console log in the format of:
    // ("Car 33 is a *car year goes here* *car make goes here* *car model goes here*");
 

export function findCarById(inputId=33){

    if(typeof inputId!="number"){                                                           //Checks for invalid input
        return {message: "Invalid input. Please enter a number."};
    }

    for(let index=0; index<inventory.length;index++){                                       //Loops the array and matches the input index
        if(inventory[index].id===inputId){
            return inventory[index];                                                        //Return the object. In test.js the obj is consoled accordingly.
        }
    }
    return {message:"Car with given id not found"};                                         // When no car with given index is found
}



// ==== Problem #2 ====
    // The dealer needs the information on the last car in their inventory. Execute a function to find what the make and model of the last car in the inventory is?  Log the make and model into the console in the format of:
    //("Last car is a *car make goes here* *car model goes here*");


    export function findLastCar(){

        if(inventory.length===0) return {message: "Inventory is Empty"};
    
        let lastIndex=inventory.length-1;
    
        return inventory[lastIndex];

    }    


    