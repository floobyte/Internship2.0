// Question3.  A factorial number is the product of all positive integers, which are equal to or less than the given number. 

function factorial(n) {
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

console.log(factorial(5));