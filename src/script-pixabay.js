import axios from 'axios';
// .img-container elements:
const welcomeMsg = document.querySelector('.welcome-msg');
const randomImg = document.querySelector('.random-img');
const ladySay = document.querySelector('.lady-say');
// buttons
const buttonsContainer = document.querySelector('#buttons-container');
const radioBtns = document.querySelectorAll('[type=radio]');

/*********** CLICK EVENT LISTENER ***********/
buttonsContainer.addEventListener('click',evt => {
    // check we have clicked on a button and not outside.
    if(evt.target.nodeName === 'BUTTON'){
        // remove welcome message
        if(welcomeMsg.style.display !=='none'){
            welcomeMsg.style.display ='none';
        }
        // generate url based on user selection (radio and button)
        let endpoint;
        let endpointName;
        radioBtns.forEach(btn => {
            if(btn.checked){
                endpoint = btn.value;
                endpointName = btn.dataset.title;
            }
          }
        )
        const searchTerm = randomWord(evt.target.value.split(' '));
        // console.log(endpoint);
        // console.log(endpointName);
        // console.log(searchTerm);
        getImage(endpoint, searchTerm, endpointName);
    }
})


/*********** FUNCTIONS ***********/
// Generates a random element from an array argument.
const randomWord = array => {
  const word = array[Math.floor(Math.random() * array.length)];
  return word;
}


// Calls to the REST API
const getImage = (endpoint, searchTerm, endpointName) => {
  axios
    .get(`https://imagen-rest-api.herokuapp.com/${endpoint}?q=${searchTerm}`)
    .then((response) => {
      // console.log(response.data);
      randomImg.setAttribute('src', response.data.src);
      setTimeout(() => {
        randomImg.style.display = 'block';
        ladySay.textContent = `${endpointName} says ${searchTerm} time!`
        ladySay.style.display = 'block';
        
      },500)
      
    })
    .catch((error) => {
      console.log(error)
      randomImg.style.display = 'None';
      ladySay.textContent = `Sorry... ${endpointName} is in a bad mood today.`;
      ladySay.style.display= 'block';
    });
};
