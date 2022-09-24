addEventListener("DOMContentLoaded", ()=>{
//7. Calcular todos los pagos hechos de un restaurante y que si el consumo ingresado excede los
// $130.000 el descuento será del 15%, de lo contrario no hay descuento.
    let pago = Number(prompt('ingrese el valor a pagar '))
    if (pago>130000){
        let porcentaje = pago*0.15
        let descuento = pago-porcentaje
        console.log(`El valor a pagar con descuento es ${descuento} y el valor original era ${pago}`) 
    }
    else{
        console.log(`el valor a pagar es ${pago}`)
    }
})