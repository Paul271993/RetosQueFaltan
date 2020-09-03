var corredores = ["Juan", "Maria", "Antonio", "Carlos", "Ana", "Jose", "Pedro", "Andres"];

var text = "";
var suma = 0;

for (var index=0;index<5;index++)
{
    text += corredores[index] + "\n";
    suma = suma + index; 
    console.log(index);
}

console.log(text);
console.log(suma);