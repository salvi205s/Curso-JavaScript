// Definimos una promesa llamada promesa1 que toma un argumento 'param1'
// let promesa1 = param1 => new Promise((res, rej) => {
//     // Calculamos algo...
//     const b = 'Hola Mundo'; // Definimos una variable 'b' con el valor 'Hola Mundo'
//     res(b); // Resolvemos la promesa con el valor de 'b'
// });

// // Definimos una segunda promesa llamada promesa2 que toma un argumento 'param2'
// let promesa2 = param2 => new Promise((res, rej) => {
//     // Calculamos algo...
//     res(param2 + ', Hola Mundo'); // Resolvemos la promesa con el valor de 'param2' concatenado con ', Hola Mundo'
// });

// let promesa3 = (param1, param2) => new Promise((res, rej) => {
//     // Se crea una nueva promesa que toma dos parámetros: param1 y param2
//     // Se resuelve la promesa inmediatamente con el valor 'Chanchito feliz'
//     res('Chanchito feliz');
// });


// // Esto es una mala practica
// // Utilizamos Promise.resolve para crear una promesa que se resuelve inmediatamente con el valor 'Primer valor'
// Promise.resolve('Primer valor')
//   .then(a => {
//     // Llama a la promesa1 con el valor 'Primer valor' y espera su resolución.
//     return promesa1(a)
//       .then(b => {
//         // Una vez que la promesa1 se resuelve, llama a promesa2 con el valor resuelto de promesa1.
//         return promesa2(b)
//           .then(() => {
//             // Cuando la promesa2 se resuelve, llama a promesa3 con los valores de la promesa inicial y la promesa1.
//             return promesa3(a, b);
//           });
//       });
//   });

//   --------------------------------------------------------------
// Este es el modo corrento pero tedioso
// let promesa1 = param1 => new Promise((res, rej) => {
//     // Calculamos algo...
//     const b = 'Hola Mundo'; // Definimos una variable 'b' con el valor 'Hola Mundo'
//     res({ contexto: b }); // Resolvemos la promesa con un objeto que contiene 'contexto' con el valor de 'b'
// });

// let promesa2 = ({ contexto: param2 }) => new Promise((res, rej) => {
//     // calculamos algo...
//     // Resolvemos la promesa con un objeto que contiene el contexto con propiedades 'a' y 'b'
//     res({ contexto: { b: param2 + ', Hola Mundo', a: param2 } });
// });

// let promesa3 = ({ contexto: { a, b } }) => new Promise((res, rej) => {
//     // Calculamos algo más aquí...
//     // Resolvemos la promesa con el valor 'Chanchito feliz'
//     res('Chanchito feliz');
// });

// Promise.resolve('Primer valor')
//     .then(a => promesa1(a))
//     // Llamamos a promesa2 con el valor resuelto de promesa1
//     .then(b => promesa2(b))
//     // Llamamos a promesa3 con el contexto resuelto de promesa2
//     .then(contexto => promesa3(contexto))

// ------------------------------------------------------------------

// Definimos una promesa llamada promesa1 que toma un argumento 'param1'
let promesa1 = param1 => new Promise((res, rej) => {
    // Calculamos algo...
    const b = 'Hola Mundo'; // Definimos una variable 'b' con el valor 'Hola Mundo'
    res(b); // Resolvemos la promesa con el valor de 'b'
});

// Definimos una segunda promesa llamada promesa2 que toma un argumento 'param2'
let promesa2 = param2 => new Promise((res, rej) => {
    // Calculamos algo...
    res(param2 + ', Hola Mundo'); // Resolvemos la promesa con el valor de 'param2' concatenado con ', Hola Mundo'
});

let promesa3 = (param1, param2) => new Promise((res, rej) => {
    // Se crea una nueva promesa que toma dos parámetros: param1 y param2
    // Se resuelve la promesa inmediatamente con el valor 'Chanchito feliz'
    res('Chanchito feliz');
});


async function main() {
    try {
        // Resolver una promesa inmediatamente con el valor 'Primer valor'
        const a = await Promise.resolve('Primer valor');

        // Esperar el resultado de promesa1(a)
        const b = await promesa1(a);

        // Esperar el resultado de promesa2(b) sin almacenar el resultado
        const _ = await promesa2(b);

       // Esperar el resultado de promesa3(a, b) 
       const c = await promesa3(a, b); 
       // Imprimir el resultado de promesa3 
       console.log(a,b,c);
    } catch (error) {
        // Registrar cualquier error que ocurra durante el bloque try
        console.log({ error });
    }
}

// Llamar a la función main
main();
