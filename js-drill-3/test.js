import {findCarById,findLastCar} from "./solution.js";



// ==== Problem #1 ====
    // The dealer can't recall the information for a car with an id of 33 on his lot. Help the dealer find out which car has an id of 33 by calling a function that will return the data for that car. Then log the car's year, make, and model in the console log in the format of:
    // ("Car 33 is a *car year goes here* *car make goes here* *car model goes here*");


    console.log("Tests for function findCarsById()");
    
    //With No Params
    console.log("Test with no params: ");                                            //testing with no input params: default is set to 33 according to question
    const carByIndexTest1=findCarById();                                             // If object has id then it prints the given car details else print error msg
    
    if(carByIndexTest1.hasOwnProperty('id')){
        console.log(`Car ${carByIndexTest1.id} is a ${carByIndexTest1["car_year"]} ${carByIndexTest1["car_make"]} ${carByIndexTest1["car_model"]}`);
    }else{
        console.log(carByIndexTest1.message);
    }

    //With correct params
    console.log("Test with correct params: ");                                      //Testing with correct inputs
    const carByIndexTest2=findCarById(33);
    
    if(carByIndexTest2.hasOwnProperty('id')){
        console.log(`Car ${carByIndexTest2.id} is a ${carByIndexTest2["car_year"]} ${carByIndexTest2["car_make"]} ${carByIndexTest2["car_model"]}`);
    }else{
        console.log(carByIndexTest2.message);
    }

    //With inappropriate params
    console.log("Test with inappropriate params: ");                                //Testing with inappropriate inputs like strings.
    const carByIndexTest3=findCarById("Hello world!!");
    
    if(carByIndexTest3.hasOwnProperty('id')){
        console.log(`Car ${carByIndexTest3.id} is a ${carByIndexTest3["car_year"]} ${carByIndexTest3["car_make"]} ${carByIndexTest3["car_model"]}`);
    }else{
        console.log(carByIndexTest3.message);
    }
    console.log("------------------End of test----------------------\n");


    // ==== Problem #2 ====
    // The dealer needs the information on the last car in their inventory. Execute a function to find what the make and model of the last car in the inventory is?  Log the make and model into the console in the format of:
    //("Last car is a *car make goes here* *car model goes here*");


    console.log("Tests for function findLastCar(): ");
    
    //With no input params
    console.log("Test with no params:");
    const lastCarTest1=findLastCar();
    
    if(lastCarTest1.hasOwnProperty("id")){
        console.log(`Last car is a ${lastCarTest1["car_make"]} ${lastCarTest1["car_model"]}`);
    }else{
        console.log(lastCarTest1.message);
    }


    //With params(The function doesnt take params so any input is fine)
    console.log("Test with any params:");
    const lastCarTest2=findLastCar(25);
    
    if(lastCarTest2.hasOwnProperty("id")){
        console.log(`Last car is a ${lastCarTest2["car_make"]} ${lastCarTest2["car_model"]}`);
    }else{
        console.log(lastCarTest2.message);
    }


    console.log("------------------End of test----------------------\n");
    
    
