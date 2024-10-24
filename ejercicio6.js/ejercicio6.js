let entrada = parseFloat(prompt("Ingrese un número, flotante o carácter:"))
if (Number.isInteger(parseInt(entrada))) {
    let kelvin = parseInt(entrada) + 273.15
    console.log("Grados Kelvin: " + kelvin)
} else if (parseFloat(entrada)) {
    if (parseFloat(entrada) > 10.5) {
        console.log("El número flotante es mayor a 10.5")
    }
} else {
    console.log("Carácter ingresado: " + entrada)
}