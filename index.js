const empresas = []; //colección

class Empresa {
    constructor(nombre, pais_origen) {
        this.nombre = nombre;
        this.pais_origen = pais_origen;
    }
}

const toyota = new Empresa("Toyota", "Japón");
const volvo = new Empresa("Volvo", "Italia");

empresas.push(toyota);
empresas.push(volvo);

console.log(empresas[0]);
console.log(empresas[1]);