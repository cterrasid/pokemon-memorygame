radioInputEl.forEach(radioInput => {
    radioInput.addEventListener('click', handleRadioInputSelection);
});

function handleRadioInputSelection(e) {
    radioInputChecked = e.currentTarget.id;
    for (const radioInput of radioInputEl) {
        (radioInput.id !== radioInputChecked) ? radioInput.checked = false : radioInput.checked;
    }
}