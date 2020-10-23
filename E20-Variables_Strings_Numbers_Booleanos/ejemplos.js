//números
var numero = 93;
//typeof
//console.log - imprimir mensaje en la consola
//concatenación de strings (+)
console.log("Tipo de dato de NUMERO es: " + typeof (numero));
console.log(numero);


//booleanos
var variableBooleana = true;
console.log("Tipo de variableBooleana es: " + typeof (variableBooleana));
console.log(variableBooleana);

//strings
var string = 'Hola';
console.log("Tipo de 'Hola': " + typeof (string));
console.log(string);
var string2 = '93';
console.log("Tipo de '93': " + typeof (string2));
console.log(string2);
var string3 = 'true';
console.log("Tipo de 'true': " + typeof (string3));
console.log(string3);


//conversión de tipo
//a número - parseInt
var string2 = '123';
var string2tonum = parseInt(string2);
console.log("Valor de '123' pasado a número: " + string2tonum);
console.log("Tipo de dato de string2tonum es: " + typeof(string2tonum));
var string3 = '123ab';
var string3tonum = parseInt(string3);
console.log("Valor de '123ab' pasado a número: " + string3tonum);
var string4 = 'ab123';
var string4tonum = parseInt(string4);
console.log("Valor de 'ab123' pasado a número: " + string4tonum);

//NaN
//isNaN, chequear si algo es NaN
console.log("Es '123' pasado a número NaN: " + isNaN(string2tonum));
console.log("Es '123ab' pasado a número NaN: " + isNaN(string3tonum));
console.log("Es 'ab123' pasado a número NaN: " + isNaN(string4tonum));

// CONFIRM.
var aceptaTerminos = confirm("Acepta los terminos?");

if(aceptaTerminos){
    alert("Bienvenido");
}else{
    alert("Que mala suerte");
}

//operador ternario - mismo codigo abreviado
console.log((aceptaTerminos === true) ? "Aceptó" : "No aceptó");

//operadores aritméticos: +, - , * , /
//conversion implicita ej '3' + 3 = '33'
console.log("4 + 4 = " + 4 + 4);
//una forma de evitarlo
console.log("4 + 4 = " + (4 + 4));
console.log("4 - 4 = " + (4 - 4));
console.log("4 / 4 = " + (4 / 4));
console.log("4 * 4 = " + (4 * 4));

//operadores de comparación: ==, ===, !==, !=, >, <, <=, >=
var num = 7;
if (num < 10) {
    console.log("El número " + num + " es menor a 10");
} else if (num > 10) {
    console.log("El número " + num + "  es mayor a 10");
} else {
    console.log("El número es 10");
}

if (num === '7') {
    console.log("El número " + num + " es igual a '7' en tipo y valor");
} else if (num == '7') {
    console.log("El número " + num + " es igual a '7' en valor y no en tipo");
} else {
    console.log("El número no es ni el número 7, ni la string '7'");
}

var edad = prompt("Ingrese su edad");

if(!isNaN(edad) > 18){
    alert("Bienvenido");
}else{
    alert("Que mala suerte");
}

//operadores lógicos: &&, ||, !
console.log("false && false = " + false && false);
console.log("false && true = " + false && true);
console.log("true && true = " + true && true);
console.log("false || false = " + false || false);
console.log("false || true = " + false || true);
console.log("true || true = " + true || true);
console.log("!true = " + !true);
console.log("!false = " + !false);
let hour = 12;
let isWeekend = true;
if (hour < 8 || hour > 18 || isWeekend) {
    console.log('La escuela está cerrada.');
} else {
    console.log('La escuela está abierta.');
}

//String method: .toLowerCase()
alert("Su nombre en minúscula es: " + name2.toLowerCase());
//String method: .toUpperCase()
alert("Su nombre en mayúscula es: " + name2.toUpperCase());
