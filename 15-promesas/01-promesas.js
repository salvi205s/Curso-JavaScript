// Lo resuelve en el momento
// // let promesa = new Promise((resolve, reject) => {
//     // La función que se pasa al constructor de Promise recibe dos argumentos: resolve y reject.
//     // En este caso, se llama a resolve con el valor 42, lo que significa que la promesa se resuelve exitosamente con ese valor.
//     resolve(42);
// });

// tarda 10 segundos se queda en pending
// let promesa = new Promise((resolve, reject) => {
//     // La función setTimeout se usa para simular una operación asincrónica
//     setTimeout(() => resolve(42), 10000); // Después de 10 segundos, la promesa se resuelve con el valor 42
// });

// Se crea una nueva promesa que toma dos funciones: resolve y reject
// let promesa = new Promise((resolve, reject) => {
//     // Se usa setTimeout para simular una operación asincrónica que falla después de 1 segundo
//     setTimeout(() => reject('Error de carga'), 1000);
// });

// // Se define lo que debe ocurrir cuando la promesa se resuelve o se rechaza
// promesa.then(
//     // Si la promesa se resuelve, se ejecuta esta función
//     valor => console.log(valor),
//     // Si la promesa se rechaza, se ejecuta esta función
//     e => console.log('error', e),
// );

let promesa = new Promise((resolve, reject) => {
    // La función setTimeout se usa para simular una operación asincrónica
    setTimeout(() => resolve('Hola Mundo'), 1000); // Después de 1 segundo, la promesa se resuelve con el valor 'Hola Mundo'
});

promesa.then(
    valor => console.log(valor), // Si la promesa se resuelve, se imprime el valor en la consola
    e => console.log('error', e) // Si la promesa se rechaza, se imprime el error en la consola
);
