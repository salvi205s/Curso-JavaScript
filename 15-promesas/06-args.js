// Definimos una promesa llamada promesa1 que toma un argumento 'user'
let promesa1 = user => new Promise((res, rej) => {
    // Resolvemos la promesa con el valor de 'user'
    res(user);
});

// Definimos una segunda promesa llamada promesa2 que toma un argumento 'user'
let promesa2 = user => new Promise((res, rej) => {
    // Resolvemos la promesa con el valor de 'user' concatenado con ', Hola Mundo'
    res(user + ', Hola Mundo');
});

// Llamamos a la primera promesa con el valor 'Chanchito feliz'
promesa1('Chanchito feliz')
    // Cuando promesa1 se resuelve, llamamos a promesa2 con el valor resuelto de promesa1
    .then(user => promesa2(user))
    // Cuando promesa2 se resuelve, imprimimos el valor resuelto en la consola
    .then(dato => console.log(dato));
