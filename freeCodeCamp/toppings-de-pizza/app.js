

// const toppings = Array.from(document.getElementsByClassName('toppings'));

// toppings.forEach(topping => {
//     topping.addEventListener('click', function (e) {
//         console.log(e.target.textContent);
//     });
// });

const toppings = document.getElementsByClassName('toppings');

for (const topping of toppings) {
    topping.addEventListener('click', (e) => {
        console.log(e.target.textContent);
    });

}