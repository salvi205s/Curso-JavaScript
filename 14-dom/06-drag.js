let id;
function createDraggable() {
    // Crear un nuevo elemento <span>
    let span = document.createElement('span');

    // Establecer el id del <span> a 'hola-mundo'
    span.id = 'hola-mundo';

    // Establecer el texto interno del <span> a 'Arrastrable'
    span.innerText = 'Arrastrable';

    // Hacer que el <span> sea arrastrable
    span.draggable = true;

    span.ondragstart = e => { 
        e.dataTransfer.setData('text', e.target.id); // Establecer el ID en dataTransfer }
    }
    return span;
}

function createDroppableArea() {
    // Crear un nuevo elemento <div>
    let dropArea = document.createElement('div');

    // Establecer la clase del <div> a 'drop'
    dropArea.className = 'drop';

    // Evento 'ondragenter' para cambiar el color de fondo al entrar un elemento arrastrado
    dropArea.ondragenter = e => {
        e.target.style.background = 'yellow'; // Cambia el fondo del elemento a amarillo
    }

    // Evento 'ondragleave' para restablecer el color de fondo al salir un elemento arrastrado
    dropArea.ondragleave = e => {
        e.target.style.background = ''; // Restablece el fondo del elemento
    }

    // Evento 'ondragover' para permitir el soltar del elemento
    dropArea.ondragover = e => e.preventDefault(); // Previene el comportamiento por defecto al arrastrar sobre la 'dropArea'

    // Evento 'ondrop' para manejar el soltar del elemento arrastrado
    dropArea.ondrop = e => {
        e.preventDefault(); // Previene el comportamiento por defecto al soltar
        let id = e.dataTransfer.getData('text'); // Obtiene el ID del elemento arrastrado
        e.target.appendChild(document.getElementById(id)); // Añade el elemento arrastrado a la 'dropArea'
    }


    // Retorna el nuevo elemento <div>
    return dropArea;
}


let draggable = createDraggable();
let dropArea1 = createDroppableArea();
let dropArea2 = createDroppableArea();

// Añadir el <div> al cuerpo del documento
document.body.append(dropArea1);
document.body.append(dropArea2);
document.body.append(draggable);
