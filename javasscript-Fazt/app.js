
class Product {
    constructor(name, price, year) {
        this.name = name;
        this.price = price;
        this.year = year;
    }
}

class UI {
    addProduct(product) {

        const productList = document.getElementById('product-list')
        let div = document.createElement('div');
        div.innerHTML = `
                 <div class="card">
                    <div class="card-header">
                        <p>Nombre: ${product.name}</p>
                        <p>Price: ${product.price}</p>
                        <p>Year: ${product.year}</p>
                        <a href="#" class="btn btn-danger" name="delete">Del</a> 
                        
                    </div>
                </div>
        `
        productList.appendChild(div)
    }

    resetForm() {
        document.getElementById('product-form').reset();
    }

    deleteProduct(element) {
        if (element.name === "delete") {
            // Pedir confirmación antes de eliminar 
            if (confirm('¿Estás seguro de que deseas eliminar este producto?')) {
                element.parentElement.parentElement.parentElement.remove();
                this.showMessage('Producto borrado', 'danger');
            } else {
                this.showMessage('Operación cancelada', 'info'); 
            }
        }
    }
        showMessage(message, cssClass) {
            const div = document.createElement('div');
            div.className = `alert alert-${cssClass} mt-4`;
            div.appendChild(document.createTextNode(message));
            const container = document.querySelector('.container');
            const app = document.querySelector('#app');
            container.insertBefore(div, app);
            setTimeout(() => {
                document.querySelector('.alert').remove();
            }, 3000);
        }
    }

document.getElementById('product-form').addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('name').value
        const price = document.getElementById('price').value
        const year = document.getElementById('year').value
        const ui = new UI();

        if (name && price && year) {
            const product = new Product(name, price, year);
            ui.addProduct(product)
            ui.resetForm();
            ui.showMessage('Producto agreagado', 'success')
        } else {
            ui.showMessage('Campos vacios', 'danger')

        }
    })

document.getElementById('product-list').addEventListener('click', function(e) {
        const ui = new UI();
        ui.deleteProduct(e.target)
    })