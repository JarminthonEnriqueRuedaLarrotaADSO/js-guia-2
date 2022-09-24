addEventListener("DOMContentLoaded", ()=>{
    // 11.Programa para solicitar el nombre, apellido, edad y la nota promedio de 5 estudiantes de un curso
    // de computación.
    var i
    var acumNota = 0
    for(i=1;i<=5;i+=1) {
        let nombre = (prompt('ingrese su nombre '))
        let apellido = (prompt('ingrese su apellido'))
        let edad = Number(prompt('ingrese su edad'))
        let nota = Number(prompt('ingrese su nota'))
        acumNota += nota
        console.log(`${nombre} ${apellido} con la edad de "${edad}" tiene una nota de: ${nota} `)
    }
    let promedioNotas = acumNota/5
    console.log(`el promedio de las notas de los 5 estudiantes es de ${promedioNotas}`)

})