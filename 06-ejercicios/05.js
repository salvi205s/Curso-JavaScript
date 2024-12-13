let objeto = {
    id: 1,
    name: 'chanchito',
    login: function () { },
    logout: function () { },
}

let propiedad = 'name';

function tieneProp(obj, propiedad) {

    let props = Object.keys(obj);

    for (const prop of props) {
        if (propiedad == prop) {
            return true;

        }
    }

    // return false;

    // Otra forma de hacerlo:
    return Object.hasOwnProperty.call(obj, propiedad);

    // Otra forma de hacerlo:
    // return Object.prototype.hasOwnProperty.call(obj, propiedad);

    // Otra forma de hacerlo:
    // return Object.getPrototypeOf(obj).hasOwnProperty(propiedad);

    // Otra forma de hacerlo:
    // return Reflect.has(obj, propiedad);

    // Otra forma de hacerlo:
    // return Object.keys(obj).includes(propiedad);

    // Otra forma de hacerlo:
    // return Object.getOwnPropertyNames(obj).includes(propiedad);

    // Otra forma de hacerlo:
    // return Object.getOwnPropertySymbols(obj).includes(propiedad);

}

console.log(tieneProp(objeto, propiedad));
