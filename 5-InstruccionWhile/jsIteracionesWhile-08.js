/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	var continuar;
	var sumaPositivos;
	var multiplicacionNegativos;
	var numero;
	continuar = true;
	sumaPositivos=0;
	multiplicacionNegativos=1;

	do {
		numero = prompt ("Ingrese un numero:");
		numero = parseInt (numero);

		if (numero >= 0) {
			sumaPositivos = sumaPositivos + numero; 
		}
		else if (numero < 0) {
			multiplicacionNegativos = multiplicacionNegativos * numero;
		}

		continuar = confirm ("Continuar?");
	}
		while (continuar == true);

	txtIdSuma.value=sumaPositivos;
	txtIdProducto.value=multiplicacionNegativos;

}//FIN DE LA FUNCIÓN