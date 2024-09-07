export function values(obj){
    let valuesArr=[];

    for(let name in obj){               // looping the obj and pushing values to arr
        valuesArr.push(obj[name]);
    }
    return valuesArr;
}