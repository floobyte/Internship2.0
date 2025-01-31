// Question3. A factorial number is the product of all positive integers, which are equal to or less than the given number. 

let n = 6;
let i = 1;
let result = 1;

while(i <= n){
    result *= i;
    i++;
}
console.log(result);