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
//   //   dropDownListParents[i].addEventListener('activ', () => {
//   //     console.log(dropDownList[i].active);
//   //     dropDownList[i].classList.remove('hidden');
//   //     dropDownDiv.classList.remove('hidden');
//   //   });
// }
let currentActiveIndex = -1;

for (let i = 0; i < dropDownListParents.length; i++) {
  dropDownListParents[i].addEventListener('click', () => {
    // Hide the currently active dropdown if it's different from the clicked one
    if (currentActiveIndex !== -1 && currentActiveIndex !== i) {
      dropDownList[currentActiveIndex].classList.add('hidden');
    }

    // Toggle the clicked dropdown
    dropDownList[i].classList.toggle('hidden');

    // Update the current active index
    if (!dropDownList[i].classList.contains('hidden')) {
      currentActiveIndex = i;
    } else {
      currentActiveIndex = -1;
    }
  });
}
