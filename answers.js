//my answers to the workshop questions

//function that returns first character of a string

function firstChar(anyString) {
    return anyString.substring(0, 1);
}

console.log(firstChar("string")); //s
console.log(firstChar("")); //empty string length 1 char
//console.log(firstChar(223)); error

//function that takes string and returns last character

function lastChar(anyString) {
    var length = anyString.length;
    return anyString.substring(length - 1, length);
}

console.log(lastChar("string")); //g
console.log(lastChar("")); //empty string length 1 char

//function that takes a string and a number, returns character at position
//representing the number

function characterAtPosition(anyString, position) {
    return anyString.charAt(position);
}

console.log(characterAtPosition("my string", 5)); //r
console.log(characterAtPosition("", 0)); //empty string length 1
console.log(characterAtPosition("", 5)); //empty string length 1

//function that takes 2 numbers and adds them together

function add(a, b) {
    return a + b;
}

console.log(add(2, 4)); //6
console.log(add("string", 7)); //string7, type is string

//function that takes two inputs and multiplies them together

function multiply(a, b) {
    return a * b;
}

console.log(multiply(2, 4)); //8
console.log(multiply("string", 7)); //NaN

//function that takes two numbers and a string
//perform operation on the two numbers described by the string

function operation(a, b, operator) {
    switch (operator) {
        case "add":
            return a + b;
            break;
        case "substract":
            return a - b;
            break;
        case "mult":
            return a * b;
            break;
        case "div":
            return a / b;
            break;
        default:
            return 0;
    }
}

console.log(operation(10, 5, "add")); //15
console.log(operation(10, 5, "div")); //2
console.log(operation(10, 5, "something")); //0