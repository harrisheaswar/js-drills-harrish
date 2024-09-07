
let flattened=[];                                   //I am using a flattening array to store the elements

export function flatten(elements){
   
    if(!Array.isArray(elements)){                   //checking if the given input isan array. If not then add the element to flattened array
        flattened.push(elements);
        return;
    }

        for(let index=0;index<elements.length;index++){                 //using loop and recursion to go through each element as see if it is an array or not to further divide it
            flatten(elements[index]);
        }

    return flattened;
}
