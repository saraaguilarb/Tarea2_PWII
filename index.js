const empresas = []; //colección

class Empresa {
    constructor(nombre, pais_origen, lanzamiento) {
        this.nombre = nombre;
        this.pais_origen = pais_origen;
        this.lanzamiento = lanzamiento;
    }
}

const toyota = new Empresa("Toyota", "Japón", "1958");
const volvo = new Empresa("Volvo", "Italia", "1965");

empresas.push(toyota);
empresas.push(volvo);

delete empresas[0].lanzamiento; // eliminar propiedad del elemento
empresas[0].lanzamiento = "1940"; // creando propiedad para el elemento


console.log(empresas[0]);
console.log(empresas[1]);
