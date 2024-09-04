import * as solution from './solution.js';


/* Function that accesses and returns the email addresses of all individuals. */

    console.log("Testing for getAllEmails():\n");

    //No params test
    console.log("No param test:")
    const getEmailsTest1=solution.getAllEmails();
    console.log(getEmailsTest1.join('\n')+"\n");

    // With Param(This function does not take any params as such) test
    console.log("With param test:")
    const getEmailsTest2=solution.getAllEmails(25);
    console.log(getEmailsTest2.join('\n')+'\n');
    console.log("--------------------------------------\n\n");

    //-----------------------------------------------------------------------------------------------------------------------------------------------------//


/* Function that retrieves and prints the hobbies of individuals with a specific age, say 30 years old. */

    console.log("Testing for getHobbiesByAge():\n");

    //No params test
    console.log("No param test");
    const getHobbiesByAgeTest1= solution.getHobbiesByAge();
    console.log(getHobbiesByAgeTest1.join('\n')+"\n");

    //With correct params test
    console.log("With correct param test");
    const getHobbiesByAgeTest2=solution.getHobbiesByAge(30);
    console.log(getHobbiesByAgeTest2.join('\n')+"\n");


    //With wrong params test
    console.log("With wrong param test");
    const getHobbiesByAgeTest3=solution.getHobbiesByAge("Hello World!");
    console.log(getHobbiesByAgeTest3.join('\n')+'\n');
    console.log("--------------------------------------\n\n");

    
    //----------------------------------------------------------------------------------------------------------------------------------------------------//


/* Test for function that extracts and displays the names of individuals who are students (`isStudent: true`) and live in Australia. */

    console.log("Test for getStudentsByCountry():\n");
    
    //No params test
    console.log("No param test:");
    const getStudentsByCountryTest1= solution.getStudentsByCountry();
    console.log(getStudentsByCountryTest1+"\n");

    //With correct param test
    console.log("With correct param test:");
    const getStudentsByCountryTest2= solution.getStudentsByCountry("Australia");
    console.log(getStudentsByCountryTest2+"\n");


    //With wrong params test
    console.log("Wrong param test:");
    const getStudentsByCountryTest3= solution.getStudentsByCountry(12345);
    console.log(getStudentsByCountryTest3+'\n');
    console.log("--------------------------------------\n\n");


    //---------------------------------------------------------------------------------------------------------------------------------------------------//

/* Test for function that accesses and logs the name and city of the individual at the index position 3 in the dataset */

    console.log("Test for getNameAndCityByIndex():\n");

    // No params test
    console.log("No param test:");
    const getNameAndCityByIndexTest1=solution.getNameAndCityByIndex();
    console.log(getNameAndCityByIndexTest1+"\n");

    //With correct Params test
    console.log("With correct param test:");
    const getNameAndCityByIndexTest2=solution.getNameAndCityByIndex(3);
    console.log(getNameAndCityByIndexTest2+"\n");

    //With wrong Params test
    console.log("Wrong param test:");
    const getNameAndCityByIndexTest3=solution.getNameAndCityByIndex("abcdef");
    console.log(getNameAndCityByIndexTest3+'\n');
    console.log("--------------------------------------\n\n");


    //--------------------------------------------------------------------------------------------------------------------------------------------------//

    /* Test for loop to access and print the ages of all individuals in the dataset. */

    console.log("Test for getAgesOfAll():\n");


    // No params test
    console.log("No param test:");
    const getAgeOfAllTest1=solution.getAgeOfAll();
    console.log(getAgeOfAllTest1.join('\n')+"\n");


    // With params(Does not take in params so can use anything) test
    console.log("Input param test:");
    const getAgeOfAllTest2=solution.getAgeOfAll(85);
    console.log(getAgeOfAllTest2.join('\n')+'\n');
    console.log("--------------------------------------\n\n");
    //-------------------------------------------------------------------------------------------------------------------------------------------------//

    /* Test for function to retrieve and display the first hobby of each individual in the dataset */

    console.log("Test for getFirstHobbyOfAll():\n");

    
    //No params test
    console.log("No param test:");
    const getFirstHobbyOfAllTest1=solution.getFirstHobbyOfAll();
    console.log(getFirstHobbyOfAllTest1.join('\n')+'\n');
    
    //With params( function doesn't take input hence these can be included with wrong params) test
    console.log("Input param test:");
    const getFirstHobbyOfAllTest2=solution.getFirstHobbyOfAll(12345);
    console.log(getFirstHobbyOfAllTest2.join('\n')+'\n');
    console.log("--------------------------------------\n\n");

    //--------------------------------------------------------------------------------------------------------------------------------------------------//

    /* Test for accesses and prints the names and email addresses of individuals aged 25*/

    console.log("Test for getNameAndEmailByAge():\n");


    //No params
    console.log("No param test:");
    const getNameAndEmailByAgeTest1=solution.getNameAndEmailByAge();
    console.log(getNameAndEmailByAgeTest1.join('\n')+"\n");

    //With input correct params
    console.log("With correct param test:");
    const getNameAndEmailByAgeTest2=solution.getNameAndEmailByAge(25);
    console.log(getNameAndEmailByAgeTest2.join('\n'))+"\n";

    //With wrong input params
    console.log("Wrong param test:")
    const getNameAndEmailByAgeTest3=solution.getNameAndEmailByAge("Hello World!!!");
    console.log(getNameAndEmailByAgeTest3.join('\n')+'\n');
    console.log("--------------------------------------\n\n");

    //-----------------------------------------------------------------------------------------------------------------------------------------------------//

    /* Test for Loop to access and log the city and country of each individual in the dataset */


    console.log("Test for getCityAndCountryOfAll()\n");

    //No params test
    console.log("No param test:");
    const getCityAndCountryOfAllTest1=solution.getCityAndCountryOfAll();
    console.log(getCityAndCountryOfAllTest1.join('\n')+"\n");

    //With params(this function does not take inputs hence testing with random inputs)test
    console.log("With input param test:");
    const getCityAndCountryOfAllTest2=solution.getCityAndCountryOfAll();
    console.log(getCityAndCountryOfAllTest2.join('\n')+'\n');
    console.log("--------------------------------------\n\n");


    //====================================================================================================================================================//
