const desktop__lang__geo = document.querySelector('.desktop__lang_geo_text');
const desktop__lang_eng_text = document.querySelector(
  '.desktop__lang_eng__text'
);

const desktop__lang = document.querySelector('.desktop__lang'); // main lang icon
const desktop__lang_eng = document.querySelector('.desktop__lang_eng'); // second option lang icon

let currentLanguage = -1;

const languageToggle = () => {
  if (currentLanguage === -1) {
    desktop__lang__geo.textContent = 'Eng';
    desktop__lang_eng_text.textContent = 'ქარ';
    currentLanguage = 1; // Update currentLanguage
  } else {
    desktop__lang_eng_text.textContent = 'Eng';
    desktop__lang__geo.textContent = 'ქარ';
    currentLanguage = -1; // Update currentLanguage
  }
};

desktop__lang.addEventListener('click', () => {
  languageToggle();
});

desktop__lang_eng.addEventListener('click', () => {
  languageToggle();
});
