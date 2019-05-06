btnEl.addEventListener('click', handleBtnClick);

function handleBtnClick() {
    //limpio el listado para que no se repita el contenido
    ulCardsEl.innerHTML = '';
    //llamo a la funcion requestToApi para cargar las cartas que elija el usuario
    requestToApi();
}