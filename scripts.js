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
        return divide(a,b)
    } else {
        console.log("operate error")
    }
}





console.log(add(1,1))
console.log(subtract(1,1))
console.log(multiply(1,0))
console.log(divide(2,1))
console.log(operate(2,2,"/"))