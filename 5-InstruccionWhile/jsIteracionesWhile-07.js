/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	var contador;
	var acumulador;
	var respuesta;
	var numero;

	contador=0;
	acumulador=0;
	respuesta= true;

	do {
		numero = prompt ("Ingrese un numero:");
		numero = parseInt (numero);

		acumulador = acumulador + numero;

		contador = contador + 1;

		respuesta = confirm ("Continuar?")
	}
		while (respuesta == true);

	/* while (respuesta == "si") {
		numero = prompt ("Ingrese un numero:");
		numero = parseInt (numero);

		acumulador = acumulador + numero;

		contador = contador + 1;

		respuesta = prompt ("Quiere seguir ingresando?");
	} */

	txtIdSuma.value=acumulador;
	txtIdPromedio.value=acumulador/contador;

}//FIN DE LA FUNCIÓN