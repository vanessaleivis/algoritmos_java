let nombre = prompt("Ingrese el nombre: ")
let edad = parseInt(prompt("Ingrese la edad: "))
let sexo = prompt("Ingrese el sexo (Femenino/Masculino): ")
let estadoCivil = prompt("Ingrese el estado civil:")

if ((sexo === "Femenino" && estadoCivil === "Casado" && edad > 40) || (sexo === "Masculino" && estadoCivil === "Soltera" && edad < 50)) {
    console.log("Nombre: " + nombre);
}