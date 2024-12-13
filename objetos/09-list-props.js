const punto = { 
    // Se crea un objeto llamado 'punto' con tres propiedades
    x: 10, // Propiedad 'x' con valor 10
    y: 15, // Propiedad 'y' con valor 15
    dibujar() { 
        // Método 'dibujar' que imprime un mensaje en la consola
        console.log('dibujando');
    }
};

// delete punto.dibujar; 
// Línea comentada que eliminaría el método 'dibujar' del objeto 'punto'

if ('dibujar' in punto) { 
    // Verifica si el método 'dibujar' existe en el objeto 'punto'
    punto.dibujar(); 
    // Si existe, llama al método 'dibujar'
}

// let keys = Object.keys(punto); 
// obtendría las claves del objeto 'punto' y las almacenaría en 'keys'

// console.log(Object.keys(punto)); 
// Imprime en la consola las claves del objeto 'punto'

// Itera sobre las claves del objeto 'punto'
for (let llave of Object.keys(punto)) {
    // Imprime cada clave y su valor correspondiente
    console.log(llave, punto[llave]);
}

// Itera sobre las entradas (pares clave-valor) del objeto 'punto'
for (let entry of Object.entries(punto)) {
    // Imprime cada entrada (par clave-valor)
    console.log(entry);
}

// ESTA ES LA MAS RECIENTE
// Itera sobre las claves del objeto 'punto'
for (let llave in punto) {
    // Imprime cada clave y su valor correspondiente
    console.log(llave, punto[llave]);
}
