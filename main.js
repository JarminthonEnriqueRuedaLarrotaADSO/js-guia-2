addEventListener("DOMContentLoaded", ()=>{
    // 1.Determinar si un número es positivo y menor que 100. 
    let numero = Number(prompt('ingreese un numero para calcular si es mayor a 100', ))
    if (numero<100 && numero> 0) {
        console.log(`el numero  "${numero}" es positivo y es menor a 100`);
    } 
    else {
        console.log(`el numero "${numero}" no es mayor a 100`);
    }
})