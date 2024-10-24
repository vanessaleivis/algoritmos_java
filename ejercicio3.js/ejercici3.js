let sueldo = prompt("Ingrese el sueldo del empleado:");
if (sueldo < 300000) {
    sueldo *= 1.15;
    console.log("Sueldo con aumento: " + sueldo);
} else {
    console.log("Sueldo sin aumento: " + sueldo);
}