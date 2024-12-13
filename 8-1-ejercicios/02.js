const miArray = [
    "Hola",
    12,
    "Mundo",
    {},
    { id: 15 },
    ['lala'],
]

function dividePorTipo(arr) {

    for (const i of arr) {

        return {
            numeros: arr.filter(n => typeof n == "number"),
            strings: arr.filter(s => typeof s == "string"),
            objett: arr.filter(o => typeof o == "object"),
        }
    }
}

const nuevoArray = dividePorTipo(miArray);
console.log(nuevoArray);
