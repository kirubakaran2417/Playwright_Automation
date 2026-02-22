// ===== DAY 5: ARRAYS =====
// Learning: Array creation, methods, and manipulation

// 1. Creating arrays
console.log('--- Creating Arrays ---');
let fruits = ['Apple', 'Banana', 'Orange', 'Mango'];
let numbers = [1, 2, 3, 4, 5];
let mixed = [1, 'Hello', true, null];

console.log('Fruits:', fruits);
console.log('Numbers:', numbers);
console.log('Mixed:', mixed);

// 2. Array properties and methods
console.log('\n--- Array Properties & Methods ---');
console.log('Length:', fruits.length);
console.log('First element [0]:', fruits[0]);
console.log('Last element [3]:', fruits[3]);

// 3. Adding and removing elements
console.log('\n--- Adding/Removing Elements ---');
fruits.push('Grape');         // Add to end
console.log('After push:', fruits);

let removed = fruits.pop();   // Remove from end
console.log('Removed:', removed);
console.log('After pop:', fruits);

fruits.unshift('Kiwi');       // Add to beginning
console.log('After unshift:', fruits);

removed = fruits.shift();     // Remove from beginning
console.log('Removed:', removed);
console.log('After shift:', fruits);

// 4. Array slicing and concatenation
console.log('\n--- Slicing & Concatenation ---');
console.log('slice(1, 3):', fruits.slice(1, 3));
let combined = fruits.concat(['Strawberry', 'Blueberry']);
console.log('After concat:', combined);

// 5. Array methods: map, filter, find
console.log('\n--- Array Iteration Methods ---');
let nums = [1, 2, 3, 4, 5];
let doubled = nums.map(n => n * 2);
console.log('map (x2):', doubled);

let evens = nums.filter(n => n % 2 === 0);
console.log('filter (even):', evens);

let found = nums.find(n => n > 3);
console.log('find (> 3):', found);

// 6. Join and split
console.log('\n--- Join & Split ---');
let joined = fruits.join(', ');
console.log('join(", "):', joined);

let splitArray = 'React,Vue,Angular'.split(',');
console.log('split(","):', splitArray);

// 7. Reverse and sort
console.log('\n--- Reverse & Sort ---');
let rev = [1, 2, 3, 4, 5];
console.log('reverse():', rev.reverse());

let words = ['banana', 'apple', 'cherry'];
console.log('sort():', words.sort());
