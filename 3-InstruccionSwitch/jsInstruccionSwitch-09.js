function mostrar()
{
	var estacion;
	var destino;
	var estadia;
	var precioFinal;
	var descuento;
	var aumento;
	
	estacion = txtIdEstacion.value;
	destino = txtIdDestino.value;
	estadia = 15000;

	switch (estacion) {
		case "Invierno":
			switch (destino) {
				case "Bariloche":
					aumento = 20;
				break;
				case "Cataratas":
				case "Cordoba":
					descuento = 10;
				break;
				default:
					descuento = 20;
				break;
			}
		break;
		case "Verano":
			switch (destino) {
				case "Bariloche":
					descuento = 20;
				break;
				case "Mar del plata":
					aumento = 20;
				break;
				default:
					aumento = 10;
				break;
			}
		break;
		case "Otoño":
		case "Primavera":
			switch (destino) {
				case  "Cordoba":
					precioFinal = estadia;
				break;
				default:
					aumento = 10;
				break;
			}
		break;
	}

	if (aumento != 0){
		precioFinal = estadia + (estadia * aumento / 100);
	}
	else if (descuento != 0){
		precioFinal = estadia - (estadia * descuento / 100);
	}
	else {
		precioFinal = estadia;
	}

	alert ("Precio final es " + precioFinal);

}//FIN DE LA FUNCIÓN