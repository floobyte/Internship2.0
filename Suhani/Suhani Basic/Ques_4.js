// Question4.  To check if a given number is prime, loop from 2 to the square root of the number. If any integer evenly divides it, the number is not prime. 

const isPrime = n => {
    if (n < 2) return false;
    for (let i = 2; i * i <= n; i++) {
        if (n % i === 0) return false;
    }
    return true;
};

console.log(isPrime(7));  // Output: true
console.log(isPrime(10));