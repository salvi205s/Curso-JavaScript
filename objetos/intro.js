// Programacion orientada a objetos

let user = {
    // Email del usuario
    email: 'nico@holamundo.io',

    // Nombre del usuario
    name: 'Nicolas',

    // Dirección del usuario
    direccion: {
        // Calle de la dirección
        calle: 'Queen st',

        // Número de la dirección
        numero: 15,
    },

    // Estado activo del usuario
    activo: true,

    // Función para recuperar la clave del usuario
    recuperarClave: function () {
        console.log('Recuperando clave...');
    },
};
