persona1 = {
    nombre: "Felipe",
    apellido: "Martinez",
    anyo_de_nacimiento: 1987,
    aficiones: ["futbol", "leer"],
    dni: {
      anyo_de_expedicion: 2019,
      lugar_de_nacimiento: "Colombia",
      color_de_pelo: "castano",
    },
  };
  persona2 = {
    nombre: "Andres",
    apellido: "Guzman",
    anyo_de_nacimiento: 2006,
    aficiones: ["saltar", "dormir"],
    dni: {
      anyo_de_expedicion: 2008,
      lugar_de_nacimiento: "Espanya",
      color_de_pelo: "negro",
    },
  };
  persona3 = {
    nombre: "Meri",
    apellido: "Gonzalez",
    anyo_de_nacimiento: 2002,
    aficiones: ["comer", "saltar"],
    dni: {
      anyo_de_expedicion: 2010,
      lugar_de_nacimiento: "Italia",
      color_de_pelo: "negro",
    },
  };
  persona4 = {
    nombre: "Javier",
    apellido: "Avila",
    anyo_de_nacimiento: 1989,
    aficiones: ["futbol", "comer"],
    dni: {
      anyo_de_expedicion: 2001,
      lugar_de_nacimiento: "Londres",
      color_de_pelo: "castano",
    },
  };
  var totalPersonas = [persona1, persona2, persona3, persona4];
  // console.log(totalPersonas);
  if (totalPersonas[0].dni.color_de_pelo == "castano") {
    console.log(totalPersonas[0].nombre);
  }
  if (totalPersonas[1].dni.color_de_pelo == "castano") {
    console.log(totalPersonas[1].nombre);
  }
  if (totalPersonas[2].dni.color_de_pelo == "castano") {
    console.log(totalPersonas[2].nombre);
  }
  if (totalPersonas[3].dni.color_de_pelo == "castano") {
    console.log(totalPersonas[3].nombre);
  }
  total = 2020 - totalPersonas[0].anyo_de_nacimiento;
  total1 = 2020 - totalPersonas[1].anyo_de_nacimiento;
  total2 = 2020 - totalPersonas[2].anyo_de_nacimiento;
  total3 = 2020 - totalPersonas[3].anyo_de_nacimiento;
  if (total > 30) {
    console.log(total);
  }
  if (total1 > 30) {
    console.log(total1);
  }
  if (total2 > 30) {
    console.log(total1);
  }
  if (total3 > 30) {
    console.log(total3);
  }
  if (
    totalPersonas[0].dni.color_de_pelo == "negro" &&
    (2020 - totalPersonas[0].dni.anyo_de_expedicion >= 5 ||
      2020 - totalPersonas[0].anyo_de_nacimiento < 18) &&
    (totalPersonas[0].aficiones.includes("comer") ||
      totalPersonas[0].aficiones.includes("dormir"))
  ) {
    console.log(totalPersonas[0].dni.lugar_de_nacimiento);
  }
  if (
    totalPersonas[1].dni.color_de_pelo == "negro" &&
    (2020 - totalPersonas[1].dni.anyo_de_expedicion >= 5 ||
      2020 - totalPersonas[0].anyo_de_nacimiento < 18) &&
    (totalPersonas[1].aficiones.includes("comer") ||
      totalPersonas[1].aficiones.includes("dormir"))
  ) {
    console.log(totalPersonas[1].dni.lugar_de_nacimiento);
  }
  if (
    totalPersonas[2].dni.color_de_pelo == "negro" &&
    (2020 - totalPersonas[2].dni.anyo_de_expedicion >= 5 ||
      2020 - totalPersonas[0].anyo_de_nacimiento < 18) &&
    (totalPersonas[2].aficiones.includes("comer") ||
      totalPersonas[2].aficiones.includes("dormir"))
  ) {
    console.log(totalPersonas[2].dni.lugar_de_nacimiento);
  }
  if (
    totalPersonas[3].dni.color_de_pelo == "negro" &&
    (2020 - totalPersonas[3].dni.anyo_de_expedicion >= 5 ||
      2020 - totalPersonas[0].anyo_de_nacimiento < 18) &&
    (totalPersonas[3].aficiones.includes("comer") ||
      totalPersonas[2].aficiones.includes("dormir"))
  ) {
    console.log(totalPersonas[3].dni.lugar_de_nacimiento);
  }
  