//! Footer mobile burger menu

const br_menu_title = Array.from(document.querySelectorAll('.br_menu_title'));
const hidden_menu = Array.from(document.querySelectorAll('.hidden_menu'));
console.log(hidden_menu);

const icon = Array.from(document.querySelectorAll('.closed'));

let currentIcon = './assets/svg/burger_menu_arrow_down.svg';
let openMenuIndex = -1;

for (let i = 0; i < br_menu_title.length; i++) {
  br_menu_title[i].addEventListener('click', () => {
    // Close the previously opened menu if it exists and is different from the current one
    if (openMenuIndex !== -1 && openMenuIndex !== i) {
      if (hidden_menu[openMenuIndex]) {
        hidden_menu[openMenuIndex].classList.add('hidden');
      }
    }

    // Toggle the current menu
    if (hidden_menu[i]) {
      hidden_menu[i].classList.toggle('hidden');

      // Update the openMenuIndex
      if (hidden_menu[i].classList.contains('hidden')) {
        openMenuIndex = -1;
        currentIcon = './assets/svg/burger_menu_arrow_down.svg';
      } else {
        openMenuIndex = i;
        currentIcon = './assets/svg/burger_menu_arrow_up.svg'; // Update the icon to arrow up
      }

      // Update the icon
      icon[i].src = currentIcon;
    }
  });
}

// fixed burger menu buttom/right

const fixedBtn = document.querySelector('.fixed__btn');
const hiddenDivs = document.querySelector('.hidden_divs');

const hidden_divs = document.querySelector('.hidden_divs');

// Check if the elements exist before adding event listeners
if (fixedBtn && hiddenDivs) {
  fixedBtn.addEventListener('click', () => {
    fixedBtn.classList.toggle('open__fixed__menu');
    hiddenDivs.classList.toggle('hidden');
    console.log('fixed__btn__wrapper');
  });
} else {
  console.error('Required elements are missing.');
}
