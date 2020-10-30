/*ciclo FOR para contar de 10 a 1*/
// for -> repite estrictamente la cantidad veces que le diga.
// ejecucion 1 a N
console.log("CICLO FOR:");
for (var i = 10; i > 0; i--) {
    if (i === 1) {
        console.log(i + " oveja");
    } else {
        console.log(i + " ovejas");
    }
}
/*ciclo FOR para contar de 1 a 10*/
console.log("CICLO FOR:");
for (var i = 0; i <= 10; i++) {
    if (i === 1) {
        console.log(i + " oveja");
    } else {
        console.log(i + " ovejas");
    }
}

/*ciclos while y do while, comparación de casos similares*/
/*DO WHILE*/
// Ejecucion 1 a N
var num_do_while = 5;
do {
    console.log("DO WHILE dice: " + num_do_while);
    num_do_while++;
} while (num_do_while < 5);
console.log("Después del DO WHILE dice: " + num_do_while);

/*WHILE*/
// Ejecucion 0 a N
var num_while = 5;
while (num_while < 5) {
    /*no se ejecuta ni una sola vez porque no cumple la condición*/
    console.log("WHILE dice: " + num_while);
    num_while++;
}
console.log("Después del WHILE dice: " + num_while);