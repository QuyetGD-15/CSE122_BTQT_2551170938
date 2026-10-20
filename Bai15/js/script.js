let expressionDisplay = document.getElementById('expression');
let resultDisplay = document.getElementById('result');
let currentExpression = '';

function appendValue(value) {
    if (resultDisplay.innerText !== '0' && currentExpression === '') {
        currentExpression = resultDisplay.innerText;
    }
    currentExpression += value;
    let displayStr = currentExpression.replace(/\*/g, 'x').replace(/\//g, '÷');
    expressionDisplay.innerText = displayStr;
}

function clearScreen() {
    currentExpression = '';
    expressionDisplay.innerText = '';
    resultDisplay.innerText='0';
}

function calculateResult() {
    try {
        if (currentExpression === '') return;
        let result = eval(currentExpression);
        if (result === Infinity || isNaN(result)) {
            resultDisplay.innerText = "Lỗi";
        } else {
            resultDisplay.innerText= result;
        }
        currentExpression = '';

    } catch (error) {
        resultDisplay.innerText = 'Lỗi';
        currentExpression = '';
    }
}