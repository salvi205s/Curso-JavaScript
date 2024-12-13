const letras = ['a', 'b', 'c', 'd'];
// Se crea un array inicial llamado 'letras' con los elementos 'a', 'b', 'c' y 'd'.

// Final
// const final = letras.pop();
// Utiliza el método pop para eliminar el último elemento del array 'letras'.
// console.log(final, letras);
// Imprime el elemento eliminado y el array actualizado.

// Comienzo
// const comienzo = letras.shift();
// Utiliza el método shift para eliminar el primer elemento del array 'letras'.
// console.log(comienzo, letras);
// Imprime el elemento eliminado y el array actualizado.

// Entremedio
letras.splice(1, 2);
// Utiliza el método splice para eliminar dos elementos a partir de la posición 1 del array 'letras'.
// En este caso, elimina 'b' y 'c'.

console.log(letras);
// Imprime el array 'letras' actualizado en la consola.
