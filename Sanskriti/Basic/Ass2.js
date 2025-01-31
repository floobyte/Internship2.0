// Question2. By using the filter method on the array, I can check if each element is even or not by using the modulus operator (%) with 2. The element is even if the result is 0. This can be included in the new array. 

let n = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i<= n.length; i++){
    if (n[i] % 2 === 0){
        console.log(n[i]);
    }
}