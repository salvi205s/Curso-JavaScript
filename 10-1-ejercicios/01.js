const obj = {
    nombre: 'Salva',
}

function Extender() {

    this.login= ()=>{
        console.log("loqueando ", this.nombre);
    }

    this.logout= ()=>{
        console.log("logout ", this.nombre);
    }
 

}

Extender.call(obj);
console.log(obj);

obj.login();
obj.logout();