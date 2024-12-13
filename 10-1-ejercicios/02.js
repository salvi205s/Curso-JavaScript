const obj = {
    nombre: 'Salva',
}

function extender(usuario) {

   const metodos={
    login: ()=>{
        console.log("login a ", usuario.nombre);
        
    }
   }

   return Object.assign(usuario, metodos)
}

const usuario = extender(obj);


console.log(usuario);
usuario.login();