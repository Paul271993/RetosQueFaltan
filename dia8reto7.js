var Persona = require("./dia8reto5");

class Agenda {
    constructor (color, contactos, gente){
    this.color = color;
    this.contactos = contactos;
    this.gente = gente;
    }
    printPersonas(){
        for (var i=0;i<=this.gente.length;i++){
            var usuarios = this.gente[i].mostrarTodos();
            console.log(this.gente[i].mostrarTodos());

        }
        return usuarios;
    }


}
var persona1 = new Persona(180, 80, "azul", 1993, 2020, "negro")
var persona2 = new Persona(170, 50, "negro", 1989, 2020, "castaño")
var persona3 = new Persona(160, 67, "marron", 2000, 2020, "rojo")
var arrayPersonas = [persona1,persona2,persona3]
var agenda1 = new Agenda ("negro", "Jose", arrayPersonas);

console.log(agenda1.printPersonas());