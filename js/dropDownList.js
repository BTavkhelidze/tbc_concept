const dropDownListParents = Array.from(
  document.querySelectorAll('.parent__li')
);

const dropDownList = Array.from(document.querySelectorAll('.dropdown__list'));

const dropDownDiv = document.querySelector('.header__dropDown');

// dropDownListParents.forEach((btn) => {
//   btn.addEventListener('click', (btn, i) => {
//     console.log(btn, i);
//   });

// });
// for (let i = 0; i < dropDownListParents.length; i++) {
//   dropDownListParents[i].addEventListener('click', () => {
//     console.log(dropDownList[i].active);
//     dropDownList[i].classList.toggle('hidden');
//     dropDownDiv.classList.remove('hidden');
//   });
//   dropDownListParents[i].addEventListener('activ', () => {
//     console.log(dropDownList[i].active);
//     dropDownList[i].classList.remove('hidden');
//     dropDownDiv.classList.remove('hidden');
//   });
// }
let currentActiveIndex = -1;

for (let i = 0; i < dropDownListParents.length; i++) {
  dropDownListParents[i].addEventListener('click', () => {
    // Remove 'active' class and hide dropdown from the previously active item
    if (currentActiveIndex !== -1 && currentActiveIndex !== i) {
      dropDownListParents[currentActiveIndex].classList.remove('active');

      dropDownListParents[currentActiveIndex]
        .querySelector('.dropdown__list')
        .classList.add('hidden');
    }

    dropDownDiv.classList.remove('hidden');

    // Toggle 'active' class and dropdown visibility for the clicked item
    dropDownListParents[i].classList.toggle('active');
    dropDownListParents[i]
      .querySelector('.dropdown__list')
      .classList.toggle('hidden');

    // Update the current active index
    if (dropDownListParents[i].classList.contains('active')) {
      currentActiveIndex = i;
    } else {
      currentActiveIndex = -1;
      dropDownDiv.classList.add('hidden');
    }
  });
}

//! burger menu component

const buger__menu = document.querySelector('.buger__menu');

buger__menu.addEventListener('click', () => {
  buger__menu.classList.toggle('open');
});
