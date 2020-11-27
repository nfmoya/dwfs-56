// Local y Session storage con objetos y arrays.

class Producto {
    constructor(nombre, precio, descripcion) {
        this.nombre = nombre;
        this.precio = precio;
        this.descripcion = descripcion;
    }
}

let productos = [new Producto("Lavarropa", 1234, 'Lava todoooo'),
    new Producto("Cafetera", 1234, 'Altooo cafe!'),
    new Producto("Heladera", 1234, 'Enfria mas que polo norte')
];

console.log(productos);
let productosJson = JSON.stringify(productos);
console.log(productosJson);

localStorage.setItem("productos", productosJson);

let productos2 = JSON.parse(localStorage.getItem("productos"));
console.log(productos2);