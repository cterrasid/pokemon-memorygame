'use strict';

const radioBoxEl = document.querySelectorAll('.input__card');
let radioBoxValue = 0;

const btnEl = document.querySelector('.btn__start');
const ulCardsEl = document.querySelector('.cards__list');

const imgUrl = 'https://via.placeholder.com/160x195/30d9c4/ffffff/?text=ADALAB';
const apiUrl = 'https://raw.githubusercontent.com/Adalab/cards-data/master/';

//Funcion para crear elementos
function paintElements(li, img1, img2, src, imgUrl1, imgUrl2, id, idNumber, class1, class2, ul) {
  //Creo elementos
  const liEl = document.createElement(li);
  const imgPoke = document.createElement(img1);
  const imgAdalab = document.createElement(img2);
  //Añado atributos y clases
  imgPoke.setAttribute(src, imgUrl1);
  imgPoke.setAttribute(id, idNumber);
  imgPoke.classList.add(class1);
  imgAdalab.setAttribute(src, imgUrl2);
  imgAdalab.setAttribute(id, idNumber);
  imgAdalab.classList.add(class2);
  //incorporo los elementos donde corresponde
  liEl.appendChild(imgPoke);
  liEl.appendChild(imgAdalab);
  //escucho al listado
  liEl.addEventListener('click', handleCardClick);
  //devuelve los elementos dentro de mi ul
  return ul.appendChild(liEl);
}

//Escucho mis inputs para poder cambiar la URL segun la eleccion
//como estan en el array radioBoxEl, debo añadir el listener con un bucle
radioBoxEl.forEach(radioBox => {
  radioBox.addEventListener('click', handleRadioBox);
});

//Manejo los radioBox a traves de su id
function handleRadioBox(e) {
  //Obtengo su valor
  radioBoxValue = e.currentTarget.id;
  //Condicion para que no se queden todos seleccionados
  for (const radioBox of radioBoxEl) {
    (radioBox.id !== radioBoxValue) ? radioBox.checked = false : radioBox.checked;
  }
  //Condicion para añadir mas cartas si hago otra seleccion: NO SE!!!!
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
      for (const data of result) {
        const dataImgUrl = data.image;
        const dataId = data.pair;
        //creo los elementos de la API que me interesan
        paintElements('li', 'img', 'img', 'src', dataImgUrl, imgUrl, 'id', dataId, 'hide', 'show', ulCardsEl);
        //Elimino la escucha para que, si me vuelvo loca clickando "Comenzar", no agregue 4536431 tarjetas xD
        btnEl.removeEventListener('click', handleBtnClick);
      }
    });
}

//Manejo el click sobre las cartas para que se volteen
function handleCardClick(e) {
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