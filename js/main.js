let cantidadProductos = 0;
let valorProducto = 0;
let precioTotal = 0;
let cantidadDeCuotas = 0;

function calcularTotal() {
    let precioProducto = parseInt(prompt("Ingrese el precio del producto: "));

    while (precioProducto <= 0) {
        precioProducto = parseInt(prompt("Ingrese el precio del producto: "));
    }

    cantidadProductos = parseInt(prompt("Ingrese cantidad de productos: "));
    cantidadDeCuotas = parseInt(prompt("Ingrese cantidad de cuotas (3, 6 o 12)")); 
    precioTotal = precioProducto * cantidadProductos;

    if (cantidadDeCuotas === 3) {
        valorProducto = precioTotal;
    } else if (cantidadDeCuotas === 6) {
        valorProducto = precioTotal * 1.2;
    } else if (cantidadDeCuotas === 12) {
        valorProducto = precioTotal * 1.4;
    } else {
        prompt("Ingrese la cantidad de cuotas correcta");
    }
}

calcularTotal();

alert("Total a pagar: " + valorProducto + " en: " + cantidadDeCuotas + " cuotas");