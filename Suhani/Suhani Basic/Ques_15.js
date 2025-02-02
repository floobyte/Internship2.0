// Question15.  Create a real-world example that combines arithmetic and logical operators.

function getFinalPrice(totalBill) {
    if (totalBill >= 100) {
        return totalBill - (totalBill * 0.10);
    }
    return totalBill; 
}

console.log(getFinalPrice(120)); 
console.log(getFinalPrice(80));  