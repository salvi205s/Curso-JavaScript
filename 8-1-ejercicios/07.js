
const usuarios = [
    { edad: 17, nombre: 'Nico', plan: 'premium' },
    { edad: 13, nombre: 'Chanchito', plan: 'free' },
    { edad: 25, nombre: 'Felipe', plan: 'gold' },
    { edad: 32, nombre: 'Fernanda', plan: 'free' }
];

function groupBy(arr, prop) {

    return arr.reduce((acc, el) => {
        let tipo =el[prop]        
        if (!acc[tipo]) acc[tipo]=[]
        acc[tipo].push(el)
        return acc;
    }, {})
}

const grouped = groupBy(usuarios, 'plan');
console.log({ grouped });
