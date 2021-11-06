//Calculator class to keep track of input and results
const calculator = {
    displayOutput: '0', //tracks value
    firstOperand: null, //for values 1,2,3,4
    secondOperatonStatus: false, //check for value and first Operation
    operator: null, //for +, -, *, /
};

function showDisplay() {
    const display = document.querySelector('.input');
    display.value = calculator.displayOutput;
}

showDisplay();