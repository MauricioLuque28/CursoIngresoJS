/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	var numeroIngresado;
	numeroIngresado = prompt("ingrese un número entre 0 y 10.");

	while (numeroIngresado > 10) {

		numeroIngresado = prompt ("Ingrese un numero entre 0 y 10:");
	}

	txtIdNumero.value = "El numero es valido";
	
}//FIN DE LA FUNCIÓN