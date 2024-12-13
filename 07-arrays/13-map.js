// Declaración de un arreglo de objetos 'usuarios'
const usuarios = [
    { edad: 17, nombre: 'Nico' },
    { edad: 13, nombre: 'Chanchito' },
    { edad: 25, nombre: 'Felipe' },
    { edad: 32, nombre: 'Fernanda' },
];

// Declaración del arreglo de usuarios
const lista = usuarios
  // Filtra los usuarios para incluir solo aquellos que tienen más de 17 años
  .filter(u => u.edad > 17)
  // Mapea los usuarios filtrados para crear una lista HTML de elementos <li> con los nombres de los usuarios
  .map(u => `<li>${u.nombre}</li>`);

// Une los elementos de la lista en una sola cadena y los envuelve en un contenedor <ol>
const html = `<ol>${lista.join('')}</ol>`;

// Imprime la cadena HTML resultante en la consola
console.log(html);


// Se utiliza el método map para iterar sobre el arreglo usuarios
const mapped = usuarios.map(u => ({
    // Se esparcen las propiedades del objeto original 'u' en el nuevo objeto
    ...u,
    // Se añade una nueva propiedad 'mayor' que es true si la edad de 'u' es mayor que 17
    mayor: u.edad > 17,
}));

// Se imprime el arreglo mapeado en la consola
console.log(mapped);
