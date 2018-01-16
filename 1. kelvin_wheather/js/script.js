// Kelvin value
const kelvin = prompt('What is the Kelvin temperature today?');
// Celsius value - 273
const celsius = kelvin - 273;

const fahrenheit = celsius*(9/5) + 32;
let resultFah = Math.floor(fahrenheit);
console.log(`The temperature is ${resultFah} degrees fahrenheit.`);
