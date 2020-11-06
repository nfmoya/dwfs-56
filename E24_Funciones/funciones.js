// Funciones 4 maneras de definirlas.
function suma(x, y) {
    return x + y;
}
console.log(suma(10, 5));

let suma1 = function (x, y) {
    return parseInt(x) + parseInt(y);
};

console.log(suma1(8, 10));

const suma3 = (x, y) => {
    return x + y;
};
console.log(suma3(10, 10));

let suma4 = (x, y) => x + y;

console.log(suma4(15, 6));

// try catch
// Excepciones
let sumar = function (x, y) {
    if (isNaN(x)) {
        throw new Error("El valor x no es un numero");
    }
    if (isNaN(y)) {
        throw new Error("El valor y no es un numero");
    }
    return parseInt(x) + parseInt(y);
};

try {
    let total = sumar(1, "asdf");
    console.log("total: " + total);
} catch (error) {
    console.log("Error al ejecutar la suma" + error);
}

// Hoisting
function sayHi(name){
    console.log("Hola " + name);
}
sayHi("Pedro");

sayHi2("Pepe");

function sayHi2(name){
    console.log("Hola " + name);
}


