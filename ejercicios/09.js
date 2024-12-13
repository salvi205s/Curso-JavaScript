/**
 * Crear algoritmo que tome un array de objetos y devuelva un array de pares.
 */


let pairs = [
    [1, { id: 1, name: "Nicolas" }],
    [2, { id: 2, name: "Felipe" }],
    [3, { id: 3, name: "Chanchito" }],
];

let array = [
    {
        id: 1,
        name: 'Nicolas',
    },
    {
        id: 2,
        name: 'Felipe',
    },
    {
        id: 3,
        name: 'Chanchito',
    }
];

function toCollection(arr) {
    let newArray = [];

    for (const id in arr) {
        let element = arr[id];

        newArray.push({ id: element[0], name: element[1].name })

    }

    return newArray

}

let resultado = toCollection(pairs);
console.log(resultado);
