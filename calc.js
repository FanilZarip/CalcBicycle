// console.dir(document.body);

let result = document.getElementById('result');
let equal = document.getElementById('equal');
let sum = document.getElementById('sum');
let div = document.getElementById('div');
let mult = document.getElementById('mult');
let sub = document.getElementById('sub');
let full__clear = document.querySelector('.full__clear');
let backSpace = document.querySelector('.clear__backspace');
let numbers = document.querySelectorAll('.number__button'); // Get all buttons with numbers. It will make object. 

let mathS = {
    sum,
    div,
    mult,
    sub,
};


let resultsForNum = '';

let mathOperation = null;
let correctedResult = null;                   


let num1 = '';
let num2 = '';

console.log(numbers); //Print created objects to console log


    resultsForNum = 0;

    

    for (const number of numbers) {

        

        number.addEventListener('click', printNum1);
    
        function printNum1 () {

            resultsForNum = resultsForNum + number.innerText;

            let resultsForNumLength = resultsForNum.length;

            if (resultsForNumLength > 6) {
                result.style.fontSize = "45px"
            } else {
                result.style.fontSize = "96px"
            }
            result.innerText = +resultsForNum;
            num1 = +resultsForNum;

        }

        

        function printNum2 () {
            resultsForNum = resultsForNum + number.innerText;
            result.innerText = +resultsForNum;
            num2 = +resultsForNum;
            
            let resultsForNumLength = resultsForNum.length;

            if (resultsForNumLength > 6) {
                result.style.fontSize = "45px"
            }
            
        }
        
        for (const key in mathS) {
            function goToGetNum2 () {
                mathOperation = mathS[key].id
                number.removeEventListener('click', printNum1);
                number.addEventListener('click', printNum2);

                backSpace.removeEventListener('click', deleteSymbolNum1);
                backSpace.addEventListener('click', deleteSymbolNum2);

                resultsForNum = 0;
            console.log('ReallyNum1', num1);
            console.log('ReallyNum2', num2);
            }
            mathS[key].addEventListener('click', goToGetNum2);
        }  


        equal.addEventListener('click', startCalculating);
        full__clear.addEventListener('click', resetAll);

        function resetAll () {
            number.removeEventListener('click', printNum2);
            number.addEventListener('click', printNum1);
            backSpace.addEventListener('click', deleteSymbolNum1);
            backSpace.removeEventListener('click', deleteSymbolNum2);

            resultsForNum = 0;
            num1 = 0;
            num2 = 0;
            result.innerText = +resultsForNum;
            result.style.fontSize = "96px";
        }

        function startCalculating () {
            backSpace.addEventListener('click', deleteSymbolNum1);
            backSpace.removeEventListener('click', deleteSymbolNum2);
            number.removeEventListener('click', printNum2);
            Calc();
            number.addEventListener('click', printNum1);
            resultsForNum = 0;
        }   
        
    }

    backSpace.addEventListener('click', deleteSymbolNum1);
    function deleteSymbolNum1 () {
        resultsForNum = resultsForNum.substr(0, resultsForNum.length - 1);
        result.innerText = +resultsForNum;
        num1 = resultsForNum;
    }

    function deleteSymbolNum2 () {
        resultsForNum = resultsForNum.substr(0, resultsForNum.length - 1);
        result.innerText = +resultsForNum;
        num2 = resultsForNum;
    }

function Calc () {

    const mathOperations = {
        sum: +num1 + +num2,
        sub: +num1 - +num2,
        mult: +num1 * +num2,
        div: +num1 / +num2,
    }

    const hasRemainder = (+num1 % +num2) !== 0;
    const divisionCase = mathOperation === 'div';
    const isNotIntegerResult = (divisionCase && hasRemainder);
    const tryDivToZero = divisionCase && (+num2 === 0);

    if (mathOperation in mathOperations) {

        if (tryDivToZero) {
            result.innerText = 'Error';
            console.log('testZero', tryDivToZero);
        }

        else if (isNotIntegerResult) {
            result.innerText = +mathOperations[mathOperation].toFixed(2);
            console.log('test', result.innerText);
        }
        
        else {
            result.innerText = mathOperations[mathOperation];
        }       
    } 

    // getNum1();
    equal.removeEventListener('click', Calc);
    // console.log(result);
}


console.log('I am breaked from for');