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