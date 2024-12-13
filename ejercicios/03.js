function getbyIdx(arr, idx) {

    if (idx >= arr.length || idx < 0) {
        return "ese numero no existe";
    }

    return arr[idx];
}

// pasar indice para que devuelva el numero del array si existe
let resultado = getbyIdx([4, 2, 1, 5, 7], 0);

console.log(resultado); 
