addEventListener("DOMContentLoaded", ()=>{
// 10.Calcular el valor total del valor de 5 productos, el IVA y el subtotal, visualizar los resultados de:
// Iva, Subtotal y Total de la compra de los artículos.

    var i
    var iva = 0
    var compra = 0
    for(i=1;i<=5;i+=1) {
        let producto = Number(prompt('ingrese el valor de los 5 productos'))
        compra += producto
    }
    let IVA = Number(prompt('ingrese el valor de la siguiente forma ( 0."valor del iva") del IVA'))
    let valoriva = compra*IVA
    let subtotal = compra+valoriva
    
    console.log(`El valor del iva es ${IVA}`)
    console.log(`El valor del total de la compra es : "${compra}"`)
    console.log(`El valor del subtotal es : "${subtotal}"`)
})