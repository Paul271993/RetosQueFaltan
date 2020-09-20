var vector = new Array




for (var i = 0; i < 10; i++){
     
    vector.push(Math.round(Math.random()*50));
     
     }

// console.log(vector)



var vector1 = [8, 27, 37, 34, 22, 19, 30, 26, 11, 24]
var vector2 = [32, 47, 35, 31, 23, 21, 27, 18, 47, 24]
var vector3 = [17, 27,  9, 38, 33, 34, 47, 47, 38, 20]
var vector4 = [31, 8, 11, 38,  4, 9, 2, 23, 25, 10]
var vector5 = [33, 28, 44, 40, 14, 18, 24, 35,  3, 13]
var vector6 = [31, 45, 17,  4, 25, 23, 14, 18, 43, 48]
var vector7 = [43, 21, 40, 12, 13, 27, 37, 14, 40, 49]
var vector8 = [3, 23, 10, 42, 7, 21, 44, 41, 28, ]
var vector9 = [24, 17, 18, 46, 19, 3, 50, 42,  8, 24]
var vector10 = [42, 30, 34, 33, 21, 25,  1, 48,  4,  5]



var vector11 = [17, 15, 47, 27, 39, 32, 2, 45, 30, 16]
var vector12 = [32, 47, 35, 31, 23, 21, 27, 18, 47, 24]
var vector13 = [5, 23, 32, 16, 3, 2, 18, 1, 30, 38]
var vector14 = [31, 8, 11, 38, 4, 9, 2, 23, 25, 10]
var vector15 = [33, 28, 44, 40, 14, 18, 24, 35, 3, 13]
var vector16 = [45, 1, 2, 20, 38, 30, 22, 5, 46, 25]
var vector17 = [16, 33, 49, 4, 23, 29, 25, 5, 45, 38]
var vector18 = [3, 23, 10, 42, 7, 21, 44, 41, 28, ]
var vector19 = [13, 43, 28, 29, 34, 44, 3, 19, 20, 2]
var vector20 = [42, 30, 34, 33, 21, 25, 1, 48, 4, 5]


var vectores1 = [vector1,vector2,vector3,vector4,vector5,vector6,vector7,vector8,vector9,vector10]
var vectores2 = [vector11,vector12,vector13,vector14,vector15,vector16,vector17,vector18,vector19,vector20]

var vectorTotal = [];

for (i = 0; i < vectores1.length; i++) {
    vectorTotal[i] = vectores1[i] + vectores2[i];
}
console.log(vectorTotal);









// var nuevoArray = new Array(10);
// for(var i=0; i<10; i++) {
//     nuevoArray[i] = new Array(10);
// }
// for (var i = 0; i<vectores1.length; i++) {
//     vectores1[i] = new Array();
// }
// var x = new Array(10);

// for (var i = 0; i < x.length; i++) {
//     for (var i = 0; i < 10; i++){
     
//          x.push(Math.round(Math.random()*50));
             
//               }
        
//   x[i] = new Array(3);
// }

// console.log(x);


