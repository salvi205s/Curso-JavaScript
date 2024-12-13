const usuarios = [
    { edad: 17, nombre: 'Nico', plan: 'premium' },
    { edad: 13, nombre: 'Chanchito', plan: 'free' },
    { edad: 32, nombre: 'Fernanda', plan: 'free' },
    { edad: 25, nombre: 'Felipe', plan: 'gold' },
];

function obtenerMayor(arr) {
    let mayor = arr[0];

    
     for (let usuario of arr) {
        if (usuario.edad>mayor.edad) {
            mayor=usuario
        }
     }


    return mayor;
}

const mayor = obtenerMayor(usuarios);
console.log(mayor);
