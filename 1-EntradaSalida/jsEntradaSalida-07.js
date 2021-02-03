/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var numero1 = parseInt (txtIdNumeroUno.value);
	var numero2 = parseInt (txtIdNumeroDos.value);

	alert ("La suma es " + (numero1 + numero2))
}

function restar()
{
	var numero1 = parseInt (txtIdNumeroUno.value);
	var numero2 = parseInt (txtIdNumeroDos.value);

	alert ("La resta es " + (numero1 - numero2))
	
}

function multiplicar()
{ 
	var numero1 = parseInt (txtIdNumeroUno.value);
	var numero2 = parseInt (txtIdNumeroDos.value);

	alert ("La multiplicacion es " + (numero1 * numero2))
}

function dividir()
{
	var numero1 = parseInt (txtIdNumeroUno.value);
	var numero2 = parseInt (txtIdNumeroDos.value);

	alert ("La division es " + (numero1 / numero2))
}

