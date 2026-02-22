// ===== DAY 14: ERROR HANDLING =====
// Learning: Try-catch-finally and error types

// 1. Try-catch block
console.log('--- Try-Catch ---');
try {
  let x = 10;
  console.log('Inside try block:', x);
  y = 20;  // This will cause an error (y is not declared)
} catch (error) {
  console.log('Caught error:', error.message);
}
console.log('Program continues...');

// 2. Try-catch-finally
console.log('\n--- Try-Catch-Finally ---');
try {
  console.log('Trying to access undefined.method()');
  undefined.method();
} catch (error) {
  console.log('Error caught:', error.message);
} finally {
  console.log('Finally block always executes');
}

// 3. Different error types
console.log('\n--- Different Error Types ---');

// ReferenceError
try {
  console.log(undefinedVariable);
} catch (error) {
  console.log('ReferenceError:', error.name, '-', error.message);
}

// TypeError
try {
  let num = 5;
  num.toUpperCase();  // Numbers don't have toUpperCase
} catch (error) {
  console.log('TypeError:', error.name, '-', error.message);
}

// SyntaxError (usually caught during parsing)
// Skipping this as it prevents execution

// RangeError
try {
  let arr = new Array(-1);  // Invalid array size
} catch (error) {
  console.log('RangeError:', error.name, '-', error.message);
}

// 4. Throwing custom errors
console.log('\n--- Throwing Custom Errors ---');
function divide(a, b) {
  if (b === 0) {
    throw new Error('Division by zero is not allowed');
  }
  return a / b;
}

try {
  console.log('10 / 2 =', divide(10, 2));
  console.log('10 / 0 =', divide(10, 0));  // Will throw error
} catch (error) {
  console.log('Error caught:', error.message);
}

// 5. Validation with errors
console.log('\n--- Validation with Errors ---');
function validateAge(age) {
  if (typeof age !== 'number') {
    throw new TypeError('Age must be a number');
  }
  if (age < 0 || age > 150) {
    throw new RangeError('Age must be between 0 and 150');
  }
  return age;
}

try {
  console.log('Validating age 25:', validateAge(25));
  console.log('Validating age -5:', validateAge(-5));
} catch (error) {
  console.log(`${error.name}: ${error.message}`);
}

// 6. Nested try-catch
console.log('\n--- Nested Try-Catch ---');
try {
  try {
    throw new Error('Inner error');
  } catch (error) {
    console.log('Inner catch:', error.message);
    throw new Error('Re-throwing from inner');
  }
} catch (error) {
  console.log('Outer catch:', error.message);
}

// 7. Error object properties
console.log('\n--- Error Properties ---');
try {
  throw new Error('Sample error');
} catch (error) {
  console.log('Message:', error.message);
  console.log('Name:', error.name);
  console.log('Stack:', error.stack);
}

// 8. Custom Error class
console.log('\n--- Custom Error Class ---');
class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = 'ValidationError';
  }
}

try {
  throw new ValidationError('Input validation failed');
} catch (error) {
  console.log(`${error.name}: ${error.message}`);
}
