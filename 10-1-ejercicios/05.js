
function ordenar(texto, fn) {
    
    let resultado=texto
    .toLowerCase()
    .split('') //convierte en array
    .sort()
    .filter(text => text!==' ')
    .join('') // convierte a texto

    console.log(resultado);
    
}

ordenar('hola mundo', console.log)