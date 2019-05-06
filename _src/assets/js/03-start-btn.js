btnEl.addEventListener('click', handleBtnClick);

function handleBtnClick() {
    ulCardsEl.innerHTML = '';
    requestToApi();
}