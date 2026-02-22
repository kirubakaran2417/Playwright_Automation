// ===== DAY 14: ERROR HANDLING WITH TYPES =====
// TypeScript makes error handling more robust

console.log('--- Typed Error Handling ---');

// CUSTOM Error class
class ValidationError extends Error {
  constructor(
    public field: string,
    message: string
  ) {
    super(message);
    this.name = "ValidationError";
  }
}

const validateAge = (age: unknown): age is number => {
  if (typeof age !== "number" || age < 0 || age > 150) {
    throw new ValidationError("age", "Age must be between 0 and 150");
  }
  return true;
};

try {
  validateAge(-5);
} catch (error) {
  if (error instanceof ValidationError) {
    console.log(`Validation error in ${error.field}: ${error.message}`);
  }
}

// RESULT TYPE (functional error handling)
console.log('\n--- Result Type Pattern ---');

type Result<T, E> = { ok: true; value: T } | { ok: false; error: E };

const divide = (a: number, b: number): Result<number, string> => {
  if (b === 0) {
    return { ok: false, error: "Division by zero" };
  }
  return { ok: true, value: a / b };
};

const result = divide(10, 2);
if (result.ok) {
  console.log('Result:', result.value);
} else {
  console.log('Error:', result.error);
}

// OPTION TYPE (null safety)
console.log('\n--- Option Type ---');

type Option<T> = T | null;

const find = <T,>(arr: T[], predicate: (item: T) => boolean): Option<T> => {
  return arr.find(predicate) ?? null;
};

const item = find([1, 2, 3, 4], (n) => n > 5);
if (item !== null) {
  console.log('Found:', item);
} else {
  console.log('Not found');
}

// ⚠️ KEY DIFFERENCES:
console.log('\n--- TS vs JS: Error Handling ---');
console.log('JS: Try-catch is the only pattern, errors are untyped');
console.log('TS: Multiple patterns for error handling with types');
console.log('JS: instanceof checks work but are manual');
console.log('TS: Type narrowing with instanceof is automatic');
console.log('JS: No Result type, must use exceptions or null');
console.log('TS: Result/Option types make error handling explicit');
console.log('JS: Null checks are manual');
console.log('TS: Optional types (?/null) are explicit and checked');
