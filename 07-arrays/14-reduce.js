// Declaración de un arreglo de números
const numeros = [1, 2, 3, 4];

// Uso del método reduce para sumar los elementos del arreglo
const suma = numeros.reduce((acc, el) => {
    // Suma el acumulador (acc) con el elemento actual (el)
    return acc + el;
}, 0);

// Imprime la suma total en la consola
// console.log(suma); // Resultado: 10

// Declaración de un arreglo anidado
const anidado = [[1, 2], 3, [4, 5]];

// Uso del método reduce para aplanar el arreglo anidado
const plano = anidado
  // La función de reducción toma un acumulador (acc) y el elemento actual (el)
  .reduce((acc, el) => 
    // Concatena el acumulador con el elemento actual
    acc.concat(el), 
    // Inicializa el acumulador como un arreglo vacío
    []
  );

// Imprime el arreglo plano en la consola
// console.log(plano); // Resultado: [1, 2, 3, 4, 5]

// Nota
// para buscar en elementos dentro de un array demasiado grande
// Declaración del arreglo de usuarios
const usuarios = [
    { edad: 17, nombre: 'Nico' },
    { edad: 13, nombre: 'Chanchito' },
    { edad: 25, nombre: 'Felipe' },
    { edad: 32, nombre: 'Fernanda' },
  ];
  
  // Uso del método reduce para crear un objeto indexado por el nombre de usuario
  const indexado = usuarios.reduce((acc, el) => ({
    // Copia las propiedades del acumulador (acc) al nuevo objeto
    ...acc,
    // Añade una nueva propiedad al objeto, usando el nombre del usuario como clave y el objeto del usuario como valor
    [el.nombre]: el,
  }), {});
  
  // Imprime el objeto indexado en la consola
  console.log(indexado);
  