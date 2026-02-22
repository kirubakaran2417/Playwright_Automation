// ===== DAY 2: DATA TYPES - NUMBERS AND MATH =====
// Learning: Working with numbers and Math object

console.log('--- Number Types ---');
console.log('Integer:', 42);
console.log('Decimal:', 3.14);
console.log('Scientific:', 1e6);           // 1,000,000
console.log('Negative:', -100);
console.log('Infinity:', Infinity);
console.log('NaN (Not a Number):', NaN);

// Number methods
console.log('\n--- Number Methods ---');
let num = 3.14159;
console.log('Original:', num);
console.log('toFixed(2):', num.toFixed(2));     // 3.14
console.log('toPrecision(3):', num.toPrecision(3));  // 3.14
console.log('toString():', num.toString());     // "3.14159"

// Math object
console.log('\n--- Math Object ---');
console.log('Math.PI:', Math.PI);
console.log('Math.E:', Math.E);
console.log('Math.abs(-10):', Math.abs(-10));   // 10
console.log('Math.round(3.6):', Math.round(3.6));   // 4
console.log('Math.ceil(3.2):', Math.ceil(3.2));     // 4
console.log('Math.floor(3.9):', Math.floor(3.9));   // 3
console.log('Math.sqrt(16):', Math.sqrt(16));   // 4
console.log('Math.pow(2, 3):', Math.pow(2, 3)); // 8
console.log('Math.min(1, 5, 3, 2):', Math.min(1, 5, 3, 2));  // 1
console.log('Math.max(1, 5, 3, 2):', Math.max(1, 5, 3, 2));  // 5
console.log('Math.random():', Math.random());   // Random number 0-1

// Random number in range
console.log('\n--- Random Number Examples ---');
let randomInt = Math.floor(Math.random() * 10) + 1;  // 1-10
let randomRange = Math.floor(Math.random() * (100 - 50 + 1)) + 50;  // 50-100
console.log('Random 1-10:', randomInt);
console.log('Random 50-100:', randomRange);
