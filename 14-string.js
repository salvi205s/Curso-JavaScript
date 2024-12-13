const saludo = "Hola Mundo!";
//       01234567890

const despedida = new String("Chao mundo :(");

console.log(typeof saludo); // string
console.log(typeof despedida); // object

console.log(saludo.length); // 11

console.log(saludo.indexOf("Mu")); // 5
console.log(saludo.indexOf("aoeu")); // -1

console.log(saludo.includes(" Mundo")); // true

let nuevoSaludo = saludo.replace("Mundo", "Nicolas");
console.log(nuevoSaludo, saludo); // Hola Nicolas! Hola Mundo!

console.log(saludo.toLowerCase()); // hola mundo!
console.log(saludo.toUpperCase()); // HOLA MUNDO!
console.log(saludo.charAt(5)); // Devuelve el carácter en la posición 5: 'M'
console.log(saludo.substring(0, 4)); // Devuelve una subcadena desde el índice 0 hasta el 4 (sin incluirlo): 'Hola'
console.log(saludo.slice(1, 8)); // Similar a substring, pero con soporte negativo: 'ola Mun'
console.log(saludo.split(' ')); // Divide la cadena por espacios y devuelve un array: ['Hola', 'Mundo!']
console.log(saludo.endsWith('!')); // Verifica si la cadena termina con '!': true
console.log(saludo.startsWith('Hola')); // Verifica si la cadena comienza con 'Hola': true
console.log(saludo.repeat(3)); // Repite la cadena 3 veces: 'Hola Mundo!Hola Mundo!Hola Mundo!'
console.log(saludo.trim()); // Elimina los espacios en blanco al principio y al final: 'Hola Mundo!'
console.log(saludo.concat(' ', despedida)); // Concatena dos cadenas: 'Hola Mundo! Chao mundo :('
console.log('    Hola Mundo!    '.trimStart()); // Elimina espacios en blanco al principio: 'Hola Mundo!    '
console.log('    Hola Mundo!    '.trimEnd()); // Elimina espacios en blanco al final: '    Hola Mundo!'
