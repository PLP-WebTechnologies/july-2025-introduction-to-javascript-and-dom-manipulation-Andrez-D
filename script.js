// Part 1: Variables, Data Types, Operators, Conditionals
const userName = "Alex";
const price = 120;
const discountPercent = 25;

let finalPrice;
if (discountPercent >= 20) {
  finalPrice = price - (price * discountPercent / 100);
  console.log(`Hi ${userName}, discount applied! Final price: $${finalPrice}`);
} else {
  finalPrice = price;
  console.log(`Hi ${userName}, no discount. Price remains $${finalPrice}`);
}
document.getElementById("outputPart1").textContent =
  `Part 1 => User: ${userName}, Final Price: $${finalPrice.toFixed(2)}`;

// Part 2: Custom Functions

// Function to calculate area of rectangle
function calculateArea(length, width) {
  return length * width;
}

// Function to greet user
function greetUser(name) {
  return `Hello, ${name}! Welcome back.`;
}

const area = calculateArea(5, 10);
const greeting = greetUser(userName);

console.log(greeting);
console.log(`Calculated area: ${area}`);
document.getElementById("outputFunctions").textContent =
  `Part 2 => ${greeting} Area calculated: ${area}`;

// Part 3: Loops

// For loop: Generate numbers 1 to 5
let numberList = [];
for (let i=1; i<=5; i++) {
  numberList.push(i);
}

// While loop: Sum numbers 1 to 5
let sum = 0;
let j = 1;
while (j <= 5) {
  sum += j;
  j++;
}

console.log("Numbers generated (for loop):", numberList);
console.log("Sum of numbers 1 to 5 (while loop):", sum);

document.getElementById("outputLoops").textContent =
  `Part 3 => Numbers: ${numberList.join(", ")} | Sum: ${sum}`;

// Part 4: DOM Manipulation

// 1. Select element and change its text content
const outputDOM = document.getElementById("outputDOM");
outputDOM.textContent = "Part 4 => DOM Manipulation Active.";

// 2. Toggle highlight class on clicking a button
const toggleButton = document.getElementById("toggleButton");
toggleButton.addEventListener("click", () => {
  outputDOM.classList.toggle("highlight");
});

// 3. Create and append new element dynamically
const newPara = document.createElement("p");
newPara.textContent = "This paragraph was added dynamically with JavaScript.";
document.body.appendChild(newPara);

console.log("DOM manipulation demo completed.");
