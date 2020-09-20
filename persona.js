

module.exports = class Persona {
     altura;
     pesoKg; 
     colorOjos; 
     anyoNacimiento; 
     colorPelo;

    constructor(altura, pesoKg, colorOjos, anyoNacimiento, colorPelo, aficiones) {
        this.altura = altura;
        this.pesoKg = pesoKg;
        this.colorOjos = colorOjos;
        this.anyoNacimiento = anyoNacimiento;
        this.colorPelo = colorPelo;
        this.aficiones = aficiones;
    
    }
    
    calcImc() {
        return this.pesoKg / (this.altura * this.altura);
        
    }
    
    calcEdad(){
        
        let anyoNacimiento = new Date("1993");
        let ahora = new Date();
        let edad = ahora.getFullYear() - anyoNacimiento.getFullYear();
        return edad
    }
    
    mostrarTodos(){
        return "Altura: " + this.altura + "\n" +
               "Peso: " + this.pesoKg + "\n" +
               "ColorOjos: " + this.colorOjos + "\n" +
               "Año Nacimiento: " + this.anyoNacimiento + "\n" +
               "Color de Pelo: " + this.colorPelo 
        
        
         }
         mostrarAficiones(){
            var aficiones = ["Nadar", "Beber hasta reventar", "Rajarse las venas", "Recitar de memoria la biblia"]
            return aficiones;
        }

        // 6: Añadir metodos getters y setters:

        get A(){
            return this.altura;
        }
        get B(){
            return this.pesoKg;
        }
        get C(){
            return this.colorOjos;
        }
        get D(){
            return this.anyoNacimiento;
        }
        get F(){
            return this.colorPelo;
        }
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
        set F(nuevaF){
            return this.colorPelo = nuevaF;
        }  

}

// var persona1 = new Persona(1.80, 80, "azul", 1993, "negro")
// console.log(persona1.calcImc());
// console.log(persona1.calcEdad());
// console.log(persona1.mostrarTodos());
// console.log(persona1.mostrarAficiones())


// // Getters
// console.log(persona1.A);
// console.log(persona1.B);
// console.log(persona1.C);
// console.log(persona1.D);
// console.log(persona1.E);
// console.log(persona1.F);

// // Setters
// persona1.altura = 220;
// console.log(persona1.altura);

// persona1.pesoKg = 50;
// console.log(persona1.pesoKg)

// persona1.colorOjos = "morado";
// console.log(persona1.colorOjos)

// persona1.anyoNacimiento = 1810;
// console.log(persona1.anyoNacimiento)

// persona1.anyoActual = 3012;
// console.log(persona1.anyoActual)

// persona1.colorPelo = "rosa";
// console.log(persona1.colorPelo)




// DIA 7 RETOS 1 - 2 - 3 - 4 - 5 - 6

