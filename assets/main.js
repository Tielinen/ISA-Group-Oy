`use strict`

//Hamburer menu
document.querySelector(`.header__hamburger`)
  .addEventListener(`click`, (event) => 
    document.querySelector(`.header__nav`).classList.toggle(`header__nav--visible`)
);