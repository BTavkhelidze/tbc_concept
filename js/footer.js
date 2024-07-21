//! Footer mobile burger menu

const br_menu_title = document.querySelectorAll('.br_menu_title');
const hidden_menu = document.querySelectorAll('.hidden_menu');

const icon = document.querySelector('.closed');

// br_menu_title.addEventListener('click', () => {
//   hidden_menu.classList.toggle('hidden');
// });

let currentIcon = './assets/svg/burger_menu_arrow_down.svg';

for (let i = 0; i < br_menu_title.length; i++) {
  br_menu_title[i].addEventListener('click', () => {
    hidden_menu[i].classList.toggle('hidden');

    if (currentIcon === './assets/svg/burger_menu_arrow_down.svg') {
      currentIcon = './assets/svg/burger_menu_arrow_up.svg';
    } else {
      currentIcon = './assets/svg/burger_menu_arrow_down.svg';
    }
    icon.src = currentIcon;
  });
}

// fixed burger menu buttom/right

const fixed__btn = document.querySelector('.fixed__btn');
const fixed_menu = document.querySelector('.fixed_menu');

const hidden_divs = document.querySelector('.hidden_divs');

fixed__btn.addEventListener('click', () => {
  fixed__btn.classList.toggle('open__fixed__menu');
  hidden_divs.classList.toggle('hidden');
  console.log('fixed__btn__wrapper');
});
