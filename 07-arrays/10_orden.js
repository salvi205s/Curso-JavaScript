
// Declaración de un arreglo de números
let numeros = [15, 10, -3];

// Ordena el arreglo de números en orden ascendente
numeros.sort();

// Invierte el orden del arreglo
numeros.reverse();

// Imprime el arreglo en la consola
// console.log(numeros); // Resultado: [15, 10, -3]


// Declaración de un arreglo de letras
let letras = ['z', 'a', 'd'];

// Ordena el arreglo de letras en orden alfabético
letras.sort();

// Imprime el arreglo ordenado en la consola
// console.log(letras);

let conMayusculas = ['Z', 'a', 'd'];

conMayusculas.sort((a, b) => {
    /**
     * a antes de b => -1
     * b antes de a => 1
     * si son iguales => 0
     */
    let alower = a.toLowerCase();
    let blower = b.toLowerCase();

    if (alower < blower) return -1;
    if (alower < blower) return 1;
    return 0;
});

// console.log(conMayusculas);

// Declaración de un arreglo de objetos 'usuarios'
let usuarios = [
    { edad: 15, nombre: 'Felipe' },
    { edad: 25, nombre: 'Nicolas' },
    { edad: 13, nombre: 'Poli' },
];

// Función de comparación personalizada para ordenar el arreglo por edad
usuarios.sort((a, b) => {
    return a.edad - b.edad; // Ordena de menor a mayor edad
});

console.log(usuarios); // Imprime el arreglo ordenado en la consola
