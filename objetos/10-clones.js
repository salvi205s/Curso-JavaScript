let punto = {
    // Se define un objeto literal 'punto' con dos propiedades: 'x' y 'y'
    x: 10,
    y: 15,
};

// Se crea una referencia al objeto 'punto' y se le asignan nuevas propiedades 'z' y 'x'.
// La propiedad 'x' existente en 'punto' se sobrescribe con el valor 1.
let referencia = Object.assign(punto, { z: 20, x: 1 });

// Se crea un nuevo objeto vacío y se le asignan las propiedades del objeto 'punto'.
// Luego, se le asignan nuevas propiedades 'z' y 'x', sobrescribiendo la propiedad 'x' existente.
let clonePunto = Object.assign({}, punto, { z: 20, x: 1 });

// Se comenta la línea que imprime 'punto' y 'clonePunto'.
// console.log(punto, clonePunto);

// Se imprime el objeto 'referencia' en la consola.
console.log(referencia);

let copiaPunto = Object.assign({}, punto); 
// Usa Object.assign para copiar todas las propiedades de 'punto' a un nuevo objeto vacío.
// Resultado: copiaPunto tendrá las mismas propiedades y valores que punto.

console.log(copiaPunto, punto); 
// Imprime en la consola los objetos 'copiaPunto' y 'punto' para compararlos.

// LA MAS NUEVA Y USADA
let copia3 = { ...punto }; 
// Usa el operador de propagación para crear una copia superficial de 'punto'.
// Resultado: copia3 tendrá las mismas propiedades y valores que punto.

console.log(copia3); 
// Imprime el objeto 'copia3' en la consola.

// ES ANTIGUA NO SE RECOMIENDA
let copia4 = {}; 
// Define un objeto vacío llamado 'copia4'.

for (let llave in punto) { 
    // Itera sobre todas las propiedades enumerables de 'punto'.
    copia4[llave] = punto[llave]; 
    // Copia cada propiedad de 'punto' a 'copia4'.
}

console.log(copia4); 
// Imprime en la consola el objeto 'copia4' que ahora tiene las mismas propiedades y valores que punto.
