
// Question15.  Create a real-world example that combines arithmetic and logical operators.

let priceOfItem = 70;  
let quantity = 5;       
let hasMembership = true;  


let totalPrice = priceOfItem * quantity;


let getsDiscount = (totalPrice >= 100) && hasMembership;


if (getsDiscount) {
    totalPrice = totalPrice * 0.5;  
}

console.log("Total Price: " + totalPrice); 