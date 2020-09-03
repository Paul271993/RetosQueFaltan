//EJEMPLO
// class Poligono {
//     constructor (alto, ancho) {
//         this.alto = alto;
//         this.ancho = ancho;
//     }
//     //Getter
//     get area () {
//         return this.calcArea();
//     }
//     //metodo
//     calcArea() {
//         return this.alto * this.ancho;
//     }
//     get X(){
//         return this.alto;
//     }
//     get Y(){
//         return this.ancho;
//     }
//     getX(){
//         return this.alto;
//     }
//     getY(){
//         return this.ancho;
//     }

// }
// var p1 = new Poligono(34,12);

// console.log(p1.alto);
// console.log(p1.X)
// console.log(p1.getX())

// console.log(p1.ancho);
// console.log(p1.Y)
// console.log(p1.getY())

// console.log(p1.calcArea())

class Persona {
    constructor(altura, pesoKg, colorOjos, anyoNacimiento, anyoActual, colorPelo) {
        this.altura = altura;
        this.pesoKg = pesoKg;
        this.colorOjos = colorOjos;
        this.anyoNacimiento = anyoNacimiento;
        this.anyoActual = anyoActual;
        this.colorPelo = colorPelo;
    
    }
    get imc(){
        return this.calcImc();
    }
    calcImc() {
        return this.pesoKg / (this.altura * this.altura);
    }
    get edad(){
        return this.calcEdad();
    }
    calcEdad(){
        return this.anyoActual - this.anyoNacimiento;
    }
    get atributos(){
        return this.mostrarTodos()
    }
    mostrarTodos(){
        
        
         }

}
var atributos = (altura, pesoKg, colorOjos, anyoNacimiento, anyoActual, colorPelo)
var persona1 = new Persona(180, 80, "azul", 1993, 2020, "negro")
console.log(persona1.calcImc());
console.log(persona1.calcEdad());
console.log(persona1.mostrarTodos());
// DIA 7 RETOS 1 - 2 - 3 - 4

