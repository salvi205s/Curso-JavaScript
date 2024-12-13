function sumaTodo(arr) {
    // Verifica si el argumento es un array
    if (!Array.isArray(arr)) {
        throw new Error('El parámetro no es un array'); // Lanza un error si no es un array
    }

    // Usa el método reduce para sumar todos los elementos del array
    return arr.reduce((acc, el) => {
        // Verifica si cada elemento es un número y no es NaN
        if (typeof el !== 'number' || Number.isNaN(el)) {
            throw new Error(`Elemento ${el} no es número`); // Lanza un error si el elemento no es un número o es NaN
        }
        return acc + el; // Suma el elemento al acumulador
    });
}

// Primero, imprime el resultado de la función sumaTodo con un array válido de números
// console.log(sumaTodo([1, 2, 3, 4]));

// Usa un bloque try-catch para manejar errores durante la ejecución
try {
    // Intenta imprimir el resultado de sumaTodo con un array que contiene NaN y una cadena
    console.log(sumaTodo([1, 2, NaN, 'hola mundo']));
} catch (e) {
    // Si ocurre un error, lo captura y lo imprime
    console.log(e.message);
}

// Este mensaje se imprimirá después de la ejecución del bloque try-catch
console.log('despues del try catch');
