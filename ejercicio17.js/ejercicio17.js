let num1 = parseInt(prompt("Ingrese el primer número:"))
let num2 = parseInt(prompt("Ingrese el segundo número:"))
let num3 = parseInt(prompt("Ingrese el tercer número:"))

if (num1 % num2 === 0) {
    console.log(num1 + " es divisible por " + num2)
}
if (num1 % num3 === 0) {
    console.log(num1 + " es divisible por " + num3)
}
if (num2 % num3 === 0) {
    console.log(num2 + " es divisible por " + num3)
}
