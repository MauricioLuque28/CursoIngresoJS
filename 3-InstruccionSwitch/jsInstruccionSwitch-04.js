function mostrar()
{
	//tomo el mes
	var mesDelAño =txtIdMes.value;

	switch (mesDelAño) {
		case "Febrero":
			alert ("tiene 29 dias")
			break;
		case "Abril":
			alert ("tiene 30 dias")
			break;
		case "Junio":
			alert ("tiene 30 dias")
			break;
		case "Septiembre":
			alert ("tiene 30 dias")
			break;
		case "Noviembre":
			alert ("tiene 30 dias")
		default:
			alert ("tiene 31 dias")
			break;
	}
}//FIN DE LA FUNCIÓN