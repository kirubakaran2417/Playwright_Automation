// ===== DAY 4: FUNCTIONS WITH TYPES =====
// TypeScript brings order to function parameters and return types

console.log('--- Function Type Annotations ---');

// JavaScript: No type information
// const add = (a, b) => a + b;  // Could pass anything!

// TypeScript: Explicit types
const add1 = (a: number, b: number): number => {
  return a + b;
};

console.log('5 + 3 =', add1(5, 3));
// add1("hello", "world");  // ERROR: Argument of type 'string' is not assignable to parameter of type 'number'

// OPTIONAL PARAMETERS
console.log('\n--- Optional Parameters ---');

const greet1 = (name: string, greeting?: string): string => {
  return `${greeting || "Hello"}, ${name}!`;
};

console.log(greet1("Alice"));
console.log(greet1("Bob", "Hi"));

// DEFAULT PARAMETERS
console.log('\n--- Default Parameters ---');

const createUser = (name: string, role: string = "user"): void => {
  console.log(`User: ${name}, Role: ${role}`);
};

createUser("Alice");
createUser("Bob", "admin");

// REST PARAMETERS WITH TYPES
console.log('\n--- Rest Parameters ---');

const sum1 = (...numbers: number[]): number => {
  return numbers.reduce((a, b) => a + b, 0);
};

console.log('sum(1, 2, 3):', sum1(1, 2, 3));
console.log('sum(5, 10, 15, 20):', sum1(5, 10, 15, 20));

// FUNCTION TYPES (defining function signature)
console.log('\n--- Function Types ---');

type MathOperation = (a: number, b: number) => number;

const multiply1: MathOperation = (a, b) => a * b;
const divide1: MathOperation = (a, b) => a / b;

console.log('5 * 3 =', multiply1(5, 3));
console.log('15 / 3 =', divide1(15, 3));

// OVERLOADING (multiple signatures)
console.log('\n--- Function Overloading ---');

function format(value: string): string;
function format(value: number): string;
function format(value: boolean): string;
function format(value: any): string {
  if (typeof value === "string") return value.toUpperCase();
  if (typeof value === "number") return value.toFixed(2);
  if (typeof value === "boolean") return value ? "YES" : "NO";
  return "";
}

console.log('format("hello"):', format("hello"));
console.log('format(3.14159):', format(3.14159));
console.log('format(true):', format(true));

// GENERIC FUNCTIONS
console.log('\n--- Generic Functions ---');

const last = <T,>(array: T[]): T => {
  return array[array.length - 1];
};

console.log('Last:', last([1, 2, 3]));        // number
console.log('Last:', last(["a", "b", "c"])); // string

// ARROW FUNCTIONS WITH TYPES
console.log('\n--- Arrow Functions ---');

const map1 = <T, U,>(array: T[], transform: (item: T) => U): U[] => {
  return array.map(transform);
};

const doubled1 = map1([1, 2, 3], (n) => n * 2);
console.log('Doubled:', doubled1);

// ⚠️ KEY DIFFERENCES:
console.log('\n--- TS vs JS: Functions ---');
console.log('JS: No parameter type checking, returns can be anything');
console.log('TS: Parameters and returns are type-checked');
console.log('JS: IDE can\'t help with function parameters');
console.log('TS: IDE autocomplete suggests correct parameters');
console.log('JS: Easy to accidentally pass wrong types');
console.log('TS: Compiler prevents type mismatches');
console.log('JS: Function overloading requires manual type checking');
console.log('TS: Overloading syntax is clean and type-safe');
