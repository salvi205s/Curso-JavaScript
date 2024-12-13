// Definimos un objeto llamado "obj" con una propiedad "nombre"
const obj = {
    nombre: 'Nicolas', // Asignamos el valor 'Nicolas' a la propiedad 'nombre'
};

// Definimos una función llamada "extender", que actualmente no hace nada
function extender(usuario) {

    // usuario.login = () => console.log("logueando a", usuario.nombre);

    // return usuario

    // otra manera de hacerlo
    // Definimos un objeto con dos métodos: login y logout
    const metodos = {
        login() {
            console.log("logueando a", this.nombre);
        },
        logout() {
            console.log("cerrando a", this.nombre);
        }
    }
    // Asignamos los métodos al objeto usuario(obj) y lo devolvemos
    return Object.assign(usuario, metodos);
}

// Llamamos a la función "extender" con el contexto del objeto "obj"
const usuario = extender(obj);

// Imprimimos el objeto "usuario" en la consola
console.log(usuario);

// Intentamos llamar al método "login" en el objeto "usuario" (esto causará un error porque no existe)
usuario.login();
usuario.logout();
