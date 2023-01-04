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
  screen.innerText = buffer; // rerenders everytime user clicks something ||sets what user clicks to display on screen
}

function handleSymbol(symbol){
    switch (symbol) {
     case 'C':
        buffer = '0';
        runningTotal = 0;
        break;
     case '+':
     case '-':
     case '×':
     case '÷':
        handleMath(symbol);
        break;
    }
}

function handleMath(symbol){
   if (buffer === '0') {
    // do nothing
    return;
   }

   const intBuffer = parseInt(buffer); // turns buffer into number
   if (runningTotal === 0) {
    runningTotal = intBuffer;
   } else {
    flushOperation(intBuffer);
    //runningTotal = intBuffer + buffer;
   }
   previousOperator = symbol;

   buffer = '0';
}

function flushOperation(intBuffer){
    if (previousOperator === '+') {
        runningTotal += intBuffer; // if + is pressed add
    } else if (previousOperator === '-') {
        runningTotal -= intBuffer;
    } else if (previousOperator === '×') {
        runningTotal *= intBuffer;
    } else {
        runningTotal /= intBuffer;
    }
}

function handleNumber(numberString){
    if (buffer === "0") {
        buffer = numberString;
    } else {
        buffer += numberString;
    }
}

function init () {
  document.querySelector('.calc-buttons') // div that wraps all calc buttons
  .addEventListener('click', function(event) {
    buttonClick(event.target.innerText);
  })
}

init(); // this is where everything gets run once

