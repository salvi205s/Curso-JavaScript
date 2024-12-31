
// seleccionar botones
const cronometro = document.getElementById('cronometro');
const botonInit = document.getElementById('boton-inicio-pausa');
const botonReiniciar = document.getElementById('boton-reiniciar');

// variables a cero
let [horas, minutos, segundos] = [0,0,0];
// let horas = 0, minutos = 0, segundos = 0;


// variable interavlo de tiempo, estados
let intervaloDeTiempo;
let estadoCronometro = "pausado";

function actualizarCronometro() {
  segundos++;

  if (segundos / 60 === 1) {
    segundos = 0;
    minutos++;
    if (minutos / 60 === 1) {
      minutos = 0;
      horas++;
    }
  }

  const segundosConFormato = asignarFormato(segundos);
  const minutosConFormato = asignarFormato(minutos);
  const horasConFormato = asignarFormato(horas);

  cronometro.innerText = `${horasConFormato}: ${minutosConFormato}:${segundosConFormato}`
}


function asignarFormato(unidadDeTiempo) {
  return unidadDeTiempo < 10 ? "0" + unidadDeTiempo : unidadDeTiempo;
}

function actualizarClase(remove, add, estado) {
  botonInit.classList.remove(remove);
  botonInit.classList.add(add);
  estadoCronometro = estado;
}

botonInit.addEventListener('click', () => {
  console.log("click");

  if (estadoCronometro === "pausado") {
    intervaloDeTiempo = setInterval(actualizarCronometro, 1000);
   actualizarClase("iniciar", "pausar", "andando")
  } else {
    clearInterval(intervaloDeTiempo);
    actualizarClase("pausar", "iniciar", "pausado")
  }
})

botonReiniciar.addEventListener('click', () => {
  window.clearInterval(intervaloDeTiempo);
  horas=0;
  minutos=0;
  segundos=0;

  cronometro.innerText='00:00:00';

  botonInit.classList.remove('pausar');
  botonInit.classList.add('iniciar');
  estadoCronometro = "pausado";
})