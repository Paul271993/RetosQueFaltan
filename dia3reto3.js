var platosMenu = 3;
var Dj = true;
var horasBarraLibre = 2;
var coctelDeBienvenida = false;
if (platosMenu == 3 && (Dj == true && horasBarraLibre == 2 || (coctelDeBienvenida == true && platosMenu == 2 && (horasBarraLibre == 1)))) {
    console.log("Haga la reserva!");
} else {
    console.log("Lo sentimos, este restaurante no es para usted.");

}