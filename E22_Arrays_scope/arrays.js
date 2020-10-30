// CREAR ARRAYS
/*diferentes formas de crear un array*/
let car_brands = [];
car_brands[0] = 'Audi';
car_brands[1] = 'Bugatti';
car_brands[2] = 'Ford';
console.log(car_brands);


let car_brands2 = ['Audi', 'Bugatti', 'BMW', 'Ford', 'Fiat', 'Hyundai', 'Lexus', 'Peugeot', 'Renault'];
console.log(car_brands2);

let colors = new Array();
colors[0] = 'azul';
colors[1] = 'amarillo';
colors[2] = 'verde';
colors[3] = 'rojo';
console.log(colors);

let colors2 = new Array('azul', 'amarillo', 'verde', 'rojo');
console.log(colors2);

/*INDEXOF y acceder a solo una posición*/
console.log("Index del color 'verde': " + colors.indexOf('verde'));
console.log("Color con index 2: " + colors2[2]);




// AGREGAR, ELIMINAR elementos.
/*UNSHIFT - agregar elemento al inicio*/
let shopping_list = new Array('leche', 'mostaza', 'fideos', 'arroz', 'arvejas', 'manzanas');
console.log("Lista de compras inicial: " + shopping_list);

/*UNSHIFT - agregar elemento al inicio*/
shopping_list.unshift('bananas');
console.log("Lista de compras tras unshift: " + shopping_list);

/*PUSH - agregar elemento al final*/
shopping_list.push('espinaca');
console.log("Lista de compras tras push: " + shopping_list);

/*SHIFT - eliminar elemento al inicio*/
shopping_list.shift();
console.log("Lista de compras tras shift: " + shopping_list);

/*POP - eliminar elemento al final*/
shopping_list.pop();
console.log("Lista de compras tras pop: " + shopping_list);

// RECORRER ARRAYS.
for (let i = 0; i < shopping_list.length; i++) {
    console.log("Producto " + i + ":" + shopping_list[i]);
}
let i = 0;
while(i < shopping_list.length){
    console.log("Producto " + i + ":" + shopping_list[i]);
    i++;
}

// OTROS: splice, length, sort, reverse
/*JOIN*/
let months = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
console.log("Meses unidos con join : " + months.join(' - '));

/*LENGTH*/
console.log("length del array meses: " + months.length);

/*SPLICE, recortar segunda mitad del año dejando la primera mitad del año*/
months.splice(6, 12);
console.log("Meses después del primer splice: " + months);

/*SPLICE, reemplazando un elemento 1 parametro es el indice que quiero reemplazar
2 parametros la cantidad de elementos, 3 parametro es el valor que va a reemplazar.*/
months.splice(0, 6, '1er semestre');
console.log("Meses después del segundo splice: " + months);

months.splice(1, 6, '2do semestre');
console.log("Meses después del segundo splice: " + months);

/*SPLICE, agregar un elemento sin eliminar ninguno*/
months.splice(1, 0, 'nuevo mes');
console.log("Meses después del tercer splice: " + months);

/*SORT y REVERSE*/
let countries = ['Mexico', 'España', 'Argentina', 'Chile', 'Colombia', 'Venezuela', 'Perú', 'Costa Rica', 'Bolivia', 'Cuba', 'Ecuador', 'Uruguay', 'Paraguay'];

console.log("Array reverse: " + countries.reverse());
console.log("Array sort y reverse: " + countries.sort().reverse());
console.log("Array sort: " + countries.sort());

