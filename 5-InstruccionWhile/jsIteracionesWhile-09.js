/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	// declarar variables
	var flag;
	var numeroIngresado;
	var numeroMaximo;
	var numeroMinimo;
	var continuar;

	continuar = true;
	flag = "es el primero";

	do {
		numeroIngresado = prompt ("Ingrese un numero:");
		numeroIngresado = parseInt (numeroIngresado);

		if (flag == "es el primero") {
			numeroMaximo = numeroIngresado;
			numeroMinimo = numeroIngresado;
			flag = "ya pase";
			console.log (flag);
		}
		else {
			if (numeroIngresado > numeroMaximo) {
				numeroMaximo = numeroIngresado;
			}
			else if (numeroIngresado < numeroMinimo) {
				numeroMinimo = numeroIngresado;
			}
		}

		continuar = confirm ("Continuar?");

		console.log ("numero maximo " + numeroMaximo);
		console.log ("numero minimo " + numeroMinimo);
	}
		while (continuar);
	//iniciar variables
	
	txtIdMaximo.value=numeroMaximo;
	txtIdMinimmo.value=numeroMinimo;
}//FIN DE LA FUNCIÓN