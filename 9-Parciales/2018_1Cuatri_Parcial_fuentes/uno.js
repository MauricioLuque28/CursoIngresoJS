
function mostrar()
{
    var ancho;
    var largo;
    var perimetro;
    var anchoParseado;
    var largoParseado;

    anchoParseado = parseFloat (ancho);
    largoParseado = parseFloat (largo);

    ancho = prompt ("Ingrese el ancho");
    largo = prompt ("Ingrese el largo");

    perimetro = (2 * ancho + 2 * largo);

    alert (perimetro);
    
}
