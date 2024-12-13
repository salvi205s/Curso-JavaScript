const ahora = new Date(); 
// Crea un nuevo objeto Date con la fecha y hora actuales.

const fecha = new Date('December 11 1986 14:15 GMT-0300'); 
// Crea un nuevo objeto Date con una fecha específica proporcionada como una cadena.

console.log(fecha); 
// Imprime el objeto 'fecha' en la consola, que representa el 11 de diciembre de 1986 a las 14:15 en la zona horaria GMT-0300.

const fecha2 = new Date(1986, 11, 25, 14, 15); 
// Crea un nuevo objeto Date con el año 1986, mes 11 (diciembre, ya que los meses en JavaScript son indexados desde 0), día 25, hora 14 y minuto 15.

const fecha3 = new Date(1986, 11, 25, 14+15, 15); 
// Crea un nuevo objeto Date similar a 'fecha2', pero con un cálculo de la hora 14+15, lo cual probablemente no es lo deseado y dará un valor incorrecto.

console.log(fecha3); 
// Imprime el objeto 'fecha3' en la consola.

console.log('datestring', fecha3.toDateString()); 
// Imprime la fecha en formato legible como cadena.

console.log('ISOString', fecha3.toISOString()); //ES EL MEJOR PARA MANDAR AL SERVIDOR
// Imprime la fecha en formato ISO 8601.

console.log('timestring', fecha3.toTimeString()); 
// Imprime la parte de la hora de la fecha en formato legible.

// fecha.getDate Para devolver la fecha
// fecha.setDate para cambiar la fecha