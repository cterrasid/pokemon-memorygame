'use strict';
//CONSTANTES
const radioInputEl = document.querySelectorAll('.input__card');

const btnEl = document.querySelector('.btn__start');
const ulCardsEl = document.querySelector('.cards__list');

const imgUrl = 'https://via.placeholder.com/160x195/30d9c4/ffffff/?text=ADALAB';
const apiUrl = 'https://raw.githubusercontent.com/Adalab/cards-data/master/';
//VARIABLES
let radioInputChecked = 0;
let pokeCardsId = 0;
let originalList = '';

//FUNCION PARA CREAR ELEMENTOS
function paintElements(li, img1, img2, src, imgUrl1, imgUrl2, id, idNumber, class1, class2, ul) {

  const liEl = document.createElement(li);
  const imgPoke = document.createElement(img1);
  const imgAdalab = document.createElement(img2);

  imgPoke.setAttribute(src, imgUrl1);
  imgPoke.setAttribute(id, idNumber);
  imgPoke.classList.add(class1);
  imgAdalab.setAttribute(src, imgUrl2);
  imgAdalab.setAttribute(id, idNumber);
  imgAdalab.classList.add(class2);

  liEl.appendChild(imgPoke);
  liEl.appendChild(imgAdalab);

  liEl.addEventListener('click', flipCardWhenClick);
  liEl.addEventListener('click', compareCardsId);

  return ul.appendChild(liEl);
}

radioInputEl.forEach(radioInput => {
  radioInput.addEventListener('click', handleRadioInputSelection);
});

function handleRadioInputSelection(e) {

  radioInputChecked = e.currentTarget.id;
  for (const radioInput of radioInputEl) {
    (radioInput.id !== radioInputChecked) ? radioInput.checked = false : radioInput.checked;
  }
}

btnEl.addEventListener('click', handleBtnClick);

function handleBtnClick() {
  ulCardsEl.innerHTML = '';
  requestToApi();
}

function requestToApi() {
  fetch(`${apiUrl}${radioInputChecked}.json`)
    .then(response => response.json())
    .then(result => {
      const shuffleCards = shuffle(result);
      for (const data of shuffleCards) {
        const dataImgUrl = data.image;
        const dataId = data.pair;

        paintElements('li', 'img', 'img', 'src', dataImgUrl, imgUrl, 'id', dataId, 'hide', 'show', ulCardsEl);

        getradioInputCheckedToSetLocalStorage();
      }
    });
}

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

function getradioInputCheckedToSetLocalStorage() {
  localStorage.setItem('numberOfCards', JSON.stringify(radioInputChecked));
}

document.addEventListener('load', getLocalStorage(), false);
function getLocalStorage() {
  if (localStorage.numberOfCards) {
    radioInputChecked = JSON.parse(localStorage.getItem('numberOfCards'));
    requestToApi();
  }
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

function compareCardsId(e) {
  let valueToCompare = e.currentTarget.firstChild.id;
  const secondPokeCard = e.currentTarget.firstChild;
  const secondAdaCard = e.currentTarget.lastChild;
  const firstPokeCard = originalList.firstChild;
  const firstAdaCard = originalList.lastChild;

  if (pokeCardsId !== 0) {
    if (valueToCompare !== pokeCardsId) {
      setTimeout(function(){
        hideCards(firstPokeCard, secondPokeCard, 'show', 'hide');
        showCards(firstAdaCard, secondAdaCard, 'show', 'hide');
      }, 1000);
    }
    pokeCardsId = 0;

  } else {
    pokeCardsId = e.currentTarget.firstChild.id;
    originalList = e.currentTarget;
  }

}