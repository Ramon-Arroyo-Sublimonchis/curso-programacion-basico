
function imprimirTabla(base, limite){
   
for (let i = 1; i<=limite; i++){

    let resultado = base * i;

    console.log(base + " x " + i + " = " + resultado);

}
}

imprimirTabla(3,10);


/*let base = 10;
let limite = 15;


for (let i = 1; i<=limite; i++){

let resultado = base * i;

console.log(base + "x" + i + " = " + resultado);*/


/*function sumar(a,b){
    a = 120;
    b = 150;
    return a + b;
}

function nombre(nombre){
    nombre = "Ramon";
    return nombre;

}

let total = sumar() + " " + nombre();
console.log(total);*/
