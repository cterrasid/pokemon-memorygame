function compareCardsId(e) {
    let valueToCompare = e.currentTarget.firstChild.id;
    const secondPokeCard = e.currentTarget.firstChild;
    const secondAdaCard = e.currentTarget.lastChild;
    const firstPokeCard = originalList.firstChild;
    const firstAdaCard = originalList.lastChild;
    //si el valor de pokeCardsId es diferente de 0 comparamos con el siguiente id
    if (pokeCardsId !== 0) {
        //establezco el valor del id dentro de una variable
        //lo comparo con pokeCardsId
        if (valueToCompare !== pokeCardsId) {
            //si son diferentes
            setTimeout(function () {
                hideCards(firstPokeCard, secondPokeCard, 'show', 'hide');
                showCards(firstAdaCard, secondAdaCard, 'show', 'hide');
            }, 1000);
        }
        pokeCardsId = 0; //volvemos a pones 0 como valor por defecto a pokeCardsId para empezar el proceso de nuevo.

    } else { // si el valor de pokeCardsId es igual a 0, asignamos el valor del id de la prmera carta que se voltea
        pokeCardsId = e.currentTarget.firstChild.id;
        originalList = e.currentTarget; ///-------- guardamos el liel al que se le dio click para darle la vuelta si es necesario.
    }

}