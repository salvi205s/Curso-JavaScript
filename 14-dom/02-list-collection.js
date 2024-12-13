// Selecciona todos los elementos <p> del documento y los asigna a la variable 'collection'
let collection = document.getElementsByTagName('p');

// Selecciona todos los elementos <p> del documento y los asigna a la variable 'list'
let list = document.querySelectorAll('p');

// Imprime las variables 'collection' y 'list' en la consola
console.log(collection, list);

// Busca un elemento específico en 'collection' por el nombre 'chanchito'
// let item1 = collection.namedItem('chanchito');

// // Selecciona el cuarto elemento de 'collection' (índice 3)
// let item2 = collection.item(3);

// // Selecciona el cuarto elemento de 'collection' usando el índice
// let item3 = collection[3];

// Iterar elementos HTML

// for (const el of collection) {
//     console.log(el);
    
// }

// Array.from(collection).forEach(x => console.log(x));
// Uso del método Array.from() para convertir 'collection' en un array y luego iterar sobre cada elemento del array

// Uso del operador de propagación [...] para convertir 'collection' en un array y luego iterar sobre cada elemento del array
// [...collection].forEach(x => console.log(x));

// -------------------------------------------------------------------

// Iterar nodeList

// let item1 = list.item(3);
// let item2 = list[3];

// Itera sobre cada elemento de 'list' e imprime cada elemento en la consola
list.forEach(x => console.log(x));

// entries, keys y values.

let entries = list.entries(); // Obtiene un iterador de pares clave/valor de 'list'
let keys = list.keys(); // Obtiene un iterador de las claves de 'list'
let values = list.values(); // Obtiene un iterador de los valores de 'list'

// Utiliza el operador de propagación para convertir 'list' en un array y luego iterar sobre cada elemento
[...list].forEach(el => console.log(el));
