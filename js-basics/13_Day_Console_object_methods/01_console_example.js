// ===== DAY 13: CONSOLE OBJECT METHODS =====
// Learning: Various console methods for debugging

// 1. console.log() - basic output
console.log('--- console.log() ---');
console.log('Simple message');
console.log('Multiple values:', 'value1', 'value2', 123);

// 2. console.error() - error messages (usually red)
console.log('\n--- console.error() ---');
console.error('This is an error message');

// 3. console.warn() - warning messages (usually yellow)
console.log('\n--- console.warn() ---');
console.warn('This is a warning message');

// 4. console.info() - information messages
console.log('\n--- console.info() ---');
console.info('This is an info message');

// 5. console.table() - display as table
console.log('\n--- console.table() ---');
let students = [
  { name: 'Alice', age: 20, grade: 'A' },
  { name: 'Bob', age: 21, grade: 'B' },
  { name: 'Charlie', age: 19, grade: 'A' }
];
console.table(students);

// 6. console.assert() - test assertion
console.log('\n--- console.assert() ---');
let age = 15;
console.assert(age >= 18, 'Age must be at least 18');
console.assert(age > 0, 'Age must be positive');

// 7. console.clear() - clear console (would clear in browser)
// console.clear();

// 8. console.count() - count how many times called
console.log('\n--- console.count() ---');
console.count('Function call');
console.count('Function call');
console.count('Function call');

// 9. console.time() and console.timeEnd() - measure performance
console.log('\n--- console.time() ---');
console.time('Loop Performance');
let sum = 0;
for (let i = 0; i < 1000000; i++) {
  sum += i;
}
console.timeEnd('Loop Performance');

// 10. console.group() - group related logs
console.log('\n--- console.group() ---');
console.group('Person Details');
console.log('Name: John');
console.log('Age: 30');
console.log('Country: USA');
console.groupEnd();

// 11. console.trace() - show stack trace
console.log('\n--- console.trace() ---');
function functionA() {
  functionB();
}
function functionB() {
  console.trace('Trace point');
}
functionA();

// 12. Template logging
console.log('\n--- Template Logging ---');
let name = 'Alice';
let score = 95;
console.log(`Student ${name} scored ${score}%`);

// 13. Object property logging
console.log('\n--- Object Logging ---');
let person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30,
  email: 'john@example.com'
};
console.log('Person object:');
console.log(person);
console.log('%cStyled text', 'color: blue; font-weight: bold');
