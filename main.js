addEventListener("DOMContentLoaded", ()=>{
    //8. En cierta empresa se les paga a sus trabajadores de la siguiente forma: si el empleado es de planta,
    // la hora trabajada se le paga a $20000, si el empleado es administrativo, la hora trabajada se le paga
    // a $10000. Para calcular su pago es necesario conocer el total de horas trabajadas.
        let tipoEmpleado = prompt('ingrese el tipo de empleado ')
        if(tipoEmpleado == 'planta'){
            let horas1 = Number(prompt('ingrese las horas que trabajo '))
            let calculopago = horas1*20000
            console.log(`su pago es ${calculopago}`)
        }
        else if (tipoEmpleado == 'administrativo'){
            let horas2 = Number(prompt('ingrese las horas que trabajo '))
            let calculopago1 = horas2*10000
            console.log(`su pago es ${calculopago1}`)
        }
        else{
            console.log('ingrese un tipo de  empleado entre (planta/administrativo)...')
        }
})