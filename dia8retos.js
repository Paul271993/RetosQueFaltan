// RETO 1

var x = ("Hola")
saludoArrow = (x) => {console.log(x)}
saludoArrow (x);
   if (x == null){
       console.log("No tiene parametro")
   }

// RETO 2

multiply = (x,y) => {return x*y}

// RETO 3   

let arr = [6,34,6,2,54];
    suma = 0;
    arr.forEach (function(numero){
        suma += numero;
    });
    console.log(suma);

    let array = [2,3,4];

esteArray = (arr) => {
    if(!arr) return 0;
    if (Array.isArray(arr)) {
        let x = 0;
        for (let i = 0; i < arr.length; i++) {
            x += arr[i];
        }
        return x;
    } else {
        return ("No has introducido un array como parámetro de entrada");
    }
}
console.log(esteArray(array));
console.log(esteArray());

//RETO 5

class Password {
    length;
    password;


    constructor(length, password){
        this.length = length;
        this.password = password;
        
    }

    
}

//RETO 5, Punto 2 => Generar una contraseña aleatoria:
function generatePass(length)
{
  var caracteres = "abcdefghijkmnpqrtuvwxyzABCDEFGHIJKLMNPQRTUVWXYZ12346789";
  var password = "";
  for (i=0; i<length; i++) password += caracteres.charAt(Math.floor(Math.random()*caracteres.length));
  return password;
}

console.log(generatePass(8))




