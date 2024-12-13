// Definición de la clase 'Restaurants'
class Restaurants {
    // Campo privado para almacenar el horario
    #timetable;

    // Constructor de la clase 'Restaurants'
    constructor(name) {
        this.name = name; // Inicializa la propiedad 'name' con el valor del parámetro 'name'
    }

    // Getter para obtener el horario
    get timetable() {
        return this.#timetable; // Devuelve el valor del campo privado '#timetable'
    }

    // Setter para establecer el horario
    // Definición de un método set para 'timetable'
    set timetable(value) {
        // Crea un objeto Date utilizando el valor proporcionado
        let date = new Date(value);

        // Obtiene el valor en milisegundos del objeto Date
        let time = date.getTime();

        // Verifica si el valor del tiempo es NaN (Not-a-Number)
        if (Number.isNaN(time)) {
            // Lanza un error si el valor no es un número válido
            throw new Error('Fecha inválida');
        }

        // Asigna el objeto Date al campo privado '#timetable' si el valor es válido
        this.#timetable = date;
    }

}

// Crea una instancia de 'Restaurants' con el nombre 'BBQ'
const r = new Restaurants('BBQ');

r.timetable= '1 dec 2024';
console.log(r.timetable);
