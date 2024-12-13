// Definición de la clase 'Restaurants'
class Restaurants {
    static cantidad = 12;
    // Constructor de la clase 'Restaurants'
    constructor(name) {
        this.name = name; // Inicializa la propiedad 'name' con el valor del parámetro 'name'
    }

    // Método de instancia 'getTimetable'
    getTimetable() { // Obtener horario
        console.log('horario restaurante'); // Imprime 'horario restaurante' en la consola
    }

    // Método estático 'getRestaurant'
    static getRestaurant(id) {
        return new Restaurants('BBQ'); // Retorna una nueva instancia de 'Restaurants' con el nombre 'BBQ'
    }
}

// Crea una instancia de 'Restaurants' llamando al método estático 'getRestaurant'
const r = Restaurants.getRestaurant(12); // Llama al método 'getRestaurant' con el id 12
