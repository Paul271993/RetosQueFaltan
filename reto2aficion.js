var persona1 =
{
    "nombre": "Carlos",
    "apellido": "Perez",
    "anyoNacimiento": 2003,
    "aficiones": ["comer","guitarra"],
    "dni": {"anyoExpedicion": 2015,
            "lugarNacimiento": "Madrid"
        },
    "colorPelo": "negro"
}

var persona2 =
{
    "nombre": "Juan",
    "apellido": "Patoso",
    "anyoNacimiento": 1973,
    "aficiones": ["trepar","nadar"],
    "dni": {"anyoExpedicion": 2002,
            "lugarNacimiento": "Bilbao"
        },
    "colorPelo": "castaño"
}

 var persona3 =
{
    "nombre": "Paul",
    "apellido": "Alambra",
    "anyoNacimiento": 2009,
    "aficiones": ["dormir","correr"],
    "dni": {"anyoExpedicion": 2019,
            "lugarNacimiento": "Caceres"
        },
    "colorPelo": "negro"
}

var persona4 =
{
    "nombre": "Armando",
    "apellido": "Rey",
    "anyoNacimiento": 1965,
    "aficiones": ["dormir","trepar"],
    "dni": {"anyoExpedicion": 2028,
            "lugarNacimiento": "Murcia"
        },
    "colorPelo": "negro"
}
var personas = [persona1, persona2, persona3, persona4]
for (var i = 0; i < personas.length; i++) {
(personas[i].aficiones.push("jugar a la play"));
}
console.log(personas);


