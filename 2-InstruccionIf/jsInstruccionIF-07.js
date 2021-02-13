function mostrar()
{
	var edad;
	var estCivil;

	edad = parseInt (txtIdEdad.value);
	estCivil = (estadoCivil.value);

	if (edad < 18 && estadoCivil != "Soltero")
	{
		alert ("Es muy pequeño para no ser soltero")
	}

}//FIN DE LA FUNCIÓN