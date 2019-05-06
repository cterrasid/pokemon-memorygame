'use strict';

const radioInputEl = document.querySelectorAll('.input__card');

const btnEl = document.querySelector('.btn__start');
const ulCardsEl = document.querySelector('.cards__list');

const imgUrl = 'https://via.placeholder.com/160x195/30d9c4/ffffff/?text=ADALAB';
const apiUrl = 'https://raw.githubusercontent.com/Adalab/cards-data/master/';

let radioInputChecked = 0;
let firstCardId = 0;
let originalList = '';

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
  liEl.addEventListener('click', compareCardsId);
  //escucho a la imagen de pokemon para obtener su id
  // imgPoke.addEventListener('click', compareCardsId);
  //devuelve los elementos dentro de mi ul
  return ul.appendChild(liEl);
}
//FUNCION PARA MOSTRAR CARTAS
function showCards(firstEl, secondEl, show, hide) {
  firstEl.classList.add(show);
  firstEl.classList.remove(hide);
  secondEl.classList.add(show);
  secondEl.classList.remove(hide);
}
//FUNCION PARA OCULTAR CARTAS
function hideCards(firstEl, secondEl, show, hide) {
  firstEl.classList.remove(show);
  firstEl.classList.add(hide);
  secondEl.classList.add(hide);
  secondEl.classList.remove(show);
}
//FUNCION PARA BARAJEAR (BUSCADA EN GOOGLE)
function shuffle(array) {
  let currentIndex = array.length, temporaryValue, randomIndex;

  while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
  }
  return array;
}