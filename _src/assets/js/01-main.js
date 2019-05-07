'use strict';
const radioInputEl = document.querySelectorAll('.input__card');

const btnEl = document.querySelector('.btn__start');
const ulCardsEl = document.querySelector('.cards__list');

const imgUrl = 'https://image.flaticon.com/icons/svg/914/914726.svg';
const apiUrl = 'https://raw.githubusercontent.com/Adalab/cards-data/master/';

let radioInputChecked = 0;
let firstCardId = 0;
let originalList = '';

function paintElements(imgUrl1, imgUrl2, idNumber, ul) {
  const liEl = document.createElement('li');
  const imgPoke = document.createElement('img');
  const imgBack = document.createElement('img');

  imgPoke.setAttribute('src', imgUrl1);
  imgPoke.setAttribute('id', idNumber);
  imgPoke.setAttribute('alt', 'Pokemon card');
  imgPoke.classList.add('hide');
  imgBack.setAttribute('src', imgUrl2);
  imgBack.setAttribute('id', idNumber);
  imgBack.setAttribute('alt', 'Back card');
  imgBack.classList.add('show');

  liEl.appendChild(imgPoke);
  liEl.appendChild(imgBack);

  liEl.addEventListener('click', flipCardWhenClick);
  liEl.addEventListener('click', compareCardsId);

  return ul.appendChild(liEl);
}

function showCards(firstEl, secondEl, show, hide) {
  firstEl.classList.add(show);
  firstEl.classList.remove(hide);
  secondEl.classList.add(show);
  secondEl.classList.remove(hide);
}

function hideCards(firstEl, secondEl, show, hide) {
  firstEl.classList.remove(show);
  firstEl.classList.add(hide);
  secondEl.classList.add(hide);
  secondEl.classList.remove(show);
}

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