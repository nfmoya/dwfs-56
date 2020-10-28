
/*FUNCTION */
var input_name = prompt("Ingrese su nombre");

function call_name(name) {
    alert("Function call_name dice: Hola " + name);
    console.log("Function call_name dice: Hola " + name);
}

/*llamar una función */
call_name(input_name);


var numero1 = prompt("Ingrese 1er numero");
var numero2 = prompt("Ingrese 2do numero");

if (esNumero(numero1) && esNumero(numero2)) {
    alert(suma(numero1, numero2));
} else {
    alert("LO SIENTO NO SE PUDO EJECUTAR LA SUMA!!!");
}

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

