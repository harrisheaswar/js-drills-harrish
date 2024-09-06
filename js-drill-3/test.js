import {findCarById} from "./solution.js";



// ==== Problem #1 ====
    // The dealer can't recall the information for a car with an id of 33 on his lot. Help the dealer find out which car has an id of 33 by calling a function that will return the data for that car. Then log the car's year, make, and model in the console log in the format of:
    // ("Car 33 is a *car year goes here* *car make goes here* *car model goes here*");


    console.log("Tests for function findCarsById()");
    
    //With No Params
    console.log("Test with no params: ");
    const carByIndexTest1=findCarById();
    if(carByIndexTest1.hasOwnProperty('id')){
        console.log(`Car ${carByIndexTest1.id} is a ${carByIndexTest1["car_year"]} ${carByIndexTest1["car_make"]} ${carByIndexTest1["car_model"]}`);
    }else{
        console.log(carByIndexTest1.message);
    }

    //With correct params
    console.log("Test with correct params: ");
    const carByIndexTest2=findCarById(33);
    if(carByIndexTest2.hasOwnProperty('id')){
        console.log(`Car ${carByIndexTest2.id} is a ${carByIndexTest2["car_year"]} ${carByIndexTest2["car_make"]} ${carByIndexTest2["car_model"]}`);
    }else{
        console.log(carByIndexTest2.message);
    }

    //With inappropriate params
    console.log("Test with inappropriate params: ");
    const carByIndexTest3=findCarById("Hello world!!");
    if(carByIndexTest3.hasOwnProperty('id')){
        console.log(`Car ${carByIndexTest3.id} is a ${carByIndexTest3["car_year"]} ${carByIndexTest3["car_make"]} ${carByIndexTest3["car_model"]}`);
    }else{
        console.log(carByIndexTest3.message);
    }



