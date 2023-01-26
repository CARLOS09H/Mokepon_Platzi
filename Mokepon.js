var ataqueJugador
var ataqueEnemigo

function iniciarJuego(){

//SELECCIONAR MASCOTA
    var botonMascotaJugador = document.getElementById("boton-mascota")
    botonMascotaJugador.addEventListener("click",seleccionarMascotaJugador)

//SELECIONAR ATAQUE
    var botonFuego = document.getElementById ("boton-Fuego")
    botonFuego.addEventListener("click", ataqueFuego)
    var botonAgua = document.getElementById ("boton-Agua")
    botonAgua.addEventListener("click", ataqueAgua)
    var botonTierra = document.getElementById ("boton-Tierra")
    botonTierra.addEventListener("click", ataqueTierra)
}

// SELECCIONAR MASCOTA JUGADOR
    function seleccionarMascotaJugador() {
        var inputHipodoge = document.getElementById("Hipodoge")
        var inputCapipepo = document.getElementById("Capipepo")
        var inputRatigueya = document.getElementById("Ratigueya")
        var spanMascotJugador = document.getElementById("mascota-jugador")

            if (inputHipodoge.checked) {
                spanMascotJugador.innerHTML = "Hipodoge"
            }
            else if (inputCapipepo.checked) {
                spanMascotJugador.innerHTML = "Capipepo"
            }
            else if (inputRatigueya.checked) {
                spanMascotJugador.innerHTML = "Ratigueya"
            }
            else {
                alert("NO PUEDES AVANZAR SIN SELECCIONAR UNA MASCOTA")
            }

        seleccionarMascotaEnemigo()
    }

// SELECCIONAR MASCOTA ENEMIGO
    function seleccionarMascotaEnemigo() {
        var mascotaAleatoria = aleatorio(1,3)
        var spanMascotEnemigo = document.getElementById ("mascota-enemigo")

            if (mascotaAleatori == 1) {
                spanMascotEnemigo.innerHTML = "Hipodoge"
            }
            else if (mascotaAleatori == 2) {
                spanMascotEnemigo.innerHTML = "Capipepo"
            }
            else {
                spanMascotEnemigo.innerHTML = "Ratigueya"
            }
    }

//ATAQUE JUGADOR
    function ataqueFuego () {
        ataqueJugador = "FUEGO"
        ataqueAleatorioEnemigo()
    }   
    function ataqueAgua () {
        ataqueJugador = "AGUA"
        ataqueAleatorioEnemigo()
    }
    function ataqueTierra () {
        ataqueJugador = "TIERRA"
        ataqueAleatorioEnemigo()
    }
    
    function ataqueAleatorioEnemigo() {
        var ataqueAleatorio = aleatorio(1,3)

        if (ataqueAleatorio == 1) {
            ataqueEnemigo = "FUEGO"
        } else if (ataqueAleatorio == 2) {
            ataqueEnemigo = "AGUA"
        } else {
            ataqueEnemigo = "TIERRA"
        }

        combate()
    
    }

function combate(){

    if(ataqueEnemigo == ataqueJugador){
        crearMensaje("EMPATE")
    }
    else if(ataqueJugador == "FUEGO" && ataqueEnemigo == "TIERRA"){
        crearMensaje("GANASTE")
    }
    else if(ataqueJugador == "AGUA" && ataqueEnemigo == "FUEGO"){
        crearMensaje("GANASTE")
    }
    else if(ataqueJugador == "TIERRA" && ataqueEnemigo == "AGUA"){
        crearMensaje("GANASTE")
    }
    else{
        crearMensaje("PERDISTE")
    }

}


    function crearMensaje(resultado) {
        var selectionMensajes = document.getElementById("Mensajes")

        var parrafo = document.createElement("p")
        parrafo.innerHTML = "Tu mascota atacó con " + ataqueJugador + ", la mascota del enemigo atacó con " + ataqueEnemigo + " - " + resultado
        
        selectionMensajes.appendChild(parrafo)
    }

    function aleatorio(min, max) {
        return Math.floor(Math.random() * (max - min +1) + min)
    }

window.addEventListener("load", iniciarJuego)
