let objeto = {
    id: 1,
    name: 'chanchito',
    login: function () { },
    logout: function () { },
}

function cualesMetodos(obj) {
    for (const key in obj) {
        if (typeof obj[key] === 'function')
        console.log(key);

    }
}

cualesMetodos(objeto)
