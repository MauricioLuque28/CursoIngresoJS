/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    var largo;
    var ancho;
    var alambreParcial;
    var alambreTotal;

    largo = parseInt (txtIdLargo.value);
    ancho = parseInt (txtIdAncho.value);

    alambreParcial = (2 * largo + 2 * ancho);
    alambreTotal = 3 * alambreParcial;
    
    alert ("La cantidad de alambre a comprar es " + alambreTotal);
}
function Circulo () 
{
    var radioString;
    var radioNumerico;
    var alambre;
    var alambreFinal;

    radioString = txtIdRadio.value;
    radioNumerico = parseFloat (radioString);
    alambre = 2 * Math.PI * radioNumerico;
    alambreFinal = alambre * 3;

    alert ("La cantidad de alambre a comprar es " + alambreFinal);
}
function Materiales () 
{
	
}