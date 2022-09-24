addEventListener("DOMContentLoaded", ()=>{
    // 12.Restarle al primer número al segundo (siempre y cuando el primero sea mayor que él segundo, en
    // caso contrario indicar con un mensaje que la operación no es posible realizarla.
    var i
    for(i=1;i<=1;i+=1) {
        let numero1 = Number(prompt('Ingrese el primer numero'))
        let numero2 = Number(prompt('Ingrese el segundo numero'))
        if (numero1 > numero2){
            let solucion = numero1-numero2
            console.log(`El resultado de la resta es: "${solucion}"`)
        }
        else{
            console.log(`no es posible realizar la operacion...`)
        }
    }
})