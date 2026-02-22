// ===== DAY 1: INTRODUCTION - VARIABLES & TYPES =====
// TypeScript adds static typing to JavaScript

// 🔴 JAVASCRIPT vs 🔵 TYPESCRIPT

// 🔴 JavaScript: Types are determined at runtime
let jsName = "John";      // Could later assign a number
jsName = 123;             // No error - JavaScript allows this
console.log(jsName);

// 🔵 TypeScript: Types are checked at compile-time (BEFORE running)
let tsName: string = "John";    // Explicit type annotation
// tsName = 123;                // ERROR: Type 'number' is not assignable to type 'string'
console.log(tsName);

// TYPE ANNOTATIONS
console.log('\n--- TypeScript Type Annotations ---');

let age: number = 25;           // Must be a number
let isActive: boolean = true;   // Must be a boolean
let email: string = "john@example.com";  // Must be a string

console.log('Name:', tsName);
console.log('Age:', age);
console.log('Active:', isActive);

// ✨ KEY DIFFERENCE: Type Safety
// JavaScript errors appear at RUNTIME
// TypeScript errors appear at COMPILE-TIME (during development)

// TYPE INFERENCE
console.log('\n--- Type Inference ---');
// TypeScript can infer types without explicit annotations
let inferredCountry = "USA";           // TypeScript infers type as string
// inferredCountry = 123;               // ERROR: Type 'number' is not assignable to type 'string'

let inferredScore = 95;                // TypeScript infers type as number
// inferredScore = "high";              // ERROR: Type 'string' is not assignable to type 'number'

console.log('Country:', inferredCountry);
console.log('Score:', inferredScore);

// MULTIPLE TYPES - UNION TYPES
console.log('\n--- Union Types ---');
let id: string | number;       // Can be either string or number
id = 101;
console.log('ID (number):', id);
id = "ABC-123";
console.log('ID (string):', id);
// id = true;                   // ERROR: Type 'boolean' is not assignable

// ANY TYPE - Avoid when possible!
console.log('\n--- Any Type (Use Sparingly!) ---');
let dynamicValue: any = "Hello";
dynamicValue = 123;
dynamicValue = true;
// This defeats the purpose of TypeScript - use only when necessary

// CONST DECLARATIONS
console.log('\n--- Const with Types ---');
const MATH_PI: number = 3.14159;
const MATH_MAX_USERS: number = 100;
const MATH_GREETING: string = "Hello, TypeScript!";

console.log('PI:', MATH_PI);
console.log('MAX_USERS:', MATH_MAX_USERS);
console.log('GREETING:', MATH_GREETING);

// ✨ BENEFITS OF TYPESCRIPT:
console.log('\n--- Benefits of TypeScript ---');
console.log('1. Early error detection (compile-time vs runtime)');
console.log('2. Better IDE support and autocomplete');
console.log('3. Self-documenting code (types tell you what\'s expected)');
console.log('4. Refactoring confidence (catch breaking changes)');
console.log('5. Better for large codebases and teams');

// ⚠️ DIFFERENCES:
console.log('\n--- Main Differences ---');
console.log('JavaScript: Dynamic typing, flexible but error-prone');
console.log('TypeScript: Static typing, strict but catches bugs early');
console.log('JavaScript: Runs directly in browsers/Node.js');
console.log('TypeScript: Must be compiled to JavaScript first');
console.log('JavaScript: Fewer setup requirements');
console.log('TypeScript: Requires build tools and configuration');
