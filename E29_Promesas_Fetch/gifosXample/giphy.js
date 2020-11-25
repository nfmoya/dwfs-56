// https://developers.giphy.com/

// Busqueda por palabra especifica
let word = "homer";
fetch("https://api.giphy.com/v1/gifs/search?api_key=" + KEY + "&q=" + word)
    .then(response => response.json())
    .then(json => {
        console.log(json);
    });


// Busqueda sugerida por palabra especifica
let word2 = "hom";
fetch("https://api.giphy.com/v1/tags/related/" + word2 + "?api_key=" + KEY)
    .then(response => response.json())
    .then(json => {
        for (let i = 0; i < json.data.length; i++) {
            console.log("Sugerencia: " + json.data[i].name);
        }

    }).catch(err => {
        console.error('fetch failed', err);
    });