'use strict';
const faqItems = document.querySelectorAll('.item');
const stateControllerBtns = document.querySelectorAll('.state-controller');
const answers = document.querySelectorAll('.answer');

console.log(faqItems, stateControllerBtns, answers);
const iconPaths = {
  plus: './assets/images/icon-plus.svg',
  minus: './assets/images/icon-minus.svg',
};

// helper function
const updateIcon = (button, isOpen) => {
  button.src = isOpen ? iconPaths.minus : iconPaths.plus;
};

// event listeners
stateControllerBtns.forEach((button, index) => {
  button.addEventListener('click', () => {
    const answer = answers[index];
    const isHidden = answer.classList.contains('hidden-content');

    // toggle answer visibility
    answer.classList.toggle('hidden-content');

    // tpdate icon
    updateIcon(button, isHidden);
  });
});
