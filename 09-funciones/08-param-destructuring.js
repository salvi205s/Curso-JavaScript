// Define una constante llamada 'config' que contiene un objeto con las propiedades 'url' y 'direccion'.
// const config = {
//     url: 'https://holamundo.io', // Propiedad 'url' con el valor 'https://holamundo.io'
//     direccion: {
//       calle: 'hola mundo', // Propiedad 'calle' con el valor 'hola mundo'
//       numero: 80, // Propiedad 'numero' con el valor 80
//     }
//   }
  
//   // Define una función llamada 'webserver' que toma un objeto con una propiedad 'url' como argumento.
//   function webserver({ url }) {
//     // La línea comentada a continuación desestructura la propiedad 'url' de 'config'.
//     // const { url } = config;
//     return url; // Retorna el valor de 'url'.
//   }
  
//   // Llama a la función 'webserver' pasando 'config' como argumento y
//   // imprime el resultado en la consola.
//   console.log(webserver(config)); // Debería imprimir 'https://holamundo.io'
  
//   ---------------------------------------------------------------

// Define una constante llamada 'config' que contiene un array con tres elementos.
const config2 = [
    'https://holamundo.io', // Primer elemento: una URL de la API.
    145,                    // Segundo elemento: un valor asociado (posiblemente un bucket ID).
    80,                     // Tercer elemento: el puerto para la conexión.
  ];
  
  // Define una función llamada 'webserver' que toma un array como argumento.
  function webserver([url, ...rest]) {
    // La función desestructura el array para obtener el primer elemento (url) 
    // y agrupa el resto de los elementos en un array llamado 'rest'.
    return url; // Retorna el valor de 'url'.
  }
  
  // Llama a la función 'webserver' pasando el array 'config' como argumento y 
  // imprime el valor retornado (la URL) en la consola.
  console.log(webserver(config2)); // Debería imprimir 'https://holamundo.io'

  