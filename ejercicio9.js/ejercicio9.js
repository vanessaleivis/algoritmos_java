let a = parseInt(prompt("Ingrese el primer número: "))
let b = parseInt(prompt("Ingrese el segundo número: "))
let c = parseInt(prompt("Ingrese el tercer número: "))

let max = Math.max(a, b, c)
let min = Math.min(a, b, c)
let medio = a + b + c - max - min;

console.log("Números de mayor a menor: " + max + ", " + medio + ", " + min)