//Escucho mis inputs para poder cambiar la URL segun la eleccion
//como estan en el array radioInputEl, debo añadir el listener con un bucle
radioInputEl.forEach(radioInput => {
    radioInput.addEventListener('click', handleRadioInputSelection);
});

//Manejo los radioInput a traves de su id
function handleRadioInputSelection(e) {
    //Obtengo su valor
    radioInputChecked = e.currentTarget.id;
    //Condicion para que no se queden todos seleccionados
    for (const radioInput of radioInputEl) {
        (radioInput.id !== radioInputChecked) ? radioInput.checked = false : radioInput.checked;
    }
}