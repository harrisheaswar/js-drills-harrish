import * as solution from "./solution.js";



/*  Test to find all users who are interested in playing video games */

    console.log("Tests for function findUsersByVideoGames():\n");

    //No input params
    console.log("No input param test:");
    const usersByGamesTest1=solution.findUsersByInterests();
    console.log(usersByGamesTest1.join('\n')+'\n');

    //With params(the function doesnt take params)
    console.log("With input param test:");
    const usersByGamesTest2=solution.findUsersByInterests("video games");
    console.log(usersByGamesTest2.join('\n')+'\n');

    //With wrong paramters
    console.log("With inappropriate param test:");
    const usersByGamesTest3=solution.findUsersByInterests("1234");
    console.log(usersByGamesTest3.join('\n')+'\n');
    console.log("-----------------End of test-----------------------\n\n");


//-------------------------------------------------------------------------------------------------------------------------------//


/* Test for find all users staying in Germany */

    console.log("Test for function findUsersByNationality():\n");

    //No input params
    console.log("No input param test:");
    const usersByNationalityTest1= solution.findUserByNationality();
    console.log(usersByNationalityTest1.join('\n')+'\n');

    //With Correct Params
    console.log("Testing with correct params:");
    const usersByNationalityTest2=solution.findUserByNationality("Greenland");
    console.log(usersByNationalityTest2.join('\n')+'\n');

    //With inappropriate input
    console.log("Testing with inappropriate params:");
    const usersByNationalityTest3=solution.findUserByNationality(123456);
    console.log(usersByNationalityTest3.join('\n')+'\n');
    console.log("-----------------End of test-----------------------\n\n");


//-------------------------------------------------------------------------------------------------------------------------------//


/* Test to find all users with masters Degree */

    console.log("Tests for function findAllByDegree():\n");

    //No input params
    console.log("No input param test:");
    const usersByDegreeTest1= solution.findAllByDegree();
    console.log(usersByDegreeTest1.join('\n')+'\n');

    //With Correct Params
    console.log("Testing with correct params:");
    const usersByDegreeTest2=solution.findAllByDegree("Masters");
    console.log(usersByDegreeTest2.join('\n')+'\n');

    //With inappropriate input
    console.log("Testing with inappropriate params:");
    const usersByDegreeTest3=solution.findAllByDegree("123456");
    console.log(usersByDegreeTest3.join('\n')+'\n');


    console.log("Test 2 with inappropriate params:");
    const usersByDegreeTest4=solution.findAllByDegree(123456);
    console.log(usersByDegreeTest4.join('\n')+'\n');
    console.log("-----------------End of test-----------------------\n\n");


//-------------------------------------------------------------------------------------------------------------------------------//


/* Test to group users based on their Programming language mentioned in their designation */

    console.log("Tests for function groupUsersByProgLang():\n");

    //No input params
    console.log("No input param test:");
    const groupUserByProLangTest1= solution.groupUsersByProgLang();
    console.log(groupUserByProLangTest1.join('\n')+'\n');

    //With Correct Params or Inappropriate params(This function doesnt take any input in general so any input would give similar results as no input test)
    console.log("Testing with correct params:");
    const groupUserByProLangTest2= solution.groupUsersByProgLang("Hello World!!");
    console.log(groupUserByProLangTest2.join('\n')+'\n');
    console.log("-----------------End of test-----------------------\n\n");



    
// ==============================================================================================================================//




