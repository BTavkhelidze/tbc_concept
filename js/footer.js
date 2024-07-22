//! Footer mobile burger menu

const br_menu_title = document.querySelectorAll('.br_menu_title');
const hidden_menu = document.querySelectorAll('.hidden_menu');

const icon = document.querySelector('.closed');

// br_menu_title.addEventListener('click', () => {
//   hidden_menu.classList.toggle('hidden');
// });

let currentIcon = './assets/svg/burger_menu_arrow_down.svg';
let openMenuIndex = -1;

for (let i = 0; i < br_menu_title.length; i++) {
  br_menu_title[i].addEventListener('click', () => {
    // Close the previously opened menu if it exists and is different from the current one
    if (openMenuIndex !== -1 && openMenuIndex !== i) {
      hidden_menu[openMenuIndex].classList.add('hidden');
    }

    // Toggle the current menu
    hidden_menu[i].classList.toggle('hidden');

    // Update the openMenuIndex
    if (hidden_menu[i].classList.contains('hidden')) {
      openMenuIndex = -1;
      currentIcon = './assets/svg/burger_menu_arrow_down.svg';
    } else {
      openMenuIndex = i;
      currentIcon = './assets/svg/burger_menu_arrow_up.svg';
    }

    // Update the icon
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
