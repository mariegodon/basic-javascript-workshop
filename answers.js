//my answers to the workshop questions

//function that returns first character of a string

function firstChar(input) {
    return input.substring(0, 1);
}

console.log(firstChar("string")); //s
console.log(firstChar("")); //empty string length 1 char
//console.log(firstChar(223)); error

//function that takes string and returns last character

function lastChar(input) {
    var length = input.length;
    return input.substring(length-1, length);
}

console.log(lastChar("string")); //g
console.log(lastChar("")); //empty string length 1 char