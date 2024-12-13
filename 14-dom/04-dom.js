// Crear un nuevo elemento <p> 
let el = document.createElement('p'); 

// Establecer el texto interno del elemento 
el.innerText = 'Elemento creado';

// Appenda el elemento 'el' al final del body
document.body.append(el);

// Remueve el elemento 'el' del DOM
el.remove();

// Prependa el elemento 'el' al inicio del body
document.body.prepend(el);

// Crea un nuevo elemento 'div' y lo asigna a la variable 'div'
let div = document.createElement('div');

// Establece el texto interno del nuevo 'div'
div.innerText = 'Soy un texto';

// Reemplaza el elemento 'el' con el nuevo 'div'
el.replaceWith(div);

// Reemplaza un elemento hijo del cuerpo del documento por otro elemento
document.body.replaceChild(el, div);

// Elimina un elemento hijo del cuerpo del documento
document.body.removeChild(el);

// Añade un elemento hijo al final del cuerpo del documento
document.body.appendChild(el);

// Inserta un elemento en relación a otro elemento en el documento
document.body.insertAdjacentElement('beforebegin', div);
document.body.insertAdjacentElement('afterbegin', div);
document.body.insertAdjacentElement('beforeend', div);
document.body.insertAdjacentElement('afterend', div);

// Inserta HTML en relación a otro elemento en el documento
document.body.insertAdjacentHTML('position', 'text');

// Inserta texto en relación a otro elemento en el documento
document.body.insertAdjacentText('position', 'text');

// Alternativa comentada para insertar un elemento antes de otro en el documento
// document.body.insertBefore(div, el);
