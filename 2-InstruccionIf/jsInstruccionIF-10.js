function mostrar()
{
	var notaRandom;
	var notaExamen;

	notaRandom = Math.floor(Math.random()*(10-1))+1;

	notaExamen = notaRandom;

	if (notaExamen >= 9 && notaExamen <= 10)
	{
		alert ("Excelente")
	}
	else
	{
		if (notaExamen >= 4)
		{
			alert ("APROBÓ")
		}
		else
		{
			alert ("Vamos, la proxima se puede")
		}
	}
}//FIN DE LA FUNCIÓN