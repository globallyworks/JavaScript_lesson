/*
Compose a function called pluralize that:

Accepts two arguments: a noun and a number.
Returns a string combining the number and the appropriately pluralized 
form of the noun, such as '5 cats' or '1 dog'.

 */
function pluralize(noun, number) {
  if (number < 2) {
    return `${number} ${noun}`;
  } else {
    return `${number} ${noun}s`;
  }
}

// Sample usage - do not modify
console.log("I have " + pluralize("cat", 0)); // I have 0 cat
console.log("I have " + pluralize("dog", 1)); // I have 1 dog
console.log("I have " + pluralize("parrot", 7)); // I have 7 parrots
