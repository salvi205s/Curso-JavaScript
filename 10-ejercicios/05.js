// Definición de la función 'ordenar' que toma dos parámetros: 'texto' y 'fn'
function ordenar(texto, fn) {
    // Convierte el texto a minúsculas, lo divide en caracteres, filtra los espacios, ordena los caracteres y los une en una cadena
    let resultado = texto.toLowerCase() // Convierte el texto a minúsculas
        .split('') // Divide el texto en un array de caracteres
        .filter((letra) => letra !== ' ') // Filtra los espacios
        .sort() // Ordena los caracteres alfabéticamente
        .join(''); // Une los caracteres en una cadena

    // Llama a la función 'fn' con el resultado
    fn(resultado);
}

// Llama a la función 'ordenar' con el texto 'hola mundo' y la función 'console.log' como argumentos
ordenar('hola mundo', console.log);
