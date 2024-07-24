const desktop__lang__geo = Array.from(
  document.querySelectorAll('.desktop__lang_geo_text')
);
const desktop__lang_eng_text = Array.from(
  document.querySelectorAll('.desktop__lang_eng__text')
);

const desktop__lang = Array.from(document.querySelectorAll('.desktop__lang')); // main lang icon
const desktop__lang_eng = Array.from(
  document.querySelectorAll('.desktop__lang_eng')
); // second option lang icon

let currentLanguage = -1;

const languageToggle = () => {
  if (currentLanguage === -1) {
    desktop__lang__geo.forEach((leng) => (leng.textContent = 'Eng'));
    desktop__lang_eng_text.forEach((leng) => (leng.textContent = 'ქარ'));
    currentLanguage = 1; // Update currentLanguage
  } else {
    desktop__lang_eng_text.forEach((leng) => (leng.textContent = 'Eng'));
    desktop__lang__geo.forEach((leng) => (leng.textContent = 'ქარ'));
    currentLanguage = -1; // Update currentLanguage
  }
  // Hide the secondary language options after toggling
};

desktop__lang_eng.forEach((btn) => {
  btn.addEventListener('click', () => {
    languageToggle();
  });
});
