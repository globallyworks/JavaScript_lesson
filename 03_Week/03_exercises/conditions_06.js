/**
Develop a function called greaterNum which:

 - Accepts two arguments, both of which are numbers.
 - Returns the larger of the two numbers.

 */

function greaterNum(number1, number2) {
  if (number1 > number2) {
    return `Number ${number1} is larger than ${number2}`;
  } else {
    return `Number ${number2} is larger than ${number1}`;
  }
}

// Sample usage - do not modi,fy
console.log(greaterNum(5, 10)); // Number 10 is larger than 5
console.log(greaterNum(2, 1)); // Number 2 is larger than 1
console.log(greaterNum(4, 25)); // Number 25 is larger than 4
