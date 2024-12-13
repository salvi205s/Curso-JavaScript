/**
 * Crear algoritmo que devuelva número menor y mayor de un array.
 */
let array = [2, 5, 7, 15, -5, -100, 55];

function getMenorMayor(arr) {
    let menor = Math.min(...arr); // Encuentra el número menor 
    let mayor = Math.max(...arr); // Encuentra el número mayor 
    return [ menor, mayor ];
}
    let numeros = getMenorMayor(array);
    console.log(numeros);  // Imprime: { menor: -100, mayor: 55 }
