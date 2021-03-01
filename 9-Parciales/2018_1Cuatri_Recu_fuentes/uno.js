/*
Realizar el algoritmo que pida el ancho y el largo de un rectángulo 
por prompt y que muestre el perímetro por alert.
*/
function mostrar()
{
    var ancho;
    var largo;
    var perimetro;

    ancho = prompt ("Ingrese el ancho:");
    ancho = parseFloat (ancho);
    largo = prompt ("Ingrese el largo:");
    largo = parseFloat (largo);

    perimetro = 2 * (ancho + largo);

    alert ("El perimetro es de " + perimetro);
}
