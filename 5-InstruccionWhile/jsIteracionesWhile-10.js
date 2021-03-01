/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	//declarar contadores y variables 
	var respuesta;
	var numeroIngresado;
	var sumaNegativos;
	var sumaPositivos;
	var cantidadPos;
	var cantidadNeg;
	var cantidadCeros;
	var cantidadPares;
	var promedioPos;
	var promedioNeg;
	var restaPosNeg;
	
	cantidadPares = 0;
	cantidadCeros = 0;
	cantidadNeg = 0;
	cantidadPos = 0;
	sumaNegativos = 0;
	sumaPositivos = 0;
	respuesta= true;

	do {
		numeroIngresado = prompt ("Ingrese un numero:");
		numeroIngresado = parseInt (numeroIngresado);
		console.log ("nI" + numeroIngresado);
		
		if (numeroIngresado < 0) {
			sumaNegativos = sumaNegativos + numeroIngresado;
			cantidadNeg = cantidadNeg + 1;
			console.log ("SN" + sumaNegativos);
			console.log ("cN" + cantidadNeg);
		}
		else {
			if (numeroIngresado > -1) {
				sumaPositivos = sumaPositivos + numeroIngresado;
				cantidadPos = cantidadPos + 1;
				console.log ("SP" + sumaPositivos);
				console.log ("cP" + cantidadPos);
			}
			if (numeroIngresado == 0) {
				cantidadCeros = cantidadCeros + 1;
				console.log ("cC" + cantidadCeros);
			}
			if (numeroIngresado % 2 == 0) {
				cantidadPares = cantidadPares + 1;
				console.log ("cPs" + cantidadPares); 
			}
			
		}
		
		respuesta = confirm ("Continuar?"); 

	} 

	while (respuesta);

	promedioNeg = sumaNegativos / cantidadNeg;
	promedioPos = sumaPositivos / cantidadPos;
	restaPosNeg = sumaPositivos - sumaNegativos;

	console.log (sumaNegativos);
	console.log (sumaPositivos);
	console.log (cantidadNeg);
	console.log (cantidadPos);
	console.log (cantidadCeros);
	console.log (cantidadPares);
	console.log ("pN" + promedioNeg);
	console.log ("pP" + promedioPos);
	console.log ("rPN" + restaPosNeg);

	// document.write("la suma de negativos es :"+sumaNegativos);
}//FIN DE LA FUNCIÓN