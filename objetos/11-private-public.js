// Definición de la función constructora 'Usuario'
function Usuario() {
    let id = 1; // Variable privada 'id' definida dentro de la función, no accesible desde fuera
    this.name = 'Nicolas'; // Propiedad pública 'name' accesible desde las instancias del objeto

    // Función privada 'log', no accesible desde fuera de la función constructora
    let log = function() {
        console.log('logging...');
    }

    // Método público 'guardar' accesible desde las instancias del objeto
    this.guardar = function() {
        log(); // Llama a la función privada 'log'
        console.log('guardando...');
    }
}

// Creación de una nueva instancia del objeto 'Usuario'
const usuario = new Usuario();

// Llamada al método 'guardar' del objeto 'usuario'
usuario.guardar(); // Imprime 'logging...' y 'guardando...' en la consola
