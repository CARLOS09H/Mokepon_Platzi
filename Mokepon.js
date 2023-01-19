function iniciarJuego(){
    var botonMascotaJugador = document.getElementById("boton-mascota")
    botonMascotaJugador.addEventListener("click",seleccionarMascotaJugador)

}

function seleccionarMascotaJugador() {
    var inputHipodoge = document.getElementById("Hipodoge")
    var inputCapipepo = document.getElementById("Capipepo")
    var inputRatigueya = document.getElementById("Ratigueya")

    if (inputHipodoge.checked) {
        alert("Seleccionaste a Hipodoge")
    }
    else if (inputCapipepo.checked) {
        alert("Seleccionaste a Capipepo")
    }
    else if (inputRatigueya.checked) {
        alert("Seleccionaste a Ratigueya")
    }
    else {
        alert("NO PUEDES AVANZAR SIN SELECCIONAR UNA MASCOTA")
    }
}

window.addEventListener("load", iniciarJuego)
