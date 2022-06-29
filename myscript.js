const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operation]");
const clearButton = document.querySelector("[data-clear]");
const deleteButton = document.querySelector("[data-delete]");
const equalsButton = document.querySelector("[data-equals]");
const screen = document.querySelector(".current-screen");
const prevScreen = document.querySelector(".previous-screen");

let firstNum;
let operand = "";

let clear = () => {
    screen.innerText = '';
    prevScreen.innerText = '';
    firstNum = '';
    operand = '';
}

let _delete = () => {
    screen.innerText = screen.innerText.slice(0,-1);
}

let updateDisplay = (e) => {
    operand = e.target.innerText;
    if (screen.innerText != '') {
        firstNum = screen.innerText;
        prevScreen.innerText = `${firstNum} ${operand}`;
        screen.innerText = '';
    }
}

let doOperation = (e) => {
    if(operand != '' && !isNaN(firstNum) && !isNaN(parseFloat(screen.innerText))) {
        screen.innerText = operate(parseFloat(firstNum), parseFloat(screen.innerText), operand);
        prevScreen.innerText = '';
        operand = '';
    }
}

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
    screen.innerText += button.innerText;
    });
});

operationButtons.forEach(button => {
    button.addEventListener('click', updateDisplay);
});

clearButton.addEventListener('click', clear);
deleteButton.addEventListener('click' , _delete);
equalsButton.addEventListener('click', doOperation);

const add = (num1,num2) => (num1 + num2);
const subtract = (num1, num2) => (num1 - num2);
const multiply = (num1, num2) => (num1 * num2);
const divide = (num1, num2) => (num1/num2); 

let operate = (num1, num2, operator) => {
    console.log(num1, num2, operator);
    switch (operator) {
        case "+" :
            return add(num1, num2);
        case "−" :
            return subtract(num1, num2);
        case "×" :
            return multiply(num1, num2);
        case "÷" :
            return divide(num1, num2);
        default :
            return "Error!"
    }   
}