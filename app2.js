
/*function describirPersona(p){
    //console.log(`${p.nombre} tiene una edad de ${p.edad} y mide ${p.estatura}`);
    console.log(p.nombre + " tiene una edad de " + p.edad + " Y mide " + p.estatura);
}

let persona = {

    nombre: "Monchis",
    edad: 77,
    estatura: 1.90
}
 
describirPersona(persona);*/

let persona1 = {
    nombre: "Ramon",
    edad: 34
};


let persona2 = {
    nombre: "Vicky",
    edad: 24
};


let persona3 = {
    nombre: "Daniel",
    edad: 36
};

let personas = [persona1, persona2, persona3];


for(i=0; i<personas.length; i++){

    let persona = personas[i];
    console.log(`${persona.nombre} -- ${persona.edad}`);
   
}