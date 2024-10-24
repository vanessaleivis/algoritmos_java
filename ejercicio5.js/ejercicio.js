let num1 = parseInt(prompt("Ingrese el primer número: "))
let num2 = parseInt(prompt("Ingrese el segundo número: "))
let num3 = parseInt(prompt("Ingrese el tercer número: "))

let mayor = Math.max(num1, num2, num3)
let menor = Math.min(num1, num2, num3)

console.log("Número mayor: " + mayor)
console.log("Número menor: " + menor)

if (num1 === num2 && num2 === num3) {
    console.log("Todos los números son iguales.");
} else if (num1 === num2 || num2 === num3 || num1 === num3) {
    console.log("Hay números iguales.");
}