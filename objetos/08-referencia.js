let a = { prop: 1 };

function suma(n) {
    n.prop++;
}


suma(a);
console.log(a);

// Primitivos -> se copian
// Referencia -> se referencian
//     - objetos
//     - array
//     - funciones
