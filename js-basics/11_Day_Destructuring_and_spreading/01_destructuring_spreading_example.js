// ===== DAY 11: DESTRUCTURING AND SPREADING =====
// Learning: Destructuring objects and arrays, spread operator

// 1. Array destructuring
console.log('--- Array Destructuring ---');
let fruits = ['Apple', 'Banana', 'Orange', 'Mango'];

let [first, second] = fruits;
console.log('First:', first, 'Second:', second);

let [a, b, ...rest] = fruits;
console.log('First:', a, 'Second:', b, 'Rest:', rest);

// 2. Skipping elements in destructuring
console.log('\n--- Skipping Elements ---');
let [one, , three] = fruits;
console.log('First:', one, 'Third:', three);

// 3. Object destructuring
console.log('\n--- Object Destructuring ---');
let person = {
  name: 'John',
  age: 30,
  country: 'USA',
  city: 'New York'
};

let { name, age } = person;
console.log('Name:', name, 'Age:', age);

let { name: personName, country: personCountry } = person;
console.log('Person Name:', personName, 'Country:', personCountry);

// 4. Destructuring with default values
console.log('\n--- Destructuring with Defaults ---');
let [x, y, z = 0] = [10, 20];
console.log('x:', x, 'y:', y, 'z:', z);

let { job = 'Unknown' } = person;
console.log('Job:', job);

// 5. Spread operator with arrays
console.log('\n--- Spread Operator (Arrays) ---');
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

let combined = [...arr1, ...arr2];
console.log('Combined:', combined);

let expanded = [0, ...arr1, 3.5, ...arr2, 7];
console.log('Expanded:', expanded);

// 6. Spread operator with objects
console.log('\n--- Spread Operator (Objects) ---');
let obj1 = { a: 1, b: 2 };
let obj2 = { c: 3, d: 4 };

let mergedObj = { ...obj1, ...obj2 };
console.log('Merged object:', mergedObj);

let objWithExtra = { ...person, occupation: 'Developer', age: 31 };
console.log('Object with modifications:', objWithExtra);

// 7. Spread in function calls
console.log('\n--- Spread in Function Calls ---');
function sum(a, b, c) {
  return a + b + c;
}
let numbers = [5, 10, 15];
console.log('sum(...numbers):', sum(...numbers));

// 8. Rest parameters in functions
console.log('\n--- Rest Parameters ---');
function printAll(...args) {
  args.forEach((arg, index) => {
    console.log(`Arg ${index}: ${arg}`);
  });
}
printAll('Hello', 'World', 123, true);

// 9. Nested destructuring
console.log('\n--- Nested Destructuring ---');
let data = {
  user: {
    name: 'Alice',
    age: 25
  },
  scores: [90, 85, 92]
};

let { user: { name: userName }, scores: [firstScore] } = data;
console.log('User Name:', userName, 'First Score:', firstScore);
