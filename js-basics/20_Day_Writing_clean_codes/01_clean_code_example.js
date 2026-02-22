// ===== DAY 20: WRITING CLEAN CODE =====
// Learning: Best practices, naming conventions, code organization

console.log('=== DAY 20: WRITING CLEAN CODE ===\n');

// 1. NAMING CONVENTIONS
console.log('--- 1. Naming Conventions ---');

// ✅ Good variable names
let userAge = 25;
let isActive = true;
let totalPrice = 99.99;
let getUserById = function() {};

// ❌ Bad variable names
// let ua = 25;  // Too short, unclear
// let x = true;  // Single letter
// let tp = 99.99;  // Abbreviations
// let get = function() {};  // Too generic

console.log('Good names: userAge, isActive, totalPrice, getUserById');
console.log('Bad names: ua, x, tp, get');

// 2. FUNCTION BEST PRACTICES
console.log('\n--- 2. Function Best Practices ---');

// ✅ Good: Single responsibility, descriptive name
function calculateTotalPrice(items) {
  return items.reduce((sum, item) => sum + item.price, 0);
}

// ✅ Good: Default parameters
function greetUser(name = 'Guest', language = 'en') {
  const greetings = {
    en: 'Hello',
    es: 'Hola',
    fr: 'Bonjour'
  };
  return `${greetings[language]}, ${name}!`;
}

console.log(greetUser('Alice', 'en'));
console.log(greetUser('Bob', 'es'));

// ✅ Good: Pure function (no side effects)
function add(a, b) {
  return a + b;
}

// ❌ Bad: Function with side effects
let globalSum = 0;
function addWithSideEffect(a, b) {
  globalSum = a + b;  // Modifies global state
  return globalSum;
}

console.log('Pure function add(5, 3):', add(5, 3));

// 3. COMMENTS AND DOCUMENTATION
console.log('\n--- 3. Comments ---');

/**
 * Calculates the factorial of a number
 * @param {number} n - The number to calculate factorial for
 * @returns {number} The factorial of n
 * @throws {Error} If n is negative
 */
function factorial(n) {
  if (n < 0) {
    throw new Error('Factorial is not defined for negative numbers');
  }
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}

console.log('factorial(5):', factorial(5));

// 4. CONST vs LET
console.log('\n--- 4. const vs let ---');

// ✅ Use const by default
const PI = 3.14159;
const MAX_USERS = 100;

// Use let only when value needs to change
let counter = 0;
counter++;
counter++;

// ❌ Avoid var (function-scoped, can be redeclared)
// var oldStyle = 'avoid this';

console.log('PI:', PI, 'MAX_USERS:', MAX_USERS, 'counter:', counter);

// 5. AVOID MAGIC NUMBERS
console.log('\n--- 5. Avoid Magic Numbers ---');

// ❌ Bad: Magic numbers
// if (age > 18) { ... }
// if (price > 100) { ... }

// ✅ Good: Named constants
const ADULT_AGE = 18;
const PREMIUM_PRICE_THRESHOLD = 100;

function isAdult(age) {
  return age >= ADULT_AGE;
}

console.log('Is 20 adult?', isAdult(20));

// 6. DRY PRINCIPLE (Don't Repeat Yourself)
console.log('\n--- 6. DRY Principle ---');

// ❌ Bad: Repetitive code
// console.log(user1.firstName + ' ' + user1.lastName);
// console.log(user2.firstName + ' ' + user2.lastName);
// console.log(user3.firstName + ' ' + user3.lastName);

// ✅ Good: Reusable function
function getFullName(user) {
  return `${user.firstName} ${user.lastName}`;
}

let users = [
  { firstName: 'John', lastName: 'Doe' },
  { firstName: 'Jane', lastName: 'Smith' },
  { firstName: 'Bob', lastName: 'Johnson' }
];

users.forEach(user => {
  console.log(getFullName(user));
});

// 7. ERROR HANDLING
console.log('\n--- 7. Error Handling ---');

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  if (!email) {
    throw new Error('Email is required');
  }
  
  if (!emailRegex.test(email)) {
    throw new Error('Invalid email format');
  }
  
  return true;
}

try {
  validateEmail('valid@example.com');
  console.log('Email is valid');
} catch (error) {
  console.log('Error:', error.message);
}

// 8. ARRAY AND OBJECT METHODS (Functional style)
console.log('\n--- 8. Functional Style ---');

let numbers = [1, 2, 3, 4, 5, 6];

// ✅ Good: Functional approach
let evenSquares = numbers
  .filter(n => n % 2 === 0)
  .map(n => n * n);

console.log('Even squares:', evenSquares);

// ❌ Bad: Imperative approach
// let result = [];
// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] % 2 === 0) {
//     result.push(numbers[i] * numbers[i]);
//   }
// }

// 9. EARLY RETURN
console.log('\n--- 9. Early Return ---');

// ❌ Bad: Nested conditions
// function processUser(user) {
//   if (user) {
//     if (user.isActive) {
//       if (user.age >= 18) {
//         // Process user
//       }
//     }
//   }
// }

// ✅ Good: Early return
function processUser(user) {
  if (!user) return;
  if (!user.isActive) return;
  if (user.age < 18) return;
  
  console.log('Processing user:', user.name);
}

processUser({ name: 'John', isActive: true, age: 25 });

// 10. ORGANIZE CODE IN MODULES
console.log('\n--- 10. Module Pattern ---');

// Create a module for user operations
const UserModule = (() => {
  // Private functions
  function validateUser(user) {
    return user && user.name && user.email;
  }
  
  // Public API
  return {
    create: function(userData) {
      if (!validateUser(userData)) {
        throw new Error('Invalid user data');
      }
      return { id: Date.now(), ...userData };
    },
    
    getEmail: function(user) {
      return user.email;
    }
  };
})();

let newUser = UserModule.create({ name: 'Alice', email: 'alice@example.com' });
console.log('Created user:', newUser);

console.log('\n=== KEY TAKEAWAYS ===');
console.log('✅ Use meaningful variable names');
console.log('✅ Functions should do one thing');
console.log('✅ Use const by default, let when needed');
console.log('✅ Write comments for why, not what');
console.log('✅ Handle errors properly');
console.log('✅ Keep code DRY (Don\'t Repeat Yourself)');
console.log('✅ Use functional programming paradigms');
console.log('✅ Avoid magic numbers');
console.log('✅ Early returns for cleaner code');
console.log('✅ Organize code in modules');
