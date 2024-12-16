let promesa1 = new Promise((res, rej) => {
    // Crear una nueva promesa y resolverla inmediatamente con el valor 12
    res(12);
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
}).then(valor2 => {
    // Al resolver promesa2, devolver el valor resuelto
    return valor2;
});

/* 
Explicación:
Creación de promesa1:

let promesa1 = new Promise((res, rej) => { res(12); });: 
Crea una nueva promesa llamada promesa1 que se resuelve inmediatamente 
con el valor 12. La función pasada al constructor de Promise recibe dos 
argumentos, res (resolver) y rej (rechazar).

Creación de promesa2:

let promesa2 = new Promise((res, rej) => { res(15); });: 
Crea una nueva promesa llamada promesa2 que se resuelve inmediatamente 
con el valor 15. Similar a promesa1, la función pasada al constructor de 
Promise recibe res y rej.

Encadenamiento de Promesas:

promesa1.then(valor => { if (valor > 10) { return promesa2; } }).then(valor2 => { return valor2; });: 
Encadena la resolución de promesa1 con una serie de acciones:

Primera then:

valor => { if (valor > 10) { return promesa2; } }: Cuando promesa1 se resuelve, 
comprueba si el valor es mayor que 10. Si es así, devuelve promesa2.

Segunda then:

valor2 => { return valor2; }: Cuando promesa2 se resuelve, devuelve el valor resuelto de promesa2.

Este código demuestra cómo encadenar promesas y realizar acciones basadas 
en los valores resueltos de promesas previas. Al resolver promesa1, 
se comprueba si el valor es mayor que 10 y, de ser así, se devuelve promesa2,
cuyo valor resuelto se maneja en el siguiente then.
*/