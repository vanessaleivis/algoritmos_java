let cal1 = parseInt(prompt("Ingrese la primera nota:"))
let cal2 = parseInt(prompt("Ingrese la segunda nota:"))
let cal3 = parseInt(prompt("Ingrese la tercera nota:"))

let mayor1 = Math.max(cal1, cal2, cal3)
let menor = Math.min(cal1, cal2, cal3)
let suma = parseInt(cal1) + parseInt(cal2) + parseInt(cal3) - mayor1 - menor
let promedio = (mayor1 + suma) / 2

console.log("Promedio de las dos notas más altas: " + promedio)
