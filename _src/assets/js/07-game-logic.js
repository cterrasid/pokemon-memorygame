function compareCardsId(e) {
    let secondCardId = e.currentTarget.firstChild.id;
    const secondPokeCard = e.currentTarget.firstChild;
    const secondAdaCard = e.currentTarget.lastChild;
    const firstPokeCard = originalList.firstChild;
    const firstAdaCard = originalList.lastChild;
    //si el valor de firstCardId es diferente de 0 lo comparo con el siguiente id
    if (firstCardId !== 0) {
        //comparo el valor de la segunda con la primera
        if (secondCardId !== firstCardId) {
            //si son diferentes, se voltean, si no, se quedan destapadas
            setTimeout(function () {
                hideCards(firstPokeCard, secondPokeCard, 'show', 'hide');
                showCards(firstAdaCard, secondAdaCard, 'show', 'hide');
            }, 1000);
        }
        //Establezco condicion de inicio
        firstCardId = 0;

    } else { 
        // si el valor de firstCardId es igual a 0, asignamos el valor del id de la prmera carta que se voltea
        firstCardId = e.currentTarget.firstChild.id;
        //Guardo el liel al que se le dio click para darle la vuelta si es necesario
        originalList = e.currentTarget;
    }
}