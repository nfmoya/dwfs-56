// Definir un objeto
let dog = {};
console.log(dog);

// agregar propiedad al objeto. Setter.
dog.nombre = "Beetoven";
console.log(dog);

// Objeto inicializado.
let cat = { nombre: 'Gardfield', edad: 5 };
console.log(cat);

// Mostrar propiedades especificamente mediante el punto 
// (objeto.propiedad). Getter
console.log('Yo tengo un "perro" llamado: ' + dog.nombre +
    ' y un gato llamado: ' + cat.nombre);

// Array de objetos.
let pets = [dog, cat];
console.log(pets);

for (let i = 0; i < pets.length; i++) {
    console.log('Mascota: ' + pets[i].nombre);
}

// Definir objeto a partir de una clase.
class Rectangulo {
    // Metodo constructor
    constructor(base, altura) {
        // Propiedades de la clase.
        this.base = base;
        this.altura = altura;
    }
    // Metodos
    area() {
        return this.base * this.altura;
    }
}

// Al hacer "new" se crea el objeto con las propiedades
// del constructor.

let rect1 = new Rectangulo(5, 8);
let rect2 = new Rectangulo(8, 2);
let rect3 = new Rectangulo(4, 4);

rect1.color = 'rojo';
console.log(rect1);
// Accediendo al metodo de la clase.
console.log("Area rect1: " + rect1.area());
rect1.base = 3;
console.log("Area rect1: " + rect1.area());
console.log("Area rect2: " + rect2.area());
console.log("Area rect3: " + rect3.area());



