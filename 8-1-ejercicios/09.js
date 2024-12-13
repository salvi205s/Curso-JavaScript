const usuarios = [
    { edad: 17, nombre: 'Nico', plan: 'premium' },
    { edad: 13, nombre: 'Chanchito', plan: 'free' },
    { edad: 32, nombre: 'Fernanda', plan: 'free' },
];

const users = [
    { age: 22, name: 'Michael', membership: 'premium' },
    { age: 27, name: 'Kevin', membership: 'free' },
    { age: 29, name: 'Happy pig', membership: 'free' },
];

let newUsers=users.map((user) => ({
    edad: user.age,
    nombre: user.name,
    plan: user.membership,
}))

const todos=[...usuarios, ...newUsers]


todos.sort((a, b)=> a.edad - b.edad);

const lista=todos.map((user) => `<li>Nombre: ${user.nombre}, Edad: ${user.edad}</li>`)

const plantilla=`
<ul>
    ${lista.join(`
    `)}
</ul>`
console.log(plantilla);

// Unificar las estructuras de usuarios y user
// fusionar los array
// ordenar por edad
// crear plantilla HTML:
// <li>Nombre: name, Edad: age</li>
// imprimir la lista en consola