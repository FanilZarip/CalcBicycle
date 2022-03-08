// console.dir(document.body);

let result = document.getElementById('result');
let equal = document.getElementById('equal');
let sum = document.getElementById('sum');
let div = document.getElementById('div');
let mult = document.getElementById('mult');
let sub = document.getElementById('sub');
let full__clear = document.querySelector('.full__clear');
let numbers = document.querySelectorAll('.number__button'); // Get all buttons with numbers. It will make object. 

let mathS = {
    sum,
    div,
    mult,
    sub,
};

console.log(mathS.sum.id);

let resultsForNum1 = '';
let resultsForNum2 = '';
let mathOperation = null;

let num1 = '';
let num2 = '';
let counter = 0;

console.log(numbers); //Print created objects to console log


function getNum1() {
    resultsForNum1 = 0;

    for (const number of numbers) {
    
        function printNum1 () {
            resultsForNum1 = resultsForNum1 + number.innerText;
            console.log('num1', resultsForNum1);
            console.log('ReallyNum1', num1);
            result.innerText = +resultsForNum1;
                  
        }
        number.addEventListener('click', printNum1);
        // function clearAll() {
        //     resultsForNum1 = '';
        //     result.innerText = +resultsForNum1;
        //     console.log(1)
        // }
        // full__clear.addEventListener('click', clearAll);
        for (const key in mathS) {
            function goToGetNum2 () {
                mathOperation = mathS[key].id
                number.removeEventListener('click', printNum1);
                
                num1 = +resultsForNum1;
                // console.log(mathOperation);
                // console.log('Realnum1', num1);
                // console.log('num1', resultsForNum1);
                counter += 1;
                if (counter === 10) {
                    matOperData();
                }
                console.log('counter', counter);
                resultsForNum2 = '';
            }
            mathS[key].addEventListener('click', goToGetNum2);
        }  
    }
}

getNum1();

console.log('outercounter', counter);
console.log('outerNum1', num1);



function matOperData() {
    // counter = 0;
    // num1 = +resultsForNum1;
    resultsForNum1 = '';
    resultsForNum2 = '';
    for (const number of numbers) {
    
        function printNumber2 () {
            resultsForNum2 += number.innerText;
            // console.log('num2', num2);
            // console.log('result.innerText', result.innerText);
            result.innerText = +resultsForNum2;
            // plus.onclick = matOperData;
            // console.log(mathOperation);
            num2 = +resultsForNum2;
            equal.addEventListener('click', Calc);
        }
        console.log("mathOperation", mathOperation);
        number.addEventListener('click', printNumber2);
    }
 
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

    getNum1();
    equal.removeEventListener('click', Calc);
    // console.log(result);
}


console.log('I am breaked from for');