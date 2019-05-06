function flipCardWhenClick(e) {
    const cards = e.currentTarget.children;
    for (const card of cards) {
        if (card.classList.value === 'show') {
            card.classList.remove('show');
            card.classList.add('hide');
        } else {
            card.classList.add('show');
            card.classList.remove('hide');
        }
    }
}