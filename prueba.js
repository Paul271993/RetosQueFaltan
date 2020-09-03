let array = [1,2,3,4,5,6,7,8,9,10];
let pares = [];
let noprimos = [];
for(let i= 0;i<array.length;i++){
    if(i % 2 ==0){
        pares.push(array[i]);
    }
    console.log(pares);