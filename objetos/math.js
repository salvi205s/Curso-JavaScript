console.log(
    Math.PI, // Imprime el valor de PI (~3.14159)
    Math.abs(-15), // Devuelve el valor absoluto de -15 (15)
    Math.round(15.5), // Redondea 15.5 al entero más cercano (16)
    Math.round(15.4), // Redondea 15.4 al entero más cercano (15)
    Math.floor(15.9), // Redondea hacia abajo 15.9 al entero más cercano (15)
    Math.ceil(15.000001), // Redondea hacia arriba 15.000001 al entero más cercano (16)
    Math.pow(2, 3), // Calcula 2 elevado a la potencia de 3 (8)
    Math.sqrt(9), // Calcula la raíz cuadrada de 9 (3)
    Math.min(3, 5, 1, 9, 6), // Devuelve el valor mínimo de los argumentos (1)
    Math.max(3, 5, 1, 9, 6), // Devuelve el valor máximo de los argumentos (9)
    Math.log(1), // Calcula el logaritmo natural de 1 (0)
    Math.log10(100), // Calcula el logaritmo en base 10 de 100 (2)
    Math.sin(Math.PI / 2), // Calcula el seno de PI/2 (1)
    Math.cos(Math.PI), // Calcula el coseno de PI (-1)
    Math.tan(Math.PI / 4) // Calcula la tangente de PI/4 (1)
);

// Genera un número aleatorio entre 0 (inclusive) y 1 (exclusive) y lo imprime en la consola
console.log(Math.random());

// Declara una función llamada getRandom que devuelve un número aleatorio entre un rango dado
function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Imprime un número aleatorio entre 1 y 100
console.log(getRandom(1, 10));
