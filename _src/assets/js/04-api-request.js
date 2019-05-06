function requestToApi() {
    fetch(`${apiUrl}${radioInputChecked}.json`)
        .then(response => response.json())
        .then(result => {
            const shuffleCards = shuffle(result);
            for (const data of shuffleCards) {
                const dataImgUrl = data.image;
                const dataId = data.pair;
                paintElements('li', 'img', 'img', 'src', dataImgUrl, imgUrl, 'id', dataId, 'hide', 'show', ulCardsEl);
                getradioInputCheckedToSetLocalStorage();
            }
        });
}