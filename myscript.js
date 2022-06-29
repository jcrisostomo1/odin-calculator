const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operation]");
const clearButton = document.querySelector("[data-clear]");
const deleteButton = document.querySelector("[data-delete]");
const equalsButton = document.querySelector("[data-equals]");
const screen = document.querySelector(".current-screen");
const prevScreen = document.querySelector(".previous-screen");

let firstNum = 0;

let clear = () => {
    screen.innerText = '';
    prevScreen.innerText = '';
}

let _delete = () => {
    screen.innerText = screen.innerText.slice(0,-1);
}

let updateDisplay = () => {
    firstNum = screen.innerText;
    prevScreen.innerText = screen.innerText;
    screen.innerText = '';
}

clearButton.addEventListener('click', clear);
deleteButton.addEventListener('click' , _delete);
equalsButton.addEventListener('click', () => {
    console.log(typeof(firstNum))
})

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
    screen.innerText += button.innerText;
    });
});

operationButtons.forEach(button => {
    button.addEventListener('click', updateDisplay);
});

let add = (num1,num2) => (num1 + num2);
let subtract = (num1, num2) => (num1- num2);
let multiply = (num1, num2) => (num1 * num2);
let divide = (num1, num2) => (num1/num2); 

let operate = (num1, num2, operator) => {
    let answer;
    switch (operator) {
        case "add" :
            return add(num1, num2);
        case "subtract" :
            return subtract(num1, num2);
        case "multiply" :
            return multiply(num1, num2);
        case "divide" :
            return divide(num1, num2);
    }
    return
}
