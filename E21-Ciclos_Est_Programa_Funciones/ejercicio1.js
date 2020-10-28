/* Crear un script que permita ingresar solamente
 5 valores mediante prompt y nos muestre la suma total de todos los valores ingresados */

 var total = 0;

for (let index = 0; index < 5; index++) {
    var numero = prompt("Ingrese numero");
    total = suma(total, numero);
}

alert(total);

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