// Declaración de un arreglo con diferentes tipos de elementos
const miArray = [
    "Hola",   // Cadena de texto
    12,       // Número
    true,
    "Mundo",  // Cadena de texto
    {},       // Objeto vacío
    { id: 15 }, // Objeto con una propiedad id
    ['lala'],  // Arreglo con un solo elemento
];

function dividePorTipo(arr) {

    return arr.reduce((acc, el) => {
        let tipo = typeof el;
        if (!acc[tipo]) acc[tipo] = []
        acc[tipo].push(el)
        return acc
    }, {});


}


// Llamada a la función dividePorTipo pasando miArray como argumento
const nuevoArray = dividePorTipo(miArray);

// Imprime el resultado de la función dividePorTipo en la consola
console.log(nuevoArray);
