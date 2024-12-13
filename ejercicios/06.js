/**
 * Crear algoritmo que devuelva cantidad de números positivos en un array.
 */
let array = [2, 5, 7, 15, -5, -100, 55];

function cuantosPositivos(arr) {

    let newArr = arr.filter(num => num >= 0);

    return newArr.length;

}
let numeros = cuantosPositivos(array);
console.log(numeros);  
console.log(array);
