// ===== DAY 1: INTRODUCTION - DATA TYPES =====
// Learning: Understanding JavaScript primitive data types

// 1. String - Text data
let name = 'Alice';
let message = "Hello, World!";
let description = `This is a template literal string`;

console.log('--- String Data Type ---');
console.log(name);
console.log(message);
console.log(description);

// 2. Number - Integers and decimals
let integer = 42;
let decimal = 3.14;
let negative = -10;

console.log('\n--- Number Data Type ---');
console.log('Integer:', integer);
console.log('Decimal:', decimal);
console.log('Negative:', negative);

// 3. Boolean - True or False
let isStudent = true;
let isMarried = false;

console.log('\n--- Boolean Data Type ---');
console.log('Is Student:', isStudent);
console.log('Is Married:', isMarried);

// 4. Undefined - Variable declared but not assigned
let notAssigned;
console.log('\n--- Undefined Type ---');
console.log('Not Assigned:', notAssigned);

// 5. Null - Intentional empty value
let empty = null;
console.log('Null Value:', empty);

// 6. typeof operator to check data type
console.log('\n--- Using typeof Operator ---');
console.log('typeof name:', typeof name);          // string
console.log('typeof integer:', typeof integer);    // number
console.log('typeof isStudent:', typeof isStudent); // boolean
console.log('typeof notAssigned:', typeof notAssigned); // undefined
console.log('typeof empty:', typeof empty);        // object (quirk in JS!)
