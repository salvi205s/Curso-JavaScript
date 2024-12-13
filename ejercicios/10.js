/**
 * Crear array de longitud N, y que sus elementos sean
 * numeros de 1 hasta N.
 */
let longitud = 7;

function crearArray(n) {

    if (n<=0) {
        return [];
    }
    
    let newArray=[];

    for (let i = 1; i <= longitud; i++) {
        newArray.push(i)
        
    }

    return newArray;
}

let resultado = crearArray(longitud);

console.log(resultado);
