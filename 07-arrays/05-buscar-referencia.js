const usuarios = [
    { id: 1, name: 'Chanchito' },
    { id: 2, name: 'Feliz' },
];
// Se crea un array 'usuarios' con dos objetos, cada uno representando un usuario con propiedades 'id' y 'name'.

// const resultado = usuarios.indexOf({ id: 1, name: 'Chanchito' });
// Esta línea está comentada porque 'indexOf' no funciona correctamente para encontrar objetos en arrays.

// Busca el primer objeto en el array 'usuarios' cuya propiedad 'name' sea 'Chanchito'
const resultado = usuarios.find((usuario)=> {
    return usuario.name === 'Chanchito';
});

console.log(resultado);
// Imprime el resultado de la búsqueda en la consola. Si encuentra el usuario, imprimirá:
// { id: 1, name: 'Chanchito' }

NOTA
// predicate son funciones que devuelven true o false