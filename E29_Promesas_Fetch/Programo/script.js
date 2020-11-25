/* https://docs.github.com/en/free-pro-team@latest/rest */

/*Traer información de la API de github*/
//Hacer fetch de la información de un usuario de github por nombre
//Hacer fetch de la información de los followers de ese usuario (con el endpoint devuelto en el fetch anterior)
// y hacer console.log del nombre de usuario de los primeros 5 followers.
const URL_GIT = "https://api.github.com/";

function getUserByName(user) {
    fetch(URL_GIT + "users/" + user)
        .then((response) => response.json()) // transforma mensaje json a un objeto.
        .then(json => {
            console.log(json);
            getUserFirst5Followers(json.followers_url);
        }).catch((error) => {
            console.error(error);
        })
}

// Funcion para buscar los 5 followers.
function getUserFirst5Followers(url) {
    fetch(url)
        .then(response => response.json())
        .then(json => {
            console.log("FOLLOWERS:");
            for (let i = 0; i < 5; i++) {
                console.log(json[i].login);
            }
        }).catch(err => {
            console.error('fetch failed', err);
        });
}

getUserByName("nfmoya");