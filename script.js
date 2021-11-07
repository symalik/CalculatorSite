//Calculator class to keep track of input and results
const calculator = {
    displayOutput: '0', //tracks value
    firstOperand: null, //for values 1,2,3,4
    secondOperatonStatus: false, //check for value and first Operation
    operator: null, //for +, -, *, /
};

function resetCalculator() {
    calculator.displayOutput = '0';
    calculator.firstOperand = null;
    calculator.secondOperatonStatus = false;
    calculator.operator = null;
    console.log("Calculator has been reset!");
    console.log(calculator);
}

function inputDigit(digit) {
    const {displayOutput, secondOperatonStatus} = calculator;

    if(secondOperatonStatus === true) {
        calculator.displayOutput = digit;
        calculator.secondOperatonStatus = false;
    } else {
        //if the display value is 0 then overwrite it
        //ternary operator used to if the value displayed is 0
        calculator.displayOutput = displayOutput === '0' ? digit : displayOutput + digit;
    }
    

    console.log(calculator);
}

function handleOperator(nextOperator){
    const {firstOperand, displayOutput, operator} = calculator;
    
    //ParseFloat take the string of 'displayOutput' and converts to a float number
    const inputValue = parseFloat(displayOutput);

    //verify 'firstOpoerand' is null and 'inputValue' is not 'NaN'
    if(firstOperand === null && !isNaN(inputValue)) {
        calculator.firstOperand = inputValue;
    } else if (operator) {
        //check if operator property has been assigned (not null)
        //if it isn't null run the calculate function and saved in result
        const result = calculate(firstOperand, inputValue, operator);

        calculator.displayOutput = String(result);
        calculator.firstOperand = result;
    }

    calculator.secondOperatonStatus = true;
    calculator.operator = nextOperator;

    console.log(calculator);
}

function calculate(firstOperand, secondOperand, operator) {
    if(operator === '+') {
        return firstOperand + secondOperand;
    } else if (operator === '-') {
        return firstOperand - secondOperand;
    } else if (operator === '*') {
        return firstOperand * secondOperand;
    } else if (operator === '/') {
        return firstOperand / secondOperand;
    }

    //if the '=' operator is entered it'll return  the second Operand
    return secondOperand;
}

function showDisplay() {
    const display = document.querySelector('.input');
    display.value = calculator.displayOutput;
}

showDisplay();

//Captures or takes the key presses (check in console to verify correct operations)
const keys = document.querySelector('.grid-container');
keys.addEventListener('click', (event) => {
    const {target} = event;

    //Check to see if element is a button
    if(!target.matches('button')){
        return;
    }

    if (target.classList.contains('operator')) {
        handleOperator(target.value);
        showDisplay();
        return;
    }

    if(target.classList.contains('reset')) {
        resetCalculator();
        showDisplay();
        return;
    }

    //show digit key press in console
    console.log('digit', target.value);

    inputDigit(target.value);
    showDisplay();
});
