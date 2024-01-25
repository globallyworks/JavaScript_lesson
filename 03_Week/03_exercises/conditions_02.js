/*
Create a program getTemperature that asks the user to input a temperature in Celsius 
and then outputs whether they should wear a jacket (if the temperature is below 15°C) or not.
 */

function getTemperature(temperature) {
  if (temperature < 15) {
    return console.log("You should wear a jacket");
  } else {
    return console.log("you don't have to wear a jacket");
  }
}

getTemperature(Number(prompt("What is the current temperature?")));
