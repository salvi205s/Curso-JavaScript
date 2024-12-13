const usuarios = [
    { edad: 17, nombre: 'Nico', plan: 'premium' },
    { edad: 13, nombre: 'Chanchito', plan: 'premium' },
    { edad: 32, nombre: 'Fernanda', plan: 'free' },
    { edad: 25, nombre: 'Felipe', plan: 'gold' },
];

// Función para contar cuántos usuarios tienen el plan 'premium'
function cuantosPremium(usrs) {
    return usrs.filter(u => u.plan === 'premium').length;
}

// Función para contar cuántos usuarios tienen más de 18 años
function cuantosMayores(usrs) {
    return usrs.filter(u => u.edad > 17).length
}

console.log(cuantosPremium(usuarios)); // Imprime el número de usuarios con plan 'premium'
console.log(cuantosMayores(usuarios)); // Imprime el número de usuarios mayores de 18 años
