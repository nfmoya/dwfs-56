/* Ingresar mediante prompt números indefinidamente hasta que el usuario ingrese “Stop”.
Almacenar todos los datos en un array y mostrarlos al final.
 */

// Verifica si el numero ingresado por parametro es un Number.
function esNumero(numero) {
    //console.log("Estoy en la funcion 'esNumero'");
    return !isNaN(numero);
}

var array_numeros = [];
do {
    var dato = prompt("Ingrese valor");
    if (esNumero(dato)) {
        array_numeros.push(dato);
    }
} while (dato != 'stop');

console.log(array_numeros);