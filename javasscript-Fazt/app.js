class Product {
    constructor(name, price, year) {
        // Asigna los valores de los parámetros a las propiedades del objeto
        this.name = name;
        this.price = price;
        this.year = year;
    }
}

class UI {
    addProduct(product) {
        // Obtiene el elemento con el id 'product-list'
        const productList = document.getElementById('product-list');
        // Crea un nuevo elemento 'div'
        let div = document.createElement('div');
        // Asigna contenido HTML al 'div', usando las propiedades del producto
        div.innerHTML = `
            <div class="card">
                <div class="card-header">
                    <p>Nombre: ${product.name}</p>
                    <p>Price: ${product.price}</p>
                    <p>Year: ${product.year}</p>
                    <a href="#" class="btn btn-danger" name="delete">Del</a> 
                </div>
            </div>
        `;
        // Añade el nuevo 'div' al elemento 'product-list'
        productList.appendChild(div);
    }

    resetForm() {
        // Resetea el formulario con el id 'product-form'
        document.getElementById('product-form').reset();
    }

    deleteProduct(element) {
        if (element.name === "delete") {
            // Pedir confirmación antes de eliminar 
            if (confirm('¿Estás seguro de que deseas eliminar este producto?')) {
                // Elimina el elemento 'div' del producto
                element.parentElement.parentElement.parentElement.remove();
                // Muestra un mensaje de éxito
                this.showMessage('Producto borrado', 'danger');
            } else {
                // Muestra un mensaje de cancelación
                this.showMessage('Operación cancelada', 'info'); 
            }
        }
    }

    showMessage(message, cssClass) {
        // Crea un nuevo 'div' para el mensaje
        const div = document.createElement('div');
        // Asigna una clase CSS al 'div'
        div.className = `alert alert-${cssClass} mt-4`;
        // Añade el mensaje de texto al 'div'
        div.appendChild(document.createTextNode(message));
        // Selecciona los contenedores donde se insertará el mensaje
        const container = document.querySelector('.container');
        const app = document.querySelector('#app');
        // Inserta el mensaje antes del elemento 'app' en el 'container'
        container.insertBefore(div, app);
        // Elimina el mensaje después de 3 segundos
        setTimeout(() => {
            document.querySelector('.alert').remove();
        }, 3000);
    }
}

// Añade un evento al formulario para el evento 'submit'
document.getElementById('product-form').addEventListener('submit', function(e) {
    // Previene el comportamiento predeterminado del formulario
    e.preventDefault();
    // Obtiene los valores de los campos del formulario
    const name = document.getElementById('name').value;
    const price = document.getElementById('price').value;
    const year = document.getElementById('year').value;
    // Crea una nueva instancia de la clase UI
    const ui = new UI();

    // Verifica si todos los campos están llenos
    if (name && price && year) {
        // Crea una nueva instancia de la clase Product
        const product = new Product(name, price, year);
        // Añade el producto a la lista
        ui.addProduct(product);
        // Resetea el formulario
        ui.resetForm();
        // Muestra un mensaje de éxito
        ui.showMessage('Producto agregado', 'success');
    } else {
        // Muestra un mensaje de error
        ui.showMessage('Campos vacíos', 'danger');
    }
});

// Añade un evento a la lista de productos para manejar el clic en los botones de eliminar
document.getElementById('product-list').addEventListener('click', function(e) {
    // Crea una nueva instancia de la clase UI
    const ui = new UI();
    // Llama a la función deleteProduct pasando el elemento clicado
    ui.deleteProduct(e.target);
});
