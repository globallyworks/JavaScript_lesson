// Write the function sum such that it returns the sum of a and b.


function operation(num1, num2, num3) {
    let operation = num1 +num2 * num3;
    let subtraction = num1-num2-num3
    let info = {className: "BCH", grade:"5"}
    return [operation, subtraction, info]
}

console.log(operation(8,6,3)[0]);   // This will do the operation
console.log(operation(8,6,3)[1]);   // This will do the subtraction
console.log(operation(8,6,3)[2].className);   // This will return classname








