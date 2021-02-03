/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    var precioUno;
    var precioDos;
    var precioTres;
    var sumaFinal;

    precioUno = parseInt (txtIdPrecioUno.value);
    precioDos = parseInt (txtIdPrecioDos.value);
    precioTres = parseInt (txtIdPrecioTres.value);
    sumaFinal = precioUno + precioDos + precioTres;

    alert ("La suma es " + sumaFinal);
}
function Promedio () 
{
	var precioUno;
    var precioDos;
    var precioTres;
    var promedioFinal;

    precioUno = parseInt (txtIdPrecioUno.value);
    precioDos = parseInt (txtIdPrecioDos.value);
    precioTres = parseInt (txtIdPrecioTres.value);
    promedioFinal = (precioUno + precioDos + precioTres) / 3;

    alert ("El promedio es " + promedioFinal);

}
function PrecioFinal () 
{
    var precioUno;
    var precioDos;
    var precioTres;
    var sumaParcial;
    var Iva;
    var precioIva;


    precioUno = parseFloat (txtIdPrecioUno.value);
    precioDos = parseFloat (txtIdPrecioDos.value);
    precioTres = parseFloat (txtIdPrecioTres.value);
    sumaParcial = precioUno + precioDos + precioTres;
    Iva = sumaParcial * 21/100;
    precioIva = sumaParcial + Iva;

    alert ("El precio con Iva es " + precioIva);
}