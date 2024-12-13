// Definimos una función constructora llamada 'Select'
function Select() {}

// Añadimos un método 'render' al prototipo de 'Select'
Select.prototype.render = function() {
    console.log('renderizando select'); // Imprime un mensaje en la consola indicando que se está renderizando un select
}

// Definimos una función constructora llamada 'Checkbox'
function Checkbox() {}

// Añadimos un método 'render' al prototipo de 'Checkbox'
Checkbox.prototype.render = function() {
    console.log('renderizando checkbox'); // Imprime un mensaje en la consola indicando que se está renderizando un checkbox
}

// Creamos un array llamado 'componentes' que contiene nuevas instancias de 'Select' y 'Checkbox'
let componentes = [
    new Select(), // Crea una instancia de 'Select' y la añade al array
    new Checkbox(), // Crea una instancia de 'Checkbox' y la añade al array
];

componentes.forEach((c) => c.render())