let nota1 = parseInt(prompt("Ingrese la primera nota: "))
let nota2 = parseInt(prompt("Ingrese la segunda nota: "))
let nota3 = parseInt(prompt("Ingrese la tercera nota: "))

let notaTotal = (parseInt(nota1) + parseInt(nota2) + parseInt(nota3)) / 3

if (notaTotal >= 3) {
    console.log("Ganó la materia.");
} else {
    console.log("Reprobó la materia.");
}
