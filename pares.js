var numeros = [1,2,3,4,5,6,7,8,9,10]
var pares = [];
    for(var i= 1;i<=numeros.length;i++){
    if(i % 2 ==0){
        pares.push(i);
    }
}
console.log(pares);

/////////////////////////////////////////////////////////

i = 1;
while (i<=10){
    if(i % 2 ==0){
        console.log(i);

    }
    i++;
}

////////////////////////////////////////////////////

i = 1;
do { 
    if (i % 2 ==0){
    console.log(i);
      }
        i++;
 } while (i<=10);


