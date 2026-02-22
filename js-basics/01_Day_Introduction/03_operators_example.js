// ===== DAY 1: INTRODUCTION - OPERATORS =====
// Learning: Arithmetic, comparison, and logical operators

// 1. Arithmetic Operators
console.log('--- Arithmetic Operators ---');
let a = 10;
let b = 3;

console.log('Addition (10 + 3):', a + b);        // 13
console.log('Subtraction (10 - 3):', a - b);    // 7
console.log('Multiplication (10 * 3):', a * b); // 30
console.log('Division (10 / 3):', a / b);       // 3.333...
console.log('Modulus (10 % 3):', a % b);        // 1 (remainder)
console.log('Exponentiation (10 ** 2):', a ** 2); // 100

// 2. Comparison Operators
console.log('\n--- Comparison Operators ---');
console.log('10 == "10":', 10 == "10");         // true (loose equality)
console.log('10 === "10":', 10 === "10");       // false (strict equality)
console.log('10 != 5:', 10 != 5);               // true
console.log('10 !== "10":', 10 !== "10");       // true
console.log('10 > 5:', 10 > 5);                 // true
console.log('10 < 5:', 10 < 5);                 // false
console.log('10 >= 10:', 10 >= 10);             // true
console.log('10 <= 5:', 10 <= 5);               // false

// 3. Logical Operators
console.log('\n--- Logical Operators ---');
let isRaining = true;
let hasUmbrella = false;

console.log('isRaining && hasUmbrella:', isRaining && hasUmbrella); // false (AND)
console.log('isRaining || hasUmbrella:', isRaining || hasUmbrella); // true (OR)
console.log('!isRaining:', !isRaining);                             // false (NOT)

// 4. Assignment Operators
console.log('\n--- Assignment Operators ---');
let x = 5;
console.log('x = 5:', x);
x += 3;
console.log('x += 3 (x = x + 3):', x);  // 8
x -= 2;
console.log('x -= 2 (x = x - 2):', x);  // 6
x *= 2;
console.log('x *= 2 (x = x * 2):', x);  // 12
