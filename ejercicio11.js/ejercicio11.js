let longi = parseInt(prompt("Ingrese la longi de la varilla:"))
let diametro = parseInt(prompt("Ingrese el diámetro de la varilla:"))
let densidad = 3.5;
let masa = (diametro * longitud) / densidad

if (longitud > 7.5 && longitud <= 9 && diametro >= 0.5 && diametro <= 1.3 && masa <= 5.8) {
    console.log("La pieza es aceptada.");
} else {
    console.log("La pieza es rechazada.");
}