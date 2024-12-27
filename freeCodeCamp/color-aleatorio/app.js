// Seleccionar elementos del DOM
const btn = document.getElementById('boton-color');
const color = document.getElementById('color');

btn.addEventListener('click', function () {
console.log('click');

  let digitos = '0123456789ABCDEF';
  let colorHex = '#';

  for (let i = 0; i < 6; i++) {
    let indiceColor = Math.floor(Math.random() * 16);
    colorHex += digitos[indiceColor];
  }

  color.textContent = colorHex;
  document.body.style.backgroundColor = colorHex;
  return colorHex;

});
