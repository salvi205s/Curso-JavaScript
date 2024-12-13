let arr1 = [1, 2, { name: "chanchito" }];
// Se crea un array 'arr1' con números y un objeto.

let arr2 = [3, 4];
// Se crea un segundo array 'arr2' con dos números.

let combinados = arr1.concat(arr2);
// Utiliza el método concat para combinar 'arr1' y 'arr2' en un nuevo array 'combinados'.
// El array 'combinados' tendrá: [1, 2, { name: "chanchito" }, 3, 4]

console.log(combinados, arr1, arr2);
// Imprime los arrays 'combinados', 'arr1' y 'arr2' en la consola.

// let divididos = combinados.slice(1, 3);
// Usa el método slice para crear un nuevo array 'divididos' con elementos desde el índice 1 hasta el índice 3 (sin incluir).
// En este caso, 'divididos' tendrá: [2, { name: "chanchito" }]

// let divididos = combinados.slice(1);
// Usa el método slice para crear un nuevo array 'divididos' desde el índice 1 hasta el final del array 'combinados'.
// En este caso, 'divididos' tendrá: [2, { name: "chanchito" }, 3, 4]

let divididos = combinados.slice();
// Usa el método slice sin argumentos para copiar todo el array 'combinados' en 'divididos'.
// En este caso, 'divididos' será idéntico a 'combinados': [1, 2, { name: "chanchito" }, 3, 4]

console.log(divididos);
// Imprime el array 'divididos' en la consola.
