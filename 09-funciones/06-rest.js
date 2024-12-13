// Define una función flecha llamada suma que toma dos parámetros (a, b)
// y un número variable de parámetros adicionales (...rest)
const suma = (a, b, ...rest) => {
    // Imprime en la consola el array rest que contiene todos los parámetros adicionales
    console.log(rest);
}

// Llamada a la función suma con seis argumentos (comentada)
// Imprimiría [3, 4, 5, 6] en la consola
// suma(1, 2, 3, 4, 5, 6);

function logMsg(desc, ...msgs) {
    // Itera sobre cada mensaje en msgs y los imprime en la consola junto con desc
    for (let msg of msgs) {
        console.log(desc, msg);
    }
}

// Llamada a la función logMsg con cuatro argumentos (comentada)
// Imprimiría en la consola:
// Servidor: Error 1
// Servidor: Petición aceptada
// Servidor: socket activo
// logMsg('Servidor:', 'Error 1', 'Petición aceptada', 'socket activo');

let mensajes = ['Error 1', 'Petición aceptada', 'socket activo'];
// Llama a la función logMsg con el primer argumento 'Cliente móvil:',
// seguido de los elementos del array mensajes y un último argumento '¡Otro error!'
// Imprimiría en la consola:
// Cliente móvil: Error 1
// Cliente móvil: Petición aceptada
// Cliente móvil: socket activo
// Cliente móvil: ¡Otro error!
logMsg('Cliente móvil:', ...mensajes, '¡Otro error!');
