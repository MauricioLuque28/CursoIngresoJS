/*
(IF)Pedir dos números y mostrar el resultado:
Si son iguales los muestro concatenados.
Si el primero es mayor, los divido,
de lo contrario los sumo.
Si la suma es menor a 50 ,además de mostrar el resultado, muestro el mensaje
"la suma es xxx y es menor a 50".
*/
function mostrar()
{
    var numeroUno;
    var numeroDos;

    numeroUno = prompt ("Ingrese el primer numero");
    numeroUno = parseInt (numeroUno);
    numeroDos = prompt ("Ingrese el segundo numero");
    numeroDos = parseInt (numeroDos);

    if (numeroUno == numeroDos) {
        alert ("Los numeros son " + numeroUno + " y " + numeroDos);
    }
    else {
        if (numeroUno > numeroDos) {
            alert (numeroUno / numeroDos);
        }
        else{
            if (numeroUno < numeroDos) {
                resultado = numeroDos + numeroUno;
                alert (resultado);
            }
            else {
                if (resultado < 50) {
                    alert ("La suma es " + resultado + " y es menor a 50");
                }
                else {
                    alert ("La suma da mayor a 50");
                }
            }
        }
    }
}