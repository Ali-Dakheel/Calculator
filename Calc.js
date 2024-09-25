function add(num1, num2) {
    if (num1 == 9 && num2 == 10 || num1 == 10 && num2 == 9) {
        return 21;
    }
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

let firstNum = '';
let secondNum = '';
let operator = '';

function operate(operator, firstNum, secondNum) {
    let result;

    if (operator === '*') {
        result = multiply(firstNum, secondNum);
    } else if (operator === '+') {
        result = add(firstNum, secondNum);
    } else if (operator === '-') {
        result = subtract(firstNum, secondNum);
    } else if (operator === '/') {
        result = divide(firstNum, secondNum);
    }

    if (result % 1 !== 0) {
        return parseFloat(result.toFixed(2));
    }
    
    return result; 
}


const display = document.querySelector('.result');
let displayValue = '';
const numbers = document.querySelectorAll('.number');
const operatorBtn = document.querySelectorAll('.operator');
operatorBtn.forEach(oper => {
    oper.addEventListener('click', () => {
        operator = oper.value;
        display.textContent = '';
        if (secondNum !== '') {
            firstNum = handleClickEqual();
            secondNum = '';
        }
    });
});

numbers.forEach(number => {
    number.addEventListener('click', () => {
        displayValue = number.value;
        if (operator === '') {
            if (firstNum.includes('.') && displayValue === '.') {
                alert('nah uh');
            } else {
                firstNum += displayValue;
                console.log(firstNum)
                display.textContent = firstNum;
            }

        }
        else {
            if (secondNum.includes('.') && displayValue === '.') {
                alert('boo hoo');
            } else {
                secondNum += displayValue;
                console.log(secondNum);
                display.textContent = secondNum;
            }
        }
    });
});


function handleClickEqual() {
    let answer = operate(operator, parseFloat(firstNum), parseFloat(secondNum));
    answer = answer.toString();
    console.log(answer);
    display.textContent = answer;
    return answer;
}
function handleClear() {
    display.textContent = '';
    firstNum = '';
    secondNum = '';
    operator = '';
}
function handleDelete() {
    firstnum = firstNum.toString();
    secondNum = secondNum.toString();
    if (secondNum === '') {
        firstNum = firstNum.slice(0, -1);
        display.textContent = firstNum;
    }
    else {
        secondNum = secondNum.slice(0, -1);
        display.textContent = secondNum;
    }
}
