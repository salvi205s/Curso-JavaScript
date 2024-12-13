/**
 * {
 *   url: ...           // URL de la API
 *   bucket: amazon S3  // Servicio de almacenamiento en la nube
 *   port: 80           // Puerto de la conexión
 * }
 */

// Definición de una función llamada configurarAPI que toma un parámetro url
// function configurarAPI(url) {
//     // Retorna el url proporcionado dentro de una plantilla de cadena (template string)
//     return `${url}`;
//   }

// Define una función llamada configurarAPI con un parámetro opcional url 
// que tiene un valor predeterminado de 'https://holamundo.io'
// function configurarAPI(url = 'https://holamundo.io') {
//     // Retorna el URL en forma de cadena
//     return `${url}`;
// }

// Define una función llamada configurarAPI con tres parámetros: url, bucket y port.
// bucket y port tienen valores predeterminados de 145 y 80, respectivamente.
function configurarAPI(url, bucket = 145, port = 80) {
    // Retorna una cadena formateada que incluye los valores de url, bucket y port.
    return `${url}/${bucket}:${port}`;
}

// Llama a la función configurarAPI sin argumentos y esta llamada está comentada, 
// por lo que no se ejecutará.
// console.log(configurarAPI());

// Llama a la función configurarAPI sin argumentos y
// imprime 'https://holamundo.io' en la consola
// console.log(configurarAPI());

// Llama a la función configurarAPI con el argumento 'https://chaomundo.io'
// e imprime 'https://chaomundo.io' en la consola
// console.log(configurarAPI('https://chaomundo.io'));

// Llama a la función configurarAPI con el argumento 'https://holamundo.io'
// y imprime 'https://holamundo.io/145:80' en la consola.
console.log(configurarAPI('https://holamundo.io'));