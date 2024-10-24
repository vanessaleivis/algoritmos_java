let num1 = parseInt(prompt("Ingrese el primer número:"))
let num2 = parseInt(prompt("Ingrese el segundo número:"))
let num3 = parseInt(prompt("Ingrese el tercer número:"))

let medio = (num1 + num2 + num3) - Math.max(num1, num2, num3) - Math.min(num1, num2, num3);
console.log("Número medio: " + medio)