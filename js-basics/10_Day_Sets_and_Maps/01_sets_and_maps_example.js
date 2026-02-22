// ===== DAY 10: SETS AND MAPS =====
// Learning: Set and Map data structures

// 1. Set - unique values only
console.log('--- Set ---');
let numbers = new Set();
numbers.add(1);
numbers.add(2);
numbers.add(3);
numbers.add(2);  // Duplicate - won't be added
console.log('Set:', numbers);
console.log('Size:', numbers.size);

// 2. Set from array
console.log('\n--- Set from Array ---');
let fruits = ['Apple', 'Banana', 'Orange', 'Apple', 'Banana'];
let uniqueFruits = new Set(fruits);
console.log('Original array:', fruits);
console.log('Unique Set:', uniqueFruits);
console.log('Array from Set:', Array.from(uniqueFruits));

// 3. Set methods
console.log('\n--- Set Methods ---');
let colors = new Set();
colors.add('Red');
colors.add('Green');
colors.add('Blue');
console.log('Has Red:', colors.has('Red'));
console.log('Has Yellow:', colors.has('Yellow'));

colors.delete('Green');
console.log('After delete Green:', colors);

// 4. Set iteration
console.log('\n--- Set Iteration ---');
colors.forEach(color => {
  console.log('Color:', color);
});

// 5. Map - key-value pairs
console.log('\n--- Map ---');
let studentMap = new Map();
studentMap.set('id1', 'Alice');
studentMap.set('id2', 'Bob');
studentMap.set('id3', 'Charlie');

console.log('Map:', studentMap);
console.log('Size:', studentMap.size);

// 6. Map get method
console.log('\n--- Map Get ---');
console.log('Get id1:', studentMap.get('id1'));
console.log('Get id2:', studentMap.get('id2'));
console.log('Get id4:', studentMap.get('id4'));  // undefined

// 7. Map methods
console.log('\n--- Map Methods ---');
console.log('Has id1:', studentMap.has('id1'));
console.log('Has id5:', studentMap.has('id5'));

studentMap.delete('id2');
console.log('After delete id2:', studentMap);

// 8. Map iteration
console.log('\n--- Map Iteration ---');
for (let [key, value] of studentMap) {
  console.log(`${key}: ${value}`);
}

// 9. Map from object
console.log('\n--- Map from Object ---');
let person = { name: 'John', age: 30, country: 'USA' };
let personMap = new Map(Object.entries(person));
console.log('Map from object:', personMap);

// 10. Difference: Set vs Map
console.log('\n--- Set vs Map ---');
console.log('Set stores: Unique values');
console.log('Map stores: Key-value pairs');
console.log('Set methods: add, delete, has, clear');
console.log('Map methods: set, get, delete, has, clear');
