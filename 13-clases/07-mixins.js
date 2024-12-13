// Definimos un objeto llamado 'Entidad' con un método 'save'
const Entidad = {
    save() {
        console.log('guardado de entidad'); // Imprime 'guardado de entidad' en la consola
    },
}

const Actualizar = {
    update() {
        console.log('actualizando de entidad'); // Imprime 'guardado de entidad' en la consola
    },
}

// Definición de la clase 'User'
class User {
    // Constructor de la clase 'User'
    constructor(name) {
        this.name = name; // Inicializa la propiedad 'name' con el valor del parámetro 'name'
    }

    save() {
        console.log('guardado de usuario'); // Imprime 'guardado de entidad' en la consola
    }
}

// Crea una nueva instancia de 'User' con el nombre 'chanchito'
const u = new User('chanchito');

const nuevoProto=Object.assign({}, Entidad, Actualizar)

// Intento de llamada al método 'save' en la instancia 'u'
// Sin embargo, lanzará un error porque 'save' no está definido en 'User'
Object.setPrototypeOf(User.prototype, nuevoProto)
u.save();
