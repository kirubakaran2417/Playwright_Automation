// ===== DAY 5: ARRAYS & COLLECTIONS =====
// TypeScript makes arrays type-safe and predictable

console.log('--- Typed Arrays ---');

// JavaScript: Any array can have mixed types
// const mixed = [1, "string", true, null];  // Confusing!

// TypeScript: Single type arrays
const numbers1: number[] = [1, 2, 3, 4, 5];
const strings1: string[] = ["a", "b", "c"];
const booleans1: Array<boolean> = [true, false, true];

console.log('Numbers:', numbers1);
console.log('Strings:', strings1);
console.log('Booleans:', booleans1);

// ARRAY OF OBJECTS
console.log('\n--- Array of Objects ---');

interface ProductInterface {
  id: number;
  name: string;
  price: number;
}

const products: ProductInterface[] = [
  { id: 1, name: "Laptop", price: 1000 },
  { id: 2, name: "Mouse", price: 25 },
  { id: 3, name: "Keyboard", price: 75 }
];

console.log('Products:', products);

// READONLY ARRAYS
console.log('\n--- Readonly Arrays ---');

const readonlyNumbers2: readonly number[] = [1, 2, 3];
// readonlyNumbers2.push(4);  // ERROR: Property 'push' does not exist
console.log('Readonly:', readonlyNumbers2);

// TUPLE - Fixed length, specific types
console.log('\n--- Tuples ---');

const coordinate: [number, number] = [10, 20];
const [x1, y1] = coordinate;
console.log('Coordinate:', x1, y1);

// With labels (TypeScript 4.0+)
type ResponseType = [status: number, message: string, data: unknown];
const responseData: ResponseType = [200, "OK", { id: 1 }];
console.log('Response:', responseData);

// UNION in arrays
console.log('\n--- Union Types in Arrays ---');

const mixed5: (string | number)[] = [1, "hello", 2, "world"];
console.log('Mixed array:', mixed5);

// NEVER type for empty arrays (advanced)
const empty5: never[] = [];
// empty5.push(1);  // ERROR: cannot push to never array

// ARRAY METHODS WITH TYPE SAFETY
console.log('\n--- Type-Safe Array Methods ---');

const nums5 = [1, 2, 3, 4, 5];

// map: input and output types inferred
const doubled5 = nums5.map((n): number => n * 2);
console.log('Doubled:', doubled5);

// filter: returns same type
const evens5 = nums5.filter((n): boolean => n % 2 === 0);
console.log('Evens:', evens5);

// reduce: need to specify accumulator type
const sum5 = nums5.reduce((acc: number, n: number): number => acc + n, 0);
console.log('Sum:', sum5);

// find: returns T | undefined (not just any)
const firstEven5 = nums5.find((n): boolean => n % 2 === 0);
console.log('First even:', firstEven5);

// SPREAD OPERATOR
console.log('\n--- Spread Operator ---');

const arr1a: number[] = [1, 2, 3];
const arr2a: number[] = [4, 5, 6];
const combined5: number[] = [...arr1a, ...arr2a];
console.log('Combined:', combined5);

// ⚠️ KEY DIFFERENCES:
console.log('\n--- TS vs JS: Arrays ---');
console.log('JS: Arrays can have mixed types, no type checking');
console.log('TS: Arrays are homogeneous or explicitly typed unions');
console.log('JS: Array methods don\'t help with type inference');
console.log('TS: Array methods preserve and infer types correctly');
console.log('JS: Easy to corrupt array with wrong types');
console.log('TS: Compiler prevents adding incompatible types');
console.log('JS: No concept of read-only arrays');
console.log('TS: Can protect arrays from modification');
console.log('JS: Tuple is just an array with no length/type guarantee');
console.log('TS: Tuples are fixed-length with specific types at each position');
