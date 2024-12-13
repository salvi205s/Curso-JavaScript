// Definición de la función constructora Usuario
function Usuario() {
    // Asignación de la propiedad id al objeto creado
    this.id = 1;
    
    // Definición del método recuperarClave para el objeto creado
    this.recuperarClave = function () {
        console.log('recuperando clave...');
    }
}

// Creación de una nueva instancia del objeto Usuario
let usuario = new Usuario();

// Imprimir el objeto usuario en la consola
console.log(usuario);
