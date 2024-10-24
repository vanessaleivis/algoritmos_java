let numero = parseInt(prompt("Ingrese un número:" ))
if (numero < 0) {
    console.log("Número negativo: " + numero)
    console.log("Número positivo: " + Math.abs(numero))
}