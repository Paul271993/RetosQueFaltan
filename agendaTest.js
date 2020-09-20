const Agenda = require("./agenda")
const Persona = require("./persona")

var persona1 = new Persona(180, 80, "azul", 1993, 2020, "negro")
var persona2 = new Persona(170, 50, "negro", 1989, 2020, "castaño")
var persona3 = new Persona(160, 67, "marron", 2000, 2020, "rojo")
var contactos = [persona1,persona2,persona3]

console.log(contactos)