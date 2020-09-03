class Persona {
    constructor (altura, pesoKg, colorOjos, anyoNacimiento, anyoActual, colorPelo, aficiones) {
        this.altura = altura; //A
        this.pesoKg = pesoKg; //B
        this.colorOjos = colorOjos; //C
        this.anyoNacimiento = anyoNacimiento; //D
        this.anyoActual = anyoActual; //E
        this.colorPelo = colorPelo; //F
    }
    // get A(){
    //     return this.altura;
    // }
    // get B(){
    //     return this.pesoKg;
    // }
    // get C(){
    //     return this.colorOjos;
    // }
    // get D(){
    //     return this.anyoNacimiento;
    // }
    // get E(){
    //     return this.anyoActual;
    // }
    // get F(){
    //     return this.colorPelo;
    // }
    
// }
// var persona1 = new Persona(180, 80, "azul", 1993, 2020, "negro",)

// console.log(persona1.A);
// console.log(persona1.B);
// console.log(persona1.C);
// console.log(persona1.D);
// console.log(persona1.E);
// console.log(persona1.F);

set A(nuevaA){
    return this.altura = nuevaA;
}
set B(nuevaB){
    return this.pesoKg = nuevaB;
}
set C(nuevaC){
    return this.colorOjos = nuevaC;
}
set D(nuevaD){
    return this.anyoNacimiento = nuevaD;
}
set E(nuevaE){
    return this.anyoActual = nuevaE;
}
set F(nuevaF){
    return this.colorPelo = nuevaF;
}
}
var persona1 = new Persona(180, 80, "azul", 1993, 2020, "negro",)

persona1.altura = 220;
console.log(persona1.altura);

persona1.pesoKg = 50;
console.log(persona1.pesoKg)

persona1.colorOjos = "morado";
console.log(persona1.colorOjos)

persona1.anyoNacimiento = 1810;
console.log(persona1.anyoNacimiento)

persona1.anyoActual = 3012;
console.log(persona1.anyoActual)

persona1.colorPelo = "rosa";
console.log(persona1.colorPelo)
