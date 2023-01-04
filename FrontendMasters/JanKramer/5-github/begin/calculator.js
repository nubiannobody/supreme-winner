let runningTotal = 0;
let buffer = "0"; // keeps track on what's on screen 
let previousOperator; // keeps track of operator they clicked 

const screen = document.querySelector('.screen'); // grabs screen to keep track of what's on screen 

function buttonClick(value) {
  if (isNaN(value)) {
    // this is not a number
    handleSymbol(value);
  } else {
    // this is a number
    handleNumber(value);
  }
    
}

function handleSymbol(symbol){}

function handleNumber(numberString){
    if (buffer === "0") {
        buffer = numberString;
    } else {
        buffer += numberString;
    }
    screen.innerText = buffer; // sets what user clicks to display on screen
}

function init () {
  document.querySelector('.calc-buttons') // div that wraps all calc buttons
  .addEventListener('click', function(event) {
    buttonClick(event.target.innerText);
  })
}

init(); // this is where everything gets run once



