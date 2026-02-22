// ===== DAY 9: HIGHER ORDER FUNCTIONS =====
// Learning: map, filter, reduce, forEach, find, some, every

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 1. map - transform each element
console.log('--- map() ---');
let doubled = numbers.map(n => n * 2);
console.log('Double each number:', doubled);

let squared = numbers.map(n => n * n);
console.log('Square each number:', squared);

// 2. filter - select elements based on condition
console.log('\n--- filter() ---');
let evenNumbers = numbers.filter(n => n % 2 === 0);
console.log('Even numbers:', evenNumbers);

let largeNumbers = numbers.filter(n => n > 5);
console.log('Numbers > 5:', largeNumbers);

// 3. reduce - accumulate values
console.log('\n--- reduce() ---');
let sum = numbers.reduce((acc, n) => acc + n, 0);
console.log('Sum of all:', sum);

let product = numbers.reduce((acc, n) => acc * n, 1);
console.log('Product of all:', product);

let maxNumber = numbers.reduce((max, n) => n > max ? n : max);
console.log('Maximum number:', maxNumber);

// 4. forEach - execute function for each element
console.log('\n--- forEach() ---');
console.log('Numbers using forEach:');
numbers.forEach((n, index) => {
  console.log(`Index ${index}: ${n}`);
});

// 5. find - return first element matching condition
console.log('\n--- find() ---');
let firstEven = numbers.find(n => n % 2 === 0);
console.log('First even number:', firstEven);

let firstGreaterThan5 = numbers.find(n => n > 5);
console.log('First number > 5:', firstGreaterThan5);

// 6. findIndex - return index of first matching element
console.log('\n--- findIndex() ---');
let indexOfFirstEven = numbers.findIndex(n => n % 2 === 0);
console.log('Index of first even:', indexOfFirstEven);

// 7. some - check if any element matches condition
console.log('\n--- some() ---');
let hasEven = numbers.some(n => n % 2 === 0);
console.log('Has even numbers:', hasEven);

let hasNegative = numbers.some(n => n < 0);
console.log('Has negative numbers:', hasNegative);

// 8. every - check if all elements match condition
console.log('\n--- every() ---');
let allPositive = numbers.every(n => n > 0);
console.log('All positive:', allPositive);

let allEven = numbers.every(n => n % 2 === 0);
console.log('All even:', allEven);

// 9. includes - check if array contains value
console.log('\n--- includes() ---');
console.log('Includes 5:', numbers.includes(5));
console.log('Includes 15:', numbers.includes(15));

// 10. Chaining methods
console.log('\n--- Chaining Methods ---');
let result = numbers
  .filter(n => n % 2 === 0)    // Get even numbers
  .map(n => n * n)              // Square them
  .reduce((a, b) => a + b, 0);  // Sum them
console.log('Even squares sum:', result);
