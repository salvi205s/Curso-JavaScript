// Definición de la función constructora 'User'
// function User() {
//     // Asigna el nombre 'hola Mundo' a la propiedad 'name' del objeto User
//     this.name = 'hola Mundo';

//     // Define una función 'login' que imprime 'iniciando sesión' en la consola
//     this.login = function () {
//         console.log('iniciando sesión');
//     }
// }

// // Crea una nueva instancia de User y la asigna a la constante 'user1'
// const user1 = new User();

// // Crea una nueva instancia de User y la asigna a la constante 'user2'
// const user2 = new User();

// // Llama a la función 'login' del objeto 'user1'
// user1.login();

// Compara si la función 'login' de 'user1' es igual a la función 'login' de 'user2' y lo imprime en la consola
// console.log(user1.login == user2.login); //devuelve false

// ----------------------------------------------

// Definición de la función constructora 'User'
function User() {
    // Asigna el nombre 'hola Mundo' a la propiedad 'name' del objeto User
    this.name = 'hola Mundo';

    // Define una función 'logger' que imprime 'loggeando...' en la consola y llama a 'login'
    // Se llama metodo de instancia se copia cada vez que se crea una nueva instancia
    this.logger = function() {
        console.log('loggeando...');
        this.login();
    }
}

// Añade el método 'login' al prototipo de 'User'
// Se llama metodo de prototipo se usa para optimizar el codigo no se copia se comparte 
User.prototype.login = function() {
    console.log('iniciando sesión', this.name);
}

// Crea una nueva instancia de 'User' y la asigna a la constante 'user1'
const user1 = new User();

// Crea una nueva instancia de 'User' y la asigna a la constante 'user2'
const user2 = new User();

console.log(user1); // Imprime la instancia 'user1' en la consola

/* 
Explicación:
Función constructora User:

this.name = 'hola Mundo': Asigna la cadena 'hola Mundo' a la propiedad name de cada instancia de User.

this.logger = function() { ... }: Define el método logger que imprime 'loggeando...' y llama a this.login().

Método login en el prototipo:

User.prototype.login = function() { ... }: Añade el método login al prototipo de User, de modo que todas las instancias de User pueden usar este método.

console.log('iniciando sesión', this.name);: Imprime 'iniciando sesión' seguido del nombre del usuario.

Instancias user1 y user2:

const user1 = new User();: Crea una nueva instancia de User y la asigna a user1.

const user2 = new User();: Crea otra instancia de User y la asigna a user2.

Impresión de user1:

console.log(user1);: Imprime la instancia user1, mostrando sus propiedades y métodos.

Este código crea una función constructora User con propiedades y métodos, y luego crea dos instancias de User, mostrando cómo se pueden definir y usar métodos tanto dentro del constructor como en el prototipo.
*/