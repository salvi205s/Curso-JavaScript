// function User(a) {
//     let name = a;
//     this.getName = function() { return name; }
// }
// Este comentario muestra cómo se podía definir la funcionalidad similar
// antes de la introducción de las clases en JavaScript.

class User {
    #name; // Define un campo privado llamado #name

    constructor(name) {
        this.#name = name; // Inicializa el campo #name con el valor del parámetro 'name'
    }

    #logger(){
        console.log("logger");
        
    }

    getName() {
        this.#logger();
        return this.#name; // Devuelve el valor del campo #name
    }
}

const u = new User('Chanchito Feliz');

console.log(u);
