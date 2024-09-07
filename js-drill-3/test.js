import {findCarById,findLastCar,sortByModel,findAllCarYears,findOlderCars, findAllCarsByInput} from "./solution.js";



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
    
    
 // ==== Problem #3 ====
    // The marketing team wants the car models listed alphabetically on the website. Execute a function to Sort all the car model names into alphabetical order and log the results in the console as it was returned.
  

    console.log("Testing for function sortByModel(): ");


    //With No Params
    console.log("Test with no params: ");                                            
    const sortByModelTest1=sortByModel();   
    console.log(sortByModelTest1);

    //With Params(Function doesnt take inputs by default so no change in test results)
    console.log("Test with params: ");                                            
    const sortByModelTest2=sortByModel("Tesla Model X");   
    console.log(sortByModelTest2);

    console.log("------------------End of test----------------------\n");
    
     
// ==== Problem #4 ====
    // The accounting team needs all the years from every car on the lot. Execute a function that will return an array from the dealer data containing only the car years and log the result in the console as it was returned.
  

    console.log("Testing for function findAllByCarYear(): ")


    //With No Params
    console.log("Test with no params: ");  
    const findAllYearsTest1=findAllCarYears();
    console.log(findAllYearsTest1);

    //With Params(Function doesnt take inputs by default so no change in test results)
    console.log("Test with params: ");  
    const findAllYearsTest2=findAllCarYears(2019);
    console.log(findAllYearsTest2); 


// ==== Problem #5 ====
    // The car lot manager needs to find out how many cars are older than the year 2000. Using the array you just obtained from the previous problem, find out how many cars were made before the year 2000 and return the array of older cars and log its length.


    console.log("Testing for function findOlderCars(): ");

    //With No Params
    console.log("Test with no params: ");                                               //default is set to year=2000;
    const findOlderCarsTest1=findOlderCars();
    console.log(findOlderCarsTest1.length);

    //With correct Params
    console.log("Test with correct params: ");                                          //Input any custom year
    const findOlderCarsTest2=findOlderCars(2000);
    console.log(findOlderCarsTest2.length);


    //With inappropriate params                                                         //Returns an error message when non numbers are passed as input
    console.log("Test with inappropriate params: ");
    const findOlderCarsTest3=findOlderCars("Hello World!!");
    console.log(findOlderCarsTest3);



// ==== Problem #6 ====
  // A buyer is interested in seeing only BMW and Audi cars within the inventory.  Execute a function and return an array that only contains BMW and Audi cars.  Once you have the BMWAndAudi array, use JSON.stringify() to show the results of the array in the console.
  

  console.log("Testing for function findAllCarsByInput(): ");


     //With No Params
     console.log("Test with no params: ");  
     const findCarsByInputTest1=JSON.stringify(findAllCarsByInput());
     console.log(findCarsByInputTest1);

     //With correct Params
     console.log("Test with correct params: ");                                               
     const findCarsByInputTest2=JSON.stringify(findAllCarsByInput("BMW","Audi"));
     console.log(findCarsByInputTest2);

     //With inappropriate params
     console.log("Test with inappropriate params: ");                                          
     const findCarsByInputTest3=JSON.stringify(findAllCarsByInput(12345));
     console.log(findCarsByInputTest3);
     


