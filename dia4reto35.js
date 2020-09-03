// var cantidadNumeros = 100;

// var myArray = []
// while(myArray.length < cantidadNumeros ){
//   var numeroAleatorio = Math.ceil(Math.random()*cantidadNumeros);
//   var existe = false;
//   for(var i=0;i<myArray.length;i++){
// 	if(myArray [i] == numeroAleatorio){
//         existe = true;
//         break;
//     }
//   }
//   if(!existe){
//     myArray[myArray.length] = numeroAleatorio;
//   }

// // }
// // console.log("números aleatorios : " + myArray);
// ///////////////////////////////////////////////

// var cantidadNumeros = 100;
// var myArray = []
// while(myArray.length < cantidadNumeros ){
//   var numeroAleatorio = Math.ceil(Math.random()* 20);
//   var existe = false;
//   for(var i=0;i<myArray.length;i++){
// 	if(myArray [i] == numeroAleatorio){
//         existe = true;
//         break;
//     }
//   }

// }
// console.log("números aleatorios : " + myArray);

var array1 = new Array
var array2 = new Array


for (var i = 0; i < 100; i++){

     array1.push(Math.round(Math.random()*20))
     array2.push(Math.round(Math.random()*20))

     
}

console.log(array1)
console.log(array2)