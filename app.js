
let numeroSecreto = 0;
let intentos =0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;


console.log(numeroSecreto);

function verificarIntento (){
   let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
   console.log (intentos);
   console.log (typeof(numeroDeUsuario));
   console.log (numeroSecreto);
   console.log (typeof(numeroSecreto));
   console.log (numeroDeUsuario);
   console.log (numeroSecreto === numeroDeUsuario); 
   if (numeroDeUsuario === numeroSecreto){
    asignarTextoElemento ("p",  `Acertaste el número en ${(intentos)} ${(intentos ===1) ? "vez" : "veces"} `);
    document.getElementById ("reiniciar").removeAttribute ("disabled");
   } else {
    //el ususario no acerto//
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento ("p", "El número es menor");   
    }       else { asignarTextoElemento ("p", "el número es mayor");

    }
    intentos++;
    limpiarCaja ();
   }
   return;
}
function limpiarCaja (){
    document.querySelector("#valorUsuario").value = '';
}

function asignarTextoElemento(elemento, texto){
    let elementoHTML= document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //si ya sorteamos todos los números//

    if (listaNumerosSorteados.length == numeroMaximo) {
        //mostrar mensaje //
        asignarTextoElemento ("p", "Haz teminado el juego");

    } else {
        //sie l npumero generado esta incluiso en la lsita 
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto ();

        }  else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado; 
        }
    }
}
function mensajesIniciales () {
    asignarTextoElemento("h1", "Juego número secreto!");
    asignarTextoElemento("p", `Escoge un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos =1;
}

function reiniciarJuego () {
    //limpiar la caja//
    limpiarCaja ();
    //inidicar número de intervalos de números//
    //generar número aleatorio//
    // indicar el número de intentos//
    mensajesIniciales ();
    //desabilitar nuevamente el botón de Nuevo juego//
    document.querySelector("#reiniciar").setAttribute("disabled","true");
  
    

}
mensajesIniciales ();
