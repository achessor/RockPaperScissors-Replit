'use strict';

const buttons = document.querySelectorAll('.selection button');

const handleButtonClick = e => {
  console.log('a button was clicked');
  console.dir(e);
};

buttons.forEach(button => button.addEventListener('click', handleButtonClick));

// array for computer selection
const computerItems = [rock, paper, scissors];

