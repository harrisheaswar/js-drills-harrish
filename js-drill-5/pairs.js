export function pairs(testObject){
    
    let arr=[];

        for(let name in testObject){
            arr.push([name,testObject[name]]);
        }
        return arr;
}