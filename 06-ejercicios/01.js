function Usuario(name) {
    this.name = name;
    this.id = Math.floor(Math.random(10)*10000) +"-"+ name;
}

let user = new Usuario('Felipe');
let user2 = new Usuario('Chanchito');

console.log(user, user2);