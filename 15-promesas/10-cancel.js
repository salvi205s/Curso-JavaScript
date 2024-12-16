// Crear un nuevo AbortController para controlar la solicitud
let controller = new AbortController();
let { signal } = controller;

// Definir una función asíncrona para obtener los "todos"
async function getTodos() {
    // URL del endpoint de la API
    const url = 'https://jsonplaceholder.typicode.com/todos';
    try {
        // Realizar la solicitud fetch con la señal de control
        const response = await fetch(url, { signal });
        // Convertir la respuesta a formato JSON
        const data = await response.json();
        // Imprimir los datos en la consola
        console.log(data);
    } catch (e) {
        // Manejar cualquier error que ocurra durante la solicitud
        console.log('error:', e);
    }
}

// Llamar a la función getTodos para ejecutar la solicitud
getTodos();
controller.abort();