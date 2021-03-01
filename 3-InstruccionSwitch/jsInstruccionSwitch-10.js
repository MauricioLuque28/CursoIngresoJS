function mostrar()
{
	var estacion;
	var destino;
	
	estacion = txtIdEstacion.value;
	destino = txtIdDestino.value;
	alert(estacion);

	switch (estacion) {
		case "Invierno":
			switch (destino) {
				case "Bariloche": {
					alert ("Se viaja")
				}
				break;
				default
					alert ("No se viaja")
				break;
			}
		break;
		case "Verano":
			switch (destino) { 
			 	case "Cataratas": {
					alert ("Se viaja");
				}
				break;
				case "Mar del plata": {
					alert ("Se viaja");
				}
				break;
				default
					alert ("No se viaja")
				break;
			}
		break;
		case "Primavera":
			switch (destino) {
				case "Bariloche": {
					alert ("No se viaja");
				}
				break;
				default
					alert ("Se viaja");
				break;
			}
		break;
	}	
}//FIN DE LA FUNCIÓN