//selector variables
const oneBut = document.querySelector('#one');
const twoBut = document.querySelector('#two');
const threeBut = document.querySelector('#three');
const fourBut = document.querySelector('#four');
const fiveBut = document.querySelector('#five');
const sixBut = document.querySelector('#six');
const sevenBut = document.querySelector('#seven');
const eightBut = document.querySelector('#eight');
const nineBut = document.querySelector('#nine');
const zeroBut = document.querySelector('#zero');
const dotBut = document.querySelector('#dot');
const signBut = document.querySelector('#sign');
const percentageBut = document.querySelector('#percentage');

const addBut = document.querySelector('#add');
const subtractBut = document.querySelector('#subtract');
const multiplyBut = document.querySelector('#multiply');
const divideBut = document.querySelector('#divide');
const displayDiv = document.querySelector('#display');

const clearBut = document.querySelector('#clear');
const enterBut = document.querySelector('#enter')

//logic variables
let num1 = null;
let num2 = null;
let currentOperator = null;
let clearDisplay = false;
let num1Stored = false;

//operate functions
function add(num1, num2) {
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
function operate(func, num1, num2) {
    return func(num1, num2);
}

//checks if char is a number
function isNumber(char) {
    if (typeof char !== 'string') {
        return false;
    }

    if (char.trim() === '') {
        return false;
    }

    return !isNaN(char);
}
//add a number to a display
function addtoDisplay(num) {
    if (clearDisplay) {
        displayDiv.textContent = '';
        clearDisplay = false;
    }
    populateDisplay(num);
    if (num1Stored) num2 = parseFloat(displayDiv.textContent);
    else num1 = parseFloat(displayDiv.textContent);
}
//perform arithmetic and correctly store the number
function performArithmetic(arithmetic) {
    //check if display is empty
    if (displayDiv.textContent == "") {
        return;
    }
    //display has number in it
    else {
        //if stored number exists, compute the stored number and the displayed number. the result is becomes the new stored number
        if (num1 != null && num2 == null) {
            clearDisplay = true;
            currentOperator = arithmetic;
            selectCurrentOperator(arithmetic);
            num1Stored = true;
        }
        //get a result and store it as num1 while making num2 empty
        else if (num1 != null && num2 != null && currentOperator) {
            console.log(num2);
            console.log(currentOperator);
            if (num2 == 0 && currentOperator == divide) {
                zeroDenomReset();
                return;
            }
            let result = operate(currentOperator, num1, num2);
            result = cutOffNum(result);
            displayDiv.textContent = result;
            num1 = result;
            num2 = null;
            currentOperator = arithmetic;
            selectCurrentOperator(arithmetic);
            clearDisplay = true;
            num1Stored = true;
        }
        else {
            return;
        }
    }
}
//cuts off a string if its length is greater than 8 character
function cutOffNum(num) {
    if (num.toString().length > 8) {
        let floatNum = num.toString().substring(0, 9);
        floatNum = parseFloat(floatNum);
        return floatNum;
    } else {
        return parseFloat(num);
    }
}
//remove light blue background for all arithmetic buttons and add to currently selected arithmetic button
function selectCurrentOperator(arithmetic) {
    let arithmeticButton;
    switch (arithmetic) {
        case add:
            arithmeticButton = addBut;
            break;
        case subtract:
            arithmeticButton = subtractBut;
            break;
        case multiply:
            arithmeticButton = multiplyBut;
            break;
        case divide:
            arithmeticButton = divideBut;
            break;
        default:
            console.log("selectCurrentOperator function wasn't called with parameter or experieced an error.")
    }
    addBut.classList.remove("currentOperator-background");
    subtractBut.classList.remove("currentOperator-background");
    multiplyBut.classList.remove("currentOperator-background");
    divideBut.classList.remove("currentOperator-background");
    if (arithmetic) arithmeticButton.classList.add("currentOperator-background");
}
//resets the calculator and displays ERROR in display 
function zeroDenomReset() {
    num1 = null;
    num2 = null;
    currentOperator = null;
    clearDisplay = true;
    num1Stored = false;
    displayDiv.textContent = "ERROR";
    selectCurrentOperator();
}
//populates the display when number button clicked
function populateDisplay(num) {
    displayDiv.textContent = displayDiv.textContent + num;
}


//event listeners for numbers
oneBut.addEventListener('click', function () {
    addtoDisplay(1);
});
twoBut.addEventListener('click', function () {
    addtoDisplay(2);
});
threeBut.addEventListener('click', function () {
    addtoDisplay(3);
});
fourBut.addEventListener('click', function () {
    addtoDisplay(4);
});
fiveBut.addEventListener('click', function () {
    addtoDisplay(5);
});
sixBut.addEventListener('click', function () {
    addtoDisplay(6);
});
sevenBut.addEventListener('click', function () {
    addtoDisplay(7);
});
eightBut.addEventListener('click', function () {
    addtoDisplay(8);
});
nineBut.addEventListener('click', function () {
    addtoDisplay(9);
});
zeroBut.addEventListener('click', function () {
    addtoDisplay(0);
});

//event listener to add dot to display
dotBut.addEventListener('click', function () {
    if (displayDiv.textContent.includes('.')) {
        return;
    }
    if (clearDisplay) {
        displayDiv.textContent = '.';
        clearDisplay = false;
        return;
    }
    populateDisplay('.');
    if (num1Stored) num2 = parseFloat(displayDiv.textContent);
    else num1 = parseFloat(displayDiv.textContent);
});
//event listener to change signs of display
signBut.addEventListener('click', function () {
    //return nothing if display is empty
    if (displayDiv.textContent.length === 0 || displayDiv.textContent == '.') {
        return;
    } else {
        //add negative sign to display if number is positive
        if (parseFloat(displayDiv.textContent) > 0) {
            displayDiv.textContent = '-' + displayDiv.textContent;
        }
        //change display to abs value of itself if display is negative
        else {
            displayDiv.textContent = Math.abs(parseFloat(displayDiv.textContent));
        }
        //store the new display in either num1 or num2
        if (num1Stored) num2 = parseFloat(displayDiv.textContent);
        else num1 = parseFloat(displayDiv.textContent);
    }
});
//event listener to change display into percentage
percentageBut.addEventListener('click', function () {
    console.log('Percentage button is pressed.')
    //return nothing if display is empty
    if (displayDiv.textContent.length === 0 || displayDiv.textContent == '.') {
        return;
    } else {
        //current num is positive
        displayDiv.textContent = parseFloat(displayDiv.textContent) * 0.01;

        if (num1Stored) num2 = parseFloat(displayDiv.textContent);
        else num1 = parseFloat(displayDiv.textContent);
    }
});

//event listeners for arithmetics
addBut.addEventListener('click', function () {
    console.log('Plus button is pressed.');
    performArithmetic(add);
});
subtractBut.addEventListener('click', function () {
    console.log('Subtract button is pressed.');
    performArithmetic(subtract);
});
multiplyBut.addEventListener('click', function () {
    console.log('Multiply button is pressed.');
    performArithmetic(multiply);
});
divideBut.addEventListener('click', function () {
    console.log('Divide button is pressed.');
    performArithmetic(divide);
});

//event listener to clear the calculator
clearBut.addEventListener('click', function () {
    num1 = null;
    num2 = null;
    currentOperator = null;
    displayDiv.textContent = "";
    num1Stored = false;
    clearDisplay = false;

    selectCurrentOperator();
});

//add checking for dividing by zero
enterBut.addEventListener('click', function () {
    if (currentOperator) {
        let result;
        if (num1 != null && num2 != null) {
            console.log('a');
            if(num2 == 0 && currentOperator == divide) {
                zeroDenomReset();
                return;
            }
            result = operate(currentOperator, num1, num2);
        } else if (num1 != null && num2 == null) {
            if(num1 == 0 && currentOperator == divide) {
                zeroDenomReset();
                return;
            }
            result = operate(currentOperator, num1, num1);
        }
        result = cutOffNum(result);
        displayDiv.textContent = result;
        num1 = result;
        num2 = null;
        currentOperator = null;
        clearDisplay = true;
        num1Stored = false;
        selectCurrentOperator();
    }
});


//code used to display variables on screen
/**
//selectors for displaying variables
const num1Dis = document.querySelector('#num1');
const num2Dis = document.querySelector('#num2');
const currentOperatorDis = document.querySelector('#currentOperator');
const clearDisplayDis = document.querySelector('#clearDisplay');
const num1StoredDis = document.querySelector('#num1Stored');

//display variables and update every second
setInterval(function () {
    //this code runs every second 
    num1Dis.textContent = num1;
    num2Dis.textContent = num2;
    currentOperatorDis.textContent = currentOperator;
    clearDisplayDis.textContent = clearDisplay;
    num1StoredDis.textContent = num1Stored;
}, 1000);
*/