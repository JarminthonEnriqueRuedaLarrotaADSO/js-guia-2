addEventListener("DOMContentLoaded", ()=>{
    // 13. En una tienda de HELADO da un descuento por compra a sus clientes con membresía dependiendo
    // de su tipo, sólo existen tres tipos de membresía, tipo A, tipo B y tipo C.
    // Los descuentos son los siguientes:
    // Tipo A 10% de descuento
    // Tipo B 15% de descuento
    // Tipo C 20% de descuento
    var i
    console.log(`tipos de membresía, tipo A, tipo B y tipo C.`)
    for(i=1;i<=1;i+=1) {
        let compra = Number(prompt('ingrese el costo de su compra'))
        let membresia = (prompt('ingrese el tipo de membresia a la que pertenece '))
    // MEMBRESIA TIPO A
        if (membresia == 'a'){
            let descuento =compra*0.10
            let aplicacionDescuento =compra-descuento
            console.log(`El valor a pagar es: ${aplicacionDescuento}`)
        }
    // MEMBRESIA TIPO B
        else if (membresia == 'b'){
            let descuento =compra*0.15
            let aplicacionDescuento =compra-descuento
            console.log(`El valor a pagar es: ${aplicacionDescuento}`)
        }
    // MEMBRESIA TIPO C
        else if (membresia == 'c'){
            let descuento = compra*0.20
            let aplicacionDescuento =compra-descuento
            console.log(`El valor a pagar es: ${aplicacionDescuento}`)
        }
}
})