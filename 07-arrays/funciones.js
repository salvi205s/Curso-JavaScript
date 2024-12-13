// Añade uno o más elementos al final del array.
let arr1 = ['a', 'b'];
arr1.push('c', 'd');
console.log(arr1); // ['a', 'b', 'c', 'd']

// Elimina el último elemento del array y lo devuelve.
let arr2 = ['a', 'b', 'c'];
let last = arr2.pop();
console.log(last); // 'c'
console.log(arr2);  // ['a', 'b']

// Elimina el primer elemento del array y lo devuelve.
let arr3 = ['a', 'b', 'c'];
let first = arr3.shift();
console.log(first); // 'a'
console.log(arr3);   // ['b', 'c']

// Añade uno o más elementos al comienzo del array.
let arr4 = ['a', 'b'];
arr4.unshift('x', 'y');
console.log(arr4); // ['x', 'y', 'a', 'b']

// Une dos o más arrays. No cambia los arrays existentes, sino que devuelve un nuevo array.
let arr5_1 = ['a', 'b'];
let arr5_2 = ['c', 'd'];
let arr5_3 = arr1.concat(arr5_2);
console.log(arr5_3); // ['a', 'b', 'c', 'd']

// Devuelve una copia de una parte del array dentro de un nuevo array. No modifica el array original.
let arr = ['a', 'b', 'c', 'd'];
let newArr = arr.slice(1, 3);
console.log(newArr); // ['b', 'c']

// Añade o elimina elementos en cualquier posición del array.
let arr = ['a', 'b', 'c', 'd'];
arr.splice(1, 2, 'x', 'y');
console.log(arr); // ['a', 'x', 'y', 'd']

// Devuelve el primer índice en el que se encuentra un elemento dado en el array, o -1 si no se encuentra.
let arr = ['a', 'b', 'c'];
console.log(arr.indexOf('b')); // 1
console.log(arr.indexOf('z')); // -1

// Devuelve el último índice en el que se encuentra un elemento dado en el array, o -1 si no se encuentra.
let arr = ['a', 'b', 'a'];
console.log(arr.lastIndexOf('a')); // 2
console.log(arr.lastIndexOf('z')); // -1

// Comprueba si un array contiene un elemento especificado.
let arr = ['a', 'b', 'c'];
console.log(arr.includes('b')); // true
console.log(arr.includes('z')); // false

// Ejecuta una función para cada elemento del array.
let arr = ['a', 'b', 'c'];
arr.forEach((element, index) => {
    console.log(index, element);
});
// 0 'a'
// 1 'b'
// 2 'c'

// Crea un nuevo array con los resultados de la llamada a una función aplicada a cada uno de sus elementos.
let arr = [1, 2, 3];
let newArr = arr.map(x => x * 2);
console.log(newArr); // [2, 4, 6]

// Crea un nuevo array con todos los elementos que cumplan con la condición implementada por la función proporcionada.
let arr = [1, 2, 3, 4];
let newArr = arr.filter(x => x % 2 === 0);
console.log(newArr); // [2, 4]

// Aplica una función a un acumulador y a cada valor del array para reducirlo a un solo valor.
let arr = [1, 2, 3, 4];
let sum = arr.reduce((acc, x) => acc + x, 0);
console.log(sum); // 10

// Comprueba si al menos un elemento del array cumple con la condición implementada por la función proporcionada.
let arr = [1, 2, 3, 4];
let hasEven = arr.some(x => x % 2 === 0);
console.log(hasEven); // true

// Comprueba si todos los elementos del array cumplen con la condición implementada por la función proporcionada.
let arr = [1, 2, 3, 4];
let allEven = arr.every(x => x % 2 === 0);
console.log(allEven); // false

// Devuelve el primer elemento del array que cumple con la condición implementada por la función proporcionada.
let arr = [1, 2, 3, 4];
let firstEven = arr.find(x => x % 2 === 0);
console.log(firstEven); // 2

// Devuelve el índice del primer elemento del array que cumple con la condición implementada por la función proporcionada.
let arr = [1, 2, 3, 4];
let firstEvenIndex = arr.findIndex(x => x % 2 === 0);
console.log(firstEvenIndex); // 1

// Ordena los elementos del array y devuelve el array ordenado.
let arr = [3, 1, 4, 2];
arr.sort((a, b) => a - b);
console.log(arr); // [1, 2, 3, 4]

reverse:
// Invierte el orden de los elementos del array.
let arr = ['a', 'b', 'c'];
arr.reverse();
console.log(arr); // ['c', 'b', 'a']

join:
// Une todos los elementos de un array en una cadena y la devuelve.
let arr = ['a', 'b', 'c'];
let str = arr.join('-');
console.log(str); // 'a-b-c'

flat:
// Devuelve un nuevo array con todos los elementos de sub-array concatenados de forma recursiva hasta la profundidad especificada.
let arr = [1, [2, [3, [4]]]];
let flatArr = arr.flat(2);
console.log(flatArr); // [1, 2, 3, [4]]

flatMap:
// Primero mapea cada elemento usando una función de mapeo, luego aplana el resultado en un nuevo array.
let arr = [1, 2, 3];
let flatMappedArr = arr.flatMap(x => [x, x * 2]);
console.log(flatMappedArr); // [1, 2, 2, 4, 3, 6]

from:
// Crea un nuevo array a partir de un objeto similar a un array o iterable.
let str = 'Hola';
let arr = Array.from(str);
console.log(arr); // ['H', 'o', 'l', 'a']

isArray:
// Devuelve true si el argumento es un array, de lo contrario devuelve false.
let arr = ['a', 'b', 'c'];
console.log(Array.isArray(arr)); // true
console.log(Array.isArray('Hola')); // false
