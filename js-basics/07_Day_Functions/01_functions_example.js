// ===== DAY 7: FUNCTIONS =====
// Learning: Function declarations, expressions, arrow functions

// 1. Function declaration
console.log('--- Function Declaration ---');
function greet(name) {
  return 'Hello, ' + name;
}
console.log(greet('Alice'));
console.log(greet('Bob'));

// 2. Function with multiple parameters
console.log('\n--- Function with Multiple Parameters ---');
function add(a, b) {
  return a + b;
}
console.log('5 + 3 =', add(5, 3));

// 3. Function expression
console.log('\n--- Function Expression ---');
const multiply = function(a, b) {
  return a * b;
};
console.log('5 * 3 =', multiply(5, 3));

// 4. Arrow function (ES6)
console.log('\n--- Arrow Function ---');
const subtract = (a, b) => {
  return a - b;
};
console.log('5 - 3 =', subtract(5, 3));

// Shorthand arrow function
const square = x => x * x;
console.log('5 squared =', square(5));

// 5. Default parameters
console.log('\n--- Default Parameters ---');
function welcome(name = 'Guest', country = 'USA') {
  return `Welcome, ${name} from ${country}`;
}
console.log(welcome());
console.log(welcome('John'));
console.log(welcome('Maria', 'Spain'));

// 6. Rest parameters
console.log('\n--- Rest Parameters ---');
function sum(...numbers) {
  let total = 0;
  for (let num of numbers) {
    total += num;
  }
  return total;
}
console.log('sum(1, 2, 3):', sum(1, 2, 3));
console.log('sum(1, 2, 3, 4, 5):', sum(1, 2, 3, 4, 5));

// 7. Scope - Local vs Global
console.log('\n--- Variable Scope ---');
let globalVar = 'Global';
function scopeExample() {
  let localVar = 'Local';
  console.log('Inside function:', globalVar, localVar);
}
scopeExample();
console.log('Outside function:', globalVar);

// 8. Callback function
console.log('\n--- Callback Function ---');
function process(a, b, callback) {
  let result = a + b;
  callback(result);
}
process(5, 3, function(result) {
  console.log('Result from callback:', result);
});
