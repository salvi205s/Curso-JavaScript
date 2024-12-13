// Definimos un objeto llamado 'user' con tres propiedades: id, name y age
let user = {
    id: 1,           // Propiedad 'id' con valor 1
    name: 'Pepe',    // Propiedad 'name' con valor 'Pepe'
    age: 21          // Propiedad 'age' con valor 21
};

// Usamos un bucle 'for...in' para iterar sobre todas las propiedades del objeto 'user'
for (const key in user) {
    // Verificamos si 'user' tiene la propiedad especificada en 'key' usando el método 'hasOwnProperty'
    if (Object.hasOwnProperty.call(user, key)) {
        // Si la propiedad existe, la imprimimos en la consola
        console.log(key, ': ', user[key]); // Imprime el valor de cada propiedad
    }
}
