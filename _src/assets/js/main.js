'use strict';
//CONSTANTES
const radioInputEl = document.querySelectorAll('.input__card');
let radioInputChecked = 0;

const btnEl = document.querySelector('.btn__start');
const ulCardsEl = document.querySelector('.cards__list');

const imgUrl = 'https://via.placeholder.com/160x195/30d9c4/ffffff/?text=ADALAB';
const apiUrl = 'https://raw.githubusercontent.com/Adalab/cards-data/master/';

//FUNCION PARA CREAR ELEMENTOS
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
  liEl.addEventListener('click', flipCardWhenClick);
  //devuelve los elementos dentro de mi ul
  return ul.appendChild(liEl);
}

//PARTIAL 1: MANEJAR LOS INPUTS
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

//PARTIAL 3: INTERACCIONES
//Escucho el click del boton "Comenzar"
btnEl.addEventListener('click', handleBtnClick);

//Cuando haga click en "Comenzar":
function handleBtnClick() {
  //limpio el listado para que no se repita el contenido
  ulCardsEl.innerHTML = '';
  //llamo a la funcion requestToApi para cargar las cartas que elija el usuario
  requestToApi();
}

//PARTIAL 2: PETICION
function requestToApi() {
  //realizo la petición al servidor
  fetch(`${apiUrl}${radioInputChecked}.json`)
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
        //invoco la funcion para guardar el LS
        getradioInputCheckedToSetLocalStorage();
      }
    });    
}

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

//PARTIAL 4: LOCAL STORAGE
function getradioInputCheckedToSetLocalStorage() {
  //guardo mi seleccion en el Local Storage
  localStorage.setItem('numberOfCards', JSON.stringify(radioInputChecked));
}

document.addEventListener('load', getLocalStorage(), false);
//Creo una funcion para el local storage
function getLocalStorage() {
  if (localStorage.numberOfCards) {
    radioInputChecked = JSON.parse(localStorage.getItem('numberOfCards'));
    requestToApi();
  }
}
