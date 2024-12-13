// Definición de la función constructora 'User'
function User() {
    this.name = 'Hola Mundo'; // Asigna 'Hola Mundo' a la propiedad 'name' de la instancia
}

// Añade el método 'login' al prototipo de 'User'
User.prototype.login = function () {
    console.log('Iniciando sesión', this.name); // Imprime 'Iniciando sesión' y el nombre del usuario
}

// Crea una nueva instancia de 'User' y la asigna a la variable 'user'
let user = new User();

// Itera sobre todas las propiedades del objeto 'user' pero solo de un prototipo por encima
for (let prop in user)
    console.log(prop); // Imprime cada propiedad en la consola

// Omite las propiedades del prototipo solo imprime las propias de User (name)
for (let prop in user)
    if (user.hasOwnProperty(prop)) 
    console.log(prop); 

// Hace lo contrario
for (let prop in user)
    if (!user.hasOwnProperty(prop)) 
    console.log(prop); 