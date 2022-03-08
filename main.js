// console.dir(document.body);

let result = document.getElementById('result');
let equal = document.getElementById('equal');
let plus = document.getElementById('plus');
// let mathOperation = {plus:+};
let num1 = '';
let num2 = '';
let mathOperation = null;
console.log("mathOperation:", mathOperation);


let seven = document.querySelectorAll('.number__button')[0]; 
let eight = document.querySelectorAll('.number__button')[1]; 
let nine = document.querySelectorAll('.number__button')[2];
let six = document.querySelectorAll('.number__button')[3];


seven.addEventListener("click", printSeven); 
nine.addEventListener("click", addNineNum1);


function printSeven () {
    num1 = num1 + seven.innerText;
    result.innerText = +num1;
    plus.onclick = matOperData;
    console.log(mathOperation);
}

function addNineNum1 () {
    num1 = num1 + nine.innerText;
    result.innerText = +num1;
    plus.onclick = matOperData;
    console.log(mathOperation);
}

function addNineNum2 () {
    num2 = num2 + nine.innerText;
    result.innerText = +num2;
    plus.onclick = matOperData;
    console.log(mathOperation);
}
  
function printNum2 () {
    num2 = num2 + eight.innerText;
    console.log('num2', num2);
    result.innerText = +num2;
    plus.onclick = matOperData;
    console.log(mathOperation);
}

// let mathOperationsObj = document.querySelectorAll('.math_operations__button');
function addListeners () {    
    eight.addEventListener("click", printNum2);
    nine.addEventListener("click", addNineNum2);    
}

function removeListeners () {
    seven.removeEventListener("click", printSeven);
    nine.removeEventListener("click", addNineNum1);
}

function matOperData() {
    // console.log("mathOperation", mathOperation);
    mathOperation = 'sum';
    console.log("mathOperation", mathOperation);
    removeListeners();
    addListeners();
}

function Calc () {
    if (mathOperation === 'sum') {
        result.innerText = +num1 + +num2;
        console.log("Calculated:", result.innerText);
    }
}

equal.onclick = Calc;
