// Creacion promesas.
//ejemplo de promesa resuelta
// Creacion promesa.
let promesa1 = new Promise((resolve, reject) => {

    setTimeout(function() {
        console.log("Timeout 900 milisegundos...");
        resolve("Promesa resuelta!");
    }, 900);

    setTimeout(function() {
        console.log("Timeout 500 milisegundos...");
        reject("Promesa RECHAZADA");
    }, 500);

});

// invocacion promesas
promesa1.then((response) => {
    console.log("Ejecucion de la promesa: " + response);
}).catch((response) => {
    console.log("Error al ejecutar promesa: " + response);
});


// Asincronia con promesas

//ejemplo de promesa rechazada
let promesa2 = new Promise((resolve, reject) => {
    setTimeout(function() {
        resolve("Promesa resuelta!");
    }, 350);
    setTimeout(function() {
        reject("Promesa rechazada!");
    }, 250);
});

promesa2.then((successMessage) => {
    console.log('Respuesta promesa2: ' + successMessage);
}).catch((errorMessage) => {
    console.log("¡Error de promesa2! " + errorMessage);
});

//ejemplo de promesa pendiente que termina resolviéndose
let promesa3 = new Promise((resolve, reject) => {
    console.log("pending...");
    setTimeout(function() {
        if (true) {
            resolve("Promesa resuelta!");
        } else {
            reject("Promesa rechazada!");
        }
    }, 3500);
});

promesa3.then((successMessage) => {
    console.log('Respuesta de promesa3: ' + successMessage);
}).catch((errorMessage) => {
    console.log("¡Error de promesa3! " + errorMessage);
});

// Fetch
function getDogImg(url) {
    fetch(url)
        .then((response) => response.json()) // transforma mensaje json a un objeto.
        .then(json => {
            console.log(json);
            let div = document.getElementById('imgCtn');
            let img = document.createElement('img');
            img.setAttribute('src', json.message);

            div.appendChild(img);
        }).catch((error) => {
            console.error(error);
        })
}

getDogImg("https://dog.ceo/api/breeds/image/random");