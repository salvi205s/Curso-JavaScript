function saludar(...rest) { 
    // Definición de la función "saludar" que acepta argumentos variables
    console.log(this, rest); 
    // Imprime el contexto de "this" y los argumentos recibidos
}

// saludar.call({ propiedad: 'hola mundo' }, 1, 5); 
// Llamada comentada de la función "saludar" con el método "call"

// saludar.apply({ propiedad: 'hola mundo' }, [1, 5]); 
// Llamada comentada de la función "saludar" con el método "apply"

let nuevoSaludar = saludar.bind({ propiedad: 'hola mundo' }); 
// Crea una nueva función con "this" ligado al objeto { propiedad: 'hola mundo' }
nuevoSaludar(1, 5); 
// Llama a la nueva función creada pasando los argumentos 1 y 5

// Definimos un objeto llamado "usuario" con propiedades y métodos
const usuario = {
    nombre: 'Nicolas', // Propiedad nombre con el valor 'Nicolas'
    ciudadanias: ['Chile', 'Colombia', 'New Zealand'], // Propiedad ciudadanias que es un array con tres elementos
    mostrarCiudadanias() { // Método para mostrar las ciudadanias
      // Iteramos sobre cada ciudadanía en el array "ciudadanias"
      this.ciudadanias.forEach(ciudadania => { //con arrow function se puede mostrar el valor de this.nombre, ya que las arrow functions no tienen contexto de this
        // Imprimimos el nombre del usuario y la ciudadanía actual
        console.log(this.nombre, ciudadania);
      });
    }
  };
  
  // Llamamos al método "mostrarCiudadanias" del objeto "usuario"
  usuario.mostrarCiudadanias();
  
