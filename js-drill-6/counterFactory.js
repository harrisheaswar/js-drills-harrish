
export function counterFactory(variable=0){                                       //  default set to 0


    if(typeof variable!="number"){                                                // Testing for invalid input like string. Note: I am excluding string numbers aswell
        return "Invalid input. Please input a number";
    }

    const obj={                                                                   // Increment
        increment(){
            variable++;
            return variable;
        },
        
        decrement(){                                                              // Decrement
            variable--;
            return variable;
        }
    };


    return obj;

}