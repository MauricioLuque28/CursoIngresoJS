function mostrar()
{
	var edad;
	var estCivil;

	edad = parseInt (txtIdEdad.value);
	estCivil = (estadoCivil.value);

	if (edad > 17 && estCivil == "Soltero")
	{
		alert ("Es soltero y no es menor.")
	}
}//FIN DE LA FUNCIÓN