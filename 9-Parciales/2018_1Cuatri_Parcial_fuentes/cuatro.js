/* Pedir dos números y mostrar el resultado:
Si son iguales los muestro concatenados.
Si el primero es mayor, los resto,
de lo contrario los sumo.
Si la suma es mayor a 10 ,además de mostrar el resultado, muestro el mensaje
"la suma es xxx y supero el 10".
*/
function mostrar()
{
    var numeroUno;
    var numeroDos;
    var resultado;

    numeroUno = prompt ("Ingrese el primer numero");
    numeroDos = prompt ("Ingrese el segundo numero");

    if (numeroUno == numeroDos) {
        alert ("Los numeros son " + numeroUno + " y " + numeroDos);
    }
    else {
        if (numeroUno > numeroDos) {
            alert ("La resta es " + numeroUno - numeroDos);
        }
        else {
            if (numeroUno < numeroDos) {
                alert ("La suma es " + resultado);
            }
            else {
                if (resultado > 9) {
                    alert ("La suma es " + resultado + " y supero el 10");
                }
                else {
                    alert ("La suma no supera el 10")
                }
            }
        }
    }
}
