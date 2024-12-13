
let validate = data => {
    let errors = {};
    if (!data.name) {
        errors.name = 'Campo obligatorio';
    }
    if (!data.lastname) {
        errors.lastname = 'Campo obligatorio';
    }
    return errors;
}

let initialValues = {
    name: '',
    lastname: '',
}

let render = ({ data, errors }) => {
    return `
    <form name='formulario'>
        <div>
            <label>Nombre:</label>
            <input name="name" value="${data.name}"/>
            ${errors.name || ""}
        </div>
        <div>
            <label>Apellido:</label>
            <input name="lastname"  value="${data.lastname}"/>
            ${errors.lastname || ""}

        </div>
        <div><button>Enviar</button></div>
    </form>
    `
}

let errors = {};
let form = document.createElement('form');
form.innerHTML = render({ data: initialValues, errors });
document.body.append(form);

form.addEventListener('submit', e => {
    e.preventDefault(); // Evita que el formulario se envíe de forma predeterminada
    let data = Array.from(e.target.elements).reduce((acc, el) => {
        if (!el.name) return acc; // Si el elemento no tiene nombre, lo omite
        acc[el.name] = el.value; // Asigna el valor del elemento al objeto 'acc' usando el nombre del elemento como clave
        return acc; // Devuelve el acumulador para la siguiente iteración
    }, {}); // Inicializa el acumulador como un objeto vacío
    // console.log(data); // Muestra el objeto 'data' en la consola
    const errors = validate(data);

    if (Object.keys(errors).length > 0) {
        // Si el objeto 'errors' tiene alguna clave, es decir, hay errores
        let html = render({ errors, data });
        // Llama a la función 'render' con los errores y datos, y guarda el resultado en 'html'
        form.innerHTML = html;
        // Inserta el contenido HTML generado en el elemento 'form'
        return;
    }

});
