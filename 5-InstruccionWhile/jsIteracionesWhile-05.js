/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	var sexoIngresado;
	sexoIngresado = prompt("ingrese f ó m .");

	while (sexoIngresado != "f" && sexoIngresado != "m") {
		
		sexoIngresado = prompt ("Ingrese un sexo correcto");
	}

	txtIdSexo.value=sexoIngresado;
}//FIN DE LA FUNCIÓN