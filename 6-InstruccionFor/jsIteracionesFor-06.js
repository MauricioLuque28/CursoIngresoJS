/*
al presionar el botón pedir un número. mostrar los numeros pares desde el 1 al número ingresado, 
y mostrar la cantidad de numeros pares encontrados.
*/
function mostrar()
{
	var numeroIngresado;
	var cantidadPares;
	var i;

	cantidadPares = 0;
	numeroIngresado = prompt ("Ingrese un numero:");
	numeroIngresado = parseInt (numeroIngresado);

	for (i=1; i<=numeroIngresado; i++) {
		
		if (i % 2 == 0) {
			alert (i + " es par");
			cantidadPares++;
		}
		if (i == numeroIngresado) {
			alert ("cantidad de numeros pares encontrados: " + cantidadPares);
		}
	}
}//FIN DE LA FUNCIÓN