// Question4.  To check if a given number is prime, loop from 2 to the square root of the number. If any integer evenly divides it, the number is not prime. 

let num = 17; 
let isPrime = true;

if (num < 2) {
    isPrime = false;
} else {
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            isPrime = false;
            break; 
        }
    }
}

if (isPrime) {
    console.log("Prime Number");
} else {
    console.log("Not a Prime Number");
}