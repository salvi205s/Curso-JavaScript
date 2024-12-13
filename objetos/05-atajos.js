let obj = {}; 
// Se crea un objeto vacío utilizando la sintaxis literal.

let obj2 = new Object(); 
// Se crea un objeto vacío utilizando el constructor Object.

/**
 * Ejemplos de creación de diferentes tipos de objetos:
 * new Array();   // Crea un nuevo array vacío.
 * new String();  // Crea un nuevo objeto String.
 * new Number();  // Crea un nuevo objeto Number.
 * new Boolean(); // Crea un nuevo objeto Boolean.
 */

function Usuario() { 
    // Se define una función constructora llamada Usuario.
    this.name = "Chanchito feliz"; 
    // Se asigna la propiedad 'name' con el valor "Chanchito feliz".
}

let user = new Usuario(); 
// Se crea una nueva instancia del objeto Usuario.

console.log(user.constructor); 
// Se imprime en la consola el constructor del objeto 'user'.

// Imprime en la consola el constructor del objeto 'user'
console.log(user.constructor);

const s1 = '1 + 1'; 
// Declara una constante 's1' y le asigna la cadena de texto '1 + 1'

const s2 = new String('1 + 1'); 
// Declara una constante 's2' y le asigna un nuevo objeto String con el valor '1 + 1'

console.log(s2.valueOf()); 
// Imprime en la consola el valor primitivo del objeto String 's2'
