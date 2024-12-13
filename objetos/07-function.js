// Definición de una función constructora llamada Punto que toma dos parámetros x e y
function Punto(x, y) {
    // Asignación de los parámetros x e y a las propiedades del objeto this
    this.x = x;
    this.y = y;
    // Definición de un método dibujar que imprime un mensaje en la consola
    this.dibujar = function () {
        console.log('Dibujando...');
    };
}

// Creación de un objeto literal llamado punto con una propiedad z
let punto = {
    z: 7
};

// Para extender objetos

// Uso del método call para llamar a la función Punto con el objeto punto como contexto y los argumentos 1 y 2
// Punto.call(punto, 1, 2);

// Uso del método apply para llamar a la función Punto con el objeto punto como contexto y los argumentos 1 y 2
Punto.apply(punto, [1, 2]);

// Impresión del objeto punto en la consola
console.log(punto);
