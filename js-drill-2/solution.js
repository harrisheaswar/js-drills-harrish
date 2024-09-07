import {users} from './users.js';


/* Find all users who are interested in playing video games */

export function findUsersByInterests(interest="Video games"){                           //default accepts video games.
    let userArray=[];
    let regexTest=/^\d+|\d+|\d+$/;

    if(typeof interest != "string" || regexTest.test(interest)){                        //corner case when input is inappropriate like non strings and numbers
        userArray.push("Inappropriate input. Please enter a valid interest");
        return userArray;
    }

    let regexUser=new RegExp(`\\b${interest}\\b`,'i');                                    //using regex to convert input to test case. here trying to isolate user input hence \b.

        for(let name in users){

            if(users[name].hasOwnProperty('interests') && users[name].interests!=undefined){      //checking if obj has property and its not undefined
                let interestArr=users[name].interests;
                for(let j=0;j<interestArr.length;j++){
                    if(regexUser.test(interestArr[j])){                                     //matching regex with each element of the array to check for match
                        userArray.push(name);
                    }               
                }
            }
        }
    if(userArray.length==0) userArray.push("No users with the given interest.");        // corner case when no users match with input.

    return userArray;
}


//---------------------------------------------------------------------------------------------------------------------------//


/*  Find all users staying in Germany */


export function findUserByNationality(location="Germany"){
    
    let userArray=[];
    let regexTest=/^\d+|\d+|\d+$/;                                                              //regex to check for numbers in string.

    if(typeof location != "string" || regexTest.test(location)){                               //checking for inappropriate inputs like numbers and non strings
        userArray.push("Inappropriate input. Please enter a location");
        return userArray;
    }

        for(let name in users){
            if(users[name].hasOwnProperty('nationality') && users[name].nationality===location){          //checking if property exists in obj and user input matches data or not
                userArray.push(name);
            }
        }

    if( userArray.length===0) userArray.push(`No user found staying in ${location}`);           // WHen no user is found for the given inputs.

    return userArray;
}


//--------------------------------------------------------------------------------------------------------------------------//


/* Find all users with masters Degree */


export function findAllByDegree(degree="Masters"){

    let userArray = [];
    let regexTest=/^\d+|\d+|\d+$/;
    
    if(typeof degree!="string" || regexTest.test(degree)){
        userArray.push("Inappropriate input. Please input a valid degree name");            //corner case to check for inappropriate inputs
    }

    let regexUser=new RegExp(`.*${degree}.*`,'i');                                          // regex to check for the degree and test the match
    
        for(let name in users){

            if(users[name].hasOwnProperty("qualification") && regexUser.test(users[name].qualification)){       //checking for property to avoid null. Regex to match string.

                userArray.push(name);
            }
        }

    if(userArray.length===0) userArray.push("No users found with the given degree.");          //No users found with given inputs

    return userArray;

}

//------------------------------------------------------------------------------------------------------------------------------//


/* Group users based on their Programming language mentioned in their designation */


export function groupUsersByProgLang(){
    let sample=[/.*Javascript.*/i, /.*Golang.*/i,/\bJava\b/,/.*Python.*/i,/.*Rust.*/i,/.*Ruby.*/i];    //creating an array of regex to later match each string in array
    
    let groupArray=[];

        for(let index=0;index<sample.length;index++){                                                                   // Outer loop runs each regex 
            let arr=[];
                for(let name in users){
                    if(users[name].hasOwnProperty("designation") && sample[index].test(users[name].designation)){       // matching the regex to every element of user     
                        arr.push(name);                                                                                 //adding to particular group array  
                    }
                }
            
            if(arr.length!=0) groupArray.push(arr);                                                         //passing each group to larger array.

        }

    return groupArray;
}

// ==============================================================================================================================//

