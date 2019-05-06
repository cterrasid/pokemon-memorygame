//Manejo el click sobre las cartas para que se volteen
function flipCardWhenClick(e) {
    //Guardo a los hijos de la lista (las imagenes)
    const cards = e.currentTarget.children;
    //Itero sobre ellos para establecer una condicion
    for (const card of cards) {
        //si el valor de la clase de alguno es 'show'
        if (card.classList.value === 'show') {
            //se la quito y le pongo 'hide'
            card.classList.remove('show');
            card.classList.add('hide');
        } else {
            //si no, se la pongo y quito 'hide'
            card.classList.add('show');
            card.classList.remove('hide');
        }
    }
}