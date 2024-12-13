

const usuarios = [
    { edad: 17, nombre: 'Nico', plan: 'premium' },
    { edad: 13, nombre: 'Chanchito', plan: 'free' },
    { edad: 32, nombre: 'Fernanda', plan: 'free' },
    { edad: 25, nombre: 'Felipe', plan: 'gold' },
];

let pagos=usuarios.filter((u) => u.plan!=='free');
pagos.sort((a, b) => b.edad - a.edad);

let lista=pagos.map((u) => `<li>${u.nombre}</li>`)

const plantilla= `
<ul>
    ${lista.join(`
    `)}
</ul>`
console.log(plantilla);


// Obtener los usuarios pago
// Ordenar de mayor a menor edad
// Devolver el nombre del usuario
// Crear una plantilla HTML
// Imprimirla en consola
/**
 * <ul>
 *   <li>Felipe</li>
 *   <li>Nico</li>
 * </ul>
 */