'use strict';
import axios from 'axios';
// .img-container elements:
const message = document.querySelector('.message');
const randomImg = document.querySelector('.random-img');
// buttons
const buttonsContainer = document.querySelector('#buttons-container');
const radioBtns = document.querySelectorAll('[type=radio]');

/*********** CLICK EVENT LISTENER ***********/
buttonsContainer.addEventListener('click', evt => {
  // check we have clicked on a button and not outside.
  if (evt.target.nodeName === 'BUTTON') {
    // generate url based on user selection (radio and button)
    // Get the button clicked to display relevant message to user
    let endpoint;
    let endpointName;
    radioBtns.forEach(btn => {
      if (btn.checked) {
        endpoint = btn.value;
        endpointName = btn.dataset.title;
      }
    });
    message.textContent = `Waiting for ${endpointName} ...`;
    const searchTerm = randomWord(evt.target.value.split(' '));
    getImage(endpoint, searchTerm, endpointName);
  }
});

/*********** FUNCTIONS ***********/
// Generates a random element from an array argument.
const randomWord = array =>
  array[Math.floor(Math.random() * array.length)];

// Calls to the REST API
const getImage = (endpoint, searchTerm, endpointName) => {
  axios
    .get(
      `https://imagen-rest-api.herokuapp.com/${endpoint}?q=${searchTerm}`
    )
    .then(response => {
      randomImg.setAttribute('src', response.data.src);
      setTimeout(() => {
        randomImg.style.display = 'block';
        message.textContent = `${endpointName} says ${searchTerm} time!`;
      }, 500);
    })
    .catch(error => {
      console.log(error);
      randomImg.style.display = 'None';
      message.textContent = `Sorry... ${endpointName} is in a bad mood today.`;
    });
};
