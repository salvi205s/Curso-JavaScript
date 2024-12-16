// Crear una promesa que se resuelve con el valor 3
const p1 = Promise.reject(3);

// Asignar el valor 42 a p2
const p2 = 42;

// Crear una promesa que se resuelve después de 1 segundo con el valor 'foo'
const p3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, 'foo');
});

// Promise.all([p1, p2, p3])
//   .then(valores => console.log('all', valores)) // Cuando todas las promesas se resuelven, se imprime 'all' seguido de los valores resueltos
//   .catch(e => console.log('error en all', e)); // Si alguna promesa es rechazada, se captura el error y se imprime 'error en all' seguido del error

// Promise.race toma un array de promesas y se resuelve o rechaza tan pronto como una de las promesas en el array se resuelve o rechaza.
// Promise.race([p1, p2, p3])
//   // Si una de las promesas se resuelve primero, se ejecuta esta función.
//   .then(valor => console.log('race', valor))
//   // Si una de las promesas se rechaza primero, se ejecuta esta función.
//   .catch(e => console.log('error en race', e));

// Promise.any([p1, p2, p3])
//   // Cuando cualquiera de las promesas en el array se resuelve, se ejecuta esta función
//   .then(valor => console.log({ valor })) // Imprime el valor resuelto en la consola dentro de un objeto
//   // Si todas las promesas en el array se rechazan, se ejecuta esta función
//   .catch(e => console.log({ e })); // Imprime el error en la consola dentro de un objeto

Promise.allSettled([p1, p2, p3])
  // Cuando todas las promesas se han cumplido o rechazado, se ejecuta esta función
  .then(valores => console.log({ valores })) // Imprime los resultados de todas las promesas en la consola dentro de un objeto
  // Si ocurre algún error en la evaluación de las promesas, se ejecuta esta función
  .catch(e => console.log({ e })); // Imprime el error en la consola dentro de un objeto
