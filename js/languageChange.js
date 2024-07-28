const desktopLangGeo = Array.from(
  document.querySelectorAll('.desktop__lang_geo_text')
);
const desktopLangEngText = Array.from(
  document.querySelectorAll('.desktop__lang_eng__text')
);
const desktopLang = Array.from(document.querySelectorAll('.desktop__lang')); // main lang icon
const desktopLangEng = Array.from(
  document.querySelectorAll('.desktop__lang_eng')
); // second option lang icon

//change logo icon
const tbcLogoGeo = document.querySelector('.tbcLogo_web');
const tbcLogoEng = document.querySelector('.tbcLogo_eng');

let currentLanguage = 'ge';

const languageToggle = () => {
  if (currentLanguage === 'ge') {
    desktopLangGeo.forEach((leng) => (leng.textContent = 'Eng'));
    desktopLangEngText.forEach((leng) => (leng.textContent = 'ქარ'));
    tbcLogoGeo.classList.add('hidden');
    tbcLogoEng.classList.remove('hidden');
    i18next.changeLanguage('en', (err, t) => {
      if (!err) updateTextContent();
    });
    currentLanguage = 'en';
  } else {
    desktopLangGeo.forEach((leng) => (leng.textContent = 'ქარ'));
    desktopLangEngText.forEach((leng) => (leng.textContent = 'Eng'));
    tbcLogoGeo.classList.remove('hidden');
    tbcLogoEng.classList.add('hidden');
    i18next.changeLanguage('ge', (err, t) => {
      if (!err) updateTextContent();
    });
    currentLanguage = 'ge';
  }
};

const updateTextContent = () => {
  document.querySelector('.li__products').textContent = i18next.t('navLi1');
  document.querySelector('.li__concepts').textContent = i18next.t('navLi3');
  document.querySelector('.li__offers').textContent = i18next.t('navLi2');
  document.querySelector('.head_subscribe').textContent =
    i18next.t('head_subscribe');
};

i18next.init(
  {
    lng: 'ge',
    resources: {
      ge: {
        translation: {
          navLi1: 'პროდუქტები',
          navLi2: 'შეთავაზებები',
          navLi3: 'კონცეპტის სივრცე',
          head_subscribe: 'გამოიწერეთ ნაკრები',
        },
      },
      en: {
        translation: {
          navLi1: 'Products',
          navLi2: 'Offers',
          navLi3: 'Concept space',
          head_subscribe: 'Subscribe to a Package',
        },
      },
    },
  },
  function (err, t) {
    if (!err) updateTextContent();
  }
);

desktopLangEng.forEach((btn) => {
  btn.addEventListener('click', () => {
    languageToggle();
  });
});
