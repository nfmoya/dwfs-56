console.log("SWITCH:");
var num1 = parseInt(prompt("Ingrese un número"));
var operation = prompt("Ingrese operación a realizar: - + / *");
var num2 = parseInt(prompt("Ingrese otro número"));

switch (operation) {
    case "+":
        console.log(num1 + " + " + num2 + " = " + (num1 + num2));
        break;
    case "-":
        console.log(num1 + " - " + num2 + " = " + (num1 - num2));
        break;
    case "/":
        console.log(num1 + " / " + num2 + " = " + (num1 / num2));
        break;
    case "*":
        console.log(num1 + " * " + num2 + " = " + (num1 * num2));
        break;
    default:
        console.log("Perdón, no conozco esa operación");
}

/* let mes = prompt("Ingrese el mes");
switch(mes){
    case 'Enero': case 'enero': case "Febrero": case "Marzo":
        console.log("Es verano");
        break;
    case 'Abril': case "Mayo": case "Junio":
            console.log("Otoño");
            break;
    default:
        console.log("No existe el mes ingresado");
        break;
} */