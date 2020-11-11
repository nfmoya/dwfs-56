/* funcion que agrega un item al menu */
function addOptionMenu(opcion) {
    let menu = document.getElementById("menu");

    let newItem = document.createElement("li");
    newItem.textContent = opcion;

    menu.appendChild(newItem);
}

addOptionMenu("Contacto");
addOptionMenu("Help");

let img1 = "https://via.placeholder.com/300";
let img2 = "https://via.placeholder.com/300/FF0000";
let img3 = "https://via.placeholder.com/300/0000FF";

replaceImg(img2);

/* Funcion que reemplaza una imagen por otra que se envie por parametro */
function replaceImg(sourceImg) {
    setTimeout(() => {
        let imgToChange = document.getElementById("principal-img");
        imgToChange.setAttribute('src', sourceImg);
    }, 5000);
}

console.log("siguiente1");
console.log("siguiente2");

/* setTimeout(function, time); ->
1er parametro es la funcion que se va ejecutar cuando se cumpla el time (2do parametro) */
setTimeout(() => {
    let imgToChange = document.getElementById("principal-img");
    imgToChange.setAttribute('src', img3);

}, 2000);