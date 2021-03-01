function mostrar()
{
	var numeroIngresado;
	var cantidadDivisores;
	var i;

	cantidadDivisores = 0;
	numeroIngresado = prompt ("Ingrese un numero:");
	numeroIngresado = parseInt (numeroIngresado);

	for (i=1; i<=numeroIngresado; i++) {
		
		if (numeroIngresado % i == 0) {
			alert (i + " es divisor de " + numeroIngresado);
			cantidadDivisores++;
		}
		if (i == numeroIngresado) {
			alert ("cantidad de numeros divisores encontrados: " + cantidadDivisores);
		}
	}
}//FIN DE LA FUNCIÓN