// Definición de la clase 'Entidad'
class Entidad {
    // Constructor de la clase 'Entidad'
    constructor(id) {
        this.id = id; // Inicializa la propiedad 'id' con el valor del parámetro 'id'
        this.created_at = new Date(); // Inicializa la propiedad 'created_at' con la fecha y hora actuales
    }

    // Método 'save' que no hace nada por el momento
    save() { 
        console.log("save en entidad");
        
    }
}

// Definición de la clase 'User'
class User extends Entidad {
    // Constructor de la clase 'User'
    constructor(name) {
        super(1);
        this.name = name; // Inicializa la propiedad 'name' con el valor del parámetro 'name'
    }

    save() { 
        super.save();
        console.log("save en usuario");
        
    }
}

const u =new User('Pepe');

u.save();

