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

//event listeners to add number to display when respective button is clicked
oneBut.addEventListener('click', function () {
    if (clearDisplay) {
        displayDiv.textContent = '';
        clearDisplay = false;
    }
    populateDisplay('1');
    if (num1Stored) num2 = parseFloat(displayDiv.textContent);
    else num1 = parseFloat(displayDiv.textContent);
});
twoBut.addEventListener('click', function () {
    if (clearDisplay) {
        displayDiv.textContent = '';
        clearDisplay = false;
    }
    populateDisplay('2');
    if (num1Stored) num2 = parseFloat(displayDiv.textContent);
    else num1 = parseFloat(displayDiv.textContent);
});
threeBut.addEventListener('click', function () {
    if (clearDisplay) {
        displayDiv.textContent = '';
        clearDisplay = false;
    }
    populateDisplay('3');
    if (num1Stored) num2 = parseFloat(displayDiv.textContent);
    else num1 = parseFloat(displayDiv.textContent);
});
fourBut.addEventListener('click', function () {
    populateDisplay('4');
});
fiveBut.addEventListener('click', function () {
    populateDisplay('5');
});
sixBut.addEventListener('click', function () {
    populateDisplay('6');
});
sevenBut.addEventListener('click', function () {
    populateDisplay('7');
});
eightBut.addEventListener('click', function () {
    populateDisplay('8');
});
nineBut.addEventListener('click', function () {
    populateDisplay('9');
});
zeroBut.addEventListener('click', function () {
    populateDisplay('0');
});
dotBut.addEventListener('click', function() {
    if (displayDiv.textContent.includes('.')) {
        return;
    }
    if (clearDisplay) {
        displayDiv.textContent = '.';
        clearDisplay = false;
    }
    populateDisplay('.');
    if (num1Stored) num2 = parseFloat(displayDiv.textContent);
    else num1 = parseFloat(displayDiv.textContent);
});
signBut.addEventListener('click', function() {
    if (clearDisplay) {
        displayDiv.textContent = '-';
        clearDisplay = false;
    } else {
        //current num is positive
        if(parseFloat(displayDiv.textContent) > 0) {
            displayDiv.textContent = '-' + displayDiv.textContent;
        } else {
            displayDiv.textContent = Math.abs(parseFloat(displayDiv.textContent));
        }
        if (num1Stored) num2 = parseFloat(displayDiv.textContent);
        else num1 = parseFloat(displayDiv.textContent);
    }
    
});
percentageBut.addEventListener('click', function() {

});



//currentOperatorevent listeners to track what the current currentOperatoris
addBut.addEventListener('click', function () {
    console.log('Plus button is pressed.');
    //check if display is empty
    if (displayDiv.textContent == "") {
        return;
    }
    //display has number in it
    else {
        //if stored number exists, add the stored number and the displayed number.
        //the result is becomes the new stored number

        if (num1 && !num2) {
            clearDisplay = true;
            currentOperator = add;

            num1Stored = true;

        }
        //get a result and store it as num1 while making num2 empty
        else if (num1 && num2 && currentOperator) {
            const result = operate(currentOperator, num1, num2);
            displayDiv.textContent = result;
            num1 = result;
            num2 = null;
            currentOperator = add;

            clearDisplay = true;
            num1Stored = true;
        }
        else {
            return;
        }
    }

});
subtractBut.addEventListener('click', function () {
    console.log('Subtract button is pressed.');
    //check if display is empty
    if (displayDiv.textContent == "") {
        return;
    }

    else {

        if (num1 && !num2) {
            clearDisplay = true;
            currentOperator = subtract;

            num1Stored = true;
        } else if (num1 && num2 && currentOperator) {
            const result = operate(currentOperator, num1, num2);
            displayDiv.textContent = result;
            num1 = result;
            num2 = null;
            currentOperator = subtract;

            clearDisplay = true;
            num1Stored = true;
        }
        else {
            return;
        }
    }
});
multiplyBut.addEventListener('click', function () {
    console.log('Multiply button is pressed.');
    //check if display is empty
    if (displayDiv.textContent == "") {
        return;
    }

    else {

        if (num1 && !num2) {
            clearDisplay = true;
            currentOperator = multiply;

            num1Stored = true;
        } else if (num1 && num2 && currentOperator) {
            const result = operate(currentOperator, num1, num2);
            displayDiv.textContent = result;
            num1 = result;
            num2 = null;
            currentOperator = multiply;

            clearDisplay = true;
            num1Stored = true;
        }
        else {
            return;
        }
    }
});
divideBut.addEventListener('click', function () {
    console.log('Divide button is pressed.');
    //check if display is empty
    if (displayDiv.textContent == "") {
        return;
    }

    else {

        if (num1 && !num2) {
            clearDisplay = true;
            currentOperator = divide;

            num1Stored = true;
        } else if (num1 && num2 && currentOperator) {
            const result = operate(currentOperator, num1, num2);
            displayDiv.textContent = result;
            num1 = result;
            num2 = null;
            currentOperator = divide;

            clearDisplay = true;
            num1Stored = true;
        }
        else {
            return;
        }
    }
});
clearBut.addEventListener('click', function () {
    num1 = null;
    num2 = null;
    currentOperator = null;
    displayDiv.textContent = "";
    num1Stored = false;
    clearDisplay = false;
});
enterBut.addEventListener('click', function () {
    //complete using num1 as num2 if num2 doesn't exist
    if (num1 && currentOperator && !num2) {
        const result = operate(currentOperator, num1, num1);
        displayDiv.textContent = result;
        num1 = result;
        num2 = null;
        currentOperator = null;

        clearDisplay = true;
        num1Stored = false;
    } else if (num1 && num2 && currentOperator) {
        const result = operate(currentOperator, num1, num2);
        console.log(result);
        displayDiv.textContent = result;
        num1 = result;
        num2 = null;
        currentOperator = null;

        clearDisplay = true;
        num1Stored = false;
    }
});


//populates the display when number button clicked
function populateDisplay(num) {
    displayDiv.textContent = displayDiv.textContent + num;
}

//selectors for displaying variables
const num1Dis = document.querySelector('#num1');
const num2Dis = document.querySelector('#num2');
const currentOperatorDis = document.querySelector('#currentOperator');
const clearDisplayDis = document.querySelector('#clearDisplay');
const num1StoredDis = document.querySelector('#num1Stored');

setInterval(function () {
    //this code runs every second 
    num1Dis.textContent = num1;
    num2Dis.textContent = num2;
    currentOperatorDis.textContent = currentOperator;
    clearDisplayDis.textContent = clearDisplay;
    num1StoredDis.textContent = num1Stored;
}, 1000);