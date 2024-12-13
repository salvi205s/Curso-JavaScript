const user = { id: 1 };
// Se crea un objeto 'user' con una propiedad 'id' igual a 1.

user.name = 'Nicolas';
// Se añade una nueva propiedad 'name' al objeto 'user' con el valor 'Nicolas'.

user.guardar = function () {
    // Se añade una nueva propiedad 'guardar' al objeto 'user', que es una función.
    console.log('Guardando', user.name);
    // La función 'guardar' imprime en la consola 'Guardando' seguido del valor de 'user.name'.
}

user.guardar();
// Se llama a la función 'guardar', lo que imprime 'Guardando Nicolas' en la consola.

delete user.name;
// Se elimina la propiedad 'name' del objeto 'user'.

delete user.guardar;
// Se elimina la propiedad 'guardar' del objeto 'user'.

console.log(user);
// Se imprime el objeto 'user' en la consola, que ahora solo tiene la propiedad 'id'.

// const user1 = Object.freeze({ id: 1 }); 
// crearía un objeto 'user1' con la propiedad 'id' igual a 1, y el objeto sería inmutable.

const user1 = Object.seal({ id: 1 });
// Se crea un objeto 'user1' con la propiedad 'id' igual a 1, y el objeto es sellado (no se pueden añadir ni eliminar propiedades, pero se pueden modificar las existentes).

user1.name = 'Nico';
user1.id = 2;
console.log(user1);
