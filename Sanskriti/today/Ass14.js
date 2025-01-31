// Question14.  Create a function that checks if a number is even or odd using the modulus operator.

function check(num) {
    if (num % 2 === 0) {
        return "Even";  
    } else {
        return "Odd";   
    }
}

let number = 8;  
console.log("number is: " + check(number));
