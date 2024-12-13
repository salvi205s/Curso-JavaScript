// Definimos un objeto llamado 'obj' con una propiedad 'nombre'
const obj = {
    nombre: 'Nicolas', // Asignamos el valor 'Nicolas' a la propiedad 'nombre'
};

// Definimos una función llamada 'Extender', que actualmente no hace nada
function Extender() {

    this.login=()=>{
        console.log("logueando a",this.nombre);
    }

    this.logout=()=>{
        console.log("Saliendo",this.nombre);
    }
    
}

// Llamamos a la función 'Extender' con el contexto de 'obj'
Extender.call(obj);

// Imprimimos el objeto 'obj' en la consola
console.log(obj);

// Intentamos llamar a los métodos 'login' y 'logout' en 'obj' (esto causará un error porque no existen)
obj.login();
obj.logout();
