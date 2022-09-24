addEventListener("DOMContentLoaded", ()=>{
//3. Desarrollar un diagrama que lea 3 valores diferentes e indique cual es el mayor de ellos, el menor o si son iguales
    let numero1 = Number(prompt('Ingrese un numero'))
    let numero2 = Number(prompt('Ingrese un numero'))
    let numero3 = Number(prompt('ingreese un numero'))
    if (numero1 > numero2 && numero1> numero3) {
        console.log(`El 1er numero "${numero1}" es el mayor`);
    } 
    else if ( numero2 > numero1 && numero2 > numero3) {
        console.log(`El 2do numero "${numero2}" es el mayor `);
    }
    else if(numero3 > numero1 && numero3 > numero2) {
        console.log(`El  3er numero "${numero3}" es el mayor`);
    }
    // si son Menores
    if(numero1<numero2 && numero1<numero3){console.log(`El  1er numero "${numero1}" es el menor`);}
    else if(numero2<numero1 && numero2< numero3){console.log(`El  2do numero "${numero2}" es el menor`);}
    else{console.log(`El  3er numero "${numero3}" es el menor`);}
    // si son iguales
    if(numero1 == numero2){console.log(`El  1er numero ${numero1} y el segundo "${numero2}" son iguales `);}
    else if(numero3 == numero1){console.log(`El  3er numero "${numero3}" es igual al primer numero "${numero1}"`);}
    else if(numero3 == numero2){console.log(`El  3er numero "${numero3}" y el segundo "${numero2}" son iguales`);}
})