// https://pokeapi.co/docs/v2#pokemon
const URL_API_POKEMON = "https://pokeapi.co/api/v2/pokemon/";

let pokeCtn = document.getElementById('pokeCtn');

let pokemon1 = 25;
let pokemon2 = 4;
let pokemon3 = 88;

let fetch1 = fetch(URL_API_POKEMON + pokemon1)
    .then(response => response.json());

let fetch2 = fetch(URL_API_POKEMON + pokemon2)
    .then(response => response.json());

let fetch3 = fetch(URL_API_POKEMON + pokemon3)
    .then(response => response.json());

Promise.all([fetch1, fetch2, fetch3])
    .then((data) => {
        for (let i = 0; i < data.length; i++) {
            addToDOM(data[i]);
        }
    }).catch((error) => {
        console.log("Error en ejecutar todas las promesas: " + error);
    });


function addToDOM(info) {
    let ctn = document.createElement('div');

    let name = document.createElement('h2');
    name.textContent = info.name + " #" + info.id;

    let img = document.createElement('img');
    img.setAttribute('src', info.sprites.front_default);

    ctn.appendChild(name);
    ctn.appendChild(img);

    pokeCtn.appendChild(ctn);
}