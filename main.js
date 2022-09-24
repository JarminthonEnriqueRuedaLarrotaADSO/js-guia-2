addEventListener("DOMContentLoaded", ()=>{
    // 2.Calcule el mayor de tres números, permitiendo leer 3 valores diferentes
    let numero1 = Number(prompt('Ingrese un numero'))
    let numero2 = Number(prompt('Ingrese un numero'))
    let numero3 = Number(prompt('ingreese un numero'))
    if (numero1 > numero2 && numero1> numero3) {
        console.log(`El 1er numero "${numero1}" es el mayor`);
    } 
    else if ( numero2 > numero1 && numero2 > numero3) {
        console.log(`El 2do numero "${numero2}" es el mayor `);
    }
    else {
        console.log(`El  3er numero "${numero3}" es el mayor`);
    }
})