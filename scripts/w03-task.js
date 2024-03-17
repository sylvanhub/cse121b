/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
// Function declaration for add
function add(number1, number2) {
  return number1 + number2;
}

// Function declaration for addNumbers
function addNumbers() {
  let addNumber1 = Number(document.querySelector('#add1').value);
  let addNumber2 = Number(document.querySelector('#add2').value);
  document.querySelector('#sum').value = add(addNumber1, addNumber2);
}

// Event listener for the button with ID addNumbers
document.querySelector('#addNumbers').addEventListener('click', addNumbers);
/* Function Expression - Subtract Numbers */

function subtractNumbers () {
    let subtract1 = Number(document.querySelector("#subtract1").value);
    let  subtract2 = Number(document.querySelector("#subtract2").value);
    document.querySelector("#difference").value = add(subtract1, subtract2);
}

document.querySelector("#subtractNumbers").addEventListener("click",subtractNumbers);



/* Arrow Function - Multiply Numbers */
// Arrow function for multiplication
const multiply = (number1, number2) => number1 * number2;

// Arrow function for multiplying numbers
const multiplyNumbers = () => {
  const factor1 = Number(document.querySelector('#factor1').value);
  const factor2 = Number(document.querySelector('#factor2').value);
  document.querySelector('#product').value = multiply(factor1, factor2);
};

// Event listener for the button with ID multiplyNumbers
document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);



/* Open Function Use - Divide Numbers */
// Function declaration for division
function divide(dividend, divisor) {
  return dividend / divisor;
}

// Function declaration for dividing numbers
function divideNumbers() {
  const dividend = Number(document.querySelector('#dividend').value);
  const divisor = Number(document.querySelector('#divisor').value);
  document.querySelector('#quotient').value = divide(dividend, divisor);
}

// Event listener for the button with ID divideNumbers
document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);


/* Decision Structure */
// Declare and instantiate an array variable to hold numbers 1 through 13
let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

// Assign the value of the array variable to the HTML element with ID "array"
document.querySelector('#array').innerText = numbersArray.join(', ');

// Use the filter() method to find all odd numbers and assign the result to the HTML element with ID "odds"
document.querySelector('#odds').innerText = numbersArray.filter(number => number % 2 === 1).join(', ');

// Use the filter() method to find all even numbers and assign the result to the HTML element with ID "evens"
document.querySelector('#evens').innerText = numbersArray.filter(number => number % 2 === 0).join(', ');

// Use the reduce() method to sum the array elements and assign the result to the HTML element with ID "sumOfArray"
document.querySelector('#sumOfArray').innerText = numbersArray.reduce((sum, number) => sum + number, 0);

// Use the map() method to multiply each element by 2 and assign the result to the HTML element with ID "multiplied"
document.querySelector('#multiplied').innerText = numbersArray.map(number => number * 2).join(', ');

// Use the map() and reduce() methods to sum the array elements after multiplying each element by two.
// Assign the result to the HTML element with ID "sumOfMultiplied".
document.querySelector('#sumOfMultiplied').innerText = numbersArray.map(number => number * 2).reduce((sum, number) => sum + number, 0);


