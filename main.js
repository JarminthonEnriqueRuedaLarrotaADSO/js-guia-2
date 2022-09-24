addEventListener("DOMContentLoaded", ()=>{
    // 9. Realizar el algoritmo que lea N números, calcule y escriba la suma de los pares y el producto de los
    // impares. Numero par es aquel que su residuo igual a cero (num mod !=0)
    var i
    var b = 0
    var a = 0
    var acum = 0
    var acum1 = 1
    let n = Number(prompt('ingrese el numero de numeros que va a ingresar'))
    for(i=1;i<=n;i+=1) {
        let numero = Number(prompt('ingrese el numero para calcular si es par'))
        console.log(`${i}`)
        if(numero % 2 == 0){
            acum += numero
            a = a+=1
        }
        else{
            acum1 *= numero
            b = b+=1
        }
    }
    console.log(`la cantidad de numeros pares es ${a} y la suma es : ${acum}`)
    console.log(`la cantidad de numeros impares es ${b} y su producto es: ${acum1}`)
})