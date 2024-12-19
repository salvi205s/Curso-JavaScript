// URL de la API para obtener usuarios
const API_URL = "https://jsonplaceholder.typicode.com/users";

// Función serialize que convierte los elementos del formulario en un objeto
let serialize = target =>
    // Convierte la colección HTML de elementos del formulario en un array y luego aplica reduce
    Array.from(target.elements).reduce((acc, el) => {
        // Si el elemento no tiene un nombre, se omite
        if (!el.name) return acc;
        // Asigna el valor del elemento al acumulador con el nombre del elemento como clave
        acc[el.name] = el.value;
        // Retorna el acumulador para la siguiente iteración
        return acc;
    }, {}); // Inicializa el acumulador como un objeto vacío

// Clase User para manejar usuarios
class User {
    // Propiedades estáticas privadas
    static #url = API_URL; // URL de la API
    static #users = []; // Array para almacenar los usuarios
    static #ul = document.createElement('ul'); // Elemento UL para mostrar usuarios
    static #form = document.createElement('form'); // Elemento FORM para el formulario
    static initialValues = {
        name: '',
        email: ''
    }

    // Constructor que recibe los datos del usuario
    constructor(data) {
        this.name = data.name;
        this.email = data.email;
    }

    // Método estático para obtener todos los usuarios de la API
    static async getAll() {
        try {
            const response = await fetch(this.#url);
            if (!response.ok) {
                throw response;
            }

            this.#users = await response.json();
            return this.#users;
        } catch (error) {
            console.error("Error al obtener usuarios:", error);
        }
    }

    // Método estático para renderizar un usuario en un elemento LI
    static renderUser(u) {
        const li = document.createElement('li');
        li.innerText = u.name;
        return li;
    }

    // Método estático para renderizar todos los usuarios en el elemento UL
    static render() {
        const users = this.#users;
        users.forEach(u => this.#ul.appendChild(this.renderUser(u)));
        return this.#ul;
    }

    // Método estático que se ejecuta al enviar el formulario
    static onSubmit(e) {
        e.preventDefault();
        let data = serialize(e.target);
        let user = new User(data);
        const errors = user.validate();
        if (Object.keys(errors).length > 0) {
            this.#form.innerHTML = this.renderHtml({ data, errors });
            return;
        }

        user.save();
    }

    // Método de instancia para guardar el usuario
    save() {
        return User.save(this);
    }

    // Método estático asíncrono para guardar un usuario en la API
    static async save(user) {
        try {
            const response = await fetch(this.#url, {
                method: 'POST', // Método POST para enviar datos
                headers: { 'Content-Type': 'application/json' }, // Cabecera indicando que el contenido es JSON
                body: JSON.stringify(user) // Convierte el objeto usuario a JSON
            });
            const data = await response.json();
            this.#users.unshift(data); // Añade el nuevo usuario al principio del array
            this.#ul.prepend(this.renderUser(data)); // Añade el nuevo usuario renderizado al principio del elemento UL
        } catch (e) {
            console.error('Error al guardar usuario:', e); // Muestra el error en la consola
        }
    }

    // Método de instancia para validar el usuario
    validate() {
        let errors = {};
        if (!this.name) errors.name = "Nombre obligatorio";
        if (!this.email) errors.email = "Email obligatorio";
        return errors;
    }

    // Método estático para renderizar el formulario HTML
    static renderHtml({ data, errors }) {
        return `<form>
        <div>
            <label for="name">Nombre:</label>
            <input type="text" name="name" value="${data.name}">
            ${errors.name || ''}
            <p></p>

            <label for="email">Email:</label>
            <input type="email" name="email" value="${data.email}">
            ${errors.email || ''}
            <p></p>

            <input type="submit" value="Enviar">
        </div>
    </form>`;
    }

    // Método estático para renderizar el formulario
    static renderForm() {
        this.#form.onsubmit = this.onSubmit.bind(this);
        this.#form.innerHTML = this.renderHtml({
            data: this.initialValues,
            errors: {}
        });
        return this.#form;
    }
}

// Función principal que se ejecuta al cargar la página
async function main() {
    const users = await User.getAll(); // Obtiene todos los usuarios de la API
    const template = User.render(); // Renderiza la lista de usuarios
    const form = User.renderForm(); // Renderiza el formulario
    document.body.insertAdjacentElement('afterbegin', template); // Añade la lista de usuarios al DOM
    document.body.insertAdjacentElement('afterbegin', form); // Añade el formulario al DOM
}

main(); // Llama a la función principal
