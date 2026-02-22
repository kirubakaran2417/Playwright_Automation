// ===== DAY 2: DATA TYPES - PRIMITIVES & ADVANCED TYPES =====
// TypeScript provides more granular type control than JavaScript

console.log('--- TypeScript Primitive Types ---');

// Basic types (same as JavaScript, but typed in TS)
let tsString: string = "Hello";
let tsNumber: number = 42;
let tsBoolean: boolean = true;
let tsNull: null = null;
let tsUndefined: undefined = undefined;

// Literal types (NEW in TypeScript)
console.log('\n--- Literal Types ---');
let literalDirection: "north" | "south" | "east" | "west" = "north";
// literalDirection = "up";  // ERROR: Type '"up"' is not assignable

let literalStatus: "active" | "inactive" = "active";

// ✨ ADVANTAGE: Forces specific values, prevents typos
console.log('Direction:', literalDirection);
console.log('Status:', literalStatus);

// READONLY arrays
console.log('\n--- Readonly Arrays ---');
type ReadonlyArrayType<T> = readonly T[];

const readonlyNumbers1: readonly number[] = [1, 2, 3];
// readonlyNumbers1.push(4);  // ERROR: Property 'push' does not exist
console.log('Readonly array:', readonlyNumbers1);

// Regular array in TypeScript
const mutableNumbers: number[] = [1, 2, 3];
mutableNumbers.push(4);
console.log('Mutable array:', mutableNumbers);

// TUPLE types (NEW in TypeScript)
console.log('\n--- Tuple Types ---');
// Fixed-length array with specific types at each position
let tuple: [string, number, boolean] = ["John", 30, true];
console.log('Tuple:', tuple);

// Tuple with rest element
let flexibleTuple: [string, ...number[]] = ["ID", 1, 2, 3, 4];
console.log('Flexible tuple:', flexibleTuple);

// ENUM (NEW in TypeScript)
console.log('\n--- Enums ---');
enum ColorEnum {
  Red = 0,
  Green = 1,
  Blue = 2
}

let chosenColor: ColorEnum = ColorEnum.Blue;
console.log('Chosen color:', chosenColor);  // 2

// String Enum
enum DirectionEnum {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT"
}

let movement: DirectionEnum = DirectionEnum.Up;
console.log('Movement:', movement);  // "UP"

// ✨ ADVANTAGE: Type-safe constants, prevents invalid values
// JavaScript would allow any string/number, TypeScript restricts to enum values

// UNKNOWN type (safer than ANY)
console.log('\n--- Unknown vs Any ---');

// JavaScript: no type checking
let jsUnknown: any = "Hello";
let jsResult = jsUnknown.toUpperCase();  // Could crash at runtime

// TypeScript: must check before using
let tsUnknown: unknown = "Hello";
// let tsResult = tsUnknown.toUpperCase();  // ERROR: Object is of type 'unknown'

// Must check first
if (typeof tsUnknown === "string") {
  let tsResult = tsUnknown.toUpperCase();
  console.log('Result:', tsResult);
}

// NEVER type (function never returns)
console.log('\n--- Never Type ---');

const throwError = (message: string): never => {
  throw new Error(message);
};

const infiniteLoop = (): never => {
  while (true) {}
};

// VOID type
console.log('\n--- Void Type ---');

const logMessage = (message: string): void => {
  console.log(message);
  // void functions don't return anything
};

logMessage("TypeScript function with void return");

// ⚠️ KEY DIFFERENCES:
console.log('\n--- TS vs JS: Data Types ---');
console.log('JS: All values have runtime types, checked dynamically');
console.log('TS: All values have compile-time types, checked statically');
console.log('JS: No tuple support, arrays can have mixed types');
console.log('TS: Tuple support, fixed-length arrays with type safety');
console.log('JS: No enums, must use objects or constants');
console.log('TS: Enums for type-safe constant collections');
console.log('JS: Any type is the default (implicit)');
console.log('TS: Unknown requires type checking (safer)');
console.log('JS: Functions always return something or undefined');
console.log('TS: Void explicitly marks functions that return nothing');
