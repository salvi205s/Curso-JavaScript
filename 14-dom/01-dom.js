// Selección de un elemento HTML por su ID
let htmlElement = document.getElementById('cuerpo');

// Selección de elementos HTML por su clase -
// Esto devuelve una colección de elementos similar a un array, pero no es un array!
let elementosRed = document.getElementsByClassName('red');

// Selección de elementos HTML por su nombre
// Esta línea está incompleta, pero generalmente se usa para seleccionar elementos por su atributo 'name'
let elementosChanchito =document.getElementsByName("chanchito");

// Selección de todos los elementos <p> del documento
let parrafos = document.getElementsByTagName('p'); //es lento

// Selección del primer elemento con el ID 'cuerpo'
let el = document.querySelector('#cuerpo'); //es lento

// Selección de todos los elementos <p> del documento utilizando querySelectorAll, que devuelve una NodeList
let els = document.querySelectorAll('p');

// Selección de todos los elementos <p> del documento utilizando getElementsByTagName, que devuelve una colección HTML viva
let plive = document.getElementsByTagName('p');

// Selección de todos los elementos <p> del documento utilizando querySelectorAll, que devuelve una NodeList estática
let pstatic = document.querySelectorAll('p');

// Imprime las variables plive y pstatic en la consola
console.log(plive, pstatic);

// Crea un nuevo elemento <p> y lo asigna a la variable nuevoP
let nuevoP = document.createElement('p');
// Añade el nuevo elemento <p> al final del body del documento
document.body.append(nuevoP);

// Imprime nuevamente las variables plive y pstatic en la consola
console.log(plive, pstatic);

console.log(htmlElement);
console.log(elementosRed);
console.log(elementosChanchito);
console.log(parrafos);
console.log(el);
