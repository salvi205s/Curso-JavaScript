// Declaración de un arreglo con diferentes tipos de elementos
const miArray = [
    "Hola",   // Cadena de texto
    12,       // Número
    "Mundo",  // Cadena de texto
    {},       // Objeto vacío
    { id: 15 }, // Objeto con una propiedad id
    ['lala'],  // Arreglo con un solo elemento
];

function dividePorTipo(arr) {

    return {
        numeros: arr.filter(n => typeof n == "number"),
        strings: arr.filter(s => typeof s == "string"),
        objetos: arr.filter(o => typeof o == "object")
    }

    // return arr.reduce((acc, el) => {
    /*
        Dentro de la función de reducción, se determina el tipo de 
        dato del elemento actual el usando typeof. Por ejemplo, si el es un número, 
        tipo será 'number'.
     */

    // const tipo = typeof el;

    /* 
        Aquí se asegura que el acumulador acc tenga una propiedad para el tipo 
        de dato actual. Si acc[tipo] no existe, se inicializa como un arreglo vacío [].
    */
    //     acc[tipo] = acc[tipo] || [];
    //     acc[tipo].push(el)
    //     return acc;
    // }, {})
}


// Llamada a la función dividePorTipo pasando miArray como argumento
const nuevoArray = dividePorTipo(miArray);

// Imprime el resultado de la función dividePorTipo en la consola
console.log(nuevoArray);
