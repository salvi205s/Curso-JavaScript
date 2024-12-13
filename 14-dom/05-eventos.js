// Crear un nuevo formulario
let form = document.createElement('form');

// Establecer el atributo id del formulario
form.id = 'mi-formulario';

// Crear un nuevo input de tipo texto
let input = document.createElement('input');
input.setAttribute('type', 'text'); // Establecer el atributo 'type' del input

// Crear un nuevo botón con el texto 'Enviar'
let btn = document.createElement('button');
btn.innerText = 'Enviar'; // Establecer el texto interno del botón

// Añadir el input al formulario
form.append(input);

// Añadir el botón al formulario
form.append(btn);

// Añadir el formulario al cuerpo del documento
document.body.append(form);

// Evento de entrada del mouse
form.onmouseenter = e => {
    console.log('entra el mouse', e); // Imprime 'entra el mouse' y el objeto del evento en la consola
}

// Evento de salida del mouse
form.onmouseleave = e => {
    console.log('sale el mouse'); // Imprime 'sale el mouse' en la consola
}

// Evento de enfoque en el input
input.onfocus = e => {
    console.log('input con focus'); // Imprime 'input con focus' en la consola cuando el input recibe el foco
}

// Evento de pérdida de enfoque en el input
input.onblur = e => {
    console.log('input perdió el foco'); // Imprime 'input perdió el foco' en la consola cuando el input pierde el foco
}

// Evento de cambio en el valor del input
input.onchange = e => {
    console.log('valor cambia', e.target.value); // Imprime 'valor cambia' y el nuevo valor del input en la consola cuando el valor cambia
}

// Asignar un controlador de eventos click al botón utilizando onclick
btn.onclick = e => {
    e.preventDefault(); // Evitar la acción predeterminada del botón
    console.log('botón clickeado'); // Imprimir mensaje en la consola
}

// Asignar un controlador de eventos click al botón utilizando addEventListener
btn.addEventListener('click', e => {
    e.preventDefault(); // Evitar la acción predeterminada del botón
    console.log('botón clickeado'); // Imprimir mensaje en la consola
})
