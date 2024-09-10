export function limitFunctionCallCount(cb, n=10) {              //n=10 as default
    
    let limit=n;                                                // will be using this variable in testing
    let regexNum= /\d+/;

        if(typeof n==="String" && regexNum.test(n)){                // test for invalid input of n
                
            n=parseInt(n);

        }else if(typeof n==="string"){

            return "Invalid input. Please enter a valid input";
        }



    let cnt=0;                                                  //counter to count cb
       
    return { 
        cbCount(){                                          
        
            if(cnt<n){                                              //keeps track of cnt
            cnt++;                                  
            return cb();

        }else{
            return null;
        }
    },
    get limit(){                                                // for testing purpose only.
        return limit
    }
}
}