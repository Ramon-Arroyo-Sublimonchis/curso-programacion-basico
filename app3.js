let carro1 = {
    marca:"Toyota",
    tipo: "Sedan",
    puertas: 3
};

class Carro {
    constructor(marca, tipo, puertas){
        this.marca = marca;
        this.tipo = tipo;
        this.puertas = puertas;
        this.creadoEn = "Mañana";
    }

}

let carroNuevo = new Carro("Vocho", "Deportivos", 2);

console.log(carro1);
console.log(carroNuevo);