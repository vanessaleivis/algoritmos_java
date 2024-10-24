let totalComision = 0
let ventasMenores = 0
let ventasMayores = 0

for (let i = 0; i < 50; i++) {
    let precio = prompt("Ingrese el precio de la venta " + (i + 1) + ":")
    if (precio < 2000) {
        totalComision += precio * 0.03;
        ventasMenores++;
    } else {
        totalComision += precio * 0.05;
        ventasMayores++;
    }
}

console.log("Comisión total: " + totalComision);
console.log("Ventas menores de 2000: " + ventasMenores);
console.log("Ventas mayores o iguales a 2000: " + ventasMayores);
