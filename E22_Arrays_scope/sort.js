// Ordenar de menor a mayor los numeros ingresados 
var numeros = [];
do {
    var ingreso = prompt("Número");
    if (!isNaN(ingreso) && ingreso != "0") {
        var numero = parseInt(ingreso);
        console.log(typeof (numero));
        numeros.push(numero);
    }
} while (ingreso != "0");
console.log("lista original=" + numeros);

/* ordenar numbers sobreescribiendo metodo sort.
El metodo sort internamente tiene un algoritmo que usa un 'compare' que va a comparar parametro 1 y 2.
    - Si el 1er parametro es mayor al 2do entonces devolvera un valor positivo(mayor a 0)
    - Si el 1er parametro es menor al 2do entonces devolvera un valor negativo(menor a 0)
    - Si ambos parametros son iguales entonces devolvera 0(cero). 
*/
let ordenarNumbers = function (a, b) {
    return a - b
}
numeros.sort(ordenarNumbers);
console.log("lista ordenada2=" + numeros);

//eliminar el primero
numeros.shift();
console.log("shift=" + numeros);
//eliminar el último
numeros.pop();
console.log("pop=" + numeros);

