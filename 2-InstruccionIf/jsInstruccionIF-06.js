function mostrar()
{
	var edad;

	edad = parseInt (txtIdEdad.value);

	if (edad > 17)
	{
		alert ("Es mayor de edad")
	}
	else 
	{
		if (edad < 13)
		{
			alert ("Es menor")
		}
		else
		{
			alert ("Es adolescente")
		}
	}
}//FIN DE LA FUNCIÓN