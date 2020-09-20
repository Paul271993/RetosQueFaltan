const Persona = require("./persona")

module.exports = class Agenda {

    contactos;
    
    constructor (contactos){
        this.contactos = contactos;
   
    }
    printPersonas(){

        for (var i=0;i<=this.contactos.length;i++){
            var contactos = this.contactos[i].mostrarTodos();

        }
        return contactos;
    }


}
// var persona1 = new Persona(180, 80, "azul", 1993, 2020, "negro")
// var persona2 = new Persona(170, 50, "negro", 1989, 2020, "castaño")
// var persona3 = new Persona(160, 67, "marron", 2000, 2020, "rojo")
// var contactos = [persona1,persona2,persona3]

// console.log(contactos)
