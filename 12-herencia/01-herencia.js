// Definición de la función constructora 'User'
function User() {
    // Asigna el nombre 'Hola Mundo' a la propiedad 'name' de la instancia de User
    this.name = 'Hola Mundo';
}

// Definición de la función constructora 'Product'
function Product() {
    // Asigna el nombre 'Producto' a la propiedad 'name' de la instancia de Product
    this.name = 'Producto';
}

// Definición de la función constructora 'Entidad'
function Entidad() {
}

// Añade el método 'save' al prototipo de 'Entidad'
Entidad.prototype.save = function() {
    // Imprime 'guardando' y el nombre del objeto en la consola
    console.log('guardando', this.name);
}

// Añade el método 'validate' al prototipo de 'Entidad'
Entidad.prototype.validate = function() {
    // Imprime 'validando' y el nombre del objeto en la consola
    console.log('validando', this.name);
}

// Manera antigua
// User.prototype = Entidad.prototype;
// User.prototype.constructor = User;
// User.prototype = Object.create(Entidad.prototype);
// User.prototype.constructor = User;

// Esti hace lo mismo pero es de emmascrit6
Object.setPrototypeOf(User.prototype, Entidad.prototype); // Establece el prototipo del prototipo de User como el prototipo de Entidad
Object.setPrototypeOf(Product.prototype, Entidad.prototype); // Establece el prototipo del prototipo de Product como el prototipo de Entidad

const user = new User(); // Crea una instancia de User
console.log(user); // Imprime la instancia de User en la consola

/* 
Object.setPrototypeOf(User.prototype, Entidad.prototype);:

Establece el prototipo del prototipo de User como Entidad.prototype. Esto significa que las instancias de User heredan de Entidad.prototype.

Object.setPrototypeOf(Product.prototype, Entidad.prototype);:

Establece el prototipo del prototipo de Product como Entidad.prototype. Esto significa que las instancias de Product también heredan de Entidad.prototype.

const user = new User();:

Crea una nueva instancia del objeto User.

console.log(user);:

Imprime la instancia de User en la consola. Esto permite ver las propiedades y métodos heredados de Entidad.prototype.

Los comentarios dentro del código también muestran métodos alternativos para establecer la herencia de prototipos. Estos métodos están comentados, pero podrían ser usados en lugar de Object.setPrototypeOf para lograr el mismo efecto.
*/