let numeroSecreto = 0
let numeroDeIntentos = 0;
let listaNumeroSorteados = [];
let numeroMaximo = 10;


function asignarTextoElemento(elemento,texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}
function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);

    console.log(numeroDeIntentos);
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento("p", `¡Felicidades! Adivinaste el número secreto en ${numeroDeIntentos} ${numeroDeIntentos === 1 ? "intento" : "intentos"}`);
        document.getElementById("reiniciar").removeAttribute("disabled");
   } else {
    if (numeroDeUsuario < numeroSecreto) {
       asignarTextoElemento("p", "El número secreto es mayor. Inténtalo de nuevo.");
   } else {
       asignarTextoElemento("p", "El número secreto es menor. Inténtalo de nuevo.");
   }
 numeroDeIntentos++;
 limpiarCaja();
}
return;
}

function limpiarCaja () {
let valorCaja = document.querySelector("#valorUsuario").value = ""; 
// Limpia el valor de la caja de texto
}

function generarNumeroSecreto() {
   let numeroGenerado = Math.floor(Math.random() * numeroMaximo + 1);
   if (listaNumeroSorteados.length == numeroMaximo) {
      asignarTextoElemento("p", "Todos los números han sido sorteados.");
   }
   // Si el numero generado esta incluido en la lista de numeros sorteados, vuelve a generar un numero
   if (listaNumeroSorteados.includes(numeroGenerado)) {
     return generarNumeroSecreto();
   } else {
       listaNumeroSorteados.push(numeroGenerado);
       return numeroGenerado;
    }
}


function condicionesIniciales() {
    asignarTextoElemento("h1", "Adivina el número secreto");
    asignarTextoElemento("p", `Adivina un número entre 1 y ${numeroMaximo}`);
      // Generar un nuevo numero secreto
    numeroSecreto = generarNumeroSecreto();
       // Reiniciar el contador de intentos
    numeroDeIntentos = 1;
}



function reiniciarJuego() {
    //limpiar la caja
    limpiarCaja();
    // indicar mensaje de intervalo de numeros
   condicionesIniciales();
    //Deshabilitar el boton reiniciar
    document.querySelector("#reiniciar").setAttribute("disabled", "true");




}

condicionesIniciales();



