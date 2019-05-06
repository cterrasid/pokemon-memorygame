function compareCardsId(e) {
    let secondCardId = e.currentTarget.firstChild.id;
    const secondPokeCard = e.currentTarget.firstChild;
    const secondAdaCard = e.currentTarget.lastChild;
    const firstPokeCard = originalList.firstChild;
    const firstAdaCard = originalList.lastChild;

    if (firstCardId !== 0) {
        if (secondCardId !== firstCardId) {
            setTimeout(function () {
                hideCards(firstPokeCard, secondPokeCard, 'show', 'hide');
                showCards(firstAdaCard, secondAdaCard, 'show', 'hide');
            }, 1000);
        }
        firstCardId = 0;
    } else {
        firstCardId = e.currentTarget.firstChild.id;
        originalList = e.currentTarget;
    }
}