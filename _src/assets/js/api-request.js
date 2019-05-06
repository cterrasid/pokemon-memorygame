//PARTIAL 2: PETICION
function requestToApi() {
    //realizo la petición al servidor
    fetch(`${apiUrl}${radioInputChecked}.json`)
        //Que me responderá en un archivo .json
        .then(response => response.json())
        //La respuesta en sí, es la siguiente:
        .then(result => {
            //barajeo con shuffle
            const shuffleCards = shuffle(result);
            //recorro los elementos de la API, que son un array de objetos
            for (const data of shuffleCards) {
                const dataImgUrl = data.image;
                const dataId = data.pair;
                //creo los elementos de la API que me interesan
                paintElements('li', 'img', 'img', 'src', dataImgUrl, imgUrl, 'id', dataId, 'hide', 'show', ulCardsEl);
                //invoco la funcion para guardar el LS
                getradioInputCheckedToSetLocalStorage();
            }
        });
}