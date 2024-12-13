// Crear un nuevo elemento <p>
let el = document.createElement('p');

// Establecer el texto interno del elemento
el.innerText = "Elemento creado";

// Añadir el nuevo elemento <p> al final del body del documento
document.body.append(el);

// Alternativas comentadas para establecer el contenido del elemento
// el.innerText = "<ul><li>Hola mundo</li></ul>"; // Esta línea no funcionará como se espera porque `innerText` no interpreta HTML
// el.innerHTML = "<ul><li>Hola mundo</li></ul>"; // Esta línea sí interpreta HTML y creará una lista desordenada con un ítem

// Aplicar estilos directamente al elemento
el.style = 'background-color: red; font-weight: bold;';

// Asignar una clase al elemento
el.className = 'parrafo';

// Asignar un ID al elemento
el.id = 'mi-parrafo';

// lo siguiente no sirve!
// el.mipropiedad = 'mi propiedad';

// Establece un nuevo atributo llamado 'mipropiedad' con el valor 'mi propiedad'
el.setAttribute('mipropiedad', 'mi propiedad');

// Obtiene el valor del atributo 'mipropiedad'
el.getAttribute('mipropiedad');

// Verifica si el atributo 'mipropiedad' existe en el elemento
el.hasAttribute('mipropiedad');

