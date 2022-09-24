addEventListener("DOMContentLoaded", ()=>{
    // 4. Cálculo de áreas - Elige una figura geométrica:" Triángulo y Círculo
    // ¿Qué figura quiere calcular (Escriba T o C)?
    // Triangulo = base * altura / 2
    // Circulo = PI * radio* radio
    
    let calculoArea = prompt('ingrese t para triangulo o c para circulo')
    // Triangulo
    if(calculoArea == 't'){
        let base = Number(prompt('ingrese el balor de la base '))
        let altura = Number(prompt('ingrese el valor de la altura'))
        let areaTriangulo = (base*altura)/2
        console.log(`El area del Triangulo es ${areaTriangulo}`)
    }
    // Circulo
    else if (calculoArea == 'c'){
        let radio = Number(prompt('ingrese el valor del radio'))
        let areaCirculo = (Math.PI*radio*radio)
        console.log(`El area del circulo es ${areaCirculo}`)
    }
})