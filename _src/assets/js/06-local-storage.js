//PARTIAL 4: LOCAL STORAGE
function getradioInputCheckedToSetLocalStorage() {
    //guardo mi seleccion en el Local Storage
    localStorage.setItem('numberOfCards', JSON.stringify(radioInputChecked));
}

document.addEventListener('load', getLocalStorage(), false);
//Creo una funcion para el local storage
function getLocalStorage() {
    if (localStorage.numberOfCards) {
        radioInputChecked = JSON.parse(localStorage.getItem('numberOfCards'));
        requestToApi();
    }
}