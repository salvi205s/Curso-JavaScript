// Declaración de un arreglo de objetos 'usuarios' con edad y nombre
const usuarios = [
    { edad: 17, nombre: 'Nico' },
    { edad: 13, nombre: 'Chanchito' },
    { edad: 25, nombre: 'Felipe' },
    { edad: 32, nombre: 'Fernanda' },
];

// Filtra los usuarios que tienen más de 17 años
const mayores = usuarios.filter(u => u.edad > 17);
const menores = usuarios.filter(u => u.edad < 18);

// Imprime en la consola el arreglo de usuarios filtrados
// console.log(mayores);
console.log(menores);
