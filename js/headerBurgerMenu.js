//! burger menu component

const bugerMenu = document.querySelector('.buger__menu');

const headerBurgerMenuContent = document.querySelector(
  '.header__burger__menu__wrapper '
);

bugerMenu.addEventListener('click', () => {
  bugerMenu.classList.toggle('open');

  if (bugerMenu.classList.contains('open')) {
    headerBurgerMenuContent.classList.add('active');
    document.body.classList.add('noScroll');
  } else {
    headerBurgerMenuContent.classList.remove('active');
    // document.body.classList.remove('noScroll');
  }
});
