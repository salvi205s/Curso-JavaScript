function paraAbsoluto(arr) {
    let copiArray=[]
    arr.map((n, index)=> copiArray[index]=Math.abs(n));
   

    return copiArray;
}

const ns = [-2, 3, 5, -15];

const absolutos = paraAbsoluto(ns);

console.log(absolutos);
