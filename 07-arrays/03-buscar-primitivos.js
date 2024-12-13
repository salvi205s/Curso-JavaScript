const letras = ['a', 'b', 1, 'c', 'd', 1];
// Se crea un array 'letras' con elementos que incluyen cadenas y números.

console.log(letras.indexOf('c'));
// Imprime el índice de la primera aparición del elemento 'c' en el array 'letras', que es 3.

console.log(letras.indexOf(1));
// Imprime el índice de la primera aparición del elemento 1 en el array 'letras', que es 2.

console.log(letras.lastIndexOf(1));
// Imprime el índice de la última aparición del elemento 1 en el array 'letras', que es 5.

console.log(letras.indexOf(1) !== -1);
// Verifica si el elemento 1 está en el array 'letras' comparando el resultado de 'indexOf' con -1. Devuelve 'true' si está presente.

console.log(letras.includes('d'));
// Verifica si el elemento 'd' está en el array 'letras'. Devuelve 'true' si está presente.
