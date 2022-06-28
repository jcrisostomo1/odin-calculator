const numberButtons = document.querySelectorAll("[data-number]");
const divideButton =  document.querySelector('[data-divide]');
const multiplyButton = document.querySelector('[data-times]');
const screen = document.querySelector(".current-screen");
const prevScreen = document.querySelector(".previous-screen");

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
    screen.innerText += button.innerText;
    });
});


let add = (num1,num2) => (num1 + num2);
let subtract = (num1, num2) => (num1- num2);
let multiply = (num1, num2) => (num1 * num2);
let divide = (num1, num2) => (num1/num2); 
console.log(add(2.2,3))
console.log(subtract(3,4))
console.log(multiply(2,2))
console.log(divide(2,3))

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

console.log(operate(1,2, "add"))