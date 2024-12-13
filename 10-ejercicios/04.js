function suma(fn, ...rest) {
    const sum = rest.reduce((acc, el) => acc + el,0)
    
     fn(sum)


}
suma(resultado => {
    console.log(resultado);
}, 1, 2, 3, 4)