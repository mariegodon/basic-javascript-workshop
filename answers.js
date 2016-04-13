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
    return anyString.substring(length-1, length);
}

console.log(lastChar("string")); //g
console.log(lastChar("")); //empty string length 1 char

//function that takes a string and a number, returns character at position
//representing the number

function characterAtPosition(anyString, position){
    return anyString.charAt(position);
}

console.log(characterAtPosition("my string", 5)); //r
console.log(characterAtPosition("", 0)); //empty string length 1
console.log(characterAtPosition("", 5)); //empty string length 1