// Definimos una función llamada "callback" que acepta una función y un número variable de argumentos
function callback(fn, ...rest) {
    fn(...rest)
}

// Definimos una función llamada "log" que acepta un número variable de argumentos
function log(...args) {
    // Imprimimos los argumentos en la consola
    console.log(args);
}

// Llamamos a la función "callback" pasando la función "log" y los números 1, 2, 3 y 4 como argumentos
callback(log, 1, 2, 3, 4);
