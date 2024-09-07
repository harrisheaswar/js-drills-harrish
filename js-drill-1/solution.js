import {arrayOfObjects as arr} from './persons.js';


// Function that accesses and returns the email addresses of all individuals.

export function getAllEmails(){

    const emailArr=[];

        for(let index=0;index<arr.length;index++){
            if(arr[index].hasOwnProperty("email")){
                emailArr.push(arr[index].email);
            }
        }

    return emailArr;
}

 //-----------------------------------------------------------------------------------------------------------------------------------------------------//


// Function that retrieves and prints the hobbies of individuals with a specific age, say 30 years old.

export function getHobbiesByAge(personAge=30){
    let hobbieByAge=[];
    if(typeof personAge!= "number"){
        hobbieByAge.push("Incorrect type. Please enter a number");
        return hobbieByAge;
    }

    let count=0;
    
        for(let index=0;index<arr.length;index++){
            if(arr[index].hasOwnProperty("age")){
                if(personAge===arr[index].age){
                    hobbieByAge.push((arr[index].hobbies));
                    count++;
                }
            }
        }

        if(count===0) hobbieByAge.push(`No individuals with the age ${personAge}`);

    return hobbieByAge;
}

 //-----------------------------------------------------------------------------------------------------------------------------------------------------//


// Function that extracts and displays the names of individuals who are students (`isStudent: true`) and live in Australia.

export function getStudentsByCountry(country='Australia'){
    let count=0;
    let extract=[];
    if(typeof country!="string"){
       extract.push("Incorrect type. Please enter a string");                 //return incorrect type when input params are not correct type
       return extract;
    }

    

        for(let index=0;index<arr.length;index++){

            if(arr[index].hasOwnProperty('isStudent') && arr[index].isStudent){

                    if(arr[index].hasOwnProperty("country") && arr[index].country===country){     //checks for properties in the object array and then pushes into extract array
                
                        extract.push(arr[index].name);
                                
                    }else{
                        count++;
                    }
            }else{
                count++;
            }
        }

    
    
    if(arr.length===count) extract.push("No students found for the given inputs");

    return extract;
}

 //-----------------------------------------------------------------------------------------------------------------------------------------------------//


// Function that accesses and logs the name and city of the individual at the index position 3 in the dataset.

export function getNameAndCityByIndex(index=3){

    if(typeof index!="number"){
        return ("Incorrect type. Please enter a number");
        
    }

    if(arr.length<index+1) console.log(`No student at index: ${index}`);

        if(arr[index].hasOwnProperty("name") && arr[index].hasOwnProperty("city") 
            && arr[index].name!=undefined){

                return (`Name: ${arr[index].name} City: ${arr[index].city}`);
               
            
        }else{
                return (`No student name defined at index:${index}`);
            
        }

}

 //-----------------------------------------------------------------------------------------------------------------------------------------------------//


// A loop to access and print the ages of all individuals in the dataset.

export function getAgeOfAll(){

    let getAgeArr=[];

        for(let index=0;index<arr.length;index++){

            if(arr[index].hasOwnProperty("age")){

                getAgeArr.push(`${arr[index].age}`);

            }
        }
    return getAgeArr;
}

 //-----------------------------------------------------------------------------------------------------------------------------------------------------//


// Function to retrieve and display the first hobby of each individual in the dataset.

export function getFirstHobbyOfAll(){
    let arrHobbies=[];

        for(let index=0;index<arr.length;index++){

            if(arr[index].hasOwnProperty("hobbies")){

                if(arr[index].hobbies.length!=0){

                    arrHobbies.push((arr[index].hobbies[0]));
                
                }else{
                    arrHobbies.push("It is undefined");
                    
                }
            }
        }
    return arrHobbies;
}

 //-----------------------------------------------------------------------------------------------------------------------------------------------------//


// Function that accesses and prints the names and email addresses of individuals aged 25.

export function getNameAndEmailByAge(age=25){
    let getNameArr=[];
    if(typeof age!="number"){
        getNameArr.push("Incorrect data type. Please enter a number");
        return getNameArr;
    }

        for(let index=0;index<arr.length;index++){
            if(arr[index].hasOwnProperty('age') && arr[index].age===age){
                getNameArr.push(`Name:${arr[index].name}    Email:${arr[index].email}`);
            }
        }

    return getNameArr;

}

 //-----------------------------------------------------------------------------------------------------------------------------------------------------//


// Loop to access and log the city and country of each individual in the dataset.

export function getCityAndCountryOfAll(){
    let cityCountryArr=[];
        for(let i=0;i<arr.length;i++){

            if(arr[i].hasOwnProperty('city') && arr[i].hasOwnProperty('country')){

                cityCountryArr.push(`${i+1}. City:${arr[i].city}    Country:${arr[i].country}`);

            }
        }
    return cityCountryArr;
}


//====================================================================================================================================================//
