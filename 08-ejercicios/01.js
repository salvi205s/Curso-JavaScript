// Declaración de una función llamada paraAbsoluto que toma un arreglo como argumento
const paraAbsoluto = (arr) => {
    // Aquí debe implementarse la lógica para convertir los elementos del arreglo a sus valores absolutos

    return arr.map(num => Math.abs(num));
};

// Declaración de un arreglo llamado ns con valores numéricos
const ns = [-2, 3, 5, -15];

// Llamada a la función paraAbsoluto pasando el arreglo ns como argumento
const absolutos = paraAbsoluto(ns);

// Imprime el resultado de la función paraAbsoluto en la consola
console.log(absolutos); // Este código imprimirá 'undefined' porque la función paraAbsoluto no está implementada
