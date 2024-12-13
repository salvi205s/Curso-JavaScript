const letras = ['a', 'b'];
// Se crea un array inicial llamado 'letras' con los elementos 'a' y 'b'.

// agregar al final del array
letras.push('c', 'd');
// Utiliza el método push para agregar los elementos 'c' y 'd' al final del array 'letras'.

// agregar al comienzo
letras.unshift('y', 'z');
// Utiliza el método unshift para agregar los elementos 'y' y 'z' al comienzo del array 'letras'.

// agregar en una posición específica del array
letras.splice(2, 0, 1, 2);
// Utiliza el método splice para insertar los elementos 1 y 2 en la posición 2 del array 'letras'.
// El primer argumento (2) indica la posición de inicio, el segundo argumento (0) indica que no se deben eliminar elementos.

console.log(letras);
// Imprime el array 'letras' actualizado en la consola.
