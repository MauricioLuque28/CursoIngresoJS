function mostrar()
{
	var numeroIngresado;
	var i;
	var primo;

	primo = true;
	numeroIngresado = prompt ("Ingrese un numero:");
	numeroIngresado = parseInt (numeroIngresado);
	if (numeroIngresado > 1) {
	
		for (i=2; i<numeroIngresado; i++) {
			if (numeroIngresado % i == 0) {
				primo = false;
			}
			if (i == numeroIngresado - 1) {
				if (primo == false) {
					alert (numeroIngresado + " es compuesto");
					primo = true;
				}
				else {
					alert (numeroIngresado + " es primo");
				}
			}
		}
	}
	else {
		alert (numeroIngresado + " no es primo");
	}
}//FIN DE LA FUNCIÓN