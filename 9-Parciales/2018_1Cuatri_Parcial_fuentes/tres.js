function mostrar()
{
    var precio;
    var descuentoParcial;
    var descuentoFinal;
    var precioFinal;

    precio = prompt ("Ingrese precio");
    descuentoParcial = prompt ("Ingrese descuento");
    descuentoFinal = precio * descuentoParcial/100;
    precioFinal = precio - descuentoFinal;

    elPrecioFinal.value = precioFinal;
}
