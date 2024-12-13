const user={
    nombre: "Hola",
    apellido: "mundo",
    getNombreCompleto(){
        return `${this.nombre} ${this.apellido}`
    }
}

console.log(user.getNombreCompleto());
