
function crearUsuario(name, email , estado) {
    return {
        email,
        name,
        activo: estado,
        recuperarClave: function () {
            console.log('Recuperando clave...');
        },
    };
}

let user1= crearUsuario("Manolo", "manolo@email.com", true);
let user2= crearUsuario("Maria", "mari@email.com", false);

console.log({user1, user2});

