function createUsuario(name) {
    return {
        name,
        id: Math.floor(Math.random()*100000) +"-"+ name,
    }
}

let user = createUsuario('Felipe');
let user2 = createUsuario('Chanchito');

console.log(user, user2);