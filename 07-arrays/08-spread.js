let arr1 = [1, 2];
// Se crea un array 'arr1' con los elementos 1 y 2.

let arr2 = [5, 6];
// Se crea un array 'arr2' con los elementos 5 y 6.

let arr3 = [0, ...arr1, 3, 4, ...arr2, 7, 8];
// Se utiliza el operador de propagación (...) para combinar 'arr1' y 'arr2' en un nuevo array 'arr3'.
// El array resultante 'arr3' será [0, 1, 2, 3, 4, 5, 6, 7, 8].

let arr4 = [...arr3];
// Se crea una copia de 'arr3' en el nuevo array 'arr4' utilizando el operador de propagación (...).
// El array 'arr4' será [0, 1, 2, 3, 4, 5, 6, 7, 8].

arr3.pop();
// Se utiliza el método 'pop' para eliminar el último elemento de 'arr3'.
// Después de esta operación, 'arr3' será [0, 1, 2, 3, 4, 5, 6, 7].

console.log(arr3, arr4);
// Se imprimen los arrays 'arr3' y 'arr4' en la consola.
// 'arr3' será [0, 1, 2, 3, 4, 5, 6, 7].
// 'arr4' será [0, 1, 2, 3, 4, 5, 6, 7, 8].
