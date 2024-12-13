const usuario = {
    nombre: 'Chanchito', // Nombre del usuario
    apellido: 'Feliz', // Apellido del usuario
    get nombreCompleto() { // Getter para obtener el nombre completo
        return `${usuario.nombre} ${usuario.apellido}`; // Retorna el nombre completo concatenando nombre y apellido
    },
    set nombreCompleto(valor) { // Setter para establecer el nombre completo
        const [nombre, apellido] = valor.split(' '); // Divide el valor en nombre y apellido
        this.nombre = nombre; // Asigna el nombre
        this.apellido = apellido; // Asigna el apellido
    }
};

usuario.nombreCompleto = 'Hola Mundo'; // Establece el nombre completo a 'Hola Mundo'
console.log(usuario.nombreCompleto); // Imprime el nombre completo en la consola
