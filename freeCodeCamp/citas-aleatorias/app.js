const btnElem = document.getElementById('boton-cambiar-cita');
const citaElem = document.getElementById('cita');
const autorElem = document.getElementById('autor');

function numAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}

function cambiarCita() {
    let indiceAleatorio = numAleatorio(0, citas.length);

    citaElem.innerText = `"${citas[indiceAleatorio].texto}"`
    autorElem.innerText = citas[indiceAleatorio].autor
}
cambiarCita();

btnElem.addEventListener('click', cambiarCita)