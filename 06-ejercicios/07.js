// sin usar ... ni Object.assign
let objeto = { name: 'chanchito' };


function agregarId(obj) {

    if (typeof obj === 'object') {
        obj.id= Math.random() ;

    }

    return obj;
 
}


agregarId(objeto);
console.log(objeto);
