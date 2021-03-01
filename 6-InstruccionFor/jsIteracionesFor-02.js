function mostrar()
{
	var i;
	var contador;

	contador=10;

	for (i=0; i<10; ) {
		document.write (contador + " ");
		contador--;

		if (contador == 0) {
			document.write ("<br>");
			i++;
			contador = 10;
		}

	}
}