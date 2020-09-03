module.export = class Persona {
    constructor(altura, pesoKg, colorOjos, anyoNacimiento, anyoActual, colorPelo) {
        this.altura = altura;
        this.pesoKg = pesoKg;
        this.colorOjos = colorOjos;
        this.anyoNacimiento = anyoNacimiento;
        this.anyoActual = anyoActual;
        this.colorPelo = colorPelo;
    }
    mostrarTodos() {
        var atributos = 
        "\n" + "altura:" +  "\n" + this.altura + 
        "\n" + "peso:" + "\n" + this.pesoKg + 
        "\n" + "colorOjos:" + "\n" + this.colorOjos + 
        "\n" + "anyoNacimiento:" + "\n" + this.anyoNacimiento + 
        "\n" + "anyoActual:" + "\n" + this.anyoActual + 
        "\n" + "colorPelo:" + "\n" + this.colorPelo;
        return atributos;
    }
}
var persona1 = new Persona(180, 80, "azul", 1993, 2020, "negro")
// console.log(persona1.mostrarTodos())
var persona2 = new Persona(170, 50, "negro", 1989, 2020, "castaño")
var persona3 = new Persona(160, 67, "marron", 2000, 2020, "rojo")


var arrayPersonas = [persona1,persona2,persona3];

class Agenda {
    constructor (arrayPersonas){
    this.arrayPersonas = arrayPersonas;
     } 

    }
function printPersonas(){
    for (let i=0; i<=this.arrayPersonas.length; i++)
    var persona1 = this.arrayPersonas[i].atributos;
}
console.log(arrayPersonas)




