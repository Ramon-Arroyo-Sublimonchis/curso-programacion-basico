

class Carro {
    constructor(marca, tipo, puertas){
        this.marca = marca;
        this.tipo = tipo;
        this.puertas = puertas;
        this.creadoEn = "Mañana";
        this.encendido = false;
        this.gasolina = 100;
    }

    encenderCarro(){
        if(this.encendido){
            console.error("El carro ya estaba encendido");
            
        } else {
            this.encendido = true;
            console.log("El carro ya esta encendido");
        }

        return this;
    }

    realizarViaje(consumo){

    if(this.encendido){
        if(consumo > this.gasolina){
            console.log("No puede realizar este viaje: Gasolina " + this.gasolina);

        }else{

        this.gasolina = this.gasolina - consumo;
        return "Te queda " + this.gasolina;

        } 
    } else {
            console.log("El carro esta apagado");
        }
    
    }
     

}

let carro = new Carro("Vocho", "Deportivos", 2);

console.log(carro);

