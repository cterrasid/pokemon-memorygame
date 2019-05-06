function getradioInputCheckedToSetLocalStorage() {
    localStorage.setItem('numberOfCards', JSON.stringify(radioInputChecked));
}

document.addEventListener('load', getLocalStorage(), false);

function getLocalStorage() {
    if (localStorage.numberOfCards) {
        radioInputChecked = JSON.parse(localStorage.getItem('numberOfCards'));
        requestToApi();
    }
}