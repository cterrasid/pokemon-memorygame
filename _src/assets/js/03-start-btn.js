//PARTIAL 3: INTERACCIONES
//Escucho el click del boton "Comenzar"
btnEl.addEventListener('click', handleBtnClick);

//Cuando haga click en "Comenzar":
function handleBtnClick() {
    //limpio el listado para que no se repita el contenido
    ulCardsEl.innerHTML = '';
    //llamo a la funcion requestToApi para cargar las cartas que elija el usuario
    requestToApi();
}