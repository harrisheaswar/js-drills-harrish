export function keys(obj){

    let keysArr=[];

        for(let name in obj){       // for loop the obj and push key into array
            keysArr.push(`${name}`);
        }

    return keysArr;

}