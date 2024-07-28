const dropDownListParents = Array.from(
  document.querySelectorAll('.parent__li')
);
const dropDownDiv = document.querySelector('.header__dropDown');
let currentActiveIndex = -1;

for (let i = 0; i < dropDownListParents.length; i++) {
  dropDownListParents[i].addEventListener('click', () => {
    // Remove 'active' class and hide dropdown from the previously active item
    if (currentActiveIndex !== -1 && currentActiveIndex !== i) {
      dropDownListParents[currentActiveIndex].classList.remove('active');
      dropDownListParents[currentActiveIndex]
        .querySelector('.dropdown__list')
        .classList.add('hidden');
      dropDownDiv.classList.add('hidden');
    }

    // Toggle 'active' class and dropdown visibility for the clicked item
    dropDownListParents[i].classList.toggle('active');
    dropDownListParents[i]
      .querySelector('.dropdown__list')
      .classList.toggle('hidden');

    // Update the current active index
    if (dropDownListParents[i].classList.contains('active')) {
      currentActiveIndex = i;
      dropDownDiv.classList.add('active');
      dropDownDiv.classList.remove('hidden');
    } else {
      currentActiveIndex = -1;
      dropDownDiv.classList.remove('active');
      dropDownDiv.classList.add('hidden');
    }
  });
}

//! burger menu component

// const buger__menu = document.querySelector('.buger__menu');

// buger__menu.addEventListener('click', () => {
//   buger__menu.classList.toggle('open');
// });
