/*
Pedir por prompt el precio y el porcentaje de descuento, mostrar el precio final con descuento por id.
*/
function mostrar()
{
    var precio;
    var descuento;
    var descuentoFinal;
    var precioFinal;

    precio = parseInt (prompt ("Ingrese el precio:"));
    descuento = parseInt (prompt ("Ingrese el descuento:"));

    descuentoFinal = precio * descuento / 100;
    precioFinal = precio - descuentoFinal;

    elPrecioFinal.value = precioFinal;
}
