/* Genera un array con al menos 10 datos de diferentes tipos.
Tu script debe dar los siguientes outputs:

La suma de todos los valores numéricos
Un nuevo array con todos los datos no numéricos
 */

let my_array = [];
var total = 0;
for (let index = 0; index < 5; index++) {

    let dato = prompt("Ingrese un dato");

    if(esNumero(dato)){
        total = suma(total, dato)
    }else{
        my_array.push(dato);
    }

}
alert("La suma de los numeros es: "+ total);
alert("Datos ingresados: "+ my_array);

function suma(n1, n2){
    console.log("Estoy en la funcion 'suma'");
    var suma = parseInt(n1) + parseInt(n2);
    return suma;
}

// Verifica si el numero ingresado por parametro es un Number.
function esNumero(numero){
    console.log("Estoy en la funcion 'esNumero'");
    return !isNaN(numero);
}