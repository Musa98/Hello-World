// let firstValue = 0;
// let secondValue = 0;
// let operator = false;
let result = '';
let endCalculate = false;

function calc(value) {

    if(endCalculate) {
        document.querySelector('.calculator-result').value = '';
        result = '';
        endCalculate = false;
    }

    if(result === '' && (value === '+' || value === '-' || value === '*' || value === '/' || value === '=')){
        alert('Сначало введи цифру');
        return null;
    }

    if((value === '+' || value === '-' || value === '*' || value === '/' || value === '=') && (result[result.length - 1] === '+' || result[result.length - 1] === '-' || result[result.length - 1] === '*' || result[result.length - 1] === '/' || result[result.length - 1] === '=')) {
        alert('Введи пожалуйста цифру');
        return null;
    }

    if (value === '=') {
        if(document.querySelector('.calculator-result').value.includes('/0')) {
            alert('Неверная операция');
            document.querySelector('.calculator-result').value = '';
            result = '';
            endCalculate = true;
        } else {
            document.querySelector('.calculator-result').value = eval(result);
            endCalculate = true;
        }

    } else {
        document.querySelector('.calculator-result').value += value;
        result = document.querySelector('.calculator-result').value;
    }

}