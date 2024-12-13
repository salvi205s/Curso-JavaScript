// function User(name) {
//     this.name=name;
//     this.instancia=function(){}
// }

// User.prototype.login=function(){
//     console.log("Hola mundo");

// }

// const u =new User('Chanchito Feliz');

// u.login()

// Lo mismo pero con class

class User {
    constructor(name) {
        this.name = name;
        this.instancia = function () { }
    }

    // Las variables son de la clase
    activo=true;

    logout=()=>{
        console.log("logout");
        
    }

    // Este metodo es parte del prototipo
    login(){
        console.log("Hola mundo");
    }
}

const u = new User('Chanchito Feliz');

console.log(u);

