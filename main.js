addEventListener("DOMContentLoaded", ()=>{
    // 5. Escriba un algoritmo que calcule el área de un rectángulo siempre y cuando los lados sean positivos:
    // área triangulo= lado * lado.
    let lado1 = Number(prompt('ingrese el lado 1 del rectangulo'))
    let lado2 = Number(prompt('ingrese el lado 2 del rectangulo'))
    if (lado1 > 0 && lado2 >0){
        let areaRectangulo = (lado1*lado2)
        console.log(`El valor del area del rectangulo es ${areaRectangulo}`)
    }
    else{
        console.log('ingrese solo valores positivos')
    }
})