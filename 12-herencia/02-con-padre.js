// Definición de la función constructora 'Entidad'
function Entidad(entidad) {
    this.id = Math.random().toString('20'); // Asigna un id aleatorio convertido a string
    this.entidad = entidad; // Asigna la entidad pasada como argumento
  }
  
  // Definición de la función constructora 'User'
  function User() {
    // Llama al constructor de 'Entidad', pasando 'user' como argumento
    Entidad.call(this, 'user');
    
    // Asigna un objeto 'attrs' con propiedades 'name' y 'email' a la instancia de 'User'
    this.attrs = {
      name: 'chanchito feliz', // Nombre de usuario
      email: 'chanchito@holamundo.io', // Email del usuario
    }
  }
  
  // Crea una nueva instancia de 'User'
  const u = new User();
  
  // Imprime la instancia de 'User' en la consola
  console.log(u);
  
  /* 
  Explicación:
Función constructora Entidad:

this.id = Math.random().toString('20');: Asigna un identificador aleatorio convertido a string.

this.entidad = entidad;: Asigna la entidad pasada como argumento a la propiedad entidad.

Función constructora User:

Entidad.call(this, 'user');: Llama al constructor de Entidad con el contexto de User y pasa 'user' como argumento. Esto significa que las propiedades de Entidad (es decir, id y entidad) se asignan a la instancia de User.

this.attrs = { name: 'chanchito feliz', email: 'chanchito@holamundo.io' }: Asigna un objeto attrs a la instancia de User, con propiedades name y email.

Creación de instancia de User:

const u = new User();: Crea una nueva instancia de User llamada u.

Impresión de la instancia u:

console.log(u);: Imprime la instancia u en la consola, mostrando sus propiedades y métodos.

Este código demuestra cómo utilizar la herencia de funciones constructoras en JavaScript, pasando propiedades de una función a otra mediante call.
  */