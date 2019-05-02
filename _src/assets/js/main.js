'use strict';

const radioBoxEl = document.querySelectorAll('.input__card');
let radioBoxValue = 0;

const btnEl = document.querySelector('.btn__start');
const ulCardsEl = document.querySelector('.cards__list');

const imgUrl = 'https://via.placeholder.com/160x195/30d9c4/ffffff/?text=ADALAB';
const apiUrl = 'https://raw.githubusercontent.com/Adalab/cards-data/master/';

//Funcion para crear elementos
function paintElements(li, img1, img2, src, imgUrl1, imgUrl2, id, idNumber, ul) {
  const liEl = document.createElement(li);
  const imgPoke = document.createElement(img1);
  const imgAdalab = document.createElement(img2);
  imgPoke.setAttribute(src, imgUrl1);
  imgPoke.setAttribute(id, idNumber);
  imgAdalab.setAttribute(src, imgUrl2);
  liEl.appendChild(imgPoke);
  liEl.appendChild(imgAdalab);

  return ul.appendChild(liEl);
}

//Escucho mis inputs para poder cambiar la URL segun la conexion
//como estan en el array radioBoxEl, debo añadir el listener con un bucle
radioBoxEl.forEach(radioBox => {
  radioBox.addEventListener('click', handleRadioBox);
});

//Manejo los radioBox a traves de su id para obtener su valor, enytre otras cosas
function handleRadioBox(e) {
  radioBoxValue = e.currentTarget.id;
  for (const radioBox of radioBoxEl) {
    (radioBox.id !== radioBoxValue) ? radioBox.checked = false : radioBox.checked;
  }
}


//Escucho el click del boton "Comenzar"
btnEl.addEventListener('click', handleBtnClick);
//Cuando haga click en "Comenzar":
function handleBtnClick() {
  //realizo la petición al servidor
  fetch(`${apiUrl}${radioBoxValue}.json`)
  //Que me responderá en un archivo .json
    .then(response => response.json())
  //La respuesta en sí, es la siguiente:
    .then(result => {
      //recorro los elementos de la API, que son un array de objetos
      //FOR-OF
      for (const data of result) {
        const dataImgUrl = data.image;
        const dataId = data.pair;

        paintElements('li', 'img', 'img', 'src', dataImgUrl, imgUrl, 'id', dataId, ulCardsEl);
      }
    });
}