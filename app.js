
/*function imprimirTabla(base, limite){
   
for (let i = 1; i<=limite; i++){

    let resultado = base * i;

    console.log(base + " x " + i + " = " + resultado);

}
}

imprimirTabla(3,10);*/


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


/*function calificacion(nota){
    notaLetra = "";


if (nota>=90){
    notaLetra = "A";
} else if(nota>=80){
    notaLetra="B";
} else if(nota>=70){
    notaLetra="C";
} else if (nota>=60){
    notaLetra="D"
} else{
    notaLetra="F";
}


console.log(nota + " Es igual a = " + notaLetra);
    }

    calificacion(100);
    calificacion(80);
    calificacion(59);*/

let equipos = ["Chivas", "America", "tecos"];
let salarios = [1000, 2000, 3000];

for (let i = 0; i<equipos.length; i++ ){
    console.log(equipos[i] + " = "+ salarios[i]);

}


