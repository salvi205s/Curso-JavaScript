function mixin(Ctr, ...args) {
    Object.assign(Ctr.prototype, ...args)
}

// Definimos un objeto 'vuela' con un método 'vuela'
let vuela = {
    // Método que imprime 'volando' en la consola
    vuela() {
        console.log('volando');
    }
}
// Definimos un objeto llamado 'nada' con un método 'nada'
let nada = {
    // Método que imprime 'nadando' en la consola
    nada() {
        console.log('nadando');
    }
}

// Definimos un objeto llamado 'bano' con un método 'bano'
let bano = {
    // Método que imprime 'yendo al baño!' en la consola
    bano() {
        console.log('yendo al baño!');
    }
}

let camina = {
    // Método que imprime 'yendo al baño!' en la consola
    camina() {
        console.log('Caminando!');
    }
}

// Definición de la función constructora 'Pato'
function Pato() {
    // Asigna el nombre 'Patito' a la propiedad 'name' de la instancia de Pato
    this.name = 'Patito';
}
mixin(Pato, nada, bano, camina, vuela)
console.log(Pato.prototype, new Pato());

// Definición de la función constructora 'Perro'
function Perro() { }
mixin(Perro, nada, bano, camina)
console.log(Perro.prototype, new Perro());

// Definición de la función constructora 'Pez'
function Pez() { }
mixin(Pez, nada, bano)
console.log(Pez.prototype, new Pez());

// Definimos una función constructora llamada 'Avion'
function Avion() { }

// Asignamos las propiedades del objeto 'vuela' al prototipo de 'Avion'
mixin(Avion, vuela);

// Imprimimos el prototipo de 'Avion' y una nueva instancia de 'Avion' en la consola
console.log(Avion.prototype, new Avion());
