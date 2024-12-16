const url = 'https://jsonplaceholder.typicode.com/todos';

// Utilizamos fetch para hacer una solicitud a la URL especificada
fetch(url, {
    method: 'POST',
    body: JSON.stringify({ title: 'hola mundo' }),
    headers: {
        'Content-Type': 'application/json',
        Authorization: 'api key'
    },
    cache: 'no-cache',
})
    .then(response => {
        // Verificamos si la respuesta fue exitosa
        if (response.ok) {
            // Descomentamos la línea si queremos la respuesta en formato JSON
            // return response.json();
            // En este caso, retornamos la respuesta en formato de texto
            return response.text();
        }
        // Si la respuesta no fue exitosa, rechazamos la promesa con el código de estado
        return Promise.reject(response.status);
    })
    // Manejo de la respuesta de la promesa resuelta
    .then(data => console.log(data))
    // Manejo de la respuesta de la promesa rechazada
    .catch(message => console.log({ message }));
