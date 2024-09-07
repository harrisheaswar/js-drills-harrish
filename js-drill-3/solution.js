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

 // ==== Problem #3 ====
  // The marketing team wants the car models listed alphabetically on the website. Execute a function to Sort all the car model names into alphabetical order and log the results in the console as it was returned.
  

    export function sortByModel(){

        let modelArray=[];

        for(let index=0;index<inventory.length;index++){                                        //first stored all the models in an array
            modelArray.push(inventory[index]["car_model"]);
        }


        for(let index=0;index<modelArray.length;index++){                                       //sorted it using double for loop. Selection sort
            let minIndex= index;

            for(let index2=index+1;index2<modelArray.length;index2++){
                if(modelArray[index2].toLowerCase()<modelArray[minIndex].toLowerCase()){        //compares the strings(Converted it to lowercase to compare)
                    minIndex=index2;
                }
            }

            if(minIndex!=index){
                [modelArray[index],modelArray[minIndex]]=[modelArray[minIndex],modelArray[index]];
            }

        }
        
        return modelArray;
    }
  

// ==== Problem #4 ====
  // The accounting team needs all the years from every car on the lot. Execute a function that will return an array from the dealer data containing only the car years and log the result in the console as it was returned.
  

    export function findAllCarYears(){

        let yearArr=[];

        for(let index=0;index<inventory.length;index++){
            yearArr.push(inventory[index]["car_year"]);
        }

        return yearArr;
    }


// ==== Problem #5 ====
  // The car lot manager needs to find out how many cars are older than the year 2000. Using the array you just obtained from the previous problem, find out how many cars were made before the year 2000 and return the array of older cars and log its length.
  

  export function findOlderCars(inputYear=2000){                                                     //input year set to 2000 by default

    const yearArray= findAllCarYears();
    const olderCarsArr=[];

    if(typeof inputYear!="number"){                                                                    //Error message for invalid input
        return ("Invalid Input. Please enter an year(number)");
    }

    for(let index=0;index<yearArray.length;index++){
        if(yearArray[index]<inputYear){
            olderCarsArr.push(inventory[index]);
        }
    }

    return olderCarsArr;
  }


// ==== Problem #6 ====
  // A buyer is interested in seeing only BMW and Audi cars within the inventory.  Execute a function and return an array that only contains BMW and Audi cars.  Once you have the BMWAndAudi array, use JSON.stringify() to show the results of the array in the console.


  export function findAllCarsByInput(...inputCars){                                                 //Using rest for flexible inputs.

    if(inputCars.length===0){                                                                       //If no input params. Then BMW and Audi are set as default
        inputCars.push("BMW");
        inputCars.push("Audi");
    }
    
    for(let index=0;index<inputCars.length;index++){                                                // Test for invalid input with error response
        let regexNum=/\d+/;
        if(typeof inputCars[index]!="string" || regexNum.test(inputCars[index])){
            return `Input is invalid, only car names(strings) allowed`;
        }
    }

    const carArr=[];

    for(let index=0;index<inputCars.length;index++){                                                // loop compares each input with inventory and return cars array

        for(let index2=0;index2<inventory.length;index2++){
            if(inventory[index2]["car_make"]===inputCars[index]){
                carArr.push(inventory[index2]);
            }
        }

    }

    return carArr;

  }