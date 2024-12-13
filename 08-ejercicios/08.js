const usuarios = [
    { edad: 17, nombre: 'Nico', plan: 'premium' },
    { edad: 13, nombre: 'Chanchito', plan: 'free' },
    { edad: 32, nombre: 'Fernanda', plan: 'free' },
    { edad: 25, nombre: 'Felipe', plan: 'gold' },
];

const pagos = usuarios.filter((u) => u.plan !== "free")
pagos.sort((a, b) => b.edad - a.edad)
const lista = pagos.map((u) => `<li>${u.nombre}</li>`)

plantilla = `
<ul
    ${lista.join(`
    `)}
</ul>`;



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
console.log(plantilla);
