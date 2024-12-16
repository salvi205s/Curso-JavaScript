let promesa1 = new Promise((res, rej) => {
    // Crear una nueva promesa y resolverla inmediatamente con el valor 12
    res(5);
});

let promesa2 = new Promise((res, rej) => {
    // Crear una nueva promesa y resolverla inmediatamente con el valor 15
    res(15);
});

promesa1.then(valor => {
    // Al resolver promesa1, comprobar si el valor es mayor que 10
    if (valor > 10) {
        return promesa2; // Si es mayor que 10, devolver promesa2
    }

    // return Promise.reject('Valor menor que 10');
    return Promise.resolve(555);
}).then(valor2 => {
    // Se ejecuta después de que se resuelve la promesa2
    console.log('segunda promesa', valor2); // Imprime 'segunda promesa' en la consola
    return valor2; // Retorna el valor de la segunda promesa
})
.catch(e => console.log(e)) // Maneja cualquier error que ocurra en la cadena de promesas
.finally(() => console.log('acá estamos en finally!')); // Se ejecuta independientemente de la resolución o rechazo de la promesa
