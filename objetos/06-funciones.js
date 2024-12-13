// Las funciones son objetos de primera clase en JavaScript, lo que significa que pueden ser tratadas como cualquier otro objeto.
function Usuario(nombre) {
    // Se define una función constructora llamada Usuario.
    this.nombre = nombre;
    // Asigna el nombre pasado como argumento a la propiedad 'nombre' del nuevo objeto.
}

console.log(Usuario.name);
// Imprime en la consola el nombre de la función constructora 'Usuario'.

console.log(Usuario.length);
// Imprime en la consola el número de argumentos que espera la función 'Usuario', que en este caso es 1.

const U = Usuario;
// Se asigna la referencia de la función 'Usuario' a la constante 'U'.

let user = new U("Manolo");
// Se crea una nueva instancia de 'Usuario' usando 'U', y se asigna a la variable 'user'.

console.log(user);
// Imprime en la consola el objeto 'user', que es una instancia de 'Usuario' con la propiedad 'nombre' igual a 'Manolo'.

function of(Fn, arg) {
    // Se define una función llamada 'of' que toma una función y un argumento.
    return new Fn(arg);
    // Devuelve una nueva instancia de 'Fn' utilizando el argumento 'arg'.
}

let user1 = of(Usuario, 'Chanchito');
// Crea una nueva instancia de 'Usuario' con el nombre 'Chanchito' utilizando la función 'of'.

console.log(user1);
// Imprime en la consola el objeto 'user1', que es una instancia de 'Usuario' con la propiedad 'nombre' igual a 'Chanchito'.

function returned() {
    // Se define una función llamada 'returned'.
    return function () {
        // 'returned' devuelve otra función.
        console.log('Hola Mundo');
        // La función devuelta imprime 'Hola Mundo' en la consola cuando se llama.
    }
}

let saludo = returned();

saludo();