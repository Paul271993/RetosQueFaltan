const Persona = require("./persona")

var persona1 = new Persona(1.80, 80, "azul", 1993, "negro")
console.log(persona1.calcImc());
console.log(persona1.calcEdad());
console.log(persona1.mostrarTodos());
console.log(persona1.mostrarAficiones())


// Getters
console.log(persona1.A);
console.log(persona1.B);
console.log(persona1.C);
console.log(persona1.D);
console.log(persona1.E);
console.log(persona1.F);

// Setters
persona1.altura = 220;
console.log(persona1.altura);

persona1.pesoKg = 50;
console.log(persona1.pesoKg)

persona1.colorOjos = "morado";
console.log(persona1.colorOjos)

persona1.anyoNacimiento = 1810;
console.log(persona1.anyoNacimiento)

// persona1.anyoActual = 3012;
// console.log(persona1.anyoActual)

persona1.colorPelo = "rosa";
console.log(persona1.colorPelo)