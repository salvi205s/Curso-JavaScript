// 'https://jsonplaceholder.typicode.com/todos/1'

const url = 'https://jsonplaceholder.typicode.com/todos/a';

fetch(url)
  .then(response => {
    if (response.ok) {
      // Verifica si la respuesta fue exitosa
      // return response.json();
      return response.text();
      // Retorna la respuesta en formato de texto
    }
    return Promise.reject(response.status);
    // Si la respuesta no fue exitosa, rechaza la promesa con el código de estado
  })
  .then(data => console.log(data))
  // Si la promesa se resuelve, imprime los datos en la consola
  .catch(message => console.log({ message }));
  // Si la promesa es rechazada, captura el error y lo imprime en la consola
