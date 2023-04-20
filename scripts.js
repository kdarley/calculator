
function add(a,b){
    let sum = a+b
    // console.log(sum)
    return sum
}

function subtract(a,b){
    let subtraction = a-b
    return subtraction
}

function multiply(a,b){
    let product = a*b
    return product
}

function divide(a,b){
    let division = a/b
    return division
}

let a = null;
let b = null;
let operator = null;

function operate(a, b, operator){
    if (operator == "+"){
        return add(a,b)
    } else if (operator == "-"){
        return subtract(a,b)
    } else if (operator == "*"){
        return multiply(a,b)
    } else if (operator == "/"){
        if (Number.isInteger(divide(a,b))){
            return divide(a,b)
        } else{
            return divide(a,b).toFixed(5)
        }
    } else {
        console.log("operate error")
    }
}

// get current display value
function currentNumber(){
    const display = document.querySelector(".current-number")
    let currentNumber = display.textContent; 
    n = parseFloat(currentNumber)
    console.log(n);
    return n
}

currentNumber()

let numberA = 0
let operater = null
let numberB = null
let result = null

let lastClick = null

function changeDisplayNumber(button){
    numberDisplay = document.querySelector(".current-number")
    if (lastClick == null){
        numberDisplay.textContent = button
        lastClick = 1
        numberA = button  
    } else if (lastClick == 1){
        if (button == "0" && numberDisplay.textContent == "0"){
            lastClick = null
            console.log("don't compound zeros")
        } else if (numberB == null) {
            numberDisplay.textContent = (numberDisplay.textContent + button)
            numberA = (numberDisplay.textContent)
        } else {
            numberDisplay.textContent = (numberDisplay.textContent + button)
            numberB = (numberDisplay.textContent)
        }

    } else {
        numberB = button
        numberDisplay.textContent = button
        lastClick = 1
    }
}

const numbers = document.querySelectorAll("button.number")
numbers.forEach((button) => {
    button.addEventListener('click', () => {
        changeDisplayNumber(button.textContent)
    })
});

function operatorHandler(button){
    if (numberB != null){
        numberA = operate(parseFloat(numberA), parseFloat(numberB), operator),
        numberDisplayResult(numberA),

        operator = button

        numberB = null
    } else {
        operator = button
    }
    lastClick = 2 
}

const operators = document.querySelectorAll("button.operator")
operators.forEach((button) => {
    button.addEventListener('click', () => {
        operatorHandler(button.textContent)
    })
})

function numberDisplayResult(result){
    numberDisplay = document.querySelector(".current-number")
    numberDisplay.textContent = result
    lastClick = 2
}

function cleanUpResult(result){
    numberA = result
    numberB = null
    result = null
}

const equator = document.querySelector("button.equator")
equator.addEventListener('click', () => {
    if (lastClick == 2){
        console.log("clicked equals before having all components")
    } else if (numberB == null) {
        console.log("clicked equals before having all components")

    } else {
        result = operate(parseFloat(numberA), parseFloat(numberB), operator),
        numberDisplayResult(result),
        cleanUpResult(result);
    }
})

function backHandler(){
    numberDisplay = document.querySelector(".current-number")
    if (numberDisplay.textContent.length == 1){
        numberDisplay.textContent = 0
        lastClick = null
    } else {
        numberDisplay.textContent = (numberDisplay.textContent.slice(0,-1))
    }
}

const back = document.querySelector("button.back")
back.addEventListener('click', () => {
    backHandler();
})

function clearHandler(){
    numberDisplay = document.querySelector(".current-number")
    numberDisplay.textContent = 0
    numberA = 0
    operater = null
    numberB = null
    result = null

    lastClick = null
}

const clear = document.querySelector("button.clear")
clear.addEventListener('click', () => {
    clearHandler();
})