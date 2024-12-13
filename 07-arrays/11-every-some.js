// Declaración de un arreglo de objetos 'usuarios'
let usuarios = [
    { id: 1, activo: true },
    { id: 2, activo: false },
    { id: 3, activo: true },
];

// Usar el método 'every' para verificar si todos los usuarios están activos
let todosActivos = usuarios.every(u => {
    // Imprimir el ID de cada usuario en la consola para verificación
    console.log('todos activos', u.id);
    // Retornar el estado 'activo' del usuario
    return u.activo;
});

// Imprimir el resultado de la verificación en la consola
// console.log(todosActivos); // Imprime 'true' si todos los usuarios están activos, de lo contrario 'false'

// Verifica si al menos un usuario está activo
let algunoActivo = usuarios.some(u => {
    console.log(u.id); // Imprime el ID del usuario
    return u.activo; // Retorna true si el usuario está activo
});

console.log(algunoActivo); // Imprime true si al menos un usuario está activo, de lo contrario false
