// - Acceso a los elementos: id, class, tags, query
// Seleccion de nodos:
//document.getElementById
let parWithId = document.getElementById('parWithId');
console.log(parWithId);
parWithId.style.textTransform = 'uppercase';
parWithId.style.color = 'blue';

//document.getElementsByTagName
let paragraph = document.getElementsByTagName('p');
for (let i = 1; i < paragraph.length; i++) {
    paragraph[i].style.color = '#ff4f4f';
}

//document.getElementsByClassName
let parWithClass = document.getElementsByClassName('parWithClass');
for (let i = 0; i < parWithClass.length; i++) {
    parWithClass[i].style.textDecoration = 'underline';
}

//document.querySelector()
let parQuery = document.querySelector('p #parSpan');
parQuery.style.backgroundColor = '#5a5ada';
parQuery.style.color = '#fff';

//document.querySelectorAll()
let parrafosSpan = document.querySelectorAll('p #parSpanExtra');
for (let i = 0; i < parrafosSpan.length; i++) {
    parrafosSpan[i].style.backgroundColor = 'black';

}
// Atributos 
// element.attributes
let imgWithAtt = document.getElementById('imgWithAtt');
console.log("-attributes de un elemento: ");
console.log(imgWithAtt.attributes.src);


// Classes css, obtener, modificar, eliminar

// element.className vs element.classList
//console.log ambos tipos inicial

console.log("-className y classList del mismo elemento: ");
console.log(imgWithAtt.className);
console.log(imgWithAtt.classList);

//Asignado nueva clase con classname, borra el resto de las clases
imgWithAtt.className = 'newClass';
console.log("-className y classList tras agregar nueva clase: ");
console.log(imgWithAtt.className);


//Agregando una clase con classList
imgWithAtt.classList.add('gray');
imgWithAtt.classList.add('img');
imgWithAtt.classList.add('newClass');
console.log("-classList tras agregar nuevos elementos: ");
console.log(imgWithAtt.classList);


//Eliminando una clase con classList
imgWithAtt.classList.remove('newClass');
console.log("-classList tras eliminar un elemento: ");
console.log(imgWithAtt.classList);

//- Crear elementos.

// element.id
//ver id
let oldId = document.getElementById('oldId');
console.log("-Id del elemento: ");
console.log(oldId.id);

//cambiar id
console.log("-Nuevo Id del elemento: ");
oldId.id = 'newId';
console.log(oldId.id);

let elementList = document.getElementById('elementList');
// element.firstElementChild,
console.log("-Primer elemento de la lista: ");
console.log(elementList.firstElementChild);
elementList.firstElementChild.innerHTML = 'Primer elemento';

// element.lastElementChild
console.log("-Último elemento de la lista: ");
console.log(elementList.lastElementChild);
elementList.lastElementChild.innerHTML = 'último elemento';

//- Setear atributos.
// element.setAttribute(name, value) 
let imgToChangeAtt = document.getElementById('imgToChangeAtt');
imgToChangeAtt.setAttribute('src', 'https://dummyimage.com/200x120/5a5ada/aaa');
imgToChangeAtt.setAttribute('alt', 'Placeholder image moficada');


//document.createElement(tagName)
let firstP = document.createElement('p');
firstP.textContent = 'Primer Párrafo: creado e insertado desde el script.';

//element.appendChild()
let nodeCtn = document.getElementById('nodeCtn');
nodeCtn.appendChild(firstP);

//element.before()
let secondP = document.createElement('p');
secondP.textContent = 'Segundo Párrafo: creado e insertado BEFORE el primer Párrafo.';
firstP.before(secondP);

//element.after()
let thirdP = document.createElement('p');
thirdP.textContent = 'Tercer Párrafo: creado e insertado AFTER el primer Párrafo.';
firstP.after(thirdP);

//element.remove()
let liToRemove = document.getElementById('liToRemove');
liToRemove.remove();

//element.replaceChild
let newLi2 = document.createElement('li');
newLi2.textContent = 'Nuevo li, reemplazando a item4 con replaceChild';

let list = document.getElementById('list');
let liToReplace2 = document.getElementById('liToReplace2');
liToReplace2.remove();


// Animacion
//element.animate(keyframes, options)
document.getElementById("animation").animate([
    { transform: 'translatex(0px)' },
    { transform: 'translatex(300px)' },
    { transform: 'translatex(0px)' },
], {
    duration: 5000,
    iterations: Infinity
});

//- localStorage - sessionStorage

// setTimeout