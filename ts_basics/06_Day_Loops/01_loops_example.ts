// ===== DAY 6: LOOPS & ITERATION WITH TYPES =====
// Iteration in TypeScript remains similar but with type safety

console.log('--- Typed Loops ---');

// Standard for loop
for (let i: number = 0; i < 5; i++) {
  console.log('Index:', i);
}

// FOR OF loop with typed array
const fruits6: string[] = ["Apple", "Banana", "Orange"];
for (const fruit of fruits6) {
  console.log('Fruit:', fruit);  // fruit is string
}

// FOR IN loop (not recommended for arrays)
const obj6: Record<string, number> = { a: 1, b: 2, c: 3 };
for (const key in obj6) {
  console.log(`${key}: ${obj6[key]}`);
}

// WHILE loop
let count6: number = 0;
while (count6 < 3) {
  console.log('Count:', count6);
  count6++;
}

// ITERATOR PROTOCOL
console.log('\n--- Custom Iterables ---');

interface Iterable<T> {
  [Symbol.iterator](): Iterator<T>;
}

class Range6 implements Iterable<number> {
  constructor(private from: number, private to: number) {}
  
  [Symbol.iterator](): Iterator<number> {
    let current = this.from;
    const to = this.to;
    
    return {
      next(): IteratorResult<number> {
        if (current < to) {
          return { value: current++, done: false };
        }
        return { done: true, value: undefined };
      }
    };
  }
}

const range6 = new Range6(1, 4);
for (const num of range6) {
  console.log('Range value:', num);
}

// GENERATORS
console.log('\n--- Generators ---');

function* generateNumbers(): Generator<number> {
  yield 1;
  yield 2;
  yield 3;
}

for (const num of generateNumbers()) {
  console.log('Generated:', num);
}

// HIGHER ORDER FUNCTIONS WITH TYPES
console.log('\n--- Type-Safe Iterations ---');

const numbers6: number[] = [1, 2, 3, 4, 5];

// forEach with typed callback
numbers6.forEach((num: number, index: number): void => {
  console.log(`[${index}]: ${num}`);
});

// map with type inference
const squared6 = numbers6.map((n) => n * n);  // n is number, result is number[]

// filter with type guard
const evens6 = numbers6.filter((n): n is number => n % 2 === 0);

// reduce with explicit types
const sum6 = numbers6.reduce((acc: number, n: number): number => acc + n, 0);
console.log('Sum:', sum6);

// ⚠️ KEY DIFFERENCES:
console.log('\n--- TS vs JS: Loops ---');
console.log('JS: Loop variables are dynamically typed');
console.log('TS: Loop variables have explicit types');
console.log('JS: No type checking for iterated values');
console.log('TS: Iterated values have known types');
console.log('JS: Can iterate anything, results in runtime errors');
console.log('TS: Only iterates objects implementing Iterable');
console.log('JS: Array methods with no type hints');
console.log('TS: Array methods preserve type information');
console.log('JS: Generators work but types are implicit');
console.log('TS: Generators have explicit yield types');
