// Question14.  Create a function that checks if a number is even or odd using the modulus operator.

function isEvenOrOdd(num) {
    if (num % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}


console.log(isEvenOrOdd(10)); 
console.log(isEvenOrOdd(7));